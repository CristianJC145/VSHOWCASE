import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import asus from '../../../../assets/images/Asus.png'
import { log } from 'console';
export interface invoiceProps{

}
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
  });
  
  const Invoice: React.FC<any> = ({ invoiceData }) => {
    console.log("data para fatura: ", invoiceData)
    
    return (
      <Document>
        <Page size="A4" style={styles.page}>
            <Image style={styles.logo} src={asus} />
            <InvoiceTitle title='Factura'/>
            <InvoiceNo invoice={invoiceData}/>
            <BillTo invoice={invoiceData}/>
            <InvoiceItemsTable invoice={invoiceData} />
            <InvoiceThankYouMsg />
        </Page>
      </Document>
    )
  };
  
  export default Invoice