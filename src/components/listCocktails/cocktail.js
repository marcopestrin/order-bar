import React, {Component} from 'react';
import './styles.css'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

export default class Cocktail extends Component { 

  render () {
    const ingredients = []
    const tagsToRender = []
  
    for (let i=1; i<15; i++) {
      if (this.props.data['strIngredient'+i] && this.props.data['strMeasure'+i]) {
        ingredients.push(this.props.data['strIngredient'+i] + ': ' + this.props.data['strMeasure'+i])
      }
    }
    if(this.props.data.strTags) {
      let tags = this.props.data.strTags.split(',')
      for (let i=0; i<tags.length; i++) {
        tagsToRender.push(<Chip key={tags[i]+'-'+this.props.data} label={tags[i]} />)
      }
    }
    return ( 
      <>
        <MuiExpansionPanel
          square
          key={this.props.data.idDrink}
        >
          <MuiExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={this.props.data.idDrink}
            key={this.props.data.idDrink}
          >
            <Typography>{this.props.data.strDrink} {tagsToRender}</Typography>
          </MuiExpansionPanelSummary>

          <MuiExpansionPanelDetails className="detailsCocktail">
              
            <Typography><strong>Category:</strong> {this.props.data.strCategory}</Typography><br />
            <Typography><strong>Ingredients:</strong> {ingredients}</Typography><br />
            <Typography><strong>Instructions:</strong> {this.props.data.strInstructions}</Typography><br />
            {this.props.data.strDrinkThumb && (
              <img
                src={this.props.data.strDrinkThumb}
                width="200"
                alt={this.props.data.strDrink}
              />
            )}

          </MuiExpansionPanelDetails>
        </MuiExpansionPanel>
      </>
    )
  }
}