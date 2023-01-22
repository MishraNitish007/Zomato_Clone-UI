import React, { Component } from 'react'
import './Style.css'
import axios from 'axios';


export class WallpaperComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    handleLocationChange = (event) => {
        const locationName = event.target.value;
        console.log(locationName);
        axios(
            {
                method: 'GET',
                url: `http://localhost:6503/api/getRestaurantsbycity/?city=${locationName}`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurants: response.data })).catch()
                // console.log(restaurants);

    }


    handleSearch = (event) => {
        const { restaurants } = this.state;
        console.log(restaurants)
        // console.log(restaurants);
        const searchText = event.target.value;
        let filteredList;
        if (searchText === "") {
            filteredList = [];
        } else {
            filteredList = restaurants.restaurantList.filter((item) => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            })
        }
        this.setState({ suggestions: filteredList, searchText: searchText });
    }

    handleRestaurantClick = (resaurantId) => {
        this.props.history.push(`/details?restaurant=${resaurantId._id}`)
    }

    renderSuggestions = () => {
        const { suggestions, searchText } = this.state;
        if (suggestions && suggestions.length === 0 && searchText) {
            return (
                <ul>
                    <li>No Match found</li>
                </ul>
            )
        }
        return (
            <ul className="unorderedList" style={{ color: "white" }}>
                {suggestions && suggestions.map((item, index) => {
                    return <li key={index} onClick={() => this.handleRestaurantClick(item)} ><img src={`${item.thumb}`} className="resIcon" />{`${item.name}, ${item.city}`}</li>
                })}
            </ul> 
        )
    }


    render() {

        // // console.log(this.props);
        // const locname =this.props.locationdata
        // // console.log(locname);
    //    const cityName =  locname.map((item)=>{return item.name})
        const { locationdata } = this.props;

    // console.log(locationdata.city)
    // const locName =locationdata.map()

        return (
            // console.log(locname)
            <div>
                <div>
                    <body>
                        <header>



                            <div className="container-fluid">

                                <nav className="navbar navbar-light ">
                                    <div className="container">
                                        <a className="navbar-brand"></a>
                                        <form className="d-flex">
                                            <button type="button" className="btn btn-outline-info mx-4">login</button>
                                            <button className="btn btn-outline-danger" type="submit">Create an account</button>
                                        </form>
                                    </div>
                                </nav>
                                {/* <!-- Adding Logo --> */}

                                <div id="logodiv" className="mx-auto d-flex justify-content-center align-items-center ">
                                    <h1 id="logo">e!</h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 offset-1 offset-md-0 col-md-12">
                                        <h1 className="text-center">Find the best restaurants, cafes, and bars</h1>
                                    </div>
                                </div>

                                {/* Seacrchbar */}

                                <div className="container">
                                    <div className="locationSelector">

                                        <div className="row gy-5">
                                            <div className=" col-md-4 col-sm-10 offset-sm-1 offset-md-0 col-10 offset-1 " >
                                           
                                                <select className="locationDropdown" onChange={this.handleLocationChange}>
                                                  <option value="">--- select---</option>
                                                {  locationdata.city &&  locationdata.city.map((item) => {
                                                   return <option value={item.name}>{`${item.name}`}</option>
                                                    })}

                                                
                                                </select>
                                            </div>
                                            <div className="   col-md-8 col-sm-10 offset-sm-1 offset-md-0 col-10 offset-1">
                                                <div className="container11">
                                                    {/* <img src={require('./Image2/search.svg')} alt="search" className="icon" width="32px" height="32px" /> */}
                                                    <input type="search" name="search" className="searchBox" placeholder="Enter Your location"   onChange={this.handleSearch}/>
                                                     {this.renderSuggestions()}

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </header>
                    </body>



                </div >
            </div >



        )
    }
}

export default WallpaperComponent