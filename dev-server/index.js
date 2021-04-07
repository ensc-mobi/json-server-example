const path = require('path');

require('concurrently')(
  [
    { command: 'expo start', prefixColor: 'magenta', name: 'expo' },
    { command: 'json-server --watch ./dev-server/db.json', prefixColor: 'green', name: 'json-server' },
    { command: 'node ./dev-server/tunnel.js', prefixColor: 'yellow', name: 'ngrock' },
  ],
  {
    cwd: path.resolve(path.join(__dirname, '..')),
  }
);
