const fs = require("fs");
const path = require("path");

function getAllMediaFiles(dir) {
  const mediaExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".mp4",
    ".webp",
  ];
  let results = [];

  const files = fs.readdirSync(dir, { recursive: true });

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isFile()) {
      if (mediaExtensions.includes(path.extname(fullPath).toLowerCase())) {
        // Get just the filename without extension
        const fileName = path.basename(fullPath, path.extname(fullPath));
        results.push({
          fileName: fileName,
          fullPath: fullPath.replace(/\\/g, "/").replace("public/", "/"),
        });
      }
    }
  }

  return results;
}

function searchInDirectory(dir, searchTerm) {
  let found = false;

  try {
    const files = fs.readdirSync(dir, { recursive: true });

    for (const file of files) {
      const fullPath = path.join(dir, file);

      if (
        fs.statSync(fullPath).isFile() &&
        (fullPath.endsWith(".tsx") ||
          fullPath.endsWith(".ts") ||
          fullPath.endsWith(".jsx") ||
          fullPath.endsWith(".js"))
      ) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (content.includes(searchTerm)) {
          found = true;
          break;
        }
      }
    }
  } catch (error) {
    console.error(`Error searching in ${dir}:`, error);
  }

  return found;
}

function findUnusedMedia() {
  console.log("Scanning for media files...");

  // Get all media files
  const mediaFiles = getAllMediaFiles("public");
  console.log(`Found ${mediaFiles.length} media files\n`);

  const unusedFiles = [];
  const usedFiles = [];

  // Check each media file
  for (const mediaFile of mediaFiles) {
    const isUsedInApp = searchInDirectory("app", mediaFile.fileName);
    const isUsedInComponents = searchInDirectory(
      "components",
      mediaFile.fileName,
    );

    if (!isUsedInApp && !isUsedInComponents) {
      unusedFiles.push(mediaFile.fullPath);
    } else {
      usedFiles.push(mediaFile.fullPath);
    }
  }

  // Output results
  console.log("=== Unused Media Files ===");
  if (unusedFiles.length === 0) {
    console.log("No unused media files found");
  } else {
    unusedFiles.forEach((file) => {
      console.log(file);
    });
  }

  console.log("\n=== Used Media Files ===");
  if (usedFiles.length === 0) {
    console.log("No used media files found");
  } else {
    usedFiles.forEach((file) => {
      console.log(file);
    });
  }

  // Output summary
  console.log("\n=== Summary ===");
  console.log(`Total media files: ${mediaFiles.length}`);
  console.log(`Used files: ${usedFiles.length}`);
  console.log(`Unused files: ${unusedFiles.length}`);
}

// Run the script
findUnusedMedia();
