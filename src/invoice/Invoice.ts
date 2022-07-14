import InvoiceLine from "./InvoiceLine";

/**
 * A class that represents an invoice.
 */
export default class Invoice {
  private invoiceDate: Date;
  private invoiceNumber: string;
  public lineItems: any[];

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
