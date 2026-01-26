// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        title: "Course Introduction & Foundations of SIA",
        lab: "Lab 1: High-Level & Low-Level System Design",
        topics: ["Role of a system architect", "Overview of SIA", "Monolithic vs microservices overview"],
        outcome: "Establish architectural thinking before coding via an architecture critique session.",
        labDetails: {
            title: "🧪 Lab 1: Design & Scoping",
            items: [
                "Technical Focus: System scope, layers, boundaries.",
                "Diagrams: System Context Diagram, HLD, LLD.",
                "Activity: Architecture critique session."
            ]
        }
    },
    {
        week: 2,
        date: "Jan 13 / Jan 15",
        title: "Roles and Tasks of a System Architect",
        lab: "Lab 2: User Authentication & Authorization",
        topics: ["Responsibilities & Skills", "Decision-making in architecture", "Stakeholder communication"],
        outcome: "Establish identity foundation reused across systems via IAM failure case discussion.",
        labDetails: {
            title: "🧪 Lab 2: Vanilla PHP Auth",
            items: [
                "Technical Focus: Registration, login, sessions, roles (Vanilla PHP).",
                "Diagrams: UML Use Case Diagram, ER Diagram.",
                "Activity: IAM failure case discussion."
            ]
        }
    },
    {
        week: 3,
        date: "Jan 20 / Jan 22",
        title: "Monolithic vs Microservices Architecture",
        lab: "Lab 3: Secure User Authentication Modeling",
        topics: ["Monolithic structure", "Microservices principles", "Trade-off analysis"],
        outcome: "Teaches security flow modeling (CAPTCHA, OTP) before implementation.",
        labDetails: {
            title: "🧪 Lab 3: Auth Security",
            items: [
                "Technical Focus: CAPTCHA, OTP, login hardening.",
                "Diagrams: Sequence Diagram, Activity Diagram.",
                "Activity: Walkthrough of real auth attack vectors."
            ]
        }
    },
    {
        week: 4,
        date: "Jan 27 / Jan 29",
        title: "System vs Software Architecture",
        lab: "Lab 4: Monolithic Architecture Design",
        topics: ["Modeling Perspectives", "C4 Model", "Viewpoints (Logical, Physical, Process)"],
        outcome: "Teaches deliberate monolithic architecture construction & schema validation.",
        labDetails: {
            title: "🧪 Lab 4: Monolith Scaffolding",
            items: [
                "Technical Focus: Layered monolith, base code, recommended schema.",
                "Diagrams: Layered Architecture Diagram, ER Diagram (validated).",
                "Activity: Base code & schema walkthrough."
            ]
        }
    },
    {
        week: 5,
        date: "Feb 3 / Feb 5",
        title: "Business Process Modeling with BPMN",
        lab: "Lab 5: PHP OOP Monolithic eCommerce Implementation",
        topics: ["BPMN elements (Events, Activities, Gateways)", "Orchestration vs Choreography", "Process mapping"],
        outcome: "Strengthens implementation discipline through live refactoring and design-to-code traceability.",
        labDetails: {
            title: "🧪 Lab 5: OOP Implementation",
            items: [
                "Technical Focus: OOP services, repositories, controllers.",
                "Diagrams: Design-to-Code Traceability Diagram.",
                "Activity: Live refactoring demo."
            ]
        }
    },
    {
        week: 6,
        date: "Feb 10 / Feb 12",
        title: "UML for System Modeling",
        lab: "Lab 6: Online Payment Gateway Integration",
        topics: ["Use Case, Class, and Sequence Diagrams", "Structural vs Behavioral modeling"],
        outcome: "Introduces high-risk external integration (Stripe) and failure analysis.",
        labDetails: {
            title: "🧪 Lab 6: Stripe Integration",
            items: [
                "Technical Focus: Stripe (test mode), checkout, webhooks.",
                "Diagrams: Sequence Diagram, Trust Boundary Diagram.",
                "Activity: Webhook failure & retry analysis."
            ]
        }
    },
    {
        week: 7,
        date: "Feb 17 / Feb 19",
        title: "SysML for Systems Architecture",
        lab: "Lab 7: API Programming Fundamentals",
        topics: ["SysML vs UML", "Block Definition Diagrams", "Internal Block Diagrams"],
        outcome: "Enables external consumption of internal services via REST API creation.",
        labDetails: {
            title: "🧪 Lab 7: REST API Design",
            items: [
                "Technical Focus: REST API creation from monolith.",
                "Diagrams: API Sequence Diagram, Component Diagram.",
                "Activity: REST anti-pattern review."
            ]
        }
    },
    {
        week: 8,
        date: "Feb 24 / Feb 26",
        title: "Modeling System Interactions & Integration Flows",
        lab: "Lab 8: Supplier & Product Source Integration",
        topics: ["Combining structural and behavioral models", "UML + BPMN synthesis"],
        outcome: "Introduces upstream integration and contract-first design.",
        labDetails: {
            title: "🧪 Lab 8: External Sourcing",
            items: [
                "Technical Focus: Supplier API integration.",
                "Diagrams: Data Flow Diagram, API Contract Diagram.",
                "Activity: Contract-first design workshop."
            ]
        }
    },
    {
        week: 9,
        date: "Mar 3 / Mar 5",
        title: "Midterm Examination",
        lab: "Lab 9: Midterm Review",
        isExam: true,
        topics: ["No new lecture content", "Exam period: Mar 5–7"],
        outcome: "Comprehensive assessment of Weeks 1–8.",
        labDetails: {
            title: "🧪 Exam Session",
            items: [
                "Review of architecture diagrams.",
                "Practical logic troubleshooting.",
                "Q&A on integration patterns."
            ]
        }
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        title: "Scalability Fundamentals",
        lab: "Lab 10: Content-Driven Website Using Strapi CMS",
        topics: ["Vertical vs horizontal scaling", "Stateless vs stateful services"],
        outcome: "Separates content management from business logic using a Headless CMS.",
        labDetails: {
            title: "🧪 Lab 9: Headless CMS",
            items: [
                "Technical Focus: Strapi CMS as content source.",
                "Diagrams: Component Diagram, Deployment Diagram.",
                "Activity: Strapi admin vs API demo."
            ]
        }
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        title: "Load Balancing & Caching",
        lab: "Lab 11: Message Queue Fundamentals",
        topics: ["Load distribution strategies", "Cache-aside and write-through patterns"],
        outcome: "Introduction to decoupling and scalability via asynchronous processing.",
        labDetails: {
            title: "🧪 Lab 10: Message Queues",
            items: [
                "Technical Focus: Async processing, Redis/RabbitMQ.",
                "Diagrams: Event Flow Diagram, Queue Architecture Diagram.",
                "Activity: Sync vs async comparison."
            ]
        }
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        title: "Data Management in Distributed Systems",
        lab: "Lab 12: Newsletter & Email Service Integration",
        topics: ["Database replication and sharding", "CAP theorem fundamentals"],
        outcome: "University Days Mar 23–27. Applies message queues to real business use cases.",
        labDetails: {
            title: "🧪 Lab 11: Email Services",
            items: [
                "Technical Focus: Email templating, queued sending.",
                "Diagrams: Sequence Diagram, Component Diagram.",
                "Activity: Email deliverability discussion."
            ]
        }
    },
    {
        week: "Break",
        date: "Mar 27 - Apr 3",
        title: "Holy Week Break",
        lab: "No Classes",
        isBreak: true
    },
    {
        week: 13,
        date: "Apr 7 / Apr 9",
        title: "Modeling Security & Trust Boundaries",
        lab: "Lab 13: Logistics & ERP Integration",
        topics: ["Threat modeling", "Trust zones", "Authentication flows (OAuth)"],
        outcome: "Downstream enterprise integration walkthrough via ERP simulation.",
        labDetails: {
            title: "🧪 Lab 12: ERP Systems",
            items: [
                "Technical Focus: Open-source ERP simulation.",
                "Diagrams: BPMN, Integration Architecture Diagram.",
                "Activity: ERP process walkthrough."
            ]
        }
    },
    {
        week: 14,
        date: "Apr 14 / Apr 16",
        title: "Architectural Documentation & Governance",
        lab: "Lab 14: Product Search Engine Integration",
        topics: ["Diagram types (context, component, container)", "Justifying design decisions"],
        outcome: "Integrating SaaS solutions (Algolia) with search relevance tuning.",
        labDetails: {
            title: "🧪 Lab 13: Search Engines",
            items: [
                "Technical Focus: Algolia search integration.",
                "Diagrams: System Interaction Diagram.",
                "Activity: Search relevance tuning."
            ]
        }
    },
    {
        week: 15,
        date: "Apr 21 / Apr 23",
        title: "Modeling Legacy Systems & Case Studies",
        lab: "Lab 15: Mobile & Error Monitoring",
        topics: ["Modernization strategies", "End-to-end case reviews"],
        outcome: "Operational readiness, observability, and mobile-first API design.",
        labDetails: {
            title: "🧪 Lab 14/15: Operations",
            items: [
                "Technical Focus: Mobile APIs, Error tracking, Alerts.",
                "Diagrams: API Gateway Diagram, Incident Flow Diagram.",
                "Activity: Failure injection exercise."
            ]
        }
    },
    {
        week: 16,
        date: "Apr 28 / Apr 30",
        title: "Final Project Presentations",
        lab: "Lab 16: RFID & Final Review",
        isExam: true,
        topics: ["No lecture content", "Thursday session reserved for presentations"],
        outcome: "Synthesis of cyber-physical integration and architectural defense.",
        labDetails: {
            title: "🧪 Lab 16/17: Final Synthesis",
            items: [
                "Technical Focus: RFID Payroll, Attendance Logging.",
                "Diagrams: Hardware–Software Interaction Diagram, Full System Architecture.",
                "Activity: Final design review panel."
            ]
        }
    },
    {
        week: "Finals",
        date: "May 4 - 5",
        title: "Final Examination",
        lab: "Final Assessment",
        isExam: true,
        topics: ["Comprehensive evaluation", "Practical and conceptual assessment"]
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
        <p>CS405 • Spring 2026 • Prof. Smith</p>
    </header>
);

