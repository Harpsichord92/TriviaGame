// Global Variables
//======================================================
var rightCount = 0;
var wrongCount = 0;


// Game Logic
//===============================================

// Functions to only allow one checked box at a time
$('.firstq').on('change', function() {
	$('.firstq').not(this).prop('checked', false);  
		});

$('.secondq').on('change', function() {
	$('.secondq').not(this).prop('checked', false);  
		});

$('.thirdq').on('change', function() {
	$('.thirdq').not(this).prop('checked', false);  
		});

$('.fourthq').on('change', function() {
	$('.fourthq').not(this).prop('checked', false);  
		});

$('.fifthq').on('change', function() {
	$('.fifthq').not(this).prop('checked', false);  
		});

// Function to start game
function endgame() {

	//First Question
    $(".firstq:checked").each(function(){  
        if ($('.firstq:checked').val() === 'r')
        {
            rightCount ++;
        } 
        else {
        	wrongCount ++;
        }
    });

	//Second Question
    $(".secondq:checked").each(function(){  
        if ($('.secondq:checked').val() === 'r')
        {
            rightCount ++;
        } 
        else {
        	wrongCount ++;
        }
    });

	//Third Question
    $(".thirdq:checked").each(function(){  
        if ($('.thirdq:checked').val() === 'r')
        {
            rightCount ++;
        } 
        else {
        	wrongCount ++;
        }
    });

	//Fourth Question
    $(".fourthq:checked").each(function(){  
        if ($('.fourthq:checked').val() === 'r')
        {
            rightCount ++;
        } 
        else {
        	wrongCount ++;
        }
    });

	//Fifth Question
    $(".fifthq:checked").each(function(){  
        if ($('.fifthq:checked').val() === 'r')
        {
            rightCount ++;
        } 
        else {
        	wrongCount ++;
        }
    });
}

// Timer
//===============================================

window.onload = function(){
  
(function(){
  var counter = 30;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      $("#timer").html("Time Remaining: " + counter + " seconds")
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        clearInterval(counter);

        //Alerts user how many questions they got correct/incorrect
        endgame();
        alert('You got ' + rightCount + ' questions correct' + ' and ' + wrongCount + ' wrong.');
    }
    
  }, 1000);
})();
}