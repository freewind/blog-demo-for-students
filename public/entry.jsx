import Article from './article.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

require('jquery');
require("bootstrap-webpack");

ReactDOM.render(
  <Article />,
  document.getElementById("content")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
