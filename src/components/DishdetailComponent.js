import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComment({dish}){
	const commentaire = dish.comments.map((comm) => {
		return (
			<ul key={comm.id} className="list-unstyled">
				<li key={comm.id}> {comm.comment} </li>
				<li key={comm.id+1}> -- {comm.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))} </li>
			</ul>
		);
	});
	if(dish != null){
		return(

			<div  className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				{commentaire}
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
				<CardImg  src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>);
};
const Dishdetail = (props)=>{
	console.log("Dishdetail render evoked");
	if(props.dish !=null){
		return (
			<div className="container">
				<div className="row">
					<RenderDish dish={props.dish}/>
					<RenderComment dish={props.dish}/>
				</div>
			</div>

		);
	}else{
		return (<div></div>);
	}
}



export default Dishdetail;
