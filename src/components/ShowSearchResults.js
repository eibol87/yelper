import React, { Component } from 'react';
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Navbar from './Navbar'
import Filters from './Filters'

class  ShowSearchResults extends Component {
	constructor(){
		super()
		this.state={
	      	result: [{
		        id: '',
		        name: '',
		        image_url: '',
		        is_closed: '',
		        rating: ''        
      		}]
    	}
	}
	getApiData(){
	    getYelpData(this.props.match.params.query).then(
	      dataSearchYelp => {
	      	console.log(this.props.match.params.query)
	        this.setState({
	          result:[...dataSearchYelp]
	            .map(function(yelpData){
	              return (   {
	                  id: yelpData.id,
	                  name: yelpData.name,
	                  image_url: yelpData.image_url,
	                  is_closed: yelpData.is_closed,
	                  rating: yelpData.rating
	              })
	          })
	        })
      })
  	}

  	componentDidMount(){
    	this.getApiData()
  	}
	render(){
		console.log(this.state)
		return (
			<div>
			 <Navbar/>
				<h1>Estoy en la ShowSearchResults</h1>
					<Filters filters={this.state.res}/>

				<Results/>
			</div>
		)
	}
}

export default ShowSearchResults;