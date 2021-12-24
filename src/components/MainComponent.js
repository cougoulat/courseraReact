import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu  from './MenuComponent';
import Header  from './HeaderComponent';
import Footer  from './Footer';
import Dishdetail  from './DishdetailComponent';
import { DISHES }  from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';

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
		const HomePage = ()=>{
			return(
				<Home/>
			);
		};

		return (
			<div >
				<Header/>
				{/*
				<Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
				<Dishdetail dish={this.state.dishes.filter(dish => dish.id === this.state.dishselected)[0]}/>
				*/}
				<Switch>
					<Route path='/home' component={HomePage}   />
					<Route exact path = '/menu' component={()=> <Menu dishes={this.state.dishes} />}/>
					<Redirect to ='/home'/>

				</Switch>
				<Footer/>
			</div>
		);
	}
}

export default Main;
