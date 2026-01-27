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
            steps: ["Install PHP/MySQL", "Configure DB Connection", "Test Request/Response Flow"],
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
            steps: ["Identify Target API", "Handle JSON Parsing", "Store Data in MySQL"],
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
            steps: ["Draft Auth Sequence", "Integrate Mailtrap", "Validate OTP logic"],
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
            steps: ["Create DB Schema", "Build Admin CRUD", "Render Product List"],
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
            steps: ["Initialize Session Cart", "Implement Add/Remove Logic", "Persistence Layer for Orders"],
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
            steps: ["Stripe API Handshake", "Redirect to Checkout", "Handle Success Webhook"],
            outcome: "External system integration.",
            diagram: "Payment Gateway Callback Sequence"
        }
    },
    {
        week: 7,
        date: "Feb 17 / Feb 19",
        lecture: {
            title: "Integration Flow Modeling",
            description: "Visualizing the glue between disparate systems.",
            topics: ["Data Mapping", "Transformation Logic", "Flow Validation"]
        },
        lab: {
            title: "Lab 7: Messaging & Asynchronous Integration",
            focus: "Simulate async processing (queues / background jobs).",
            steps: ["Identify Slow Tasks", "Implement Simple Queue", "Background Processing Logic"],
            outcome: "Event-driven integration understanding.",
            diagram: "Asynchronous Message Flow"
        }
    },
    {
        week: 8,
        date: "Feb 24 / Feb 26",
        lecture: {
            title: "End-to-End Interaction Modeling",
            description: "Synthesizing UML and BPMN.",
            topics: ["Cross-system validation", "Message Integrity", "Sync vs Async"]
        },
        lab: {
            title: "Lab 8: Microservices-Based E-Commerce",
            focus: "Decompose monolith, define services, basic API communication.",
            steps: ["Define Service Boundaries", "Setup Node/PHP Services", "Inter-service API calls"],
            outcome: "Microservices architecture application.",
            diagram: "Microservices Integration Pattern"
        }
    },
    {
        week: 9,
        date: "Mar 3 / Mar 5",
        isExam: true,
        lecture: { title: "Midterm Exam", description: "Assessment of Weeks 1-8", topics: [] },
        lab: { 
            title: "Lab 9: Service Communication", 
            focus: "Routing, request delegation.", 
            steps: ["Setup API Gateway", "Routing Logic"], 
            outcome: "Managing inter-service communication.",
            diagram: "API Gateway Pattern"
        }
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        lecture: { title: "Scalability Fundamentals", description: "Design for growth.", topics: ["Vertical vs Horizontal", "Statelessness"] },
        lab: { 
            title: "Lab 10: Fault Handling & Resilience", 
            focus: "Timeouts, retries, graceful degradation.", 
            steps: ["Simulate Network Failure", "Implement Retry Policy"], 
            outcome: "Designing for failure.",
            diagram: "Circuit Breaker Pattern"
        }
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        lecture: { title: "Messaging & Coordination", description: "Distributed flow control.", topics: ["Queues", "Pub/Sub"] },
        lab: { 
            title: "Lab 11: Architecture Documentation", 
            focus: "BPMN + UML diagrams for integrated systems.", 
            steps: ["Draft Final Diagrams", "Update Tech Specs"], 
            outcome: "Architecture communication skills.",
            diagram: "Integrated System Overview"
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
            steps: ["Seed 1M Records", "Measure Baseline Performance", "Implement Cache-Aside Pattern", "Verify Invalidation"],
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
            steps: ["Document Parsing", "Inverted Index Construction", "Search Query Logic", "Result Ranking"],
            outcome: "Read-optimized system design.",
            diagram: "Search Indexing Architecture"
        }
    },
    {
        week: 14,
        date: "Apr 14 / Apr 16",
        lecture: { title: "Final Review", description: "Synthesis of all patterns.", topics: ["Final Defense Prep"] },
        lab: { 
            title: "Lab 14: Final Project Refinement", 
            focus: "System hardening, documentation.", 
            steps: ["Final Bug Fixes", "Complete Doc Package"], 
            outcome: "Production-ready system integration.",
            diagram: "Final System Architecture"
        }
    }
];

const App = () => {
    const [drawerData, setDrawerData] = React.useState(null);

    const openDrawer = (data, type, week) => {
        setDrawerData({ ...data, type, week });
    };

    const closeDrawer = () => setDrawerData(null);

    return (
        <div className="sia-container">
            <header className="hero no-print">
                <h1>SYSARCH 2026</h1>
                <p>Systems Integration & Architecture • Course Schedule</p>
            </header>

            <div className="schedule-grid no-print">
                {COURSE_DATA.map((week, idx) => (
                    <div key={idx} className="week-card">
                        <div className="week-meta">
                            <span className="week-label">WEEK {week.week}</span>
                            <span className="week-date">{week.date}</span>
                        </div>
                        <div className="action-row">
                            <button className="btn-lecture" onClick={() => openDrawer(week.lecture, 'LECTURE', week.week)}>
                                📖 {week.lecture.title}
                            </button>
                            <button className="btn-lab" onClick={() => openDrawer(week.lab, 'LABORATORY', week.week)}>
                                🧪 {week.lab.title}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* THE DRAWER */}
            <div className={`drawer-overlay ${drawerData ? 'visible' : ''} no-print`} onClick={closeDrawer}>
                <div className={`drawer-panel ${drawerData ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                    <button className="close-drawer" onClick={closeDrawer}>&times;</button>
                    {drawerData && (
                        <div className="drawer-body">
                            <span className={`drawer-badge ${drawerData.type.toLowerCase()}`}>{drawerData.type}</span>
                            <h2>{drawerData.title}</h2>
                            <p className="week-ref">Week {drawerData.week}</p>
                            <hr />
                            
                            {drawerData.type === 'LECTURE' ? (
                                <div>
                                    <p className="description">{drawerData.description}</p>
                                    <h3>Key Topics</h3>
                                    <ul>{drawerData.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
                                </div>
                            ) : (
                                <div>
                                    <div className="lab-info">
                                        <div className="info-item">
                                            <strong>Technical Focus:</strong>
                                            <p>{drawerData.focus}</p>
                                        </div>
                                    </div>
                                    
                                    <h3>Lab Checklist</h3>
                                    <ul className="checklist">
                                        {(drawerData.steps || []).map((step, i) => (
                                            <li key={i}><input type="checkbox" /> {step}</li>
                                        ))}
                                    </ul>

                                    <div className="outcome-box">
                                        <strong>Expected Outcome:</strong>
                                        <p>{drawerData.outcome}</p>
                                    </div>

                                    <button className="btn-print" onClick={() => window.print()}>
                                        🖨️ Save Checklist (PDF)
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* PRINT VIEW (HIDDEN ON SCREEN) */}
            {drawerData && (
                <div className="print-only">
                    <h1>SIA 2026 Checklist: {drawerData.title}</h1>
                    <p>Week {drawerData.week}</p>
                    <hr />
                    <h3>Details</h3>
                    <p>{drawerData.focus || drawerData.description}</p>
                    <h3>Checklist</h3>
                    <ul>
                        {(drawerData.steps || drawerData.topics || []).map((item, i) => (
                            <li key={i}>[ ] {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
