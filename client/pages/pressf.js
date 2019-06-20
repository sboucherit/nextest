import React from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';


function PressfPageContent() {
    <div>
        <h1>PressF Welcome page</h1>
    </div>
}

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]


export default function Pressf() {
    return (
      <Layout>
        <h1>This is the PressF page</h1>

        <ChatBox/>

        <MesssageBox/>

      </Layout> 
    ) 
} 


/* 

Style :

        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>




============================================
Vieux :


export default function Pressf() {
return (

<Layout content={pressfPageContent} />
)    
} */