/* ================================================ */
              /*  Fry Creator List */
/* ================================================ */

// created function in e6 declaring variables item, next, and new ite,m
var perfectFryList = () => {
    // grabbed element fryIngredientInput using Id
    var item = document.getElementById("fryIngredientInput").value
    // created text via input
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")

    // takes the text that was input and places it on list via li
    newItem.appendChild(text)
    // prints on the perfectfryList element
    document.getElementById("perfectFryList").appendChild(newItem)
}


/* ================================================ */
              /*  Merch PAGE ANIMATION (NEW JAVASCRIPT THAT WASNT TAUGHT) */
/* ================================================ */

// variables are globally scoped and will be used in the below functions
var currentHeight = 0;
var currentWidth= 0;

// the div with a class of "resize" will follow through function on hover

$('.resize').hover(

    function(){
        currentHeight = $(this, 'img')[0].height;
        currentWidth = $(this, 'img')[0].width;

        // width and height will enlarge times 2 and 1 as specified within parameters
        $(this).animate({width:(currentWidth * 2), height:(currentHeight * 1)}, 300);
    },

    function(){
        $(this).animate({width: currentWidth + 'px', height: currentHeight + 'px'}, 300);
    }
);


/* ================================================ */
              /* div Right Move*/
/* ================================================ */

// function is created onLoad in the HTML body
// created variables for moving the id (merchContBox)
// position set to 0
// interval is set via frame at 15miliseconds
var moveRight = () => {
    var moveme = document.getElementById("merchContBox")
    var position = 0;
    var interval = setInterval(frame, 15);

    
    function frame(){
// while the posiion is less than 45 it will move from left to right
    if( position < 45){
         position ++;
         moveme.style.left = position + '%';
     }
     // once the position is loosely equal to 45, it will return to posiion at 17
     else if (position == 45){
        
        moveme.style.left = 17 + '%';

     }
    }

}

/* ================================================ */
              /* Slide Show */
/* ================================================ */

// each picture in the slideshow is in an array called picture
// these are the declared varriables that will go through while loop
// https://goo.gl/images/zm3FmR

var picture = ["../images/fryCreation1.jpg" , "../images/fryCreation2.jpg" , "../images/fryCreation3.jpg", "../images/fryCreation4.png" , "../images/fryCreation5.png"];
var basic_pic = 0;
var image_length = picture.length - 1;

// This is where the pictures will go through array via loop

var changepic = (num) => {
   while (basic_pic = basic_pic + num){

    if(basic_pic > image_length){
        basic_pic = 0;
    }

   if(basic_pic < 0){
        basic_pic = image_length;
    }

    document.getElementById("slide").src = picture[basic_pic];
    return false
}}


/* ================================================ */
              /* Modal */
/* ================================================ */
// These are the variables that will be used in the modal, button, and close button (span tag)
var modal = document.getElementById('contactModal');
var btn = document.getElementById("submitButton");
var span = document.getElementsByClassName("close")[0];

// When the button is clicked - the modal will open 
// hence onclick  event connected to the btn
btn.onclick = function() {
    modal.style.display = "block";
}

// When the x is clicked the modal will close
span.onclick = function() {
    modal.style.display = "none";
}