import React from 'https://cdn.skypack.dev/react';
const { __version } = IVSBroadcastClient;

export default function Header() {
    return (
        <header className="container">
            <h1>IVS Web Broadcast Stages Example</h1>
            {__version && __version.includes('rc') ? (
                <p>
                    <b>WARNING:</b> This example is using a release candidate (version: {__version}). Please make note
                    of the imported script tag
                </p>
            ) : undefined}
            <p>
                This sample is used to demonstrate React stages usage.{' '}
                <b>
                    <a href="https://docs.aws.amazon.com/ivs/latest/userguide/multiple-hosts.html">Use the AWS CLI</a>
                </b>{' '}
                to create a <b>Stage</b>, a corresponding <b>ParticipantToken</b>, and a second <b>ParticipantToken</b>{' '}
                for Screenshare. Multiple participants can load this page and put in their own tokens. You can{' '}
                <b>
                    <a
                        href="https://aws.github.io/amazon-ivs-web-broadcast/docs/sdk-guides/stages#glossary"
                        target="_blank"
                    >
                        read more about stages in our public docs.
                    </a>
                </b>
            </p>
        </header>
    );
}
