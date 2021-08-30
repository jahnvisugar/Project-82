canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouse_event="empty";
var last_position_of_x, last_position_of_y;
var color="teal";
var width_of_line= 3;
var radius = 20;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
    console.log("mouseleave_event");
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_event="mouseup";
    console.log("mouseup_event");
}

canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        
        if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
        }

        
    }
