const fs = require('fs');
const vm = require('vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(require('path').join(__dirname,'../review-source/index.html'), 'utf8');
const groups = [...html.matchAll(/<section id="(?:women|men|shared)">([\s\S]*?)<\/section>/g)].map(match => ({
  hidden: false,
  items: [...match[1].matchAll(/<li><a[^>]*>(.*?)<\/a><\/li>/g)].map(m => ({textContent:m[1],hidden:false})),
  querySelectorAll() { return this.items; }
}));
assert.equal(groups.length, 3);
function element() { return {hidden:true,value:'',textContent:'',handlers:{},attrs:{},addEventListener(k,fn){this.handlers[k]=fn;},setAttribute(k,v){this.attrs[k]=v;}}; }
const nodes = Object.fromEntries(['library-tools','topic-search','library-toggle','library-result-count','library-empty'].map(k=>[k,element()]));
vm.runInNewContext(fs.readFileSync(require('path').join(__dirname,'../review-source/assets/library.js'),'utf8'), {document:{getElementById:k=>nodes[k],querySelectorAll:()=>groups}});
const visible = () => groups.flatMap(g=>g.items).filter(i=>!i.hidden).length;
assert.equal(visible(),15);
assert.equal(nodes['library-tools'].hidden,false);
nodes['library-toggle'].handlers.click();assert.equal(visible(),129);assert.equal(nodes['library-toggle'].attrs['aria-expanded'],'true');
nodes['library-toggle'].handlers.click();assert.equal(visible(),15);
nodes['topic-search'].value='  PAIN  ';nodes['topic-search'].handlers.input();
assert.ok(visible()>0);assert.ok(groups.flatMap(g=>g.items).filter(i=>!i.hidden).every(i=>/pain/i.test(i.textContent)));
assert.equal(nodes['library-toggle'].hidden,true);
nodes['topic-search'].value='zzznomatch';nodes['topic-search'].handlers.input();assert.equal(visible(),0);assert.equal(nodes['library-empty'].hidden,false);
nodes['topic-search'].value='';nodes['topic-search'].handlers.input();assert.equal(visible(),15);assert.equal(nodes['library-empty'].hidden,true);assert.equal(groups.filter(g=>g.hidden).length,0);
console.log('PASS: all 129 topics; collapsed/expanded views; case-insensitive search; empty state; clear-search recovery.');
