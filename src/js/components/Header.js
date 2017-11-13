import React from 'react';
import styled from 'styled-components';
import Shevy from 'shevyjs';

// Components
import MainHeading from '../styled-components/MainHeading';
import Text from '../styled-components/Text';

const shevy = new Shevy()
const { h1, content } = shevy;

const Header = styled.header`
    text-align: center;
`;

const Branding = styled.p`
    font-size: 70px;
    margin: 0;
`;

export default () => (
    <Header>
        <Branding>🚀🍰</Branding>
        <MainHeading>Spacecake</MainHeading>
        <Text>React, Mobx, styled-components, grid-styled</Text>
    </Header>
);
