import { NoSleep } from '../libraries/nosleep/index.js';

window.noSleep = new NoSleep();
//DeviceOrientationEvent.requestPermission();    
window.panorama = null;
window.panorama1 = null;
window.panorama2 = null;
window.panorama3 = null;
window.viewer = null;
window.container = null; 
window.infospot = null;
window.pusher = null;
window.channel = null;
window.exitBtn = null; 
window.questionsBtn = null; 
window.levelBtn = null;
window.recognition = null;
window.speechBuffer = null;
window.currentLevel = 1;
 
window.myHeaders = new Headers();

//settings

window.imagesSettings = {
    "v1_l1": {
        "image": "assets/v1_l1.jpg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            250,
            -20,
            40
        ]
    },
    "v1_l2": {
        "image": "assets/v1_l2.jpg",
        "audio": "assets/office-room-tone-32341.mp3",
        "position": [
            200,
            0,
            100
        ]
    },
    "v2_l1": {
        "image": "assets/v2_l1.jpg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "v3_l1": {
        "image": "assets/v3_l1.jpg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "v4_l1": {
        "image": "assets/v4_l1.jpg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine0": {
        "image": "assets/imagine0.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine1": {
        "image": "assets/imagine1.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            200,
            0,
            100
        ]
    },
    "imagine2": {
        "image": "assets/imagine2.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine3": {
        "image": "assets/imagine3.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine4": {
        "image": "assets/imagine4.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine5": {
        "image": "assets/imagine5.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "imagine6": {
        "image": "assets/imagine6.jpeg",
        "audio": "assets/imagine_l1.mp3",
        "position": [
            0,
            0,
            0
        ]
    }
}