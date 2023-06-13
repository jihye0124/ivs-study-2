import React from 'https://cdn.skypack.dev/react';

export default function Placeholder({ userId }) {
    return (
        <div className="placeholder">
            <span style={{ margin: 'auto' }}>{userId}</span>
        </div>
    );
}
