import puppeteer from "puppeteer";
import PDFMerger from "pdf-merger-js";

const maxPage = 1;

async function runPdf() {
  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
    defaultViewport: {
      width: 1700,
      height: 2555,
      deviceScaleFactor: 1,
    },
  });

  const page = await browser.newPage();
  const pagesPath = [];

  const merger = new PDFMerger();

  for (let pageIndex = 1; pageIndex <= maxPage; pageIndex++) {
    await page.goto("http://localhost:3000/cv?page=" + pageIndex);
    await page.waitForTimeout(2000);
    await printPDF(page, pageIndex);
    pagesPath.push("./export/cv-page" + pageIndex + ".pdf");
    await merger.add("./export/cv-page" + pageIndex + ".pdf");
  }

  await browser.close();
  await merger.save("./export/CV.pdf");
  console.log("Successfully merged!");
}

async function printPDF(page, pageNb = 1) {
  const optionsPDF = {
    path: "./export/cv-page" + pageNb + ".pdf",
    printBackground: true,
    width: "1080px",
    height: "1920px",
    scale: 1,
    margin: 0,
    preferCSSPageSize: false,
  };

  const cvPage = await page.$$(`.cv-page`);
  const box = await cvPage[0].boundingBox();

  const innerHeight = box.height;

  const innerWidth = await page.evaluate(() => {
    return window.innerWidth;
  });

  const height_weight_ratio = innerHeight / innerWidth;

  const height = parseInt(optionsPDF.width) * height_weight_ratio;
  optionsPDF.scale = 1 / height_weight_ratio;
  optionsPDF.height = height + "px";

  console.log("Printing PDF... - Page " + pageNb + " : ", optionsPDF.height);
  const pdf = await page.pdf(optionsPDF);

  return pdf;
}

runPdf();
