import React, {useEffect, useState} from 'react';

const DisplayAllMessages = () => {
    const [messages, setMessages] = useState ([]);

    useEffect(() => {
        fetch('http://localhost:5000/messages')
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error('Error fetching messages:', error));
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.length > 0 ? (
                    messages.map((message, index) => (
                        <li key={index}>{message.content}</li>
                    ))
                ) : (
                    <p>No messages available.</p>
                )}
            </ul>
        </div>
    );
};
export default DisplayAllMessages;
