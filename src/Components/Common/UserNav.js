import React from 'react';

const UserNav = ({logout}) => {
	return (<div className="user-nav">
		<img src="/img/user.png" alt=""/>
		<img src="/img/logout.png" onClick={() => {
			logout()
		}} alt=""/>
	</div>);
};

export {UserNav}