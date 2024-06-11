const cursor = document.querySelector('.cursor');


cursor.addEventListener('mousemove', function (events) {
    console.log("cursor move");

 moveCursor(events.pageX, events.pageY);
 console.log(events.pageX);
 console.log(events.pageY);

});

const moveCursor = function(pageX, pageY) {
   cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";

}

