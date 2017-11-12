import React from 'react';
import styled from 'styled-components';
import { action } from 'mobx';
import { observer } from 'mobx-react';

const CounterContainer = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: 700;

    span {
        color: white;
        padding: 30px
    }

    button {
        border: 0;
        background: white;
        color: rebeccapurple;
        border-radius: 5px;
        font-size: 25px;
        cursor: pointer;

        :focus {
            outline: none;
        }
    }

    @media (min-width: 40em) {
        font-size: 50px;

        button {
            padding: 10px 20px;
            font-size: 30px;
            margin-top: 150px;
            border-radius: 50px;
        }
    }
`;

@observer
class Counter extends React.Component {
    render() {
        return (
            <CounterContainer>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.store.counter}</span>
                <button onClick={this.increment}>+</button>
            </CounterContainer>
        )
    }

    @action increment = () => this.props.store.counter = this.props.store.counter + 1;
    @action decrement = () => this.props.store.counter = this.props.store.counter - 1;
}

export default Counter;