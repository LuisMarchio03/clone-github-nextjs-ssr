import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html,
    body {
    padding: 0;
    margin: 0;
    }

    body,
    input,
    textarea,
    button {
        font: 400 1rem "inter", sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    * {
    box-sizing: border-box;
    }

    button {
    cursor: pointer;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }


`;