const CourseDescription = () => (
    <div className="container" id="about">
        <div className="desc-box">
            <h2 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Course Description</h2>
            <p className="desc-text">
                This course focuses on the design and implementation of integrated systems that solve complex business problems. 
                Using a combination of <strong>UML, BPMN, and SysML</strong>, students will learn to model and build 
                distributed architectures that connect modern web apps, legacy ERPs, and hardware peripherals.
            </p>
            <p className="desc-text">
                Through a hands-on 17-lab sequence, students progressively build an e-commerce ecosystem incorporating 
                <strong> Stripe Payments, Algolia Search, Strapi CMS, and RFID hardware</strong>, culminating in a 
                defensible enterprise-grade architecture.
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
                    Produce a professional <strong>Integration Specification Document</strong> defining data flows, API contracts, and security boundaries.
                </p>
            </div>
            <div className="mco-card">
                <h3><span className="mco-badge">MCO 2</span> Implemented Solution</h3>
                <p style={{marginTop: '10px', fontSize: '0.95rem', color: 'var(--text-light)'}}>
                    Develop a functional system connecting at least three disparate services using <strong>asynchronous messaging</strong> and <strong>OOP principles</strong>.
                </p>
            </div>
        </div>
    </div>
);

const ScheduleItem = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    let moduleClass = "module" + (item.isExam ? " exam" : "") + (item.isBreak ? " break" : "");

    return (
        <div className={moduleClass}>
            <div className="module-header" onClick={() => !item.isBreak && setIsOpen(!isOpen)}>
                <div className="module-title">
                    <span>{typeof item.week === 'number' ? `Week ${item.week}` : item.week}</span> 
                    {item.title}
                </div>
                <div className="module-lab">{item.lab}</div>
                <div className="module-date">{item.date}</div>
            </div>
            
            <div className="module-content" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
                <div className="content-inner">
                    {item.topics && item.topics.length > 0 && (
                        <div>
                            <strong>Core Topics:</strong>
                            <ul className="topic-list">
                                {item.topics.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                    )}

                    {/* Diagram Cues */}
                    <div className="diagram-placeholder" style={{ color: 'var(--primary)', fontStyle: 'italic', margin: '10px 0' }}>
                        {item.lab.includes("Payment") && <div></div>}
                        {item.lab.includes("BPMN") && <div>

[Image of BPMN workflow diagram]
</div>}
                        {item.lab.includes("Strapi") && <div></div>}
                        {item.lab.includes("RFID") && <div></div>}
                    </div>
                    
                    {item.outcome && <div className="outcome-box"><strong>Objective:</strong> {item.outcome}</div>}
                    
                    {item.labDetails && (
                        <div className="lab-details">
                            <strong>{item.labDetails.title}</strong>
                            <ul className="topic-list">
                                {item.labDetails.items.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
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
            <h2>Weekly Schedule</h2>
            <p>Tue (Lab) / Thu (Lecture) Format • Spring 2026</p>
        </div>
        <div className="schedule-header-row">
            <div>Lecture / Topic (Thu)</div>
            <div>Lab Activity (Tue)</div>
            <div style={{textAlign: 'right'}}>Dates</div>
        </div>
        {COURSE_DATA.map((item, index) => <ScheduleItem key={index} item={item} />)}
    </div>
);

const Footer = () => (
    <footer>
        <p>&copy; 2026 Systems Integration & Architecture • Spring Semester</p>
    </footer>
);

const App = () => (
    <React.Fragment>
        <Navbar />
        <Header />
        <CourseDescription />
        <MCOSection />
        <ScheduleList />
        <Footer />
    </React.Fragment>
);

// --- RENDER ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
