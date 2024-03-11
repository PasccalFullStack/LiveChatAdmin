import axios_instance from './liveChatAxiosInst';

async function getActiveCom(
        operatorId,
        chatId,
        setActiveCom,
        comLimit,
        sessionPseudo,
    ) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
            action: "readActiveCom",
            operator_id: operatorId,
            chat_id: chatId,
            limit: comLimit,
            session_pseudo: sessionPseudo,
        },
    )
    .then((resp) => {
        if (resp.status === 200) {
            setActiveCom(resp.data);
        } else {
            setActiveCom([]);
        }
    })
    .catch (() => setActiveCom([]));
}

export default getActiveCom;