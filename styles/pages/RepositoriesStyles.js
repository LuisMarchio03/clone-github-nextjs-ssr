import styled from 'styled-components';

export const MainContainer = styled.section`

    display: flex;
    

    @media (max-width: 950px) {
        flex-direction: column;
    }
  
`;

export const RepositoriesContainer = styled.div`
    width: 80%;

    .wraper{
        display: flex;
        flex-direction: column;
        gap: 5%;
    }

    .repos {
        width: 100%;
        min-height: 50px;
        
        border-bottom: 1px solid #ccc;

        padding: 4%;
        margin-bottom: 2%;

        strong {
            font-size: 22px;
            font-weight: 400;

            display: flex;
            flex-direction: column;
            margin-bottom: 2%;
            
            color: blue;

            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }

        p {
            color: #222;
        }

         span.HTML {
            color: orange;
        }

         span.JavaScript {
            color: yellowgreen;
        }

         span.CSS {
            color: purple;
        }
    }
`;