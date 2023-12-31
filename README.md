# AcousticBiosensingGPT
GPT fine tuned for acoustic biosensing information

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [License](#license)

## Description
Project based off of [video](https://www.youtube.com/watch?v=Sb7U32kXMB0) and [blog](https://nader.substack.com/p/supercharge-your-gpt-model-custom) by Nader Dabit. 
The project is the an example of an easy way to fine tune an LLM. This new personalized model can be continued to be fine tuned with more and more data related to acoustic biosensing.
The reason for the project was to make it easier to search up information. Rather than going into the papers which I have read I put the data I took notes on into jsonl format then fine tuned the GPT model with these.

## Getting Started 

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- Python
- OpenAI API Key (obtainable [here](https://openai.com))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/422dsolomon/AcousticBiosensingGPT.git

2. Navigate to the project directory:

   ```bash
   cd AcousticBiosensingGPT

3. Set OpenAI API Key:
   
   ```bash
   export OPENAI_KEY="your-api-key"
   
4. Install required npm packages, OpenAI CLI and datalib:

   ```bash
   npm install openai
   pip install --upgrade openai openai"[datalib]"

5. Add/Adjust Training Data in the [jsonl file](https://github.com/422dsolomon/AcousticBiosensingGPT/blob/main/data.jsonl)
   Use formating of
   
   ```bash
   {"prompt": "<prompt>", "completion": "<answer>"}
   
6. If Changed Training Data

    ```bash
   node uploadFile.js

7. Initiate Fine Tuning Process
   
   ```bash
   node createFineTune.js

8. Finish the Model

   ```bash
   node createCompletion.js
   
## Technologies Used

- Javascript
- OpenAI ChatGPT LLM

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/422dsolomon/AcousticBiosensingGPT/blob/main/LICENSE) file for details.
