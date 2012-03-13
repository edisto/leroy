// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function init()
{
curObj = 'first', prevObj = 'first';
document.getElementById('first').onclick = function(){prevObj = curObj; curObj = 'first'; determinate('first');};
document.getElementById('second').onclick = function(){prevObj = curObj; curObj = 'second'; determinate('second');};
document.getElementById('third').onclick = function(){prevObj = curObj; curObj = 'third'; determinate('third');};
}

function determinate()
{
	if(curObj != prevObj)
	{
		enlarge(curObj);
		shrink(prevObj);
	}
}

function enlarge(LayerID)
{
	curWidth = document.getElementById(LayerID).style.width;
	newWidth = parseInt(curWidth) + 3;
	document.getElementById(LayerID).style.width = newWidth + "px";
	controller = setTimeout(function(){enlarge(LayerID)},10)
	if(newWidth > 300)
	{
		clearTimeout(controller);
		clicked = false;
	}
}

function shrink(LayerID)
{
	curWidth = document.getElementById(LayerID).style.width;
	newWidth = parseInt(curWidth) - 3;
	document.getElementById(LayerID).style.width = newWidth + "px";
	controller = setTimeout(function(){shrink(LayerID)},10)
	if(newWidth < 20)
	{
		clearTimeout(controller);
		clicked = true;
	}
}
window.onload = init;

