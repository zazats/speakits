import {globalVars} from '/globalVars.js';
import { NoSleep } from '../libraries/nosleep/index.js';


window.showWhisper = function showWhisper(){
    if(infospot == null){
      infospot = new PANOLENS.Infospot(1000, 'assets/talking_head1.gif', true);
      //infospot.addHoverElement(document.getElementById('cheat_note'), 200);
      infospot.position.set(0, -0, -1000); //infospot.dispose();
      panorama.add(infospot);
    }
  
    infospot.show();
  
}
  
window.hideWhisper = function hideWhisper(){
    if(infospot != null){
      infospot.hide();
    }
}
  
window.startWhisper =  function startWhisper() {
      container = document.querySelector('#container');
      noSleep.enable();
      document.getElementById("btn").style.display = "none";
      document.getElementById("count_down").style.display = "none";
      //var audio = new Audio('assets/imagine_l1.mp3');
      //audio.loop = true;
      //audio.play();
    
  
      panorama = new PANOLENS.ImagePanorama('assets/imagine1.jpeg', 50);
    
      panorama.addEventListener('enter-fade-start', () => {
          viewer.tweenControlCenter(new THREE.Vector3(0,0,0), 0)
      })
      viewer = new PANOLENS.Viewer({ container: container });
      viewer.add(panorama);
    
      var ef = 1, ctrl = 0;
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
          ef = 2;
          ctrl = 1;
      }
      viewer.enableControl(ctrl);
      viewer.enableEffect(ef);
      viewer.setCameraFov(90);
      
}

function PlaySound(audioPath) {
    var audio = new Audio(audioPath);
    audio.loop = false;
    audio.play();
}

function concatenateAfterSpecificPhrase(array, startKeyword, endKeyword) {
    let isConcatenating = false;
    let result = '';
    var currentPhrase="";

    for (let i = 0; i < array.length; i++) {
         currentPhrase += array[i][0].transcript;
    }
    const startRegex = new RegExp(startKeyword + '(.*?)' + endKeyword, 'g');
        
  // Find all matches
    let match;
    while ((match = startRegex.exec(currentPhrase.toLowerCase())) !== null) {
        result += match[1]; // Concatenate the text between the keywords
    }

    return result;
    
}

window.loadWhisperVenue = async function loadWhisperVenue(imagePrompt) {
    noSleep.enable();
    document.getElementById("btn").style.display = "none";

    container = document.querySelector('#container');
              
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
    };

    //const response = await fetch(`https://backend.blockadelabs.com/api/v1/skybox?prompt=${imagePrompt}`, requestOptions);
    //const data = await response.json();

    Pusher.logToConsole = true;
    pusher = new Pusher('a6a7b7662238ce4494d5', {
    appId: "1555452",
    key: "a6a7b7662238ce4494d5",
    secret: "5b69dc3f0bb7800ed8d0",
    cluster: "mt1"
    });
    
    //channel = pusher.subscribe(data.pusher_channel);
   // channel.bind(data.pusher_event, loadVenueEvent);      
}