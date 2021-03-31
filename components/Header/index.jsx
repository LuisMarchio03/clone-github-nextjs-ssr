import React from 'react';

import { AiFillGithub } from 'react-icons/ai';

import { HeaderContainer } from './styles';

function Header() {
    return (
        <HeaderContainer>
            <div>
                <AiFillGithub />
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Search..." />
                </form>
                <span>dropwon</span>
                <a href="#">Sing us</a>
            </div>
        </HeaderContainer>
    );
}

export default Header;