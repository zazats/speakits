

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

window.analyzeAnswer = async function analyzeAnswer(protocol,question, prompt) {

  /*const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
                    "role": "user",
                    "content": "based on the following participant response please provide the scoring, scaling and following metrics: Curiosity , Reflection, Engagement, Emotional Response: " + prompt
                  }
            ],
            "temperature": 1,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
          
    })
});

        // Step 2: Parse the response as JSON
        const openAiData = await response.json();

        // Extract generated questions from the response
        // const generatedQuestions = data.choices.map(choice => choice.text.trim());
        const generatedQuestions = openAiData.choices[0].message.content;
*/
        // Step 3: Send the parsed JSON to the second API
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer ${CHATGPT1}${CHATGPT2}");
//myHeaders.append("Cookie", "XSRF-TOKEN=1722243320|z7tHdnABE4FU");

//myHeaders.append('Access-Control-Allow-Origin', '*');
//myHeaders.append('Access-Control-Allow-Credentials', 'true');

//myHeaders.append('GET', 'POST', 'OPTIONS');

const raw = JSON.stringify({
  "temperature": 13,
  "max_tokens": 11256
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  //mode : 'no-cors',
  redirect: "follow"
 
};

try {
  const response = await fetch("https://www.avxlabs.com/_functions/myFunction?siteRevision=306", requestOptions);
 
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} statusText: ${response.statusText}`);
  }

  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error('Fetch error:', error.message);
  console.error('Request options:', requestOptions);
}

  return 'aaa;'
}

window.analyzeAnswer1 = async function analyzeAnswer1(protocol,question, prompt) {
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
                            "role": "user",
                            "content": "based on the following participant response please provide the scoring, scaling and following metrics: Curiosity , Reflection, Engagement, Emotional Response: " + prompt
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

              
  
/*const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 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");
myHeaders.append("Cookie", "XSRF-TOKEN=1721913398|uT_iI0ebt2iG");

const raw = JSON.stringify({
  "temperature": 1,
  "max_tokens": 256
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://www.avxlabs.com/_functions/myFunction?siteRevision=281", requestOptions)
  .then((response1) => response1.text())
  .then((result1) => console.log(result1))
  .catch((error1) => console.error(error1));
  */
        
  
  return data.choices[0].message.content;
     
    } catch (error) {
        console.error('Error:', error);
    }
      
    
}
