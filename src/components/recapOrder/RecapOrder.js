import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import './styles.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RecapOrder(props) { 
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const orderContent = props.drinks && props.drinks.map((element,index) =>
    <>
      <List>
        <ListItem button>
          <ListItemText primary={element.name} />
          <img
              src={element.img}
              width="100"
              alt={element.id}
            />
          <ClearIcon
            onClick={props.removeItem.bind(this,index)}
          />
        </ListItem>
        <Divider />
      </List>
    </>
  )
  const notify = (
    <>
      <Snackbar open={props.cleared} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Sent
        </Alert>
      </Snackbar>
    </>
  )
  return ( 
    <div className="containerRecapOrder">

      
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
      { notify }
    </div>
  )
}