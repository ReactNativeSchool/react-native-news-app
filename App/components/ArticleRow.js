import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

import { EmbeddedWebView } from './EmbeddedWebView';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  numberContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff8d01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#ff8d01',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  source: {
    color: '#3d3c41',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  publishedAt: {
    color: '#3d3c41',
    fontSize: 12,
  },
});

export const ArticleRow = ({ title, publishedAt, source, index, url }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setModalVisible(false)}
        />
        <EmbeddedWebView url={url} />
      </Modal>
      <View style={styles.row}>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{index + 1}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.source}>{source.name}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.publishedAt}>
            {formatDistanceStrict(new Date(publishedAt), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
