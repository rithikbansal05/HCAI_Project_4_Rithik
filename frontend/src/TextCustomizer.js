import React, { useState } from 'react';
import './styles.css';

function TextCustomizer() {
    const [font, setFont] = useState("Arial");
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState("#000000");
    const [spacing, setSpacing] = useState(1.5);
    const [text, setText] = useState("");

    return (
        <div>
            <h3>Customize Text</h3>

            {/* Text input field */}
            <textarea
                placeholder="Enter your text here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="6"
                cols="50"
            ></textarea>

            <div>
                <label>Font: </label>
                <select onChange={(e) => setFont(e.target.value)} value={font}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                </select>
            </div>

            <div>
                <label>Font Size: </label>
                <input
                    type="number"
                    min="12"
                    max="72"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                />
            </div>

            <div>
                <label>Color: </label>
                <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
            </div>

            <div>
                <label>Line Spacing: </label>
                <input
                    type="number"
                    min="1"
                    max="3"
                    step="0.1"
                    value={spacing}
                    onChange={(e) => setSpacing(e.target.value)}
                />
            </div>

            {/* Display the customized text */}
            {text && (
                <div
                    style={{
                        fontFamily: font,
                        fontSize: `${fontSize}px`,
                        color: color,
                        lineHeight: spacing,
                        padding: '20px',
                        border: '1px solid #ddd',
                        marginTop: '10px',
                        wordWrap: 'break-word',
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
}

export default TextCustomizer;
