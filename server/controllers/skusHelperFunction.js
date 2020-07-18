module.exports = (skusPerStyle) => (
  skusPerStyle.reduce((acc, sku) => ({ ...acc, [sku.size]: sku.quantity }), {})
);
