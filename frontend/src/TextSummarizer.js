import React, { useState, useRef } from 'react';
import axios from 'axios';
import './styles.css';

function TextSummarizer() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [highlightedWord, setHighlightedWord] = useState("");
    const [isPaused, setIsPaused] = useState(false);
    const speechRef = useRef(null);

    // Handle summarizing text
    const handleSummarize = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://127.0.0.1:5001/summarize", { text });
            setSummary(response.data.summary);
        } catch (error) {
            console.error("Error summarizing text:", error.response || error.message);
            setSummary("Error summarizing text.");
        } finally {
            setLoading(false);
        }
    };

    // Handle speaking the summary
    const handleSpeak = () => {
        if (summary) {
            const utterance = new SpeechSynthesisUtterance(summary);

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => {
                setIsSpeaking(false);
                setHighlightedWord("");
            };

            utterance.onboundary = (event) => {
                if (event.name) {
                    setHighlightedWord(event.name);
                }
            };

            speechRef.current = utterance;

            window.speechSynthesis.speak(utterance);
        }
    };

    // Handle pausing speech
    const handlePause = () => {
        if (speechRef.current) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Handle resuming speech
    const handleResume = () => {
        if (speechRef.current) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    };

    return (
        <div className="container">
            <h3>Enter Text for Summarization</h3>
            <textarea
                placeholder="Enter text to summarize"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="6"
            ></textarea>
            <button onClick={handleSummarize} disabled={loading || !text}>
                {loading ? "Summarizing..." : "Summarize"}
            </button>

            {summary && (
                <div className="output-box">
                    <h4>Summary:</h4>
                    {/* Split summary into words and highlight the spoken word */}
                    <p>
                        {summary.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={word === highlightedWord ? "highlight" : ""}
                            >
                                {word}{" "}
                            </span>
                        ))}
                    </p>

                    {/* Speak button */}
                    <button onClick={handleSpeak} disabled={isSpeaking || isPaused}>
                        {isSpeaking ? "Speaking..." : "Speak"}
                    </button>

                    {/* Pause and Resume buttons */}
                    {isSpeaking && !isPaused && (
                        <button onClick={handlePause}>Pause</button>
                    )}
                    {isPaused && (
                        <button onClick={handleResume}>Resume</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default TextSummarizer;
