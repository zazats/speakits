import { NoSleep } from '../libraries/nosleep/index.js';
import imagesSettings from '../imageSettings.js';

const noSleep = new NoSleep();
//DeviceOrientationEvent.requestPermission();    
let panorama, viewer, container;


window.loadVenue = function loadVenue() {
    noSleep.enable();
    document.getElementById("btn").style.display = "none";

    container = document.querySelector('#container');
    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    let imageName = urlParams.get('image');
    if (imageName == "imagine") {
        var rnd = Math.floor(Math.random() * 5) + 1;
        imageName = "imagine" + rnd + ".jpeg";
    }

    const imageSettings = imagesSettings[imageName];

    var audio = new Audio(imageSettings.audio || 'assets/imagine_l1.mp3');
    audio.loop = true;
    audio.play();

    let infospot = new PANOLENS.Infospot(300, 'assets/notes4.png', true);

    infospot.position.set(0, -1000, -1000);
    //infospot.addHoverText( 'This is your cheat sheet. /n You will be able to upload your own notes via setup. /n Switch between notes by pointing at arrows.' );    
    infospot.addHoverElement(document.getElementById('cheat_note'), 200);

    //infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    //infospot2.position.set( -200, -1000, -1000 );
    //infospot2.addHoverElement( document.getElementById( 'desc-container' ), 200 );

    panorama = new PANOLENS.ImagePanorama(imageSettings.image || 'assets/' + imageName, 50);
    panorama.add(infospot);

    const imagePosition = imageSettings.position;
    panorama.addEventListener('enter-fade-start', () => {
        viewer.tweenControlCenter(new THREE.Vector3(imagePosition[0],imagePosition[1],imagePosition[2]), 0)
    })
    //panorama.add( infospot2 );

    //panorama = new PANOLENS.ImagePanorama( 'assets/v1_l1.jpg' );
    //panorama = new PANOLENS.VideoPanorama( 'assets/360video3.mp4' )
    viewer = new PANOLENS.Viewer({ container: container });
    //viewer = new PANOLENS.Viewer();
    viewer.add(panorama);

    var ef = 0, ctrl = 0;
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        ef = 2;
        ctrl = 1;
    }
    viewer.enableControl(ctrl);
    viewer.enableEffect(ef);
    //viewer.setCameraControl();
    viewer.setCameraFov(90);
    //viewer.camera.setFoclaLength(34);	    
    //viewer.camera.position.y = -200;
    //viewer.camera.position.set(imageSettings.position[0], imageSettings.position[1], imageSettings.position[2]);
    

    //container.requestFullscreen(); //doesn't work for Safari. Also, dosn't look great in the VR Set
}