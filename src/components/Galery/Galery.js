import React, { Component } from 'react';
import { apiAlbums } from '../../constants';
import { Link } from 'react-router-dom';

class Galery extends Component {

  state = {
		ulbumsIsLoaded: false
	} 

	componentDidMount(){
		const {store} = this.props;
		fetch(apiAlbums)
			.then(res => res.json())
			.then(res => {
				store.albums = res;
				this.setState({
					ulbumsIsLoaded: true 
				});
			});
	}

	getAlbums = (el,i) => (
		<div key={i} className="main__wrap--item">
			<Link to={`/photos/${el.id}`} className="main__wrap--link">{el.title}</Link>
		</div>
	)

	render(){
		const {store} = this.props;
		// const {ulbumsIsLoaded} = this.state
		const albums = store.albums.toJS()
		return ( 
			<div>
				<h1 className="main__title">
					Your gallery
				</h1>
				<div className="main__wrap">
					{albums.map((el, i)=> this.getAlbums(el,i))}
				</div>
			</div>
		)
	}
}

export default Galery;