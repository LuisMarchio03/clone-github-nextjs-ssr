import Head from 'next/head'

import { MainContainer, OverviewContainer } from '../styles/pages/HomeStyles';

import Header from '../components/Header';
import SubMenu from '../components/subMenu';
import Profile from '../components/Profile';

export default function Home() {
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
                <div className="repos">
                    <strong>Repositorio 01</strong>
                    <span>Html</span>
                </div>
                <div className="repos">
                    <strong>Repositorio 01</strong>
                    <span>Html</span>
                </div>
                <div className="repos">
                    <strong>Repositorio 01</strong>
                    <span>Html</span>
                </div>
                <div className="repos">
                    <strong>Repositorio 01</strong>
                    <span>Html</span>
                </div>
            </div>
        </OverviewContainer>
      </MainContainer>

    </>
  )
}
