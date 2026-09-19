'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PiArrowUpRight, PiStar } from 'react-icons/pi';
import SectionHeading from './ui/section-heading';
import Reveal from './ui/reveal';
import ClipCard from './ui/clip-card';
import { projects } from '../data/personalInfo';

const ProjectCard = ({ project, featured }) => {
    const [mainImage, setMainImage] = useState(project.projectImages[0]);

    return (
        <ClipCard
            border={featured ? 'border-accent-clip' : 'bg-border'}
            outerClassName="[--notch:22px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_var(--shadow-tint)]"
            className="group flex h-full flex-col bg-card [--notch:22px]"
        >
            {/* media */}
            <div className="relative overflow-hidden bg-slate-950">
                <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: '16 / 10' }}>
                    <Image
                        width={800}
                        height={500}
                        src={mainImage}
                        alt={project.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                {project.projectImages.length > 1 && (
                    <div className="absolute inset-x-0 bottom-0 flex gap-1 overflow-x-auto bg-foreground/50 p-2 backdrop-blur-sm">
                        {project.projectImages.slice(0, 6).map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setMainImage(img)}
                                aria-label={`Show screenshot ${i + 1}`}
                                className={`h-7 w-10 flex-shrink-0 overflow-hidden ring-1 transition-all ${
                                    mainImage === img
                                        ? 'opacity-100 ring-primary'
                                        : 'opacity-60 ring-transparent hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt=""
                                    width={40}
                                    height={28}
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                        {project.projectImages.length > 6 && (
                            <span className="flex items-center px-1 text-xs text-white/70">
                                +{project.projectImages.length - 6}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-geom text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                </h3>

                <ul className="mt-3 space-y-1.5">
                    {project.descriptionPoints.map((point, i) => (
                        <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                            <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                            {point}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techstack.map((tech) => (
                        <span
                            key={tech}
                            className="font-geom bg-accent/70 px-2.5 py-1 text-xs font-medium text-accent-foreground ring-1 ring-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent-2"
                            >
                                {link.title}
                                <PiArrowUpRight className="size-3.5 text-accent-2" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </ClipCard>
    );
};

const ProjectsContent = () => {
    return (
        <section id="projects" className="sec sec-1 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Projects"
                    title="A showcase of AI-powered work"
                    subtitle="Real, shipped solutions across GenAI, computer vision, and full-stack."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={(index % 2) * 0.08}>
                            <ProjectCard project={project} featured={index < 2} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsContent;
