/* const messageBoxStyle = {
    margin-bottom: 10,
    border: '3px solid blue',
    background-color: '#f1f1f1',
    padding: '10px'
};
 */

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



/* const chatBoxStyle = {
    margin: 10,
    padding: 10,
    border: '2px solid black'
  };

   */