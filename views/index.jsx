// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
// Components
import PageStub from '../components/PageStub.jsx';
import NavBar from '../components/NavBar.jsx';
// External Components
import Typography from '@material-ui/core/Typography';

class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			key: -1
		};

		this.loadingView = this.loadingView.bind(this);
	}

	loadingView() {
	  return <div className="loading-view">
					<Typography variant="h6" color="black" className="loading-title">
						Loading...
					</Typography>
				</div>;
	}

	render() {
		return <div className="wiki-front-page">
			<NavBar />

			<div className="central-pages">
				{this.state.data==null ? (
			        this.loadingView()
			    ) : (
			        this.state.data.titles.map((page) => {
						return ( <PageStub
									page_title_ = {page}
									selected = {false}
								/>
						);
					})
			    )}
			</div>
		  </div>;
	}

	componentDidMount() {
		fetch('./pages')
		  .then(response => response.json())
		  .then(data => this.setState({ "data" : data }));
	}
}

export default Index;

ReactDOM.render(
	<Index />, document.querySelector(".app")
);
