import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store.js'
import Router from '../routes/Router.jsx'
import './App.css'

function App() {


	return (
		<Provider store={store}>
 			<Router />
		</Provider>
	)
}
export default App
