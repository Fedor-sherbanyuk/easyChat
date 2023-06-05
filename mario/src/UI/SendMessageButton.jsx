import {Button} from "react-bootstrap";

const SendMessageButton = ({ sendMessage }) => {
    return (
        <Button variant="primary" onClick={sendMessage}>
            Send
        </Button>
    );
};

export default SendMessageButton;