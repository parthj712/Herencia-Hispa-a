import React from 'react'
import Welcome from './Welcome/Welcome'
import HeroSection from './HeroSection/HeroSection'
import Connect500 from './Connect500/Connect500'
import Teacher from './Teacher/Teacher'
import Importance from './Importance/Importance'
import WhyChoose from './WhyChoose/WhyChoose'
import Testinomials from './Testinomials/Testinomials'
import MainFAQ from './FAQ/MainFAQ'
import Join from './Join/Join'
import RunningText from './RunningText/RunningText'
import Exam from './Exam/Exam'

const MainHome = () => {
    return (
        <div>
            <Welcome />
            <HeroSection />
            <Connect500 />
            <RunningText />
            <Teacher />
            <Importance/>
            <WhyChoose/>
            {/* <Exam/>  */}
            <Testinomials/>
            <MainFAQ/>
            <Join/>
        </div>
    )
}

export default MainHome