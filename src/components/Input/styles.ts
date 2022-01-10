import styled from "styled-components";

export const InputArea = styled.section<{theme: string}>`
    display: flex;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    transition: all ease 0.2s;

    input {
        height: 50px;
        width: 450px;
        border-radius: 2px;
        padding: 0px 10px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '' : '#FFF'};


        ::placeholder {
            color: #ccc
        }
    }

    select {
        border-radius: 2px;
        padding: 0px 20px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0; 
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
    }
`