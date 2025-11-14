/**
 * Development script to replace placeholders with default values
 * Run this before `npm run dev` for local template development
 */
const fs = require("fs");
const path = require("path");

const replacements = {
  "{{BUSINESS_NAME}}": "Example Business",
  "{{REGION}}": "Example Region",
  "{{PHONE}}": "123-456-7890",
  "{{EMAIL}}": "contact@example.com",
  "{{SERVICES_LIST}}": "Service 1, Service 2, Service 3",
  "{{CTA_TEXT}}": "Get a Free Quote",
  "{{PRIMARY_COLOR}}": "#2563eb",
  "{{PRIMARY_COLOR_DARK}}": "#1e40af",
  "{{ACCENT_COLOR}}": "#f59e0b",
  "{{ACCENT_COLOR_DARK}}": "#d97706",
};

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  for (const [placeholder, value] of Object.entries(replacements)) {
    if (content.includes(placeholder)) {
      content = content.replace(new RegExp(placeholder, "g"), value);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.includes("node_modules") && !file.includes(".next")) {
        processDirectory(filePath);
      }
    } else if (
      /\.(ts|tsx|js|jsx|json)$/.test(file) &&
      !file.includes("prepare-dev.js")
    ) {
      replaceInFile(filePath);
    }
  }
}

console.log("Preparing template for local development...");
processDirectory(__dirname + "/..");
console.log("Done! You can now run 'npm run dev'");

