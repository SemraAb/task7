import { createStore } from 'redux';
import itemReducer from './reducers/itemReducer';

const store = createStore(itemReducer);


export default store;