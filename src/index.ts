// Project-Imports

import { AccountingContact } from "./AccountingContact/index.js";
import { Basics } from "./Basics/index.js";
import { CheckAccount } from "./CheckAccount/index.js";
import { CheckAccountTransaction } from "./CheckAccountTransaction/index.js";
import { CommunicationWay } from "./CommunicationWay/index.js";
import { Contact } from "./Contact/index.js";
import { ContactAddress } from "./ContactAddress/index.js";
import { ContactField } from "./ContactField/index.js";
import { CreditNote } from "./CreditNote/index.js";
import { CreditNotePos } from "./CreditNotePos/index.js";
import { Export } from "./Export/index.js";
import { Invoice } from "./Invoice/index.js";
import { InvoicePos } from "./InvoicePos/index.js";
import { Layout } from "./Layout/index.js";
import { Order } from "./Order/index.js";
import { OrderPos } from "./OrderPos/index.js";
import { Part } from "./Part/index.js";
import { Report } from "./Report/index.js";
import { Tag } from "./Tag/index.js";
import sevdeskClientV2 from "./v2/index.js";
import { Voucher } from "./Voucher/index.js";
import { VoucherPos } from "./VoucherPos/index.js";

// Code

export const apiUrl = "https://my.sevdesk.de/api/v1";

export default class sevdeskAPIClient {
  AccountingContact: AccountingContact;
  Basics: Basics;
  CheckAccount: CheckAccount;
  CheckAccountTransaction: CheckAccountTransaction;
  CommunicationWay: CommunicationWay;
  Contact: Contact;
  ContactAddress: ContactAddress;
  ContactField: ContactField;
  CreditNote: CreditNote;
  CreditNotePos: CreditNotePos;
  Export: Export;
  Invoice: Invoice;
  InvoicePos: InvoicePos;
  Layout: Layout;
  Order: Order;
  OrderPos: OrderPos;
  Part: Part;
  Report: Report;
  Tag: Tag;
  Voucher: Voucher;
  VoucherPos: VoucherPos;
  apiUrl: string = apiUrl;
  v2: sevdeskClientV2;
  constructor(private apiKey: string) {
    this.AccountingContact = new AccountingContact(this.apiKey);
    this.Basics = new Basics(this.apiKey);
    this.CheckAccount = new CheckAccount(this.apiKey);
    this.CheckAccountTransaction = new CheckAccountTransaction(this.apiKey);
    this.CommunicationWay = new CommunicationWay(this.apiKey);
    this.Contact = new Contact(this.apiKey);
    this.ContactAddress = new ContactAddress(this.apiKey);
    this.ContactField = new ContactField(this.apiKey);
    this.CreditNote = new CreditNote(this.apiKey);
    this.CreditNotePos = new CreditNotePos(this.apiKey);
    this.Export = new Export(this.apiKey);
    this.Invoice = new Invoice(this.apiKey);
    this.InvoicePos = new InvoicePos(this.apiKey);
    this.Layout = new Layout(this.apiKey);
    this.Order = new Order(this.apiKey);
    this.OrderPos = new OrderPos(this.apiKey);
    this.Part = new Part(this.apiKey);
    this.Report = new Report(this.apiKey);
    this.Tag = new Tag(this.apiKey);
    this.Voucher = new Voucher(this.apiKey);
    this.VoucherPos = new VoucherPos(this.apiKey);
    this.v2 = new sevdeskClientV2(this.apiKey);
  }
}
