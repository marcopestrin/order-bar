import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Letters extends Component { 

  render () {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return ( 
      <>
        {letters.map( (item,index) => {
          return (
            <Button
              color="primary"
              size="small"
              variant={item === this.props.letterSelected ? 'contained' : 'text'}
              href="#contained-buttons"
              onClick={this.props.action.bind(this,item)}
            >
              {item}
            </Button>
          )
        })}

      </>
    )
  }
}