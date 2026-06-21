import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "public", "documents", "Austin-Di-Nezza-CV.pdf");

const resume = {
  name: "Austin Di Nezza",
  contact: "Montreal, QC · austin.dinezza@icloud.com",
  heading: "AI & Automation Developer",
  summary:
    "Detail-oriented and technically driven professional specializing in Artificial Intelligence and digital tools, with hands-on experience building automation workflows, chatbots, and data-driven solutions. Bilingual in English and French.",
  sections: [
    {
      title: "Core Skills",
      lines: [
        "AI & Automation: Chatbot development, n8n workflow automation, prompt engineering, Copilot tools",
        "Data & Programming: Python, SQL, PostgreSQL, Power BI, dashboard thinking, data cleanup",
        "Backend & Platforms: FastAPI, API integrations, database management, AWS foundations",
        "Digital Workplace: Microsoft 365 tools, productivity systems, process optimization",
      ],
    },
    {
      title: "Selected Project Themes",
      lines: [
        "AI-powered chatbot workflows for websites and repetitive support interactions",
        "Automation flows that integrate APIs and reduce manual operational work",
        "Expert-system and rule-based project work for practical AI decision support",
        "Data analysis, reporting, and dashboard projects focused on useful business insight",
      ],
    },
    {
      title: "Professional Experience",
      lines: [
        "Customer Support & Technical Solutions Specialist · Tecnico Chauffage · May 2023 – Present",
        "Provide troubleshooting, user training, workflow coordination, technical issue documentation, and structured support improvements.",
        "Customer Support & Operations Associate · Walmart · May 2021 – 2023",
        "Supported digital order systems, issue resolution, and efficient bilingual communication across operations.",
        "Logistics & Operations Assistant · UPS · Oct 2020 – Mar 2021",
        "Handled logistics, sorting, routing, and time-sensitive coordination work.",
      ],
    },
    {
      title: "Education",
      lines: [
        "CDI College · Artificial Intelligence (ACS, in progress)",
        "Dawson College · Computer Sciences · 2020 – 2023",
        "Marianopolis College · Law, Society and Justice · 2018 – 2019",
      ],
    },
  ],
};

function wrapText(text, font, size, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    const width = font.widthOfTextAtSize(next, size);

    if (width <= maxWidth || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

const pdfDoc = await PDFDocument.create();
let page = pdfDoc.addPage([612, 792]);
let y = 740;
const marginX = 56;
const maxWidth = 500;
const headingColor = rgb(0.1, 0.35, 0.62);
const bodyColor = rgb(0.12, 0.15, 0.2);

const headingFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

function ensureSpace(requiredHeight) {
  if (y - requiredHeight > 56) {
    return;
  }

  page = pdfDoc.addPage([612, 792]);
  y = 740;
}

function drawLine(text, size = 11, color = bodyColor, font = bodyFont, gap = 16) {
  const lines = wrapText(text, font, size, maxWidth);
  ensureSpace(lines.length * gap + 4);

  for (const line of lines) {
    page.drawText(line, {
      x: marginX,
      y,
      size,
      font,
      color,
    });
    y -= gap;
  }
}

page.drawText(resume.name, {
  x: marginX,
  y,
  size: 24,
  font: headingFont,
  color: bodyColor,
});
y -= 28;

page.drawText(resume.heading, {
  x: marginX,
  y,
  size: 13,
  font: headingFont,
  color: headingColor,
});
y -= 18;

page.drawText(resume.contact, {
  x: marginX,
  y,
  size: 10.5,
  font: bodyFont,
  color: bodyColor,
});
y -= 28;

drawLine(resume.summary, 11, bodyColor, bodyFont, 17);
y -= 10;

for (const section of resume.sections) {
  ensureSpace(60);

  page.drawText(section.title, {
    x: marginX,
    y,
    size: 14,
    font: headingFont,
    color: headingColor,
  });
  y -= 22;

  for (const line of section.lines) {
    drawLine(`• ${line}`, 11, bodyColor, bodyFont, 17);
  }

  y -= 10;
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, await pdfDoc.save());
console.log(`Generated ${outputPath}`);
