// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 8",
        title: "Intro to Systems Integration",
        lab: "Lab 1: Online Business Arch",
        topics: ["Scope of SIA and key concepts", "Systems thinking approach"],
        outcome: "Explain scope, purpose, and key concepts of SIA.",
        labDetails: {
            title: "🧪 Lab 1: Architecture of Popular Businesses",
            items: [
                "Analyze architectures of Netflix, Uber, Amazon, etc.",
                "Reverse-engineer high-level system components.",
                "Objective: Design exercise & diagramming practice."
            ]
        }
    },
    {
        week: 2,
        date: "Jan 15",
        title: "Role of Systems Architect",
        lab: "Lab 2: Vanilla User Auth",
        topics: ["Responsibilities & Skills", "Decision-making in architecture"],
        outcome: "Describe role and tasks of a systems architect.",
        labDetails: {
            title: "🧪 Lab 2: Vanilla User Auth Programming",
            items: [
                "Program vanilla registration form (HTML/PHP/Node).",
                "Establish database connection and user table.",
                "Objective: Implement auth without frameworks."
            ]
        }
    },
    {
        week: 3,
        date: "Jan 22",
        title: "Monolith vs Microservices",
        lab: "Lab 3: Auth Modeling (OTP/Captcha)",
        topics: ["Characteristics of Monoliths", "Benefits of Microservices"],
        outcome: "Differentiate monolithic vs microservices.",
        labDetails: {
            title: "🧪 Lab 3: Modeling Captcha & Email OTP",
            items: [
                "Design the flow for Email OTP verification.",
                "Create Business Process Diagrams for 2FA.",
                "Objective: Modeling secure auth flows."
            ]
        }
    },
    {
        week: 4,
        date: "Jan 29",
        title: "Architecture Modeling",
        lab: "Lab 4: Cart & Payment Gateway",
        topics: ["Architecture views & boundaries", "C4 Model vs UML"],
        outcome: "Distinguish system vs software architecture.",
        labDetails: {
            title: "🧪 Lab 4: Shopping Cart & Payment",
            items: [
                "Diagram payment sequence flows.",
                "Implement cart workflow and integrate online payment services.",
                "Discuss idempotency and rollback concepts."
            ]
        }
    },
    {
        week: 5,
        date: "Feb 5",
        title: "Business Process (BPMN)",
        lab: "Lab 5: POS & Notifications",
        topics: ["BPMN elements & orchestration", "Integration touchpoints"],
        outcome: "Create BPMN diagrams representing processes.",
        labDetails: {
            title: "🧪 Lab 5: POS Module & Real-Time Notifications",
            items: [
                "Compare POS vs online flows.",
                "Demonstrate MS Teams/email notifications via Webhooks.",
                "Review POS-related Sequence diagrams."
            ]
        }
    },
    {
        week: 6,
        date: "Feb 12",
        title: "UML System Modeling",
        lab: "Lab 6: Msg Queues & Logging",
        topics: ["Use Case Diagrams", "Class & Sequence Diagrams"],
        outcome: "Create UML diagrams for system requirements.",
        labDetails: {
            title: "🧪 Lab 6: Message Queue & Newsletter",
            items: [
                "Explain message broker concepts visually.",
                "Demonstrate producer–consumer pattern for Async tasks.",
                "Implement newsletter and logging subsystem."
            ]
        }
    },
    {
        week: 7,
        date: "Feb 19",
        title: "Integration Flows",
        lab: "Lab 7: Enterprise (ERP/RFID)",
        topics: ["Integration patterns in UML", "Orchestration logic"],
        outcome: "Produce diagrams depicting integration flows.",
        labDetails: {
            title: "🧪 Lab 7: ERP, Logistics & RFID DTR",
            items: [
                "Demonstrate RFID reader input (simulation or actual).",
                "Explain DTR → Payroll → ERP flow.",
                "Review Component diagrams for Hardware integration."
            ]
        }
    },
    {
        week: 8,
        date: "Feb 26",
        title: "SysML Architecture",
        lab: "Lab 8: Mobile App API",
        topics: ["Block definition diagrams", "Internal block diagrams"],
        outcome: "Create SysML diagrams for high-level architecture.",
        labDetails: {
            title: "🧪 Lab 8: Low-Code Mobile Integration",
            items: [
                "Demonstrate API testing (Postman).",
                "Explain API contracts and versioning.",
                "Connect low-code mobile app to backend via REST APIs."
            ]
        }
    },
    {
        week: 9,
        date: "Mar 5",
        title: "Midterm Examination",
        lab: "Midterm Assessment",
        isExam: true,
        topics: [],
        outcome: "Analyze and critique system models.",
        labDetails: {
            title: "Assessment Focus:",
            items: ["Model interpretation and critique."]
        }
    },
    {
        week: 10,
        date: "Mar 12",
        title: "Integration Patterns",
        lab: "Lab 9: Final Integration Review",
        topics: ["Layered Architecture", "SOA & Event-driven diagrams"],
        outcome: "Model common integration patterns.",
        labDetails: {
            title: "🧪 Lab 9: System Integration & Review",
            items: [
                "Lead end-to-end testing walkthrough.",
                "Conduct architecture review panel.",
                "Provide structured feedback on final system."
            ]
        }
    },
    {
        week: 11,
        date: "Mar 19",
        title: "API & Service Modeling",
        lab: "Project Phase 1: Core Build",
        topics: ["Service interfaces & interactions", "Deployment diagrams"],
        outcome: "Produce diagrams showing API interaction.",
        labDetails: {
            title: "🔨 MCO 2: Project Implementation",
            items: ["Begin development of the Final Integrated System.", "Consultation on API Design."]
        }
    },
    {
        week: 12,
        date: "Mar 26",
        title: "Data & Information Model",
        lab: "Project Phase 2: Data Sync",
        topics: ["Logical data models", "Message schemas"],
        outcome: "Create models representing data flow.",
        labDetails: {
            title: "🔨 MCO 2: Project Implementation",
            items: ["Implement Data Synchronization logic.", "Refine Database Schemas."]
        }
    },
    {
        week: "Break",
        date: "Mar 27 - Apr 3",
        title: "University Days / Holy Week",
        lab: "No Laboratory",
        isBreak: true
    },
    {
        week: 13,
        date: "Apr 9",
        title: "Security Modeling",
        lab: "Project Phase 3: Security",
        topics: ["Threat modeling & Access flows", "Trust zones"],
        outcome: "Depict security boundaries in system models.",
        labDetails: {
            title: "🔨 MCO 2: Project Implementation",
            items: ["Implement Security Protocols (OAuth/JWT).", "Finalize Trust Boundaries."]
        }
    },
    {
        week: 14,
        date: "Apr 16",
        title: "Docs & Governance",
        lab: "Documentation Workshop",
        topics: ["Viewpoints & Traceability", "Versioning & Ownership"],
        outcome: "Document models with governance principles.",
        labDetails: {
            title: "📄 MCO 1: Integration Spec",
            items: ["Drafting the Integration Specification Document.", "Peer Review of Documentation."]
        }
    },
    {
        week: 15,
        date: "Apr 23",
        title: "Legacy Modernization",
        lab: "Final Polish & Dry Run",
        topics: ["As-is vs To-be models", "Refactoring strategies"],
        outcome: "Create integrated models for modernization.",
        labDetails: {
            title: "🚀 Pre-Presentation",
            items: ["Dry run of Final Presentations.", "Final System Debugging."]
        }
    },
    {
        week: 16,
        date: "Apr 30",
        title: "Final Project Demos",
        lab: "MCO 2 Presentation",
        isExam: true,
        topics: [],
        outcome: "Students present and defend their integrated system models.",
        labDetails: {
            title: "🎓 Final Presentation",
            items: ["Demonstration of the fully integrated system.", "Defense of architecture decisions."]
        }
    },
    {
        week: "Finals",
        date: "May 4 - 5",
        title: "Final Examination",
        lab: "Comprehensive Exam",
        isExam: true
    }
];

