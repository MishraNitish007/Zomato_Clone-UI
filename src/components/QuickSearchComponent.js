import React, { Component } from 'react'
import './Style.css'
import { Link } from "react-router-dom"



export class QuickSearchComponent extends Component {
    render() {
        const { quicksearchBox } = this.props;
        console.log(quicksearchBox)

        return (
            <div>

                <div>
                    <div className="heading2">
                        <h1>Quick Search</h1>
                    </div>
                    <div className="head1">
                        <h2>Discover restaurants by type of meal</h2>
                    </div>

                    <div className="container ">
                        <div className="row gy-5">
                            {quicksearchBox.mealtype && quicksearchBox.mealtype
                                .map((item) => {
                       

                                    return    <div className="col-sm-12 col-md-4">
                                        <div className="card">
                                            <div className="row">
                                                <div className="col">
                                                    <img src={item.image} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col">
                                                    <p className="GridHead">{item.name}</p>
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                })} 

                        </div>
                    </div>
                </div>
            </div>







        )
    }
}

export default QuickSearchComponent