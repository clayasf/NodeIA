
import {useState} from 'react';
import './styles/App.css';
import './styles/reset.css';
import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([{user: 'gpt', message: 'Olá, eu sou a NodeIA. Como posso ajudar você hoje?'}]);

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await makeRequest(input); // pode ser {prompt: input} dependendo do backend

    response = response.data.split('\n').map(line => <p>{line}</p>); // separei as linhas da resposta

    setChatlog([...chatlog, {user: 'me', message: input}, {user: 'gpt', message: response}]);

    setInput('');
  }
  return (
    <div className="App">
    <SideMenu />
    <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
            <form className="chat-input-form" onSubmit={handleSubmit}>
                <input
                rows='1'
                className="chat-input-textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ></input>
            </form>
        </div>
    </section>
    </div>
  );
}

export default App;
