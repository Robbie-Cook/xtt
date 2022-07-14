/*
    Welcome to the Xero technical exercise!
    ---------------------------------------------------------------------------------
    The test consists of a small invoice application that has a number of issues.
    Your job is to fix them and make sure you can perform the export functions in each method below.
    Note your first job is to get the solution to execute! 
	
    Rules
    ---------------------------------------------------------------------------------
    * The entire solution must be written in Javascript or TypeScript.
    * Feel free to use ECMA2015 (ES6) syntax
    * You can modify any of the code in this solution, split out classes etc
    * You can modify Invoice and InvoiceLine, rename and add methods, change property types (hint) 
    * Feel free to use any libraries or frameworks you like
    * Feel free to write tests (hint) 
    * Show off your skills! 
    Good luck :) 
    When you have finished the solution please zip it up and email it back to the recruiter or developer who sent it to you
*/

import Invoice from "./invoice/Invoice";
import InvoiceLine from "./invoice/InvoiceLine";
import {
  cloneInvoice,
  createInvoiceWithMultipleItemsAndQuantities,
  createInvoiceWithOneItem,
  invoiceToString,
  mergeInvoices,
  removeItem,
} from "./invoice/util";

export function main() {
  console.log("Welcome to Xero Tech Test!");

  createInvoiceWithOneItem();
  createInvoiceWithMultipleItemsAndQuantities();
  removeItem();
  mergeInvoices();
  cloneInvoice();
  invoiceToString();
}

main();
