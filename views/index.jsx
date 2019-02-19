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

		this.select = this.select.bind(this);
		this.deselect = this.deselect.bind(this);
	}

	loadingView() {
	  return <div className="loading-view">
					<Typography variant="h6" color="black" className="loading-title">
						Loading...
					</Typography>
				</div>;
	}

	select(key) {
		this.setState({ "key" : key });
	}
	deselect() {
		this.setState({ "key" : -1 });
	}

	render() {
		return <div className="wiki-front-page">
			<NavBar />

			<div className="central-pages">
				{this.state.data==null ? (
			        this.loadingView()
			    ) : (
			        this.state.data.titles.map((page, id) => {
						return ( <PageStub
									page_title_ = {page}
									selected = {this.state.key == id}
									id = {id}
									onSelect = {this.select}
									onDeselect = {this.deselect}
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
