import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import './styles.css'

export default function RecapOrder(props) { 
  const orderContent = props.drinks && props.drinks.map((element,index) =>
    <List key={index}>
      <ListItem>
        <ListItemText
          primary={element.name}
          />
        <img
          src={element.img}
          width="100"
          alt={element.id}
        />
        <ClearIcon
          className='clearIcon'
          onClick={props.removeItem.bind(this,index)}
        />
        </ListItem>
        <Divider />
    </List>
  )
  return ( 
    <div className="containerRecapOrder" key={'unique'}>    
      <Typography
        align='center'
        color='primary'
        variant='h3'
      >ORDER DETAILS</Typography>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        className="sendDataButton"
        disabled={props.drinks.length === 0}
        onClick={props.clearOrder.bind(this)}
      >
        Send Order
      </Button>
      { orderContent }

    </div>
  )
}