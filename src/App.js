      import React, { useState } from "react";
      import { Dropdown, Button, ListGroup, Image } from "react-bootstrap";
      import "bootstrap/dist/css/bootstrap.min.css";

      const profiles = [
      { id: 1, name: "Unit 1", avatar: "/img/Doctor.png" },
      { id: 2, name: "Unit 2", avatar: "/img/squirrel.jpg" },
      { id: 3, name: "Unit 3", avatar: "/img/squirrel2.jpg" },
      ];

      const Chat = () => {
      const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState([]);

      const sendMessage = () => {
      const newMessage = {
      text: message,
      profile: selectedProfile,
      date: new Date(),
    };
      setMessages([...messages, newMessage]);
      setMessage("");
    };

      return (
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-4">
      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
    {selectedProfile.name}
    </Dropdown.Toggle>

  <Dropdown.Menu>
    {profiles.map((profile) => (
        <Dropdown.Item
            key={profile.id}
            onClick={() => setSelectedProfile(profile)}
        >
          {profile.name}
        </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>
</div>
  <div className="col-md-8">
    <input
        type="text"
        className="form-control mb-2"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />
    <Button variant="primary" onClick={sendMessage}>
      Send
    </Button>
  </div>
</div>
  <div className="row mt-5">
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
              <span className="font-weight-bold">
                  {message.profile.name}
                </span>{" "}
              <span className="text-muted">
                  {message.date.toLocaleString()}
                </span>
              <p className="mt-2">{message.text}</p>
            </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </div>
</div>
);
};

export default Chat;

