import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = ({logout}) => {
	return (<div className="user-nav">
		<Link to={'/profile'}><img src="/img/user.png" alt=""/></Link>
		<img src="/img/logout.png" onClick={() => {
			logout()
		}} alt=""/>
	</div>);
};

export {UserNav}