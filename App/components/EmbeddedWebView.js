import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';

const Screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Screen.height * 0.85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  topBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  inputText: {
    color: '#3d3c41',
  },
  loadingContainer: {
    position: 'absolute',
    top: 10,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export const EmbeddedWebView = ({ url }) => (
  <View style={styles.container}>
    <View style={styles.topBar}>
      <View style={styles.input}>
        <Text style={styles.inputText} ellipsizeMode="tail" numberOfLines={1}>
          {url}
        </Text>
      </View>
    </View>
    <WebView
      source={{ uri: url }}
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    />
  </View>
);
