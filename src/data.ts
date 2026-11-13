// All site content lives here. Edit this file to customise the portfolio.

export const profile = {
  first: 'Abhishek',
  last: 'Shukla',
  role: 'Data Analyst',
  status: 'Open to opportunities',
  headline: 'I turn raw, multi-source data into decisions.',
  intro:
    'Data Analyst with hands-on experience in FinTech and accounting data. I clean and combine data from many sources, build the reports and dashboards teams rely on, and explain what the numbers mean to the people who need to act on them.',
  email: 'Abhishek25071997@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishekshukla101/',
  github: 'https://github.com/Abhismile',
  photo: '/portrait.jpg',
  // Drop your résumé at public/resume.pdf
  resume: '/resume.pdf',
  // TODO: fill in, e.g. 'Bhopal, India · Open to remote & hybrid'
  location: '',
};

export type Stat = { value?: number; suffix?: string; text?: string; label: string };
export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'records managed and validated' },
  { value: 10, suffix: '+', label: 'KPIs tracked in a single dashboard' },
  { value: 99, suffix: '%+', label: 'accuracy in project validation' },
  { text: 'PL-300', label: 'Microsoft Certified: Power BI' },
];

export const about = {
  statement: 'I make information useful: clean, clear and ready for a decision.',
  facts: [
    { k: 'Currently', v: 'Data Analyst, D-Table Analytics' },
    { k: 'Focus', v: 'FinTech and accounting data, reporting and dashboards' },
    { k: 'Edge', v: 'Finance MBA + analytics: I understand the business behind the numbers' },
    { k: 'Education', v: 'MBA, Finance & Marketing (2021) · B.Com (2018)' },
    { k: 'Certified', v: 'Microsoft Power BI Data Analyst Associate (PL-300)' },
  ],
};

export const services = [
  {
    title: 'Data preparation',
    body: 'Cleaning, validating and combining data from CSV, Excel and database sources into one reliable dataset.',
    tools: ['Pentaho', 'SQL', 'Power Query'],
  },
  {
    title: 'Dashboards & reporting',
    body: 'Interactive dashboards and MIS reports that let teams track KPIs and spot trends at a glance.',
    tools: ['Power BI', 'DAX', 'Excel'],
  },
  {
    title: 'Analysis & insight',
    body: 'Exploratory analysis that finds patterns and anomalies, and turns them into a clear story.',
    tools: ['Python', 'Pandas', 'SQL'],
  },
];

export const stationOrder = ['Source', 'Clean', 'Model', 'Report', 'Check'] as const;
export type Station = (typeof stationOrder)[number];

export type Project = {
  id: string;
  index: string;
  title: string;
  tag: string;
  summary: string;
  tools: string[];
  metrics: { value: string; label: string }[];
  problem: string;
  // Each step sits at one station of the pipeline, shown in this order: Source, Clean, Model, Report, Check
  approach: { station: Station; text: string }[];
  outcome: string[];
  // Optional: add screenshots to public/projects/ and list their paths here
  images?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'fintech',
    index: '001',
    title: 'FinTech & Accounting Data Analytics',
    tag: 'FinTech',
    summary:
      'End-to-end pipeline that turns multi-format financial data into a validated, relational dataset and a KPI dashboard for financial monitoring.',
    tools: ['Pentaho', 'SQL', 'Power BI', 'Python'],
    metrics: [
      { value: '10+', label: 'KPIs' },
      { value: '99%+', label: 'data accuracy' },
      { value: '3', label: 'core tables' },
    ],
    problem:
      'Financial data arrived in several formats (CSV, Excel and database extracts), making it slow and error-prone to report on loans and payments in one place.',
    approach: [
      { station: 'Source', text: 'Collected financial data from CSV, Excel and database extracts.' },
      { station: 'Clean', text: 'Built Pentaho ETL pipelines to standardise and integrate the multi-format sources into one structured dataset.' },
      { station: 'Model', text: 'Designed relational tables for Customers, Loans and Payments with clean keys for reporting.' },
      { station: 'Report', text: 'Built Power BI dashboards with 10+ KPIs and trend analysis for financial monitoring.' },
      { station: 'Check', text: 'Validated the results with Python EDA, finding patterns and anomalies along the way.' },
    ],
    outcome: [
      'One trusted source for loan and payment reporting.',
      '99%+ data accuracy and consistency confirmed during validation.',
    ],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/Abhismile' }],
  },
  {
    id: 'ipl',
    index: '002',
    title: 'IPL Cricket Analysis',
    tag: 'Codebasics challenge',
    summary:
      'Descriptive and predictive analysis of IPL data across the 2021–2023 seasons and all-time stats, presented in interactive Power BI dashboards.',
    tools: ['SQL', 'Excel', 'Power BI'],
    metrics: [
      { value: '3', label: 'seasons' },
      { value: 'All-time', label: 'player stats' },
    ],
    problem:
      'Turn several seasons of raw match and player data into a clear view of team performance and the players who make the difference.',
    approach: [
      { station: 'Source', text: 'IPL match and player data for the 2021–2023 seasons and all-time statistics.' },
      { station: 'Clean', text: 'Prepared and aggregated match and player data with SQL and Excel.' },
      { station: 'Model', text: 'Ran descriptive and predictive analysis across the seasons and all-time statistics.' },
      { station: 'Report', text: 'Built interactive Power BI dashboards on team performance, player metrics and elite players.' },
    ],
    outcome: ['Interactive dashboards that let a viewer compare teams and players in a few clicks.'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/Abhismile' }],
  },
];

