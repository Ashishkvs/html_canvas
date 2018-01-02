console.log('r/place');
var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c= canvas.getContext('2d');
c.fillRect(100,100,100,100);
c.fillRect(400,100,100,100);
c.fillRect(700,100,100,100);
console.log(c);
console.log(canvas);