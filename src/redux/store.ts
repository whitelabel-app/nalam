import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import reducers from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        ...reducers,
    }),
    applyMiddleware(thunk),
);
