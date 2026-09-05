'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

function pubHref(code: string): string {
    return `/publications#${code}`;
}

function projectHref(code: string): string {
    return `/projects#${code}`;
}

function refHref(code: string): string {
    return code.startsWith('P') ? projectHref(code) : pubHref(code);
}

function Ref({ code }: { code: string }) {
    return (
        <a href={refHref(code)} className="ref-link">
            <tspan>{code}</tspan>
        </a>
    );
}

/** Renders a "(J6, C2, P5)"-style reference list where every code is its own link. */
function RefGroup({ parts }: { parts: string[] }) {
    return (
        <>
            <tspan>[</tspan>
            {parts.map((part, i) => (
                <Fragment key={part}>
                    {i > 0 && <tspan>, </tspan>}
                    <Ref code={part} />
                </Fragment>
            ))}
            <tspan>]</tspan>
        </>
    );
}

export default function ResearchOverview() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginTop: '-0.75rem', marginBottom: '-0.25rem' }}
        >
            <p className="text-base font-semibold text-primary mb-0.5">My research includes:</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 1000"
                className="w-full h-auto"
                role="img"
                aria-label="Research landscape overview: AI &amp; Big Data, Controls, and Simulation, with links to related publications and projects"
            >
                <defs>
                    <style>{`
                        .cls-2, .cls-3, .cls-4, .cls-6, .cls-7, .cls-8, .cls-9 { isolation: isolate; }
                        .cls-2, .cls-3, .cls-6, .cls-7, .cls-8, .cls-9 { font-family: ArialMT, Arial; }
                        .cls-10 { fill: url(#ro-linear-gradient); stroke-width: 0px; }
                        .cls-11 { fill: url(#ro-radial-gradient-2); stroke: #df765b; }
                        .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16 { stroke-width: 3px; }
                        .cls-2 { fill: #238f85; }
                        .cls-2, .cls-3, .cls-6 { font-size: 32px; letter-spacing: 0em; }
                        .cls-3 { fill: #d9674e; }
                        .cls-12 { stroke: #2f69b8; }
                        .cls-12, .cls-13, .cls-15 { stroke-linecap: round; }
                        .cls-12, .cls-13, .cls-15, .cls-20 { fill: none; }
                        .cls-7 { font-size: 25px; }
                        .cls-6 { fill: #2f69b8; }
                        .cls-13 { stroke: #d9674e; }
                        .cls-7, .cls-8 { fill: #58657a; }
                        .cls-8 { font-size: 26px; }
                        .cls-9 { fill: #17233a; font-size: 35px; }
                        .cls-14 { fill: url(#ro-radial-gradient-3); stroke: #319c91; }
                        .cls-15 { stroke: #238f85; }
                        .cls-16 { fill: url(#ro-radial-gradient); stroke: #3977d6; }
                        .cls-20 { stroke: #fff; stroke-opacity: .7; stroke-width: 2px; }
                        .ref-link { fill: inherit; cursor: pointer; }
                        .ref-link:hover { fill: var(--accent); text-decoration: underline; }
                    `}</style>
                    <linearGradient id="ro-linear-gradient" x1="501.7" y1="920" x2="502.7" y2="919" gradientTransform="translate(-802698 919967.8) scale(1600 -1000)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fbfdff" />
                        <stop offset=".5" stopColor="#fff" />
                        <stop offset="1" stopColor="#f7fafc" />
                    </linearGradient>
                    <radialGradient id="ro-radial-gradient" cx="1003.1" cy="0" fx="1003.1" fy="0" r=".7" gradientTransform="translate(-782026 276.8) scale(780 503.8)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#bcd7ff" stopOpacity=".5" />
                        <stop offset="1" stopColor="#6e9fe8" stopOpacity=".2" />
                    </radialGradient>
                    <radialGradient id="ro-radial-gradient-2" cx="1003.4" cy="0" fx="1003.4" fy="0" r=".8" gradientTransform="translate(-781391 276.8) scale(780 503.8)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffd5c4" stopOpacity=".5" />
                        <stop offset="1" stopColor="#e9997f" stopOpacity=".1" />
                    </radialGradient>
                    <radialGradient id="ro-radial-gradient-3" cx="1003.3" cy="-.1" fx="1003.3" fy="-.1" r=".8" gradientTransform="translate(-687794.2 652.6) scale(686.5 361.5)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#bde9df" stopOpacity=".5" />
                        <stop offset="1" stopColor="#62b9aa" stopOpacity=".1" />
                    </radialGradient>
                </defs>
                <g id="ro-background">
                    <rect className="cls-10" y=".9" width="1600" height="1000" rx="28" ry="28" />
                </g>
                <g id="ro-Layer_1">
                    <g id="ro-domains">
                        <ellipse className="cls-16" cx="510" cy="356" rx="405" ry="246" />
                        <ellipse className="cls-11" cx="1085" cy="356" rx="405" ry="246" />
                        <ellipse className="cls-20" cx="510" cy="356" rx="396.4" ry="238.1" />
                        <ellipse className="cls-20" cx="1085" cy="356" rx="396.4" ry="238.1" />
                        <g>
                            <ellipse className="cls-14" cx="931.7" cy="698" rx="430" ry="220" />
                            <ellipse className="cls-20" cx="931.7" cy="698" rx="422" ry="211" />
                        </g>
                    </g>
                    <g id="ro-headings">
                        <text className="cls-6" transform="translate(420 180)"><tspan x="0" y="0">AI &amp; BIG DATA</tspan></text>
                        <line className="cls-12" x1="420" y1="199" x2="496" y2="199" />
                        <text className="cls-3" transform="translate(1025 180)"><tspan x="0" y="0">CONTROLS</tspan></text>
                        <line className="cls-13" x1="1025" y1="199" x2="1075" y2="199" />
                        <text className="cls-2" transform="translate(1160 698)"><tspan x="0" y="0">SIMULATION</tspan></text>
                        <line className="cls-15" x1="1160" y1="716" x2="1224" y2="716" />
                    </g>
                    <g id="ro-ai-topics">
                        <text className="cls-9" transform="translate(370.3 276.8)"><tspan x="0" y="0">Data-driven</tspan></text>
                        <text className="cls-9" transform="translate(336.5 319.8)"><tspan x="0" y="0">energy prediction</tspan></text>
                        <text className="cls-7" transform="translate(425.4 353.2)"><RefGroup parts={['J2']} /></text>
                        <text className="cls-9" transform="translate(379.5 413.5)"><tspan x="0" y="0">Large-scale</tspan></text>
                        <text className="cls-9" transform="translate(371.3 456.5)"><tspan x="0" y="0">data analysis</tspan></text>
                        <text className="cls-7" transform="translate(415.6 489.9)"><RefGroup parts={['J10', 'P6']} /></text>
                    </g>
                    <g id="ro-ai-controls-topics">
                        <text className="cls-9" transform="translate(780.9 282.2)"><tspan x="0" y="0">RL</tspan></text>
                        <text className="cls-7" transform="translate(752.8 320.4)"><RefGroup parts={['J6', 'C2', 'P5']} /></text>
                        <text className="cls-9" transform="translate(764.9 378)"><tspan x="0" y="0">LLM</tspan></text>
                        <text className="cls-7" transform="translate(752.4 416.2)"><tspan x="0" y="0">[on-going]</tspan></text>
                    </g>
                    <g id="ro-controls-topics">
                        <text className="cls-9" transform="translate(966.3 252.2)"><tspan x="0" y="0">Model-predictive control</tspan></text>
                        <text className="cls-8" transform="translate(1094.9 291.2)"><RefGroup parts={['J9']} /></text>
                        <text className="cls-9" transform="translate(952.1 367.6)"><tspan x="0" y="0">Occupant-centric Control</tspan></text>
                        <text className="cls-8" transform="translate(1015.1 406.6)">
                            <tspan>[</tspan>
                            <Ref code="J5" />
                            <tspan>, </tspan>
                            <Ref code="J7" />
                            <tspan>–</tspan>
                            <a href={pubHref('J8')} className="ref-link"><tspan>8</tspan></a>
                            <tspan>, </tspan>
                            <Ref code="J11" />
                            <tspan>, </tspan>
                            <Ref code="C4" />
                            <tspan>, </tspan>
                            <Ref code="P3" />
                            <tspan>]</tspan>
                        </text>
                    </g>
                    <g id="ro-controls-simulation-topics">
                        <text className="cls-9" transform="translate(833 544.5)"><tspan x="0" y="0">Control-oriented model</tspan></text>
                        <text className="cls-7" transform="translate(980.8 583.9)"><tspan>[</tspan><Ref code="C2" /><tspan>]</tspan></text>
                    </g>
                    <g id="ro-simulation-topics">
                        <text className="cls-9" transform="translate(630 670)"><tspan x="0" y="0">Urban building energy modeling</tspan></text>
                        <text className="cls-7" transform="translate(774 704)">
                            <tspan>[on-going, </tspan>
                            <Ref code="P7" />
                            <tspan>]</tspan>
                        </text>
                        <text className="cls-9" transform="translate(722 752)"><tspan x="0" y="0">Cleanroom simulation</tspan></text>
                        <text className="cls-7" transform="translate(774 786)">
                            <tspan>[on-going, </tspan>
                            <Ref code="P5" />
                            <tspan>]</tspan>
                        </text>
                        <text className="cls-9" transform="translate(777.4 834)"><tspan x="0" y="0">BIM to BEM</tspan></text>
                        <text className="cls-7" transform="translate(817.8 868)"><RefGroup parts={['C1', 'P1']} /></text>
                    </g>
                </g>
            </svg>
        </motion.section>
    );
}
