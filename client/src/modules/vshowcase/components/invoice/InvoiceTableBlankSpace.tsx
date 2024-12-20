import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#806dfd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
    color: 'white'
  },
  description: {
    width: '60%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: '15%',
  },
});

interface InvoiceTableBlankSpaceProps {
  rowsCount: number;
}

const InvoiceTableBlankSpace: React.FC<InvoiceTableBlankSpaceProps> = ({ rowsCount }) => {
  const blankRows = Array.from({ length: rowsCount }, (_, i) => i);

  const rows = blankRows.map(i => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.description}>-</Text>
      <Text style={styles.qty}>-</Text>
      <Text style={styles.rate}>-</Text>
      <Text style={styles.amount}>-</Text>
    </View>
  ));

  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableBlankSpace;
