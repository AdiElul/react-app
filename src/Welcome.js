import React from 'react';

class Welcome extends React.Component {
    render() {
      return (
          <div>Welcome {this.props.name }to my app
                your'e {this.props.age}
          </div>
      );
    }
  }

export default Welcome;