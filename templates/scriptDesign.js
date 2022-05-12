 var slide=document.querySelectorAll('.slide');
    var btn=document.querySelector('.btn');
    var currenttime=4;
    var count=1;
    
   
    function anim(){
       
        stop();
        start();
        
                
            
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
        
        setTimeout(stop,984);
        
        
       
       
    }

    function stop()
    {
        
        
        document.getElementById("dott1").style.animationPlayState='paused';
        document.getElementById("dott2").style.animationPlayState='paused';
        document.getElementById("dott3").style.animationPlayState='paused';
    }

    function start()
    {
        document.getElementById("dott1").style.animationPlayState='running';
        document.getElementById("dott2").style.animationPlayState='running';
        document.getElementById("dott3").style.animationPlayState='running';
    }