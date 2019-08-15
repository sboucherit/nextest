import React from 'react';

const MesssageBox = (props) => {
    
  const handleSubmit = () => {

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