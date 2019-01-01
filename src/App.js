import React, {Component} from 'react';
import logo from './Img/logo.svg';
import './Style/css/App.css';
import ExampleComponent from './Components/ExampleComponent';


class App extends Component {
	render() {
		return (
			<div>
				<img  src={logo} height={100} width={100} alt=""/>
				<h1>Hello this is my component</h1>
				<p>{2 + 2}</p>

				<ExampleComponent/>

			</div>
		);
	}
}

export default App;
