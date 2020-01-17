const withLess = require('@zeit/next-less')

if (typeof require !== "undefined") {
 require.extensions[".less"] = () => {};
 require.extensions[".css"] = (file) => {};
}

module.exports = withLess({
  /* config options here */
})
