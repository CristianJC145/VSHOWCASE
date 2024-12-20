import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end'
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: 'bold',
  },
  label: {
    width: 60
  }
});

interface Invoice {
  invoice_no: string;
  trans_date: string;
}

interface InvoiceNoProps {
  invoice: Invoice;
}

const InvoiceNo: React.FC<InvoiceNoProps> = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.label}>Factura No:</Text>
      <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text>
    </View>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Fecha: </Text>
      <Text>{invoice.trans_date}</Text>
    </View>
  </Fragment>
);

export default InvoiceNo;
