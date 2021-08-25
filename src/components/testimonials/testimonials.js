import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./sliderbtn.css";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <div
      className="testimonial"
      style={{
        backgroundImage: "url('images/slider/img6.png')",
      }}
    >
      <OwlCarousel
        style={{ zIndex: "auto" }}
        className="owl-themes"
        dots={true}
        navText={[
          "<div style='font-size:3em ' className='nav-btn prev-slides'>&#129032;</div>",
          "<div style='font-size:3em' className='nav-btn next-slides'>&#129034</div>",
        ]}
        lazyLoad={true}
        autoplay={true}
        items={1}
        loop
        margin={0}
        nav
      >
        <div class="items">
          <div className="testimonial-img">
            <img src="images/testimonials/test1.jpg" alt="" />
          </div>
          <div className="testimonial-para1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="testimonial-para2">
            <p>Customer Name</p>
          </div>
          <div className="testimonial-para3">
            <p>Businessman</p>
          </div>
        </div>
        <div class="items">
          <div className="testimonial-img">
            <img src="images/testimonials/test2.jpg" alt="" />
          </div>
          <div className="testimonial-para1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="testimonial-para2">
            <p>Customer Name</p>
          </div>
          <div className="testimonial-para3">
            <p>Businessman</p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
