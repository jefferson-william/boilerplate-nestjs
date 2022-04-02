module.exports = {
  '*.{ts,tsx}': ['yarn pretty-quick', 'yarn lint'],
  '*.{spec,test}': ['yarn test --bail --findRelatedTests', 'yarn test:e2e --bail --findRelatedTests'],
  '*.json': ['yarn pretty-quick'],
}
