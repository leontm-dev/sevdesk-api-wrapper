# sevdesk API Wrapper

This extension works around the official sevdesk api. It helps interacting with this api, all easy and typesafe.

Current version: v0.0.3

All of these feature/functions are directly taken from the [official sevdesk API Documentation](https://api.sevdesk.de). Still this package is not supported by sevdesk GmbH in any kind or way.

It is just a package I used to automate the interaction with sevdesk for our [finda](https://payments.find-a.app) service.

## Installation

Install this package as you would install every other npm package.

With npm:

```bash
  npm install sevdesk-api-wrapper
```

With yarn:

```bash
  yarn add sevdesk-api-wrapper
```

## Documentation

[Official sevdesk API documentation](https://api.sevdesk.de/)

## Roadmap

This package aims to grant full typesafe support for the whole sevdesk api:

| sevdesk Feature                                                                | Supported? |
| ------------------------------------------------------------------------------ | ---------- |
| [Basics](https://api.sevdesk.de/#tag/Basics)                                   | ✅         |
| [CheckAccount](https://api.sevdesk.de/#tag/CheckAccount)                       | ✅         |
| [CheckAccountTransaction](https://api.sevdesk.de/#tag/CheckAccountTransaction) | ✅         |
| [AccountingContact](https://api.sevdesk.de/#tag/AccountingContact)             | ✅         |
| [CommunicationWay](https://api.sevdesk.de/#tag/CommunicationWay)               | ❌         |
| [ContactAddress](https://api.sevdesk.de/#tag/ContactAddress)                   | ❌         |
| [Contact](https://api.sevdesk.de/#tag/Contact)                                 | ❌         |
| [ContactField](https://api.sevdesk.de/#tag/ContactField)                       | ❌         |
| [CreditNote](https://api.sevdesk.de/#tag/CreditNote)                           | ❌         |
| [CreditNotePos](https://api.sevdesk.de/#tag/CreditNotePos)                     | ❌         |
| [Export](https://api.sevdesk.de/#tag/Export)                                   | ❌         |
| [Part](https://api.sevdesk.de/#tag/Part)                                       | ❌         |
| [Invoice](https://api.sevdesk.de/#tag/Invoice)                                 | ❌         |
| [InvoicePos](https://api.sevdesk.de/#tag/InvoicePos)                           | ❌         |
| [Layout](https://api.sevdesk.de/#tag/Layout)                                   | ❌         |
| [Order](https://api.sevdesk.de/#tag/Order)                                     | ❌         |
| [OrderPos](https://api.sevdesk.de/#tag/OrderPos)                               | ❌         |
| [Voucher](https://api.sevdesk.de/#tag/Voucher)                                 | ❌         |
| [VoucherPos](https://api.sevdesk.de/#tag/VoucherPos)                           | ❌         |
| [Report](https://api.sevdesk.de/#tag/Report)                                   | ❌         |
| [Tag](https://api.sevdesk.de/#tag/Tag)                                         | ❌         |
| [sevdesk-Update 2.0](https://api.sevdesk.de/#tag/sevdesk-Update-2.0)           | ❌         |

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Authors

- [@leontm-dev](https://www.github.com/leontm-dev)
