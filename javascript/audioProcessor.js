// audioProcessor.js

// Function to calculate pitch (fundamental frequency) of the audio data
function calculatePitch(audioData, sampleRate) {
    // Example implementation: Autocorrelation method
    const bufferLength = audioData.length;
    const correlationBuffer = new Float32Array(bufferLength);
  
    // Calculate autocorrelation
    for (let lag = 0; lag < bufferLength; lag++) {
        let sum = 0;
        for (let i = 0; i < bufferLength - lag; i++) {
            sum += audioData[i] * audioData[i + lag];
        }
        correlationBuffer[lag] = sum;
    }
  
    // Find the peak in the autocorrelation buffer
    let peakIndex = 0;
    let peakValue = correlationBuffer[0];
    for (let i = 1; i < bufferLength; i++) {
        if (correlationBuffer[i] > peakValue) {
            peakValue = correlationBuffer[i];
            peakIndex = i;
        }
    }
  
    // Convert peak index to frequency
    const fundamentalFrequency = sampleRate / peakIndex;
  
    return fundamentalFrequency;
}

// Function to calculate intensity of the audio data
function calculateIntensity(audioData) {
    // Example implementation: Root Mean Square (RMS) amplitude
    let sumOfSquares = 0;
    for (const sample of audioData) {
        sumOfSquares += sample * sample;
    }
    const meanSquare = sumOfSquares / audioData.length;
    const rmsAmplitude = Math.sqrt(meanSquare);
  
    return rmsAmplitude;
}

class MyAudioProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        const input = inputs[0];
        const output = outputs[0];

        // Iterate over each channel of the input audio data
        for (let channel = 0; channel < input.length; channel++) {
            const inputData = input[channel];
            const outputData = output[channel];

            // Calculate amplitude (volume) of the audio data
            const amplitude = inputData.reduce((sum, sample) => sum + Math.abs(sample), 0) / inputData.length;

            // Calculate pitch (fundamental frequency) of the audio data
            const pitch = calculatePitch(inputData, this.sampleRate);

            // Calculate intensity of the audio data
            const intensity = calculateIntensity(inputData);

            // Send the analysis results to the main thread
            this.port.postMessage({ amplitude, pitch, intensity });
        }

        // Return true to indicate that the processor is ready for the next block of audio data
        return true;
    }
}

// Register the AudioWorklet processor
registerProcessor('my-audio-processor', MyAudioProcessor);