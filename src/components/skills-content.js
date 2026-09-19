'use client';

import { PiBrain, PiStack, PiCode, PiWrench, PiCalculator } from 'react-icons/pi';
import { MdOutlineScience } from 'react-icons/md';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import FeatureCard from './ui/feature-card';
import { skillCategories as rawSkillCategories } from '../data/personalInfo';

const categoryIcons = [
    <PiBrain key="1" />,
    <PiStack key="2" />,
    <PiCalculator key="3" />,
    <PiCode key="4" />,
    <PiWrench key="5" />,
];

const SkillsContent = () => {
    return (
        <section id="skills" className="sec sec-2 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Skills"
                    title="My stack & toolkit"
                    subtitle="Technologies and tools I reach for to ship."
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rawSkillCategories.map((category, i) => (
                        <Reveal key={category.title} delay={(i % 3) * 0.07} className="h-full">
                            <FeatureCard icon={categoryIcons[i % categoryIcons.length]} title={category.title}>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {category.skills.map((skillName) => (
                                        <span
                                            key={skillName}
                                            className="font-geom inline-flex items-center gap-1.5 bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground/80 ring-1 ring-[var(--ring-subtle)]"
                                        >
                                            <span className="text-sm text-primary">
                                                <MdOutlineScience />
                                            </span>
                                            {skillName}
                                        </span>
                                    ))}
                                </div>
                            </FeatureCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsContent;
