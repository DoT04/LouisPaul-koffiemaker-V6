

//menu wegklappen bij scrollen

$(document).ready(function () {
  //menu
  $(".menu").click(function () {
    $(".links").toggleClass("open");
  });
  $(window).scroll(function () {
    $(".links").removeClass("open");
    event.preventDefault();
  });
  //parallax
  $(".parallax-window").parallax({
    //imageSrc: '/path/to/image.jpg'}
  });
});

// parallax.js toevoegen, eerst script toevoegen aan html uitleg ook op github setup  met cdn link bij Github
// via JS werken dus functie kopieren in JS of Simple versie via HTML
/* HTML link kopieren en plakken in header en aanpassen 2classenamen kan niet dus 1x "class" wegdoen.
path naar de achtergrondimg vind je in de css copy en vervangen wel zonder ../
nu in css die backgr img in commentaar zetten anders 2 img over elkaar dus die moet weg
nu script initialiseren in main js
copy in github de script voor JS en plak in JS imagescr hebben we niet nodig */

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});



/* wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init(); */
// Scroll to id in page
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
                return false;
            } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
            };
        });
      }
    }
  });