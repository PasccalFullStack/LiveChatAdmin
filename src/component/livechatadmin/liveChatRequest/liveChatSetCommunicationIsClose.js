import axios_instance from './liveChatAxiosInst';

async function setCommunicationIsClose (
        chatId,
        setActiveCom,
        sessionPseudo,
    ) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
            action: "setCommunicationIsClose",
            chat_id: chatId,
            status: 'resolu',
            session_pseudo: sessionPseudo,
        },
    )
    .then ((resp) => {
        if (resp.status === 200) {
            setActiveCom([]);
        } else {
            setActiveCom([]);
        }
    })
    .catch (() => setActiveCom([]))
}

export default setCommunicationIsClose;