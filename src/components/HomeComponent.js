import React  from 'react';
import { Card , CardBody ,CardImg, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';

function RenderCard({item,isLoading,errmesg}){
	if(isLoading){
		return(
			<Loading/>
		);

	}else if(errmesg){
		return(
			<h4> {errmesg}</h4>
		);
	}
	console.log(item);
	return(
		<Card>
			<CardImg src={baseUrl+item.image} alt={item.name}/>
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
					<RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />

				</div>
				<div className="col-12 col-md m-1">
					<RenderCard className="col-12 col-md m-1" item={props.promotion}  isLoading={props.promosLoading} errMess={props.promosErrmesg}  />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard  item={props.leader} />
				</div>
			</div>
		</div>
	);

}


export default Home; 
