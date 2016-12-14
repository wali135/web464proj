
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
var diff_c;
function progresscss(){
	diff_c = ((al_c / 100) * Math.PI*2*10).toFixed(2);
	context_css.clearRect(0, 0, cw, ch);
	context_css.lineWidth = 10;
	context_css.fillStyle = '#FFFFFF';
	context_css.strokeStyle = "#FFFFFF";
	context_css.textAlign = 'center';
	context_css.fillText(al_c+'%', cw*.5, ch*.5+2, cw);
	context_css.beginPath();
	context_css.arc(35, 35, 30, start, diff_c/10+start, false);
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
var diff_j;
function progressjs(){
	diff_j = ((al / 100) * Math.PI*2*10).toFixed(2);
	context.clearRect(0, 0, cw, ch);
	context.lineWidth = 10;
	context.fillStyle = '#FFFFFF';
	context.strokeStyle = "#FFFFFF";
	context.textAlign = 'center';
	context.fillText(al+'%', cw*.5, ch*.5+2, cw);
	context.beginPath();
	context.arc(35, 35, 30, start, diff_j/10+start, false);
	context.stroke();
	if(al >= 60){
		clearTimeout(sim);
	   
	}
	al++;
}
var sim = setInterval(progressjs, 50);




var context_bscs = document.getElementById('bscs').getContext('2d');
var al_b = 0;
var start = 4.72;
var cw_b = context_bscs.canvas.width;
var ch_b = context_bscs.canvas.height; 
var diff_b;
function progressbscs(){
	diff_b = ((al_b / 100) * Math.PI*2*10).toFixed(2);
	context_bscs.clearRect(0, 0, cw_b, ch_b);
	context_bscs.lineWidth = 10;
	context_bscs.fillStyle = '#FFFFFF';
	context_bscs.strokeStyle = "#FFFFFF";
	context_bscs.textAlign = 'center';
	context_bscs.fillText(al_b+'%', cw_b*.5, ch_b*.5+2, cw_b);
	context_bscs.beginPath();
	context_bscs.arc(35, 35, 30, start, diff_b/10+start, false);
	context_bscs.stroke();
	if(al_b >= 77.5){
		clearTimeout(sim_b);
	    // Add scripting here that will run when progress completes
	}
	al_b++;
}
var sim_b = setInterval(progressbscs, 50);


var context_fsc = document.getElementById('fsc').getContext('2d');
var al_f = 0;
var start = 4.72;
var cw_f = context_fsc.canvas.width;
var ch_f = context_fsc.canvas.height; 
var diff_f;
function progressfsc(){
	diff_f = ((al_f / 100) * Math.PI*2*10).toFixed(2);
	context_fsc.clearRect(0, 0, cw_f, ch_f);
	context_fsc.lineWidth = 10;
	context_fsc.fillStyle = '#FFFFFF';
	context_fsc.strokeStyle = "#FFFFFF";
	context_fsc.textAlign = 'center';
	context_fsc.fillText(al_f+'%', cw_f*.5, ch_f*.5+2, cw_f);
	context_fsc.beginPath();
	context_fsc.arc(35, 35, 30, start, diff_f/10+start, false);
	context_fsc.stroke();
	if(al_f >= 75){
		clearTimeout(sim_f);
	    
	}
	al_f++;
}
var sim_f = setInterval(progressfsc, 50);


var context_matric = document.getElementById('matric').getContext('2d');
var al_m = 0;
var start = 4.72;
var cw_m = context_matric.canvas.width;
var ch_m = context_matric.canvas.height; 
var diff_m;
function progressmat(){
	diff_m = ((al_m / 100) * Math.PI*2*10).toFixed(2);
	context_matric.clearRect(0, 0, cw_m, ch_m);
	context_matric.lineWidth = 10;
	context_matric.fillStyle = '#FFFFFF';
	context_matric.strokeStyle = "#FFFFFF";
	context_matric.textAlign = 'center';
	context_matric.fillText(al_m+'%', cw_m*.5, ch_m*.5+2, cw_m);
	context_matric.beginPath();
	context_matric.arc(35, 35, 30, start, diff_m/10+start, false);
	context_matric.stroke();
	if(al_m >= 80){
		clearTimeout(sim_m);
	   
	}
	al_m++;
}
var sim_m = setInterval(progressmat, 50);