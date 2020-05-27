import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default class Letters extends Component { 
  render () {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return ( 
      <>
      <AppBar position="static" color="default">

          <Tabs
            orientation='vertical'
          >
            {letters.map( (item,index) => {
              return (
                <Tab
                  label={item}
                  key={index.toString()}
                >
                  {item}
                </Tab>
              )
            })}
 
          </Tabs>
      </AppBar>
      </>
    )
  }
}