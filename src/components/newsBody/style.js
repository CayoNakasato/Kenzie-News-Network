import styled from "styled-components";

export const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    width: 95vw;
    height: 98%;

    border-radius: 10px;

    margin-top: 1vh;
    
    color:#FFFFFF;
    background-color: #281E1E;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;
        padding: 0 .7rem;
        
        height: 30%;
        width: 95%;

        overflow-y: auto;
    }
`

export const AuthContent = styled.div`
    display: flex;
    justify-content: flex-end;

    padding-right: .5rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10px ;

    figure{
        display: flex;
        flex-direction: column;

        gap: 5px;

        img{
            border-radius: 10px;
        }
    
        figcaption{
            font-size: 5px;
        }
    }

`
