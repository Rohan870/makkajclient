import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import { BsDroplet } from "react-icons/bs";
import { SiSonarlint } from "react-icons/si";
import { CgBee } from "react-icons/cg";
import { AiOutlinePoundCircle } from "react-icons/ai";
import { FiHexagon } from "react-icons/fi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Homescreen.css";
import "../../css/mainslider.css";
import "../../css/sliderbtn.css";
import Testimonial from "../../components/testimonials/testimonials";

export const Homescreen = () => {
  return (
    <>
      <OwlCarousel
        style={{ width: "100%", zIndex: "auto" }}
        className="owl-theme"
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
        <div class="item">
          <img src={"images/slider/img1.jpg"} alt="" />
        </div>
        <div class="item">
          <img src={"images/slider/img2.jpg"} alt="" />
        </div>
        <div class="item">
          <img src={"images/slider/img3.jpg"} alt="" />
        </div>
        <div class="item">
          <img src={"images/slider/img4.jpg"} alt="" />
        </div>
        <div class="item">
          <img src={"images/slider/img5.jpg"} alt="" />
        </div>
      </OwlCarousel>
      <div className="sliderbottom-box">
        <div className="sliderbottom-head1">
          <p>We are Makkaj</p>
        </div>
        <div className="sliderbottom-head2">
          <p>Inspired by Nature, Crafted by Science</p>
        </div>
        <div className="sliderbottom-head3">
          <p>
            Our pursuit to bring our finest Makkaj fragrances to the world is
            insatiable. From our main showroom in Jeddah Bab Shareef, we are
            expanding our reach to five more showrooms in Saudi Arabia in 2017
            and a landmark showroom in the pride city of Bangaluru, India.
          </p>
        </div>
        <div className="sliderbottom-icons">
          <div className="sliderbottom-flex">
            <div>
              <BsDroplet />
              <p>Non-toxic</p>
            </div>
            <div>
              <SiSonarlint />
              <p>ISO-GMP</p>
            </div>
            <div>
              <CgBee />
              <p>Sustainable</p>
            </div>
            <div>
              <FiHexagon />
              <p>Allergen-free</p>
            </div>
            <div>
              <AiOutlinePoundCircle />
              <p>Sharia Compliance</p>
            </div>
          </div>
        </div>
        <div className="sliderbottom-know">
          <p className="button-know">KNOW MORE</p>
        </div>
      </div>
      <div className="categories">
        <h3>DISCOVER</h3>
        <h1>MAKKAJ COLLECTIONS</h1>
        <div className="row-images">
          <div className="firstimage">
            <button className="info-label">FOR HIM</button>
          </div>
          <div className="secondimage">
            <button className="info-label">FOR HER</button>
          </div>
          <div className="thirdimage">
            <button className="info-label">CONCENTRATE</button>
          </div>
          <div className="fourthimage">
            <button className="info-label">DAHN AL OUDH</button>
          </div>
        </div>
        <button className="categories-button">VIEW COLLECTIONS</button>
      </div>
      <div className="largeimage">
        <div className="inner">
          <h1>THIS RAMADAN</h1>
          <div className="borderbottom"></div>
          <p>
            Celebrate Eid with rich fragrance of traditional sophistication.
          </p>
          <button>VIEW COLLECTIONS</button>
        </div>
      </div>
      <div className="bestseller-section">
        <h3>BEST SELLER</h3>
        <h1>LOVED BY EVERYONE</h1>
        <div className="bestseller-innersection">
          <div className="first">
            <div className="divide">
              <img src="/images/falak.png" alt="perfume" />
              <h3>FALAK</h3>
              <h4>₹ 2500 - 3000</h4>
            </div>
            <div className="divide1">
              <img src="/images/qitarah.png" alt="perfume" />
              <h3>QITARAH</h3>
              <h4>₹ 2500 - 3000</h4>
            </div>
          </div>
          <div className="first">
            <img src="/images/reinee.png" alt="perfume" />
            <h3>REINE</h3>
            <h4>₹ 2500 - 3000</h4>
          </div>
          <div className="first">
            <div className="divide">
              <img src="/images/antarcticaa.png" alt="perfume" />
              <h3>ANTARCTICA</h3>
              <h4>₹ 2500 - 3000</h4>
            </div>
            <div className="divide1">
              <img src="/images/richess.png" alt="perfume" />
              <h3>RICHES</h3>
              <h4>₹ 2500 - 3000</h4>
            </div>
          </div>
          <div className="first">
            <img src="/images/ravissant.png" alt="perfume" />
            <h3>RAVISSANT</h3>
            <h4>₹ 2500 - 3000</h4>
          </div>
        </div>
      </div>

      <Testimonial />
      <ScrollUpButton style={{ width: 75 }} ToggledStyle={{ right: 100 }} />
    </>
  );
};
