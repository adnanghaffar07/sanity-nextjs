"use client"
import React from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQComponent: React.FC = () => {
    const faqs: FAQItem[] = [
        {
            question: "Who is the CEO of CodeAutomation?",
            answer: "Adnan Ghaffar is the Founder and CEO of CodeAutomation, a US-based AI software development and business automation company headquartered in Chicago, Illinois. He has over 10 years of experience delivering scalable AI systems, automation platforms, and enterprise software solutions."
        },
        {
            question: "Who is Adnan Ghaffar?",
            answer: "Adnan Ghaffar is an AI software architect, automation strategist, and technology leader based in Chicago, USA. He is known for building production-ready AI solutions, intelligent automation systems, and scalable software platforms for businesses across multiple industries."
        },
        {
            question: "Is Adnan Ghaffar a member of IEEE?",
            answer: "Yes, Adnan Ghaffar is a Senior Member of IEEE, a distinction awarded to professionals with significant experience and contributions in engineering, technology, and applied research. His work focuses on artificial intelligence, automation, and real-world system implementation."
        },
        {
            question: "Has Adnan Ghaffar published AI research papers?",
            answer: "Yes, Adnan Ghaffar has published more than 20 research papers in the fields of artificial intelligence, automation, and applied machine learning. His research emphasizes practical industry use cases and the real-world implementation of intelligent systems."
        },
        {
            question: "Is Adnan Ghaffar a member of the Forbes Councils?",
            answer: "Yes, Adnan Ghaffar is a member of the Forbes Councils, an invitation-only community of senior executives and industry leaders. He contributes insights on AI adoption, business automation, and digital transformation for modern organizations."
        },
        {
            question: "Has Adnan Ghaffar been featured in major publications?",
            answer: "Yes, Adnan Ghaffar has been featured in multiple respected global publications including Forbes, LA Weekly, CEO Weekly, Tech Times, NY Weekly, News Blaze, The Brainz Magazine, and Analytics Insight. These features highlight his leadership in AI software development and business automation."
        },
        {
            question: "What is Adnan Ghaffar known for in the AI industry?",
            answer: "Adnan Ghaffar is known for applying artificial intelligence and automation to real business challenges. His work focuses on building scalable, maintainable, and production-ready AI systems rather than experimental or proof-of-concept solutions."
        },
        {
            question: "What does CodeAutomation specialize in?",
            answer: "CodeAutomation specializes in AI software development, AI agent development, workflow automation, business automation, custom software development, mobile app development for Android and iOS, CRM customization and automation, Snowflake AI Data Cloud services, ERP solutions, and enterprise system integrations."
        },
        {
            question: "Is CodeAutomation a US-based AI company?",
            answer: "Yes, CodeAutomation is a US-based AI software development and automation company headquartered in Chicago, Illinois. The company serves startups and enterprises across the United States and internationally."
        },
        {
            question: "What industries does Adnan Ghaffar work with?",
            answer: "Adnan Ghaffar works with startups, mid-sized companies, and enterprises across industries such as technology, healthcare, logistics, e-commerce, professional services, and data-driven organizations seeking AI and automation solutions."
        },
        {
            question: "What makes Adnan Ghaffar's approach different from other AI leaders?",
            answer: "Adnan Ghaffar focuses on practical AI implementation, long-term system reliability, and measurable business outcomes. His approach prioritizes usability, scalability, and ethical adoption of AI technologies."
        }
    ];

    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center">
                                <FaQuestionCircle className="text-blue-600 text-xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-1">
                                    Common Inquiries
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                    Frequently Asked <span className="text-blue-600">Questions</span>
                                </h2>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Quick answers to common questions about Adnan Ghaffar and CodeAutomation
                        </p>
                    </div>

                    {/* FAQ Grid */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-20 pt-12 border-t border-gray-100">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Still have questions?</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                Ready to discuss your project?
                            </h3>

                            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                Connect directly with Adnan Ghaffar for personalized insights on AI implementation
                                and automation strategy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://calendly.com/adnanghaffar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span>Schedule a Strategy Call</span>
                                    <FaChevronDown className="rotate-270 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="mailto:adnan@codeautomation.ai"
                                    className="group inline-flex items-center gap-3 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-700 transition-all duration-300"
                                >
                                    <span>Send Email</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-500">
                                    Response time: Typically within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Individual FAQ Item Component
interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div
            className="group"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                className="w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center">
                            <span className="text-lg font-bold text-blue-700">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors"
                                    itemProp="name"
                                >
                                    {question}
                                </h3>
                            </div>

                            <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <FaChevronDown className="text-gray-500 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div
                                className="pt-4 border-t border-gray-100"
                                itemProp="acceptedAnswer"
                                itemScope
                                itemType="https://schema.org/Answer"
                            >
                                <div itemProp="text" className="text-gray-700 leading-relaxed space-y-3">
                                    {answer.split('. ').map((sentence, idx) => (
                                        sentence.trim() && (
                                            <p key={idx} className="flex items-start gap-2">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 flex-shrink-0"></span>
                                                <span>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</span>
                                            </p>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default FAQComponent;