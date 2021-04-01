import Head from 'next/head'

import { MainContainer, OverviewContainer } from '../styles/pages/HomeStyles';

import Header from '../components/Header';
import SubMenu from '../components/subMenu';
import Profile from '../components/Profile';

export default function Home({ respositories }) {
  return (
    <>
      <Head>
        <title>Github - Page profile</title>
      </Head>

      <Header />

      <SubMenu />
      <MainContainer>
        <Profile />

        <OverviewContainer>
            <h1>Popular repositories</h1>
            <div className="wraper">
              {respositories.map(repo =>(
                <div className="repos" key={repo.id}>
                  <strong>{repo.name}</strong>
                  <p>{repo.description}</p>
                  <span className={repo.language}>{repo.language}</span>
                </div>
              ))}
            </div>
        </OverviewContainer>
      </MainContainer>

    </>
  )
}

Home.getInitialProps = async () => {
    const repos = await fetch('https://api.github.com/users/LuisMarchio03/repos');
    const respositories = await repos.json();

    return { respositories };
}