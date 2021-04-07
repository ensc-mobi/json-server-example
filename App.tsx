import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import testService from "./services/test.service";

type EntityInfos<T> = { entity: string; properties: Array<keyof T> };

interface AppState {
  collections: Array<string>;
  serializedCollection: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    collections: [],
    serializedCollection: "",
  };

  componentDidMount() {
    testService.getCollections().then((collections) => {
      this.setState({
        collections,
      });
    });
  }

  queryCollection(collection: string) {
    testService.getAllFromCollection(collection).then((result) => {
      this.setState({
        serializedCollection: JSON.stringify(result),
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList<string>
          style={styles.list}
          data={this.state.collections}
          contentContainerStyle={{ alignItems: "stretch" }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight
                style={styles.collection}
                onPress={() => this.queryCollection(item)}
              >
                <Text style={styles.collectionName}>{item}</Text>
              </TouchableHighlight>
            );
          }}
        />
        <Text style={styles.detail}>{this.state.serializedCollection}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginTop: 15,
    flex: 1,
    width: "100%",
    borderBottomColor: "#bdc3c7",
    borderBottomWidth: 2,
  },
  collection: {
    backgroundColor: "#3498db",
    marginVertical: 5,
  },
  collectionName: {
    color: "white",
    fontSize: 18,
    padding: 5,
  },
  detail: {
    marginTop: 20,
    flex: 3,
  },
});
