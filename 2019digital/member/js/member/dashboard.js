// Circle Progress Bars
(function($){
    $.fn.percentPie = function(options){

        var settings = $.extend({
            width: 100,
            trackColor: "EEEEEE",
            barColor1: "84C24C",
            barColor2: "84C24C",
            barWeight: 30,
            startPercent: 0,
            fps: 70
        }, options);

        var percentage = $(this).data('percent')/100;

        this.css({
            width: settings.width,
            height: settings.width
        });

        var that = this,
            hoverPolice = false,
            canvasWidth = settings.width,
            canvasHeight = canvasWidth,
            id = $('canvas').length,
            canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
            canvas = canvasElement.get(0).getContext("2d"),
            centerX = canvasWidth/2,
            centerY = canvasHeight/2,
            radius = settings.width/2 - settings.barWeight/2;
            counterClockwise = false,
            fps = 1000 / settings.fps/2,
            update = .01;
            this.angle = settings.startPercent;

        this.drawArc = function(startAngle, percentFilled, color1, color2){
            var drawingArc = true;
            canvas.beginPath();
            canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
            var grd = canvas.createLinearGradient(0,0,settings.width,0);
            grd.addColorStop(0, color1);
            grd.addColorStop(1, color2);
            canvas.strokeStyle = grd;
            canvas.lineWidth = settings.barWeight;
            canvas.stroke();
            drawingArc = false;
        }

        this.fillChart = function(stop){
            $({numberValue: 0}).animate({numberValue: percentage*100}, {
                duration: fps*100,
                easing: 'linear',
                step: function() { 
                    that.find('.tag-text').text(Math.ceil(this.numberValue)); 
                }
            });
            var loop = setInterval(function(){
                hoverPolice = true;
                canvas.clearRect(0, 0, canvasWidth, canvasHeight);

                that.drawArc(0, 360, settings.trackColor, settings.trackColor);
                that.angle += update;
                that.drawArc(settings.startPercent, that.angle, settings.barColor1, settings.barColor2);

                if(that.angle > stop){
                    clearInterval(loop);
                    hoverPolice = false;
                }
            }, fps);
        }

        this.fillChart(percentage);
        this.append(canvasElement);
        return this;
    }
}(jQuery));

