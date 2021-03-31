import styled from 'styled-components';

export const MainContainer = styled.section`

    display: flex;
    

    @media (max-width: 950px) {
        flex-direction: column;
    }
  
`;

export const OverviewContainer = styled.section`
    width: 70%;

    h1 {
        font-size: 20px;
        font-weight: 300;

        margin: 20px 2%;
    }
  
    .wraper{
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        margin: 0 2%;
    }

    .repos {
        width: 45%;
        min-height: 100px;
        
        border: 1px solid #ccc;
        border-radius: 15px;
    
        padding: 2%;
        margin-bottom: 5%;

        strong {
            display: flex;
            flex-direction: column;
            margin-bottom: 10%;
        }
        
        span {
            
        }
    }

    
    @media (max-width: 950px) {
        width: 100%;

        .repos {
            width: 100%; 
        }
    }

`;