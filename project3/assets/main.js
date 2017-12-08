$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


function playSound () {
    document.getElementById('play').play();
}

function playSound2 () {
    document.getElementById('play2').play();
}

function playSound3 () {
    document.getElementById('play3').play();
}

function playSound4 () {
    document.getElementById('play4').play();
}

function playSound5 () {
    document.getElementById('play5').play();
}

function playSound6 () {
    document.getElementById('play6').play();
}

function playSound7 () {
    document.getElementById('play7').play();
}

function playSound8 () {
    document.getElementById('play8').play();
}

function playSound9 () {
    document.getElementById('play9').play();
}

function playSound10 () {
    document.getElementById('play10').play();
}

$( function() {
   $( ".drag1" ).draggable({ containment: ".play", scroll: false });
    $( ".drag2" ).draggable({ containment: "parent" });
    $( ".drag3" ).draggable({ containment: "parent" });
    $( ".drag4" ).draggable({ containment: "parent" });
    $( ".drag5" ).draggable({ containment: "parent" });
	$( ".drag6" ).draggable({ containment: "parent" });
	$( ".drag7" ).draggable({ containment: "parent" });
	$( ".drag8" ).draggable({ containment: "parent" });
	$( ".drag9" ).draggable({ containment: "parent" });
	$( ".drag10" ).draggable({ containment: "parent" });
	$( ".drag11" ).draggable({ containment: "parent" });
  } );