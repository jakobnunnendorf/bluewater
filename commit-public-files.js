const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

try {
  const publicFiles = getAllFiles("./public");

  for (const file of publicFiles) {
    try {
      // Check if file is modified using git status
      const status = execSync(`git status --porcelain "${file}"`).toString();
      if (!status) {
        console.log(`⏭️  Skipping unmodified file: ${file}`);
        continue;
      }

      // Add and commit modified file
      execSync(`git add "${file}"`);
      execSync(`git commit -m "Add ${file.replace("./public/", "")}"`);
      execSync(`git push origin HEAD`);
      console.log(`✅ Committed and pushed: ${file}`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      process.exit(1);
    }
  }

  console.log("✨ All modified files successfully committed and pushed!");
} catch (error) {
  console.error("Script error:", error.message);
  process.exit(1);
}
