import Invoice from "./Invoice";
import InvoiceLine from "./InvoiceLine";

/**
 * A series of utility functions for working with invoices.
 */

export function createInvoiceWithOneItem() {
  const invoice = new Invoice();
  invoice.addInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"));
  console.log(invoice.lineItems);
}

export function createInvoiceWithMultipleItemsAndQuantities() {
  const invoice = new Invoice();
  invoice.addInvoiceLine(new InvoiceLine(1, 10.21, 4, "Banana"));
  invoice.addInvoiceLine(new InvoiceLine(2, 5.21, 1, "Orange"));
  invoice.addInvoiceLine(new InvoiceLine(3, 6.21, 5, "Pineapple"));
  console.log(invoice.getTotal());
}

export function removeItem() {
  const invoice = new Invoice();

  invoice.addInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
  invoice.addInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));

  invoice.removeInvoiceLine(1);

  console.log(invoice.getTotal());
}

export function mergeInvoices() {
  const invoice1 = new Invoice();

  invoice1.addInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

  const invoice2 = new Invoice();

  invoice2.addInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
  invoice2.addInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

  invoice1.mergeInvoices(invoice2);

  console.log(invoice1.getTotal());
}

export function cloneInvoice() {
  const invoice = new Invoice();

  invoice.addInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
  invoice.addInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

  const clonedInvoice = invoice.clone();
  console.log(clonedInvoice.getTotal());
}

export function invoiceToString() {
  const invoice = new Invoice(new Date(), "1000", [
    new InvoiceLine(1, 1.99, 20, "Peer"),
  ]);

  console.log(invoice);
}
