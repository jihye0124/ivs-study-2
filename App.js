import React from 'https://cdn.skypack.dev/react';
import Header from './components/Header.js';
import LocalMedia from './components/LocalMedia.js';
import LocalMediaProvider from './contexts/LocalMediaContext.js';
import BroadcastProvider from './contexts/BroadcastContext.js';
import StageProvider from './contexts/StageContext.js';
import StageParticipants from './components/StageParticipants.js';
import MediaControls from './components/MediaControls.js';

function App() {
    return (
        <LocalMediaProvider>
            <BroadcastProvider>
                <StageProvider>
                    <Header />
                    <div className="content container">
                        <LocalMedia />
                        <hr />
                        <StageParticipants />
                    </div>
                    <hr />
                    <MediaControls />
                </StageProvider>
            </BroadcastProvider>
        </LocalMediaProvider>
    );
}

export default App;
