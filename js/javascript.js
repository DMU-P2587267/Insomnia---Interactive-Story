/* This is the function that makes the pause/ play button work */
$(document).ready(function() {
    var playing = false;
/* First off the button will not be playing automatically when the user goes on the site hence it says 'false'. */
    $('#button').click(function() {
/* When the element with the 'button' id is clicked, the browser activates the function for it below. */      
      console.log('Play btn')
      if (playing == false) {
/* If the user doesn't want to play the audio, they would press the pause button (when the audio is playing). */
        document.getElementById('player').play();
        playing = true;
/* If the broswer is playing audio this is what happens. */
        $(this).find('i').removeClass('fa-play');
        $(this).find('i').addClass('fa-pause');
/* The browser will remove the 'fa-play' class on the player container and add the 'fa-pause' class which will tell it to stop playing the audio and show a play button (for when the user wants to play the audio). */
      } else {
        document.getElementById('player').pause();
/* If the user wants to play the audio, they would press the play button (when the audio is off). */   
        playing = false;
/* If the browser isn't playing audio this is what happens. */     
        $(this).find('i').removeClass('fa-pause');
        $(this).find('i').addClass('fa-play');
/* The browser will remove the 'fa-pause' class on the player container and add the 'fa-play' class which tells the browser to start playing the audio and show the pause button (for when the user wants to pause the audio). */        
      }
    });
  });
/* If the browser doesn't record a click on the button, it will remain paused, however if it it pressed it will play until the button is clicked again to pause the audio. */  

/* This is the function that tells the browser what to do when the user scrolls down the page */    
  $(document).on("scroll", function() {
/* The browser is told that this function only takes place when the user scrolls (up or down) on the page. */    
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
/* "tag" is the class given to the headings of the story in the <h> tag and they keep the text invisible, so in the function elements with the "tag" class are targeted for this function to work. */
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
   
/* Here the variable is equivalent to 0 and the variable is the tag class elements and they are equal to the i which is the variable.
   As the 'tag' property is to keep the element at an opacity of 0, it will remain invisible. */      

      if ($(tag).position().top < pageBottom - 400) {
        $(tag).addClass("visible");
/* When the bottom of the page is more than 400 the 'visible' tag is shown and the elements with that tag fade in on the page.
   This part of the script says that when the position of the element with the 'tag' class has reached a certain part of the page, it will add the class 'visible' to it, which in turn adds the css properties from the 'visible' class and make the element(s) on that part of the page visible to the users screen. */ 
      }
       else {
        $(tag).removeClass("visible");
/* When the bottom of the page is scrolled less than 400 the 'visible' tag is removed and the elements  with that tag fade out on the page.
   The final part of this script says that if it is just the 'tag' class element on the page would be above the bottom of the page, the 'visible class gets removed and the 'tag' class remains which will mean that the elements with that class will go back to being invisible. */        
      }
       
    }
  });

/* Javascript function for the ghosts fading in and out.
   This javascript functions runs for 2 different elements on the page (both ghost images 1 and 2). */  
let close = document.querySelectorAll(".close");
/* The browser will select all elements withing the container with the 'close' tag. */
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
/* The browser is told that on click the following function should take place. */
      let div = this.parentElement;
/* On click the browser will get the parent div element. */
      div.style.opacity = "0";
/* The div elements visibility will change to 0. */
      setTimeout(function() { div.style.display = "none"; }, 600);
/* The browser will fade the div out after 600 ms and the div element will get hidden for 600 ms. */      
  }
}  
var el = document.getElementById("img1");
/* The browser will look for an element with the id 'img1'. */
el.addEventListener( "click", function() {
/* The browser will listen to the click of the mouse with the event listener. */
 function fadeOut() {
/* The browser is told that the clicked element (if it has the 'img1' id) will have to fade out. */    
    return new Promise(function (resolve, reject) {
    let opacity = 1;
/* The element is hidden by barely being visible when it fades out. */    
    function fade(){
       if ((opacity -= .01) > 0){
         el.style.opacity = opacity;
/* The element is bought back to visibility when its over 0 opacity. */         
         requestAnimationFrame(fade);
       } else {
         resolve();
/* If it doesn't come back the function resolves the problem by telling the browser to use the following fade function to bring the element back. */         
       }
    }
   fade();
   });
 };
 function fadeIn() {
    let opacity = 0;
    function fade1() {
      if ((opacity += .01) < 1){
         el.style.opacity = opacity;
         requestAnimationFrame(fade1);
/* 'fade1' gets called in if the 'img1' id element is less than one and becomes less clear to the users screen (invisible). */         
      }
    }
   fade1();
/* The browser sees what 'fade1' is and performs the function .*/   
 };

 fadeOut().then(fadeIn);
/* The browser gets told the div element will fade out, and when it is invisible, for it to then fade it back in straight after the fade out animation is finished.
   This will happen each time the element is clicked on, so it is an instant fade in after the fade out. */
});

