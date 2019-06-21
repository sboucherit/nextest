import React from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';


/* function PressfPageContent() {
    <div>
        <h1>PressF Welcome page</h1>
    </div>
} */

class PressfPage extends React.Component{
state = {
  message: ''
  //message: this.state.message
};


export default function Pressf() {
    return (
      <Layout>
       
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