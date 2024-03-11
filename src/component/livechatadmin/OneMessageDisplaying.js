import React from 'react';
import liveChatFunction from './liveChatFunction/liveChatFunction';
import livechat_icons from './liveChatFunction/livechat_icons';
import setMessageIsReadingState
    from './liveChatRequest/liveChatSetMessageIsReadingState';
import getComList from './liveChatRequest/liveChatGetComList';

export default function OneMessageDisplaying(props) {
    
    return (
        <ul
            key={"mess" + props.index}
            className="oneMessageDiv"
            style={{
                background: 
                    props.item.hotline_emit_date !== 0
                        ? 'rgba(200, 200, 100, 0.4)'
                        : 'rgba(100, 200, 200, 0.4)',
                transform:
                    props.item.hotline_emit_date !== 0
                        ? 'translateX(-25px)'
                        : 'translateX(0)',
                }}>
            <li key={"omh" + props.index} className="comHeader">
                <span style={{fontSize: '14px'}}>
                    {props.item.chat_continuation_nb}
                </span>
                <span style={{fontSize: '12px'}}> - id :
                    <u> {props.item.chat_id}</u>
                </span>
                <span style={{fontSize: '16px', fontWeight: '700'}}>
                    {' - ' + (props.item.hotline_emit_date !== 0
                    ? liveChatFunction.show_date(props.item.hotline_emit_date)
                    : liveChatFunction.show_date(props.item.user_emit_date))}
                </span>
                <span style={{fontSize: '10px', paddingLeft: '10%'}}>de : </span>
                <span style={{fontSize: '14px'}}>
                    {props.item.hotline_emit_date !== 0
                        ? 'Vous'
                        : props.currentCommunication}
                </span>
                <span style={{fontSize: '10px', paddingLeft: '5%'}}>
                    <span
                        style={{
                            color:
                                props.item.message_reading_at !== 0
                                    ? '#239C25'
                                    : 'red',
                        }}
                        className="unread_message"
                        onClick={() => {
                            if (props.item.hotline_emit_date === 0) {
                                setMessageIsReadingState(
                                    props.item.id,
                                    props.setActiveCom,
                                    props.comLimit,
                                    props.pseudo,
                                );
                                getComList(
                                    props.currentOperatorId,
                                    props.setComList,
                                    props.pseudo,
                                )
                            }
                        }}>
                        {props.item.message_reading_at !== 0
                            ? livechat_icons.message_read()
                            : livechat_icons.unread_message()}
                    </span>
                    <span style={{padding: '0 0 5px 30px'}}>
                        {props.item.message_reading_at !== 0
                            ? liveChatFunction.show_date(
                                    props.item.message_reading_at
                                )
                            : 'Non lu'}
                    </span>
                </span>
            </li>
            <li
                key={"omc" + props.index}
                className="comMessage"
                onClick={() => {
                    if (props.item.hotline_emit_date === 0) {
                        setMessageIsReadingState(
                            props.item.id,
                            props.setActiveCom,
                            props.comLimit,
                            props.pseudo,
                        );
                    }
                }}>
                {props.item.hotline_emit_date !== 0
                    ? props.item.hotline_message
                    : props.item.user_message}
            </li>
        </ul>
    )
}
