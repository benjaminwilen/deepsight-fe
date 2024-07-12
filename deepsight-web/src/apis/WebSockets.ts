import { useEffect, useState, useRef, useCallback } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket"

import { WS_URL } from './constants';


export const PingWebSocket = () => {
  
    const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);

    const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL);

    useEffect(() => {
    if (lastMessage !== null) {
        console.log(lastMessage);
        setMessageHistory((prev) => prev.concat(lastMessage));
    }
    }, [lastMessage]);


    const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

    const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return {sendMessage, lastMessage, connectionStatus};
}