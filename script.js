// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        lectureTitle: "Course Introduction & Foundations of SIA",
        lectureTopics: ["Role of a system architect", "Overview of SIA", "Monolithic vs microservices overview"],
        lectureOutcome: "Establish architectural thinking before coding.",
        labTitle: "Lab 1: High-Level & Low-Level Design",
        labFocus: "System scope, layers, boundaries",
        labDiagrams: "System Context Diagram, HLD, LLD",
        labActivity: "Design critique session"
    },
    {
        week: 2,
        date: "Jan 13 / Jan 15",
        lectureTitle: "Roles and Tasks of a System Architect",
        lectureTopics: ["Responsibilities & Skills", "Decision-making in architecture", "Stakeholder communication"],
        lectureOutcome: "Understanding the architect's position in the SDLC.",
        labTitle: "Lab 2: User Authentication (Vanilla PHP)",
        labFocus: "Registration, login, sessions",
        labDiagrams: "UML Use Case Diagram, ER Diagram",
        labActivity: "IAM case discussion"
    },
    {
        week: 3,
        date: "Jan 20 / Jan 22",
        lectureTitle: "Monolithic vs Microservices Architecture",
        lectureTopics: ["Monolithic structure", "Microservices principles", "Trade-off analysis"],
        lectureOutcome: "Strategic choosing of architectural patterns.",
        labTitle: "Lab 3: Secure Auth Modeling",
        labFocus: "CAPTCHA, OTP flows",
        labDiagrams: "Sequence Diagram, Activity Diagram",
        labActivity: "Auth attack walkthrough"
    },
    {
        week: 4,
        date: "Jan 27 / Jan 29",
        lectureTitle: "System vs Software Architecture",
        lectureTopics: ["Modeling Perspectives", "C4 Model", "Viewpoints (Logical, Physical)"],
        lectureOutcome: "Differentiating high-level systems from code structure.",
        labTitle: "Lab 4: Monolithic Design & Scaffold",
        labFocus: "Layered monolith, base code, schema",
        labDiagrams: "Layered Architecture Diagram, ER Diagram",
        labActivity: "Base code walkthrough"
    },
    {
        week: 5,
        date: "Feb 3 / Feb 5",
        lectureTitle: "Business Process Modeling with BPMN",
        lectureTopics: ["BPMN elements", "Orchestration vs Choreography", "Process mapping"],
        lectureOutcome: "Aligning technical flows with business needs.",
        labTitle: "Lab 5: PHP OOP Implementation",
        labFocus: "OOP services, repositories",
        labDiagrams: "Design-to-Code Traceability Diagram",
        labActivity: "Refactoring demo"
    },
    {
        week: 6,
        date: "Feb 10 / Feb 12",
        lectureTitle: "UML for System Modeling",
        lectureTopics: ["Use Case, Class, and Sequence Diagrams", "Behavioral modeling"],
        lectureOutcome: "Standardizing architectural communication.",
        labTitle: "Lab 6: Payment Gateway Integration",
        labFocus: "Stripe checkout, webhooks",
        labDiagrams: "Sequence Diagram, Trust Boundary Diagram",
        labActivity: "Webhook failure analysis"
    },
    {
        week: 7,
        date: "Feb 17 / Feb 19",
        lectureTitle: "SysML for Systems Architecture",
        lectureTopics: ["SysML vs UML", "Block Definition Diagrams", "Internal Blocks"],
        lectureOutcome: "Modeling complex system-of-systems.",
        labTitle: "Lab 7: API Programming Fundamentals",
        labFocus: "REST APIs from monolith",
        labDiagrams: "API Sequence Diagram, Component Diagram",
        labActivity: "REST anti-patterns"
    },
    {
        week: 8,
        date: "Feb 24 / Feb 26",
        lectureTitle: "Modeling System Interactions",
        lectureTopics: ["UML + BPMN synthesis", "Integration logic", "Data flow"],
        lectureOutcome: "Mapping end-to-end interactions across boundaries.",
        labTitle: "Lab 8: Microservice Implementation",
        labFocus: "Decompose monolith into microservices",
        labDiagrams: "Bounded Context Diagram, Deployment Diagram",
        labActivity: "Monolith vs microservices trade-off discussion"
    },
    {
        week: 9,
        date: "Mar 3 / Mar 5",
        isExam: true,
        lectureTitle: "Midterm Examination",
        lectureTopics: ["No new lecture content"],
        lectureOutcome: "Exam period: Mar 5–7",
        labTitle: "Midterm Assessment",
        labFocus: "Review of Weeks 1-8",
        labDiagrams: "All previous diagrams",
        labActivity: "Practical exam preparation"
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        lectureTitle: "Scalability Fundamentals",
        lectureTopics: ["Vertical vs Horizontal scaling", "Stateless services"],
        lectureOutcome: "Designing for growth and high availability.",
        labTitle: "Lab 9: Strapi CMS Integration",
        labFocus: "Headless CMS integration",
        labDiagrams: "Component Diagram, Deployment Diagram",
        labActivity: "Strapi demo"
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        lectureTitle: "Load Balancing & Caching",
        lectureTopics: ["Load distribution algorithms", "Caching strategies"],
        lectureOutcome: "Optimizing system performance and throughput.",
        labTitle: "Lab 10: Message Queue Fundamentals",
        labFocus: "Async messaging",
        labDiagrams: "Event Flow Diagram, Queue Architecture Diagram",
        labActivity: "Sync vs async demo"
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        lectureTitle: "Data Management in Distributed Systems",
        lectureTopics: ["Database replication", "CAP Theorem"],
        lectureOutcome: "University Days Mar 23-27 (Limited Classes).",
        labTitle: "Lab 11: Email Service Integration",
        labFocus: "Queued email sending",
        labDiagrams: "Sequence Diagram, Component Diagram",
        labActivity: "Deliverability discussion"
    },
    {
        week: "Break",
        date: "Mar 27 - Apr 3",
        isBreak: true,
        lectureTitle: "Holy Week Break",
        labTitle: "No Classes"
    },
    {
        week: 13,
        date: "Apr 7 / Apr 9",
        lectureTitle: "Modeling Security & Trust Boundaries",
        lectureTopics: ["Threat modeling", "Trust zones", "OAuth flows"],
        lectureOutcome: "Securing the integration perimeter.",
        labTitle: "Lab 12: Logistics & ERP Integration",
        labFocus: "ERP simulation",
        labDiagrams: "BPMN, Integration Architecture Diagram",
        labActivity: "ERP walkthrough"
    },
    {
        week: 14,
        date: "Apr 14 / Apr 16",
        lectureTitle: "Architectural Documentation & Governance",
        lectureTopics: ["ADRs (Decision Records)", "Stakeholder communication"],
        lectureOutcome: "Formalizing design choices.",
        labTitle: "Lab 13: Product Search Integration",
        labFocus: "Algolia search",
        labDiagrams: "System Interaction Diagram",
        labActivity: "Search tuning"
    },
    {
        week: 15,
        date: "Apr 21 / Apr 23",
        lectureTitle: "Modeling Legacy Systems & Case Studies",
        lectureTopics: ["Strangler Fig pattern", "System modernization"],
        lectureOutcome: "Planning for legacy evolution.",
        labTitle: "Lab 14 & 15: Mobile & Error Monitoring",
        labFocus: "API reuse & Incident Flow",
        labDiagrams: "API Gateway Diagram, Incident Flow Diagram",
        labActivity: "Failure injection"
    },
    {
        week: 16,
        date: "Apr 28 / Apr 30",
        isExam: true,
        lectureTitle: "Final Project Presentations",
        lectureTopics: ["Design defense session"],
        lectureOutcome: "Validation of architectural synthesis.",
        labTitle: "Lab 16 & 17: RFID & Final Review",
        labFocus: "RFID integration & Synthesis",
        labDiagrams: "Hardware–Software Interaction Diagram, Full System Arch",
        labActivity: "Design defense"
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

const ScheduleItem = ({ item }) => {
    const [isLectureOpen, setIsLectureOpen] = React.useState(false);
    const [isLabOpen, setIsLabOpen] = React.useState(false);

    if (item.isBreak) {
        return (
            <div className="module break">
                <div className="module-header">
                    <div className="module-title"><span>{item.week}</span> {item.lectureTitle}</div>
                    <div className="module-date">{item.date}</div>
                </div>
            </div>
        );
    }

    return (
        <div className={`week-row ${item.isExam ? 'exam-row' : ''}`}>
            <div className="week-info">
                <h3>Week {item.week}</h3>
                <p>{item.date}</p>
            </div>

            <div className="split-container">
                {/* LECTURE COLUMN */}
                <div className={`collapsible-panel lecture ${isLectureOpen ? 'open' : ''}`}>
                    <div className="panel-header" onClick={() => setIsLectureOpen(!isLectureOpen)}>
                        <div className="panel-label">LECTURE</div>
                        <h4>{item.lectureTitle}</h4>
                        <span className="toggle-icon">{isLectureOpen ? '−' : '+'}</span>
                    </div>
                    {isLectureOpen && (
                        <div className="panel-content">
                            <strong>Topics:</strong>
                            <ul>{item.lectureTopics.map((t, i) => <li key={i}>{t}</li>)}</ul>
                            <p className="outcome-text"><strong>Outcome:</strong> {item.lectureOutcome}</p>
                            {item.lectureTitle.includes("Monolithic") && (
                                <div className="diagram-zone">

[Image of Monolithic vs Microservices Architecture]
</div>
                            )}
                            {item.lectureTitle.includes("BPMN") && (
                                <div className="diagram-zone"></div>
                            )}
                            {item.lectureTitle.includes("SysML") && (
                                <div className="diagram-zone"></div>
                            )}
                        </div>
                    )}
                </div>

                {/* LAB COLUMN */}
                <div className={`collapsible-panel lab ${isLabOpen ? 'open' : ''}`}>
                    <div className="panel-header" onClick={() => setIsLabOpen(!isLabOpen)}>
                        <div className="panel-label">LABORATORY</div>
                        <h4>{item.labTitle}</h4>
                        <span className="toggle-icon">{isLabOpen ? '−' : '+'}</span>
                    </div>
                    {isLabOpen && (
                        <div className="panel-content">
                            <p><strong>Technical Focus:</strong> {item.labFocus}</p>
                            <p><strong>Diagrams:</strong> {item.labDiagrams}</p>
                            <p><strong>Activity:</strong> {item.labActivity}</p>
                            
                            {item.labTitle.includes("High-Level") && (
                                <div className="diagram-zone"></div>
                            )}
                            {item.labTitle.includes("Payment") && (
                                <div className="diagram-zone"></div>
                            )}
                            {item.labTitle.includes("Message Queue") && (
                                <div className="diagram-zone"></div>
                            )}
                            {item.labTitle.includes("RFID") && (
                                <div className="diagram-zone"></div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ScheduleList = () => (
    <div className="container" id="schedule">
        <div className="section-header">
            <h2>Course Schedule 2026</h2>
            <p>Balanced theory and hands-on laboratory application.</p>
        </div>
        {COURSE_DATA.map((item, index) => <ScheduleItem key={index} item={item} />)}
    </div>
);

// --- MAIN APP ---
const App = () => (
    <React.Fragment>
        <Navbar />
        <header>
            <h1>Systems Integration & Architecture</h1>
            <p>CS405 • Spring Semester 2026</p>
        </header>
        <ScheduleList />
        <footer>
            <p>&copy; 2026 Systems Integration Department</p>
        </footer>
    </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
