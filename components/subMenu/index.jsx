import React, { useContext } from 'react';

import Link from 'next/link';

import { BsBook } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { GoProject } from 'react-icons/go';

import { SubMenuContainer } from './styles';

function SubMenu() {
    return (
        <SubMenuContainer>
            <nav>
                <ul>
                    <li>
                        <Link href="/"><a><BsBook /> Overview</a></Link>
                        <Link href="/repositories"><a><RiGitRepositoryLine /> Repositories <span>7</span></a></Link>
                        <Link href="/projects"><a><GoProject /> Projects</a></Link>
                    </li>
                </ul>
            </nav>
        </SubMenuContainer>
    );
}

export default SubMenu;