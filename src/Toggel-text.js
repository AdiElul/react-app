import React from 'react';

export default class ToggleText extends React.Component {
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
          <div>
              <div onClick={this.changeStatus.bind(this)}>Title</div>
              {this.state.status ? <div>My text</div> : null}
             
          </div>  
      );
    }
  }

