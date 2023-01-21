import { reducers } from "../reducers/reducer";
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(reducers, composeWithDevTools())


export default store