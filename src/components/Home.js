import React, { Component } from 'react'
import axios from 'axios';
import WallpaperComponent from './WallpaperComponent'
import QuickSearchComponent from './QuickSearchComponent'

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        location: [],
        mealType: []
    }
}

componentDidMount() {

  // this one is for options button city list=>
    axios(
        {
            method: 'GET',
            url: 'http://localhost:6503/api/cityList',
            headers: { 'Content-Type': 'application/json' }
        }
    ).then(response => this.setState({ location: response.data })).catch()

    // This one is for Quicksearch boxes =>

    axios(
        {
            method: 'GET',
            url: 'http://localhost:6503/api/mealtype',
            headers: { 'Content-Type': 'application/json' }
        }
    ).then(response => this.setState({ mealType: response.data })).catch()

    
}




  render() {
    const { location, mealType } = this.state;
    // console.log(location)
    return (
      <div>
        <WallpaperComponent locationdata ={location} />
        <QuickSearchComponent quicksearchBox ={mealType} />
      </div>
    )
  }
}

export default Home