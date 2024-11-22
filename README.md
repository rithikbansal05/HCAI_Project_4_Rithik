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
        - npm install (if dependencies are missing)  
        - npm start


## More Detailed about the code and its functionality

### Code Documentation
This section provides a detailed explanation of the project's code structure and its functionality.
#### Project Structure
.  
- backend/
    - app.py       # Flask backend server
    - requirements.txt   # Backend dependencies  
- frontend/  
    - public/            # Public files for the React app  
    - src/  
        - components/  
            - LoginPage.js        # Login component  
            - Navbar.js           # Navigation bar component  
            - TextCustomizer.js   # Component for dynamic text customization  
            - TextSummarizer.js   # Component for text summarization and TTS  
        - App.js                  # Main application entry point  
        - index.js                # React entry point  
    - package.json       # Frontend dependencies  
- README.md              # Project documentation  

#### Backend
- app.py:
    - Purpose: The Flask application provides API endpoints for the text summarization
    - key functionality: POST /summarize: Accepts a text payload and returns a summarized version of the text using an AI model

#### Frontend
- LoginPage.js:
    - Displays a login form with username and password fields.
    - Navigates to the main app when the fields are populated and the "Login" button is clicked.
- Navbar.js:
    - A responsive navigation bar with "Home," "Profile," and "Logout" buttons.
    - Clicking "Logout" routes back to the login page (/).
- TextCustomizer.js
    - Provides dynamic text customization features.
    - Allows users to adjust:
        - Font size
        - Font family
        - Text color
        - Line spacing
- TextSummarizer.js:
    - Accepts user input text and communicates with the backend to fetch the summary.
    - Features text-to-speech (TTS) functionality to read the summary aloud.
    - Highlights the word being spoken in real time.
    - Includes "Pause" and "Resume" buttons to control speech playback.
- App.js:
    - The main entry point for the React application.
    - Routes between the login page and the main application features using react-router-dom.

#### Technologies Used:
- React
- React Router
- CSS
- More listed in requirements.txt


### Key Functional Flows
#### Login FLow:
1. User enters their username and password on the LoginPage.
2. When the fields are populated and "Login" is clicked, the app navigates to /home.

#### Text Customization Flow
1. User enters or pastes text in the TextCustomizer input box.
2. They can adjust the font size, color, spacing, and font family for readability.

#### Text Summarization Flow
1. User inputs text in TextSummarizer and clicks "Summarize."
2. The text is sent to the backend API, which returns a summary.
3. The summary is displayed on the frontend.
4. The "Speak" button reads the summary aloud, with real-time word highlighting.

#### Screen Reader Controls
1. Speak: Starts reading the summary aloud.
2. Pause: Pauses the playback.
3. Resume: Resumes the playback from where it paused.


