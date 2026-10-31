from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import zipfile,json,xml.etree.ElementTree as ET
import tempfile
root=Path(__file__).parent.parent
tmp=tempfile.TemporaryDirectory()
site=Path(tmp.name)
with zipfile.ZipFile(root/'website.zip') as archive: archive.extractall(site)
base='https://dwibhashikarteek-sketch.github.io/empire-sexual-wellness/'
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.canon=[];self.ids=set();self.ld=False;self.schemas=[];self.forms=0
 def handle_starttag(self,t,a):
  a=dict(a)
  if 'id' in a:self.ids.add(a['id'])
  if t in ('a','link','img','script'):
   u=a.get('href',a.get('src',''))
   if u:self.links.append(u)
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if t=='script' and a.get('type')=='application/ld+json':self.ld=True
  if t=='form':self.forms+=1
 def handle_endtag(self,t):
  if t=='script':self.ld=False
 def handle_data(self,s):
  if self.ld:self.schemas.append(json.loads(s))
errors=[];docs={}
for p in site.rglob('*.html'):
 d=Doc();d.feed(p.read_text(encoding='utf-8'));docs[p.resolve()]=d
 if d.forms:errors.append(f'Unexpected form {p}')
 if len(d.canon)!=1:errors.append(f'Canonical count {p}')
for p,d in docs.items():
 for u in d.links:
  s=urlsplit(u)
  if s.scheme and not u.startswith(base):continue
  if u.startswith(base):target=site/unquote(s.path.removeprefix('/empire-sexual-wellness/'))
  elif s.netloc:continue
  else:target=p.parent/unquote(s.path) if s.path else p
  if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append(f'Missing {u} from {p.relative_to(site)}')
  elif s.fragment and target.resolve() in docs and unquote(s.fragment) not in docs[target.resolve()].ids:errors.append(f'Missing fragment {u}')
old=json.loads((root/'review/preserved-paths.json').read_text())
assert all((site/p).exists() for p in old)
en=list((site/'en').glob('*/index.html'));assert len(en)==129,len(en)
with zipfile.ZipFile(root/'website.zip') as z:assert all(p.replace('\\','/') in z.namelist() for p in old)
sitemap=ET.parse(site/'sitemap.xml');urls=[x.text for x in sitemap.findall('.//{*}loc')]
assert len(urls)==len(set(urls))
report={'html_pages':len(docs),'original_paths_preserved':len(old),'english_topics':len(en),'sitemap_urls':len(urls),'errors':errors}
print(json.dumps(report,indent=2));(root/'review/verification.json').write_text(json.dumps(report,indent=2))
raise SystemExit(bool(errors))
