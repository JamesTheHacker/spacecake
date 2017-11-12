import React from 'react';
import ReactDOM from 'react-dom';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import styled, { injectGlobal } from 'styled-components';
import { Flex, Box } from 'grid-styled'

import Header from '../components/Header';
import Counter from './Counter';

injectGlobal`
    html {
        background: linear-gradient(to right, #7f00ff, #e100ff);
        font-family: "Montserrat", sans-serif;
    }
`;

const Container = styled(Flex)`
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
`

@observer
class App extends React.Component {
    render() {
        return (
            <Container wrap>
                <DevTools />
                <Box px={10} width={[ 1, 1/2 ]}>
                    <Header />
                </Box>
                <Box px={10} width={[ 1, 1/2 ]}>
                    <Counter store={this.props.store} />
                </Box>
            </Container>
        )
    }
}

export default App;