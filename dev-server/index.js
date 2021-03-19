const path = require('path');

require('concurrently')(
  [
    { command: 'expo start', prefixColor: 'magenta', name: 'expo' },
    { command: 'json-server --watch ./dev-server/db.json', prefixColor: 'green', name: 'json-server' },
  ],
  {
    killOthers: ['failure', 'success'],
    cwd: path.resolve(path.join(__dirname, '..')),
  }
);
