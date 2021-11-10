import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

//import CategoriesAddEdit from './data1/CategoriesAddEdit';
import Cupon from './Cupon';
import './bootstrap.css';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Cupon />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
