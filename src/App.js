import React, {useState} from 'react';
import './App.css';
import LiveChatAdmin from './component/livechatadmin/LiveChatAdmin';
import OperatorSimulator from './component/livechatadmin/OperatorSimulator';

function App() {

  const [operatorList, setOperatorList] = useState([]);
  const [comList, setComList] = useState([]);
  const [showActifOperator, setShowActifOperator] = useState({
    display: false,
    id: 0,
    pseudo: '',
    operatorName: '',
  });
  const [provPseudo, setProvPseudo] = useState('');
  const [pseudo, setPseudo] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="logoContainer">
          <img
            src={process.env.REACT_APP_IMAGE_URL +'/LIVECHAT-icon.png'}
            alt="LIVECHAT admin icon" />
        </div>
        <div className="h1Container">
          <h1>LIVE CHAT - admin</h1>
        </div>
        <OperatorSimulator
          operatorList={operatorList}
          showActifOperator={showActifOperator}
          setShowActifOperator={setShowActifOperator}
          pseudo={pseudo} />
      </header>
      <section>
        <LiveChatAdmin 
          operatorList={operatorList}
          setOperatorList={setOperatorList}
          showActifOperator={showActifOperator}
          setShowActifOperator={setShowActifOperator}
          comList={comList}
          setComList={setComList}
          pseudo={pseudo} />
      </section>
      {pseudo === '' && (
        <div className="ask_pseudo_container">
          <div className="ask_pseudo_content">
            <label>Pour utiliser cettes version de démo, 
            merci de bien vouloir renseigner votre pseudo svp</label>
            <p id="alert_min4">4 caractéres minimum</p>
            <input
              type="text" size="20" minLength="4" required
              id="demoPseudo"
              style={{fontSize: '20px'}}
              value={provPseudo}
              placeholder="Pseudo svp?"
              onChange={(e) => setProvPseudo(e.target.value)} />
              <button
                  className="pseudo_validation"
                  onClick={() => {
                    let pseud = document.querySelector('#demoPseudo').value;
                    if (pseud.length >= 4) {
                      setPseudo(pseud);
                      localStorage.setItem('LivechatPseudo', pseud);
                    } else {
                      document.querySelector('#alert_min4').style = 'color:red;';
                    }
                    }}>Valider</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
