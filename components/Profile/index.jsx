import React, { useEffect, useState } from 'react';

import { ProfileContainer } from './styles';

function Profile() {
    const [profile, setProfile] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://api.github.com/users/LuisMarchio03');
        const data = await res.json();
    
        setProfile(data);
    }, [])

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
                <img src={profile.avatar_url} alt="" />
                <strong>{profile.name}</strong>
                <span>{profile.login}</span>
                <p>{profile.bio}</p>
                <p>{profile.location}</p>
                <p>{profile.blog}</p>
                <p>{profile.email}</p>
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