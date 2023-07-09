import {createStore ,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {movieReducer} from '../reducer/MoviesReducer';
import thunk from 'redux-thunk'

export const store = createStore(movieReducer,applyMiddleware(thunk));