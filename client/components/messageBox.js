import React from 'react';

const MesssageBox = (props) => {
    
  const handleSubmit = () => {
    // Do something
    console.log('child message : ' + props.newMessage);
    //onNewMessage(props.newMessage);
    //props.setNewMessage(props.newMessage);
    props.onNewMessage(props.newMessage);
    event.preventDefault();
  };



    return (
    <div id="msgBoxStyle">
      <form onSubmit={handleSubmit}>
        <label>
          Message :
          <textarea value={props.newMessage} onChange={e => props.setNewMessage(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <style jsx>{`
        #msgBoxStyle{
        background-color: #f1f1f1;
        padding: 1rem;
        width: 100%;
        height: 10vh;
        }
      `}</style>
    </div>
  );
}

export default MesssageBox;


/* 
AVANT hisztendahl :


import React, { useState } from 'react';


const MesssageBox = (props) => {


    //const [message, setMessage] = useState('');
    const handleChange = event => event.target.value;

    const handleSubmit = () => {

        onNewMessage(props.newMessage);
        event.preventDefault();
    }

    //render() remove
        return (
            <div id="msgBoxStyle">
                <form onSubmit={handleSubmit}>
                    <label>
                        Message :
                        <textarea value={newMessage} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <style jsx>{`
                    #msgBoxStyle{
                    background-color: #f1f1f1;
                    padding: 1rem;
                    width: 100%;
                    height: 10vh;
                    }
                `}</style>
            </div>
        );

}

export default MesssageBox;










AVANT HOOKS :

class MesssageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        alert('A message was sent: ' + this.state.message);
        console.log('handleSubmit child : ' + this.state.message);
        this.props.onNewMessage(this.state.message);
        event.preventDefault();
    }

    render() {
        return (
            <div id="msgBoxStyle">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Message :
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <style jsx>{`
                    #msgBoxStyle{
                    background-color: #f1f1f1;
                    padding: 1rem;
                    width: 100%;
                    height: 10vh;
                    }
                `}</style>
            </div>
        );
    }

}

export default MesssageBox;

   */