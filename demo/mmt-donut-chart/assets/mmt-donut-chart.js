/*!
* mmt-donut-chart.js
* Version: 1.1.2
*
* Copyright 2015 MyMusicTaste
* Released under the MIT license
* https://github.com/MyMusicTaste/mmt-donut-chart/blob/master/LICENSE
*/

function mmtDonutChart(chartName, percent, parameters, completeFunction) {

	if(parameters==undefined){
		parameters = {};
	}
	if(percent==0){
		percent = 0.001;
	}
	if(parameters.animateRotation==null){
		parameters.animateRotation = true;
	}

	var animateRotation	= parameters.animateRotation && true,
		animationStep  	= parameters.animationStep || 100,
		bgColor     			= parameters.bgColor || '#000000',
		chartColor      		= parameters.chartColor || '#0bbabb',
		startColor			= parameters.startColor || chartColor,
		endColor			= parameters.endColor || chartColor,
		cutOut        		= parameters.cutOut || 97,
		dotColor      		= parameters.dotColor || chartColor,
		doughnutPadding 	= parameters.doughnutPadding || 5,
		outerCanvasSize   	= parameters.outerCanvasSize || 230,
		pointSize       		= parameters.pointSize || 5,
		labelShow			= parameters.labelShow || false,
		labelAnimation		= parameters.labelAnimation || false,
		defaultChart		= parameters.defaultChart || false;

	if(parameters.pointSize==0){  // dot remove
		pointSize = 0;
	}

	var outerCanvasContext,
	statusGrid,
	stepSize = percent / animationStep, // PE the incremental increase in value per canvas render step (x100)
	drawStepProgress = 0; // PE start at 1%

	/* ===== v.1.1.0 update ======================== */
	if(startColor==chartColor && endColor==chartColor){
		var data = [
			{
				value: percent,
				color: chartColor
			},
			{
				value: 100-percent,
				color: bgColor
			}
		];
	}
	else {
		var data = [];
		var step = percent/100;	

		for(var i=1; i<101; i++){
			var color = makeGradientColor(startColor, endColor, i);

			data.push({ 
				value: step, 
				color: color
			});
		}

		data.push({
			value: 100-percent,
			color: bgColor
		});
	}
	
	function makeGradientColor(sColor, eColor, percent) {
		var newColor = {};
		var sColor = {};
		var eColor = {};

		function makeChannel(a, b) {
			return(a + Math.round((b-a)*(percent/100)));
		}

		function makeColorPiece(num) {
			num = Math.min(num, 255);   // not more than 255
			num = Math.max(num, 0);     // not less than 0
			var str = num.toString(16);
			if (str.length < 2) {
				str = "0" + str;
			}
			return(str);
		}

		sColor.r = parseInt(startColor.slice(1, 3), 16);
		sColor.g = parseInt(startColor.slice(3, 5), 16);
		sColor.b = parseInt(startColor.slice(5, 7), 16);

		eColor.r = parseInt(endColor.slice(1, 3), 16);
		eColor.g = parseInt(endColor.slice(3, 5), 16);
		eColor.b = parseInt(endColor.slice(5, 7), 16);

		newColor.r = makeChannel(sColor.r, eColor.r);
		newColor.g = makeChannel(sColor.g, eColor.g);
		newColor.b = makeChannel(sColor.b, eColor.b);

		newColor.cssColor = "#" + makeColorPiece(newColor.r) + makeColorPiece(newColor.g) + makeColorPiece(newColor.b);
		return(newColor.cssColor);
	}
	/* =============================== */

	var options = {
		segmentShowStroke : false,
		percentageInnerCutout : cutOut,
		animationSteps : animationStep,
		animationEasing : "linear",
		animateRotate : animateRotation
	};

	var doughnutCanvas;
	var helpers = Chart.helpers;
	var helpers = Chart.helpers;
	var label = document.getElementById(chartName+'-num');

	Chart.types.Doughnut.extend({
		name: "extendDonutChart",

		// Check if we need to extend the scale
		initialize: function(data) {
			this.options.onAnimationProgress = function() {
				if (statusGrid !== undefined) {
					this.drawPoint();
				}
				if (labelShow == true && labelAnimation == true) {
					drawStepProgress += stepSize;					
					label.innerHTML = Math.round(drawStepProgress);
				}
				if (labelShow == true && labelAnimation == false) {
					label.innerHTML = Math.round(percent);
				}
			};
			this.options.onAnimationComplete = function() {
				if(completeFunction!==undefined){
					completeFunction();  // HJ commented
				}
			};

			Chart.types.Doughnut.prototype.initialize.apply(this, arguments);
		},

		// Draw the line on clear
		clear: function(data) {
			Chart.types.Doughnut.prototype.clear.apply(this, arguments);
			outerCanvasContext.clearRect(0, 0, outerCanvasSize, outerCanvasSize);
		},

		draw : function(easeDecimal) {
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();

			helpers.each(this.segments,function(segment,index) {

				if(index == data.length-1) {	//HJ 151116 update
					segment.endAngle = Math.PI * 1.5;
					segment.draw(); // whole chart bg
					return;
				}
				else {
					//console.log("angle: "+ segment.startAngle + " "+ segment.endAngle)
					if(segment.endAngle !== undefined) {
						var x = segment.x + segment.outerRadius * Math.cos(segment.endAngle);
						var y = segment.y + segment.outerRadius * Math.sin(segment.endAngle);
						statusGrid = { x: x, y: y };
						//console.log(statusGrid);
					}
				}
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				}, animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;
				segment.draw(); // valid part

				if (index == 0) {
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1) {
					this.segments[index+1].startAngle = segment.endAngle;
				} else {
				//if last, update x,y
				}
			}, this);

			outerCanvasContext.drawImage(doughnutCanvas,doughnutPadding,doughnutPadding);
		},

		drawPoint: function() {
			outerCanvasContext.beginPath(); 			
			outerCanvasContext.arc(statusGrid.x+doughnutPadding, statusGrid.y+doughnutPadding, pointSize, 0, 2 * Math.PI, false);
			outerCanvasContext.fillStyle = dotColor;
			outerCanvasContext.fill();
		}
	});

	if(defaultChart==false) {
		window.devicePixelRatio = 1;  // HJ for mobile issue
		var size = outerCanvasSize - doughnutPadding * 2;
		doughnutCanvas = document.createElement("canvas");
		doughnutCanvas.width = size;
		doughnutCanvas.height = size;
		doughnutCanvas.style.visibility = 'hidden'; 
		doughnutCanvas.style.position = 'absolute';
		doughnutCanvas.style.top = doughnutPadding+'px';
		doughnutCanvas.style.left = doughnutPadding+'px';
		document.getElementById(chartName).parentNode.style.position = 'relative';
		document.getElementById(chartName).parentNode.appendChild(doughnutCanvas);

		outerCanvasContext = document.getElementById(chartName).getContext("2d");
		outerCanvasContext.canvas.height = outerCanvasSize;
		outerCanvasContext.canvas.width = outerCanvasSize;
		ctx = doughnutCanvas.getContext("2d");
		myDoughnutChart = new Chart(ctx).extendDonutChart(data, options);
	}
	else {
		label.innerHTML = percent;
		ctx = document.getElementById(chartName).getContext("2d");
		myDoughnutChart = new Chart(ctx).Doughnut(data, options);
	}

};

