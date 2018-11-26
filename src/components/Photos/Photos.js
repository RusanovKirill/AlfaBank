import React, { Component } from 'react';
import { apiGetImgById } from '../../constants';


class Photos extends Component {

  state = {
		imagesIsLoaded: false,
		filter: ''
	}

	componentDidMount(){
		const {store, match:{params:{id}}} = this.props;
		fetch(apiGetImgById+`?albumId=${id}`)
			.then(res => res.json())
			.then(res => {
				store.images = res;
				this.setState({
					imagesIsLoaded: true 
				});
			})
	}

	renderPhoto = (el,i) => (
		<div className="main__wrap--blockinfo" key={i}>
			<div key={i} className="main__wrap--title">
				{el.title}
			</div>
			<div className="main__wrap--wrimg">
				<img key={i} src={el.url} className="main__wrap--img" alt="img"/>
			</div>
		</div>
	)

	handleFilter = (arg) => (e) => {
		this.setState({
			filter: e.target.value
		});
	}

	render(){
		const {store} = this.props;
		const {filter} = this.state;
		const images = store.images ? store.images.toJS() : [];
		const filteredImages = images.filter(elem => elem.title.toLowerCase().includes(filter.toLowerCase()));
		return ( 
			<div className="main__wrap--photos">
				<div className="main__wrap--wrinput">
					<input onChange={this.handleFilter()} className="main__wrap--input" />
				</div>
				<div className="main__wrap--content">
					{filteredImages.map((el, i)=> this.renderPhoto(el,i))}
				</div>
			</div>
		)
	}
}

export default Photos;