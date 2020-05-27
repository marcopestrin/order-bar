import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  detailsCocktail: {
    display: 'block',
  },
  addToOrder: {
    display: 'block',
  }
}));

export default function Cocktail(props) { 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const ingredients = []
  const tagsToRender = []

  for (let i=1; i<15; i++) {
    if (props.data['strIngredient'+i] && props.data['strMeasure'+i]) {
      ingredients.push(props.data['strIngredient'+i] + ': ' + props.data['strMeasure'+i])
    }
  }
  if(props.data.strTags) {
    let tags = props.data.strTags.split(',')
    for (let i=0; i<tags.length; i++) {
      tagsToRender.push(<Chip key={tags[i]+'-'+props.data} label={tags[i]} />)
    }
  }

  function handleAddToOrder(id) {
    console.log(id)
  }
  
  return ( 
    <>
      <MuiExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        key={props.data.idDrink}
      >
        <MuiExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={props.data.idDrink}
          key={props.data.idDrink}
        >
          <Typography>{props.data.strDrink} {tagsToRender}</Typography>
        </MuiExpansionPanelSummary>

        <MuiExpansionPanelDetails className={classes.detailsCocktail}>
            
          <Typography><strong>Category:</strong> {props.data.strCategory}</Typography><br />
          <Typography><strong>Ingredients:</strong> {ingredients}</Typography><br />
          <Typography><strong>Instructions:</strong> {props.data.strInstructions}</Typography><br />
          {props.data.strDrinkThumb && (
            <img
              src={props.data.strDrinkThumb}
              width="200"
              alt={props.data.strDrink}
            />
          )}

        <Button
          variant="contained"
          color="primary"
          className={classes.addToOrder}
          onClick={() => handleAddToOrder(props.data.idDrink)}
        >
          Add To Order
        </Button>

        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>
    </>
  )
}