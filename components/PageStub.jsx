// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
// Components
// External Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class PageStub extends React.Component {
	constructor(props) {
		super(props);

		this.opened = this.opened.bind(this);
		this.unopened = this.unopened.bind(this);

		this.loadPage = this.loadPage.bind(this);

		this.state = {
			data: null
		};
	}

	loadPage() {
		this.props.onSelect(this.props.id)
		if(this.state.data == null) {
			fetch('./page/' + this.props.page_title_ + "/latest")
		  .then(response => response.json())
		  .then(data => this.setState({ "data" : data }));
		}
	}

	unopened() {
		return <div className="unopened-page" onClick={this.loadPage}>
			<Card className="inner-page">
	      		<CardContent>
					<Typography variant="h4" color="black" className="page-title">
						{this.props.page_title_}
					</Typography>
				</CardContent>
			</Card>
		</div>;
	}

	opened() {
		return <div className="opened-page" onClick={this.props.onDeselect}>
			<Card className="inner-page">
	      		<CardContent>
					<Typography variant="h4" color="black" className="page-title">
						{this.props.page_title_}
					</Typography>
					<Typography variant="h6" color="black" className="page-title">
						{this.state.data==null ? (
				        	<div className="text">Loading...</div>
				   		) : (
							<div className="text">this.state.data</div>
				   		)}
					</Typography>
				</CardContent>
			</Card>
		</div>;
	}

	render() {
		return <div className="page-view">
				{this.props.selected ? (
			        this.opened()
			    ) : (
			    	this.unopened()
			    )}
		</div>;
	}
}

export default PageStub;