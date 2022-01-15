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
import { postComment, fetchDishes,fetchPromos, fetchComments } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';


const mapStateToProps = (state) =>{
	return{

		leaders : state.leaders,
		promotions : state.promotions,
		comments : state.comments,
		dishes : state.dishes

	}
}
const mapDispatchToProps = (dispatch)=>({
	postComments : (dishId,rating,author,comment)=>dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => { dispatch(fetchDishes())},
	fetchComments: () => { dispatch(fetchComments())},
	fetchPromos: () => { dispatch(fetchPromos())},
	resetFeedbackForm : ()=> { dispatch(actions.reset('feedback')) }


})

class Main extends Component {
	onDishSelect(dishId){
		this.setState({
			dishselected : dishId
		});

	}
	componentDidMount(){
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}
	render(){
		const HomePage = ()=>{
			return(
				<Home 
					dishesLoading={this.props.dishes.isLoading}
					dishesErrmesg = {this.props.dishes.errmesg}
					dish={this.props.dishes.dishes.filter((dish)=>dish.featured )[0] }

					leader={this.props.leaders.filter((leader)=>leader.featured ===true)[0]}
					promosLoading={this.props.promotions.isLoading}
					promosErrmesg = {this.props.promotions.errMess}
					promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured ===true)[0]}

				/>
			);
		};

		const DishWithId = ({match})=>{

			return(
				<Dishdetail  
					dish={this.props.dishes.dishes.filter((dish)=> dish.id ===parseInt(match.params.dishId,10) )[0]}
					isLoading={this.props.dishes.isLoading}
					errmesg = {this.props.dishes.errmesg}
					commentsErrmesg = {this.props.comments.errMess}
					comments={this.props.comments.comments.filter((comment)=> comment.dishId ===parseInt(match.params.dishId,10) )}
					postComment={this.props.postComments}

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
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route path='/home' component={HomePage}   />
							<Route exact path = '/menu' component={()=> <Menu dishes={this.props.dishes} />}/>
							<Route exact path = '/aboutus' component={() => <About leaders={this.props.leaders}/>}  />
							<Route path = '/menu/:dishId' component={DishWithId} />
							<Route exact path = '/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />

							<Redirect to ='/home'/>

						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer/>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
