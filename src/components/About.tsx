const About = () => {
    return (
        <>
        <section id="about" className="about-section h-screen flex items-center py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title font-bold text-3xl mb-8">About Me</h2>
                <p className="about-text text-gray-700 leading-relaxed mb-8">
                    Hello! I'm Winson Sutanto, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to sharpen my skills.
                </p>
                <h2 className="font-bold text-3xl mb-8"> My Tech Stack</h2>
                <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <section className="frontend bg-white p-4 rounded shadow">
                        <h3>Frontend</h3>
                        <ul className="skills-list text-gray-700">
                            <li className="">React.js</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </section>
                    <section className="backend">
                        <h3>Backend</h3>
                        <ul className="skills-list list-disc list-inside text-gray-700">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Flask</li>
                        </ul>
                    </section>
                    <section className="database">
                        <h3>Database</h3>
                        <ul className="skills-list list-disc list-inside text-gray-700">
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </section>
                    <section className="DevOps">
                        <h3>DevOps</h3>
                        <ul className="skills-list list-disc list-inside text-gray-700">
                            <li>Docker</li>
                            <li>GitHub</li>
                            <li>Git</li>
                            <li>Octopus Deploy</li>
                            <li>TeamCity</li>
                        </ul>
                    </section>
                    {/* <h3 className="skills-title font-semibold text-xl mt-8 mb-4">Skills</h3>
                    <ul className="skills-list list-disc list-inside text-gray-700">
                        <li>JavaScript (ES6+), TypeScript</li>
                        <li>React, Next.js</li>
                        <li>Node.js, Express</li>
                        <li>HTML5, CSS3, Tailwind CSS</li>
                        <li>Git, GitHub</li>
                    </ul> */}
                </div>
            </div>
        </section>
        </>
    )
}

export default About;