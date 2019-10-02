import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: '#ff8d01',
    fontWeight: 'bold',
    fontSize: 40,
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 10,
  },
});

class App extends React.Component {
  state = {
    articles: [],
    loading: true,
  };

  renderFooter = () => {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return null;
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.articles}
          ListHeaderComponent={
            <Text style={styles.headerText}>Top Headlines</Text>
          }
          renderItem={() => null}
          ListFooterComponent={this.renderFooter()}
        />
      </SafeAreaView>
    );
  }
}

export default App;
