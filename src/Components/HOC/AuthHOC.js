import React, {Component} from 'react';


const AuthHOC = (GuardedComponent) => {
	class AuthHOC extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return <GuardedComponent {...this.props}/>
		}
	}

	return AuthHOC;
};

export {AuthHOC}