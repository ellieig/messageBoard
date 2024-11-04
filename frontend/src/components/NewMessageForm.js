// handles how you see the form when you interact with it
import React, { useState } from 'react';
const NewMessageForm = () => {
    const [formData, setFormData] = useState({
        to: '',
        content: '',
        from: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        try {
            const response = await fetch('http://localhost:5000/create-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormData({ to: '', content: '', from: '' });
            } else {
                const err = await response.json();
                console.log(err);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>To: </label>
                <input type="text" name="to" value={formData.to} onChange={handleChange} required />
            </div>
            <div>
                <label>Content: </label>
                <input type="text" name="content" value={formData.content} onChange={handleChange} required />
            </div>
            <div>
                <label>From: </label>
                <input type="text" name="from" value={formData.from} onChange={handleChange} required />
            </div>
            <button type="submit">Create Message</button>
        </form>
    );
};
export default NewMessageForm;
