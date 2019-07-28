import React from 'react';

export default class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: false
      };
    }
    changeStatus() {
      this.setState( {
        status: !this.state.status
      })
    }
    render() {
      return (
          <div onClick={this.changeStatus.bind(this)}>
              Staus:
              {this.state.status ? 'ON' : 'OFF'}
          </div>  
      );
    }
  }

