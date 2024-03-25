// InboxPage.jsx

import React, { useState, useEffect} from 'react';
import { InboxPageContainer,TabContainer,ContentContainer,Tab } from './InboxPageStyled';
import Header from "../../Components/Header/Header.jsx"
import NotificationTab from './NotificationTab.jsx'
import axios from "axios"
import {getAuthToken} from "../../axiosHelper.js"
import ChatTab from './ChatTab.jsx'
const InboxPage = ({customerData,dispatch}) => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    axios.get(customerData.userId.value + `/messages`,{
                headers: {
                Authorization: `Bearer ${getAuthToken()}`
                }
            })
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
              console.log(error)
            });
      }, []);


    return (

      <InboxPageContainer>
      <Header customerData={customerData} dispatch={dispatch}/>
        <TabContainer>
          <Tab active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')}>
            Notifications
          </Tab>
          <Tab active={activeTab === 'chats'} onClick={() => setActiveTab('chats')}>
            Chats
          </Tab>
        </TabContainer>
        <ContentContainer>
          {activeTab === 'notifications' ? <NotificationTab messages={messages} /> : <ChatTab customerData={customerData} messages={messages} />}
        </ContentContainer>
      </InboxPageContainer>
    );
  };

export default InboxPage;