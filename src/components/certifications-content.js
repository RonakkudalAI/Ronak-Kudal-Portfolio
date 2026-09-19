'use client';

import Image from 'next/image';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { certifications as rawCertifications } from '../data/personalInfo';

const certifications = rawCertifications.map((c) => ({
    title: c.title,
    issuedBy: c.issuer,
    issuedDate: c.issueDate,
    certificateImage: c.image || './certificates/certificate-1.jpg',
}));

const CertificationsContent = () => {
    return (
        <section
            id="certifications"
            className="sec sec-1 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Certifications"
                    title="Continuous learning"
                    subtitle="Professional development across AI, ML, and engineering."
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <Reveal key={index} delay={(index % 3) * 0.07} className="h-full">
                            <ClipCard
                                outerClassName="[--notch:18px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_var(--shadow-tint)]"
                                className="group flex h-full flex-col bg-card [--notch:18px]"
                            >
                                <div
                                    className="relative overflow-hidden bg-slate-950 flex items-center justify-center"
                                    style={{ paddingBottom: '70%' }}
                                >
                                    <Image
                                        width={500}
                                        height={375}
                                        src={cert.certificateImage}
                                        alt={cert.title}
                                        className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-4">
                                    <h3 className="font-geom text-sm font-semibold leading-snug text-foreground">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                                        <span className="font-medium text-primary">
                                            {cert.issuedBy}
                                        </span>
                                        <span>{cert.issuedDate}</span>
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

export default CertificationsContent;
