import { NoSleep } from '../libraries/nosleep/index.js';
window.noSleep = new NoSleep();

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
window.speechBuffer = null;

window.currentLevel = 0;
window.currentUserId=null;
window.sessionName=null;
window.audioTrack=null;
window.isDebug=false;
window.platform = null;
 

//myHeaders.append("x-api-key", IMAGINE_GEN_API_KEY);
//settings

window.imagesSettings = {
    "Intro": {
        "image": "assets/start2.jpg",
        "image2": "assets/Interior_1.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-01-Introduction.mp3",
        "audio_loop" : false,
        "protocol": "",
        "question": "",
        "questionText":"",
        "position": [
            0,
            0,
            0
        ]
    },
    "S1T2": {
        "image": "assets/Lesson1.jpg",
        "image2": "assets/Interior_2.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_2.jpg",
        "audio": "assets/zendel/MBCTDepression-02-Raisin-Exercise.mp3",
        "audio_loop" : false,
        "protocol": "I’m going to go around the class and give you each a raisin.Now, what I would like you to do is to see it as an object—just imagining that you have never seen anything like it before, as if you had dropped in from another planet this moment and you had never seen anything like it before in your life.Taking the object and holding it in the palm of your hand, or between your finger and thumb. Paying attention to seeing it. Looking at it carefully, as if you had never seen such a thing before.Turning it over between your fingers. Exploring its texture between your fingers. Examining the highlights where the light shines . . . the darker hollows and folds. Letting your eyes explore every part of it, as if you had never seen such a thing before. And if, while you are doing this, any thoughts come to mind about what a strange thing we are doing or what is the point of this or I don’t like this, then just noting them as thoughts and bringing your awareness back to the object. And now, taking the object and holding it beneath your nose, and with each in-breath, carefully seeing what you notice—does it have a smell? And now looking at it again. And now slowly taking the object to your mouth, maybe noticing how your hand and arm know exactly where to put it, perhaps noticing what happens in your mouth as it comes up. (And then gently placing the object in the mouth, noticing how it is received, without biting it, just exploring the sensations of having it in your mouth. Exploring the object with your tongue, noticing the sensations as you move it around the mouth. And when you are ready, very consciously taking a bite into it and noticing what happens—the tastes that it releases. Slowly chewing it, . . . noticing what’s happening in the mouth, . . . the change in consistency of the object. Then, when you feel ready to swallow, seeing if you can first detect the intention to swallow as it comes up, so that even this is experienced consciously, before you actually swallow it. Finally, seeing if you can follow the sensations of swallowing it, sensing it moving down to your stomach, any aftertaste, then noticing the absence of the raisin in the mouth—and what the tongue does when it is gone.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Do you want to say anything about your experiences while eating?",
        "position": [-405.2091723518225, -267.9359476853243, 872.9357677285986]
    },
    "S1T3": {
        "image": "assets/Lesson3.jpg",
        "image2": "assets/Interior_3.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_3.jpg",
        "audio": "assets/zendel/MBCTDepression-03-Body-Scan.mp3",
        "audio_loop" : false,
        "protocol" : "This body scan practice involves lying down in a comfortable position, bringing kind awareness to each part of your body, noticing sensations, and using your breath to gently explore and release any tension, finishing with a sense of calm and connectedness.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"What do you think about your experiences while learning your body?",
        "position": [880.2128436800831, -15.546201806308863, -472.2125214667851]
    },
    "S2T4": {
        "image": "assets/stone_beach.jpg",
        "image2": "assets/Interior_4.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_4.jpg",
        "audio": "assets/zendel/MBCTDepression-04-10-Min-Sitting-Meditation.mp3",
        "audio_loop" : false,
        "protocol": "Find a comfortable sitting position, align your spine, focus on the natural flow of your breath, and gently return attention to it whenever your mind wanders, anchoring yourself in the present moment.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"How do you feel now?",
        "position": [554.5046305933382, -389.256624948429, 734.1695271422695]
    },
    "S3T6": {
        "image": "assets/tranquil_meditation_environment_set3.jpg",
        "image2": "assets/Interior_5.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-06-Stretch-Breath-Meditation.mp3",
        "audio_loop" : false,
        "protocol": "This practice involves mindful stretches on a mat, focusing on breath and body sensations, honoring your limits, and being present without judgment, easing into stretches and tuning into the body's responses.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"How your body feels aftre streching?",
        "position": [926.96320629728, 46.67809559108406, -369.5421079701966]
    },
    "S3T5": {
        "image": "assets/tranquil_meditation_environment_set2.jpg",
        "image2": "assets/Interior_6.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-05-Mindful-Movement.mp3",
        "audio_loop" : false,
        "valid-protocol": "This guided meditation begins with simple standing stretches, followed by seated meditation, focusing on moment-by-moment awareness. As you move, explore your body’s sensations with curiosity, not judgment, honoring your physical limits. Start by standing with feet hip-width apart, knees unlocked, arms relaxed, and head up. Breathe deeply, feeling the sensations in your body as you stretch. Transition smoothly to a seated posture, ensuring comfort, with feet flat, back straight, and body relaxed. Focus on your breath in the lower abdomen, letting each inhale and exhale anchor you in the present. If discomfort arises, choose to adjust your posture mindfully or breathe into the sensation, exploring it without trying to change it. Finally, bring your attention back to your breath, feeling grounded and balanced, appreciating the moment-to-moment awareness you’ve cultivated.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Do you want to say anything about your experiences while eating?",
        "position": [383.32680521738416, -92.91951640051991, 917.838506423503]
    },
    "S3T8": {
        "image": "assets/tranquil_mountain1.jpg",
        "image2": "assets/Interior_7.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-08-3-Min-Breathing-Regular.mp3",
        "audio_loop" : false,
        "valid-protocol": "Begin by adjusting your posture to embody dignity and wakefulness, with an erect but relaxed back, shoulders dropped, chest open, and eyes closed if comfortable. First, become aware of your current experience: notice your thoughts, acknowledge any emotional discomfort, and scan for body sensations. Then, focus on the breath in the lower abdomen, feeling the gentle stretch on the in-breath and deflation on the out-breath, letting the breath anchor you in the present. Finally, expand awareness to the whole body, noticing posture, facial expression, and any tension, breathing into discomfort, and carrying this spacious awareness into the next moments of your day.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"You suppose to feel much bettre now, are you?",
        "position": [446.25254591891667, 212.077565857626, -868.264228976865]
    },
    "S4T11": {
        "image": "assets/tranquil_mountain2.jpg",
        "image2": "assets/Interior_8.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-11-Sitting-Meditation.mp3",
        "audio_loop" : false,
        "valid-protocol": "Begin by finding a comfortable, relaxed sitting position, with your back straight but not stiff, hands resting on your thighs or lap, and feet flat on the floor if sitting on a chair. Close your eyes or softly focus your gaze. Bring attention to your body, feeling the spine lift, shoulders drop, and the weight of your body pressing down. Focus on your breath, noticing the sensations as it moves in and out, especially in the lower abdomen. Allow your breath to flow naturally, using it as an anchor. When your mind wanders, gently bring your focus back to the breath, reconnecting with the present moment. Expand your awareness to include sensations throughout the body, noticing touch, pressure, and warmth. Explore any intense sensations, observing them without judgment. Shift your focus to sounds, allowing them to arise and pass naturally. Lastly, bring awareness to your thoughts as they appear, treating them like clouds or leaves drifting by. If emotions arise, observe them without reacting, and if needed, refocus on how they affect your body, noticing any tension or aversion.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Do you think this session was helpful?",
        "position":  [898.025969148808, -423.2497655550879, 111.40015570863162]
    },
    "S4T7": {
        "image": "assets/coastal_scene1.jpg",
        "image2": "assets/Interior_9.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-07-Mindful-Walking.mp3",
        "audio_loop" : false,
        "valid-protocol": "In this practice, we'll engage in mindful walking. Begin by finding a path of five to ten paces where you won't be disturbed. If comfortable, remove your shoes to feel the ground beneath you. Stand still at one end, feet parallel, knees slightly flexed, and arms relaxed. Focus on the sensations in the soles of your feet and the weight of your body. Gradually shift your weight to the right leg, lift your left foot, move it forward, and place it down. Feel the weight shift as the right foot lifts, moves, and lands. Walk slowly, focusing on each step—lifting, moving, placing, landing. When you reach the end of the path, pause, turn slowly, and continue. If your mind wanders, gently bring your attention back to your feet. If needed, pause, stand still, and reconnect with your breath and body. You can also expand your awareness to the whole body, noticing other sensations, the air on your skin, or sounds around you. Remember, you can return to this practice anytime during your day, bringing mindful awareness to your everyday walking.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Describe your feeling after walking? Would you do it again?",
        "position": [-839.7590896507681, 120.7678143568575, 527.4664030669448]
    },
    "S4T9": {
        "image": "assets/coastal_scene2.jpg",
        "image2": "assets/Interior_1.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_2.jpg",
        "audio": "assets/zendel/MBCTDepression-09-3-Min-Breathing-Responsive.mp3",
        "audio_loop" : false,
        "valid-protocol": "The responsive breathing space is a practice for moments when you feel troubled in body or mind. Begin by adopting an erect and dignified posture, signaling a shift from automatic pilot. Close your eyes or lower your gaze if comfortable. Step one: Notice what’s happening for you right now—thoughts, feelings, and body sensations. Identify these experiences, like 'sadness is arising' or there's tightness in my neck. Step two: Shift your attention to the breath, focusing on the sensations in your abdomen. Follow each breath in and out, using it to anchor yourself in the present moment. If your mind wanders, gently bring it back to the breath, possibly counting each breath to help focus. Step three: Expand your awareness to your entire body, noticing posture and any tension. Breathe into these sensations, softening with each exhale. Acknowledge what’s present by saying, It’s already here. Let me feel it. If the discomfort fades, return to simply sitting, with your whole body breathing. Carry this expanded awareness into the next moments of your day.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Good work, see you next time",
        "position": [-293.37861964909666, 0.036421985217152994, -954.9502522153858]
    },
    "S5T12": {
        "image": "assets/desert_landscape_at_twilight1.jpg",
        "image2": "assets/Interior_3.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_3.jpg",
        "audio": "assets/zendel/MBCTDepression-12-Working-With-Difficulty.mp3",
        "audio_loop" : false,
        "valid-protocol": "Begin by finding a comfortable, wakeful sitting posture with a straight but relaxed back, balanced head, and soft facial expression. Become aware of your body’s contact with the chair or cushion, and notice any tension. Let go of any tightness, allowing yourself to simply be present, moment by moment. Focus on your breath, noticing sensations at the nose, chest, or abdomen. Choose one area and let your attention rest there, observing the natural rhythm of your breath without trying to control it. When your mind wanders, gently bring your focus back to the breath. Periodically, check your posture and expand your attention to include the whole body, noticing the sensations throughout. Allow yourself to explore any part of the body with curiosity. If recurring thoughts or distractions arise, gently acknowledge them and bring your attention back to the present moment, focusing on the breath or body.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"Was it too hard for you?",
        "position": [691.6246003333239, 184.96265565727924, -696.7389957695611]
    },
    "S6T4": {
        "image": "assets/desert_landscape_at_twilight2.jpg",
        "image2": "assets/Interior_4.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_3.jpg",
        "audio": "assets/zendel/MBCTDepression-04-10-Min-Sitting-Meditation.mp3",
        "audio_loop" : false,
        "protocol":"This guided meditation involves gentle standing stretches and a sitting practice, focusing on moment-by-moment awareness, honoring your body's limits, and using the breath to stay present without striving or judgment.",
        "questionVoice": "assets/Course1-Session1-Q1.mp3",
        "questionText":"What are yoyr feeling aftre this exersice?",
        "position": [65.81450184007656, 328.3723509407675, 941.1912932476457]
    },
    "S6T10": {
        "image": "assets/floating_garden.jpg",
        "image2": "assets/Interior_6.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-10-20-Min-Sitting-Meditation.mp3",
        "audio_loop" : false,
        "valid-protocol":"Begin this 20-minute sitting meditation by finding a comfortable position, either on a chair with feet flat and legs uncrossed, or on the floor with support. Align your spine, neck, and head, and rest your hands on your thighs or lap. Close your eyes or let your gaze fall softly on the floor ahead. Start by noticing the sensations of sitting—the touch, contact, and pressure where your body meets the surface. Then, bring your focus to the sensations in your belly as you breathe. Notice the gentle expansion with each in-breath and release with each out-breath. Stay with these sensations for the full duration of each breath. If you prefer, focus on the breath sensations in your nostrils or chest. Let your body breathe naturally without control. If your mind wanders, briefly acknowledge where it went, then gently return your attention to the breath. This isn’t a failure; it’s an opportunity to practice patience and compassion. Continue to bring your awareness back to the breath whenever it drifts. In the final moments, remind yourself to simply be aware of your experience, moment by moment. Allow the meditation to end naturally, opening your eyes when ready.",
        "questionVoice": "",
        "questionText":"Was it too long for you",
        "position": [-216.80256589514204, -0.08175708117038141, 975.1910790901761]
    },
    "default": {
        "image": "assets/floating_garden.jpg",
        "image2": "assets/Interior_6.jpg",
        "image3": "assets/Norway_summer_landscape_quiet_1.jpg",
        "audio": "assets/zendel/MBCTDepression-10-20-Min-Sitting-Meditation.mp3",
        "audio_loop" : false,
        "valid-protocol":"Begin this 20-minute sitting meditation by finding a comfortable position, either on a chair with feet flat and legs uncrossed, or on the floor with support. Align your spine, neck, and head, and rest your hands on your thighs or lap. Close your eyes or let your gaze fall softly on the floor ahead. Start by noticing the sensations of sitting—the touch, contact, and pressure where your body meets the surface. Then, bring your focus to the sensations in your belly as you breathe. Notice the gentle expansion with each in-breath and release with each out-breath. Stay with these sensations for the full duration of each breath. If you prefer, focus on the breath sensations in your nostrils or chest. Let your body breathe naturally without control. If your mind wanders, briefly acknowledge where it went, then gently return your attention to the breath. This isn’t a failure; it’s an opportunity to practice patience and compassion. Continue to bring your awareness back to the breath whenever it drifts. In the final moments, remind yourself to simply be aware of your experience, moment by moment. Allow the meditation to end naturally, opening your eyes when ready.",
        "questionVoice": "",
        "questionText":"Was it too long for you",
        "position": [-216.80256589514204, -0.08175708117038141, 975.1910790901761]
    },
    "S2T1": {
        "image": "assets/height3.jpg",
        "image2": "assets/height2.jpg",
        "image3": "assets/height1.jpg",
        "audio": "assets/wind.mp3",
        "audio_loop" : true,
        "protocol":"Begin this 20-minute sitting meditation by finding a comfortable position, either on a chair with feet flat and legs uncrossed, or on the floor with support. Align your spine, neck, and head, and rest your hands on your thighs or lap. Close your eyes or let your gaze fall softly on the floor ahead. Start by noticing the sensations of sitting—the touch, contact, and pressure where your body meets the surface. Then, bring your focus to the sensations in your belly as you breathe. Notice the gentle expansion with each in-breath and release with each out-breath. Stay with these sensations for the full duration of each breath. If you prefer, focus on the breath sensations in your nostrils or chest. Let your body breathe naturally without control. If your mind wanders, briefly acknowledge where it went, then gently return your attention to the breath. This isn’t a failure; it’s an opportunity to practice patience and compassion. Continue to bring your awareness back to the breath whenever it drifts. In the final moments, remind yourself to simply be aware of your experience, moment by moment. Allow the meditation to end naturally, opening your eyes when ready.",
        "questionVoice": "assets/I believe it was bit scary.mp3",
        "questionText":"Was it too long for you",
        "position": [-542.0528342958434, -38.91181841929435,-838.251510716889]
    },
    "S2T2": {
        "image": "assets/newyork_cube/",
        "image2": "assets/height2.jpg",
        "image3": "assets/height1.jpg",
        "audio": "assets/wind.mp3",
        "audio_loop" : true,
        "protocol":"Begin this 20-minute sitting meditation by finding a comfortable position, either on a chair with feet flat and legs uncrossed, or on the floor with support. Align your spine, neck, and head, and rest your hands on your thighs or lap. Close your eyes or let your gaze fall softly on the floor ahead. Start by noticing the sensations of sitting—the touch, contact, and pressure where your body meets the surface. Then, bring your focus to the sensations in your belly as you breathe. Notice the gentle expansion with each in-breath and release with each out-breath. Stay with these sensations for the full duration of each breath. If you prefer, focus on the breath sensations in your nostrils or chest. Let your body breathe naturally without control. If your mind wanders, briefly acknowledge where it went, then gently return your attention to the breath. This isn’t a failure; it’s an opportunity to practice patience and compassion. Continue to bring your awareness back to the breath whenever it drifts. In the final moments, remind yourself to simply be aware of your experience, moment by moment. Allow the meditation to end naturally, opening your eyes when ready.",
        "questionVoice": "assets/I believe it was bit scary.mp3",
        "questionText":"Was it too long for you",
        "position": [-542.0528342958434, -38.91181841929435,-838.251510716889],
        "platform": {
            "image": "assets/carpet.jpg",
            "l": 50,
            "w": 30
        }
    }
}