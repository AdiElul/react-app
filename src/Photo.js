import React from 'react';
export default class Photo extends React.Component {
   render() {
     console.log(this.props);
   const imgStyle ={
       width: this.props.width + 'px',
       borderRadius: this.props.shape === 'circle' ? '50%' : '0'
   };
     return (
         <img src = {this.props.url} style = {imgStyle} />
     );
   }
 }