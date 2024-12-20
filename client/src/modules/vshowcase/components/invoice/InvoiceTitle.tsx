import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  reportTitle: {
    color: '#806dfd',
    letterSpacing: 4,
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

interface InvoiceTitleProps {
  title: string;
}

const InvoiceTitle: React.FC<InvoiceTitleProps> = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default InvoiceTitle;
