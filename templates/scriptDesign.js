 var slide=document.querySelectorAll('.slide');
    var btn=document.querySelector('.btn');
    var currenttime=4;
    var count=1;

    function anim(){
        
        if(count!=((slide.length)/4))
        {
                document.getElementById("dott1").style.animation = 'jumpup 0.4s 0.1s linear 2' ;
                document.getElementById("dott2").style.animation = "jumpup 0.4s 0.2s linear 2";
                document.getElementById("dott3").style.animation = "jumpup 0.4s 0.3s linear 2 ";
              
          count++;
        }
       
        for(var i=currenttime; i<currenttime+4; i++)
        {
            
            if(slide[i])
            {
                slide[i].style.display='block';
            }
          

        }
      
        currenttime+=4;
       
        if(currenttime>=slide.length)
        {
            document.getElementById("bt").style.display='none';
            document.getElementById("dott1").style.display='none';
            document.getElementById("dott2").style.display='none';
            document.getElementById("dott3").style.display='none';
       
            
        }
        
    }

    