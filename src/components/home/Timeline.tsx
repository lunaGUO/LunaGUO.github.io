'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export interface TimelineEntry {
    date: string;
    title: string;
    description?: string;
}

interface TimelineProps {
    title?: string;
    educationTitle?: string;
    experienceTitle?: string;
    education?: TimelineEntry[];
    experience?: TimelineEntry[];
}

const inlineMarkdownComponents = {
    p: ({ children }: React.ComponentProps<'p'>) => <>{children}</>,
    a: ({ ...props }) => (
        <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
        />
    ),
    strong: ({ children }: React.ComponentProps<'strong'>) => <strong className="font-semibold text-primary">{children}</strong>,
    em: ({ children }: React.ComponentProps<'em'>) => <em className="italic">{children}</em>,
};

function TimelineColumn({ heading, icon, entries }: { heading: string; icon: string; entries: TimelineEntry[] }) {
    return (
        <div>
            <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-primary mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span aria-hidden="true">{icon}</span>
                {heading}
            </h3>
            <div className="relative space-y-6">
                <span className="absolute left-[3px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />
                {entries.map((entry, index) => (
                    <div key={index} className="relative pl-5">
                        <span className="absolute left-0 top-[5px] w-[7px] h-[7px] rounded-full bg-accent" />
                        <p className="text-xs text-neutral-500 mb-0.5">{entry.date}</p>
                        <p className="font-semibold text-primary text-sm">{entry.title}</p>
                        {entry.description && (
                            <div className="text-sm text-neutral-600 dark:text-neutral-500 mt-0.5 leading-relaxed">
                                <ReactMarkdown components={inlineMarkdownComponents}>
                                    {entry.description}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Timeline({
    title,
    educationTitle = 'Education',
    experienceTitle = 'Work Experience',
    education = [],
    experience = [],
}: TimelineProps) {
    if (education.length === 0 && experience.length === 0) {
        return null;
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            {title && <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {education.length > 0 && (
                    <TimelineColumn heading={educationTitle} icon="🎓" entries={education} />
                )}
                {experience.length > 0 && (
                    <TimelineColumn heading={experienceTitle} icon="💼" entries={experience} />
                )}
            </div>
        </motion.section>
    );
}