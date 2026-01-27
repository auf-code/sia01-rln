/**
 * SIA 2026 - Course Schedule Script
 * Features: Dual-collapsible columns, Responsive Grid, and instructional Diagram cues.
 */

// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        lecture: {
            title: "Course Introduction & Foundations of SIA",
            content: "Orientation, role of a system architect, and architectural layers.",
            note: "Alignment: Orientation"
        },
        lab: {
            title: "Lab 1: Introduction to SIA",
            content: "Environment setup and baseline system scoping."
        }
    },
    {
        week: 2,
        date: "Jan 13 / Jan 15",
        lecture: {
            title: "Roles and Tasks of a System Architect",
            content: "Decision-making, stakeholder management, and technical leadership.",
            note: "Alignment: Role-centric framing"
        },
        lab: {
            title: "Lab 2: Architect Role Exploration",
            content: "Case studies on architectural failure vs. success."
        }
    },
    {
        week: 3,
        date: "Jan 20 / Jan 22",
        lecture: {
            title: "Monolithic vs Microservices Architecture",
            content: "Scalability trade-offs and structural differences.",
            note: "Alignment: Architectural grounding"
        },
        lab: {
            title: "Lab 3: Monolithic System Exercise",
            content: "Analyzing legacy monolithic codebases."
        }
    },
    {
        week: 4,
        date: "Jan 27 / Jan 29",
        lecture: {
            title: "System vs Software Architecture",
            content: "Modeling perspective: boundaries, high-level views, and components.",
            note: "Alignment: Legacy constraints + boundaries"
        },
        lab: {
            title: "Lab 4: Legacy CMS Extension (Week 1)",
            content: "Implement Product CRUD (admin) and Listing (user) using Procedural PHP."
        }
    },
    {
        week: 5,
        date: "Feb 3 / Feb 5",
        lecture: {
            title: "Business Process Modeling with BPMN",
            content: "Modeling exact flows for transactions and logistics.",
            note: "Alignment: BPMN models implemented cart flows"
        },
        lab: {
            title: "Lab 5: Legacy CMS Extension (Week 2)",
            content: "Implement session-based Cart and Order processing with DB persistence."
        }
    },
    {
        week: 6,
        date: "Feb 10 / Feb 12",
        lecture: {
            title: "UML for System Modeling",
            content: "Use Case, Class, and Sequence Diagrams.",
            note: "Alignment: Model the CMS + Cart system"
        },
        lab: {
            title: "Lab 6: UML Diagrams",
            content: "Drafting structural and behavioral models for the legacy extension."
        }
    },
    {
        week: 7,
        date: "Feb 17 / Feb 19",
        lecture: {
            title: "SysML for Systems Architecture",
            content: "Structural modeling and system requirements tracking.",
            note: "Alignment: Structural modeling"
        },
        lab: {
            title: "Lab 7: Integration Flow Modeling",
            content: "Mapping how the CMS talks to external data sources."
        }
    },
    {
        week: 8,
        date: "Feb 24 / Feb 26",
        lecture: {
            title: "Modeling System Interactions & Integration Flows",
            content: "Synthesizing UML and BPMN into a cohesive view.",
            note: "Alignment: UML + BPMN Synthesis"
        },
        lab: {
            title: "Lab 8: End-to-End Interaction Modeling",
            content: "Validating transaction flows across system boundaries."
        }
    },
    {
        week: 9,
        date: "Mar 3 / Mar 5",
        isExam: true,
        lecture: { title: "Midterm Exam", content: "No lecture content." },
        lab: { title: "Lab 9: Midterm Review", content: "Finalizing and debugging CMS extensions." }
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        lecture: {
            title: "Scalability Fundamentals",
            content: "Vertical vs. Horizontal scaling, statelessness.",
            note: "Alignment: Conceptual shift"
        },
        lab: {
            title: "Lab 10: Integration Pattern Exercises",
            content: "Designing for high-availability."
        }
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        lecture: {
            title: "Load Balancing & Caching",
            content: "Managing traffic and optimizing performance.",
            note: "Alignment: Distributed concerns"
        },
        lab: {
            title: "Lab 11: Messaging & Coordination",
            content: "Asynchronous processing and message queues."
        }
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        lecture: {
            title: "Data Management in Distributed Systems",
            content: "Consistency, replication, and CAP Theorem.",
            note: "University Days (Mar 23–27)"
        },
        lab: {
            title: "Lab 12: Data Modeling",
            content: "Advanced relational and non-relational modeling."
        }
    },
    {
        week: "Break",
        date: "Mar 27 - Apr 3",
        isBreak: true,
        lecture: { title: "Holy Week Break", content: "No classes." },
        lab: { title: "No Lab", content: "" }
    },
    {
        week: 13,
        date: "Apr 7 / Apr 9",
        lecture: {
            title: "Modeling Security & Trust Boundaries",
            content: "Security-by-design and boundary analysis.",
            note: "Alignment: Security views"
        },
        lab: {
            title: "Lab 13: Security Modeling",
            content: "Defining trust zones for the integrated system."
        }
    },
    {
        week: 14,
        date: "Apr 14 / Apr 16",
        lecture: {
            title: "Architectural Documentation & Governance",
            content: "Writing ADRs and maintenance guidelines.",
            note: "Alignment: Documentation"
        },
        lab: {
            title: "Lab 14: Documentation Exercises",
            content: "Drafting the final architectural specification."
        }
    },
    {
        week: 15,
        date: "Apr 21 / Apr 23",
        lecture: {
            title: "Modeling Legacy Systems & Case Studies",
            content: "End-to-end review of modern and legacy integration.",
            note: "Alignment: Synthesis"
        },
        lab: {
            title: "Lab 15: Legacy Systems / Case Prep",
            content: "Preparing final project defenses."
        }
    },
    {
        week: 16,
        date: "Apr 28 / Apr 30",
        isExam: true,
        lecture: { title: "Final Project Presentations", content: "Demo day." },
        lab: { title: "Lab 16: Final Project Preparation", content: "Final technical polish." }
    }
];

