class Invoice {
  constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = []) {
    this.invoiceDate = invoiceDate;
    this.invoiceNumber = invoiceNumber;
    this.lineItems = lineItems;
  }

  // Adds a line to invoice
  addInvoiceLine(line) {
    this.lineItems.push(line);
  }

  // Removes a line
  removeInvoiceLine(id) {
    return null;
  }

  getTotal() {
    return 0;
  }

  mergeInvoices() {
    return null;
  }

  clone() {
    return new Invoice(this.invoiceDate, this.invoiceNumber, this.lineItems);
  }
}

module.exports = Invoice;
