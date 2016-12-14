
function fover() {
    document.getElementById("no-button").style.visibility = 'hidden';
}

function fout() {
    document.getElementById("no-button").style.visibility = 'visible';
}

function yesclick() {
    alert("Good Decision!  Here is my email: Khurshid135@gmail.com");
}



var context_html = document.getElementById('my_html').getContext('2d');
var al_h = 0;
var start = 4.72;
var cw_h = context_html.canvas.width;
var ch_h = context_html.canvas.height; 
var diff_h;
function progresshtml(){
	diff_h = ((al_h / 100) * Math.PI*2*10).toFixed(2);
	context_html.clearRect(0, 0, cw_h, ch_h);
	context_html.lineWidth = 10;
	context_html.fillStyle = '#FFFFFF';
	context_html.strokeStyle = "#FFFFFF";
	context_html.textAlign = 'center';
	context_html.fillText(al_h+'%', cw_h*.5, ch_h*.5+2, cw_h);
	context_html.beginPath();
	context_html.arc(35, 35, 30, start, diff_h/10+start, false);
	context_html.stroke();
	if(al_h >= 87){
		clearTimeout(sim_h);
	    // Add scripting here that will run when progress completes
	}
	al_h++;
}
var sim_h = setInterval(progresshtml, 50);


var context_css = document.getElementById('my_css').getContext('2d');
var al_c = 0;
var start = 4.72;
var cw = context_css.canvas.width;
var ch = context_css.canvas.height; 
var diff;
function progresscss(){
	diff = ((al_c / 100) * Math.PI*2*10).toFixed(2);
	context_css.clearRect(0, 0, cw, ch);
	context_css.lineWidth = 10;
	context_css.fillStyle = '#FFFFFF';
	context_css.strokeStyle = "#FFFFFF";
	context_css.textAlign = 'center';
	context_css.fillText(al_c+'%', cw*.5, ch*.5+2, cw);
	context_css.beginPath();
	context_css.arc(35, 35, 30, start, diff/10+start, false);
	context_css.stroke();
	if(al_c >= 80){
		clearTimeout(sim_c);
	    
	}
	al_c++;
}
var sim_c = setInterval(progresscss, 50);


var context = document.getElementById('my_javascript').getContext('2d');
var al = 0;
var start = 4.72;
var cw = context.canvas.width;
var ch = context.canvas.height; 
var diff;
function progressjs(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	context.clearRect(0, 0, cw, ch);
	context.lineWidth = 10;
	context.fillStyle = '#FFFFFF';
	context.strokeStyle = "#FFFFFF";
	context.textAlign = 'center';
	context.fillText(al+'%', cw*.5, ch*.5+2, cw);
	context.beginPath();
	context.arc(35, 35, 30, start, diff/10+start, false);
	context.stroke();
	if(al >= 60){
		clearTimeout(sim);
	   
	}
	al++;
}
var sim = setInterval(progressjs, 50);