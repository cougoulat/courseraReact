import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponents';
import { DISHES }  from './shared/dishes';
import './App.css';

class App extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			dishes : DISHES
		}
	};
	render(){
		return (
			<div >
			<Navbar dark color="primary">
			<div className="container"> 
			<NavbarBrand href="/">Ristaurant Con Fusion</NavbarBrand>
			</div>
			</Navbar>
			<Menu dishes={this.state.dishes} />
			</div>
		);
	}
}

export default App;
