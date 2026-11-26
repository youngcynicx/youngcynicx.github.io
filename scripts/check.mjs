import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, dirname, extname } from 'node:path';
import assert from 'node:assert/strict';
import { locales } from '../content.mjs';
for(const key of ['zh','en']){
 const path=resolve(key==='zh'?'dist/index.html':'dist/en/index.html');
 const html=await readFile(path,'utf8');
 assert(html.includes(`lang="${locales[key].lang}"`));
 assert.equal((html.match(/<h1 /g)||[]).length,1);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
 for(const [,link] of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)){
  if(link.startsWith('#'))assert(ids.includes(link.slice(1)),`Broken anchor: ${link}`);
  else if(!/^(https?:|mailto:)/.test(link)){
   let target=resolve(dirname(path),link);
   if(link.endsWith('/'))target=resolve(target,'index.html');
   assert((await stat(target)).isFile(),`Missing local asset: ${link}`);
  }
 }
 for(const [,attributes] of html.matchAll(/<a ([^>]+)>/g))if(attributes.includes('target="_blank"'))assert(attributes.includes('rel="noopener noreferrer"'));
 assert(!/TODO|Lorem ipsum|undefined|PLACEHOLDER/.test(html));
 assert(!/15061792553|13249173297|86578599|18665950474|Personal_Context|D:\\/.test(html),'Private source information in public output');
 JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 console.log(`${key}: language, anchors, local files, metadata, external-link safety, and public content checks passed`);
}
async function checkAssets(dir){for(const f of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,f.name);if(f.isDirectory())await checkAssets(p);else assert(['.html','.css','.js','.jpg','.png','.svg','.txt','.xml','.mp4',''].includes(extname(p)),`Unexpected public file: ${p}`);}}
await checkAssets('dist');
console.log('Public output contains only intended static website files.');
