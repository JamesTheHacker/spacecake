import React from 'react';
import ReactDOM from 'react-dom';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import styled, { injectGlobal } from 'styled-components';
import { Box } from 'grid-styled';

// Components
import Header from '../components/Header';
import Counter from './Counter';
import Container from '../styled-components/Container';


injectGlobal`
    html {
        background: linear-gradient(to right, #7f00ff, #e100ff);
        font-family: "Montserrat", sans-serif;
    }
`;

const AppContainer = Container.extend`
    margin-top: 100px;
`;

@observer
class App extends React.Component {
    render() {
        return (
            <AppContainer wrap>
                { process.env.NODE_ENV === 'development' && <DevTools /> }
                <Box px={10} width={[ 1, 1/2 ]}>
                    <Header />
                </Box>
                <Box px={10} width={[ 1, 1/2 ]}>
                    <Counter store={this.props.store} />
                </Box>
            </AppContainer>
        )
    }
}

export default App;