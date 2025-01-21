const folderName = './nodejsmodule';
const fileName = 'task.js';
fs.mkdir(folderName, { recursive: true }, (err) => {
  if (err) {
    return console.error(`Error creating folder: ${err.message}`);
  }
  console.log(`Folder '${folderName}' created successfully!`);
  const filePath = path.join(folderName, fileName);

  const fileContent = '// This is a test.js file created using Node.js';
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      return console.error(`Error creating file: ${err.message}`);
    }
    console.log(`File '${fileName}' created successfully inside '${folderName}'!`);
  });
});
