import React from 'react';

export default function Contact(props) {
    return (
        <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 className="mb-4">Contact Us</h1>
            <div className="card shadow-sm" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
