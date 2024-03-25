import React, { useState } from 'react';
import {ChatContainer,Conversation, MessagesContainer,Message} from "./InboxPageStyled.jsx";
import {getAuthToken} from "../../axiosHelper.js";
import axios from "axios";
const ChatTab = ({ customerData, messages }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const currentUser = String(customerData.userId.value);
  const [sentMessages, setSentMessages] = useState([]);
  const [messageContent, setMessageContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleMessageSend = async () => {
      try {
        const response = await axios.post('/messages', {
                content: messageContent,
                sender: currentUser.toString(),
                receiver: selectedConversation,
                type: 'Message',
              }, {
                headers: {
                  Authorization: `Bearer ${getAuthToken()}`,
                },
              });
        alert('Message sent successfully');
        const newMessage = response.data;
        setSentMessages([...sentMessages, newMessage]);
        setMessageContent(''); // Clear message content after sending
        setErrorMessage(''); // Clear any previous error message
        setMessageContent(''); // Clear message content after sending
      } catch (error) {
        console.error('Error sending message:', error);
        setErrorMessage('Message Failed to send'); // Clear any previous error message
      }
    };


  const handleConversationClick = (senderId) => {
    setSelectedConversation(senderId);
  };

  const filteredMessages = messages.filter(
    (message) =>
      (String(message.sender) === selectedConversation && String(message.receiver) === currentUser) ||
      (String(message.sender) === currentUser && String(message.receiver) === selectedConversation)
  );

  return (
    <ChatContainer>
      <h2>Chats</h2>
      {selectedConversation ? (
        <>
          <Conversation>
            <h3>{selectedConversation}</h3>
            <MessagesContainer>
              {filteredMessages.map((message) => (
                <Message key={message.id}>
                  <strong>{message.sender === currentUser ? 'You' : selectedConversation}</strong>: {message.content}
                </Message>
              ))}
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </MessagesContainer>
            <textarea
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleMessageSend}>Send</button>
          </Conversation>
          <button onClick={() => setSelectedConversation(null)}>Close Conversation</button>
        </>
      ) : (
        messages
          .filter((message) => String(message.sender) !== currentUser)
          .reduce((uniqueMessages, message) => {
            if (!uniqueMessages.some((uniqueMessage) => uniqueMessage.sender === message.sender)) {
              uniqueMessages.push(message);
            }
            return uniqueMessages;
          }, [])
          .map((message) => (
            <Conversation key={message.sender} onClick={() => handleConversationClick(message.sender)}>
              <div>{message.sender}</div>
              <div>{message.content}</div>
            </Conversation>
          ))
      )}
    </ChatContainer>
  );
};

export default ChatTab;