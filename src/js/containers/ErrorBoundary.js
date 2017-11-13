import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Shevy from 'shevyjs';

import MainHeading from '../styled-components/MainHeading';
import Text from '../styled-components/Text';

const shevy = new Shevy()
const { h1, content } = shevy;

const ErrorContainer = styled.div`
    max-width: 40em;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid white;
    margin-top: 100px;
    padding: 30px;
    border-radius: 5px;
    cursor: pointer;
`;

class ErrorBoundary extends React.Component {
    
    state = { error: false };

    componentDidCatch(error, info) {
        this.setState({ error });
        process.env.SENTRY_DSN && Raven.captureException(error, { extra: info });
    }
  
    render() {
        if (this.state.error) {
            return (
                <ErrorContainer
                    onClick={() => 
                        process.env.SENTRY_DSN &&
                        Raven.lastEventId() && 
                        Raven.showReportDialog()}>
                    <Box width={1}>
                        <MainHeading>We're sorry — Something's gone wrong!</MainHeading>
                    </Box>
                    <Box width={1}>
                        <Text>Our developers have been notified. The problem will be resolved shortly.</Text>
                        <Text><strong>Click here to report this problem</strong></Text>
                    </Box>
                </ErrorContainer>
            );
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;