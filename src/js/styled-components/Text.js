import styled from 'styled-components';
import Shevy from 'shevyjs';
const shevy = new Shevy();

export default styled.p`
    font-size: ${shevy.content.fontSize};
    line-height: ${shevy.content.lineHeight};
    text-align: center;
    color: white;
`;