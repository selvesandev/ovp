import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NotFound extends Component {
	render() {
		const {pathname} = this.props.location;
		return <div className={'not-found'}>
			<h1>NOT FOUND</h1>
			<p>
				Sorry the page that your are looking for <span className={'path-name'}>{pathname}</span> could not be
				found.
			</p>

			<br/>

			<Link to={'/'} style={{textDecoration:'none',fontWeight:'bold'}}>GO TO HOME</Link>
		</div>
	}
}

export {NotFound};