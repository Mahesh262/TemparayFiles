// store.js
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';
const devEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const Stores = createStore(Reducers, compose(applyMiddleware(thunk),devEnhancer));

export default Stores;
