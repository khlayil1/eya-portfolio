import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Briefcase,
    Award,
    ChevronRight,
    ExternalLink,
    Star,
    CheckCircle,
    Users,
    Target,
    Sparkles,
    ArrowRight
} from "lucide-react";

const App = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('about');

    // Initialize the active section after component mounts
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Get all sections and find the one currently in view
            const sections = ['about', 'experience', 'education', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 300; // Adjust offset as needed

            let currentSection = 'about';

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = sections[i];
                        break;
                    }

                    // If we've scrolled past this section but haven't found a match yet
                    if (scrollPosition >= sectionTop + sectionHeight) {
                        currentSection = sections[i];
                    }
                }
            }

            setActiveSection(currentSection);
        };

        // Initial check
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const personalInfo = {
        name: "Eya Belhaj Salah",
        email: "eya.belhaaj@gmail.com",
        phone: "+216-50-942-995",
        location: "Tunis",
        title: "Head of Event Services",
        tagline: "Driving exceptional outcomes through strategic leadership and innovative solutions"
    };

    const education = [
        {
            degree: "Master in English for Communication",
            institution: "Higher Institute of Languages Tunis (ISLT)",
            year: "2019"
        },
        {
            degree: "Bachelor Degree in Business English and Communication",
            institution: "Higher Institute of Languages Nabeul (ISLN)",
            year: "2017"
        }
    ];

    const experience = [
        {
            title: "Head of Event Services",
            company: "Division50",
            period: "September 2024 - Present",
            achievements: [
                "Conducted strategic workshops for event service team optimization",
                "Managed a multidisciplinary team including Account Managers, Team Leaders, and QA specialists",
                "Successfully led the execution of high-profile events such as MBC 2024 (2nd edition), Qatar-KSA Trade Mission 2025, ARN Survey Event, China Homelife 2024, and Corus Canada, handling the entire lifecycle from onboarding and project planning to technical setup and results analysis",
                "Actively contributed to sales meetings by sharing technical insights, project setups, and achievements to align with organizational goals"
            ],
            highlights: ["Team Leadership", "Strategic Planning", "Event Execution"]
        },
        {
            title: "Account Manager",
            company: "Division50",
            period: "September 2023 - August 2024",
            achievements: [
                "Managing client onboarding, conducted meetings, and led campaign creation and management across LinkedIn, email, WhatsApp, and calling channels",
                "Producing daily and monthly reports on campaign performance, ensuring quality assurance and optimizing client satisfaction",
                "Coaching and onboarding internal and call center SDRs, organizing onboarding workshops for new team members",
                "Utilizing Apollo, Findy Email, Google Maps, and Instant Data Scraper for effective lead generation strategies"
            ],
            projects: [
                "MBC 2023 Event: Led multi-channel campaigns, achieving 3,000 attendees in Saudi Arabia",
                "China Homelife Expo: Successfully managed campaigns using LinkedIn, email, WhatsApp, and calling strategies",
                "ARN Event 2023: Attained the highest show-up and turnout rates to date in UAE",
                "MBC Virtual Event 2024: Organized a fully virtual event with exclusive online meetings",
                "ACM Project (6 May - 6 June): Directed campaign creation and managed call center agents",
                "News All Access Australia (NewsCorp) (9 May - 30 May): Organized Business Luncheon event with a 30% increase in attendance"
            ],
            highlights: ["Client Management", "Multi-channel Campaigns", "Team Development"]
        },
        {
            title: "Customer Success Representative",
            company: "Division50",
            period: "May 2023 - September 2023",
            achievements: [
                "Led the Saudi market expansion for Zid company",
                "Managed multi-channel campaigns, resulting in a 25% increase in client engagement",
                "Prepared daily and weekly reports for clients",
                "Conducted copywriting campaigns",
                "Developed client scripts and led meetings",
                "Booked meetings, followed up",
                "Qualified leads through D50 omni-channels"
            ],
            highlights: ["Market Expansion", "Client Engagement", "Data Analysis"]
        },
        {
            title: "Customer Service Specialist",
            company: "Airalo",
            period: "2022 - 2023",
            achievements: [
                "Coordinate with the international support department to meet customer satisfaction goals",
                "Respond to all feedback on social media and different apps: Appfollow, Facebook, Instagram, etc.",
                "Contribute to customer service analytics and detailed reports with trilingual assistance for users",
                "Provide necessary technical assistance for all devices (IOS, Android, smartwatch)",
                "Excel in Airalo panels and assist via chats and emails while working simultaneously on internal panels with all the providers"
            ],
            highlights: ["Technical Support", "Analytics", "Multilingual Support"]
        },
        {
            title: "Customer Service Specialist",
            company: "Transcom / Vinted",
            period: "2019 - 2022",
            achievements: [
                "Provide excellent customer service via email, live chat, video, phone, and social media channels",
                "Identify common problems and escalate them to management, along with possible suggestions for improvement",
                "Liaise with colleagues or managers to find the best solutions to customers' issues"
            ],
            highlights: ["Customer Experience", "Problem Solving", "Cross-functional Collaboration"]
        },
        {
            title: "Commercial Director",
            company: "Triumph Arches Travel Tourism",
            period: "August 2019 - October 2019",
            achievements: [
                "Meet with clients to determine travel needs, budgets, and preferences",
                "Sell and coordinate transportation, accommodations, insurance, tours, and activities",
                "Collect payments, book travel arrangements, and pay applicable fees while handling travel issues, conflicts, and complaints"
            ],
            highlights: ["Sales Strategy", "Client Relations", "Travel Coordination"]
        }
    ];

    const skills = [
        { name: "Strategy & Execution", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Technical Event Solutions", level: 88 },
        { name: "CRM & Data Scraping", level: 85 },
        { name: "Multi-channel Campaigns", level: 92 },
        { name: "Client Relationship Management", level: 94 },
        { name: "Project Planning", level: 89 },
        { name: "Sales Techniques", level: 87 }
    ];

    const certifications = [
        "December 2024: GoMyCode - Digital Marketing (Meta Certified)",
        "December 2018: MOOCs certificates",
        "July 2017: TOEIC exam",
        "May 2017: First Aid training with Red Crescent",
        "March 2017: Training in Sales Techniques for Travel Agencies (via Amadeus)",
        "April 2016: Training with Darna Academy about Volunteering and Civic Participation"
    ];

    const languages = [
        { name: "English", level: "Fluent", proficiency: 95 },
        { name: "French", level: "Fluent", proficiency: 90 },
        { name: "Arabic", level: "Native", proficiency: 100 }
    ];

    // Function to scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200">
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b-2 border-blue-600 h-16'
                        : 'bg-white shadow-xl border-b-4 border-blue-600 h-24'
                }`}
            >
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ease-in-out ${
                    isScrolled ? 'py-2' : 'py-4'
                }`}>
                    <div className={`flex ${isScrolled ? 'items-center' : 'flex-col lg:flex-row'} gap-4 lg:gap-6 h-full`}>
                        <div className={`${
                            isScrolled
                                ? 'w-10 h-10 text-xl'
                                : 'w-20 h-20 lg:w-24 lg:h-24 text-3xl lg:text-4xl'
                        } bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                            EB
                        </div>

                        {!isScrolled && (
                            <div className="text-center lg:text-left flex-1">
                                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-1">
                                    {personalInfo.name}
                                </h1>
                                <p className="text-lg lg:text-xl text-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-0">
                                    {personalInfo.title}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`bg-white/90 backdrop-blur-sm border-t transition-all duration-300 ease-in-out ${
                    isScrolled ? 'border-gray-200 py-1' : 'border-gray-200 py-3'
                }`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex space-x-6 lg:space-x-8">
                            {['about', 'experience', 'education', 'skills', 'contact'].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`py-2 px-2 font-medium cursor-pointer text-sm lg:text-base transition-all duration-200 ${
                                        activeSection === item
                                            ? 'border-b-2 border-blue-600 text-blue-600'
                                            : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
                                    }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
                {/* About Section */}
                <section id="about" className="mb-20 scroll-mt-24">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 ease-out transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-6 transform transition-all duration-500 ease-out hover:scale-105">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Professional Profile</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <p className="text-lg leading-relaxed text-gray-700 mb-8 animate-slideUp">
                                    Versatile and results-driven professional with extensive experience in event services and team management. Skilled in leading high-profile events across the UAE, KSA, Australia, and Canada, optimizing technical setups to meet client goals, and driving teams to success to deliver exceptional outcomes. Fluent in English, French, and Arabic.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    {[
                                        { value: "5+", label: "Years Experience", color: "from-blue-50 to-blue-100", textColor: "text-blue-600" },
                                        { value: "15+", label: "Projects Completed", color: "from-purple-50 to-purple-100", textColor: "text-purple-600" },
                                        { value: "100%", label: "Client Satisfaction", color: "from-green-50 to-green-100", textColor: "text-green-600" }
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className={`text-center p-6 ${stat.color} rounded-2xl border border-gray-100 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg cursor-pointer`}
                                            style={{ animationDelay: `${index * 200}ms` }}
                                        >
                                            <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.value}</div>
                                            <div className="text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Expertise</h3>
                                <div className="space-y-3">
                                    {["Event Leadership", "Team Management", "Strategic Planning", "Client Relations", "Global Events", "Performance Optimization"].map((expertise, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 group hover:bg-blue-50 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 font-medium">{expertise}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="mb-20 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-10 transform transition-all duration-500 ease-out">
                        <Briefcase className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Professional Experience</h2>
                    </div>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 group cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                                            {job.title}
                                        </h3>
                                        <p className="text-xl text-gradient-to-r from-blue-600 to-purple-600 font-semibold">{job.company}</p>
                                    </div>
                                    <span className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-100 mt-4 lg:mt-0 transform transition-all duration-300 hover:scale-105">
                    {job.period}
                  </span>
                                </div>

                                {/* Highlights */}
                                {job.highlights && (
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {job.highlights.map((highlight, highlightIndex) => (
                                            <span
                                                key={highlightIndex}
                                                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                                            >
                        <Star className="w-4 h-4 mr-2 text-blue-500" />
                                                {highlight}
                      </span>
                                        ))}
                                    </div>
                                )}

                                <ul className="space-y-4 mb-6">
                                    {job.achievements.map((achievement, achievementIndex) => (
                                        <li
                                            key={achievementIndex}
                                            className="flex items-start gap-4 group/achievement hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0 transform transition-all duration-300 group-hover/achievement:scale-125"></div>
                                            <span className="text-gray-700 leading-relaxed text-lg group-hover/achievement:text-gray-900 transition-colors duration-200">
                        {achievement}
                      </span>
                                        </li>
                                    ))}
                                </ul>

                                {job.projects && (
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:shadow-md">
                                        <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                                            <ExternalLink className="w-5 h-5 mr-3 text-green-700" />
                                            Key Projects & Achievements
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {job.projects.map((project, projectIndex) => (
                                                <div
                                                    key={projectIndex}
                                                    className="flex items-start p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                                                >
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                                                    <p className="text-gray-700 leading-relaxed">{project}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section - Full Width */}
                <section id="education" className="mb-20 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-10 transform transition-all duration-500 ease-out">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Education</h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 ease-out transform hover:-translate-y-1">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg text-gradient-to-r from-blue-600 to-purple-600 font-semibold">{edu.institution}</p>
                                            <div className="flex items-center gap-2 mt-3">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-500 font-medium">{edu.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section - Full Width */}
                <section id="skills" className="mb-20 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-10 transform transition-all duration-500 ease-out">
                        <Target className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Skills & Expertise</h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 ease-out transform hover:-translate-y-1">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Skills</h3>
                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex justify-between mb-3">
                                                <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                                                <span className="text-blue-600 font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden border border-gray-100">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">Languages</h3>
                                <div className="space-y-6">
                                    {languages.map((lang, index) => (
                                        <div
                                            key={index}
                                            className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                                            style={{ animationDelay: `${index * 100 + 500}ms` }}
                                        >
                                            <div className="flex justify-between mb-3">
                                                <span className="font-semibold text-gray-800 text-lg">{lang.name}</span>
                                                <span className="text-gray-500">{lang.level}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden border border-gray-100">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                                                    style={{ width: `${lang.proficiency}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8 transform transition-all duration-500 ease-out">
                        <Award className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 transform transition-all duration-300 group-hover:scale-125"></div>
                                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-200">
                                        {cert}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-24">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl transform transition-all duration-500 ease-out hover:shadow-3xl hover:-translate-y-1 cursor-pointer">
                        <div className="text-center mb-10 transform transition-all duration-500 ease-out">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                I'm always open to discussing new opportunities and exciting projects. Let's connect and explore how we can work together.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center group transform transition-all duration-500 ease-out hover:scale-105">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-200">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Email</h3>
                                <p className="text-blue-100">{personalInfo.email}</p>
                            </div>

                            <div className="text-center group transform transition-all duration-500 ease-out hover:scale-105">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-200">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                <p className="text-blue-100">{personalInfo.phone}</p>
                            </div>

                            <div className="text-center group transform transition-all duration-500 ease-out hover:scale-105">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-200">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Location</h3>
                                <p className="text-blue-100">{personalInfo.location}</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto group transform transition-all duration-500 ease-out hover:scale-105">
                                Get In Touch
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © 2025 Eya Belhaj Salah. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Add custom styles for animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .cursor-pointer:hover {
          transform: translateY(-2px);
        }
      `}</style>
        </div>
    );
};

export default App;
