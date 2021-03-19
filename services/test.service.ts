class TestService {
  getCollections(): Promise<Array<string>> {
    return fetch(`http://localhost:3000/db`)
      .then((result) => result.json())
      .then((db) => Object.keys(db));
  }

  getAllFromCollection(collectionName: string): Promise<Array<object>> {
    return fetch(`http://localhost:3000/${collectionName}`).then((result) => {
      return result.json();
    });
  }
}

export default new TestService();
