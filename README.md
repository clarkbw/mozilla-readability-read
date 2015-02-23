# mozilla-readability-read

This is a Node.js (io.js) app that uses the [Mozilla Readability](https://github.com/mozilla/readability) code to parse pages and display those pages in an iframe.  It's useful for testing out how a page will render on the Desktop Reader View.

You can use it here: https://moz-readability.herokuapp.com/

## Setup

```
  npm install
```

## Run

```
  npm start
```

## Update the Readability.js

This gulp command downloads the `Readability.js` file from the [mozilla repo](https://github.com/mozilla/readability) and
concatenates it with a local `Readability-node.js`.  We do this because the original file expects a global `Node` object and doesn't export itself as a module like the Node.js world expects.

```
  gulp readability
```

The real way to fix this area of the code is to turn the `Readability.js` file into a npm module.

## Update the Readability CSS (aboutReader.css)

This gulp command downloads the `aboutReader.css` file from the [mozilla mxr](http://mxr.mozilla.org/mozilla-central/source/toolkit/themes/windows/global/aboutReader.css?raw=1) and
drops it into the `public` directory.

```
  gulp readability-css
```
