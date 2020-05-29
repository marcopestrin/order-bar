import React, {Component} from 'react';
import './styles.css'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

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
        tagsToRender.push(<Chip className="tag" color="primary" key={tags[i]+'-'+this.props.data} label={tags[i]} />)
      }
    }
    return ( 
      <>
        <MuiExpansionPanel
          square
          key={this.props.data.idDrink}
          className='cocktailRow'
        >
          <MuiExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={this.props.data.idDrink}
            key={this.props.data.idDrink}
          >
            <Typography className='cocktailName'>
              <p>{this.props.data.strDrink}</p> {tagsToRender}
            </Typography>
          </MuiExpansionPanelSummary>

          <div className='contentDetails'>
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
          </div>   
        </MuiExpansionPanel>
      </>
    )
  }
}