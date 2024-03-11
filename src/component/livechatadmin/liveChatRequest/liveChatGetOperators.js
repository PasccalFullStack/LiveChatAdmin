import axios_instance from './liveChatAxiosInst';

async function getOperators (setOperatorList) {
    await axios_instance.post(
        process.env.REACT_APP_LIVE_CHAT_API,
        {
            action: 'getOperators',
        },
    )
    .then ((resp) => {
        if (resp.status === 200) {
            setOperatorList(resp.data.operatorList);
        } else {
            setOperatorList([]);
        }
    })
    .catch (() => setOperatorList([]))
}

export default getOperators;