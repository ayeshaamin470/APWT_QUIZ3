import React, { Component } from "react";
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import img1 from '../assets/img/clients/client-1.png';
import img2 from '../assets/img/clients/client-2.png';
import img3 from '../assets/img/clients/client-3.png';
import img4 from '../assets/img/clients/client-4.png';
import img5 from '../assets/img/clients/client-5.png';
import img6 from '../assets/img/clients/client-6.png';
import img7 from '../assets/img/about.jpg';

const Heroandclientandabout = () => {
    return (

<div>
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container position-relative">
        <h1>Welcome to Baker</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
    </section>

    <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{img1}" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img2} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{img3}" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{img4}" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{img5}" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{img6}" className="img-fluid" alt="" />
          </div>

        </div>

      </div>
    </section>
      <section id="about" className="about">
            <div className="container">

              <div className="row">
                <div className="col-lg-6">
                  <img src="{img7}" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                  <h3>Voluptatem dignissimos provident quasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <i className="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className="col-md-6">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris nisi</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

</div>


        );
}
    
export default Heroandclientandabout;