import styled from 'styled-components';

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    padding: 5px;
    display: block;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.tertiary};
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: 5px;
    transition: all .5s;
    text-transform: uppercase;

    &:hover {
        background-color: ${({theme}) => theme.colors.quaternary};
        color: ${({theme}) => theme.colors.primary};
    }

    &:disabled {
        background-color: ${({theme}) => theme.colors.primaryDark};
        color: ${({theme}) => theme.colors.secondary};
        border: 2px solid ${({theme}) => theme.colors.primaryDark};
        text-decoration: line-through;
    }
`;

export default Button