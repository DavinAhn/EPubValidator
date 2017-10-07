# EPubValidator

[![Build Status](https://travis-ci.org/DaVinAhn/EPubValidator.svg?branch=master)](https://travis-ci.org/DaVinAhn/EPubValidator)

## Prerequisite

- [Node](https://nodejs.org/): 6.11.3 or higher.
- [NodeJS Inspector](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?utm_source=chrome-app-launcher-info-dialog): It is necessary when debugging the [electron-code](https://github.com/DaVinAhn/EPubValidator/tree/develop/src/electron).

## Installation

You can install it with the following command:
```
$ git clone https://github.com/DaVinAhn/EPubValidator.git [target directory]
$ cd [target directory]
$ npm install
```

## Run

Following command for development:
```
$ npm run watch
$ npm run debug // Access 5858 port after installing 'NodeJS Inspector'.
```

Following command for test:
```
$ npm run build
$ npm run start
```

## Stack

- [Electron](https://electron.atom.io/)
- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [SASS](http://sass-lang.com/)
- [Webpack](https://webpack.github.io/)

## Refs

- [IDPF](http://idpf.org/)
- [IDPF-EpubCheck](https://github.com/IDPF/epubcheck)
- [KoboLabs-ePub-Spec](https://github.com/kobolabs/epub-spec)
- [Kindle-Publishing-Guidelines](https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf)
