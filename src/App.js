import React, {Component} from 'react';
import './Style/scss/style.scss'
import Todo from "./Components/Todo";


class App extends Component {
	render() {
		return (
			<div>
				<Todo/>
			</div>
		);
	}
}

export default App;
