const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        lecture: {
            title: "Course Introduction & Foundations of SIA",
            description: "Orientation, role of a system architect, and architectural layers.",
            topics: ["Architecture vs. Design", "SIA Goals", "System Boundaries"]
        },
        lab: {
            title: "Lab 1: Environment Setup & Fundamentals",
            focus: "PHP setup, database connection, basic request–response flow.",
            outcome: "Working development environment.",
            diagram: "Basic Web Request-Response Sequence"
        }
    },
    {
        week: 2,
        date: "Jan 13 / Jan 15",
        lecture: {
            title: "Roles and Tasks of a System Architect",
            description: "Role-centric framing of architecture within the SDLC.",
            topics: ["Decision Logs", "Stakeholder Management", "Technical Debt"]
        },
        lab: {
            title: "Lab 2: API Consumption & Data Integration",
            focus: "Consume external API, parse responses, persist data.",
            outcome: "Understanding system-to-system data flow.",
            diagram: "API Integration Flow"
        }
    },
    {
        week: 3,
        date: "Jan 20 / Jan 22",
        lecture: {
            title: "Monolithic vs Microservices Architecture",
            description: "Choosing the right architectural style for the business context.",
            topics: ["Coupling & Cohesion", "Scaling Dimensions", "Deployment Complexity"]
        },
        lab: {
            title: "Lab 3: User Authentication Modeling",
            focus: "Model auth flow, CAPTCHA logic, OTP via email (Mailtrap).",
            outcome: "Secure interaction modeling.",
            diagram: "Multi-Factor Authentication Flow"
        }
    },
    {
        week: 4,
        date: "Jan 27 / Jan 29",
        lecture: {
            title: "System vs Software Architecture",
            description: "Focusing on the 'Modeling Perspective' and architectural boundaries.",
            topics: ["Components vs Classes", "Interaction Boundaries", "Legacy Constraints"]
        },
        lab: {
            title: "Lab 4: Extending Legacy CMS (Week 1)",
            focus: "Product CRUD (admin), product listing (user), procedural PHP.",
            outcome: "Integrating features into tightly coupled systems.",
            diagram: "Legacy Monolith Component Diagram"
        }
    },
    {
        week: 5,
        date: "Feb 3 / Feb 5",
        lecture: {
            title: "Business Process Modeling with BPMN",
            description: "Mapping implementation logic back to business requirements.",
            topics: ["BPMN 2.0 Basics", "Event-driven Flows", "Task Orchestration"]
        },
        lab: {
            title: "Lab 5: Legacy CMS Extension (Week 2)",
            focus: "Session-based cart, checkout, orders & order items persistence.",
            outcome: "End-to-end transaction flow in a legacy system.",
            diagram: "BPMN Checkout Process"
        }
    },
    {
        week: 6,
        date: "Feb 10 / Feb 12",
        lecture: {
            title: "UML for System Modeling",
            description: "Using standard notation to describe complex integrations.",
            topics: ["Use Case Diagrams", "Class Relationships", "Sequence Diagrams"]
        },
        lab: {
            title: "Lab 6: Online Payment Integration",
            focus: "Integrate payment gateway (test mode), handle callbacks.",
            outcome: "External system integration.",
            diagram: "Payment Gateway Callback Sequence"
        }
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        lecture: {
            title: "Data Management in Distributed Systems",
            description: "Managing state, consistency, and the CAP theorem.",
            topics: ["ACID vs BASE", "Eventual Consistency", "Polyglot Persistence"]
        },
        lab: {
            title: "Lab 12: Data Caching & Redis Benchmarking",
            focus: "Load millions of records, compare cached vs non-cached reads.",
            outcome: "Quantifiable performance optimization.",
            diagram: "Cache-Aside Pattern Logic"
        }
    },
    {
        week: 13,
        date: "Apr 7 / Apr 9",
        lecture: {
            title: "Modeling Security & Trust Boundaries",
            description: "Security views and boundary analysis.",
            topics: ["Trust Zones", "Identity Providers", "Authorization Scopes"]
        },
        lab: {
            title: "Lab 13: Simple Search Engine Design",
            focus: "Large dataset ingestion, indexing, keyword search app.",
            outcome: "Read-optimized system design.",
            diagram: "Search Indexing Architecture"
        }
    }
    // ... Additional weeks following this pattern
];

const App = () => {
    const [drawerData, setDrawerData] = React.useState(null);

    const openDrawer = (data, type) => {
        setDrawerData({ ...data, type });
    };

    const closeDrawer = () => setDrawerData(null);

    return (
        <div className="sia-container">
            <header className="hero">
                <h1>SYSARCH 2026</h1>
                <p>Systems Integration & Architecture Schedule</p>
            </header>

            <div className="schedule-grid">
                {COURSE_DATA.map((week, idx) => (
                    <div key={idx} className="week-card">
                        <div className="week-meta">
                            <span className="week-label">WEEK {week.week}</span>
                            <span className="week-date">{week.date}</span>
                        </div>
                        <div className="action-row">
                            <button className="btn-lecture" onClick={() => openDrawer(week.lecture, 'LECTURE')}>
                                📖 {week.lecture.title}
                            </button>
                            <button className="btn-lab" onClick={() => openDrawer(week.lab, 'LABORATORY')}>
                                🧪 {week.lab.title}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* THE DRAWER */}
            <div className={`drawer-overlay ${drawerData ? 'visible' : ''}`} onClick={closeDrawer}>
                <div className={`drawer-panel ${drawerData ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                    <button className="close-drawer" onClick={closeDrawer}>×</button>
                    {drawerData && (
                        <div className="drawer-body">
                            <span className={`drawer-badge ${drawerData.type.toLowerCase()}`}>{drawerData.type}</span>
                            <h2>{drawerData.title}</h2>
                            <hr />
                            
                            {drawerData.type === 'LECTURE' ? (
                                <>
                                    <p className="description">{drawerData.description}</p>
                                    <h3>Key Topics</h3>
                                    <ul>{drawerData.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
                                </>
                            ) : (
                                <>
                                    <div className="lab-info">
                                        <div className="info-item">
                                            <strong>Focus:</strong> {drawerData.focus}
                                        </div>
                                        <div className="info-item">
                                            <strong>Outcome:</strong> {drawerData.outcome}
                                        </div>
                                    </div>
                                    <div className="diagram-container">
                                        <h4>Expected Modeling</h4>
                                        <div className="diagram-placeholder">
                                            
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
