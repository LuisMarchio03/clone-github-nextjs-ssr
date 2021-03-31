import styled from 'styled-components';

export const SubMenuContainer = styled.header`
    margin-top: 10px;
    padding: 1px;

    border-bottom: 1px solid #ccc;

    nav {
        width: 65%;

        text-align: right;
        display: inline-block;

      li {
        a {
            margin-right: 30px;

            font-size: 1rem;

            &:hover {
                padding-bottom: 8px;
                border-bottom: 2px solid red;
            }

            span {
              font-size: 14px;
              padding: 3px;

              border-radius: 50%;
              background: #ccc;
            }
        }
      }
    }

    @media (max-width: 950px) {
        nav {
          width: 100%;
          text-align: center;
        }
    }

`;
