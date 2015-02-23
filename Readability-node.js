// Readability-node.js
// This file is appended to the Readability.js file to make it work in a Node.js environment

if (!Node) {
  // Fake out the nodeType's
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  var Node = { ELEMENT_NODE : 1, TEXT_NODE : 3 };
}

module.exports = Readability;
