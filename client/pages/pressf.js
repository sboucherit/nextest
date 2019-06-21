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
constructor(props) {
  super(props)
  this.state = {
    newMessage: ''
    //message: this.state.message

};

}

handleNewMessage = (messageValue) => {
  this.setState({newMessage: messageValue});
  console.log("le parent message :" + this.state.newMessage);
}



  render() {
    return (
      <Layout>
       
        <ChatBox/>

        <MesssageBox onNewMessage={this.handleNewMessage}/>

      </Layout> 
    );
  }
}

  export default PressfPage;

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



/* APRES :

class PressfPage extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    message: ''
    //message: this.state.message

};

}

handleMessage = (messageValue) => {
  this.setState({message: messageValue});
}



  render() {
    return (
      <Layout>
       
        <ChatBox/>

        <MesssageBox/>

      </Layout> 
    );
  }
}

  export default Pressf;

*/