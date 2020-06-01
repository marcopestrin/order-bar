import React, { Component } from 'react';
import Cocktail from './cocktail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import RecapOrder from '../recapOrder/RecapOrder'
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css'
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default class ListCocktails  extends Component { 
  constructor(props){
    super(props)
    this.state = {
      waiting: true,
      cocktails: [],
      order: [],
      cleared: false,
    }
    this.getData = this.getData.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  addItem(item) {
    let order = [...this.state.order, item]
    this.setState({
      ...this.state,
      order,
      cleared: false,
    })
  }
  removeItem(index) {
    let order = this.state.order
    order.splice(index,1)
    this.setState({
      ...this.state,
      order,
      cleared: false,
    })
  }
  clearOrder(){
    this.setState({
      ...this.state,
      order:[],
      cleared: true,
    })
  }
  componentWillReceiveProps(nextProps){
    this.getData(nextProps.letter)
  }
  getData(letter) {
    this.setState({
      ...this.state,
      waiting: true
    });
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            cocktails: result,
            waiting: false
          });
        },
        (error) => {
          this.setState({
            error,
            waiting: false
          });
        }
      )
  }
  componentDidMount() {
    this.getData('a')
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      ...this.state,
      cleared: false,
    })
  };

  render () {
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
    const cocktail = this.state.cocktails.drinks && this.state.cocktails.drinks.map((element,index) =>
      <div className="rowCocktail" key={'row_' + index}>
        <Cocktail
          key={index}
          data={element}
        />
        <Button
          key={'button_' + index}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          className="addToOrder"
          onClick={() => this.addItem({
            id: element.idDrink,
            img: element.strDrinkThumb,
            name: element.strDrink
          })}
        >Add to order</Button>
      </div>
    )
    const cocktailWrapper = this.state.cocktails.drinks && this.state.cocktails.drinks.length ? cocktail : 'No Cocktails with this letter'

    const spinner = (
      <CircularProgress />
    )
    const notify = (
      <Snackbar
        open={this.state.cleared}
        autoHideDuration={2000}
        onClose={this.handleClose}
      >
        <Alert
          onClose={this.state.cleared}
          severity="success"
        >
          Order sent successfully
        </Alert>
      </Snackbar>
    )
    return ( 
      <>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Typography
                className="guide"
                align='center'
                color='primary'
                variant='h4'
              >CHOOSE YOUR COCKTAIL</Typography>
              { this.state.waiting ? spinner : cocktailWrapper }
            </Grid>
            <Grid item xs={4}>
              <RecapOrder
                cleared={this.state.cleared}
                removeItem={this.removeItem}
                clearOrder={this.clearOrder}
                drinks={this.state.order}
              />
              {notify}
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}