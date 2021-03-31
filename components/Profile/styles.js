import styled from 'styled-components';

export const ProfileContainer = styled.aside`
    width: 30%;

    margin-top: -30px;

    .wraper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img{
        max-width: 300px;
        border-radius: 50%;

        margin-bottom: 30px;
    }

    strong {
        margin-bottom: 10px;

        font-size: 23px;
    }

    span {
        font-size: 18px;
        font-weight: 300;
    }

    button {
        margin-top: 20px;

        width: 200px;
        height: 40px;

        background-color: #f5f4f5;
        border: 1px solid #ccc;

        transition: background-color 0.3s;

        &:hover {
            background-color: #ccc;
        }
    }

    @media (max-width: 950px) {
        width: 100%;
        margin-top: 0px;

        img{
        max-width: 150px;
        border-radius: 50%;

        margin: 20px 0;
    }
    }
`;
