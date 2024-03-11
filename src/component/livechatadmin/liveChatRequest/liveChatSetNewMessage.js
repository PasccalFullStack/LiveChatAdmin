import axios_instance from './liveChatAxiosInst';

async function setNewMessage (
        operatorId,
        chatId,
        userId,
        chatIssue,
        continuationNb,
        message,
        setComList,
        sessionPseudo,
    ) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
            action: "newHotlineMessage",
            operator_id: operatorId,
            chat_id: chatId,
            user_id: userId,
            chat_issue: chatIssue,
            continuation_nb: continuationNb,
            message: message,
            session_pseudo: sessionPseudo,
        },
    )
    .then (resp => {
        if (resp.status === 200) {
            setComList(resp.data);
        } else {
            setComList([]);
        }
    })
    .catch (() => setComList([]));
}

export default setNewMessage;