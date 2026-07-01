const path = require('path');

module.exports = {
  // Точка входа: твой исходный файл с JSX
  entry: './index.js',

  // Настройки вывода (как просили в условии задачи)
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'review_build'),
  },

  // Правило: обрабатывать файлы .js с помощью Babel
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // Режим сборки (production сожмет код, development оставит читаемым)
  mode: 'production',
};
