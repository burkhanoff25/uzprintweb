const https = require('https');

https.get('https://t.me/s/uzprint_uz', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const regex = /background-image:url\('([^']+)'\)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (!match[1].includes('emoji')) {
        matches.push(match[1]);
      }
    }
    console.log(JSON.stringify([...new Set(matches)], null, 2));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
