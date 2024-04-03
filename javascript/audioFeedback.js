// speechAnalysis.js

// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to start recording when the "Start Recording" button is clicked
function startRecording() {
    // Create a MediaStreamSourceNode to capture audio from the microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const audioInput = audioContext.createMediaStreamSource(stream);

            // Create a ScriptProcessorNode to analyze audio data
            const scriptNode = audioContext.createScriptProcessor(4096, 1, 1);
            scriptNode.onaudioprocess = event => {
                const inputBuffer = event.inputBuffer;
                const inputData = inputBuffer.getChannelData(0);

                // Calculate the average amplitude (volume) of the audio data
                const amplitude = inputData.reduce((sum, sample) => sum + Math.abs(sample), 0) / inputData.length;

                // Provide feedback based on the amplitude
                if (amplitude < 0.1) {
                    console.log('Voice is too quiet');
                } else if (amplitude > 0.9) {
                    console.log('Voice is too loud');
                } else {
                    console.log('Voice volume is moderate');
                }
            };

            // Connect the audio input to the scriptNode and output to the destination
            audioInput.connect(scriptNode);
            scriptNode.connect(audioContext.destination);
        })
        .catch(error => {
            console.error('Error accessing microphone:', error);
        });
}