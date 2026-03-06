import React from 'react';

export default function Terms(props) {
    return (
        <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>Terms and Conditions</h1>
            <div className="mt-4">
                <h3>1. Acceptance of Terms</h3>
                <p>By using TextUtils, you agree to follow these terms and conditions. If you do not agree, please do not use the application.</p>

                <h3>2. Usage License</h3>
                <p>TextUtils is provided for personal and educational use. You may use it to analyze and transform your text for any lawful purpose.</p>

                <h3>3. Privacy</h3>
                <p>We do not store your text data on our servers. All processing is done locally in your browser.</p>

                <h3>4. Limitation of Liability</h3>
                <p>TextUtils is provided "as is" without any warranties. We are not responsible for any data loss or issues arising from its use.</p>
            </div>
        </div>
    );
}
