import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public'); // Path to the public folder
const outputFilePath = path.join(publicDir, 'media-files.json'); // JSON file output

const supportedExtensions = ['.jpg', '.png', '.gif', '.mp4', '.webp']; // Allowed file types

// Function to scan the public folder and list all media files
const scanPublicFolder = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(scanPublicFolder(filePath)); // Recursively scan subfolders
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        results.push(filePath.replace(publicDir, '')); // Remove "public" prefix
      }
    }
  });

  return results;
};

// Generate the JSON file with media files
const mediaFiles = scanPublicFolder(publicDir);
fs.writeFileSync(outputFilePath, JSON.stringify(mediaFiles, null, 2));

console.log('✅ media-files.json generated successfully!');
