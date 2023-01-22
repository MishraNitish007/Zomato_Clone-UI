import React, { Component } from 'react'
import './Style.css'


export class QuickSearchComponent extends Component {
    render() {
        return (
            <div>
                <div className="heading2">
                    <h1>Quick Search</h1>
                </div>
                <div className="head1">
                    <h2>Discover restaurants by type of meal</h2>
                </div>

                <div className="container ">
                    <div className="row gy-5">

                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col">
                                        <img src={require('./Image2/breakfast.jpg')} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col">
                                        <p className="GridHead">Breakfast</p>
                                        <p>Start your day with exclusive breakfast.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col">
                                        <img src={require('./Image2/lunch.jpg')} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col">
                                        <p className="GridHead">Lunch</p>
                                        <p>Start your day with exclusive lunch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col">
                                        <img src={require('./Image2/snacks.png')} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col">
                                        <p className="GridHead">Snacks</p>
                                        <p>Start your day with exclusive snacks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                        <div className=" row  gy-5 ">

                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <img src={require('./Image2/dinner.png')} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col">
                                            <p className="GridHead"> Dinner</p>
                                            <p>Start your day with exclusive dinner.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <img src={require('./Image2/drinks.png')} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col">
                                            <p className="GridHead">Drink</p>
                                            <p>Start your day with exclusive drinks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <img src={require('./Image2/nightlife.png')} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col">
                                            <p className="GridHead">Night Life</p>
                                            <p>Start your day with exclusive nightlife.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>



                </div>

            
        

        )
    }
}

export default QuickSearchComponent