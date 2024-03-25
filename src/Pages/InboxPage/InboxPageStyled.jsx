// InboxPageStyled.jsx

import styled from 'styled-components';

export const NotificationTab = styled.div`
  padding: 20px;
`;

export const ChatTab = styled.div`
  padding: 20px;
`;

export const InboxPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  margin: 0 auto;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#007bff' : '#ddd')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 5px;
`;

export const ContentContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Conversation = styled.div`
   background-color: #fff;
     border-radius: 8px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
     padding: 15px;
     transition: box-shadow 0.3s ease; /* Add transition for box shadow */

     &:hover {
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Darken box shadow on hover */
     }

     & + & {
       margin-top: 15px; /* Add margin between conversations */
     }
`;

export const MessagesContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

export const Message = styled.div`
  margin-bottom: 10px;
`;