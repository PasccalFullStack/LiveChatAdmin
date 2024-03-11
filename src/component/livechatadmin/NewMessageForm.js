import React, {useState, useEffect} from 'react';
import SpeedlyAnswer from './SpeedlyAnswer';
import livechat_icons from './liveChatFunction/livechat_icons';
import liveChatFunction from './liveChatFunction/liveChatFunction';
import setNewMessage from './liveChatRequest/liveChatSetNewMessage';
import setCommunicationIsClose
    from './liveChatRequest/liveChatSetCommunicationIsClose';
import getActiveCom from './liveChatRequest/liveChatGetActiveCom';

export default function NewMessageForm(props) {

    const [messageLength, setMessageLength] = useState(0);

    useEffect (() => {
        let scroll = document.querySelector('.display_communication');
        scroll.scrollTop=scroll.scrollHeight;

        return;
    })

    return (
        <ul
            key="hotline_newMessage"
            className="newMessageDiv"
            style={
                {
                    background: 'rgba(140, 140, 140, 0.8'
                }
            }>
            <li key="answer" className="comHeader">
                <span style={{color: 'black', fontSize: '14px'}}>
                    Répondez à {
                        props.currentCommunication.substring(
                            0,
                            props.currentCommunication.indexOf(' ('),
                            )}
                </span>
                <span
                    style={{
                        color: messageLength > 254 ? 'red' : 'black',
                        paddingLeft: '50px',
                    }}>
                    {messageLength + ' / 255'}
                </span>
                <button
                    style={{
                        '--newMesButBackground': '#F7D59E',
                        transform: 'scale(0.8)',
                        color: 'red',
                    }}
                    onClick={() => {
                            document.querySelector('#newMessageContent').value='';
                            setMessageLength(0);
                        }}>
                        {livechat_icons.reset_message()}
                </button>
                <button
                    style={{'--newMesButBackground': 'lightgreen'}}
                    onClick={() => liveChatFunction.sendNewMessage(
                            '',
                            props.activeCom,
                            props.setActiveCom,
                            props.comList,
                            props.setComList,
                            setNewMessage,
                            props.currentOperatorId,
                            setMessageLength,
                            props.comLimit,
                            getActiveCom,
                            props.pseudo,
                        )}>
                    {livechat_icons.send_message()}
                </button>
                <SpeedlyAnswer
                    activeCom={props.activeCom}
                    setActiveCom={props.setActiveCom}
                    comList={props.comList}
                    setComList={props.setComList}
                    comLimit={props.comLimit}
                    setNewMessage={setNewMessage}
                    currentOperatorId={props.currentOperatorId}
                    setMessageLength={setMessageLength}
                    getActiveCom={getActiveCom}
                    pseudo={props.pseudo} />
            </li>
            <li>
                <textarea
                    rows="3"
                    id="newMessageContent"
                    style={{
                            width: '92%'
                        }}
                    onChange={() => {
                            setMessageLength(
                                document.querySelector('#newMessageContent').value.length
                            );
                            if (document.querySelector('#newMessageContent').value.length >= 255) {
                                document.querySelector('#newMessageContent').value =
                                    document.querySelector('#newMessageContent').value.substr(0, 254)
                            }
                        }}></textarea>
            </li>
            <li className="resolvedCom">
                <button
                    className="resolvedComBut"
                    onClick={
                        () => {
                            props.setCurrentCommunication('');
                            setCommunicationIsClose(
                                props.activeCom[0].chat_id,
                                props.setActiveCom,
                                props.pseudo,
                            );
                    }}>
                    Conversation résolue ?
                </button>
            </li>
        </ul>
    )
}