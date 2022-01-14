import React,{Component} from 'react';
import { FaPen } from "react-icons/fa";
import { Label,Row,Modal,ModalBody, ModalHeader,FormGroup,Button,Card, CardImg,  CardText, CardBody, CardTitle, BreadcrumbItem,Breadcrumb } from 'reactstrap';
import { Errors,LocalForm, Control} from 'react-redux-form';
import { Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderComments({comments,postComment, dishId}){
	const commentaire = comments.map((comm) => {
		return (
			<ul key={comm.id} className="list-unstyled">
				<li key={comm.id}> {comm.comment} </li>
				<li key={comm.id+1}> -- {comm.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))} </li>
			</ul>
		);
	});
	if(comments != null){
		return(

			<div  className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				{commentaire}
				<CommentForm dishId={dishId} postComment={postComment} />
			</div>
		);
	}else{
		return(<div></div>);

	}
}
function RenderDish({dish}){
	return(
		<div  className="col-12 col-md-5 m-1">
			<Card >
				<CardImg  src={baseUrl + dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>);
};
const Dishdetail = (props)=>{
	if(props.isLoading){
		return(
			<div className='container'>
				<div className='row'>
					<Loading/>
				</div>
			</div>
		);

	}else if(props.errmesg){
		return(
			<div className='container'>
				<div className='row'>
					<h4>{props.errmesg}</h4>
				</div>
			</div>
		);


	}else if(props.dish !=null){
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem> 
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>{props.dish.name}</h3>
						<hr/>
					</div>
				</div>
				<div className="row">
					<RenderDish dish={props.dish}/>
					<RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
				</div>
			</div>

		);
	}else{
		return (<div></div>);
	}
}

class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			isModalCommentsOpen : false,
			name: '',
			rating: '',
			comment: ''

		}
		
		this.toggleModalComments = this.toggleModalComments.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(values){
		this.setState({ isModalCommentsOpen : !this.state.isModalCommentsOpen});
		        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);



	}
	toggleModalComments(){
		this.setState({
			isModalCommentsOpen : !this.state.isModalCommentsOpen 
		});
	}


	render(){

		return(
			<div className='container'>
				<div className='row'>
					<Button outline onClick={this.toggleModalComments}> 
						<FaPen/>	Submit Comment 
					</Button>
				</div>
				<Modal isOpen={this.state.isModalCommentsOpen} toggle={this.toggleModalComments}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment </ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(value) =>this.handleSubmit(value)}>
							<Label htmlFor="rating" >Rating</Label>
							<Row className='form-group m-1'>
								<Control.select model='.rating'  name='rating'
									className='form-control'>
									<option>1 </option>
									<option>2 </option>
									<option>3 </option>
									<option>4 </option>
									<option>5 </option>
								</Control.select>

							</Row>
							<Row className="form-group m-1">
								<Label htmlFor="author" >Your Name</Label>
								<Control.text model=".author" id="author" name="author"
									placeholder="Your Name"
									className="form-control"
									validators={{
										minLength: minLength(3), maxLength: maxLength(15)
									}}
								/>
								<Errors
									className="text-danger"
									model=".author"
									show="touched"
									messages={{
										minLength: 'Must be greater than 2 characters',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</Row>
							<FormGroup row className='m-1'>
								<Label  htmlFor="comment" >Comment</Label>
								<Control.textarea model='.comment' name="comment" id="comment" rows="12" 
									className='form-control'/>
							</FormGroup>
							<FormGroup row className='m-1'>
								<Button color="primary" type='submit'> Submit</Button>
							</FormGroup>
						</LocalForm>

					</ModalBody>
				</Modal>
			</div>



		);

	};

};


export default Dishdetail;
