import logo from './logo.svg';
import './App.css';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

window.pusher = require('pusher-js')

window.Echo = new Echo({
  broadcaster: 'reverb',
  key: '5exdmhltaebdhuxcss8l',
  wsHost: 'localhost',
  wsPort: 8080,
  forceTLS: false,
  encrypted: false,
  enabledTransports: ['ws', 'wss'],
  authEndpoint: "http://laravelwebsocket.test/broadcasting/auth",
  auth: {
    headers: {
      Authorization: `Bearer 1|VTVDLrPWoJ2W54WtltlgismiTdrw92UGao1Cs79r1baf49a6`
    }
  }
});
function App() {
  window.Echo.channel('my-public-channel')
    .listen('PublicChannelEvent', (e) => {
      console.log(e, 'hi444');
    });

  window.Echo.private('my-private-channel.user.1')
    .listen('PrivateChannelEvent', (e) => {
      console.log(e);
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
