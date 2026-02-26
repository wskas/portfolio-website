import StackIcon from "tech-stack-icons";



const About = () => {
    return (
        <>
            <section id="about" className="py-10 px-4 md:py-25 md:-mx-[5%] bg-gray-100/30 backdrop-blur-sm load">
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="aboutme text-left md:pr-8">
                        <h2 className="section-title font-bold text-3xl mb-8">About Me</h2>
                        <p className="about-text text-gray-700 leading-relaxed mb-8">
                            Hello! I'm Winson Sutanto, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to sharpen my skills.
                        </p>
                    </div>
                    <div className="skills justify-self-start">
                        <h2 className="font-bold text-3xl mb-8 text-left"> My Tech Stack</h2>
                        <div className="flex flex-col gap-4">
                            <section className="frontend grid grid-cols-1 md:grid-cols-4 gap-8">
                                <h3 className="text-3xl col-span-1">Frontend</h3>
                                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4 text-sm sm:text-lg text-gray-700">
                                    
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="react" className="w-6"/>React.js</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="nextjs2" className="w-6"/>Next.js</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="tailwindcss" className="w-6"/>Tailwind CSS</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="typescript" className="w-6"/>TypeScript</li>
                                </ul>
                            </section>
                            <section className="backend grid grid-cols-1 md:grid-cols-4 gap-8">
                                <h3 className="text-3xl col-span-1">Backend</h3>
                                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4 text-sm sm:text-lg text-gray-700">
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="nodejs" className="w-6"/>Node.js</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="expressjs" className="w-6"/>Express.js</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="flask" className="w-6"/>Flask</li>
                                </ul>
                            </section>
                            <section className="database grid grid-cols-1 md:grid-cols-4 gap-8">
                                <h3 className="text-3xl col-span-1">Database</h3>
                                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4 text-sm sm:text-lg text-gray-700">
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="postgresql" className="w-6"/>PostgreSQL</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="mysql" className="w-6"/>MySQL</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="mongodb" className="w-6"/>MongoDB</li>
                                </ul>
                            </section>
                            <section className="DevOps grid grid-cols-1 md:grid-cols-4 gap-8">
                                <h3 className="text-3xl col-span-1">DevOps</h3>
                                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4 text-sm sm:text-lg text-gray-700">
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="docker" className="w-6"/>Docker</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="github" className="w-6"/>GitHub</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><StackIcon name="git" className="w-6" />Git</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><img src="octopusdeploy.svg" className="w-6"/>Octopus Deploy</li>
                                    <li className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:scale-110 transition-transform duration-300"><img src="teamcity.svg" className="w-6"/>TeamCity</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;