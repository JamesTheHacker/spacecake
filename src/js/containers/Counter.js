import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const CounterContainer = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

const Count = styled.span`
    color: white;
    padding: 30px
`;

const Button = styled.button`
    border: 0;
    background: white;
    color: rebeccapurple;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;

    :focus {
        outline: none;
    }

    @media (min-width: 40em) {
        padding: 10px 20px;
        font-size: 22px;
        border-radius: 50px;
        margin-top: 80px;
    }
`;

@observer
class Counter extends React.Component {
    @observable counter = 0;

    render() {
        return (
            <CounterContainer>
                <Button onClick={this.decrement}>
                    <FontAwesome name="minus" />
                </Button>
                <Count>{this.counter}</Count>
                <Button onClick={this.increment}>
                    <FontAwesome name="plus" />
                </Button>
            </CounterContainer>
        )
    }

    @action increment = () => this.counter++;
    @action decrement = () => this.counter--;
}

export default Counter;