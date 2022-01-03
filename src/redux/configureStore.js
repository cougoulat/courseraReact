import {createStore,combineReducers} from 'redux';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Dishes} from './dishes';
import {Comments} from './comments';


export const ConfigureStore = ()=>{
	const store = createStore(
	combineReducers(	{
			dishes : Dishes,
			leaders : Leaders,
			promotions : Promotions,
			comments: Comments

		})
	);
	return store;

};