// --- REACT COMPONENTS ---

const Navbar = () => (
    <nav>
        <div className="logo">SYS<span>ARCH</span></div>
        <div className="nav-links">
            <a href="#about">About</a>
            <a href="#mco">Outputs</a>
            <a href="#schedule">Schedule</a>
        </div>
        <button className="btn">Login</button>
    </nav>
);

const Header = () => (
    <header>
        <h1>Systems Integration & Architecture</h1>
        <p>CS405 • Spring 2024 • Prof. Smith</p>
    </header>
);

const CourseDescription = () => (
    <div className="container" id="about">
        <div className="desc-box">
            <h2 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Course Description</h2>
            <p className="desc-text">
                Modern organizations depend on multiple specialized applications that must communicate seamlessly to deliver business value. This course equips students with the knowledge and skills to design, build, and maintain integration solutions that connect disparate systems effectively. Students will explore fundamental integration patterns and learn to evaluate trade-offs based on organizational needs, scalability, and technical constraints. The course emphasizes practical technologies such as RESTful and SOAP APIs, message queues, data transformation, authentication protocols, and workflow orchestration.
            </p>
            <p className="desc-text">
                Through hands-on laboratory work, students will tackle real-world integration challenges: synchronizing data across CRM and ERP systems, automating workflows, aggregating information from multiple sources, and ensuring data consistency. Using modern integration platforms, students will build solutions featuring intelligent message routing, data transformation, input validation, and error handling while addressing critical enterprise requirements like security, performance, and reliability.
            </p>
        </div>
    </div>
);

