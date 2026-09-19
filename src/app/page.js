'use client';

import TickerBar from '@/components/ticker-bar';
import Navbar from '@/components/navbar-block';
import HeroContent from '@/components/hero-content';
import AboutContent from '@/components/about-content';
import ExperienceContent from '@/components/experience-content';
import EducationContent from '@/components/education-content';
import ProjectsContent from '@/components/projects-content';
import SkillsContent from '@/components/skills-content';
import CertificationsContent from '@/components/certifications-content';
import AchievementsContent from '@/components/achievements-content';
import ContactContent from '@/components/contact-content';
import Footer from '@/components/footer-block';

const HomePage = () => {
    return (
        <>
            <TickerBar />
            <Navbar />
            <main>
                <HeroContent />
                <AboutContent />
                <ExperienceContent />
                <EducationContent />
                <ProjectsContent />
                <SkillsContent />
                <CertificationsContent />
                <AchievementsContent />
                <ContactContent />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
