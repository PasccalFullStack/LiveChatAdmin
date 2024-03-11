const liveChatFunction = {
    show_date : tp => {
        let date = new Date(tp * 1000);
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        let getMonth = date.getMonth() + 1;
        let month = getMonth > 9 ? getMonth : '0' + getMonth;
        let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
        let minu = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        let seco = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
        let dateFormated = 
            day + '/' + month + '/' + date.getFullYear() + ' - ' + 
            hour + ':' + minu + ':' + seco;
            
        return dateFormated;
    },
    sendNewMessage : (
            mess = '',
            activeCom,
            setActiveCom,
            comList,
            setComList,
            setNewMessage,
            currentOperatorId, 
            setMessageLength,
            comLimit,
            getActiveCom,
            pseudo,
        ) => {
            let message = document.querySelector('#newMessageContent').value;
            if (message !== '' || mess !== '') {
                let userId = activeCom[1].user_id;
                let chatId =
                activeCom.length > 0
                    ? activeCom[1].chat_id
                    : 0;
                let chatIssue =
                    comList.length > 0
                    ? comList[0].chat_issue :
                    '';
                let chatContinuation = 
                    comList.length > 0
                        ? comList[0].chat_continuation_nb
                        : '0';
                setNewMessage(
                    currentOperatorId,
                    chatId,
                    userId,
                    chatIssue,
                    chatContinuation,
                    message !== '' ? message : mess,
                    setComList,
                    pseudo,
                );
                setMessageLength(0);
                document.querySelector('#newMessageContent').value = '';
                setTimeout(() => {
                    getActiveCom(
                        currentOperatorId,
                        chatId,
                        setActiveCom,
                        comLimit,
                        pseudo,
                    )
                }, 500);
            }
      },
};

export default liveChatFunction;