import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 50px;

    h1 {
        font-size: 40px;
        margin: 0;
    }

    @media (min-width: 52em) {
        h1 {
            font-size: 50px;
        }
    }
`;

const Branding = styled.p`
    font-size: 70px;
    margin: 0;
`;

export default () => (
    <Header>
        <Branding>🚀🍰</Branding>
        <h1>Spacecake</h1>
        <p>React, Mobx, styled-components, grid-styled</p>
    </Header>
);
