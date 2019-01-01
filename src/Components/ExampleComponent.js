import React, {Component} from 'react';


class ExampleComponent extends Component {
	value = 'Hello ';


	myMethod() {
		return this.value;
	}

	render() {
		return (<div>{this.myMethod() + ' from example component'}</div>);
	}

}


export default ExampleComponent;