# AI-Enhanced Reading Assistant for Dyslexia and Low Vision

## Project Overview
The AI-Enhanced Reading Assistant is a high-fidelity prototype designed to improve reading experiences for individuals with dyslexia, low vision, or learning disabilities. It features three key functionalities:
- **Dynamic Text Customization**: Adjusts text fonts, colors, and spacing for better readability.
- **AI Text Summarizer**: Generates concise summaries to assist with lengthy readings.
- **Integrated Screen Reader**: Converts text into speech with natural-sounding voices.

This prototype aims to enhance accessibility and improve the overall reading experience for people with visual or cognitive challenges.

## Features
1. **Dynamic Text Customization**:
    - Users can adjust the font, font size, text color, and line spacing for optimal readability.
    - Helps individuals with low vision or dyslexia better comprehend text.

2. **AI Text Summarizer**:
    - Utilizes a simple AI-powered model to summarize lengthy text into concise summaries.
    - Great for individuals who need to process information quickly.

3. **Integrated Screen Reader**:
    - Converts the summarized text or input text into speech using the Web Speech API.

## Technologies
- **Backend**: Python (Flask for API)
- **Frontend**: React.js
- **AI Model for Summarization**: Used OpenAI GPT 3.5 turbo
- **Text-to-Speech**: Web Speech API (browser-native speech synthesis)
- **Database**: SQLite (though it's currently not used in this prototype)

## NOTE:
THe server is running on port 5001. 
If you try to access the server, please use the correct port. 
I was facing issues using port 5000.


# Setup
1. Obtain a Open AI Token

2. Clone the Repository or Save the Code

3. Install Dependencies
Ensure you have the following libraries installed:
everything listed in requirements.txt

For react:
react-router-dom (npm install command)

4. Add your token:
    - Option 1: add it to your environment variables:
        - open Terminal in mac
        - Run: nano ~/.zshrc
        - add the following in the file: "export API_TOKEN=<token>"
        - Run: source ~/.zshrc
        - make sure you restart your ide for changes to take affect
    - Option 2: paste it in the code directly (not recommended)
        - Feel free to use this option, if you are running locally
        - Do not post your token online
        - USE THIS OPTION IF OPTION 1 DID NOT WORK FOR TESTING PURPOSES

5. Run the code:
    - Run Flask backend:  
        - python backend/app.py
    - Server is configured to run on port 5001.
    - Frontend:  
        - npm i (if dependencies are missing)  
        - npm start