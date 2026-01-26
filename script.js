// --- DATA CONFIGURATION ---
const COURSE_DATA = [
    {
        week: 1,
        date: "Jan 6 / Jan 8",
        title: "Course Introduction & Foundations of SIA",
        lab: "Lab 1: High-Level & Low-Level System Design",
        topics: ["Role of a system architect", "Architectural thinking vs implementation", "System scope & boundaries"],
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
        topics: ["Identity Management (IAM)", "Session management", "RBAC fundamentals"],
        outcome: "Establish identity foundation reused across systems.",
        labDetails: {
            title: "🧪 Lab 2: Vanilla PHP Auth",
            items: [
                "Technical Focus: Registration, login, sessions, roles.",
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
        topics: ["Security flow modeling", "MFA/OTP concepts", "Login hardening"],
        outcome: "Teaches security flow modeling before implementation.",
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
        topics: ["Layered architecture", "Base code scaffolding", "Schema validation"],
        outcome: "Teaches deliberate monolithic architecture construction.",
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
        lab: "Lab 5: PHP OOP Monolithic Implementation",
        topics: ["OOP Services & Repositories", "Controller patterns", "Design-to-code traceability"],
        outcome: "Strengthens implementation discipline through live refactoring.",
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
        topics: ["Third-party integration", "Webhook security", "Trust boundaries"],
        outcome: "Introduces high-risk external integration and failure analysis.",
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
        topics: ["REST API creation", "External consumption", "JSON standards"],
        outcome: "Enables external consumption of internal services.",
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
        title: "Modeling System Interactions",
        lab: "Lab 8: Supplier & Product Source Integration",
        topics: ["Upstream integration", "API Contracts", "Data mapping"],
        outcome: "Introduces contract-first design for third-party sources.",
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
        lab: "Midterm Review Session",
        isExam: true,
        topics: ["No new lecture content", "Comprehensive review of weeks 1-8"],
        outcome: "Mar 5-7 Examination Period.",
        labDetails: {
            title: "🧪 Exam Prep",
            items: [
                "Review of all diagrams to date.",
                "Mock integration scenarios.",
                "Q&A on architectural patterns."
            ]
        }
    },
    {
        week: 10,
        date: "Mar 10 / Mar 12",
        title: "Scalability Fundamentals",
        lab: "Lab 9: Content-Driven Website Using Strapi",
        topics: ["Headless CMS", "Content vs Business logic", "API-led delivery"],
        outcome: "Separates content management from core application logic.",
        labDetails: {
            title: "🧪 Lab 9: Headless CMS",
            items: [
                "Technical Focus: Strapi CMS integration.",
                "Diagrams: Component Diagram, Deployment Diagram.",
                "Activity: Strapi admin vs API demo."
            ]
        }
    },
    {
        week: 11,
        date: "Mar 17 / Mar 19",
        title: "Load Balancing & Caching",
        lab: "Lab 10: Message Queue Fundamentals",
        topics: ["Async processing", "Broker patterns", "Decoupling systems"],
        outcome: "Teaches decoupling and scalability via sync/async comparison.",
        labDetails: {
            title: "🧪 Lab 10: Messaging Queues",
            items: [
                "Technical Focus: Async processing (Redis/RabbitMQ).",
                "Diagrams: Event Flow Diagram, Queue Architecture Diagram.",
                "Activity: Sync vs async comparison."
            ]
        }
    },
    {
        week: 12,
        date: "Mar 24 / Mar 26",
        title: "Data Management & University Days",
        lab: "Lab 11: Newsletter & Email Service",
        topics: ["Email templating", "Queued delivery", "Reliability"],
        outcome: "University Days: Mar 23–27 (Limited classes).",
        labDetails: {
            title: "🧪 Lab 11: Email Integration",
            items: [
                "Technical Focus: Templating and queued sending.",
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
        title: "Security & Trust Boundaries",
        lab: "Lab 12: Logistics & ERP Integration",
        topics: ["Enterprise Resource Planning", "Downstream integration", "BPMN alignment"],
        outcome: "Practical downstream enterprise integration walkthrough.",
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
        lab: "Lab 13: Product Search Engine Integration",
        topics: ["Search-as-a-Service", "Indexing", "SaaS integration"],
        outcome: "Mastering search relevance and specialized SaaS integration.",
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
        title: "Legacy Systems & End-to-End Prep",
        lab: "Lab 14 & 15: Mobile & Error Monitoring",
        topics: ["API Gateway", "Observability", "Versioning"],
        outcome: "Reinforces API-first architecture and operational readiness.",
        labDetails: {
            title: "🧪 Lab 14-15: Operational Integration",
            items: [
                "Lab 14: Mobile App API Integration (Gateway Diagrams).",
                "Lab 15: Error Monitoring & Teams Alerts (Incident Flow).",
                "Activity: Failure injection exercise."
            ]
        }
    },
    {
        week: 16,
        date: "Apr 28 / Apr 30",
        title: "Final Integration & RFID",
        lab: "Lab 16 & 17: RFID & Final Review",
        topics: ["Cyber-physical systems", "Hardware interaction", "Synthesis"],
        isExam: true,
        outcome: "Full system synthesis and architectural defense.",
        labDetails: {
            title: "🧪 Lab 16-17: The Final Push",
            items: [
                "Lab 16: RFID Payroll Integration.",
                "Lab 17: Final System Integration & Review.",
                "Final Project Presentations (Thursday)."
            ]
        }
    }
];

// --- REACT COMPONENTS (Simplified for brevity, ensuring it maps COURSE_DATA) ---

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
                    {item.topics && (
                        <div>
                            <strong>Core Topics:</strong>
                            <ul className="topic-list">
                                {item.topics.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                    )}
                    
                    {/* Strategically placed Diagram cues */}
                    {item.lab.includes("Payment") && }
                    {item.lab.includes("BPMN") && }
                    {item.lab.includes("Strapi") && }
                    {item.lab.includes("RFID") && }

                    {item.outcome && <div className="outcome-box"><strong>Outcome:</strong> {item.outcome}</div>}
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

// ... Rest of the React App and Rendering logic remains the same ...
