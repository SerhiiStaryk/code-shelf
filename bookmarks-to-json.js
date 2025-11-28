import fs from "fs";
import { JSDOM } from "jsdom";

const filePath = "./bookmarks.html";
const html = fs.readFileSync(filePath, "utf8");
const dom = new JSDOM(html);
const document = dom.window.document;

function parseDL(dl) {
  const result = [];

  // шукаємо всі DT всередині поточного DL
  const dts = dl.querySelectorAll(":scope > DT");
  for (const dt of dts) {
    const h3 = dt.querySelector(":scope > H3");
    const a = dt.querySelector(":scope > A");

    if (h3) {
      // якщо є папка
      const folderTitle = h3.textContent.trim();
      const nestedDL = dt.nextElementSibling?.tagName === "DL"
        ? dt.nextElementSibling
        : dt.querySelector("DL");

      result.push({
        type: "folder",
        title: folderTitle,
        children: nestedDL ? parseDL(nestedDL) : [],
      });
    } else if (a) {
      // якщо є посилання
      result.push({
        type: "link",
        title: a.textContent.trim(),
        href: a.getAttribute("HREF"),
        addDate: a.getAttribute("ADD_DATE"),
        icon: a.getAttribute("ICON") || null,
      });
    }
  }

  return result;
}

const rootDL = document.querySelector("DL");
const bookmarks = parseDL(rootDL);

fs.writeFileSync("./bookmarks.json", JSON.stringify(bookmarks, null, 2));
console.log("✅ Bookmarks parsed successfully to bookmarks.json");
