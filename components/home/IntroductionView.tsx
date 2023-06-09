import React, { useState } from 'react';
import Navigation from './Navigation';
import Socials from './Socials';
import AboutMe from './AboutMe';
import Header from './Header';
import Feedback from './Feedback';
import Freelance from './Freelance';
import Content from './Content';

const HomeView: React.FC = () => {

    const [activeTabKey, setActiveTabKey] = useState<string>("AboutMe");
    const handleTabChange = (e: any) => setActiveTabKey(e.target.id);

    return (
        <section className='flex flex-col mx-auto sm:w-3/4 lg:flex-row lg:w-[900px] lg:gap-8 lg:py-32 xl:w-[1150px]'>
            
            <section className='flex flex-col justify-between p-10 py-32 lg:p-0 lg:w-1/2 lg:h-[700px] lg:sticky lg:top-20'>
                
                <section className='flex flex-col gap-8 lg:gap-20'>
                    <Header />

                    <Navigation
                        activeTabKey={activeTabKey} 
                        handleTabChange={handleTabChange}
                    />
                    
                    <div className='lg:hidden'>
                        <Socials />
                    </div>
                </section>
                
                <div className='hidden lg:block'>
                    <Socials />
                </div>
            </section>

            <section className='flex flex-col gap-32 lg:hidden'>
                <AboutMe />

{/*                 <Freelance /> */}

                <Content />

                <Feedback />
            </section>

            <section className='hidden lg:flex lg:w-1/2'>
                {
                    activeTabKey === "AboutMe" && <AboutMe /> 
                    || 
                    activeTabKey === "Content" && <Content /> 
                    ||
                    activeTabKey === "Feedback" && <Feedback />
                }
            </section>
        </section>
    )
}

export default HomeView;
