import React from 'react';
import getActiveCom from './liveChatRequest/liveChatGetActiveCom';

export default function UserListing(props) {

    return (
        <ul>
            <li key="userComTitle" className="comChoosenTitle">
                Conversations en cours
            </li>
            <br></br>
            {props.comList.length > 0 && props.comList.map((item, index) => {
                var fullname = 
                    item.user_firstname + " " +
                    item.user_lastname + " ( " +
                    item.user_pseudo + " )";

                return (
                    <li
                        key={"userCom" + index}
                        className={
                            item.new_message === 0
                                ? "comChoosen"
                                : "comChoosen mark_unread_message"
                            }
                        style={{
                            background:
                            props.currentCommunication === fullname
                                ? 'rgba(100, 200, 200, 0.4)'
                                : 'grey'
                            }}
                        onClick={() => { 
                            props.setCurrentCommunication(fullname);
                            if (props.showActifOperator.id !== 0) {
                                clearInterval(props.oneComInterval.current);
                                getActiveCom(
                                    item.hotline_id,
                                    item.chat_id,
                                    props.setActiveCom,
                                    props.comLimit,
                                    props.pseudo,
                                );
                                props.oneComInterval.current =
                                    setInterval(() => 
                                        getActiveCom(
                                            item.hotline_id,
                                            item.chat_id,
                                            props.setActiveCom,
                                            props.comLimit,
                                            props.pseudo,
                                        ),
                                        3000,
                                    );
                            } else {
                                props.setCurrentCommunication('');
                                clearInterval(props.oneComInterval.current);
                            }
                        }}>
                        {fullname}
                    </li>
                )
            })}
        </ul>
    )
}
