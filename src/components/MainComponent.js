import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu  from './MenuComponent';
import About  from './AboutComponent';
import Contact  from './ContactComponent';
import Header  from './HeaderComponent';
import Footer  from './Footer';
import Dishdetail  from './DishdetailComponent';
import { Switch, Route, Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
	return{

	leaders : state.leaders,
	promotions : state.promotions,
	comments : state.comments,
	dishes : state.dishes

	}

}

class Main extends Component {
	constructor(prop){
		super(prop);
	};
	onDishSelect(dishId){
		this.setState({
			dishselected : dishId
		});

	}
	render(){
		const HomePage = ()=>{
			return(
				<Home dish={this.props.dishes.filter((dish)=>dish.featured )[0]}
					leader={this.props.leaders.filter((leader)=>leader.featured ===true)[0]}
					promotion={this.props.promotions.filter((promotion)=>promotion.featured ===true)[0]}

				/>
			);
		};

		const DishWithId = ({match})=>{

			return(
				<Dishdetail  dish={this.props.dishes.filter((dish)=> dish.id ===parseInt(match.params.dishId,10) )[0]}
					comments={this.props.comments.filter((comment)=> comment.id ===parseInt(match.params.dishId,10) )}

				/>

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
					<Route exact path = '/menu' component={()=> <Menu dishes={this.props.dishes} />}/>
					<Route exact path = '/aboutus' component={() => <About leaders={this.props.leaders}/>}  />
					<Route path = '/menu/:dishId' component={DishWithId} />}/>
				<Route exact path = '/contactus' component={Contact} />}/>
				<Redirect to ='/home'/>

	</Switch>
	<Footer/>
	</div>
);
}
}

export default withRouter(connect(mapStateToProps)(Main));

