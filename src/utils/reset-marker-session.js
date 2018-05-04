const reset = (ctx) => {
  const { session } = ctx;
  session.pageId = null;
  session.marker = null;
}

module.exports = reset;