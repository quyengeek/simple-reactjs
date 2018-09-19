import React, {Component} from 'react';

import './Banner.css';

const banner1 = {
    "background-image" : "url(assets/images/banner_1.jpg)"
}

const banner2 = {
    "background-image" : "url(assets/images/banner_2.jpg)"
}

const banner3 = {
    "background-image" : "url(assets/images/banner_3.jpg)"
}

export default class Banner extends Component {
    render () {
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="banner_item align-items-center"
                                 style={banner1}>
                                <div className="banner_category">
                                    <a href="categories.html">women's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center"
                                 style={banner2}>
                                <div className="banner_category">
                                    <a href="categories.html">accessories's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center"
                                 style={banner3}>
                                <div className="banner_category">
                                    <a href="categories.html">men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}