// --- COMPONENTS ---

const ScheduleItem = ({ item }) => {
    const [labOpen, setLabOpen] = React.useState(false);
    const [lecOpen, setLecOpen] = React.useState(false);

    if (item.isBreak) {
        return (
            <div className="week-row break">
                <div className="week-label">HOLIDAY</div>
                <div className="holiday-text">{item.date}: {item.lecture.title}</div>
            </div>
        );
    }

    return (
        <div className={`week-row ${item.isExam ? 'exam-row' : ''}`}>
            <div className="week-header">
                <div className="week-num">WEEK {item.week}</div>
                <div className="week-dates">{item.date}</div>
            </div>

            <div className="split-grid">
                {/* TUESDAY LAB */}
                <div className={`collapsible-box lab ${labOpen ? 'active' : ''}`}>
                    <div className="box-trigger" onClick={() => setLabOpen(!labOpen)}>
                        <div className="trigger-top">
                            <span className="badge">TUE - LAB</span>
                            <span className="toggle-icon">{labOpen ? '−' : '+'}</span>
                        </div>
                        <h4>{item.lab.title}</h4>
                    </div>
                    {labOpen && (
                        <div className="box-content">
                            <p>{item.lab.content}</p>
                            {item.week === 6 && (
                                <div className="diagram-tip">
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* THURSDAY LECTURE */}
                <div className={`collapsible-box lecture ${lecOpen ? 'active' : ''}`}>
                    <div className="box-trigger" onClick={() => setLecOpen(!lecOpen)}>
                        <div className="trigger-top">
                            <span className="badge">THU - LEC</span>
                            <span className="toggle-icon">{lecOpen ? '−' : '+'}</span>
                        </div>
                        <h4>{item.lecture.title}</h4>
                    </div>
                    {lecOpen && (
                        <div className="box-content">
                            <p>{item.lecture.content}</p>
                            {item.lecture.note && (
                                <div className="alignment-note">
                                    <strong>Notes:</strong> {item.lecture.note}
                                </div>
                            )}
                            {item.week === 5 && (
                                <div className="diagram-tip">
                                    
                                </div>
                            )}
                            {item.week === 13 && (
                                <div className="diagram-tip">
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP ---
const App = () => {
    return (
        <div className="sia-app">
            <nav className="sia-nav">
                <div className="brand">SYSARCH 2026</div>
                <div className="nav-info">CS405 • Systems Integration</div>
            </nav>

            <header className="sia-hero">
                <h1>Course Schedule</h1>
                <p>Tuesday (Lab) & Thursday (Lecture) Alignment</p>
            </header>

            <main className="container">
                <div className="schedule-list">
                    {COURSE_DATA.map((item, idx) => (
                        <ScheduleItem key={idx} item={item} />
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; 2026 Information Technology Department • Final Exams: May 4–5</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
