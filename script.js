const flyContainer = document.querySelector(".flyContainer");
const flyImage = document.querySelector(".flyImage");

const images = ['../makhi open .gif','../makhi close .gif']

flyImage.addEventListener('click', function(){
    setInterval(() => {
        setInterval(()=>{flyImage.src =  `${images[Math.floor(Math.random()*2)]}`;
        },120)
    },10)
})


/*
function moveDiv() {
    var $span = $(flyImage);
   

    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
        
    });
};

moveDiv();
setInterval(moveDiv, 300); */


var maxLeft = _left_border - $('document.querySelector(".flyImage")').width(); // counter intuitively this is actually the right border
var maxTop = _top_border  - $('document.querySelector(".flyImage")').height();
var animationDurration = _duration;

function randomAnimation(){
  var randomLeft = Math.floor(Math.random()*maxLeft);
  var randomTop = Math.floor(Math.random()*maxTop);

  $('document.querySelector(".flyImage")').animate({
     left: randomLeft,
     top: randomTop
   }, animationDurration, function() {
     randomAnimation();
   });
}