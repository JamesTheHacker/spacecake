import React from 'react';
import styled from 'styled-components';
import Shevy from 'shevyjs';

const shevy = new Shevy()
const { h1, content } = shevy;

const Header = styled.header`
    color: white;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: ${h1.fontSize};
    line-height: ${h1.lineHeight};
    margin: 0;
    margin-bottom: ${h1.marginBottom};
`;

const Byline = styled.p`
    font-size: ${content.fontSize};
`;

const Branding = styled.p`
    font-size: 70px;
    margin: 0;
`;

export default () => (
    <Header>
        <Branding>🚀🍰</Branding>
        <Heading>Spacecake</Heading>
        <Byline>React, Mobx, styled-components, grid-styled</Byline>
    </Header>
);
