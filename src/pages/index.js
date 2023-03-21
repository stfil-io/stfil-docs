import React from 'react';
import {Redirect} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';

export default function Home() {
    return (
        <Redirect to={
            translate({
                message: '/docs/overview/introduction',
                description: 'home redirect',
            })
        } />
    );
}
