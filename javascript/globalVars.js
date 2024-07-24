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
window.relaxBtn = null; 
window.questionsBtn = null; 
window.levelBtn = null;
//window.recognition = null;
window.speechBuffer = null;

window.currentLevel = 0;
 

//myHeaders.append("x-api-key", IMAGINE_GEN_API_KEY);
//settings

window.imagesSettings = {
    "Session1": {
        "image": "assets/start2.jpg",
        "audio": "assets/zendel/MBCTDepression-01-Introduction.mp3",
        "question1": "assets/Course1-Session1-Q1.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "Session2": {
        "image": "assets/Lesson2.jpg",
        "audio": "assets/zendel/MBCTDepression-03-Body-Scan.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "Session3": {
        "image": "assets/Lesson3.jpg",
        "audio": "assets/zendel/MBCTDepression-06-Stretch-Breath-Meditation.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
    "Session4": {
        "image": "assets/Lesson4.jpg",
        "audio": "assets/zendel/MBCTDepression-02-Raisin-Exercise.mp3",
        "position": [
            0,
            0,
            0
        ]
    },
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