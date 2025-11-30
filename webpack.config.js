// Custom webpack configuration to ignore system folders
module.exports = {
  watchOptions: {
    ignored: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.angular/**',
      '**/System Volume Information/**',
      '**/$RECYCLE.BIN/**',
      'E:/System Volume Information/**',
      /System Volume Information/
    ],
    poll: 2000,
    aggregateTimeout: 300
  }
};

