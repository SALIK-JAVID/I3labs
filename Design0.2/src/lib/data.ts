import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  FlaskConical,
  Trophy,
  Lightbulb,
  Sparkles,
  Rocket,
  Wrench,
  FileText,
  Boxes,
  GraduationCap,
  LineChart,
  Award,
  Layers,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────── Programs ───────────────────────── */

export type Program = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: LucideIcon;
  image: string;
  grades: string;
  duration: string;
  level: "Foundation" | "Engineering" | "Advanced";
  outcomes: string[];
  modules: { title: string; detail: string }[];
  tools: string[];
};

export const programs: Program[] = [
  {
    slug: "robotics",
    title: "Robotics & Automation",
    short: "Build, program, and compete with robots — from beginner kits to fully autonomous machines.",
    summary:
      "Students move from simple motors and sensors to articulated robotic arms, learning mechanics, electronics and control logic through build-first projects.",
    icon: Bot,
    image: "/images/robot-gripper.jpg",
    grades: "Grades 4 – 12",
    duration: "36 weeks",
    level: "Engineering",
    outcomes: [
      "Assemble and calibrate multi-joint robots",
      "Program autonomous behaviour with sensors",
      "Understand kinematics, torque and gearing",
      "Compete in WRO & FIRST-style challenges",
    ],
    modules: [
      { title: "Mechanisms & Motion", detail: "Gears, linkages, levers and the physics of movement." },
      { title: "Sensors & Feedback", detail: "Ultrasonic, IR, gyro and closed-loop control." },
      { title: "Robotic Arms", detail: "Degrees of freedom, end-effectors and pick-and-place." },
      { title: "Autonomy Challenge", detail: "Capstone: a robot that navigates and completes a mission." },
    ],
    tools: ["Arduino", "LEGO EV3", "ROS", "WRO Prep"],
  },
  {
    slug: "artificial-intelligence",
    title: "AI & Machine Learning",
    short: "Explore neural networks, computer vision, and NLP through project-based learning.",
    summary:
      "A hands-on introduction to AI and machine learning — from classifying images with no-code tools to training and deploying small models in Python.",
    icon: BrainCircuit,
    image: "/images/robotic-actuator.jpg",
    grades: "Grades 6 – 12",
    duration: "32 weeks",
    level: "Advanced",
    outcomes: [
      "Explain how models learn from data",
      "Build image and voice recognition projects",
      "Train, evaluate and improve ML models",
      "Discuss AI ethics and responsible use",
    ],
    modules: [
      { title: "Thinking in Data", detail: "Datasets, features, labels and bias." },
      { title: "Computer Vision", detail: "Teach a camera to recognise objects and gestures." },
      { title: "Machine Learning in Python", detail: "scikit-learn, notebooks and model evaluation." },
      { title: "AI Product Sprint", detail: "Capstone: ship an AI-powered solution to a local problem." },
    ],
    tools: ["Python", "TensorFlow Lite", "Image Recognition"],
  },
  {
    slug: "coding",
    title: "Coding & App Development",
    short: "From Scratch blocks to Flutter — students build real apps and games they can share.",
    summary:
      "A structured coding pathway that builds computational thinking early and grows into real programming, web apps and game development.",
    icon: Code2,
    image: "/images/robot-gripper.jpg",
    grades: "Grades 1 – 12",
    duration: "40 weeks",
    level: "Foundation",
    outcomes: [
      "Decompose problems into algorithms",
      "Write clean Python and JavaScript",
      "Build and publish web and mobile apps",
      "Debug systematically and collaborate with Git",
    ],
    modules: [
      { title: "Computational Thinking", detail: "Sequences, loops and conditions with block coding." },
      { title: "Python Foundations", detail: "Variables, functions, data structures and files." },
      { title: "Web & Apps", detail: "HTML, CSS, JavaScript and app builders." },
      { title: "Game Studio", detail: "Capstone: design and publish an original game." },
    ],
    tools: ["Scratch", "Python", "Flutter", "Game Dev"],
  },
  {
    slug: "iot",
    title: "Electronics & IoT",
    short: "Circuit design and connected hardware projects that bridge digital and physical worlds.",
    summary:
      "Students design connected devices — smart homes, weather stations and farm monitors — combining electronics, networking and dashboards.",
    icon: Cpu,
    image: "/images/robotic-actuator.jpg",
    grades: "Grades 7 – 12",
    duration: "28 weeks",
    level: "Advanced",
    outcomes: [
      "Prototype circuits with microcontrollers",
      "Stream sensor data to cloud dashboards",
      "Automate devices with rules and triggers",
      "Design for power, safety and reliability",
    ],
    modules: [
      { title: "Electronics Essentials", detail: "Circuits, breadboards and measurement." },
      { title: "Microcontrollers", detail: "ESP32, GPIO, PWM and serial communication." },
      { title: "Cloud & Dashboards", detail: "MQTT, APIs and live data visualisation." },
      { title: "Smart Campus", detail: "Capstone: a connected device deployed on campus." },
    ],
    tools: ["ESP32", "Raspberry Pi", "Smart Home"],
  },
  {
    slug: "science",
    title: "Science & Innovation Labs",
    short: "Experiment-driven inquiry into physics, chemistry, and biology with modern tools.",
    summary:
      "Inquiry-driven experiments that connect classroom science to engineering — measure, model and explain the world with real instruments.",
    icon: FlaskConical,
    image: "/images/robot-gripper.jpg",
    grades: "Grades 1 – 10",
    duration: "36 weeks",
    level: "Foundation",
    outcomes: [
      "Form hypotheses and design fair tests",
      "Collect and analyse experimental data",
      "Connect science concepts to engineering",
      "Communicate findings like a researcher",
    ],
    modules: [
      { title: "Forces & Energy", detail: "Motion, simple machines and renewable energy kits." },
      { title: "Matter & Reactions", detail: "Safe chemistry with measurement and logging." },
      { title: "Living Systems", detail: "Microscopy, ecosystems and bio-sensors." },
      { title: "Science Fair", detail: "Capstone: an original investigation presented publicly." },
    ],
    tools: ["Biology", "Physics", "Chemistry"],
  },
  {
    slug: "competitions",
    title: "Global Competitions",
    short: "Representing institutions at WRO, FIRST Robotics, NASA challenges, and innovation fairs.",
    summary:
      "Dedicated mentoring for students who want to compete — team formation, engineering notebooks, practice rounds and on-site support.",
    icon: Trophy,
    image: "/images/robotic-actuator.jpg",
    grades: "Grades 5 – 12",
    duration: "Season-based",
    level: "Engineering",
    outcomes: [
      "Work in high-performing engineering teams",
      "Document designs in engineering notebooks",
      "Pitch and defend solutions to judges",
      "Compete nationally and internationally",
    ],
    modules: [
      { title: "Team Formation", detail: "Roles, planning and project management." },
      { title: "Build Season", detail: "Rapid prototyping, testing and iteration." },
      { title: "Pitch & Judging", detail: "Storytelling, presentation and Q&A practice." },
      { title: "Competition Day", detail: "On-site mentoring and post-event reflection." },
    ],
    tools: ["WRO", "FIRST", "NASA", "Hackathons"],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

/* ───────────────────────── Curriculum tracks ───────────────────────── */

export const tracks = [
  {
    label: "Foundation",
    title: "STEM Foundations",
    desc: "Core science, technology, engineering, and math concepts for beginners and early learners.",
    topics: ["Basic Robotics", "Scratch Programming", "Electronics Basics", "Scientific Method", "Math & Logic"],
    tools: ["Arduino Starter", "Scratch", "Tinkercad"],
    image: "/images/robot-gripper.jpg",
  },
  {
    label: "Advanced Tech",
    title: "Advanced Technology",
    desc: "AI, IoT, and advanced coding for intermediate and senior learners ready for industry-level skills.",
    topics: ["Artificial Intelligence", "Machine Learning", "Python & JS", "IoT Systems", "Data Science"],
    tools: ["Raspberry Pi", "Python", "TensorFlow Lite"],
    image: "/images/robotic-actuator.jpg",
  },
  {
    label: "Pre-Engineering",
    title: "Pre-Engineering Track",
    desc: "Industry-grade skills for students preparing for engineering, design, and innovation careers.",
    topics: ["PCB Design", "CAD/CAM Modeling", "Control Systems", "Patent Process", "Startup Ideation"],
    tools: ["AutoCAD", "SolidWorks", "KiCad"],
    image: "/images/robot-gripper.jpg",
  },
];

/* ───────────────────────── 3IPP framework ───────────────────────── */

export const ippSteps = [
  { num: "01", icon: Lightbulb, title: "Ideation", desc: "Students identify real-world problems and brainstorm original solutions under expert mentorship." },
  { num: "02", icon: Sparkles, title: "Innovation", desc: "Ideas are refined into structured innovation frameworks through research, design thinking, and iteration." },
  { num: "03", icon: Rocket, title: "Incubation", desc: "Promising projects enter an incubation phase with business mentoring and startup ecosystem exposure." },
  { num: "04", icon: Wrench, title: "Prototyping", desc: "Students build working hardware and software prototypes using the STEM lab infrastructure." },
  { num: "05", icon: FileText, title: "Patenting", desc: "Final innovations are guided through the full IP filing process — student inventors, real patents." },
];

/* ───────────────────────── Services ───────────────────────── */

export const services = [
  {
    num: "01",
    title: "End-to-End STEM Lab Solutions",
    desc: "A complete turnkey solution to set up modern STEM, Robotics and AI labs in institutions.",
    image: "/images/robotic-actuator.jpg",
    items: [
      "Advanced equipment & kit supply",
      "State-of-the-art lab interior design",
      "Staff & student hands-on training",
      "Dedicated LMS software integration",
    ],
  },
  {
    num: "02",
    title: "Ideation & Innovation (3IPP)",
    desc: "Nurturing student ideas into real-world patented prototypes and technology-focused innovations.",
    image: "/images/robot-gripper.jpg",
    items: [
      "Project development & mentoring",
      "Incubation & startup pitching support",
      "Patent & trademark filing assistance",
      "National & global competition support",
    ],
  },
  {
    num: "03",
    title: "Lab Augmentation & Support",
    desc: "Upgrading existing labs and skills to align with the latest industry trends and developments.",
    image: "/images/robotic-actuator.jpg",
    items: [
      "Lab equipment & component augmentation",
      "Trainer & faculty skill updation",
      "Advanced R&D project mentoring",
      "Continuous year-round technical support",
    ],
  },
];

/* ───────────────────────── Why partner ───────────────────────── */

export const pillars = [
  { icon: Boxes, title: "Turnkey End-to-End Solution", desc: "Lab design, equipment, curriculum, training and certifications — we handle everything." },
  { icon: GraduationCap, title: "Proprietary Structured Curriculum", desc: "Continuously updated and aligned with NEP 2020, IB, CBSE, ICSE and Cambridge." },
  { icon: Award, title: "Global Certifications & Competitions", desc: "Recognized credentials, plus WRO, FIRST Robotics and NASA challenges." },
  { icon: LineChart, title: "Real-Time Analytics & LMS", desc: "Live visibility into student progress, skill acquisition and lab utilization." },
  { icon: Rocket, title: "R&D, Patents & Startup Support", desc: "Through 3IPP, students go from ideas to filed patents and incubated startups." },
];

/* ───────────────────────── Audiences ───────────────────────── */

export const audiences = [
  {
    key: "students",
    title: "Students",
    tagline: "Build the skills that matter.",
    image: "/images/robot-gripper.jpg",
    points: [
      "Hands-on STEM learning & experimentation",
      "Creativity, logic & critical innovation",
      "3IPP ideation-to-patent support",
      "National & international competitions",
    ],
  },
  {
    key: "teachers",
    title: "Teachers",
    tagline: "Grow alongside your students.",
    image: "/images/robotic-actuator.jpg",
    points: [
      "Professional upskilling & development",
      "Innovative teaching practices & pedagogy",
      "Cutting-edge kits, software & resources",
      "Real-time student progress tracking",
    ],
  },
  {
    key: "schools",
    title: "Schools",
    tagline: "Elevate your institution.",
    image: "/images/robot-gripper.jpg",
    points: [
      "Modern AI & robotics infrastructure",
      "Enhanced global reputation & branding",
      "Continuous faculty development",
      "Annual innovation festivals",
    ],
  },
  {
    key: "parents",
    title: "Parents",
    tagline: "Invest in tomorrow's leaders.",
    image: "/images/robotic-actuator.jpg",
    points: [
      "Early exposure to advanced tech skills",
      "Logical & computational thinking",
      "Adaptability to emerging technologies",
      "Strong foundations for future careers",
    ],
  },
];

/* ───────────────────────── Engagement tiers ───────────────────────── */

export const tiers = [
  {
    name: "Essentials",
    tag: "Starter",
    desc: "Perfect for schools setting up their first STEM lab.",
    highlight: false,
    items: ["Basic Lab Setup & Design", "Starter Kit Supply", "Foundational Curriculum Access", "Initial Teacher Training", "Basic LMS Access", "Annual Review Support"],
  },
  {
    name: "Growth",
    tag: "Most popular",
    desc: "The complete innovation lab experience for growth-stage institutions.",
    highlight: true,
    items: [
      "Full STEM Lab Turnkey Setup",
      "Advanced Equipment Supply",
      "Full Curriculum + NEP Aligned",
      "Quarterly Teacher Workshops",
      "Full LMS + Analytics Dashboard",
      "Student Competition Support",
      "3IPP Ideation Program",
      "Annual Innovation Festival",
    ],
  },
  {
    name: "Premium",
    tag: "Enterprise",
    desc: "For institutions pursuing R&D, patents, and global recognition.",
    highlight: false,
    items: [
      "All Growth Features Included",
      "R&D Lab Infrastructure",
      "Patent & IP Filing Support",
      "Startup Incubation Access",
      "International Competition Entry",
      "Dedicated Trainer On-Site",
      "Custom Curriculum Modules",
      "Global Certification Pathways",
    ],
  },
];

/* ───────────────────────── Stats ───────────────────────── */

export const stats = [
  { value: 16, suffix: "+", label: "Years of STEM excellence" },
  { value: 150, suffix: "+", label: "Institutions powered" },
  { value: 50, suffix: "K+", label: "Students mentored" },
  { value: 35, suffix: "+", label: "Hackathons & competitions" },
];

/* ───────────────────────── People ───────────────────────── */

export const leadership = [
  { name: "Dr. Afshan", role: "Director" },
  { name: "Er. Yousman", role: "Chief Technology Officer" },
  { name: "Er. Farhat", role: "Chief Operating Officer" },
];

export const team = [
  { name: "Er. Abaan", role: "Tech Operations Manager" },
  { name: "Er. Moazam", role: "R&D Manager" },
  { name: "Er. Toiba", role: "Project Engineer" },
  { name: "Er. Sabura", role: "Lead Trainer" },
  { name: "Er. Irtiqa", role: "Lead Trainer" },
  { name: "Er. Rabiya", role: "STEM Solutions Lead" },
  { name: "Er. Tabin", role: "STEM Solutions Lead" },
  { name: "Er. Azraw", role: "STEM Trainer" },
];

export const clients = [
  "Delhi Public School",
  "Amity International",
  "Ryan International",
  "The Orchid School",
  "Pathways World School",
  "Indus Valley World School",
  "GD Goenka School",
  "Heritage Xperiential",
  "Billabong High",
  "Podar International",
  "Euro School",
  "Kangaroo Kids",
];

export const values = [
  { icon: Layers, title: "Our Mission", text: "Empowering learners with future-ready skills in AI, Robotics, Coding and STEM — building logical thinking and innovation to thrive in a digital world." },
  { icon: Rocket, title: "Our Vision", text: "Build globally aligned innovation ecosystems that transform educational institutions into future-ready centres of excellence." },
  { icon: Sparkles, title: "What We Deliver", text: "A complete AI, Robotics and STEM ecosystem integrating lab infrastructure, curriculum, teacher training, certifications and R&D mentorship." },
];

/* ───────────────────────── FAQ ───────────────────────── */

export const faqs = [
  {
    q: "How long does it take to set up a STEM lab?",
    a: "Most labs go from site survey to first class in about 30 days. That includes interior design, equipment installation, LMS onboarding and initial teacher training.",
  },
  {
    q: "Which boards is the curriculum aligned with?",
    a: "Our curriculum is mapped to NEP 2020 and works alongside CBSE, ICSE, IB and Cambridge schemes of work, with grade-wise lesson plans for Grades 1–12.",
  },
  {
    q: "Do you train our existing teachers?",
    a: "Yes. Every engagement includes hands-on faculty training, and Growth and Premium plans add quarterly workshops plus optional on-site trainers.",
  },
  {
    q: "Can you upgrade a lab we already have?",
    a: "Absolutely. Our Lab Augmentation service audits your current setup, adds modern kits and components, and refreshes the curriculum and teacher skills.",
  },
  {
    q: "What is 3IPP?",
    a: "3IPP is our Ideation → Innovation → Incubation → Prototyping → Patenting framework. It guides student ideas all the way to working prototypes and filed patents.",
  },
];
