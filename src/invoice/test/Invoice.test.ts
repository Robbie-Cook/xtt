import Invoice from "../Invoice";
import InvoiceLine from "../InvoiceLine";

jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));

describe("Testing of invoice function", () => {
  it("should create an invoice with one item", () => {
    const invoice = new Invoice();
    invoice.addInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"));
    expect(invoice).toMatchInlineSnapshot(`
Invoice {
  "invoiceDate": 2022-01-01T00:00:00.000Z,
  "invoiceNumber": "",
  "lineItems": Array [
    InvoiceLine {
      "cost": 6.99,
      "description": "Apple",
      "invoiceLineId": 1,
      "quantity": 1,
    },
  ],
}
`);
  });
});
