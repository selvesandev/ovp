import React, {Component} from 'react';
import {isAuthenticated, logout} from './../../store/actions'
import {connect} from "react-redux";


const AuthHOC = (GuardedComponent) => {
	class AuthHOC extends Component {
		constructor(props) {
			super(props);
			props.isAuthenticated();
		}

		render() {
			if (this.props.user.isAuthenticated === true)
				return <GuardedComponent authenticated={this.props.user.info} {...this.props}/>;
			return null;
		}
	}

	const mapStateToProps = state => {
		return {
			user: state.user
		}
	};


	return connect(mapStateToProps, {isAuthenticated, logout})(AuthHOC);
};

export {AuthHOC}