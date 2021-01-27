import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;

    display: block;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.tertiary};
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius:  ${({theme}) => theme.borderRadius};
    transition: all .5s;
    text-transform: uppercase;
    cursor: pointer;
    outline: 0;

    &:hover,
    &:focus {
        background-color: ${({theme}) => theme.colors.quaternary};
        color: ${({theme}) => theme.colors.primary};
        opacity: .5;
    }

    &:disabled {
        background-color: ${({theme}) => theme.colors.primaryDark};
        color: ${({theme}) => theme.colors.secondary};
        border: 2px solid ${({theme}) => theme.colors.primaryDark};
        text-decoration: line-through;
        cursor: not-allowed;
    }
`;

export default Button