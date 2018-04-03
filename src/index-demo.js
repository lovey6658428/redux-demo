import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App.js'
import {counter,addGun, removeGun, addGunAsync} from './index.redux.js'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))
function render(){
    ReactDom.render(<App store={store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun} />,document.getElementById('root'))
}
render()
store.subscribe(render)

