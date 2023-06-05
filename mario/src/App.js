import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import './index.css';
import UserDropdown from "./UI/ UserDropdown";
import MessageInput from "./UI/MessageInput";
import SendMessageButton from "./UI/SendMessageButton";
import MessageList from "./UI/MessageList";

const users = [
    {id: 1, name: "Artem", avatar: "/img/doctor.png"},
    {id: 2, name: "invisible Artem", avatar: "/img/squirrel.jpg"},
    {id: 3, name: "lazy Artem", avatar: "/img/squirrel2.jpg"},];

function App() {
        const [selectedProfile, setSelectedProfile] = useState(users[0]);
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
                        <UserDropdown
                            selectedProfile={selectedProfile}
                            setSelectedProfile={setSelectedProfile}
                        />
                    </div>
                    <div className="col-md-8">
                        <MessageInput message={message} setMessage={setMessage}/>
                        <SendMessageButton sendMessage={sendMessage}/>
                    </div>
                </div>
                <div className="row mt-5">
                    <MessageList messages={messages}/>
                </div>
            </div>
        )
}