import React from 'react';
import axios from 'axios';
import './filter.css';
// import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class FilterRestaurants extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            resturants : [],
            location:undefined,
            mealtype:undefined,
            cuisine:[],
            hcost:undefined,
            lcost:undefined,
            sort:undefined,
            page:undefined,
            locations:[]
        }
    }
    componentDidMount()
    {
        // Capturing values from Query String
        const qs = queryString.parse(this.props?.location?.search);
        const location = qs.location;
        const mealTypeId=qs.mealtype;

        
        //API call for Filter
        const obj = {
            locationId:location, 
            mealTypeId:mealTypeId 
        };
        
        axios({
            method : 'POST',
            url : 'http://localhost:6503/api/restaurantfilter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturants, location,mealTypeId})).catch()

        axios({
                method: 'GET',
                url: 'http://localhost:6503/api/cityList',
                headers: {'Content-Type' : 'application/json' }
            }).then(response => this.setState( { locations : response.data } )).catch()
    }

    handleSortChange = (sort) =>
    {
        const { location,mealTypeId,lcost,hcost} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
            
        };
        axios({
            method : 'POST',
            url : 'http://localhost:6503/api/restaurantfilter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,sort})).catch()

    }

    handleCostChange = (lcost,hcost) =>
    {
        const { location,mealTypeId,sort} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
        };
        axios({
            method : 'POST',
            url : 'http://localhost:6503/api/restaurantfilter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,lcost,hcost})).catch()
    }

    handleLocationChange = (event) =>
    {
        const location= event.target.value;
        const {mealTypeId,sort,lcost,hcost} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
        };
        axios({
            method : 'POST',
            url : 'http://localhost:6503/api/restaurantfilter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,location})).catch()

    }
   
    handlePage = ( pagination) =>
    {
        const { location,mealTypeId,lcost,hcost,sort} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId,
            pagination:pagination
            
        };
        axios({
            method : 'POST',
            url : 'http://localhost:6503/api/restaurantfilter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,pagination})).catch()

    }

    handleNextPage= (resID) => 
    {
        this.props.history.push(`/details?resturant=${resID}`);
    }
   

    render ()
    {
        const { resturants ,locations} = this.state;
        console.log(resturants)
        // console.log(locations)

        return (
            <div>
                    {/* Container First  */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12"></div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                <h1 className="Filterbreakfast">Places in Mumbai</h1>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12"></div>
                        </div>
                    </div>
                    

                    {/* Container - 2 */}

                    <div className="container">
                         <div className="row" >
                                <div className="col-sm-4 col-md-4 col-lg-4">         
                                        <div className="Filterrectangle">
                                            <div className="FilterFilt">Filters</div>
                                            <div  className="Filter-Select-Location" >Select Location</div>
                                            <div>
                                                <select className="Filterdropdown" onChange={this.handleLocationChange}>
                                                        <option style={{color: '#8c96ab'}} value="0">Select</option>
                                                            {locations.city && locations.city.map((item) => {
                                                                return <option value={item.city_id} >{ `${item.name}, ${item.city}`  }</option>
                                                             }) } 
                                                </select>
                                            </div>
                                            <div className="CuisineFilter">Cuisine</div>
                                            <div>
                                                <input type="checkbox" className="check"  />
                                                <span className="head" >North-Indian</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="check" />
                                                <span className="head">South-Indian</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="check" />
                                                <span className="head">Chinese</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="check" />
                                                <span className="head">Fast Food</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="check" />
                                                <span className="head">Street Food</span>
                                            </div>
                                            <div className="CostFilter">Cost For Two</div>
                                                <div>
                                                    <input type="radio" className="radiobutton" name="costSort" onChange={() => {this.handleCostChange(1,500)}}/>
                                                    <span className="head">Less than ₹ 500</span>
                                                </div>
                                                <div>
                                                    <input type="radio" className="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(500,1000)}}/>
                                                    <span className="head">₹ 500 to ₹ 1000 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" className="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(1000,1500)}}/>
                                                    <span className="head">₹ 1000 to ₹ 1500 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" className="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(1500,2000)}}/>
                                                    <span className="head">₹ 1500 to ₹ 2000 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" className="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(2000,10000)}}/>
                                                    <span className="head">₹ 2000+ </span>
                                                </div>
                                                <div className="FilterSort">Sort</div>
                                                <div>
                                                    <input type="radio" className="radiobutton" name="sort" onChange={() => {this.handleSortChange(1)}}></input>
                                                    <span className="head">Price low to high</span>
                                                </div>
                                                <div>
                                                    <input type="radio" className="radiobutton" name="sort" onChange={() => {this.handleSortChange(-1)}}></input>
                                                    <span className="head">Price high to low</span>
                                                </div>
                                            </div>
                                        </div>
                                <div className="col-sm-8 col-md-8 col-lg-8">
                                    {resturants && resturants.length > 0 ? resturants.map(item => {
                                        return <div className="FilterItems" onClick={() => this.handleNextPage(item.city_id)}>
                                        <img src={item.image} className="FilterPic1"/>
                                        <div className="FilterTheBigChill">{item.name}</div>
                                        <div className="FilterFort">{item.locality}</div>  
                                        <div className="FilterAddress">{item.locality}, {item.name}</div>
                                        <div><hr/></div>
                                        <div className="FilterCUISINES">CUISINES: </div>
                                        <div className="FilterCOSTFORTWO">COST FOR TWO: </div>
                                        <div className="FilterBakery">{item.cuisine.map((food) => `${food.name}, `)}</div>
                                        <div className="FilterSevenHundred"> Rs {item.min_price}/- only</div>
                                    </div>
                                    }) : null}  
                                </div>  
                                <div className = "col-sm-8 col-md-8 col lg-8">
                                {resturants && resturants.length > 0 ?
                                <div className="Filterpagination" style={{'text-align': 'center'}}>
                                <a href="#" >&laquo;</a>
                                <a className="active" href="#" onClick={() => {this.handlePage(1)}} >1</a>
                                <a  href="#" onClick={() => {this.handlePage(2)}}>2</a>
                                <a href="#" onClick={() => {this.handlePage(3)}}>3</a>
                                <a href="#" onClick={() => {this.handlePage(4)}}>4</a>
                                <a href="#" onClick={() => {this.handlePage(5)}}>5</a>
                                <a href="#" onClick={() => {this.handlePage(6)}}>6</a>
                                <a href="#" >&raquo;</a>
                            </div> :
                            <div className="NotFound">Records Not Found...</div>}
                                </div>
            </div>
    </div>
            </div>
            
        )
    }
}

export default FilterRestaurants;
