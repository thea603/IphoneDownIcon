
$(function() {
    var count = 100;
    var min=0.1;
    var time=60000*min;

    $('.start').click(function(){
      var countdown = setInterval(CountDown, time*0.01 );
      $('.stop').show();
      $('.start').hide();
      function CountDown() {
            count++;
            var num=count*3.6;
            console.log(num);      
           if (num <= 180) {
       					 $('.circle').find('.right').css('-webkit-transform', "rotate(" + num + "deg)");
       					 } 
                
       			else  if(num<=360){
          					$('.circle').find('.right').css('-webkit-transform', "rotate(180deg)");
          					$('.circle').find('.left').css('-webkit-transform', "rotate(" + (num - 180) + "deg)");
                 }
            else if (num <= 540) {
                    $('.circle').find('.left').css('-webkit-transform', "rotate(0deg)");
                    $('.circle').find('.right').css('-webkit-transform', "rotate(" + (num - 360) + "deg)");
                 } 
            else if (num <= 720){
                    $('.circle').find('.right').css('-webkit-transform', "rotate(540deg)");
                    $('.circle').find('.left').css('-webkit-transform', "rotate(" + (num - 540) + "deg)");
                 }else if(num>720){
                   clearInterval(countdown); 
                 }                
        }
            $('.stop').click(function(){
                  $('.stop').hide();
                  $('.start').show();
                  clearInterval(countdown);
              })
    })     
});