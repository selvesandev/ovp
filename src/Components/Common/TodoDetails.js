import React, {Component} from 'react';

class TodoDetails extends Component {
	state = {
		editMode: false,
	};

	renderDetails() {
		const {selected, inputChange, value, submit} = this.props;


		return (<div className="details-container">
			{this.state.editMode === false ? <p onDoubleClick={() => {
				this.setState({editMode: true});
				inputChange({prop: 'todoDetailValue', value: selected.detail})
			}}>{selected.detail}</p> : <div>
				<small><span>ctrl+enter</span> to update the detail.</small>
				<textarea value={value} onKeyPress={(e) => {
					if (e.key === 'Enter' && e.ctrlKey === true) {
						submit();
					}
				}} onChange={(e) => {
					inputChange({prop: 'todoDetailValue', value: e.target.value})
				}} className={'detail-box'} placeholder={'Your details for ' + selected.todo}/>
			</div>}

		</div>);
	}

	render() {
		const {selected, inputChange, value, submit} = this.props;
		if (!selected.detail)
			return (
				<div className="details-container">
					<small><span>ctrl+enter</span> to post the detail.</small>
					<textarea value={value} onKeyPress={(e) => {
						if (e.key === 'Enter' && e.ctrlKey === true) {
							submit();
						}
					}} onChange={(e) => {
						inputChange({prop: 'todoDetailValue', value: e.target.value})
					}} className={'detail-box'} placeholder={'Your details for ' + selected.todo}/>
				</div>);
		else
			return this.renderDetails();
	}


	componentDidMount() {
		let $this = this;
		document.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') {
				$this.setState({editMode: false});
			}
		})
	}

}

export {TodoDetails};