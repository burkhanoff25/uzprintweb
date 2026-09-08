const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'portfolio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

https.get('https://t.me/s/uzprint_uz', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const regex = /background-image:url\('([^']+)'\)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (!match[1].includes('emoji') && !match[1].includes('avatar')) {
        matches.push(match[1]);
      }
    }
    const urls = [...new Set(matches)].slice(0, 12); // Get 12 images max
    
    urls.forEach((url, i) => {
      const filePath = path.join(outDir, `tg-img-${i + 1}.jpg`);
      https.get(url, (imgRes) => {
        const fileStream = fs.createWriteStream(filePath);
        imgRes.pipe(fileStream);
        fileStream.on('finish', () => {
          console.log(`Saved ${filePath}`);
        });
      });
    });
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
