import { readFileSync, writeFileSync } from "fs";
import MarkdownIt from "markdown-it";

const inFile = "task-4.md";
const outFile = "task4.html";

const md = new MarkdownIt();
const mdText = readFileSync(inFile, "utf8");
const body = md.render(mdText);

const html = `<!doctype html>
<html lang="de">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>task4</title>
<body>
${body}
</body>
</html>`;

writeFileSync(outFile, html, "utf8");
console.log(`✅ ${inFile} → ${outFile}`);
