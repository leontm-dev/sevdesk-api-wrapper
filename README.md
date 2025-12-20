# sevdesk API SDK for JavaScript and TypeScript

The sevdesk API SDK for JavaScript and TypeScript is an unofficial open-source API wrapper to improve interactions with the sevdesk API.
It comes with preconfigured types for models, responses and request bodies.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)![NPM Last Update](https://img.shields.io/npm/last-update/sevdesk-api-wrapper)![NPM Downloads](https://img.shields.io/npm/dm/sevdesk-api-wrapper)

## Acknowledgements

This project is based on the official [sevdesk API Documentation](https://api.sevdesk.de/#section/General-information). If you run into any problem or if you suddenly need a error description to speed up your debug process, check their docs first.

Information that describe types, classes and type-properties are directly from the sevdesk API Documentation, where you will find further explanation. The contents have only been changes in terms of spelling corrections.
All rights for the contents mentioned are reserved by sevDesk GmbH.

## Documentation

[Documentation](https://api.sevdesk.de/#section/General-information)

## Installation

Install sevdesk-api-wrapper with npm or your desired node package manager:

```bash
  node install sevdesk-api-wrapper
```

```bash
  yarn add sevdesk-api-wrapper
```

## Usage/Examples

To use this package you will need a sevdesk API key. A guide on how to accquire such a key can be found here: https://api.sevdesk.de/#section/Authentication-and-Authorization

Once you have installed the package, you can go ahead and import the sevdeskAPIClient:

```javascript
import sevdeskAPIClient from "sevdesk-api-wrapper";

const sevdeskAPI = new sevdeskAPIClient("your-api-key");
```

Be aware, sevdesk API keys are regarded as secrets. It is adwised to save them in a .env file for some other form of save key-storage and not directly inside of your active codebase.

## Contributing

Contributions are always welcome!

This is my first API SDK, so a learn-by-doing type of solution. If you have any ideas for better maintainablity, readablity or the code in general, feel free to make a Pull Request.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Authors

- [@leontm-dev](https://www.github.com/leontm-dev)

## Appendix

As already stated, this project is not maintained nor funded by [sevDesk GmbH](https://sevdesk.de/impressum/) or any associated company/organization. It is also not made to generate profits are be monetized in any way.
