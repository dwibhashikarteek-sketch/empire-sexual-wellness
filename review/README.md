# Empire Sexual Wellness India upgrade

Prepared 31 October 2026 for the existing GitHub Pages URL:
https://dwibhashikarteek-sketch.github.io/empire-sexual-wellness/

## Deliverables

- `website.zip`: ready for the repository's existing GitHub Pages workflow. Replace the repository-root file with this exact name. Do not put it inside another folder.
- `empire-upgrade-source.zip`: editable `site/` directory, deployment workflow, verification script, preservation manifest and test report.
- `homepage-preview.png`: desktop preview of the upgraded homepage.

## Implemented

Emerald, ivory and champagne design with responsive service cards, physician profile, medical consultation, individual coaching, psychosexual counselling and couples coaching pages. Proposed fees are ₹1,000 / ₹2,499 / ₹3,499 / ₹4,499 per session. An appointment information page explains privacy and consent before linking to WhatsApp +91 8374888794. No health forms, payment collection, tracking or patient database were introduced.

All 412 original HTML paths remain. The 129 English topic guides, Hindi/Telugu summaries, sources, clinic logo, search verification tags and existing article URLs remain. New internal links connect retained pages to services and appointments. Existing review notices remain on educational material; it has not received a fresh clinical or translation review.

Canonical URLs, titles, descriptions, Open Graph metadata and WebPage JSON-LD are present on the new/replaced pages. Existing article schemas are retained. The refreshed sitemap contains 418 unique index-page URLs. No unverifiable Physician credential schema, active offer, aggregate rating or success-rate claim was added.

## Evidence and remaining confirmations

The owner supplied Dr. Dwibhashi Kaarteek and APMC/FMR/95256. Matching public Practo and Eka Care listings were inspected. Practo labels registration verified but explicitly labels MBBS education unverified. Direct council verification and degree evidence remain outstanding; the bio states this clearly. Owner-supplied postgraduate credentials are now shown in the English bio with explicit pending-verification labels; recognised specialist status is not inferred.

- https://www.practo.com/kakinada/doctor/dwibhashi-karteek-sexologist
- https://www.eka.care/doctor/dr-dwibhashi-karteek-general-practitioner-kakinada

Before offering confirmed bookings, confirm the actual availability of all four services, the responsible professional and relevant credentials, session lengths, total fees/taxes, payment arrangements, cancellation/refund rules, and the clinical platform and record privacy procedures. The site keeps these as proposed and asks visitors to confirm them before payment.

Consent copy references NMC-published telemedicine guidance; this is not a legal compliance certification:
https://www.nmc.org.in/MCIRest/open/getDocument?path=%2FDocuments%2FPublic%2FPortal%2FLatestNews%2FTelemedicine+140520.pdf

## Verification

- 419 HTML pages parsed; all 412 original paths retained.
- 129 English topics present.
- Every local linked file and fragment checked: no missing targets.
- Canonical count checked; JSON-LD parsed; sitemap XML parsed with unique URLs.
- No HTML forms detected.
- Desktop homepage visually inspected in browser.
- Homepage and appointment page checked at 390px viewport: no horizontal overflow.
- Appointment navigation and exact WhatsApp recipient/prefilled scheduling text verified. No message sent.
- No production deployment, clinical assessment, accessibility audit, Search Console verification or ranking validation performed.

## Publish with authorized GitHub access

1. Keep a copy of the current repository `website.zip` for rollback.
2. Replace repository-root `website.zip` with this deliverable and commit to `main` using an account with authorized write access.
3. The existing `.github/workflows` deployment extracts the archive and publishes it to GitHub Pages. No workflow replacement is required.
4. Verify the successful Actions run and inspect the homepage, four service pages, physician profile, appointment page, language pages and several old article URLs live.
5. Submit the existing sitemap URL in the owner's verified Search Console and Bing Webmaster accounts. Search verification tags were preserved. Indexing/ranking is not guaranteed.

GitHub repository access was confirmed for review preparation. The change is proposed on a separate branch; main and the live site must remain unchanged until explicit publication approval. Merging to main triggers the existing Pages deployment workflow.

## Editing

Edit the HTML/CSS files in `site/`, preserving old paths and search verification tags. Run `verify_upgrade.py` from the extracted source folder to check the site. Repackage the contents of `site/` at the ZIP root, so `index.html`, `assets/` and language directories are directly inside `website.zip`.

Rollback: restore the previous repository-root `website.zip` and let the same Pages workflow redeploy.

## Review preparation

Latest main checked: d036e6abf84e712beced634b3dd0b169dcd7b6cb. Review snapshots show new English pages and shared CSS without changing their completed design. The deployable website.zip remains the authoritative full package. Local offline preview is in outputs/preview/index.html; its links are rewritten locally for viewing only, while production canonicals and metadata remain unchanged in website.zip. No remote preview deployment was created.

## Emerald and gold review refinement

Owner requested emerald and gold. This revision adds a custom architectural hero composition, a shorter mobile introduction, earlier physician identity, and local-only library search with 15 initial links and an accessible show-all toggle. All 129 article links remain in the HTML and available without JavaScript. No search queries are sent to a service. The earlier homepage PNG shows the prior navy design; use preview/index.html for the current design.

Package verification passed (419 pages, 412 original paths, 129 topics, 418 sitemap URLs); library search/expand/collapse/no-results/reset behavioural tests passed. Browser inspection of this latest revision is pending: the current session could not reach localhost and file navigation was blocked. Earlier browser checks apply to the previous design only. A real owner-supplied portrait and confirmation of session details remain outstanding. No merge or deployment is authorized.

## Owner-supplied qualification update

Added P.G. Diploma in Sexology, Psychosexology & Infertility; Fellowship in Sexology, Psychosexology & Infertility; and owner-described Sex Coach / Sex Therapist roles. Awarding institutions, award years, certificates, recognition and scope remain to be verified. No Physician credential schema, specialist badge or verified qualification claim was introduced.

## Physician portrait and profile wording

Owner supplied dr-karteek-2026.png; the original is included unchanged as assets/dr-kaarteek-2026.png. Homepage and physician profile use responsive CSS framing with descriptive alternative text and intrinsic dimensions. No portrait was generated or retouched. The portrait contains owner-supplied clinic branding; its background text is not independent evidence of clinical capabilities.

The requested phrase “verification pending” has been removed from the updated profile. Qualifications and roles are attributed to Dr. Dwibhashi Kaarteek, without a verified badge or new specialist credential schema. Institutions and award years remain absent. Credential status and publication readiness still require owner review. These changes do not authorize a production deployment. Fresh browser visual review remains outstanding due to the previously documented browser access limitations.
