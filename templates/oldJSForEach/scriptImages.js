var counter=1;
function SlidePhotos  (){
    document.getElementById('bt'+counter).checked=true;
    counter++;
    if(counter>4)
    {
        counter=1;
 
    }
}
setInterval(SlidePhotos,5000)