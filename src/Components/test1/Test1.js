/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./main.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Headroom from 'react-headroom';

const Test1 = (props) => {

  const handleScroll = () => {
    try {
      if (document.body.scrollTop < 160 && document.documentElement.scrollTop < 160) {
        document.getElementById('header').style.display = 'flex';
      } 
      else {
        document.getElementById('header').style.display = 'none';
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={0}
        nav={true}
        items={1}
        autoplay={true}
        autoplayTimeout={3000}
      >
        <img src='/assets/img/img1.jpg' />
        <img src='/assets/img/img1.jpg' />
        <img src='/assets/img/img1.jpg' />
      </OwlCarousel>

        <nav
          id="header"
          class="navbar navbar-expand-xl headroom--top header-custom"
          aria-label="navbar"
        >
          <div class="container-fluid">
            <a
              class="d-none navbar-brand d-md-flex align-items-end hikari-logo order-2 order-xl-1"
              href="index.html"
            >
              <svg
                width="50"
                height="55"
                viewBox="0 0 721 768"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M721 0H0V768H721V0ZM680.5 42H45.5V724H680.5V42Z"
                  fill="currentColor"
                />
                <path
                  d="M646 348.133V388.155H450.157V615.165L459.264 615.818C502.415 618.912 545.737 618.705 588.849 615.201L605.228 521.779L644.698 528.682L627.098 629.069C624.689 642.805 613.352 653.217 599.446 654.463C551.874 658.727 504.036 659.153 456.395 655.737L437.233 654.363C421.936 653.266 410.087 640.551 410.087 625.233V388.155H296.22C303.074 490.657 245.092 605.581 99.1498 661L84.9099 623.59C215.859 573.864 262.857 473.653 256.032 388.155H75V348.133H247.442C245.994 344.505 244.228 340.133 242.237 335.303C236.596 321.62 229.28 304.588 222.309 290.424C215.676 276.946 203.437 257.518 192.348 240.812C186.9 232.604 181.892 225.293 178.247 220.035C176.425 217.408 174.948 215.299 173.93 213.853C173.421 213.13 173.027 212.573 172.763 212.2L206.711 190.836C207.776 192.351 209.308 194.537 211.188 197.249C214.946 202.669 220.112 210.21 225.746 218.698C236.822 235.385 250.377 256.731 258.27 272.769C265.825 288.121 273.535 306.108 279.289 320.065C283.105 329.322 286.817 338.676 290.11 348.133H339.463V107H392.055C392.055 110.199 387.139 114.217 379.533 116.829V348.133H430.101C430.937 346.807 431.911 345.257 433.304 343.03C438.473 334.761 445.675 323.063 454.108 308.524C470.99 279.416 492.754 239 512.889 192.157L561.352 213.058C560.077 216.06 554.07 217.543 545.819 216.878C526.009 261.776 505.134 300.388 488.781 328.585C484.595 335.803 480.702 342.342 477.197 348.133H646Z"
                  fill="currentColor"
                />
              </svg>
              <span class="ms-2"
                ><span class="text-red">Hikari</span> <br />Scripts</span
              >
            </a>
            <a
              class="d-inline-block navbar-brand text-center me-0 d-md-none align-items-end hikari-logo order-2 order-xl-1"
              href="index.html"
            >
              <span class=""><span class="text-red">Hikari</span>Scripts</span>
            </a>
            <div class="d-inline-flex align-items-center order-3">
              <div class="d-inline-block me-1">
                <input type="checkbox" class="switch-mode-checkbox" id="checkbox" />
                <label for="checkbox" class="label">
                  <i class="las la-moon"></i>
                  <i class="las la-sun"></i>  
                  <div class="ball"></div>
                </label>
              </div>
              <div class="btn-group custom-drop">
                <button
                  class="dropdown-toggle btn-user"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="las la-user-circle"></i>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Signup</a>
                  </li>
                </ul>
              </div>
              {/* <!-- <div class="user-avatar">
                    <img src="assets/img/avatar.jpg" alt="">
                </div> --> */}
            </div>

            <button
              class="order-1 order-xl-3 d-inline-block d-xl-none btn-offcanvas"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#leftOffcanvas"
              aria-controls="leftOffcanvas"
            >
              <i class="las la-bars"></i>
            </button>

            <div class="collapse navbar-collapse order-2" id="hikari">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="blogs.html"
                    >ANIME</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blogs.html">MANGA</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blogs.html">GAME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blogs.html">WRITER’s PEN</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="listboard.html">LIST-BOARD</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="record.html">RECORD</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="authors.html">AUTHORS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="questionnaire.html">QUESTIONNAIRE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="gallery.html">GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">MAGAZINE</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!--  --> */}
        {/* <!-- off canvas --> */}
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="leftOffcanvas"
          aria-labelledby="leftOffcanvasLabel"
        >
          <div class="offcanvas-header">
            <a
              class="navbar-brand d-flex align-items-end hikari-logo"
              href="index.html"
            >
              <svg
                width="50"
                height="55"
                viewBox="0 0 721 768"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M721 0H0V768H721V0ZM680.5 42H45.5V724H680.5V42Z"
                  fill="currentColor"
                />
                <path
                  d="M646 348.133V388.155H450.157V615.165L459.264 615.818C502.415 618.912 545.737 618.705 588.849 615.201L605.228 521.779L644.698 528.682L627.098 629.069C624.689 642.805 613.352 653.217 599.446 654.463C551.874 658.727 504.036 659.153 456.395 655.737L437.233 654.363C421.936 653.266 410.087 640.551 410.087 625.233V388.155H296.22C303.074 490.657 245.092 605.581 99.1498 661L84.9099 623.59C215.859 573.864 262.857 473.653 256.032 388.155H75V348.133H247.442C245.994 344.505 244.228 340.133 242.237 335.303C236.596 321.62 229.28 304.588 222.309 290.424C215.676 276.946 203.437 257.518 192.348 240.812C186.9 232.604 181.892 225.293 178.247 220.035C176.425 217.408 174.948 215.299 173.93 213.853C173.421 213.13 173.027 212.573 172.763 212.2L206.711 190.836C207.776 192.351 209.308 194.537 211.188 197.249C214.946 202.669 220.112 210.21 225.746 218.698C236.822 235.385 250.377 256.731 258.27 272.769C265.825 288.121 273.535 306.108 279.289 320.065C283.105 329.322 286.817 338.676 290.11 348.133H339.463V107H392.055C392.055 110.199 387.139 114.217 379.533 116.829V348.133H430.101C430.937 346.807 431.911 345.257 433.304 343.03C438.473 334.761 445.675 323.063 454.108 308.524C470.99 279.416 492.754 239 512.889 192.157L561.352 213.058C560.077 216.06 554.07 217.543 545.819 216.878C526.009 261.776 505.134 300.388 488.781 328.585C484.595 335.803 480.702 342.342 477.197 348.133H646Z"
                  fill="currentColor"
                />
              </svg>
              <span class="ms-2"
                ><span class="text-red">Hikari</span> <br />Scripts</span
              >
            </a>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="las la-times"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ANIME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">MANGA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">GAME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">WRITER’s PEN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="listboard.html">LIST-BOARD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="record.html">RECORD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="authors.html">AUTHORS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="questionnaire.html">QUESTIONNAIRE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery.html">GALLERY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">MAGAZINE</a>
              </li>
            </ul>
            <div class="side-social">
              <h6><strong>Connect With Us</strong></h6>
              <a
                href="https://discord.com/invite/Vear6pRckP"
                class="icon"
                alt="find us on Discord"
                target="_blank"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                  ></path>
                </svg>
              </a>
              <a
                href="http://YouTube.com/@HikariScripts"
                class="icon"
                alt="find us on YouTube"
                target="_blank"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/hikariscripts"
                class="icon"
                alt="find us on Instagram"
                target="_blank"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/HikariScripts"
                class="icon"
                alt="find us on Twitter"
                target="_blank"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="icon" alt="find us on Reddit" target="_blank">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0zm3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0zm.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <div class="owl-landing owl-carousel owl-theme arrow-hover">
          <div class="hero-slide-item item">
            <a href="blog-detail.html" class="hero-slide-item-link"></a>
            <img src="assets/img/img1.jpg" alt="" />
            <div class="content-position">
              <div
                class="col-10 col-md-10 z-index-2 mx-auto p-3 p-lg-4 blur shadow-blur text-n-carousal"
              >
                {/* <!-- 
                        <h2 class="d-flex align-items-center">Today's top highlights</span></h2>
                        <p class="d-flex align-items-center mb-0"><span>12 JUL. 2022</span></p>
                        --> */}
              </div>
            </div>
          </div>
          <div class="hero-slide-item item">
            <a href="blog-detail.html" class="hero-slide-item-link"></a>
            <img src="assets/img/img2.jpg" alt="" />
            <div class="content-position">
              <div
                class="col-10 col-md-10 z-index-2 mx-auto p-3 p-lg-4 blur shadow-blur text-n-carousal"
              >
                {/* <!-- 
                        <h2 class="d-flex align-items-center">Today's top highlights</span></h2>
                        <p class="d-flex align-items-center mb-0"><span>12 JUL. 2022</span></p>
                        --> */}
              </div>
            </div>
          </div>
          <div class="hero-slide-item item">
            <a href="blog-detail.html" class="hero-slide-item-link"></a>
            <img src="assets/img/img3.jpg" alt="" />
            <div class="content-position">
              <div
                class="col-10 col-md-10 z-index-2 mx-auto p-3 p-lg-4 blur shadow-blur text-n-carousal"
              >
                {/* <!-- 
                        <h2 class="d-flex align-items-center">Today's top highlights</span></h2>
                        <p class="d-flex align-items-center mb-0"><span>12 JUL. 2022</span></p>
                    --> */}
              </div>
            </div>
          </div>
        </div>

        <section class="py-2 mt-4 trending-section">
          <div class="container">
            <div class="row g-0">
              <div class="col-12 bg-primary-soft px-0 py-2 rounded outer-card pb-2">
                <div class="d-flex align-items-center text-center text-sm-start">
                  {/* <!-- Title --> */}
                  <div class="me-3">
                    <span class="hot-btn p-2 px-3 fw-normal"
                      ><i class="las la-fire"></i
                    ></span>
                  </div>
                  <marquee behavior="" direction="ltr">
                    <p class="fw-bold fst-italic mb-0">
                      ELDEN RING BECAME GAME OF THE YEAR • SPY x FAMILY BECAME ANIME OF THE YEAR
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
        </section>
        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between mb-3 pb-4 outer-card"
              >
                <h2 class="title-anime title-sec mb-0">Anime</h2>
                <a href="blogs.html" class="btn btn-primary-soft text-uppercase"
                  >Explore</a
                >
              </div>
            </div>
            <div class="row gx-lg-3">
              <div
                class="col-12 col-lg-7 aos-init aos-animate outer-card pb-4"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
              >
                <div class="large-card article">
                  <a href="#" class="card-link"></a>
                  <div class="article-img mb-2">
                    <img src="assets/img/03.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="article-detail">
                    <div class="d-inline-block badge bg-listicle mb-0 fw-normal">
                      Listicle
                    </div>
                    <h4 class="m-0">
                      <a href="#" class="btn-link">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                      <small>12 JUL. 2022</small>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5 outer-card pb-0">
                <div class="row">
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-listicle mb-0 fw-normal"
                            >
                              Listicle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-game mb-0 fw-normal"
                            >
                              Game
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-news mb-0 fw-normal"
                            >
                              News
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <hr />
              </div>
            </div>
          </div>
        </section>
        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between mb-3 outer-card pb-0"
              >
                <h2 class="title-game title-sec mb-0">Game</h2>
                <a href="#" class="btn btn-primary-soft text-uppercase">Explore</a>
              </div>
            </div>
            <div class="row gx-lg-3">
              <div
                class="col-12 col-lg-7 aos-init aos-animate outer-card pb-4"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
              >
                <div class="large-card article">
                  <a href="#" class="card-link"></a>
                  <div class="article-img mb-2">
                    <img src="assets/img/04.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="article-detail">
                    <div class="d-inline-block badge bg-game mb-0 fw-normal">
                      Game
                    </div>
                    <h4 class="mb-0">
                      <a href="#" class="btn-link">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </h4>
                    <small>12 JUL. 2022</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5 pb-0">
                <div class="row">
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-listicle mb-0 fw-normal"
                            >
                              Listicle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-game mb-0 fw-normal"
                            >
                              Game
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-news mb-0 fw-normal"
                            >
                              News
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <hr />
              </div>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between mb-3 outer-card pb-0"
              >
                <h2 class="title-manga title-sec mb-0">Manga</h2>
                <a href="#" class="btn btn-primary-soft text-uppercase">Explore</a>
              </div>
            </div>
            <div class="row gx-lg-3">
              <div
                class="col-12 col-lg-7 aos-init aos-animate outer-card pb-4"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
              >
                <div class="large-card article">
                  <a href="#" class="card-link"></a>
                  <div class="article-img mb-2">
                    <img src="assets/img/03.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="article-detail">
                    <div class="d-inline-block badge bg-review mb-0 fw-normal">
                      Review
                    </div>
                    <h4 class="mb-0">
                      <a href="#" class="btn-link">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </h4>
                    <small>12 JUL. 2022</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5 pb-0 outer-card">
                <div class="row">
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-listicle mb-0 fw-normal"
                            >
                              Listicle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-game mb-0 fw-normal"
                            >
                              Game
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-news mb-0 fw-normal"
                            >
                              News
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between mb-3 pb-0 outer-card"
              >
                <h2 class="title-writer title-sec mb-0">Writer's Pen</h2>
                <a href="#" class="btn btn-primary-soft text-uppercase">Explore</a>
              </div>
            </div>
            <div class="row gx-lg-3">
              <div
                class="col-12 col-lg-7 aos-init aos-animate outer-card pb-4"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
              >
                <div class="large-card article">
                  <a href="#" class="card-link"></a>
                  <div class="article-img mb-2">
                    <img src="assets/img/05.jpg" alt="" class="img-fluid" />
                  </div>
                  <div class="article-detail">
                    <div class="d-inline-block badge bg-news mb-0 fw-normal">
                      News
                    </div>
                    <h4 class="mb-0">
                      <a href="#" class="btn-link">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </h4>
                    <small>12 JUL. 2022</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5 outer-card pb-0">
                <div class="row">
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-listicle mb-0 fw-normal"
                            >
                              Listicle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-game mb-0 fw-normal"
                            >
                              Game
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="card mb-5 border-0">
                      <a href="#" class="card-link"></a>
                      <div class="row g-3">
                        <div class="col-5">
                          <div class="article-thumb me-2 article-img">
                            <img src="assets/img/01.jpg" alt="" class="img-fluid" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="article-detail article-detail-thumb">
                            <h5 class="mb-0">
                              <a href="#" class="btn-link"
                                >Lorem ipsum dolor sit amet</a
                              >
                            </h5>
                            <small>12 JUL. 2022</small>
                            <div
                              class="d-inline-block badge bg-news mb-0 fw-normal"
                            >
                              News
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="mt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <hr />
              </div>
            </div>
          </div>
        </section>
        <section class="mt-4 mb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb-4 outer-card pb-0">
                <h2>Features</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tempus nibh et lectus gravida egestas.
                </p>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-6 col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div
                  class="features-item d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="features-icon icon mb-3 btn-primary-soft d-inline-flex align-items-center justify-content-center"
                  >
                    1
                  </div>
                  <h5 class="features-title">List Board</h5>
                </div>
                <div>
                  <p class="text-gray text-center mt-2">
                    With mobile, tablet &amp; desktop support it doesn't matter what
                    device you're using. Robust is responsive in all browsers.
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  class="features-item d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="features-icon icon mb-3 btn-primary-soft d-inline-flex align-items-center justify-content-center"
                  >
                    2
                  </div>
                  <h5 class="features-title">Record</h5>
                </div>
                <div>
                  <p class="text-gray text-center mt-2">
                    With mobile, tablet &amp; desktop support it doesn't matter what
                    device you're using. Robust is responsive in all browsers.
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div
                  class="features-item d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="features-icon icon mb-3 btn-primary-soft d-inline-flex align-items-center justify-content-center"
                  >
                    3
                  </div>
                  <h5 class="features-title">Authors</h5>
                </div>
                <div>
                  <p class="text-gray text-center mt-2">
                    With mobile, tablet &amp; desktop support it doesn't matter what
                    device you're using. Robust is responsive in all browsers.
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  class="features-item d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="features-icon icon mb-3 btn-primary-soft d-inline-flex align-items-center justify-content-center"
                  >
                    4
                  </div>
                  <h5 class="features-title">Questionnaire</h5>
                </div>
                <div>
                  <p class="text-gray text-center mt-2">
                    With mobile, tablet &amp; desktop support it doesn't matter what
                    device you're using. Robust is responsive in all browsers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="block-site-footer mt-5">
          <section class="block-site-footer__signup">
            <div class="block-site-footer__decoration--bottom">
              <div class="decoration is--green"></div>
              <div class="decoration is--blue"></div>
              <div class="decoration is--pink"></div>
            </div>
          </section>

          <section class="block-site-footer__bottom-bar">
            <div class="container">
              <div class="block-site-footer__logo">
                <a
                  class="block-site-footer__logo-link"
                  href="index.html"
                  alt="Go to homepage"
                >
                  <svg
                    width="75"
                    height="80"
                    viewBox="0 0 721 768"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M721 0H0V768H721V0ZM680.5 42H45.5V724H680.5V42Z"
                      fill="currentColor"
                    />
                    <path
                      d="M646 348.133V388.155H450.157V615.165L459.264 615.818C502.415 618.912 545.737 618.705 588.849 615.201L605.228 521.779L644.698 528.682L627.098 629.069C624.689 642.805 613.352 653.217 599.446 654.463C551.874 658.727 504.036 659.153 456.395 655.737L437.233 654.363C421.936 653.266 410.087 640.551 410.087 625.233V388.155H296.22C303.074 490.657 245.092 605.581 99.1498 661L84.9099 623.59C215.859 573.864 262.857 473.653 256.032 388.155H75V348.133H247.442C245.994 344.505 244.228 340.133 242.237 335.303C236.596 321.62 229.28 304.588 222.309 290.424C215.676 276.946 203.437 257.518 192.348 240.812C186.9 232.604 181.892 225.293 178.247 220.035C176.425 217.408 174.948 215.299 173.93 213.853C173.421 213.13 173.027 212.573 172.763 212.2L206.711 190.836C207.776 192.351 209.308 194.537 211.188 197.249C214.946 202.669 220.112 210.21 225.746 218.698C236.822 235.385 250.377 256.731 258.27 272.769C265.825 288.121 273.535 306.108 279.289 320.065C283.105 329.322 286.817 338.676 290.11 348.133H339.463V107H392.055C392.055 110.199 387.139 114.217 379.533 116.829V348.133H430.101C430.937 346.807 431.911 345.257 433.304 343.03C438.473 334.761 445.675 323.063 454.108 308.524C470.99 279.416 492.754 239 512.889 192.157L561.352 213.058C560.077 216.06 554.07 217.543 545.819 216.878C526.009 261.776 505.134 300.388 488.781 328.585C484.595 335.803 480.702 342.342 477.197 348.133H646Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span><span class="text-red">Hikari</span><br />Scripts</span>
                </a>

                <a
                  class="block-site-footer__mail"
                  href="mailto:hikariscripts@gmail.com"
                  >hikariscripts@gmail.com</a
                >
              </div>
              <div class="block-site-footer__detail">
                <div class="block-site-footer__menu">
                  <ul id="footer-menu" class="site-footer-menu">
                    <li
                      id="menu-item-25387"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25387"
                    >
                      <a href="blogs.html">ANIME</a>
                    </li>
                    <li
                      id="menu-item-25387"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25387"
                    >
                      <a href="blogs.html">MANGA</a>
                    </li>
                    <li
                      id="menu-item-25419"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25419"
                    >
                      <a href="blogs.html">GAME</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="blogs.html">WRITER’s PEN</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="listboard.html">LIST-BOARD</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="record.html">RECORD</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="authors.html">AUTHORS</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="questionnaire.html">QUESTIONNAIRE</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="gallery.html">GALLERY</a>
                    </li>
                    <li
                      id="menu-item-25418"
                      class="menu-item menu-item-type-taxonomy menu-item-object-blog_type menu-item-25418"
                    >
                      <a href="#">MAGAZINE</a>
                    </li>
                  </ul>
                </div>
                <div class="block-site-footer__social">
                  <a
                    href="https://discord.com/invite/Vear6pRckP"
                    class="icon"
                    alt="find us on Discord"
                    target="_blank"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="http://YouTube.com/@HikariScripts"
                    class="icon"
                    alt="find us on YouTube"
                    target="_blank"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hikariscripts/"
                    class="icon"
                    alt="find us on Instagram"
                    target="_blank"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/HikariScripts"
                    class="icon"
                    alt="find us on Twitter"
                    target="_blank"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" class="icon" alt="find us on Reddit" target="_blank">
                    <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0zm3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0zm.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="block-site-footer__colophon">
                <p>
                  <a target="_blank" href="#" class="pe-2">T&C.</a>
                  <a href="#" class="pe-2">Privacy Policy.</a>
                  <strong>&copy;2022 Hikari Scripts.</strong> All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Test1;