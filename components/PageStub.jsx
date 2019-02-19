// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
// Components
// External Components
import Typography from '@material-ui/core/Typography';

class PageStub extends React.Component {
	constructor(props) {
		super(props);

		this.opened = this.opened.bind(this);
		this.unopened = this.unopened.bind(this);
	}

	unopened() {
		return <div className="header">
			<Typography variant="h6" color="black" className="page-title">
				{this.props.page_title_}
			</Typography>
		</div>;
	}

	opened() {
		return "";
	}

	render() {
		const document = this.unopened();
		/*if(this.props.selected) {
			const document = this.opened();
		} else {
			const document = this.unopened();
		}*/

		return <div className="page-view">
				{document}
		</div>;
	}
}

export default PageStub;