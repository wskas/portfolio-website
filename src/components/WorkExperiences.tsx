const WorkExperiences = () => {
    return (
        <section id="workexperiences" className="py-16">
            <div className="container px-4">
                <h2 className="text-3xl font-bold mb-8">Work Experiences</h2>
                <div className="space-y-8">
                    <div className="text-left">
                        <h3 className="text-xl font-semibold">eBRAM International Online Dispute Resolution Centre Limited</h3>
                        <p className="text-gray-600">Hong Kong SAR, China</p>
                        <p className="text-gray-600">Jun 2024 - Sept 2024</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>Architected a CI/CD pipeline using TeamCity and Octopus Deploy to address lengthy and
                            error-prone deployment cycles, achieving an 87.5% reduction in deployment cycle time</li>
                            <li>Developed a full-stack user acceptance testing (UAT) form with Next.js, PostgreSQL, and Prisma
                            ORM; containerized with Docker and deployed on Apache, reducing QA bug-reporting time by 25%</li>
                            <li>Diagnosed and resolved 5+ backend/frontend bugs on ODR platform, boosting system stability</li>
                            <li>Conducted code reviews and collaborated with cross-functional teams to implement new features and
                            optimize workflows, resulting in 10% faster feature delivery</li>
                            <li>Documented deployment processes and best practices, streamlining onboarding for new developers
                            and reducing training time by 30%</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-semibold">Barkmall HK</h3>
                        <p className="text-gray-600">Hong Kong SAR, China</p>
                        <p className="text-gray-600">Jun 2023 - Sept 2023</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>Revamped front-end UI/UX for e-commerce platform using Magento 2, delivering 5 new responsive
                            page templates and improving mobile conversion rates by 15% (post-launch analytics).</li>
                            <li>Collaborated with UI/UX designer to translate design mockups into polished, interactive e-commerce
                            experience, enhancing user engagement.</li>
                        </ul>
                    </div>
                    <div className="absolute md:left-8 left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"><div className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"></div></div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperiences;