import { useEffect, useState } from 'react';
import PortfolioLayout from "../components/layout/PortfolioLayout"
import Hero from "../components/portfolio/Hero"
import Capabilities from "../components/portfolio/Capabilities"
import Experience from "../components/portfolio/Experience"
import Projects from "../components/portfolio/Projects"
import ChatPanel from "../components/chat/ChatPanel"
import { fetchProfile } from '../lib/profile';
import type { ProfileResponse } from '../types/profile';



export default function HomePage() {
    const [profile, setProfile] = useState<ProfileResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProfile()
        .then(setProfile)
        .catch(() => setError('Unable to load profile right now.'));
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }




    return (
        <PortfolioLayout 
            leftPane={
                <>
                    <Hero basics={profile.basics} socials={profile.socials} />
                    <Capabilities capabilities={profile.capabilities}/>
                    <Projects projects={profile.projects}/>
                    <Experience experience={profile.experience}/>
                </>
            } 
            rightPane={
                <>
                    <ChatPanel />
                </>
            } 
            
            
        />
    )
}