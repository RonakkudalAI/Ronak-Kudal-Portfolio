'use client';

import Image from 'next/image';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { education } from '../data/personalInfo';

const EducationContent = () => {
    return (
        <section
            id="education"
            className="sec sec-1 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Education"
                    title="My academic journey"
                    subtitle="Where the foundations were built."
                />

                <div className="mx-auto max-w-3xl space-y-6">
                    {education.map((item, index) => (
                        <Reveal key={index}>
                            <ClipCard
                                border="border-accent-clip"
                                outerClassName="[--notch:20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_var(--shadow-tint)]"
                                className="bg-card p-7 [--notch:20px]"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="clip-mini-notch flex-shrink-0 bg-border p-[1.5px] [--notch:8px]">
                                        <Image
                                            width={64}
                                            height={64}
                                            src={item.logoUrl}
                                            alt={`${item.school} Logo`}
                                            className="clip-mini-notch size-16 object-cover [--notch:8px]"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-geom text-xl font-semibold tracking-tight text-foreground">
                                            {item.school}
                                        </h3>
                                        <p className="mt-1 text-gradient-accent font-medium">
                                            {item.degree} {item.grade ? `(${item.grade})` : ''}
                                        </p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {item.duration}
                                        </p>
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

export default EducationContent;
