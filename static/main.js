(function($) {
  $(function() {
    var VDMApp = (function() {
      var win = $(window);
      var page = $("html,body");
      var scrollOffset = -95;
      var controller;

      var addLoadedClassOnImagesLoaded = function addLoadedClassOnImagesLoaded() {
        $('.slideshow').imagesLoaded()
          .done(function(instance) {
            $('body').addClass('loaded');
          })
          .fail(function() {
            console.warn('all images loaded, at least one is broken');
            $('body').addClass('loaded');
          });
      };

      var initTyped = function initTyped() {
        $('.main-intro-typed').typed({
          stringsElement: $('.main-intro-strings'),
          backDelay: 1000,
        });
      };

      var initFlexslider = function initFlexslider() {
        $('.flexslider').flexslider({
          slideshowSpeed: 4500,
          animationSpeed: 500,
          controlNav: false,
          directionNav: false
        });
      };
  
      // Open external links in new tabs; credit: http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
      var openExternalLinksInNewTabs = function openExternalLinksInNewTabs() {
        $('a').each(function() {
          var a = new RegExp('/' + window.location.host + '/');
          if(!a.test(this.href)) {
             $(this).click(function(event) {
                 event.preventDefault();
                 event.stopPropagation();
                 window.open(this.href, '_blank');
             });
          }
        });
      };

      var initLocalScrollHash = function initLocalScrollHash() {
        $.localScroll.hash({
          target: 'body', 
          queue: true,
          duration: 1000,
          offset: -95
        });
      };

      var initLocalScroll = function initLocalScroll() {
        // I used $.localScroll instead of $('#navigation').localScroll() to
        // also make the buttons and links in the page to scroll.
        $.localScroll({
          target: 'body', 
          queue: true,
          duration: 500,
          hash: true,
          offset: -95,
          onBefore:function( e, anchor, $target ){
          // The 'this' is the settings object, can be modified
          },
          onAfter:function( anchor, settings ){
          // The 'this' contains the scrolled element (#content)
          }
        });
      };

      var addActiveClassToFirstLink = function addActiveClassToFirstLink() {
        $('.navbar-nav > li:first-child').addClass('active');
      };

      var enableScrollMagic = function enableScrollMagic() {
        if (!Modernizr.touch) {
          controller = new ScrollMagic.Controller();
          var scene1 = new ScrollMagic.Scene({
            duration: 800
          }).setTween('.copy', {
            autoAlpha: 0,
            y: 120
          });
          
          var fromLeftVars = {
            x: -80,
            autoAlpha: 0
          };

          var fromRightVars = {
            x: 80,
            autoAlpha: 0
          };
          
          var servicesOptions = {
            offset: 120,
            triggerElement: '#services',
            triggerHook: 'onEnter'
          };

          var offerTween = TweenMax.from('.offer', 0.8, fromLeftVars);
          var wpTween = TweenMax.from('.why-mobile-friendly', 0.8, fromRightVars);
          var scene2 = new ScrollMagic.Scene(servicesOptions).setTween(offerTween);
          var scene3 = new ScrollMagic.Scene(servicesOptions).setTween(wpTween);

          var fromBottomVars = {
            y: 30,
            autoAlpha: 0
          };

          var tl1 = new TimelineMax();
          var pRow1Options = {
            offset: 50,
            triggerElement: '.p-row1',
            triggerHook: 'onEnter'
          };

          var item1Tween = TweenMax.from('.item1', 0.25, fromBottomVars);
          var item2Tween = TweenMax.from('.item2', 0.25, fromBottomVars);
          var item3Tween = TweenMax.from('.item3', 0.25, fromBottomVars);
          tl1.add(item1Tween);
          tl1.add(item2Tween);
          tl1.add(item3Tween);
          var scene4 = new ScrollMagic.Scene(pRow1Options).setTween(tl1);
          var tl2 = new TimelineMax();
          var pRow2Options = {
            offset: 50,
            triggerElement: '.p-row2',
            triggerHook: 'onEnter'
          };

          var item4Tween = TweenMax.from('.item4', 0.25, fromBottomVars);
          var item5Tween = TweenMax.from('.item5', 0.25, fromBottomVars);
          var item6Tween = TweenMax.from('.item6', 0.25, fromBottomVars);
          tl2.add(item4Tween);
          tl2.add(item5Tween);
          tl2.add(item6Tween);
          var scene5 = new ScrollMagic.Scene(pRow2Options).setTween(tl2);                
          var tl3 = new TimelineMax();
          var pRow3Options = {
            offset: 50,
            triggerElement: '.p-row3',
            triggerHook: 'onEnter'
          };

          var item7Tween = TweenMax.from('.item7', 0.25, fromBottomVars);
          var item8Tween = TweenMax.from('.item8', 0.25, fromBottomVars);
          var item9Tween = TweenMax.from('.item9', 0.25, fromBottomVars);
          tl3.add(item7Tween);
          tl3.add(item8Tween);
          tl3.add(item9Tween);
          var scene6 = new ScrollMagic.Scene(pRow3Options).setTween(tl3);          
          var aboutOptions = {
            offset: 120,
            triggerElement: '#about',
            triggerHook: 'onEnter'
          };

          var aboutTween = TweenMax.from('.about-animated', 0.8, fromLeftVars);
          var capabilitiesTween = TweenMax.from('.capabilities', 0.8, fromRightVars);
          var scene7 = new ScrollMagic.Scene(aboutOptions).setTween(aboutTween);
          var scene8 = new ScrollMagic.Scene(aboutOptions).setTween(capabilitiesTween);          
          var pinOptions = {
            duration: 130,
            offset: -90,
            triggerElement: '#map',
            triggerHook: 'onLeave'
          };

          var scene9 = new ScrollMagic.Scene(pinOptions).setPin('.contact-info');
          var scene10 = new ScrollMagic.Scene(pinOptions).setPin('#contact .textwidget');
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
            scene10
          ]);
        }
      };

      var disableScrollMagic = function disableScrollMagic() {
        if (controller) {
          controller.destroy(true);
          TweenMax.set('*', {
            autoAlpha: 1,
            x: 0,
            y: 0
          });
        }
      };

      var enableOrDisableScrollMagic = function enableOrDisableScrollMagic() {
        enquire.register("screen and (min-width: 1260px)", {
          match : function() {
            enableScrollMagic();
          },  
          unmatch : function() {
            disableScrollMagic();
          }
        });
      };

      var toggleDescriptionOnHover = function toggleDescriptionOnHover() {
        $('.item').find('.description').hide();
        $('.item').on('mouseenter', function() {
          $(this).find('.description').fadeIn();
        }).on('mouseleave', function() {
          $(this).find('.description').fadeOut();
        });
      };

      var initGoogleMap = function initGoogleMap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.763316,-73.948631), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        if (mapElement === null) {
          return;
        }

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
      };

      var initGoogleMapOnWindowLoad = function initGoogleMapOnWindowLoad() {
        // When the window has finished loading create the google map below
        google.maps.event.addDomListener(window, 'load', initGoogleMap);
      };

      return {
        init: function() {
          addLoadedClassOnImagesLoaded();
          initTyped();
          initFlexslider();
          openExternalLinksInNewTabs();
          initLocalScrollHash();
          initLocalScroll();          
          addActiveClassToFirstLink();
          enableOrDisableScrollMagic();
          toggleDescriptionOnHover();          
          initGoogleMapOnWindowLoad();
        },
      };
    })(); 

    VDMApp.init();        
  });
})(jQuery);
