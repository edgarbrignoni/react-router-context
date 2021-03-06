import React from 'react';
import { Link } from "react-router-dom";
import ex from '../../img/ex.jpg';
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

export class Temp extends React.Component {
    
    render(){
        return (
            
            <div>
                
                <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <Consumer>
                            {({ state }) => 
                                (
                                    state.posts.map( (post,index) => {
                                        return (
                                            <div className={"carousel-item "+ (index === 0 && "active")} key={index}>
                                                <img className="d-block w-100" src={post.featured_image_url} alt="First slide"/>
                                                <div className="container">
                                                    <div className="carousel-caption d-none d-md-block text-left">
                                                        <h1>{post.name}</h1>
                                                        <p>{post.content}</p>
                                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )
                            }
                        </Consumer>
                        
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
                
                
                
                
                <div className="container">
                    <div className="row">
                        <MiddleContent 
                            text = 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor 
                            id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum 
                            at eros. Praesent commodo cursus magna.'
                        />
                        <MiddleContent 
                            text = 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio 
                            sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus 
                            commodo, tortor mauris condimentum nibh.'
                        />
                        <MiddleContent 
                            text = 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum 
                            id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum 
                            nibh, ut fermentum massa justo sit amet risus.'
                        />
                    </div>
                    
                    <hr className="my-5"/>
                    
                    
    
    
    
    
    
                    
                    <BottomHomeContent 
                        header = 'First featurette heading.'
                        mutedHeader = ' It will blow your mind.'
                        text = 'Donec ullamcorper nulla non metus auctor fringilla. 
                        Vestibulum id ligula porta felis euismod semper. Praesent commodo 
                        cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                    />
                    
                    <hr className="my-5"/>
                    
                    <BottomHomeContent 
                        order = 'order-md-1'
                        orderLast = 'order-md-2'
                        header ='Oh yeah, it is that good.'
                        mutedHeader =' See for yourself.'
                        text= 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum 
                        id ligula porta felis euismod semper. Praesent commodo cursus magna, vel 
                        scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                    />
                    
                    <hr className="my-5"/>
                    
                    <BottomHomeContent 
                        header ='And lastly, this one.'
                        mutedHeader=' Checkmate.'
                        text = 'Donec ullamcorper nulla non metus auctor fringilla. 
                        Vestibulum id ligula porta felis euismod semper. Praesent 
                        commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                    />
                    
                    <hr className="my-5"/>
                </div>
                
                
                
                
                
                
                
                
                
                <Footer />
            </div>
        );
    }
    
}



function MiddleContent(props) {
    return (
        <div className="col-lg-4 text-center">
            <img className="rounded-circle" src={ex} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Heading</h2>
            <p>{props.text}</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
    
    );
}
MiddleContent.propTypes = {
 text: PropTypes.string
};




function BottomHomeContent(props) {
    return (
        <div className="row my-5">
            <div className={"col-md-7 my-auto "+(props.orderLast || "")}>
                <h2 className="featurette-heading">{props.header}<span className="text-muted">{props.mutedHeader}</span></h2>
                <p className="lead">{props.text}</p>
            </div>
            <div className={"bottomContent col-md-5 "+(props.order || "")}>
                <img className="featurette-image img-fluid mx-auto" src={ex} alt="Generic placeholder image"/>
            </div>
        </div>
        );
}

BottomHomeContent.propTypes = {
 header: PropTypes.string,
 orderLast: PropTypes.string,
 order: PropTypes.string,
 mutedHeader: PropTypes.string,
 text: PropTypes.string
};


function Footer() {
    return (
        <div className="container">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>
                © 2017-2018 Company, Inc. · 
                <a href="#">Privacy</a>
                · 
                <a href="#">Terms</a>
            </p>
        </div>
    );
}


export default Temp;