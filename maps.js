const kedesh = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26734.51305166508!2d35.49439601562501!3d33.11397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e9f1c08705055%3A0xf3a5abc94a1aa7f6!2sTel%20Qedesh!5e0!3m2!1ses-419!2sil!4v1689615517656!5m2!1ses-419!2sil" 
const nablus = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54004.035010918284!2d35.20647929616266!3d32.224375480002195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce0f650425697%3A0x7f0ba930bd153d84!2sNablus!5e0!3m2!1ses-419!2sil!4v1689615610276!5m2!1ses-419!2sil" 
const hebron = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27205.540309405627!2d35.07922631430575!3d31.532603478439924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e427ecc463fb%3A0xbe464d5c6a2f134c!2zSGVicsOzbg!5e0!3m2!1ses-419!2sil!4v1689615696282!5m2!1ses-419!2sil"

const locations = [kedesh, nablus, hebron];
map.src = kedesh, nablus, hebron;
const lastLocation = locations.length -1; 
let currentLoc = 0;


const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click",function(){
    const loc = document.getElementById("map")
    currentLoc++;
    prevBtn.disabled = false; 
    if(currentLoc >= lastLocation) {
        currentLoc = 2;
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }
   
    loc.src = locations[currentLoc];
})

const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click",function(){    
    const loc = document.getElementById("map")
    currentLoc--; 
    nextBtn.disabled = false;
    if(currentLoc <= 0) {
        currentLoc = 0;
       prevBtn.disabled = true;
       nextBtn.disabled = false;
    }
    
    loc.src = locations[currentLoc];
    
    
    }); 
    

  
