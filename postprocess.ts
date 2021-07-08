// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, json, excel, zip, and image files
import { readTXT, writeTXT } from "https://deno.land/x/flat@0.0.11/mod.ts";

const filename = Deno.args[0]; // Same name as downloaded_filename
const html = await readTXT(filename);

import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import { Feed } from "https://jspm.dev/feed";

const url = "https://www.marathon.tokyo/en/news/";

const myFeed = new Feed({
  title: "Tokyo Marathon RSS",
  description: "Return latest news from the Tokyo Marathon",
  link: "https://www.marathon.tokyo/en/news/",
  updated: new Date()
});

const $ = cheerio.load(html);

$(".textcolor_yellowgreen_02").each((i, elem) => {
  var href = $(elem).attr("href");
  if (typeof href !== "undefined") {
    let link = "https://www.marathon.tokyo" + href;
    let title = $(elem).text() || "No caption";
    myFeed.addItem({
      title: title,
      link: link,
      description: title,
      date: new Date(),
    });
  }
});

// await removeFile(filename)

const newFilename = `tokyo-marathon.xml`;
await writeTXT(newFilename, myFeed.rss2());
console.log("Wrote a post process file");
