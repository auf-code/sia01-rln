// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        title: "Foundations of SIA",
        lab: "Lab 1: System Scoping & Architecture",
        topics: ["Purpose and scope of SIA", "Role of the system architect", "Architectural thinking vs implementation"],
        outcome: "Establish architectural thinking before coding.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Critique existing architectures.",
                "Draw System Context Diagrams.",
                "Draft High-Level (HLD) and Low-Level Design (LLD) documents."
            ]
        }
    },
    {
        week: 2,
        title: "Architecture Documentation & Communication",
        lab: "Lab 2: Vanilla PHP Auth & Identity",
        topics: ["System context diagrams", "Container and component diagrams", "Communicating design decisions"],
        outcome: "Effectively document and communicate architectural decisions.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Review IAM case studies.",
                "Create UML Use Case Diagrams for auth actors.",
                "Design ER Diagrams for user/role schemas."
            ]
        }
    },
    {
        week: 3,
        title: "Monolithic and Microservices Architectures",
        lab: "Lab 3: Business Domain Modeling",
        topics: ["Monolithic architecture characteristics", "Microservices principles", "Migration considerations"],
        outcome: "Model the eCommerce domain effectively before implementation.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Guided domain modeling workshop.",
                "Create UML Class Diagrams for product catalogs.",
                "Draft Sequence Diagrams for core business flows."
            ]
        }
    },
    {
        week: 4,
        title: "API Design & Integration Patterns",
        lab: "Lab 4: OOP Implementation",
        topics: ["REST vs messaging APIs", "Versioning and backward compatibility", "Integration patterns (adapter, façade)"],
        outcome: "Convert architectural models into maintainable code.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Live refactoring demo.",
                "Map Class Diagrams to actual PHP code.",
                "Establish code traceability matrix."
            ]
        }
    },
    {
        week: 5,
        title: "Scalability and Performance Fundamentals",
        lab: "Lab 5: REST API Creation",
        topics: ["Vertical vs horizontal scaling", "Stateless vs stateful services", "Bottlenecks and system limits"],
        outcome: "Expose internal services for external integration with scale in mind.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
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
        topics: ["Centralized vs distributed databases", "Replication strategies", "Read/write trade-offs"],
        outcome: "Introduce upstream integration and data management strategies.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Contract-first design workshop.",
                "Draw Data Flow Diagrams (DFD) for import processes.",
                "Define API Contract Diagrams."
            ]
        }
    },
    {
        week: 7,
        title: "Caching and State Management",
        lab: "Lab 7: Headless CMS (Strapi)",
        topics: ["Cache-aside and write-through strategies", "Session management", "Cache invalidation challenges"],
        outcome: "Separate content from logic and optimize via caching.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Strapi CMS setup and demo.",
                "Update Component Diagrams to include CMS.",
                "Draw Deployment Diagrams for content delivery."
            ]
        }
    },
    {
        week: 8,
        title: "Consistency Models and CAP Theorem",
        lab: "Lab 8: Stripe & Webhooks",
        topics: ["Strong vs eventual consistency", "CAP theorem interpretation", "Real-world system examples"],
        outcome: "Securely integrate critical financial services with consistency.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Simulate webhook failures and retries.",
                "Create detailed Payment Sequence Diagrams.",
                "Define Trust Boundary Diagrams."
            ]
        }
    },
    {
        week: 9,
        title: "Asynchronous Communication",
        lab: "Lab 9: Async Processing",
        topics: ["Synchronous vs asynchronous integration", "Message queues and event-driven architecture", "Reliability and decoupling"],
        outcome: "Decouple systems for higher scalability.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Sync vs Async performance demo.",
                "Draw Event Flow Diagrams.",
                "Design Queue Architecture Diagrams."
            ]
        }
    },
    {
        week: 10,
        title: "Load Balancing and Traffic Management",
        lab: "Lab 10: Service Integration",
        topics: ["Load balancing concepts", "Request routing strategies", "Failover and redundancy"],
        outcome: "Implement reliable business messaging integrations.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Review email delivery best practices.",
                "Update Sequence Diagrams for async notifications.",
                "Refine Component Diagrams."
            ]
        }
    },
    {
        week: 11,
        title: "Time, Ordering, and Coordination",
        lab: "Lab 11: Enterprise Systems",
        topics: ["Logical vs physical time", "Event ordering challenges", "Idempotency and retries"],
        outcome: "Understand complex enterprise system integrations.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Walkthrough of ERP logic.",
                "Map processes using BPMN.",
                "Create Integration Architecture Diagrams."
            ]
        }
    },
    {
        week: 12,
        title: "Foundations of Distributed Algorithms",
        lab: "Lab 12: Algolia Integration",
        topics: ["Leader election (conceptual)", "Consensus overview", "Failure detection (heartbeats)"],
        outcome: "Integrate SaaS solutions using distributed concepts.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Search result tuning workshop.",
                "Draw System Interaction Diagrams for search queries.",
                "Analyze data sync latency."
            ]
        }
    },
    {
        week: 13,
        title: "Fault Tolerance and Reliability",
        lab: "Lab 13: Multi-Client Arch",
        topics: ["Failure types & Redundancy patterns", "Graceful degradation", "Circuit breakers (conceptual)"],
        outcome: "Support multi-client architectures reliably.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Discussion on API Versioning.",
                "Design API Gateway Diagrams.",
                "Update Sequence Diagrams for mobile specific flows."
            ]
        }
    },
    {
        week: 14,
        title: "Ethical & Operational Considerations",
        lab: "Lab 14: Incident Response",
        topics: ["Governance and ownership", "Operational impact", "Lessons from failed integrations"],
        outcome: "Ensure operational readiness and ethical oversight.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Failure simulation drill.",
                "Map Incident Flow Diagrams.",
                "Configure alert webhooks."
            ]
        }
    },
    {
        week: 15,
        title: "System Design Case Studies",
        lab: "Lab 15: Hardware Integration",
        topics: ["Designing scalable web systems", "Designing integration-heavy systems", "Architecture justification"],
        outcome: "Apply design patterns to complex hardware integration.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
            items: [
                "Security discussion on hardware inputs.",
                "Draw Hardware–Software Interaction Diagrams.",
                "Map physical data flow to database."
            ]
        }
    },
    {
        week: 16,
        title: "Final Integration & Review",
        lab: "Lab 16: Architecture Defense",
        topics: ["End-to-end integration", "System synthesis", "Performance review"],
        outcome: "Synthesize learning and defend architectural decisions.",
        labDetails: {
            title: "🧪 Activities & Diagrams",
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
                            <strong>Rationale / Objective:</strong> {item.outcome}
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
            <p>Mapping architectural theory to practical application.</p>
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
