import styled from 'styled-components/macro';
export const Container = styled.form`
    margin-top: 5rem;
    margin-left: 10rem;
    display: flex;
    flex-direction: column; 
    width: 11.8rem;  
`;

export const Title = styled.h1`

`;

export const Forget = styled.a`
    color: #D32F2F;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
`;

export const Lets = styled.button`
    color: white;
    background-color: #212121;
    border: none;
    width: 11.8rem;
    padding: 0.4rem 0;
    font-size: 0.7rem;
    cursor: pointer;
`;

export const Text = styled.p`
`;

export const Icon = styled.img`
`;

export const Input = styled.input`
    margin-bottom: 1rem;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    background-color: white;
    border-radius: 0;
    outline: none;
    &:active {
        border-bottom: 2px solid #D32F2F;
    }
`;

export const Label = styled.label`
    font-size: 0.6rem; 
    color: #bfbfbf;
`;

//  export const Box = styled.input.attrs({type:'checkbox'} )`

// `;