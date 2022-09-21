import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
        border: .1rem solid #CCC;
        border-radius: .3rem;
        display: flex;
        align-items: center;
        padding: .5rem;
        margin: .5rem 0;

        input{
            width: 1.5rem;
            height: 1.5rem;
            margin-right: .3rem;
        }

        label{
            color: snow;
            opacity: .9;
            text-decoration: ${done ? "line-through" : "initial"};

        }
    `
))