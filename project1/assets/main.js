jQuery(function($) {
  
  var doAnimations = function() {
    
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
        $animatables.each(function(i) {
       var $animatable = $(this);
      
            if (($animatable.offset().top + $animatable.height() + 50) < offset) {
        
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

            }
      
      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height() + 50) > offset) {
        
        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }

      }

    });

    };
  
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');



});

//DO NOT TOUCH ABOVE THIS


/*


$('.tlt').textillate({
  selector: '.texts',
  loop: false,
  minDisplayTime: 2000,
  autoStart: false,
  type: 'char'
 
  // sets the initial delay before starting the animation 
  // (note that depending on the in effect you may need to manually apply 
  // visibility: hidden to the element before running this plugin) 
  initialDelay: 0,
 
  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: true,
    reverse: false,
    callback: function () {}
  },
 


});
};