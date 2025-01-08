const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function findComponents(dir) {
  const components = new Map(); // name -> filepath

  function searchDir(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        searchDir(filePath);
      } else if (file.match(/\.(tsx|jsx)$/)) {
        const content = fs.readFileSync(filePath, "utf8");
        try {
          const ast = parser.parse(content, {
            sourceType: "module",
            plugins: ["typescript", "jsx"],
          });

          traverse(ast, {
            ExportDefaultDeclaration(path) {
              let name;
              if (path.node.declaration.name) {
                name = path.node.declaration.name;
              } else if (path.node.declaration.type === "FunctionDeclaration") {
                name = path.node.declaration.id.name;
              }
              if (name) {
                components.set(name, filePath);
              }
            },
          });
        } catch (e) {
          console.error(`Error parsing ${filePath}:`, e);
        }
      }
    });
  }

  searchDir(dir);
  return components;
}

function findComponentUsage(components) {
  const usedComponents = new Set();

  components.forEach((filePath, componentName) => {
    const searchPattern = new RegExp(
      `<${componentName}[^>]*>|import.*${componentName}`,
    );

    components.forEach((searchFilePath) => {
      if (searchFilePath !== filePath) {
        const content = fs.readFileSync(searchFilePath, "utf8");
        if (searchPattern.test(content)) {
          usedComponents.add(componentName);
        }
      }
    });

    // Also search in pages directory
    const pagesDir = path.join(process.cwd(), "app");
    if (fs.existsSync(pagesDir)) {
      searchDir(pagesDir);
    }
  });

  return usedComponents;
}

function findUnusedComponents() {
  console.log("Scanning for components...");

  const componentsDir = path.join(process.cwd(), "components");
  const components = findComponents(componentsDir);
  const usedComponents = findComponentUsage(components);

  console.log("\n=== Unused Components ===");
  components.forEach((filePath, name) => {
    if (!usedComponents.has(name)) {
      console.log(`${name} (${filePath})`);
    }
  });

  console.log("\n=== Summary ===");
  console.log(`Total components: ${components.size}`);
  console.log(`Used components: ${usedComponents.size}`);
  console.log(`Unused components: ${components.size - usedComponents.size}`);
}

findUnusedComponents();
