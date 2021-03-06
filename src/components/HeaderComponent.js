import React, { Component } from 'react';
import { Form,FormGroup, Label, Input,  Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button} from 'reactstrap'
import { NavLink} from 'react-router-dom';
class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			isNavOpen : false,
			isModalOpen : false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	toggleNav(){
		this.setState({
			isNavOpen : !this.state.isNavOpen

		})
	}
	handleSubmit(event){
		this.setState({ isModalOpen : !this.state.isModalOpen});
		alert("username "+this.username.value);
		event.preventDefault();

	}
	toggleModal(){
		this.setState({
			isModalOpen : !this.state.isModalOpen

		})
	}


	render(){
		return(

			<>
				<Navbar dark expand='md' >
					<div className="container"> 
						<NavbarToggler onClick={this.toggleNav}/>
						<NavbarBrand className="mr-auto" href="/">
							<img src='assets/images/logo.png' height="30" width="41" alt='Ristaurant Con Fusion'/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>

							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to='/home'>
										<span className="fa fa-home fa-lg"/>Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/aboutus'>
										<span className="fa fa-info fa-lg"/>About us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/menu'>
										<span className="fa fa-list fa-lg"/>Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/contactus'>
										<span className="fa fa-address fa-lg"/>Contact us
									</NavLink>
								</NavItem>

							</Nav>
							<Nav className='ml-auto ' navbar>
								<NavItem >
									<Button outline onClick={this.toggleModal}>
										<span className='fa fa-sign-in fa-lg'> </span>Login 
									</Button>
								</NavItem>
							</Nav>

						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1> Restaurant  ConFusion</h1>
								<p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
							</div>
						</div> 
					</div>
				</Jumbotron>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label htmlFor='username'>Username</Label>
								<Input type='text' id='username' name='username' placeholder='username' innerRef={(input)=>this.username=input}/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='password'>Password</Label>
								<Input type='password' id='password' name='password' placeholder='password' innerRef={(input)=>this.password=input}/>
							</FormGroup>
							<FormGroup>
								<Label check>
									<Input type='checkbox' name='name' innerRef={(input)=>this.check=input}/>Remember me
								</Label>
							</FormGroup>
							<FormGroup check>
								<Button type='submit' value='submit' color='primary'>Login </Button>
							</FormGroup>

						</Form>

					</ModalBody>
				</Modal>
			</>
		);
	}
}
export default Header;
