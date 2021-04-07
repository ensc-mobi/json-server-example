import env from '../.env.json';

// Use ngrok to access server data from deployed app on mobile (see README.md)
// ngrok endpoint is generated in the .env.json
const rootEndpoint = env.JSON_SERVER_URL || 'http://localhost:3000';

class TestService {
  getCollections(): Promise<Array<string>> {
    return fetch(`${rootEndpoint}/db`)
      .then((result) => result.json())
      .then((db) => Object.keys(db));
  }

  getAllFromCollection(collectionName: string): Promise<Array<object>> {
    return fetch(`${rootEndpoint}/${collectionName}`).then((result) => {
      return result.json();
    });
  }
}

export default new TestService();
