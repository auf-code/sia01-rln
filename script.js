// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        title: "Course Introduction & Foundations of SIA",
        lab: "Lab 1: System Scoping & Architecture",
        topics: ["Role of a system architect", "Overview of SIA", "Monolithic vs microservices overview"],
        outcome: "Lecture + discussion; no assessment.",
        labDetails: {
            title: "🧪 Lab 1 Activities",
            items: [
                "Critique existing architectures.",
                "Draw System Context Diagrams.",
                "Draft High-Level (HLD) and Low-Level Design (LLD) documents."
            ]
        }
    },
    {
        week: 2,
        title: "Monolithic Architecture Deep Dive",
        lab: "Lab 2: Vanilla PHP Auth & Identity",
        topics: ["Structure & characteristics", "Advantages and limitations", "When to use"],
        outcome: "Diagram exercise: students analyze a monolithic system.",
        labDetails: {
            title: "🧪 Lab 2 Activities",
            items: [
                "Review IAM case studies.",
                "Create UML Use Case Diagrams for auth actors.",
                "Design ER Diagrams for user/role schemas."
            ]
        }
    },
    {
        week: 3,
        title: "Microservices Architecture Deep Dive",
        lab: "Lab 3: Business Domain Modeling",
        topics: ["Principles & characteristics", "Advantages and limitations", "Decomposition strategies"],
        outcome: "Small case study; students identify services from example.",
        labDetails: {
            title: "🧪 Lab 3 Activities",
            items: [
                "Guided domain modeling workshop.",
                "Create UML Class Diagrams for product catalogs.",
                "Draft Sequence Diagrams for core business flows."
            ]
        }
    },
    {
        week: 4,
        title: "Scalability Fundamentals",
        lab: "Lab 4: OOP Implementation",
        topics: ["Vertical vs horizontal scaling", "Stateless vs stateful services"],
        outcome: "Mini-quiz on scaling concepts.",
        labDetails: {
            title: "🧪 Lab 4 Activities",
            items: [
                "Live refactoring demo.",
                "Map Class Diagrams to actual PHP code.",
                "Establish code traceability matrix."
            ]
        }
    },
    {
        week: 5,
        title: "Load Balancing & Caching",
        lab: "Lab 5: REST API Creation",
        topics: ["Load distribution strategies", "Cache concepts (cache-aside, write-through)", "Performance impact"],
        outcome: "Lab exercise: design simple cache strategy diagram.",
        labDetails: {
            title: "🧪 Lab 5 Activities",
            items: [
                "Review REST anti-patterns.",
                "Create API Sequence Diagrams.",
                "Draft Component Diagrams for API layers."
            ]
        }
    },
    {
        week: 6,
        title: "Data Management in Distributed Systems",
        lab: "Lab 6: External Data Source",
        topics: ["Database replication and sharding (conceptual)", "CAP theorem (strong vs eventual consistency)"],
        outcome: "Discussion: CAP trade-offs in real systems.",
        labDetails: {
            title: "🧪 Lab 6 Activities",
            items: [
                "Contract-first design workshop.",
                "Draw Data Flow Diagrams (DFD) for import processes.",
                "Define API Contract Diagrams."
            ]
        }
    },
    {
        week: 7,
        title: "Messaging and Integration",
        lab: "Lab 7: Headless CMS (Strapi)",
        topics: ["Synchronous vs asynchronous communication", "Message queues overview (conceptual)", "Integration patterns"],
        outcome: "Lab: design messaging flow for a simple system.",
        labDetails: {
            title: "🧪 Lab 7 Activities",
            items: [
                "Strapi CMS setup and demo.",
                "Update Component Diagrams to include CMS.",
                "Draw Deployment Diagrams for content delivery."
            ]
        }
    },
    {
        week: 8,
        title: "Distributed System Coordination",
        lab: "Lab 8: Stripe & Webhooks",
        topics: ["Leader election", "Distributed locks", "Coordination challenges"],
        outcome: "Case scenario: how to coordinate two microservices.",
        labDetails: {
            title: "🧪 Lab 8 Activities",
            items: [
                "Simulate webhook failures and retries.",
                "Create detailed Payment Sequence Diagrams.",
                "Define Trust Boundary Diagrams."
            ]
        }
    },
    {
        week: 9,
        title: "Fault Tolerance & Reliability",
        lab: "Lab 9: Async Processing",
        topics: ["Types of failures", "Heartbeats and timeouts", "Graceful degradation"],
        outcome: "Lab discussion: plan for fault-tolerant system.",
        labDetails: {
            title: "🧪 Lab 9 Activities",
            items: [
                "Sync vs Async performance demo.",
                "Draw Event Flow Diagrams.",
                "Design Queue Architecture Diagrams."
            ]
        }
    },
    {
        week: 10,
        title: "High-Level System Design Principles",
        lab: "Lab 10: Service Integration",
        topics: ["Architectural trade-offs", "System modularity", "Scaling and integration considerations"],
        outcome: "Students sketch architecture for a small application.",
        labDetails: {
            title: "🧪 Lab 10 Activities",
            items: [
                "Review email delivery best practices.",
                "Update Sequence Diagrams for async notifications.",
                "Refine Component Diagrams."
            ]
        }
    },
    {
        week: 11,
        title: "Case Study 1: Simple Web System",
        lab: "Lab 11: Enterprise Systems",
        topics: ["Example: URL shortener or blog system", "Component diagrams", "API routing"],
        outcome: "Group assignment: design and present system diagram.",
        labDetails: {
            title: "🧪 Lab 11 Activities",
            items: [
                "Walkthrough of ERP logic.",
                "Map processes using BPMN.",
                "Create Integration Architecture Diagrams."
            ]
        }
    },
    {
        week: 12,
        title: "Case Study 2: Integration-Heavy System",
        lab: "Lab 12: Algolia Integration",
        topics: ["Example: e-commerce or ride-sharing platform", "Messaging, fault-tolerance, caching integration"],
        outcome: "Group assignment continuation + peer review.",
        labDetails: {
            title: "🧪 Lab 12 Activities",
            items: [
                "Search result tuning workshop.",
                "Draw System Interaction Diagrams for search queries.",
                "Analyze data sync latency."
            ]
        }
    },
    {
        week: 13,
        title: "Architecture Documentation",
        lab: "Lab 13: Multi-Client Arch",
        topics: ["Diagram types (context, component, container)", "Justifying design decisions", "Communicating with stakeholders"],
        outcome: "Individual assignment: submit architecture diagram + explanation.",
        labDetails: {
            title: "🧪 Lab 13 Activities",
            items: [
                "Discussion on API Versioning.",
                "Design API Gateway Diagrams.",
                "Update Sequence Diagrams for mobile specific flows."
            ]
        }
    },
    {
        week: 14,
        title: "Strategic & Organizational Considerations",
        lab: "Lab 14: Incident Response",
        topics: ["Governance & ownership", "Organizational impact of architectural decisions", "Lessons from failed system integrations"],
        outcome: "Reflection paper; final discussion; course wrap-up.",
        labDetails: {
            title: "🧪 Lab 14 Activities",
            items: [
                "Failure simulation drill.",
                "Map Incident Flow Diagrams.",
                "Configure alert webhooks."
            ]
        }
    },
    {
        week: 15,
        title: "Emerging Trends & Physical Integration",
        lab: "Lab 15: Hardware Integration",
        topics: ["IoT and Hardware integration challenges", "Cyber-physical system security", "Review of Semester Concepts"],
        outcome: "Preparation for Final Defense.",
        labDetails: {
            title: "🧪 Lab 15 Activities",
            items: [
                "Security discussion on hardware inputs.",
                "Draw Hardware–Software Interaction Diagrams.",
                "Map physical data flow to database."
            ]
        }
    },
    {
        week: 16,
        title: "Final System Synthesis",
        lab: "Lab 16: Architecture Defense",
        topics: ["Final Project Defense", "Architectural critique", "End-to-end system validation"],
        outcome: "Final Project Presentation.",
        labDetails: {
            title: "🧪 Lab 16 Activities",
            items: [
                "Design critique panel.",
                "Present Full System Architecture Diagram.",
                "Final end-to-end system demo."
            ]
        }
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
                Modern organizations depend on multiple specialized applications that must communicate seamlessly to deliver business value. This course equips students with the knowledge and skills to design, build, and maintain integration solutions that connect disparate systems effectively. Students will explore fundamental integration patterns and learn to evaluate trade-offs based on organizational needs, scalability, and technical constraints.
            </p>
            <p className="desc-text">
                Through a rigorous 16-week laboratory sequence, students will build a complete eCommerce ecosystem from the ground up. Starting with high-level design, students will progressively implement authentication, product catalogs, payment gateways, message queues, and enterprise ERP connections. The course culminates in a full system integration review, ensuring students are job-ready for complex distributed system challenges.
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
                <div className="module-date">Week {item.week}</div>
            </div>
            
            <div className="module-content" style={{ maxHeight: isOpen ? '800px' : '0' }}>
                <div className="content-inner">
                    {item.topics && item.topics.length > 0 && (
                        <div>
                            <strong>Lecture Topics / Subtopics:</strong>
                            <ul className="topic-list">
                                {item.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                            
                            {/* Insert Contextual Diagrams based on Topic Title */}
                            {item.title.includes("Monolithic") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of monolithic architecture diagram]

                                </div>
                            )}
                            {item.title.includes("Microservices") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of microservices architecture diagram]

                                </div>
                            )}
                            {item.title.includes("Scalability") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of vertical vs horizontal scaling]

                                </div>
                            )}
                             {item.title.includes("Load Balancing") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of load balancer architecture]

                                </div>
                            )}
                             {item.title.includes("Data Management") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    
                                </div>
                            )}
                             {item.title.includes("Messaging") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    
                                </div>
                            )}

                        </div>
                    )}
                    
                    {item.outcome && (
                        <div className="outcome-box">
                            <strong>Notes / Assessment:</strong> {item.outcome}
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
                </div>
            </div>
        </div>
    );
};

const ScheduleList = () => (
    <div className="container" id="schedule" style={{paddingTop: 0}}>
        <div className="section-header">
            <h2>Weekly Schedule</h2>
            <p>Integrated Theory & Laboratory Sequence</p>
        </div>

        <div className="schedule-header-row">
            <div>Lecture / Topic</div>
            <div>Lab Title</div>
            <div style={{textAlign: 'right'}}>Week</div>
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
