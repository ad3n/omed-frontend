import React from 'react';
import ReactDOM from 'react-dom';
import Omed from '../omed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Omed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
