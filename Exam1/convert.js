import { readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";
import { marked } from "marked";

const markdownPath = new URL("./07_clean_code.md", import.meta.url);
const htmlPath = new URL("./07_clean_code.html", import.meta.url);

const markdown = await readFile(markdownPath, "utf8");
const html = await marked.parse(markdown);
const formattedHtml = await format(html, { parser: "html" });

await writeFile(htmlPath, formattedHtml, "utf8");
