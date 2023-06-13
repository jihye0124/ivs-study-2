import React, { createContext } from 'https://cdn.skypack.dev/react';
import useBroadcast from '../hooks/useBroadcast';

export const BroadcastContext = createContext({
    startBroadcast: undefined,
    stopBroadcast: undefined,
    broadcastStarted: false,
    addStream: undefined,
    removeStream: undefined,
    init: undefined,
    updateStreamKey: undefined,
});

export default function BroadcastProvider({ children }) {
    const state = useBroadcast();

    return <BroadcastContext.Provider value={state}>{children}</BroadcastContext.Provider>;
}
