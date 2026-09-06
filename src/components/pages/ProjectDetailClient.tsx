'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { CardItem } from '@/types/page';
import { useLocaleStore } from '@/lib/stores/localeStore';

const markdownComponents = {
    p: ({ children }: React.ComponentProps<'p'>) => <p className="mb-3 last:mb-0">{children}</p>,
    ul: ({ children }: React.ComponentProps<'ul'>) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
    ol: ({ children }: React.ComponentProps<'ol'>) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
    li: ({ children }: React.ComponentProps<'li'>) => <li className="mb-1">{children}</li>,
    a: ({ ...props }) => (
        <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
        />
    ),
    blockquote: ({ children }: React.ComponentProps<'blockquote'>) => (
        <blockquote className="border-l-4 border-accent/50 pl-4 italic my-4 text-neutral-600 dark:text-neutral-500">
            {children}
        </blockquote>
    ),
    strong: ({ children }: React.ComponentProps<'strong'>) => <strong className="font-semibold text-primary">{children}</strong>,
    em: ({ children }: React.ComponentProps<'em'>) => <em className="italic">{children}</em>,
    code: ({ children }: React.ComponentProps<'code'>) => (
        <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[0.95em]">{children}</code>
    ),
};

interface ProjectDetailClientProps {
    dataByLocale: Record<string, CardItem>;
    defaultLocale: string;
}

export default function ProjectDetailClient({ dataByLocale, defaultLocale }: ProjectDetailClientProps) {
    const locale = useLocaleStore((state) => state.locale);
    const fallback = dataByLocale[defaultLocale] || Object.values(dataByLocale)[0];
    const item = dataByLocale[locale] || fallback;

    if (!item) {
        return null;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
                href="/projects"
                className="inline-block mb-6 text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
            >
                ← Back to Projects
            </Link>

            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                        {item.number && (
                            <span className="text-accent font-mono text-base font-medium mr-2 align-middle">
                                [{item.number}]
                            </span>
                        )}
                        {item.title}
                    </h1>
                    {item.date && (
                        <span className="text-sm text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                            {item.date}
                        </span>
                    )}
                </div>

                {item.subtitle && (
                    <p className="text-base text-accent font-medium mb-4">{item.subtitle}</p>
                )}

                {item.content && (
                    <div className="text-base text-neutral-600 dark:text-neutral-500 leading-relaxed mb-6">
                        <ReactMarkdown components={markdownComponents}>
                            {item.content}
                        </ReactMarkdown>
                    </div>
                )}

                {item.image && (
                    <div className="mb-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
                        />
                    </div>
                )}

                {item.details && (
                    <div className="text-base text-neutral-600 dark:text-neutral-500 leading-relaxed">
                        <ReactMarkdown components={markdownComponents}>
                            {item.details}
                        </ReactMarkdown>
                    </div>
                )}

                {item.papers && item.papers.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-6">
                        <span className="text-xs text-neutral-500 font-medium">Related publications:</span>
                        {item.papers.map(code => (
                            <Link
                                key={code}
                                href={`/publications#${code}`}
                                className="text-xs font-mono text-accent hover:text-accent-dark bg-accent/10 hover:bg-accent/20 px-2 py-1 rounded transition-colors duration-150"
                            >
                                [{code}]
                            </Link>
                        ))}
                    </div>
                )}

                {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-6">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