var el2 = document.getElementById("img2");
/* The browser will look for an element with the id 'img2'. */
el2.addEventListener( "click", function() {
/* The browser will listen to the click of the mouse with the event listener. */
 function fadeOut() {
/* The browser is told that the clicked element (if it has the 'img2' id) will have to fade out. */ 
    return new Promise(function (resolve, reject) {
    let opacity = 1;
/* The element is hidden by barely being visible when it fades out. */ 
    function fade(){
       if ((opacity -= .01) > 0){
         el2.style.opacity = opacity;
/* The element is bought back to visibility when its over 0 opacity. */ 
         requestAnimationFrame(fade);
       } else {
         resolve();
/* If it doesn't come back the function resolves the problem by telling the browser to use the following fade function to bring the element back. */
       }
    }
   fade();
   });
 };

 function fadeIn() {
    let opacity = 0;
    function fade1() {
      if ((opacity += .01) < 1){
         el2.style.opacity = opacity;
         requestAnimationFrame(fade1);
/* 'fade1' gets called in if the 'img2' id element is less than one (invisible). */ 
      }
    }
   fade1();
/* The browser sees what 'fade1' is and performs the function.*/   
 };

 fadeOut().then(fadeIn);
/* The browser gets told the div element will fade out, and when it is invisible, for it to then fade it back in straight after the fade out animation is finished.
   This will happen each time the element is clicked on, so it is an instant fade in after the fade out. */
});

/* Javascript for review box explained step by step. */    
let loginForm = document.getElementById("loginForm");
/* The container with the id 'loginForm' is chosen. */
loginForm.addEventListener("submit", (e) => {
e.preventDefault();
/* An event listener is added so when the user presses the submit button to give in their response, a message will be sent to them when it is submitted. */
let text1 = document.getElementById("question1");
let text2 = document.getElementById("question2");
/* Before answers are typed in, default answers, which in this case are the questions, are shown that which have the 'question1' and 'question2' class and are visible until user starts typing their answer in.
   The browser will collect the answers by looking for the elements with classes 'question1' and 'question2' get replaced by a new line of text, and get stored when the submit button is pressed. */

if (text1.value == "" || text2.value == "") {
/* If the user hasn't filled in both text boxes this message will pop up. */    
  alert("Please make sure you fill in both fields!");
/* The alert will keep popping up until both boxes are filled as the browser is told not to accept the answers until both boxes are filled. */

} else {
/* This message pops up on the page after the user submits their review after filling in both text boxes. */
  alert("Thank you for your review! Your submission has been successfully submitted!");
  console.log(
    `This form has a answer of ${text1.value} and answer of ${text2.value}`
  );
  text1.value = "";
  text2.value = "";
}
});

/* Javascript for star rating system explained step by step. */
const container = document.querySelector('.rating');
/* The container with all elements is chosen, which is the <ul> container, that also has the 'rating' class. */
const items = container.querySelectorAll('.rating-item')
/* The container with all elements within the container that has the class 'rating-item' are selected and put here in an array. */
container.onclick = e => {
/* A click event is here so that when a star is clicked it goes through this function. */
const elClass = e.target.classList;
/* The rating shown will change if the user clicks on a different star and does on to the next process of the function. */ 
if (!elClass.contains('active')) {
items.forEach( 
item => item.classList.remove('active')
);
/* Once a star has been chosen, the 'active' class gets removed from the one that had it previously (in this case the 2 star because it has it until the user selects a different star.*/
console.log(e.target.getAttribute("data-rate"));
elClass.add('active'); 
/* If the selected star doesn't have the active class on it when selected, it gains the 'active' class after it is removed from the star element that previously had it. 
   If no stars are chosen/ selected, the function does not happen, meaning the 'active' class will not move from one star element to another and will remain on the element that originally has the 'active' class property. */
}
};