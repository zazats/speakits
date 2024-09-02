

// Define the phrase and prompt
//const phrase = "The cat sat on the mat.";
//const prompt = `Generate questions related to the following phrase: '${phrase}'`;

async function fetchModels() {
    try {

        // Make a request to the OpenAI API to fetch available models
        const response = await fetch('https://api.openai.com/v1/engines', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHATGPT_API_KEY}`
            }
        });

        // Check if the request was successful
        if (response.ok) {
            // Parse response
            const data = await response.json();

            // Extract and print available models
            const models = data.data.filter(model => !model.deprecated).map(model => model.id);
            console.log("Available Models:", models);
        } else {
            // Handle error if request was not successful
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to generate questions

window.generateQuestions = async function generateQuestions(phrase, prompt) {
    try {
       
        // Call the function to fetch available models
   //     fetchModels();
        // Make a request to the OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHATGPT1}${CHATGPT2}`
            },
            body: JSON.stringify({
                    "model": "gpt-3.5-turbo-0125",
                    "messages": [
                      {
                        "role": "system",
                        "content": "Your name is John. You should ask question in the context of the text from user. Say Hi before asking question. Always ask question base on the publications in the relevant area"
                      },
                      {
                        "role": "user",
                        "content": prompt
                      }
                    ],
                    "temperature": 1,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                  
            })
        });

        // Parse response
        const data = await response.json();
        
        // Extract generated questions from the response
       // const generatedQuestions = data.choices.map(choice => choice.text.trim());
        const generatedQuestions = data.choices[0].message.content;
        
        return data.choices[0].message.content;
        // Print generated questions
       //console.log("Generated Questions:");
       // generatedQuestions.forEach((question, index) => {
       //     console.log(`${index + 1}. ${question}`);
       // });
    } catch (error) {
        console.error('Error:', error);
    }
}

window.analyzeAnswerNoCallforAPI = async function analyzeAnswerNoCallforAPI(protocol,question, prompt) {
  try {
         
      // Extract generated questions from the response
     // const generatedQuestions = data.choices.map(choice => choice.text.trim());
     let generatedQuestions;
     if (window.sessionName =='S1T2') {
       generatedQuestions = '{\"Curiosity\": {\"score\": 8, \"description\": \"You showed a high level of curiosity by questioning the appearance versus the taste of the raisin.\"}, \"Reflection\": {\"score\": 7, \"description\": \"You reflected well on the contrast between the raisins appearance and its taste.\"}, \"Engagement\": {\"score\": 7, \"description\": \"You were engaged in the activity, as shown by your thoughtful observations.\"}, \"Emotional Response\": {\"score\": 6, \"description\": \"Your emotional response was positive, as you found the taste of the raisin enjoyable despite its appearance.\"}, \"Stress\": {\"score\": 2, \"description\": \"You seemed to be relaxed and not stressed during the activity.\"}, \"Focus\": {\"score\": 8, \"description\": \"You maintained a good focus on the task, paying attention to the details of the raisins appearance and taste.\"}}';   
     } else {
       generatedQuestions = '{\"Curiosity\": {\"score\": 2, \"description\": \"You showed a low level of curiosity by questioning the appearance versus the taste of the raisin.\"}, \"Reflection\": {\"score\": 2, \"description\": \"You didnt reflected well on the contrast between the raisins appearance and its taste.\"}, \"Engagement\": {\"score\": 2, \"description\": \"You werent engaged in the activity, as shown by your thoughtful observations.\"}, \"Emotional Response\": {\"score\": 2, \"description\": \"Your emotional response was negetive, as you found the taste of the raisin enjoyable despite its appearance.\"}, \"Stress\": {\"score\": 4, \"description\": \"You seemed to be very stressed during the activity.\"}, \"Focus\": {\"score\": 3, \"description\": \"You maintained a bad focus on the task, didnt paying attention to the details of the raisins appearance and taste.\"}}'; 
     }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "response": generatedQuestions,
        "currentUserId":window.currentUserId,
        "currentCourse":'Course1',
        "currentSession":window.sessionName
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      try {
        const response = await fetch("https://www.avxlabs.com/_functions/myFunction", requestOptions);
       
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} statusText: ${response.statusText}`);
        }
      
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error('Fetch error:', error.message);
        console.error('Request options:', requestOptions);
      }
 
    return data.choices[0].message.content;
   
  } catch (error) {
      console.error('Error:', error);
  }
    
  
}
window.analyzeAnswer = async function analyzeAnswer(protocol,question, prompt) {
  try {
   
      // Call the function to fetch available models
      // Make a request to the OpenAI API
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${CHATGPT1}${CHATGPT2}`
          },
          body: JSON.stringify({
                  "model": "gpt-4",
                  "messages": [
                    {
                      "role": "system",
                      "content":"The following is a mindfulness session protocol:" + protocol 
                    },
                    {
                      "role": "system",
                      "content": "the following question was asked by trainer:" + question
                    },
                    {
                      "role": "system",
                      "content": 'Please use the following JSON format :{"Curiosity":{"score":"Integer","description":"String"},"Reflection":{"score":"Integer","description":"String"},"Engagement":{"score":"Integer","description":"String"},"Emotional Response":{"score":"Integer","description":"String"},"Stress":{"score":"Integer","description":"String"},"Focus":{"score":"Integer","description":"String"}}'

                     },
                    {
                          "role": "user",
                          "content": "based on the following participant response please provide a response directly to participant in a JSON format for the following keys only: Curiosity , Reflection, Engagement, Emotional Response,Stress,Focus: " + prompt
                    }
                  ],
                  "temperature": 0.0,
                  "max_tokens": 256,
                  "top_p": 1,
                  "frequency_penalty": 0,
                  "presence_penalty": 0
                
          })
      });

      // Parse response
      const data = await response.json();
          
      // Extract generated questions from the response
     // const generatedQuestions = data.choices.map(choice => choice.text.trim());
      const generatedQuestions = data.choices[0].message.content;
       
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "response": generatedQuestions,
        "currentUserId":window.currentUserId,
        "currentCourse":'Course1',
        "currentSession":window.sessionName
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      try {
        const response = await fetch("https://www.avxlabs.com/_functions/myFunction", requestOptions);
       
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} statusText: ${response.statusText}`);
        }
      
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error('Fetch error:', error.message);
        console.error('Request options:', requestOptions);
      }
 
return data.choices[0].message.content;
   
  } catch (error) {
      console.error('Error:', error);
  }
    
  
}

 
