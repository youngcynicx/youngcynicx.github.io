# Yu Zhao — Personal research homepage

Bilingual personal website for Yu Zhao (Joey): from materials and battery research toward AI agents, scientific automation, and embodied intelligence.

**Website:** https://youngcynicx.github.io/  
**English:** https://youngcynicx.github.io/en/

## Edit and preview

Requires Node.js 22 or newer. No third-party packages or install step are needed.

```sh
npm run build
npm run check
npm start
```

Open http://127.0.0.1:4173. Rebuild after editing source files.

- `content.mjs`: bilingual copy, project descriptions, publication metadata, contact information.
- `style.css`: colors, typography, responsive layouts, and print styles.
- `scripts/build.mjs`: semantic HTML, language routes, metadata, sitemap, and static output.
- `assets/`: supplied portrait and project workflow illustrations.
- `app.js`: section highlighting and responsive navigation. The page content and project details work without JavaScript; on narrow screens, scrolling reaches all sections.

## Deployment

The GitHub Actions workflow builds and checks the site, then deploys `dist/` to GitHub Pages on every push to `main`. In repository Settings → Pages, select **GitHub Actions** as the publishing source.

If moving to another account or a custom domain, update `profile.origin` in `content.mjs` before building. For a project subpath, also update canonical URLs and language routes. This repository targets an account-level GitHub Pages site.

## Editorial scope

The homepage leads with published battery research, then connects it to open-source AI projects. Embodied intelligence is presented as an emerging research direction, without claiming completed robotics results. Project illustrations show concepts and workflows; implementation status is described separately and linked to the repositories.

Public source links:

- [ChemClaw-Lab](https://github.com/joeyzyum-dev/ChemClaw-Lab)
- [ChemClaw-PhoneNode](https://github.com/youngcynicx/ChemClaw-PhoneNode)
- [Auto-DFT](https://github.com/youngcynicx/Auto-DFT)
- [Auto-Modeling](https://github.com/youngcynicx/auto-modeling)
- [Energy Storage Materials article](https://doi.org/10.1016/j.ensm.2026.105323)
- [Advanced Energy Materials article](https://doi.org/10.1002/aenm.202501152)
- [Nano Letters article](https://doi.org/10.1021/acs.nanolett.5c00473)

The Nano Letters title follows the publisher’s final title. Other biographical content is selected from the owner’s supplied CV and presentation. Full private context, phone numbers, references’ contact details, and unpublished experimental slides are not part of this repository. The complete CV is available by email request.

Portrait and project illustrations are from the owner’s supplied materials; they are not a general-purpose asset library.

## Redesign preview

The revised site has a portrait-led bilingual homepage, an Energy Storage Materials spotlight, a categorized figure gallery, and selected honors checked against supplied records where available. `editorial.mjs` contains the new homepage and honors copy. `gallery.mjs` lists figure metadata and source links. The ESM graphical abstract was supplied by co-author Yu Zhao. The AEM image is Figure 1 from the open-access article (Creative Commons Attribution), extracted directly from the supplied PDF. The JMCA and Joule figures were supplied by co-author Yu Zhao.

The preview ZIP includes the static `preview/` tree, plus modified source files for review. Only the source files belong in the repository; GitHub Actions generates the published site from source. The raw CV, private application materials and original photo metadata are not included.
