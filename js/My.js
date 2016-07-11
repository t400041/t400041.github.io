/**
 * Created by admin on 2016/7/11.
 */
//    定义多边形函数
$(function(){
    var canvas=document.getElementById("mycell");
    var c=canvas.getContext("2d");

    function polygon(c,n,x,y,r,angle,counterclockwise){
        angle=angle || 0;
        counterclockwise= counterclockwise || false;
        c.moveTo(
            x + r*Math.sin(angle),
            y - r*Math.cos(angle)
        );
        var delta=2*Math.PI/n;
        for(var i = 1; i < n;i++){
            angle +=counterclockwise?-delta:delta;
            c.lineTo(
                x+r*Math.sin(angle),
                y-r*Math.cos(angle)
            );
        }
        c.closePath();
    }
//    绘制cell中的六边形

    c.beginPath();
    polygon(c,6,178,100,95,0);
    polygon(c,6,89.5,251,95,0);
    polygon(c,6,266.5,251,95,0);
    polygon(c,6,178,402,95,0);
    c.fillStyle="#67848f";
    c.strokeStyle="#67848f";
    c.lineWidth=5;
    c.shadowColor="67848f";
    c.shadowOffsetX=0;
    c.shadowOffsetY=0;
    c.shadowBlur=4;
    c.fill();
    c.stroke();
    $(".cell").hover(function(){
            $(this).addClass("cell-c");
        },
        function(){
            if($(this).data("ch")==1){
                $(this).removeClass("cell-c");
            }
            else{}
        });
    $(".cell-1").hover(function(){
            c.beginPath();
            polygon(c,6,178,100,95,0);
            c.fillStyle=("#fff");
            c.fill();
            c.stroke();
        },
        function(){
            if($(this).data("ch")==1){
                c.beginPath();
                polygon(c,6,178,100,95,0);
                c.fillStyle=("#67848f");
                c.fill();
                c.stroke();
            }
            else{}
        });
    $(".cell-2").hover(function(){

            c.beginPath();
            polygon(c,6,89.5,251,95,0);
            c.fillStyle=("#fff");
            c.fill();
            c.stroke();

        },
        function(){
            if($(this).data("ch")==1){
                c.beginPath();
                polygon(c,6,89.5,251,95,0);
                c.fillStyle=("#67848f");
                c.fill();
                c.stroke();
            }
            else{}


        });
    $(".cell-3").hover(function(){

            c.beginPath();
            polygon(c,6,266.5,251,95,0);
            c.fillStyle=("#fff");
            c.fill();
            c.stroke();

        },
        function(){
            if($(this).data("ch")==1){
                c.beginPath();
                polygon(c,6,266.5,251,95,0);
                c.fillStyle=("#67848f");
                c.fill();
                c.stroke();
            }
            else{}


        });
    $(".cell-4").hover(function(){

            c.beginPath();
            polygon(c,6,178,402,95,0);
            c.fillStyle=("#fff");
            c.fill();
            c.stroke();

        },
        function(){
            if($(this).data("ch")==1){
                c.beginPath();
                polygon(c,6,178,402,95,0);
                c.fillStyle=("#67848f");
                c.fill();
                c.stroke();
            }
            else{}

        });

    $(".cell").click(function(){
        $(".cell").removeClass("cell-c");
        $(this).addClass("cell-c");
        $(".box-psl").addClass("toright");
        c.beginPath();
        polygon(c,6,178,100,95,0);
        polygon(c,6,89.5,251,95,0);
        polygon(c,6,266.5,251,95,0);
        polygon(c,6,178,402,95,0);
        c.fillStyle="#67848f";
        c.fill();
        c.stroke();
        $(".cell").data("ch","1");
        $(this).data("ch","0");
        setTimeout("$('#goBack').addClass('d-block');",700);




    });
    $(".cell-1").click(function(){

        c.beginPath();
        polygon(c,6,178,100,95,0);
        c.fillStyle=("#fff");
        c.fill();
        c.stroke();
        $(".step").fadeOut(100);
        $(".step-1").fadeIn(500);
    });
    $(".cell-2").click(function(){

        c.beginPath();
        polygon(c,6,89.5,251,95,0);
        c.fillStyle=("#fff");
        c.fill();
        c.stroke();
        $(".step").fadeOut(100);
        $(".step-2").fadeIn(500);
    });
    $(".cell-3").click(function(){

        c.beginPath();
        polygon(c,6,266.5,251,95,0);
        c.fillStyle=("#fff");
        c.fill();
        c.stroke();
        $(".step").fadeOut(100);
        $(".step-3").fadeIn(500);
    });
    $(".cell-4").click(function(){

        c.beginPath();
        polygon(c,6,178,402,95,0);
        c.fillStyle=("#fff");
        c.fill();
        c.stroke();
        $(".step").fadeOut(100);
        $(".step-4").fadeIn(500);
    });
    $("#goBack").click(function(){
        $(".cell").removeClass("cell-c");
        $(".box-psl").removeClass("toright");
        $(".step").fadeOut(100);
        c.beginPath();
        polygon(c,6,178,100,95,0);
        polygon(c,6,89.5,251,95,0);
        polygon(c,6,266.5,251,95,0);
        polygon(c,6,178,402,95,0);
        c.fillStyle="#67848f";
        c.fill();
        c.stroke();
        $(".cell").data("ch","1");
        $(this).removeClass("d-block");
    });
});

