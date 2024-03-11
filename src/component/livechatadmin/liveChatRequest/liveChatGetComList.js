import axios_instance from './liveChatAxiosInst';

async function getComList(operatorId, setComList, sessionPseudo) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
                action: "readComList_admin",
            operator_id: operatorId,
            session_pseudo: sessionPseudo,
        },
    )
    .then((resp) => {
        if (resp.status === 200) {
            setComList(resp.data);
        } else {
            setComList([]);
        }
    })
    .catch (() => setComList([]));
}

export default getComList;