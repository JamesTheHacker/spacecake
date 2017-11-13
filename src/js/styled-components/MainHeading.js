import styled from 'styled-components';
import Shevy from 'shevyjs';
const shevy = new Shevy();

export default styled.h1`
    font-size: ${shevy.h1.fontSize};
    margin-top: 0;
    margin-bottom: ${shevy.h1.marginBottom};
    text-align: center;
    color: white;
`