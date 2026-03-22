const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      if (fs.statSync(dirFile).isDirectory()) {
        if (file !== 'node_modules' && file !== '.git') {
          filelist = walkSync(dirFile, filelist);
        }
      } else {
        if (file.endsWith('.html')) filelist.push(dirFile);
      }
    } catch (err) {
      console.log(err);
    }
  });
  return filelist;
}

const htmlFiles = walkSync('./');
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('font-serif')) {
    // replace all font-serif with font-sans
    let newContent = content.replace(/font-serif/g, 'font-sans');
    
    // restore font-serif specifically for h1 tags to retain some elegance at the very top
    newContent = newContent.replace(/<h1([^>]*)font-sans([^>]*)>/g, '<h1$1font-serif$2>');
    
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated fonts in: ' + file);
  }
});
