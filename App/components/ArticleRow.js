import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

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

export const ArticleRow = ({ title, publishedAt, source, index }) => (
  <View style={styles.row}>
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{index}</Text>
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
);
