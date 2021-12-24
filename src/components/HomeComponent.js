import React  from 'react';
import { Card , CardBody ,CardImg, CardTitle, CardText, CardSubtitle} from 'reactstrap';

function RenderCard({item}){
	console.log(item);
	return(
		<Card>
			<CardImg src={item.image} alt={item.name}/>
			<CardBody>
				{item.designation ? <CardSubtitle>item.designation </CardSubtitle>:null}
				<CardTitle>{item.name}</CardTitle>
				<CardText>{item.description}</CardText>

			</CardBody>
		</Card>

	);
}

function  Home(props){
	return(
		<div className='container'>
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard  item={props.leader} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard className="col-12 col-md m-1" item={props.promotion} />
				</div>
			</div>
		</div>
	);

}


export default Home; 
