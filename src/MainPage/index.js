import React from 'react';
import Navbar from '../Navbar';
import pict1 from "../Assets/pict1.jpeg"
import './index.css'

const MainPage = () => {
    return (
        <section>
            <Navbar />
            <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li style={{listStyleType: 'none'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li style={{listStyleType: 'none'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li style={{listStyleType: 'none'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pict1} className="d-block w-100" alt="Slide 1" height={500} />
                </div>
                <div className="carousel-item">
                    <img src={pict1} className="d-block w-100" alt="Slide 2" height={500} />
                </div>
                <div className="carousel-item">
                    <img src={pict1} className="d-block w-100" alt="Slide 3" height={500} />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
            
        </section>
    );
}

export default MainPage;
