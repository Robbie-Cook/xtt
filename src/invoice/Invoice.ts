import InvoiceLine from "./InvoiceLine";

/**
 * A class that represents an invoice.
 */
export default class Invoice {
  private invoiceDate: Date;
  private invoiceNumber: string;
  public lineItems: InvoiceLine[];

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
    this.lineItems = this.lineItems?.filter(
      (item) => item.invoiceLineId !== id
    );
  }

  getTotal() {
    return this.lineItems.reduce((acc, item) => acc + item.cost, 0);
  }

  mergeInvoices(invoice: Invoice) {}

  clone() {
    return new Invoice(this.invoiceDate, this.invoiceNumber, this.lineItems);
  }
}
