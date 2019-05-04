import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    color: white;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 1000;
`;

class ErrorPage extends Component {
    render() {
        return (
            <StyledH1>
                ERROR 404 - PAGE NOT FOUND
            </StyledH1>
        );
    }
}

export default ErrorPage;