export const experience = [
  {
    when: 'Dec 2025 — Present',
    role: 'Data Analyst',
    org: 'D-Table Analytics',
    points: [
      'Manage, validate and analyze 50,000+ operational and business records across daily, weekly and monthly reporting cycles.',
      'Build MIS reports and dashboards in Excel and SQL so management can track KPIs and performance trends.',
      'Consolidate data, run quality checks and reconcile figures to keep reports accurate and consistent.',
      'Work with cross-functional teams to fix data issues and simplify reporting workflows.',
    ],
    tools: ['SQL', 'Excel', 'MIS reporting'],
  },
  {
    when: 'Sep 2025 — Nov 2025',
    role: 'Data Analytics Intern (FinTech)',
    org: 'Cybrom Technology',
    points: [
      'Ran end-to-end FinTech analytics projects across multi-source financial datasets.',
      'Built ETL pipelines that standardize CSV, Excel and database sources into one dataset.',
      'Designed interactive Power BI dashboards with KPIs and trend analysis for financial monitoring.',
      'Used Python EDA to find patterns, anomalies and insights.',
    ],
    tools: ['Pentaho', 'Power BI', 'Python'],
  },
];

export const skillGroups = [
  { title: 'Programming & analysis', items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical analysis', 'EDA'] },
  { title: 'Databases & SQL', items: ['SQL', 'SQL Server', 'MySQL', 'Joins', 'CTEs', 'Views', 'Stored procedures', 'Data wrangling'] },
  { title: 'BI & visualization', items: ['Power BI', 'DAX', 'Data modeling', 'Tableau', 'Excel (VBA, Power Query, Pivots)', 'KPI dashboards'] },
  { title: 'ETL & data engineering', items: ['Pentaho', 'Data cleaning', 'Data validation', 'Data transformation', 'Reporting automation'] },
  { title: 'Cloud (learning)', items: ['Microsoft Azure', 'Azure Data Factory', 'Databricks'] },
  { title: 'Working style', items: ['MIS reporting', 'Problem solving', 'Critical thinking', 'Stakeholder communication', 'Team collaboration'] },
];


// Put certificate images in public/certs/ using these file names.
export const certificates = [
  {
    img: '/certs/pl-300.jpg',
    title: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft Certified (PL-300)',
    detail: 'Earned 28 Jul 2026, valid until 29 Jul 2027.',
    id: '1EB86F4221D5D2FC',
    featured: true,
  },
  {
    img: '/certs/iit-guwahati.jpg',
    title: 'Advanced Certification in Data Analytics',
    issuer: 'E&ICT Academy, IIT Guwahati × Cybrom Technology',
    detail: '6-month program, 3 Jan to 15 Aug 2025.',
    id: 'EICT/2425/074-OC/36-002/015',
  },
  {
    img: '/certs/cybrom-training.jpg',
    title: 'Data Analytics Training, 6 Months',
    issuer: 'Cybrom Technology Pvt. Ltd.',
    detail: 'Certificate of completion, Sep 2025.',
  },
  {
    img: '/certs/cybrom-internship.jpg',
    title: 'Data Analyst Internship',
    issuer: 'Cybrom Technology',
    detail: '20 Sep to 20 Nov 2025, awarded for outstanding performance.',
  },
];

export const otherCerts = [
  { title: 'Data Analytics Essentials', by: 'Cisco · 2024' },
  { title: 'Learning Microsoft Power BI', by: '2024' },
  { title: 'Data and Analytics Program', by: 'Infosys Springboard' },
];

export const sections = [
  { id: 'work', label: 'Case studies' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];
