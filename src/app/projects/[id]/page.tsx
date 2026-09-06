import { notFound } from 'next/navigation';
import { getPageConfig } from '@/lib/content';
import { getConfig } from '@/lib/config';
import { getRuntimeI18nConfig } from '@/lib/i18n/config';
import { CardPageConfig, CardItem } from '@/types/page';
import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
import { Metadata } from 'next';

function findProject(id: string, locale?: string): CardItem | null {
    const config = getPageConfig<CardPageConfig>('projects', locale);
    if (!config) {
        return null;
    }
    return config.items.find((item) => item.number?.toLowerCase() === id.toLowerCase()) || null;
}

export function generateStaticParams() {
    const config = getPageConfig<CardPageConfig>('projects');
    if (!config) {
        return [];
    }
    return config.items
        .filter((item) => item.number)
        .map((item) => ({ id: item.number!.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = findProject(id);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.content,
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const baseConfig = getConfig();
    const runtimeI18n = getRuntimeI18nConfig(baseConfig.i18n);
    const targetLocales = runtimeI18n.enabled ? runtimeI18n.locales : [runtimeI18n.defaultLocale];

    const dataByLocale: Record<string, CardItem> = {};

    for (const locale of targetLocales) {
        const project = findProject(id, locale);
        if (project) {
            dataByLocale[locale] = project;
        }
    }

    const defaultProject = findProject(id);
    if (defaultProject) {
        dataByLocale[runtimeI18n.defaultLocale] = dataByLocale[runtimeI18n.defaultLocale] || defaultProject;
    }

    if (Object.keys(dataByLocale).length === 0) {
        notFound();
    }

    return <ProjectDetailClient dataByLocale={dataByLocale} defaultLocale={runtimeI18n.defaultLocale} />;
}
