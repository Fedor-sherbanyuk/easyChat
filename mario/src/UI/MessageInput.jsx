const MessageInput = ({ message, setMessage }) => {
    return (
        <input
            type="text"
            className="form-control mb-2"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    );
};

export default MessageInput;