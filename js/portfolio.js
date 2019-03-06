$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
    if (scroll > 300){
      $('.card-animate').addClass('active');
    }
    else if (scroll > 200){
      $('.card-animate').removeClass('active');
      $('#card1').addClass('active');
      $('#card2').addClass('active');
    }
    else if (scroll > 100){
      $('.card-animate').removeClass('active');
      $('#card1').addClass('active');
    }
    else{
      $('.card-animate').removeClass('active');
    }
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104088843-1', 'auto');
ga('send', 'pageview');
