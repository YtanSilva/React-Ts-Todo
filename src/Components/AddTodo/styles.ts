import styled from "styled-components";

export const Container = styled.div`
    border: .1rem #CCC solid;
    padding: .5rem;
    border-radius: .3rem;
    margin-bottom: 1.5rem;
    display: flex;

    .plus{
        margin-right: .3rem;
        color: transparent;
        text-shadow: 0 0 0 #FFF;
    }

    input{
        background-color: transparent;
        flex: 1;
        font-size: 1.25rem;
        color: #FFF;

        ::placeholder{ 
            color: #FFF;
            opacity: .7;
        }
    }
`