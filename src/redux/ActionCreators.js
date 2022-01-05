import * as ActionTypes from './ActionTypes';

export const AddComments = (dishId,rating,author,comment)=>{
	return { 	
		type : ActionTypes.ADD_COMMENTS,
		payload : { 
			dishId: dishId,
			rating: rating,
			author: author,
			comment: comment
		}

	}
}



