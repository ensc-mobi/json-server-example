// Use ngrok to access server data from deployed app on mobile (see README.md)
//const rootEndpoint = "http://537974e9a1bd.ngrok.io";
const rootEndpoint = "http://localhost:3000";

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
