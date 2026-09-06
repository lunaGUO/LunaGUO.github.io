export interface BasePageConfig {
    type: 'about' | 'publication' | 'card' | 'text';
    title: string;
    description?: string;
}

export interface PublicationPageConfig extends BasePageConfig {
    type: 'publication';
    source: string;
    citations?: number;
    h_index?: number;
    scholar_url?: string;
    citations_updated?: string;
}

export interface TextPageConfig extends BasePageConfig {
    type: 'text';
    source: string;
}

export interface CardItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
    tags?: string[];
    link?: string;
    image?: string;
    number?: string;
    details?: string;
    papers?: string[];
}

export interface CardPageConfig extends BasePageConfig {
    type: 'card';
    items: CardItem[];
}
