import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 0.75rem;
    background: transparent;
    border: 0.05rem solid var(--mainYellow);
    color: var(--lightGreen);    
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    outline-color: red;
    cursor: pointer;
    display: inline-block;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.25s ease-in-out;
    &:hover {
        background: var(--mainYellow);
        color: var(--mainGreen);
    }
    &:focus {
        outline: none;
     }
`