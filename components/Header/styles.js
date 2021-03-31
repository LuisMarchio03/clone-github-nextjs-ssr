import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 2rem;

    background-color: #1b1f23;
    color: white;
    font-size: 1.2rem;

    div:first-child {
        font-size: 2.4rem;
        cursor: pointer;
    }

    div {
        display: flex;

        padding-left: 2rem;
        padding-top: 0.5rem;

        form {
            padding-right: 2rem;

            input {
                width: 200px;
                height: 30px;

                border: 0;
                border-bottom: 1px solid #ccc;

                background: transparent;

                &:focus {
                    border: 0;
                    background: #f5f4f5;
                }
            }
        } 
        
        span {
            padding-right: 2rem;
        }  
    }

`;
