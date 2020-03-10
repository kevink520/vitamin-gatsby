import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import * as ScrollMagic from 'scrollmagic'
import gsap, { TimelineMax, TweenMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import enquire from 'enquire.js'
import GoogleMapReact from 'google-map-react';
import HomeSlider from "../components/home-slider"
import Typed from 'react-typed';
import CopywritingSVG from '../images/svg/copywriting.inline.svg'
import EmailDesignSVG from '../images/svg/email-design.inline.svg'
import LayoutSVG from '../images/svg/layout.inline.svg'
import WPDevelopSVG from '../images/svg/wp-develop.inline.svg'
import EcommerceSVG from '../images/svg/ecommerce.inline.svg'
import HostingSVG from '../images/svg/hosting.inline.svg'
import Portfolio from "../components/portfolio"
import About from "../components/about"

const strings1 = ['Vitamin'];
const strings2 = [' Digital Media'];
const strings3 = ['aims to build websites ']
const strings4 = ['and apps that are ']
const strings5 = [
  'better-looking,',
  'more enjoyable, and ',
  'more useful to people.'
]

const typeSpeed = 30
const startDelay2 = strings1[0].length * typeSpeed + 300
const startDelay3 = startDelay2 + strings2[0].length * typeSpeed + 300
const startDelay4 = startDelay3 + strings3[0].length * typeSpeed + 300
const startDelay5 = startDelay4 + strings4[0].length * typeSpeed + 300

ScrollMagicPluginGsap && ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
let controller

const isTouchDevice = () => {
  /*if (('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch) {
    return true
  }*/

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = query => (
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query)
}

const enableScrollMagic = () => {
  console.log('enableScrollMagic', isTouchDevice())
  if (!isTouchDevice() && !controller) {
    controller = new ScrollMagic.Controller()
    const introTween = TweenMax.to('.main-intro', 1, {
      autoAlpha: 0,
      y: 120
    });

    const scene1 = new ScrollMagic.Scene({
      duration: 500
    }).setTween(introTween);
    
    const fromLeftconsts = {
      x: -80,
      autoAlpha: 0
    };

    const fromRightconsts = {
      x: 80,
      autoAlpha: 0
    };
    
    const servicesOptions = {
      offset: 120,
      triggerElement: '.services > .row:first-of-type',
      triggerHook: 'onEnter',
      duration: 200,
    };
    
    const servicesOptions2 = {
      offset: 120,
      triggerElement: '.services > .row:nth-of-type(2)',
      triggerHook: 'onEnter',
      duration: 200,
    };
    
    const servicesOptions3 = {
      offset: 120,
      triggerElement: '.services > .row:last-of-type',
      triggerHook: 'onEnter',
      duration: 200,
    };

    const servicesTween = TweenMax.from('.services > .row:first-of-type', 0.8, { autoAlpha: 0 });
    const scene2 = new ScrollMagic.Scene(servicesOptions).setTween(servicesTween);
    const servicesTween2 = TweenMax.from('.services > .row:nth-of-type(2)', 0.8, { autoAlpha: 0 });
    const scene3 = new ScrollMagic.Scene(servicesOptions2).setTween(servicesTween2);
    const servicesTween3 = TweenMax.from('.services > .row:last-of-type', 0.8, { autoAlpha: 0 });
    const scene4 = new ScrollMagic.Scene(servicesOptions3).setTween(servicesTween3);
    //const scene3 = new ScrollMagic.Scene({ ...servicesOptions }).setTween(wpTween);

    const fromBottomconsts = {
      y: 30,
      autoAlpha: 0
    };

    //const tl1 = new TimelineMax();
    const tl1 = gsap.timeline()
    const pRow1Options = {
      offset: 50,
      triggerElement: '.p-row1',
      triggerHook: 'onEnter',
      duration: 300,
    };

    const row1Tween = TweenMax.staggerFrom('.p-row1 .item', 0.5, fromBottomconsts, 0.4);
    //const item2Tween = TweenMax.staggerFrom('.item2', 1, { ...fromBottomconsts }, 0.4);
    //const item3Tween = TweenMax.staggerFrom('.item3', 1, { ...fromBottomconsts }, 0.6);
    tl1.add(row1Tween);
    //tl1.add(item2Tween);
    //tl1.add(item3Tween);
    //tl1.staggerFrom('.p-row1 .item', 0.5, fromBottomconsts, 0.4)
    //tl1.staggerFrom('.item2', 1, { ...fromBottomconsts }, 1)
    //tl1.staggerFrom('.item3', 1, { ...fromBottomconsts }, 2)
    const scene5 = new ScrollMagic.Scene(pRow1Options).setTween(tl1);
    //const tl2 = new TimelineMax();
    const tl2 = gsap.timeline()
    const pRow2Options = {
      offset: 50,
      triggerElement: '.p-row2',
      triggerHook: 'onEnter',
      duration: 300,
    };

    const row2Tween = TweenMax.staggerFrom('.p-row2 .item', 0.5, { ...fromBottomconsts }, 0.4);
    /*const item5Tween = TweenMax.staggerFrom('.item5', 1, { ...fromBottomconsts }, 0.4);
    const item6Tween = TweenMax.staggerFrom('.item6', 1, { ...fromBottomconsts }, 0.6);*/
    tl2.add(row2Tween);
    /*tl2.add(item5Tween);
    tl2.add(item6Tween);*/
    //tl2.staggerFrom('.p-row2 .item', 0.5, { ...fromBottomconsts }, 0.4)
    const scene6 = new ScrollMagic.Scene(pRow2Options).setTween(tl2);                
    //const tl3 = new TimelineMax();
    const tl3 = gsap.timeline()
    const pRow3Options = {
      offset: 50,
      triggerElement: '.p-row3',
      triggerHook: 'onEnter',
      duration: 300,
    };

    const row3Tween = TweenMax.staggerFrom('.p-row3 .item', 0.5, { ...fromBottomconsts }, 0.4);
    /*const item8Tween = TweenMax.staggerFrom('.item8', 1, { ...fromBottomconsts }, 0.4);
    const item9Tween = TweenMax.staggerFrom('.item9', 1, { ...fromBottomconsts }, 0.6);*/
    tl3.add(row3Tween);
    /*tl3.add(item8Tween);
    tl3.add(item9Tween);*/
    //tl3.staggerFrom('.p-row3 .item', 0.5, { ...fromBottomconsts }, 0.4)
    const scene7 = new ScrollMagic.Scene(pRow3Options).setTween(tl3);          
    const aboutOptions = {
      offset: 120,
      triggerElement: '#about',
      triggerHook: 'onEnter',
      duration: 500,
    };

    const aboutTween = TweenMax.from('.about-animated', 0.8, { ...fromLeftconsts });
    const capabilitiesTween = TweenMax.from('.capabilities', 0.8, { ...fromRightconsts });
    const scene8 = new ScrollMagic.Scene(aboutOptions).setTween(aboutTween);
    const scene9 = new ScrollMagic.Scene({ ...aboutOptions }).setTween(capabilitiesTween);          
    const pinOptions = {
      duration: 225,
      offset: -90,
      triggerElement: '#contact > div:first-child',
      triggerHook: 'onLeave',
    };

    const scene10 = new ScrollMagic.Scene(pinOptions).setPin('.contact-info');
    const scene11 = new ScrollMagic.Scene({ ...pinOptions }).setPin('#contact .textwidget');
    controller.addScene([
      scene1,
      scene2,
      scene3,
      scene4,
      scene5,
      scene6,
      scene7,
      scene8,
      scene9,
      scene10,
      scene11,
    ]);
  }
}

const disableScrollMagic = () => {
  if (controller) {
    controller.destroy(true);
    TweenMax.set('.main-intro, .row, .item, .about-animated, .capabilities', {
      autoAlpha: 1,
      x: 0,
      y: 0
    });

    controller = null;
    //TweenMax.killAll(false,true,fasle);
    //TweenMax.set('*', {clearProps:"all"}); 
  }
}

const enableOrDisableScrollMagic = () => {
  enquire.register("screen and (min-width: 1260px)", {
    match : function() {
      enableScrollMagic();
    },  
    unmatch : function() {
      disableScrollMagic();
    }
  });
}

const IndexPage = () => {
  useEffect(() => {
    enableScrollMagic()
    enableOrDisableScrollMagic()
  }, [])

  let typed2
  let typed3
  let typed4
  let typed5

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Vitamin Digital Media</title>
        <link rel="canonical" href="https://www.digitalmedia.nyc/" />
      </Helmet>
      <div id="home" className="container slideshow">
        <div className="row">
          <div className="col-md-4 main-intro">
            <div className="main-intro-typed">
              <div className="main-intro-strings" id="main-intro-strings" itemprop="name">
                <p>
                  <span className="main-heading">
                    <span className="orange">
                      <Typed
                        className="typed show-cursor"
                        strings={strings1}
                        typeSpeed={typeSpeed}
                        onComplete={self => {
                          self.el.parentElement.classList.remove('show-cursor')
                          typed2.el.parentElement.classList.add('show-cursor')
                        }}
                      />
                    </span>
                    <Typed
                      className="typed"
                      strings={strings2}
                      typedRef={typed => { typed2 = typed }}
                      typeSpeed={typeSpeed}
                      startDelay={startDelay2}
                      onComplete={self => {
                        self.el.parentElement.classList.remove('show-cursor')
                        typed3.el.parentElement.classList.add('show-cursor')
                      }}
                    />
                  </span>
                  <br/>
                  <Typed
                    className="typed"
                    strings={strings3}
                    typedRef={typed => { typed3 = typed }}
                    typeSpeed={typeSpeed}
                    startDelay={startDelay3}
                    onComplete={self => {
                      self.el.parentElement.classList.remove('show-cursor')
                      typed4.el.parentElement.classList.add('show-cursor')
                    }}
                  />
                  <br/>
                  <Typed
                    className="typed"
                    strings={strings4}
                    typedRef={typed => { typed4 = typed }}
                    typeSpeed={typeSpeed}
                    startDelay={startDelay4}
                    onComplete={self => {
                      self.el.parentElement.classList.remove('show-cursor')
                      typed5.el.parentElement.classList.add('show-cursor')
                    }}
                  />
                  <br />
                  <Typed
                    className="typed"
                    strings={strings5.map(str => `^${Math.round(str.length * typeSpeed + 300)} ${str}`)}
                    typedRef={typed => { typed5 = typed }}
                    typeSpeed={typeSpeed}
                    startDelay={startDelay5}
                    backDelay={1000}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 flexslider">
            <HomeSlider />
          </div>
        </div>
      </div>

      <div id="services" className="full-width pale-orange-bg">
        <div className="container services">   
        <h2 className="orange">Services</h2>
          <div className="row">
            <div className="col-md-6 service copywriting" itemprop="makesOffer" itemscope itemtype="http://schema.org/Offer">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">Copywriting</h3>
                  <CopywritingSVG />                  
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">I try to figure out the most valuable things that a business has to offer. And I try to present those things to the world in a way that is both authentic and appealing.</p>                
                </div>
              </div>
            </div>
            <div className="col-md-6 service design-front-end">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">HTML email design and development</h3>
                  <EmailDesignSVG />
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">A custom HTML email can grab your customers&rsquo; attention and delight them. I can craft an attractive HTML email.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 service design-front-end">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">Design and front-end development</h3>
                  <LayoutSVG />
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">I regularly scour the web, libraries, and bookstores to keep up with the latest trends and best practices in web design and development. I have honed my CSS/JavaScript skills to a level where I can turn any design into an animated, responsive (mobile-friendly) web page.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 service wp-theme" itemprop="makesOffer" itemscope itemtype="http://schema.org/Offer">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">WP website development</h3>
                  <WPDevelopSVG />
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">WordPress is the world&rsquo;s most popular content management system (CMS),used by major brands including The New York Times and Sony Music.  I can turn any design into a fully editable, responsive website using WordPress.</p>                
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 service wp-theme" itemprop="makesOffer" itemscope itemtype="http://schema.org/Offer">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">Ecommerce site development</h3>
                  <EcommerceSVG />
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">WooCommerce is the world&rsquo;s most popular ecommerce platform. I can turn any design into an ecommerce store powered by WooCommerce.</p>                
                </div>
              </div>
            </div>
            <div className="col-md-6 service hosting-maintenance">
              <div className="row">
                <div className="col-sm-6 service-header">
                  <h3 className="service-title">Hosting and maintenance</h3>
                  <HostingSVG />
                </div>
                <div className="col-sm-6 service-info">
                  <p className="service-description">Vitamin Digital Media offers cloud virtual private server hosting that includes solid state drives (SSD) for faster loading times and SSL/TLS for added security. The hosting/maintenance package includes regular backups and software updates as well as minor content update services.</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>

      <div id="portfolio" className="container portfolio">
        <h2 className="orange">Portfolio</h2>
        <p>(Many of the websites that I built from contract work for other web agencies are not included in this portfolio.)</p>
        <Portfolio />
      </div>

      <About />

      <div id="contact">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
          defaultCenter={{
            lat: 40.763316,
            lng: -73.948631,
          }}
          defaultZoom={14}
          options={{ styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}] }}
        />
        <div className="contact-info">
          <h2>Contact <span className="orange">Vitamin</span> Digital Media</h2>        
          <p>
          </p>
        </div> 
        <div className="textwidget">
          <div>
            <form name="vitamin_contact" method="POST" data-netlify="true">
              <p><span className="form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" maxlength="80" id="name" aria-required="true" aria-invalid="false" placeholder="Your name" /></span></p>
              <p><span className="form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" maxlength="80" id="email" aria-required="true" aria-invalid="false" placeholder="Your email" /></span></p>
              <p><span className="form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" maxlength="80" id="subject" aria-invalid="false" placeholder="Subject" /></span></p>
              <p><span className="form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" maxlength="5000" id="message" aria-invalid="false" placeholder="Your message"></textarea></span></p>
              <p><input type="submit" value="Send" id="submit" /></p>
              <div className="response-output display-none"></div>
            </form>
          </div>
        </div>
      </div> 
    </Layout>
  )
}

export default IndexPage
