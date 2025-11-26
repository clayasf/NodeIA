import React from "react";
import Avatar from '../../assets/avatar';
import './ChatMessage.css';
// user (usuario ou chatgpt)
// message - onde vai estar o prompt
export const ChatMessage = ({ message, sender }) => {
    return (
        <div className={`chat-message ${message.user === 'gpt' } && 'Chatgpt'}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' ? 'chatgpt' : ''}`}
                >
                    {/* {message.user === 'gpt' ? '🤖' : '🧑'} */}
                    {message.user === 'gpt' && (<Avatar></Avatar>)}
                </div>
        </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    );
}