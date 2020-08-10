import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
	return (
		<Router>
			<div className='app'></div>
			<Switch>
				<Route path='/checkout'>
					<Header />
					<Checkout />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Header />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

/* const firebaseConfig = {
  apiKey: "z``zzzxxz
  ]waAIzaSyBdr9H6RJ4drakuBELaoUqa3vM7Q6lkJUM",
  authDomain: "clone-c4606.firebaseapp.com",
  databaseURL: "https://clone-c4606.firebaseio.com",
  projectId: "clone-c4606",
  storageBucket: "clone-c4606.appspot.com",
  messagingSenderId: "15027551924",
  appId: "1:15027551924:web:517cd71592043455f361e1",
  measurementId: "G-EJV5R8Y852"
}; */

export default App;
