import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Dishes} from './dishes';
import {Comments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = ()=>{
	const store = createStore(
		combineReducers(	{
			dishes : Dishes,
			leaders : Leaders,
			promotions : Promotions,
			comments: Comments

		}),
		applyMiddleware(thunk,  logger)
	);
	return store;

};

