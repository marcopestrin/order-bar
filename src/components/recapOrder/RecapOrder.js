import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

export default class RecapOrder extends Component { 

  render () {

    const orderContent = this.props.drinks && this.props.drinks.map((element,index) =>
      <>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary={element} />
            <ClearIcon
              onClick={this.props.action.bind(this,index)}
            />
          </ListItem>
          <Divider />
        </List>
      </>
    )
    return ( 
      <>
        <Typography>ORDER DETAILS:</Typography>
        {orderContent}
      </>
    )
  }
}