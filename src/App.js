import _ from 'lodash';
import { Spinner } from 'adslot-ui';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { asyncAdding } from './generateArray';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listArray: [],
    }
  }

  componentDidMount = () => {
    const options = {
      root: document.querySelector('.list-container'),
      threshold: [0.5],
    }
    const io = new IntersectionObserver(() => this.addMoreList(), options);
    io.observe(document.querySelector('.observer'));
  }

  addMoreList = () => {
    asyncAdding(this.state.listArray).then(response => {
      this.setState({
        listArray: response,
      });
    });
  }

  render() {
    console.log('render')
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <div className="col-4 list-container-outer">
            <div className="list-container-inner">
              <ul className="list-group list-area">
                {_.map(this.state.listArray, (node, index) => (
                  <li className="list-group-item text-center" key={index}>{node}</li>
                ))}
              </ul>
              <div className="row loading justify-content-center">
                <Spinner size="large"/>
              </div>
              <div className="observer" ref={node => this.observerEl = node}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
