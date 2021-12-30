import { DISHES }  from '../shared/dishes';
import { LEADERS }  from '../shared/leaders';
import { PROMOTIONS }  from '../shared/promotions';
import { COMMENTS }  from '../shared/comments';

export const initialState = {
	leaders : LEADERS,
	promotions : PROMOTIONS,
	comments : COMMENTS,
	dishes : DISHES
};

export	const Reducer = (state = initialState, action) => {
	return state;

};
