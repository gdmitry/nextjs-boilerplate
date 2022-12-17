const withBundleAnalyzer = require('@next/bundle-analyzer')({
  openAnalyzer: false,
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
