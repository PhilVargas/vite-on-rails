module.exports = {
  singleQuote: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^components|assets(.*)$',
    '^[./]',
  ],
};
