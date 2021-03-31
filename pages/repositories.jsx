import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import 'isomorphic-fetch';

import { MainContainer } from '../styles/pages/RepositoriesStyles';
import { RepositoriesContainer } from '../styles/pages/RepositoriesStyles';

import Header from '../components/Header';
import SubMenu from '../components/subMenu';
import Profile from '../components/Profile';

function Repositories({ respositories }) {
    return (
        <>
            <Head>
                <title>Github - Page Repositories</title>
            </Head>

            <Header />

            <SubMenu />
            <MainContainer>

                <Profile />

                <RepositoriesContainer>
                    <div className="wraper">
                        {respositories.map(repo =>(
                            <div className="repos" key={repo.id}>
                                <strong>{repo.name}</strong>
                                <p>{repo.description}</p>
                                <span className={repo.language}>{repo.language}</span>
                            </div>
                        ))}
                    </div>
                </RepositoriesContainer>
            </MainContainer>
        </>
    );
}

Repositories.getInitialProps = async () => {
    const repos = await fetch('https://api.github.com/users/LuisMarchio03/repos');
    const respositories = await repos.json();

    return { respositories };
}

export default Repositories;