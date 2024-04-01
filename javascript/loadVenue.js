import { NoSleep } from '../libraries/nosleep/index.js';
import imagesSettings from '../imageSettings.js';
//import Pusher from '../libraries/pusher-js/pusher.js';


const noSleep = new NoSleep();
//DeviceOrientationEvent.requestPermission();    
let panorama, viewer, container;

var pusher = null;
const myHeaders = new Headers();
myHeaders.append("x-api-key", "g8Vu69Ip2RJAEuFVgAxoN9QKq7DmViQtW4jfo5CwIENvU7Fk4URYMckq94Mq");
  
  // Subscribe to the channel you want to receive events from
var channel = null; 
 window.loadVenueEvent = async function loadVenueEvent(eventData) {
  console.log(eventData);
  if(eventData.status == 'complete'){
     const imageSettings = imagesSettings["imagine1"];
     imageSettings.image = eventData.file_url;
     displayImage(imageSettings)
  }
}

window.startWhisper = async function startWhisper() {
    container = document.querySelector('#container');
    noSleep.enable();
    document.getElementById("btn").style.display = "none";
    //var audio = new Audio('assets/imagine_l1.mp3');
    //audio.loop = true;
    //audio.play();
  
    let infospot = new PANOLENS.Infospot(1000, 'assets/talking_head1.gif', true);

    infospot.position.set(0, -0, -1000);
    //infospot.addHoverElement(document.getElementById('cheat_note'), 200);
    panorama = new PANOLENS.ImagePanorama('assets/imagine1.jpeg', 50);
  
    panorama.addEventListener('enter-fade-start', () => {
        viewer.tweenControlCenter(new THREE.Vector3(0,0,0), 0)
    })
    viewer = new PANOLENS.Viewer({ container: container });
    panorama.add(infospot);
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
  

window.displayImage = async function displayImage(imageSettings) {
  //const imageSettings = imagesSettings[imageName];

  var audio = new Audio(imageSettings.audio || 'assets/imagine_l1.mp3');
  audio.loop = true;
  //audio.play();

  let infospot = new PANOLENS.Infospot(300, 'assets/notes4.png', true);

  infospot.position.set(0, -1000, -1000);
  infospot.addHoverElement(document.getElementById('cheat_note'), 200);
  panorama = new PANOLENS.ImagePanorama(imageSettings.image || 'assets/' + imageName, 50);
  panorama.add(infospot);

  const imagePosition = imageSettings.position;
  panorama.addEventListener('enter-fade-start', () => {
      viewer.tweenControlCenter(new THREE.Vector3(imagePosition[0],imagePosition[1],imagePosition[2]), 0)
  })

  if (viewer == null) {
    viewer = new PANOLENS.Viewer({ container: container });
    viewer.add(panorama);
  }
  else {
    viewer.dispose();
    viewer.add(panorama);
  }

  var ef = 1, ctrl = 0;
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
      ef = 2;
      ctrl = 1;
  }
  viewer.enableControl(ctrl);
  viewer.enableEffect(ef);
  viewer.setCameraFov(90);
}

window.displayGeneratedImage = async function displayGeneratedImage(imageSettings) {
    //const imageSettings = imagesSettings[imageName];
  
    var audio = new Audio(imageSettings.audio || 'assets/imagine_l1.mp3');
    audio.loop = true;
    audio.play();
  
    let infospot = new PANOLENS.Infospot(300, 'assets/notes4.png', true);
  
    infospot.position.set(0, -1000, -1000);
    infospot.addHoverElement(document.getElementById('cheat_note'), 200);
    panorama = new PANOLENS.ImagePanorama(imageSettings.image || 'assets/' + imageName, 50);
    panorama.add(infospot);
  
    const imagePosition = imageSettings.position;
    panorama.addEventListener('enter-fade-start', () => {
        viewer.tweenControlCenter(new THREE.Vector3(imagePosition[0],imagePosition[1],imagePosition[2]), 0)
    })
    if (viewer == null) {
        viewer = new PANOLENS.Viewer({ container: container });
        viewer.add(panorama);
      }
      else {
        viewer.setPanorama(panorama);
      }
  
    var ef = 1, ctrl = 0;
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        ef = 2;
        ctrl = 1;
    }
    viewer.enableControl(ctrl);
    viewer.enableEffect(ef);
    viewer.setCameraFov(90);
  }

window.loadVenue = async function loadVenue() {
    noSleep.enable();
    document.getElementById("btn").style.display = "none";

    container = document.querySelector('#container');
    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    let imageName = urlParams.get('image');
    let imageNote = urlParams.get('cheat_note');
    let imagine_file_url = null;
    
    //build AI generated venues
    if (imageName == "imagine") {
        var rnd = Math.floor(Math.random() * 5) + 1;
        imageName = "imagine" + rnd;

        //trying to generate an image from the SkyBox
      
 
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

       const response = await fetch(`https://backend.blockadelabs.com/api/v1/skybox?prompt=${imageNote}`, requestOptions);
       //const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',);
       const data = await response.json();
       console.log(data);

       Pusher.logToConsole = true;
       pusher = new Pusher('a6a7b7662238ce4494d5', {
        appId: "1555452",
        key: "a6a7b7662238ce4494d5",
        secret: "5b69dc3f0bb7800ed8d0",
        cluster: "mt1"
       });
       
      // Subscribe to the channel you want to receive events from
       channel = pusher.subscribe(data.pusher_channel);
       channel.bind(data.pusher_event, loadVenueEvent);      
     }else{
      //const imageSettings = imagesSettings[imageName];
      displayImage(imagesSettings[imageName]);
     }
}
window.loadWhisperVenue = async function loadWhisperVenue(imagePrompt) {
    noSleep.enable();
    document.getElementById("btn").style.display = "none";

    container = document.querySelector('#container');
          
    //trying to generate an image from the SkyBox
    
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch(`https://backend.blockadelabs.com/api/v1/skybox?prompt=${imagePrompt}`, requestOptions);
    const data = await response.json();
    console.log(data);

    Pusher.logToConsole = true;
    pusher = new Pusher('a6a7b7662238ce4494d5', {
    appId: "1555452",
    key: "a6a7b7662238ce4494d5",
    secret: "5b69dc3f0bb7800ed8d0",
    cluster: "mt1"
    });
    
    // Subscribe to the channel you want to receive events from
    channel = pusher.subscribe(data.pusher_channel);
    channel.bind(data.pusher_event, loadVenueEvent);      
}

