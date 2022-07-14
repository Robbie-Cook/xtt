import InvoiceLine from "./invoiceLine";

export default class Invoice {
  invoiceDate: Date;
  invoiceNumber: string;
  lineItems: any[];

  constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = []) {
    this.invoiceDate = invoiceDate;
    this.invoiceNumber = invoiceNumber;
    this.lineItems = lineItems;
  }

  // Adds a line to invoice
  addInvoiceLine(line: InvoiceLine) {
    this.lineItems.push(line);
  }

  // Removes a line
  removeInvoiceLine(id: number) {
    return null;
  }

  getTotal() {
    return 0;
  }

  mergeInvoices(invoice: Invoice) {
    return null;
  }

  clone() {
    return new Invoice(this.invoiceDate, this.invoiceNumber, this.lineItems);
  }
}
