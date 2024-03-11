import axios_instance from './liveChatAxiosInst';

async function setMessageIsReadingState (
        id,
        setActiveCom,
        limit,
        sessionPseudo,
    ) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
            action: "setReadingStateAdmin",
            message_id: id,
            limit: limit,
            session_pseudo: sessionPseudo,
        },
    )
    .then (resp => {
        if (resp.status === 200) {
            setActiveCom(resp.data);
        } else {
            setActiveCom([]);
        }
    })
    .catch (() => setActiveCom([]))
}

export default setMessageIsReadingState;