const MCOSection = () => (
    <div className="container" id="mco" style={{paddingTop: 0}}>
        <div className="section-header">
            <h2>Major Course Outputs (MCOs)</h2>
            <p>Primary deliverables required to pass the course.</p>
        </div>
        <div className="mco-grid">
            <div className="mco-card">
                <h3><span className="mco-badge">MCO 1</span> Integration Spec</h3>
                <p style={{marginTop: '10px', fontSize: '0.95rem', color: 'var(--text-light)'}}>
                    Students will analyze a given business integration scenario and produce a professional <strong>Integration Specification Document</strong> that defines the proposed integration architecture, integration patterns, data flows, interfaces, and security considerations.
                </p>
            </div>
            <div className="mco-card">
                <h3><span className="mco-badge">MCO 2</span> Implemented Solution</h3>
                <p style={{marginTop: '10px', fontSize: '0.95rem', color: 'var(--text-light)'}}>
                    Students will design, implement, and demonstrate a functional <strong>systems integration solution</strong> based on the approved specification document using a low-code integration platform, applying appropriate routing and transformation techniques.
                </p>
            </div>
        </div>
    </div>
);

const ScheduleItem = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    let moduleClass = "module";
    if (item.isExam) moduleClass += " exam";
    if (item.isBreak) moduleClass += " break";

    const toggleOpen = () => {
        if (!item.isBreak) setIsOpen(!isOpen);
    };

    return (
        <div className={moduleClass}>
            <div className="module-header" onClick={toggleOpen}>
                <div className="module-title">
                    <span>{typeof item.week === 'number' ? `Week ${item.week}` : item.week}</span> 
                    {item.title}
                </div>
                <div className="module-lab">{item.lab}</div>
                <div className="module-date">{item.date}</div>
            </div>
            
            <div className="module-content" style={{ maxHeight: isOpen ? '800px' : '0' }}>
                <div className="content-inner">
                    {item.topics && item.topics.length > 0 && (
                        <div>
                            <strong>Lecture Topics:</strong>
                            <ul className="topic-list">
                                {item.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {item.outcome && (
                        <div className="outcome-box">
                            <strong>Outcome:</strong> {item.outcome}
                        </div>
                    )}
                    
                    {item.labDetails && (
                        <div className="lab-details">
                            <strong>{item.labDetails.title}</strong>
                            <ul className="topic-list">
                                {item.labDetails.items.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Handle special case for Finals where it's just exam text */}
                    {!item.topics && !item.labDetails && (
                        <div>
                            <strong>Activity:</strong> Comprehensive conceptual and practical examination.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ScheduleList = () => (
    <div className="container" id="schedule" style={{paddingTop: 0}}>
        <div className="section-header">
            <h2>Weekly Schedule & Labs</h2>
        </div>

        <div className="schedule-header-row">
            <div>Lecture Topic</div>
            <div>Laboratory Activity</div>
            <div style={{textAlign: 'right'}}>Date</div>
        </div>

        {COURSE_DATA.map((item, index) => (
            <ScheduleItem key={index} item={item} />
        ))}
    </div>
);

const Footer = () => (
    <footer>
        <p>&copy; 2024 Systems Integration & Architecture</p>
        <p style={{fontSize: '0.8rem', marginTop: '5px'}}>Created for educational purposes.</p>
    </footer>
);

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <CourseDescription />
            <MCOSection />
            <ScheduleList />
            <Footer />
        </React.Fragment>
    );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
