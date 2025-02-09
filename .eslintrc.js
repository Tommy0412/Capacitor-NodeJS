module.exports = {
  rules: {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "never" // Change to "always" if you want a strict rule
      }
    ]
  }
};
