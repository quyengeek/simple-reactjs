import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import MenuOverlay from "./components/MenuOverlay";
import HamburgerMenu from "./components/HamburgerMenu";
import Slider from "./container/Home/Slider";
import Banner from "./container/Home/Banner";
import NewArrivals from "./container/Home/NewArrivals";
import DealOfTheWeek from "./container/Home/DealOfTheWeek";
import Benefit from "./components/Benefit";
import Footer from "./components/Footer";

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <MenuOverlay/>
                <HamburgerMenu/>
                <Slider/>
                <Banner/>
                <NewArrivals/>
                <DealOfTheWeek/>
                <Benefit/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
