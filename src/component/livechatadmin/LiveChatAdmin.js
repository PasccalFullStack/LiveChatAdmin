import React, {useState, useEffect, useRef} from 'react';
import OneMessageDisplaying from './OneMessageDisplaying';
import NewMessageForm from './NewMessageForm';
import UserListing from './UserListing';
import getOperators from './liveChatRequest/liveChatGetOperators';
import getComList from './liveChatRequest/liveChatGetComList';
import './liveChatStyle/livechat.css';

export default function LiveChatAdmin(props) {

  const [currentOperatorId, setCurrentOperatorId] = useState(0);
  const [comLimit, setComLimit] = useState(10);
  const [currentCommunication, setCurrentCommunication] = useState('');
  const [activeCom, setActiveCom] = useState([]);
  const comRefreshing = useRef(null);
  const oneComInterval = useRef(null);

  useEffect (() => {
    if (props.operatorList.length === 0) {
      getOperators(props.setOperatorList);
    }
    if (props.showActifOperator.id !== 0) {
          clearInterval(comRefreshing.current);
          comRefreshing.current = setInterval(() => {
            getComList(
              props.showActifOperator.id,
              props.setComList,
              props.pseudo
            );
          }, 4000);
    }
    if (props.operatorList.length > 0
        && (props.showActifOperator.id !== currentOperatorId
        || props.showActifOperator.id !== 0)) {
          clearInterval(oneComInterval.current);
          oneComInterval.current = null;
          oneComInterval.current = null;
          setCurrentOperatorId(props.showActifOperator.id);
          getComList(
            props.showActifOperator.id,
            props.setComList,
            props.pseudo
          );
          setActiveCom([]);
    }
 
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showActifOperator])

  return (
    <div  className="live_chat_container" id="scroll_style">
      <div className="hotline_menu">
        <div>
          <p>{'Bonjour ' + props.showActifOperator.operatorName}</p>
        </div>
        <UserListing
          comList={props.comList}
          comLimit={comLimit}
          oneComInterval={oneComInterval}
          currentCommunication={currentCommunication}
          setCurrentCommunication={setCurrentCommunication}
          setActiveCom={setActiveCom}
          showActifOperator={props.showActifOperator}
          pseudo={props.pseudo} />
      </div>
      <div className="display_communication">
        {currentCommunication !== '' && activeCom.length > 0 && (
          <>
            <div className="comTitle">
              <span className="comTitleSpan">
                {'Communication de ' + currentCommunication + ', '
                  + comLimit + 'derniers messages'}
              </span>
              <br></br>
              <label>Nombre de messages que vous consultez = </label>
              <input 
                type="range" name="limit" min="0" max="50"
                className="comLimit"
                value={comLimit}
                onChange={(e) => setComLimit(e.target.value)} />
            </div>
            <ul>
              {activeCom.map((item, index) => (
                <OneMessageDisplaying 
                  key={"comnb" + index}
                  item={item}
                  index={index}
                  activeCom={activeCom}
                  setActiveCom={setActiveCom}
                  comLimit={comLimit}
                  currentOperatorId={currentOperatorId}
                  setCurrentCommunication={setCurrentCommunication}
                  setComList={props.setComList}
                  pseudo={props.pseudo} />
              ))}
              <NewMessageForm 
                comList={props.comList}
                setComList={props.setComList}
                activeCom={activeCom}
                setActiveCom={setActiveCom}
                comLimit={comLimit}
                currentCommunication={currentCommunication}
                setCurrentCommunication={setCurrentCommunication}
                currentOperatorId={currentOperatorId}
                pseudo={props.pseudo} />
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
