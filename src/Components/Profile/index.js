import React, {Component} from 'react';
import {AuthHOC, Container} from "../HOC";
import {AppInput} from "../Common/AppInput";
import {userUpdateInputChange, updateAction, updatePassword} from './../../store/actions'
import {connect} from "react-redux";
import {VError} from "../Common/VError";
import {UserNav} from "../Common/UserNav";

class Profile extends Component {
	state = {
		active: 'profile'
	};

	componentDidMount() {
		const {authenticated} = this.props;
		this.props.userUpdateInputChange({prop: 'email', value: authenticated.email});
		this.props.userUpdateInputChange({prop: 'uname', value: authenticated.uname});
		this.props.userUpdateInputChange({prop: 'id', value: authenticated.id})
	}

	renderUpdateForm() {
		return (<form onSubmit={(e) => {
			e.preventDefault();
			this.props.updateAction();
		}} action="">

			<AppInput placeholder={'User name'} inputValue={this.props.user.updateInfo.uname}
					  onInputChangeProps={(e) => {
						  this.props.userUpdateInputChange({prop: 'uname', value: e.target.value});
					  }}/>

			<AppInput placeholder={'Email'} inputValue={this.props.user.updateInfo.email}
					  onInputChangeProps={(e) => {
						  this.props.userUpdateInputChange({prop: 'email', value: e.target.value});
					  }}/>
			<button type={'submit'} className={'app-btn'}>Update Info</button>

		</form>);
	}

	renderPasswordUpdateForm() {
		return (<form action="" onSubmit={(e) => {
			e.preventDefault();
			this.props.updatePassword();
		}}>

			<VError error={this.props.user.error} name={'oldpassword'}/>
			<AppInput inputValue={this.props.user.updateInfo.oldpassword} placeholder={'Old password'} type={'password'}
					  onInputChangeProps={(e) => {
						  this.props.userUpdateInputChange({prop: 'oldpassword', value: e.target.value});
					  }}/>

			<VError error={this.props.user.error} name={'password'}/>
			<AppInput inputValue={this.props.user.updateInfo.password} placeholder={'New password'} type={'password'}
					  onInputChangeProps={(e) => {
						  this.props.userUpdateInputChange({prop: 'password', value: e.target.value});
					  }}/>

			<VError error={this.props.user.error} name={'cpassword'}/>
			<AppInput inputValue={this.props.user.updateInfo.cpassword} placeholder={'Confirm password'}
					  type={'password'} onInputChangeProps={(e) => {
				this.props.userUpdateInputChange({prop: 'cpassword', value: e.target.value});
			}}/>

			<button type={'submit'} className={'app-btn'}>Update Password</button>
		</form>)
	}

	render() {
		const {authenticated} = this.props;
		return <Container>
			<UserNav/>
			<h1>Welcome, {authenticated.uname || authenticated.email}</h1>


			{this.props.user.successMsg === true ? <div className={'alert-success'}>
				Successful.
			</div> : null}

			<div className="up-btn">
				<a href="/" className={this.state.active === 'profile' ? 'active' : ''} onClick={(e) => {
					e.preventDefault();
					this.setState({active: 'profile'});
				}}>Update Profile</a>

				<a href="/" className={this.state.active === 'password' ? 'active' : ''} onClick={(e) => {
					e.preventDefault();
					this.setState({active: 'password'});
				}}>Update Password</a>
			</div>

			<div className="edit-form">
				{this.state.active === 'profile' ? this.renderUpdateForm() : this.renderPasswordUpdateForm()}
			</div>
		</Container>
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
};


export default connect(mapStateToProps, {userUpdateInputChange, updateAction, updatePassword})(AuthHOC(Profile));