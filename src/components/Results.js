import React, {Component} from 'react';
import './Results.css'

class Results extends Component {

	render() {
        console.log(this.props.inputresults)
    	return (<div className="container">
    <div className="row">
    <div className="well">
        <h1 className="text-center">Results Page</h1>
        <div className="list-group">
        {
            this.props.inputresults.result.map((res)=> {
                return (<a href={res.url} className="list-group-item">
                                <div className="media col-md-3">
                                    <figure className="pull-left">
                                        <img className="media-object img-rounded img-responsive" src={res.image_url} alt="placehold.it/350x250" />
                                    </figure>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="list-group-item-heading"> {res.name} </h4>
                                    <ul>
                                        <li>{res.city}</li>
                                        <li>{res.is_closed}</li>
                                    </ul>
                                </div>
                                <div className="col-md-3 text-center">
                                    <button type="button" className="btn btn-default btn-lg btn-block">More Info</button>
                                    <div className="stars">
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star-empty"></span>
                                    </div>
                                    <p> Average {res.rating} <small> / </small> 5 </p>
                                </div>
                          </a>  )
            })
              
        }
        </div>
        </div>
  </div>
</div>)
}
}

export default Results;



// <div className="container-fluid">
//   <div className="row body">
//     <div className="span8">
//       <div className="row">
//         <div className="span8">
//           <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//         </div>
//       </div>
//       <div className="row">
//         <div className="span2">
//           <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//           </a>
//         </div>
//         <div className="span6">      
//           <p>
//             Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//           </p>
//           <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//         </div>
//       </div>
//     </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>
//   </div>
// </div>
//   }