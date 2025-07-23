import React from 'react'

const AIEducationSection = () => {
    return (
        <section>
            <div className='bg-[#1D92FB] bg-opacity-10 '>
                <section className="bg-muted py-10 px-4 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            How to Make the Most of AI Tools
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover, compare, and implement the right AI tools to automate your business workflows — without the tech overwhelm.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Step 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4 text-primary font-bold">1</div>
                            <h3 className="text-xl font-semibold mb-2">Explore Tools by Category</h3>
                            <p className="text-muted-foreground">
                                Browse AI tools by use case—like marketing, analytics, design, or development—to find what fits your workflow.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4 text-primary font-bold">2</div>
                            <h3 className="text-xl font-semibold mb-2">Compare & Discover Features</h3>
                            <p className="text-muted-foreground">
                                Each tool card includes key features, use cases, and tags to help you compare and decide faster.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4 text-primary font-bold">3</div>
                            <h3 className="text-xl font-semibold mb-2">Start Automating Smarter</h3>
                            <p className="text-muted-foreground">
                                Use your chosen tools to reduce manual work and let AI handle the repetitive tasks — so you can focus on strategy.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="max-w-7xl mx-auto py-20 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Real Use Cases, Real Results
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you&apos;re streamlining content creation, automating marketing, or optimizing customer support — discover tools that solve your actual business challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Use Case 1 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                        <p className="text-muted-foreground">
                            Generate blogs, emails, product descriptions, and more — faster than ever with AI copy tools.
                        </p>
                    </div>

                    {/* Use Case 2 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Marketing Automation</h3>
                        <p className="text-muted-foreground">
                            Plan, launch, and optimize marketing campaigns using AI-powered CRM, email, and ad tools.
                        </p>
                    </div>

                    {/* Use Case 3 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                        <p className="text-muted-foreground">
                            Use chatbots and helpdesk automation to offer 24/7 support without human burnout.
                        </p>
                    </div>

                    {/* Use Case 4 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Design & Creativity</h3>
                        <p className="text-muted-foreground">
                            Auto-generate brand assets, images, UI mockups, and social creatives using AI design tools.
                        </p>
                    </div>

                    {/* Use Case 5 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
                        <p className="text-muted-foreground">
                            Visualize, forecast, and make better decisions using AI-powered data and BI tools.
                        </p>
                    </div>

                    {/* Use Case 6 */}
                    <div className="bg-[#1D92FB] bg-opacity-10  p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">Task & Workflow Automation</h3>
                        <p className="text-muted-foreground">
                            Eliminate repetitive tasks and connect your stack using AI-based Zapier alternatives.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AIEducationSection