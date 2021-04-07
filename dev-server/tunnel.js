const ngrok = require('ngrok');
const fs = require('fs');

setTimeout(() => {
  console.log('Creating ngrok tunnel');
  ngrok
    .connect({
      proto: 'http',
      addr: 3000,
      region: 'eu',
    })
    .then((url) => {
      console.log('ngrok tunnel ready with url', url);
      fs.writeFileSync(
        '.env.json',
        JSON.stringify({
          JSON_SERVER_URL: url,
        })
      );
    })
    .catch((error) => {
      console.error('Failled to create ngrok tunnel. It may be related to JSON server status or a network issue');
      console.error(error);
    });
}, 500);
