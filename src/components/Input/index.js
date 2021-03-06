import style from 'styled-components';

const InputBase = style.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.quaternary};
    background-color:  ${({theme}) => theme.colors.mainBg}
    border-radius:  ${({theme}) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function Input({...props}){
    return(
        <div>
            <InputBase {...props} />
        </div>
    )
}