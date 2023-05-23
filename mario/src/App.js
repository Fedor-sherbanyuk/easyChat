import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {Dropdown, Image, ListGroup} from "react-bootstrap";
import './index.css';

const users = [
    {id: 1, name: "Artem", avatar: "/img/doctor.png"},
    {id: 2, name: "invisible Artem", avatar: "/img/squirrel.jpg"},
    {id: 3, name: "lazy Artem", avatar: "/img/squirrel2.jpg"},];

function App() {
    const [listOfUsers, setListOfUsers] = useState([users[0]]);
    const [messageOfUsers, setMessageOfUsers] = useState([]);
    const [messagesOfUsers, setMessagesOfUsers] = useState("");

    function sendMessage() {
        const newMessage = {
            date: new Date(),
            text: messagesOfUsers,
            profile: listOfUsers,
        };
        setMessagesOfUsers("");
        setMessageOfUsers([...messageOfUsers, newMessage]);
    }

    return (

        <div className="App mx-auto btn-group border border-danger p-3 flex-row input-group mb-3 w-1000">
          <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {listOfUsers.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {users.map((profile) => (
                        <Dropdown.Item
                            key={profile.id} onClick={() => setListOfUsers(profile)}
                        >
                            {profile.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <input className="form-control mb-2" placeholder="Enter text" type="text" value={messagesOfUsers}
                   onChange={(event) => setMessagesOfUsers(event.target.value)}/>
            <button className="btn-danger bg-danger btn" onClick={sendMessage}>SEND</button>

            <div className="row mt-5">
                <div className="col-md-12">
                    <ListGroup>
                        {messageOfUsers.map((message, index) => (
                            <ListGroup.Item key={index}>
                                <Image
                                    src={message.profile.avatar}
                                    roundedCircle
                                    className="mr-3"
                                    width="50"
                                />
                                <span className="font-weight-bold">
                  {message.profile.name}
                </span>
                                <span className="text-muted">
                  {message.date.toLocaleString()}
                </span>
                                <p className="mt-2">{message.text}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>


        </div>)
}

//
export default App;
