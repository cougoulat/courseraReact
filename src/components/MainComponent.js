import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu  from './MenuComponents';
import Dishdetail  from './DishdetailComponent';
import { DISHES }  from '../shared/dishes';

class Main extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			dishes : DISHES,
			dishselected : null
		}
	};
	onDishSelect(dishId){
		this.setState({
			dishselected : dishId
		});

	}
	render(){
		return (
			<div >
				<Navbar dark color="primary">
					<div className="container"> 
						<NavbarBrand href="/">Ristaurant Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
				<Dishdetail dish={this.state.dishes.filter(dish => dish.id === this.state.dishselected)[0]}/>
			</div>
		);
	}
}

export default Main;
