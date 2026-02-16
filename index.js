const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);
