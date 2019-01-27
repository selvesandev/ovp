import React, {Component} from 'react';
import {AppInput, VError} from "../Common";
import {connect} from "react-redux";
import {userInputChange, loginAction} from './../../store/actions'

class Login extends Component {
	render() {
		const {email, password} = this.props.user.info;
		return <div className="auth-container">
			<h1>Login</h1>
			<p>Start creating/managing your daily todo lists..</p>
			<br/>
			<VError name={'email'} error={this.props.user.error}/>
			<form action="" onSubmit={(e) => {
				e.preventDefault();
				this.props.loginAction();
			}}>
				<AppInput placeholder={'Your Email'} inputValue={email} onInputChangeProps={(e) => {
					this.props.userInputChange({prop: 'email', value: e.target.value});
				}}/>
				<AppInput inputValue={password} placeholder={'Password'} type={'password'}
						  onInputChangeProps={(e) => {
							  this.props.userInputChange({prop: 'password', value: e.target.value});
						  }}/>
				<button type="submit" className={'app-btn'}>Login</button>
			</form>
		</div>
	}
}


const mapStateToProps = state => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, {userInputChange, loginAction})(Login);