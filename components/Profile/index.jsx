import React, { useState } from 'react';

import { ProfileContainer } from './styles';

function Profile() {
    const [follow, setFollow] = useState('Follow');

    const hadle = () => {
        if (follow === 'Follow') {
            setFollow('Following')
        } else if (follow === 'Following') {
            setFollow('Follow')
        }

    }

    return (
        <ProfileContainer>
            <div className="wraper">
                <img src="https://avatars.githubusercontent.com/u/63173708?s=400&u=89bf90664aa872e04ac62f34fc2455a41253b86e&v=4" alt="" />
                <strong>Luís Gabriel Marchio Batista</strong>
                <span>Luis-Gabriel-Marchio-Batista</span>
                <button
                    onClick={hadle}
                >
                    {follow}
                </button>
            </div>
        </ProfileContainer>
    );
}

export default Profile;