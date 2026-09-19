'use client';

import Image from 'next/image';
import { PiArrowUpRight, PiTrophy } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { ClipOutlineButton } from './ui/buttons';
import { achievements } from '../data/personalInfo';

const AchievementsContent = () => {
    return (
        <section id="achievements" className="sec sec-2 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Achievements"
                    title="Milestones & recognition"
                    subtitle="A few moments I'm proud of."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <Reveal key={index} delay={(index % 3) * 0.07}>
                            <ClipCard
                                border="border-accent-clip"
                                outerClassName="[--notch:22px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_var(--shadow-tint)]"
                                className="group flex h-full flex-col bg-card [--notch:22px]"
                            >
                                <div
                                    className="relative overflow-hidden bg-slate-950 flex items-center justify-center"
                                    style={{ paddingBottom: '66%' }}
                                >
                                    <Image
                                        width={600}
                                        height={400}
                                        src={achievement.image || './achievements/udyam_showcase.jpg'}
                                        alt={achievement.title}
                                        className="absolute inset-0 h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="font-geom text-base font-semibold leading-relaxed text-foreground">
                                        {achievement.title}
                                    </h3>
                                    {achievement.description && (
                                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    )}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {(achievement.highlights || [achievement.badge || 'Milestone']).map((h, i) => (
                                            <span
                                                key={i}
                                                className="font-geom bg-accent/70 px-3 py-1 text-xs font-medium text-accent-foreground ring-1 ring-primary/20"
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ClipCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsContent;
