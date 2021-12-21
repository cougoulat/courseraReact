import React, { Component } from 'react';
import Menu  from './MenuComponents';
import Header  from './HeaderComponent';
import Footer  from './Footer';
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
				<Header/>
				<Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
				<Dishdetail dish={this.state.dishes.filter(dish => dish.id === this.state.dishselected)[0]}/>
				<Footer/>
			</div>
		);
	}
}

export default Main;
