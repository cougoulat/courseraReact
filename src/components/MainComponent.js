import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu  from './MenuComponent';
import About  from './AboutComponent';
import Contact  from './ContactComponent';
import Header  from './HeaderComponent';
import Footer  from './Footer';
import Dishdetail  from './DishdetailComponent';
import { DISHES }  from '../shared/dishes';
import { LEADERS }  from '../shared/leaders';
import { PROMOTIONS }  from '../shared/promotions';
import { COMMENTS }  from '../shared/comments';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			leaders : LEADERS,
			promotions : PROMOTIONS,
			comments : COMMENTS,
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
				<Home dish={this.state.dishes.filter((dish)=>dish.featured )[0]}
					leader={this.state.leaders.filter((leader)=>leader.featured ===true)[0]}
					promotion={this.state.promotions.filter((promotion)=>promotion.featured ===true)[0]}

				/>
			);
		};

		const DishWithId = ({match})=>{

			return(
				<Dishdetail  dish={this.state.dishes.filter((dish)=> dish.id ===parseInt(match.params.dishId,10) )[0]}
					comments={this.state.comments.filter((comment)=> comment.id ===parseInt(match.params.dishId,10) )}

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
					<Route exact path = '/menu' component={()=> <Menu dishes={this.state.dishes} />}/>
					<Route exact path = '/aboutus' component={() => <About leaders={this.state.leaders}/>}  />
					<Route path = '/menu/:dishId' component={DishWithId} />}/>
				<Route exact path = '/contactus' component={Contact} />}/>
				<Redirect to ='/home'/>

	</Switch>
	<Footer/>
	</div>
);
}
}

export default Main;
