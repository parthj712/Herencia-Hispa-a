import React from 'react'
import Welcome from './Welcome/Welcome'
import HeroSection from './HeroSection/HeroSection'
import Connect500 from './Connect500/Connect500'
import Teacher from './Teacher/Teacher'
import Importance from './Importance/Importance'

const MainHome = () => {
    return (
        <div >
            <Welcome />
            <HeroSection />
            <Connect500 />
            <Teacher />
            <Importance/>
        </div>
    )
}

export default MainHome