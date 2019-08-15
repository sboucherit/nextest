const ChatBox = (props) => {

    //let chatValues = Object.values(props.chatHistory)
    //let chatValues = Object.keys(props.chatHistory)


    console.log("ICI CHAT VALUES : ", props.chatHistory, "DEBUT TYPE OG", typeof props.chatHistory, "BETWEEN TYPEOF", typeof props.chatHistory.addrObj);

    /*---------- COMM RETURN :    */

    return (
        <div id="chatBoxStyle">
            <h2>PressF feed :</h2>
                <ul>
                    {props.chatHistory.map(chatValue => <li>
                        <ChatValue {...chatValue} />
                    </li>)}
                </ul>

            <style jsx>{`
    #chatBoxStyle{
        background-color: #ddd;
  padding: 1rem;
  height: 70vh;
  width: 100%;
}
    `}</style>
        </div>
    );
};

const ChatValue = ({ addrObj, msgObj }) => 
    <span>Sender : {addrObj} <br/>Message : {msgObj}</span>

export default ChatBox;
