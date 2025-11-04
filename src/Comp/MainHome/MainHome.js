import React from 'react'
import Welcome from './Welcome/Welcome'
import HeroSection from './HeroSection/HeroSection'
import Connect500 from './Connect500/Connect500'
import Teacher from './Teacher/Teacher'
import Importance from './Importance/Importance'
import WhyChoose from './WhyChoose/WhyChoose'
import Testinomials from './Testinomials/Testinomials'
import MainFAQ from './FAQ/MainFAQ'

const MainHome = () => {
    return (
        <div >
            <Welcome />
            <HeroSection />
            <Connect500 />
            <Teacher />
            <Importance/>
            <WhyChoose/>
            <Testinomials/>
            <MainFAQ/>
        </div>
    )
}

export default MainHome