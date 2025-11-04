import React from 'react'
import Welcome from './Welcome/Welcome'
import HeroSection from './HeroSection/HeroSection'
import Connect500 from './Connect500/Connect500'
import Teacher from './Teacher/Teacher'

const MainHome = () => {
    return (
        <div >
            <Welcome />
            <HeroSection />
            <Connect500 />
            <Teacher />
        </div>
    )
}

export default MainHome