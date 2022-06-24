var cnv = document.createElement('canvas');
var context = cnv.getContext('2d');
context.fillStyle = '#000';

cnv.id = "draw";
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

document.body.appendChild(cnv);

var pointerX = -1;
var pointerY = -1;

document.onmousemove = function(event){
    pointerX = event.pageX;
    pointerY = event.pageY;

    
    context.fillRect(pointerX, pointerY, 1, 1);
    console.log('Cursor at: ' + pointerX + ' , ' + pointerY);
}