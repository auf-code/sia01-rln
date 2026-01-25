// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        title: "Course Introduction & Foundations of SIA",
        lab: "Lab 1: Introduction to SIA",
        topics: ["Role of a system architect", "Overview of SIA", "Monolithic vs microservices overview"],
        outcome: "Lecture + discussion; no assessment.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Course orientation.",
                "Setting up development environments.",
                "Discussion on system scoping."
            ]
        }
    },
    {
        week: 2,
        date: "Jan 13 / Jan 15",
        title: "Roles and Tasks of a System Architect",
        lab: "Lab 2: Architect role exploration",
        topics: ["Responsibilities & Skills", "Decision-making in architecture", "Stakeholder communication"],
        outcome: "Understanding the architect's position in the SDLC.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Role-play exercise: Architect vs Developer.",
                "Analyzing job descriptions and requirements.",
                "Case study review."
            ]
        }
    },
    {
        week: 3,
        date: "Jan 20 / Jan 22",
        title: "Monolithic vs Microservices Architecture",
        lab: "Lab 3: Monolithic system exercise",
        topics: ["Monolithic structure", "Microservices principles", "Trade-off analysis"],
        outcome: "Diagram exercise: students analyze a monolithic system.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Decomposing a legacy monolith.",
                "Identifying service boundaries.",
                "Drafting initial component splits."
            ]
        }
    },
    {
        week: 4,
        date: "Jan 27 / Jan 29",
        title: "System vs Software Architecture",
        lab: "Lab 4: Architecture views exercise",
        topics: ["Modeling Perspectives", "C4 Model", "Viewpoints (Logical, Physical, Process)"],
        outcome: "Mini-quiz on architectural views.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Drawing System Context diagrams.",
                "Creating Container diagrams.",
                "Differentiating system boundaries."
            ]
        }
    },
    {
        week: 5,
        date: "Feb 3 / Feb 5",
        title: "Business Process Modeling with BPMN",
        lab: "Lab 5: BPMN exercises",
        topics: ["BPMN elements (Events, Activities, Gateways)", "Orchestration vs Choreography", "Process mapping"],
        outcome: "Lab exercise: design business process flow.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Mapping an e-commerce order flow.",
                "Using BPMN 2.0 notation tools.",
                "Simulating process bottlenecks."
            ]
        }
    },
    {
        week: 6,
        date: "Feb 10 / Feb 12",
        title: "UML for System Modeling",
        lab: "Lab 6: UML diagrams",
        topics: ["Use Case Diagrams", "Class Diagrams", "Sequence Diagrams"],
        outcome: "Creating standard UML artifacts.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Modeling actor interactions.",
                "Defining system classes and relationships.",
                "Tracing logic via Sequence diagrams."
            ]
        }
    },
    {
        week: 7,
        date: "Feb 17 / Feb 19",
        title: "SysML for Systems Architecture",
        lab: "Lab 7: Integration flows",
        topics: ["SysML vs UML", "Block Definition Diagrams", "Internal Block Diagrams"],
        outcome: "Applying systems engineering modeling standards.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Defining system blocks and ports.",
                "Mapping integration flows between blocks.",
                "Visualizing hardware-software constraints."
            ]
        }
    },
    {
        week: 8,
        date: "Feb 24 / Feb 26",
        title: "Modeling System Interactions (UML + BPMN)",
        lab: "Lab 8: End-to-end interaction modeling",
        topics: ["Combining structural and behavioral models", "Integration logic", "End-to-end data flow"],
        outcome: "Synthesizing multiple modeling languages.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Creating a unified architectural view.",
                "Mapping BPMN processes to UML components.",
                "Validating interaction flows."
            ]
        }
    },
    {
        week: 9,
        date: "Mar 3 / Mar 5",
        title: "Midterm Exam",
        lab: "Lab 9: Midterm Review",
        isExam: true,
        topics: [],
        outcome: "No new lecture content; Exam period: Mar 5–7.",
        labDetails: {
            title: "🧪 Tuesday: Review Session",
            items: [
                "Review of architecture diagrams.",
                "Mock exam questions.",
                "Consultation on concepts."
            ]
        }
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        title: "Scalability Fundamentals",
        lab: "Lab 10: Integration pattern exercises",
        topics: ["Vertical vs Horizontal scaling", "Stateless architecture", "Throughput vs Latency"],
        outcome: "Understanding system growth strategies.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Designing for scale.",
                "Applying integration patterns (Gateway, Broker).",
                "Analyzing bottlenecks."
            ]
        }
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        title: "Load Balancing & Caching",
        lab: "Lab 11: Messaging & coordination",
        topics: ["Load distribution algorithms", "Caching strategies (Write-through, Look-aside)", "CDN usage"],
        outcome: "Designing performant distributed systems.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Designing messaging flows (Pub/Sub).",
                "Coordinating async services.",
                "Diagramming load balancer placement."
            ]
        }
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        title: "Data Management in Distributed Systems",
        lab: "Lab 12: Data modeling",
        topics: ["Replication & Sharding", "CAP Theorem", "Consistency models"],
        outcome: "NOTE: University Days Mar 23–27 (Limited Classes).",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Designing distributed data schemas.",
                "Mapping data ownership across services.",
                "Handling eventual consistency."
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
        lab: "Lab 13: Security modeling",
        topics: ["Threat modeling", "Trust zones", "Authentication flows (OAuth/OIDC)"],
        outcome: "Securing integration points.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Identifying attack vectors.",
                "Drawing trust boundary diagrams.",
                "Designing secure API gateways."
            ]
        }
    },
    {
        week: 14,
        date: "Apr 14 / Apr 16",
        title: "Architectural Documentation & Governance",
        lab: "Lab 14: Documentation exercises",
        topics: ["Architecture Decision Records (ADR)", "Documentation as Code", "Governance frameworks"],
        outcome: "Formalizing architectural knowledge.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Writing ADRs for previous labs.",
                "Structuring a System Architecture Document (SAD).",
                "Peer review of documentation."
            ]
        }
    },
    {
        week: 15,
        date: "Apr 21 / Apr 23",
        title: "Modeling Legacy Systems & End-to-End Case Studies",
        lab: "Lab 15: Legacy systems / case prep",
        topics: ["Strangler Fig pattern", "Modernization strategies", "Full system case study"],
        outcome: "Applying concepts to complex scenarios.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Reverse engineering a legacy system model.",
                "Planning a modernization roadmap.",
                "Preparing for final presentation."
            ]
        }
    },
    {
        week: 16,
        date: "Apr 28 / Apr 30",
        title: "Final Project Presentations",
        lab: "Lab 16: Final project preparation",
        topics: [],
        isExam: true,
        outcome: "Entire Thursday session reserved for presentations.",
        labDetails: {
            title: "🧪 Tuesday Lab Activities",
            items: [
                "Finalizing diagrams and slides.",
                "Mock presentations.",
                "Final QA on system models."
            ]
        }
    },
    {
        week: "Finals",
        date: "May 4 - 5",
        title: "Final Examination",
        lab: "Comprehensive Assessment",
        isExam: true,
        topics: ["No lecture content.", "Practical and conceptual assessment."]
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
                <div className="module-date">{item.date}</div>
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

                             {/* Contextual Images */}
                            {item.title.includes("Monolithic") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of monolithic vs microservices architecture]

                                </div>
                            )}
                            {item.title.includes("BPMN") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    
                                </div>
                            )}
                            {item.title.includes("UML") && !item.title.includes("SysML") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    

[Image of UML class diagram]

                                </div>
                            )}
                            {item.title.includes("SysML") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    
                                </div>
                            )}
                            {item.title.includes("Scalability") && (
                                <div style={{marginTop:'10px', fontStyle:'italic', color:'var(--primary)'}}>
                                    
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

                        </div>
                    )}
                    
                    {item.outcome && (
                        <div className="outcome-box">
                            <strong>Notes / Special Events:</strong> {item.outcome}
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
            <p>Tue (Lab) / Thu (Lecture) Format</p>
        </div>

        <div className="schedule-header-row">
            <div>Lecture / Topic (Thu)</div>
            <div>Lab Activity (Tue)</div>
            <div style={{textAlign: 'right'}}>Dates</div>
        </div>

        {COURSE_DATA.map((item, index) => (
            <ScheduleItem key={index} item={item} />
        ))}
    </div>
);

const Footer = () => (
    <footer>
        <p>&copy; 2026 Systems Integration & Architecture</p>
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
