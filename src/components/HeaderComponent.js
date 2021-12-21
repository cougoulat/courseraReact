import React, { Component } from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap'
class Header extends Component{


	render(){
		return(

			<>
				<Navbar dark >
					<div className="container"> 
						<NavbarBrand href="/">Ristaurant Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1> Restaurant  ConFusion</h1>
								<p> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</div>
						</div> 
					</div>
				</Jumbotron>
			</>
		);
	}
}
export default Header;
