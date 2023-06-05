import {ListGroup,Image} from "react-bootstrap";

const MessageList = ({ messages }) => {
    return (
        <div className="col-md-12">
            <ListGroup>
                {messages.map((message, index) => (
                    <ListGroup.Item key={index}>
                        <Image
                            src={message.profile.avatar}
                            roundedCircle
                            className="mr-3"
                            width="50"
                        />
                        <span className="font-weight-bold">{message.profile.name}</span>{" "}
                        <span className="text-muted">
              {message.date.toLocaleString()}
            </span>
                        <p className="mt-2">{message.text}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default MessageList;