import { DatabaseTable } from '@aglint/shared-types';

export const seed_candidates: (Pick<
  DatabaseTable['candidates'],
  | 'email'
  | 'avatar'
  | 'city'
  | 'state'
  | 'country'
  | 'first_name'
  | 'last_name'
  | 'linkedin'
  | 'phone'
  | 'current_company'
  | 'timezone'
  | 'current_job_title'
> & {
  file_url: string;
  resume_json: any;
  resume_text: string;
})[] = [
  {
    email: 'michael.johnson@aglinthq.com',
    avatar: null,
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    first_name: 'Michael',
    last_name: 'Johnson',
    linkedin: 'https://linkedin.com/in/michael',
    phone: '+1-202-555-2004',
    current_company: 'Facebook',
    timezone: null,
    current_job_title: 'Full Stack Developer',
    resume_json: {
      basics: {
        email: 'michael.johnson@gmail.com',
        phone: '+1-202-555-2004',
        social: [],
        lastName: 'Johnson',
        linkedIn: null,
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Michael',
        currentCompany: 'Facebook',
        currentJobTitle: 'Full Stack Developer',
        totalExperienceInMonths: 48,
      },
      skills: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Computer Science',
          start: {
            year: 2016,
            month: null,
          },
          degree: 'B.Sc. in Computer Science',
          institution: 'University of California, Berkeley',
        },
      ],
      overview:
        'Michael Johnson is a Full Stack Developer at Facebook with expertise in Node.js, Express, and MongoDB.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: 2020,
            month: null,
          },
          org: 'Facebook',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: null,
          },
          title: 'Full Stack Developer',
          location: 'San Francisco, CA',
          description:
            'Full Stack Developer with a strong background in backend technologies, including Node.js and databases.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Michael Johnson Email: michael.johnson@gmail.com Phone: +1-202-555-2004 Location: San Francisco, CA Professional Overview Full Stack Developer with a strong background in backend technologies, including Node. js and databases. Skills - Node.js - Express - MongoDB - Redis - Docker Education B.Sc. in Computer Science University of California, Berkeley Graduated: 2016 Experience Company: Facebook, San Francisco, CA Role: Full Stack Developer Duration: 4 years ',
    file_url:
      'https://aglintai-seed-data.vercel.app/jobs/backend-engineer/michael_johnson_backend_engineer_resume.pdf',
  },
  {
    email: 'mikefong81@gmail.com',
    avatar: null,
    city: 'San Leandro',
    state: 'California',
    country: 'United States',
    first_name: 'Mike',
    last_name: 'Fong',
    linkedin: '',
    phone: '+15103259024',
    current_company: 'Metallicus, Inc.',
    timezone: null,
    current_job_title: 'Controller',
    resume_json: {
      basics: {
        email: 'mikefong81@gmail.com',
        phone: '325-9024',
        social: [],
        lastName: 'Fong',
        linkedIn: 'https://www.linkedin.com/in/mike-fong-cpa-0621804',
        location: {
          city: 'San Leandro',
          state: 'California',
          country: '',
        },
        firstName: 'Mike',
        currentCompany: 'Metallicus, Inc.',
        currentJobTitle: 'Controller',
        totalExperienceInMonths: 314,
      },
      skills: [
        'Software implementation (Financial Force, NetSuite, TaxBit)',
        'Payroll (ADP, Tri-Net, Gusto)',
        'ERP (Oracle, PeopleSoft, Financial Force, MAS 90)',
        'Building and management of accounting/finance teams',
        'Revenue recognition (SOP 97-2, ASC 605 & 606)',
        'Budgeting',
        'Excel (intermediate to advanced)',
        'Accounting Standards Codification',
        'QuickBooks',
        'Domo (BI software)',
        'Carta, 409A Valuations, ASC 718',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accountancy',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Science',
          institution: 'California State University, Sacramento',
        },
      ],
      overview:
        'Mike Fong is a Controller at Metallicus, Inc. with expertise in software implementation, payroll, and ERP systems. He also has strong skills in revenue recognition and budgeting.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'Metallicus, Inc.',
          level: 'Senior-level',
          start: {
            year: 2020,
            month: 6,
          },
          title: 'Controller',
          location: 'San Leandro, California',
          description:
            'Oversee Accounting Manager and Senior Accountant, responsible for Financial Statements, G/L Accounting, Call Reports, A/P, Payroll, Equity Administration, Cash Management and Forecasting, Digital Asset Reporting and Tracking, and Audit and Tax compliance. Lead FY18 - 22 financial audits to their completion as main point-of-contact for the auditors including preparing PBC’s. Collaborate with compliance teams, internal and external, to produce financial reports and provide information for MSB (money service business) licensing compliance requirements at Federal and State levels. Support the application for the company’s first MTL’s (money transmitter licenses), gaining approval in 12 states. Work with external consultants to prepare two purchase price allocations and five 409A valuations. Consolidate company and wholly owned subsidiary financials, preparing intercompany and elimination entries. Play a key role in dissolving 6 domestic and international entities.',
        },
        {
          end: {
            year: 2020,
            month: 3,
          },
          org: 'VIZ Media, LLC',
          level: 'Senior-level',
          start: {
            year: 2019,
            month: 6,
          },
          title: 'Controller and Senior Director, Accounting',
          location: 'San Leandro, California',
          description:
            'Returned to company to lead Accounting function after CFO and Controller left. Oversee the Accounting team of five, responsible for G/L Accounting, Balance Sheet, A/P, A/R, Payroll, Purchasing, Inventory, Cash Management, Audit and Tax compliance. Met monthly with management team to review financial results and key issues. Oversaw month-end close process, working with and reviewing work of senior, staff, and payroll accountants. Dealt with departure of two full-time team members, finding qualified temps to fill roles, and coordinating training.',
        },
        {
          end: {
            year: 2019,
            month: 6,
          },
          org: 'Callisto Media, Inc.',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: 6,
          },
          title: 'Director of Finance, Controller',
          location: 'San Leandro, California',
          description:
            'Managed Accounting, A/P, A/R, payroll functions, cash flows, financial reporting, 401k compliance, equity administration, reporting to investors, bank relationships, and ensured corporate compliance over tax and insurance. Helped scale processes and procedures, and delegate functions, as company continues to increase headcount, from 34 to 150, and growing. Provided high-level P&L summary by workday 2 to CFO and CEO. Developed and reported key corporate and SAAS metrics. Directly managed Senior Accountant and offshore accounting team. Controller Prepared delegation of authority and employee T&E policy, documented all standard operating procedures in Finance, oversaw financial statement preparation. Managed offshore accounting team (India). Assumed full responsibility over Finance when VP, Finance left company, between September 2016, and March 2017. Led company through first two years’ financial audits, done by KPMG, with clean, unqualified audit opinions. Verified accuracy of A/P, A/R, P/R, and G/L accounting postings, and authorized payments to vendors, employees. Prepared financial board documents, and weekly sales reports, reporting directly to the CEO.',
        },
        {
          end: {
            year: 2016,
            month: 8,
          },
          org: 'Generation Tux, Inc.',
          level: 'Mid-level',
          start: {
            year: 2014,
            month: 10,
          },
          title: 'Controller',
          location: 'San Leandro, California',
          description:
            'Built accounting specifications for pre-launch e-commerce site, interconnecting disparate bill payment and cash receipts systems, oversaw financial statement preparation, reviewed payments. Obtained $2.5 million operational term loan, $2.5 million line of credit, and $680K letter of credit. Led company through first year financial audit with clean, unqualified audit opinion. Reviewed monthly financial results with CFO, and all operational department managers, identified key variances.',
        },
        {
          end: {
            year: 2014,
            month: 10,
          },
          org: 'VIZ Media, LLC',
          level: 'Senior-level',
          start: {
            year: 2008,
            month: 8,
          },
          title: 'Senior Director, Finance',
          location: 'San Leandro, California',
          description:
            'Oversaw the Finance team, responsible for accounting, financial and royalty reports, A/P, A/R, Payroll, Purchasing, Royalty, Inventory, FP&A, budgeting, cash management, audit and tax compliance. During corporate reorganization, reduced Finance headcount by two, saving $170K in payroll. Managed cash flows, reducing S/T loan payable to bank by $5 million, saving $75K in interest. Met monthly with CEO and COO, presenting and explaining the financial results and key issues. Led Finance effort to tighten administrative expenses, contributing to first profitable fiscal year in several years. Controller Managed the month-end close and team of five, prepared financial statements for executive team and operating committee. Improved the accuracy and timeliness of accounting and reconciliations. Examples include correcting the accounting for fixed assets and depreciation, utilizing templates to expedite journal entry postings, and getting current on four years of bank reconciliations that were not done previously. Supervised the system upgrade and transition of data from Oracle version 11i to R12, and from Oracle to Data Intensity servers, checking for data integrity.',
        },
        {
          end: {
            year: 2008,
            month: 7,
          },
          org: 'Posit Science Corporation',
          level: 'Mid-level',
          start: {
            year: 2006,
            month: 2,
          },
          title: 'Manager of Accounting',
          location: '',
          description:
            'Prepared journal entries, reconciliations, royalty reports, and financial statements for VP of Finance and investors (VC firms). Created first set of policies and procedures on accounting, revenue recognition, inventory management, and purchasing for the company. Advised VP of Finance, VP of Sales, and CEO on revenue recognition (SOP 97-2), while reviewing potential agreements with customers. Developed and reported on weekly key corporate metrics covering sales by market segment, employee utilization, and inventory management.',
        },
        {
          end: {
            year: 2006,
            month: 2,
          },
          org: 'Waste Management',
          level: 'Mid-level',
          start: {
            year: 2004,
            month: 5,
          },
          title: 'Senior Accountant',
          location: 'Alameda County',
          description:
            'Supported the Accounting Manager in leading a six-day month-end close. Performed all accounting and variance analyses for three business units. Led the accounting department in collecting and reviewing supporting documentation from the accountants and testing for Sarbanes-Oxley (SOX)',
        },
        {
          end: {
            year: 2004,
            month: 4,
          },
          org: 'United Behavioral Health',
          level: 'Mid-level',
          start: {
            year: 2002,
            month: 8,
          },
          title: 'Senior Accountant',
          location: '',
          description:
            "Performed accounting for Health Plan division, coordinating work of other accountants during a four-day month-end close. Assisted multiple departments in preparing corporate budget. Conducted monthly meetings with regional VP's to discuss revenue and expense variances.",
        },
        {
          end: {
            year: 2002,
            month: 8,
          },
          org: 'Innovative Education Management',
          level: 'Mid-level',
          start: {
            year: 1999,
            month: 12,
          },
          title: 'Controller',
          location: '',
          description:
            'Performed accounting and financial reporting for the non-profit organization including the charter schools it managed, oversaw A/P and Payroll functions. Led the company’s first annual audit, leading to an unqualified (clean) audit opinion in 2001. Helped prepare budgets for the organization and all the charter schools.',
        },
        {
          end: {
            year: 1999,
            month: 12,
          },
          org: 'Healthdent of California',
          level: 'Mid-level',
          start: {
            year: 1998,
            month: 1,
          },
          title: 'Senior Accountant',
          location: '',
          description: '',
        },
        {
          end: {
            year: 1997,
            month: 12,
          },
          org: "Searson & Company, CPA's",
          level: 'Fresher-level',
          start: {
            year: 1995,
            month: 9,
          },
          title: 'Senior Auditor',
          location: '',
          description: '',
        },
        {
          end: {
            year: 1995,
            month: 9,
          },
          org: "Macias, Gini & Company, CPA's",
          level: 'Fresher-level',
          start: {
            year: 1994,
            month: 6,
          },
          title: 'Staff Auditor',
          location: '',
          description: '',
        },
        {
          end: {
            year: 1994,
            month: 6,
          },
          org: 'Medical Clinic of Sacramento',
          level: 'Fresher-level',
          start: {
            year: 1991,
            month: 1,
          },
          title: 'Staff Accountant',
          location: '',
          description: '',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'California State University, Sacramento',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Bachelor of Science, Accountancy',
          location: '',
          description:
            'Graduated Cum Laude, member of Beta Alpha Psi and Golden Key National Honor Society',
        },
      ],
      certificates: [],
    },
    resume_text:
      "MIKE FONG, CPA San Leandro, California  325-9024 mikefong81@gmail.com https://www.linkedin.com/in/mike-fong-cpa-0621804 Summary Versatile Controller and CPA with hands-on public/private, established/start-up company experience in accounting, finance, and auditing. Skilled in motivating staff to achieve aggressive goals and helping teams scale. Demonstrated effective accounting and finance leadership in many industries including Financial Services (Blockchain, Digital Assets), Healthcare, Non-Profit, Media & Entertainment, Publishing, CPG, Software, and Environment Services. Skills Software implementation (Financial Force, NetSuite, TaxBit) Payroll (ADP, Tri-Net, Gusto) ERP (Oracle, PeopleSoft, Financial Force, MAS 90) Building and management of accounting/finance teams Revenue recognition (SOP 97-2, ASC 605 & 606) Budgeting Excel (intermediate to advanced) Accounting Standards Codification QuickBooks Domo (BI software) Carta, 409A Valuations, ASC 718 Employment Metallicus, Inc. June 2020 to Present Start-up cryptocurrency company offering a mobile, peer-to-peer payment application, enabling users to make payments to other users in digital currencies or USD, and also buy, sell, and trade various digital currencies such as Bitcoin and Ether, $500K to $1M in annual fee revenues, and $18M in trading/sales income Controller Oversee Accounting Manager and Senior Accountant, responsible for Financial Statements, G/L Accounting, Call Reports, A/P, Payroll, Equity Administration, Cash Management and Forecasting, Digital Asset Reporting and Tracking, and Audit and Tax compliance. Lead FY18 - 22 financial audits to their completion as main point-of-contact for the auditors including preparing PBC’s. Collaborate with compliance teams, internal and external, to produce financial reports and provide information for MSB (money service business) licensing compliance requirements at Federal and State levels. Support the application for the company’s first MTL’s (money transmitter licenses), gaining approval in 12 states. Work with external consultants to prepare two purchase price allocations and five 409A valuations. Consolidate company and wholly owned subsidiary financials, preparing intercompany and elimination entries. Play a key role in dissolving 6 domestic and international entities. VIZ Media, LLC June 2019 to March 2020 Media and entertainment company specializing in manga publishing, animation, and licensing, $110M in annual revenues Controller and Senior Director, Accounting Returned to company to lead Accounting function after CFO and Controller left. Oversee the Accounting team of five, responsible for G/L Accounting, Balance Sheet, A/P, A/R, Payroll, Purchasing, Inventory, Cash Management, Audit and Tax compliance. Met monthly with management team to review financial results and key issues. Oversaw month-end close process, working with and reviewing work of senior, staff, and payroll accountants. Dealt with departure of two full-time team members, finding qualified temps to fill roles, and coordinating training. Callisto Media, Inc. June 2016 to June 2019 Fast growing, data-driven start-up publishing company, $50M in annual revenues Director of Finance, Controller Managed Accounting, A/P, A/R, payroll functions, cash flows, financial reporting, 401k compliance, equity administration, reporting to investors, bank relationships, and ensured corporate compliance over tax and insurance. Helped scale processes and procedures, and delegate functions, as company continues to increase headcount, from 34 to 150, and growing. Provided high-level P&L summary by workday 2 to CFO and CEO. Developed and reported key corporate and SAAS metrics. Directly managed Senior Accountant and offshore accounting team. Controller Prepared delegation of authority and employee T&E policy, documented all standard operating procedures in Finance, oversaw financial statement preparation. Managed offshore accounting team (India). Assumed full responsibility over Finance when VP, Finance left company, between September 2016, and March 2017. Led company through first two years’ financial audits, done by KPMG, with clean, unqualified audit opinions. Verified accuracy of A/P, A/R, P/R, and G/L accounting postings, and authorized payments to vendors, employees. Prepared financial board documents, and weekly sales reports, reporting directly to the CEO. Generation Tux, Inc. October 2014 to August 2016 Innovative, start-up men’s formal wear company, $1M in annual revenues Controller Built accounting specifications for pre-launch e-commerce site, interconnecting disparate bill payment and cash receipts systems, oversaw financial statement preparation, reviewed payments. Obtained $2.5 million operational term loan, $2.5 million line of credit, and $680K letter of credit. Led company through first year financial audit with clean, unqualified audit opinion. Reviewed monthly financial results with CFO, and all operational department managers, identified key variances. VIZ Media, LLC August 2008 to October 2014 Media and entertainment company specializing in manga publishing, animation, and licensing, $60M in annual revenues Senior Director, Finance Oversaw the Finance team, responsible for accounting, financial and royalty reports, A/P, A/R, Payroll, Purchasing, Royalty, Inventory, FP&A, budgeting, cash management, audit and tax compliance. During corporate reorganization, reduced Finance headcount by two, saving $170K in payroll. Managed cash flows, reducing S/T loan payable to bank by $5 million, saving $75K in interest. Met monthly with CEO and COO, presenting and explaining the financial results and key issues. Led Finance effort to tighten administrative expenses, contributing to first profitable fiscal year in several years. Controller Managed the month-end close and team of five, prepared financial statements for executive team and operating committee. Improved the accuracy and timeliness of accounting and reconciliations. Examples include correcting the accounting for fixed assets and depreciation, utilizing templates to expedite journal entry postings, and getting current on four years of bank reconciliations that were not done previously. Supervised the system upgrade and transition of data from Oracle version 11i to R12, and from Oracle to Data Intensity servers, checking for data integrity. Posit Science Corporation February 2006 to July 2008 Start-up software company offering research-backed brain-training exercises, $12M in annual revenues Manager of Accounting Prepared journal entries, reconciliations, royalty reports, and financial statements for VP of Finance and investors (VC firms). Created first set of policies and procedures on accounting, revenue recognition, inventory management, and purchasing for the company. Advised VP of Finance, VP of Sales, and CEO on revenue recognition (SOP 97-2), while reviewing potential agreements with customers. Developed and reported on weekly key corporate metrics covering sales by market segment, employee utilization, and inventory management. Waste Management May 2004 to February 2006 Large public company offering environmental services, $40M in annual revenues for Alameda County business unit Senior Accountant Supported the Accounting Manager in leading a six-day month-end close. Performed all accounting and variance analyses for three business units. Led the accounting department in collecting and reviewing supporting documentation from the accountants and testing for Sarbanes-Oxley (SOX) United Behavioral Health August 2002 to April 2004 Large public company offering mental health services, part of UnitedHealth Group, $720M in annual revenues Senior Accountant Performed accounting for Health Plan division, coordinating work of other accountants during a four-day month-end close. Assisted multiple departments in preparing corporate budget. Conducted monthly meetings with regional VP's to discuss revenue and expense variances. Innovative Education Management December 1999 to August 2002 Non-profit education management company providing all services to charter schools, $5M in annual revenues Controller Performed accounting and financial reporting for the non-profit organization including the charter schools it managed, oversaw A/P and Payroll functions. Led the company’s first annual audit, leading to an unqualified (clean) audit opinion in 2001. Helped prepare budgets for the organization and all the charter schools. Healthdent of California January 1998 to December 1999 Senior Accountant Searson & Company, CPA's September 1995 to December 1997 Senior Auditor Macias, Gini & Company, CPA's June 1994 to September 1995 Staff Auditor Medical Clinic of Sacramento January 1991 to June 1994 Staff Accountant Education & Certification California State University, Sacramento Bachelor of Science, Accountancy Graduated Cum Laude, member of Beta Alpha Psi and Golden Key National Honor Society Certified Public Accountant, California Active Status American Institute of Certified Public Accountants",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/4dba9dbb-d204-4938-b8ba-0f1ff22ce1b1.docx',
  },
  {
    email: 'lakritzg@gmail.com',
    avatar: null,
    city: 'San Jose',
    state: 'California',
    country: 'United States',
    first_name: 'Gregg',
    last_name: 'Lakritz',
    linkedin: '',
    phone: '+14085049239',
    current_company: 'BioLife Solutions',
    timezone: null,
    current_job_title: 'VP Corporate Controller',
    resume_json: {
      basics: {
        email: 'lakritzg@gmail.com',
        phone: '504 9239',
        social: [],
        lastName: 'Lakritz',
        linkedIn: null,
        location: {
          city: 'San Jose',
          state: 'CA',
          country: '',
        },
        firstName: 'Gregg',
        currentCompany: 'BioLife Solutions',
        currentJobTitle: 'VP Corporate Controller',
        totalExperienceInMonths: 396,
      },
      skills: [],
      schools: [
        {
          end: {
            year: 0,
            month: null,
          },
          gpa: null,
          field: 'Unknown',
          start: {
            year: 0,
            month: null,
          },
          degree: 'MBA',
          institution: 'University of Wisconsin',
        },
        {
          end: {
            year: 0,
            month: null,
          },
          gpa: null,
          field: 'Unknown',
          start: {
            year: 0,
            month: null,
          },
          degree: 'BBA Accounting',
          institution: 'University of Wisconsin – Milwaukee',
        },
      ],
      overview:
        'Gregg Lakritz is a VP Corporate Controller at BioLife Solutions with 33 years of experience. He is skilled in financial management and accounting.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: 2023,
            month: 11,
          },
          org: 'BioLife Solutions',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 1,
          },
          title: 'VP Corporate Controller',
          location: 'San Jose',
          description:
            'Rapidly growing global health science industry leader (BLFS on NASDAQ).  VP Corporate Controller Technical accounting/reporting, M&A, equity, cost/factory finance, AP, payroll, international, credit/collections, internal/external audit, ERP ownership.  Integrated six acquired entities into financial processes including NetSuite ERP. Reorganized global team to functionally-based, from entity based, based on shared service concepts. Dramatically streamlined the close-the-books process. Created monthly executive finance package. Evaluation of strategic alternatives, including sale, discontinuation or licensing of under-performing business units.',
        },
        {
          end: {
            year: 2022,
            month: 12,
          },
          org: 'Corsair',
          level: 'Senior-level',
          start: {
            year: 2017,
            month: 11,
          },
          title: 'Principal Accounting Officer, VP Corporate Controller',
          location: 'Unknown',
          description:
            'Took pre-IPO unicorn public (CRSR on NASDAQ) with multi-billion dollar valuation. PC gaming components and peripherals. $2B in sales including B2C e-commerce and B2B.  Principal Accounting Officer, VP Corporate Controller Hired to join leadership team to lead public company readiness on a company-wide scale.  Drove financial sections of S-1 filing, first press release and 10-Q. Revenue, international, equity, SEC, cost, M&A, general accounting, shared service center, internal audit (doubled global accounting team to 75 employees). Constructed comprehensive system of internal controls.  System implementations including ERP integrations, equity platform (Equity Edge Online), purchasing platform (Coupa), T&E (Concur). Lead team to implement ASC 606 and ASC 842 and all other new accounting guidance. No significant control deficiencies during first year SOX as public company.',
        },
        {
          end: {
            year: 2017,
            month: 10,
          },
          org: 'Trimble',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 7,
          },
          title: 'Senior Strategic Consultant',
          location: 'Unknown',
          description:
            'Managed resources to produce worldwide recast of historic revenue. Evaluate, select and communicate optimal approaches to ASC 606 adoption, balancing efficiency and controls. Work with internal technical accounting team to determine applicable ASC 606 technical guidance for Trimble’s historic and recently acquired revenue streams. Determine and implement appropriate processes, systems and review controls for ongoing ASC 606 reporting/disclosure.',
        },
        {
          end: {
            year: 2017,
            month: 6,
          },
          org: 'Harmonic Inc.',
          level: 'Senior-level',
          start: {
            year: 2011,
            month: 9,
          },
          title: 'Chief Accounting Officer, VP Corporate Controller',
          location: 'Unknown',
          description:
            'Video delivery hardware, software and subscription services (HLIT on NASDAQ) with $600M in sales.  Chief Accounting Officer, VP Corporate Controller Report directly to the CFO, leading all worldwide accounting, cost accounting, revenue, SEC, M&A, shared service center, internal audit and all tax functions.  Retained a lean accounting team as the company grew.  Conducted sweeping overhaul of cash conversion cycle that lead to best in class performance.  Helped drive dramatic increase in SAS and other software revenue. Establish agenda, lead and chief presenter at all audit committee meetings.  Drove over 50% reduction in close cycle time by minimizing manual activities.  Created leading-edge European shared service center.  Designed foreign exposure hedging process that reduced currency exposure by 90%. Successfully concluded comprehensive, multi-year IRS audit.  Key member of team that successfully drove $125M convertible bond offering.  Ownership of sales forecasting process. Drove rapid integration of major acquisition including full Oracle integration within three quarters.',
        },
        {
          end: {
            year: 2011,
            month: 9,
          },
          org: 'Trimble',
          level: 'Senior-level',
          start: {
            year: 2005,
            month: 10,
          },
          title: 'Corporate Controller',
          location: 'Unknown',
          description:
            'Global positioning hardware, Saas and software (TRMB on NASDAQ). During tenure, sales grew from $0.4B to $2.5B.  Corporate Controller Expanded and mentored team of 50+ accounting professionals including SEC, revenue, international finance directors, general ledger, consolidations, M&A, A/P, payroll, treasury accounting and commissions. Active involvement in over 60 public and private software and hardware acquisitions, several major divestitures, numerous complex financing arrangements and major joint ventures.  Documented revenue recognition positions for complex hardware and software (SAS) revenue arrangements.  Efficient and accurate monthly consolidation of over 100 legal entities in Americas, APAC and Europe.',
        },
        {
          end: {
            year: 2005,
            month: 10,
          },
          org: 'LTX – Credence',
          level: 'Mid-level',
          start: {
            year: 2003,
            month: 4,
          },
          title: 'Director of Accounting',
          location: 'Unknown',
          description:
            'Rapidly-growing maker of semiconductor test equipment and software (LTXC on NASDAQ) with sales of $600M. Director of Accounting Managed general ledger, international accounting, receivables, payroll, A/P, internal audit and all SEC reporting.  Filing of convertible bond offering and all other acquisition-related SEC filings.',
        },
        {
          end: {
            year: 2003,
            month: 3,
          },
          org: 'Mattson Technology',
          level: 'Senior-level',
          start: {
            year: 2002,
            month: 4,
          },
          title: 'Vice President, Corporate Controller',
          location: 'Unknown',
          description:
            'An international, public high-tech manufacturing company (MTSN on NASDAQ) with $300M in revenue. Vice President, Corporate Controller In charge of all divisional finance, cost accounting, SEC and accounting functions.  Established comprehensive system of internal controls and lead for all Sarbanes-Oxley activities.  Re-designed close process resulting in 40% shorter cycle with fewer headcount.  Drove cost reduction initiatives including closure and sale of redundant and low performing entities.  Orchestrated finance reorganization that greatly improved efficiency and operational support.',
        },
        {
          end: {
            year: 2002,
            month: 3,
          },
          org: 'KLA-Tencor',
          level: 'Mid-level',
          start: {
            year: 1999,
            month: 4,
          },
          title: 'Assistant Corporate Controller',
          location: 'Unknown',
          description:
            'Leader in semiconductor factory automation and test equipment (KLAC on NASDAQ) with over $3B Revenue. Assistant Corporate Controller  Led entire accounting organization (35 professionals) including Finance IT, general ledger, SEC and Internal Audit.  Established intuitive transactional accounting metrics which drove accounting group toward world-class performance.  Responsible for interpretation and implementation of all GAAP and worldwide internal accounting policies.  Drove exhaustive increase in use of system-based, as opposed to manual, internal controls. Established accounting and internal controls for $100M venture fund. Headed due diligence and drove integration for several major acquisitions.',
        },
        {
          end: {
            year: 1999,
            month: 3,
          },
          org: 'Cypress Semiconductor',
          level: 'Senior-level',
          start: {
            year: 1997,
            month: 2,
          },
          title: 'Group Controller',
          location: 'Unknown',
          description:
            'A $2 billion semiconductor manufacturer (CY on the NYSE). After one year, promoted from Division Controller to Group Controller, responsible for all accounting and FP&A for over 60% of company operations.  Group Controller  Supplied four operational VPs with intuitive metrics to exceed strategic and tactical business plans.  Created financial model to fine-tune company’s technological roadmap and measure success of R&D projects.  Implemented process to identify root causes and corrective actions to reduce company-wide inventory.  Project lead on cross-functional team to reduce breakeven revenue levels.  Provided all accounting and financial support for Cypress’s five product lines.  Created from scratch, a project-based budget and accounting system for cross-divisional resource management.  Analysis of technical roadmap caused shift from investment to milking strategy for major product line.  Performed analysis to de-feature product to fill product line hole and allow participation in lower-priced regions.  Created separate segment-based P&Ls used to refine product line strategy.',
        },
        {
          end: {
            year: 1997,
            month: 1,
          },
          org: 'Applied Materials',
          level: 'Mid-level',
          start: {
            year: 1995,
            month: 7,
          },
          title: 'Finance Manager , Group Accounting Manager',
          location: 'Unknown',
          description:
            'The world’s largest manufacturer (AMAT on Nasdaq) of semiconductor equipment with annual revenue of over $6B.  Finance Manager , Group Accounting Manager   Directed close, forecast and annual plan for company during period of explosive growth.  Led staff to reduce time to complete financial forecast by over 50%.  Played key role in company-wide SAP and implementations.  Developed total cost of ownership (COO) model used by Strategic Marketing to benchmark competitors’ products.',
        },
        {
          end: {
            year: 1995,
            month: 6,
          },
          org: 'Intel',
          level: 'Mid-level',
          start: {
            year: 1995,
            month: 6,
          },
          title: 'Sr. Manager – Worldwide Capacity and Loading Finance',
          location: 'Unknown',
          description:
            'The world’s largest chip producer. Attained 8 years of increasing responsibility managing strategic finance teams. During tenure, sales grew from $1B to $40B.  Sr. Manager – Worldwide Capacity and Loading Finance (8/6/95)  Managed group of 7 senior analysts dedicated to optimizing worldwide factory capacity and loading decisions. Controlled a $3B annual capital budget for new factory capacity and equipment. Provided all financial modeling and support for factory site selections, factory expansions and factory closures.',
        },
        {
          end: {
            year: 1995,
            month: 7,
          },
          org: 'Intel',
          level: 'Mid-level',
          start: {
            year: 1994,
            month: 4,
          },
          title: 'Manager - Financial Strategy',
          location: 'Unknown',
          description:
            'Determined all pricing and manufacturing strategies for Intel’s multi-billion dollar Memory Components Division. Created new high performance finance team including all hiring, direction-setting, and alignment with operations.  Led FP&A effort including division’s first comprehensive long-range planning model. Conducted initial feasibility studies for Flashcard and Flashdrive product startups.  Performed analysis that resulted in move from contracted to lower cost in-house assembly line.',
        },
        {
          end: {
            year: 0,
            month: null,
          },
          org: 'University of Wisconsin',
          level: 'Unknown',
          start: {
            year: 0,
            month: null,
          },
          title: 'MBA',
          location: 'Unknown',
          description: 'University of Wisconsin',
        },
        {
          end: {
            year: 0,
            month: null,
          },
          org: 'University of Wisconsin – Milwaukee',
          level: 'Unknown',
          start: {
            year: 0,
            month: null,
          },
          title: 'BBA Accounting',
          location: 'Unknown',
          description: 'University of Wisconsin – Milwaukee',
        },
        {
          end: {
            year: 0,
            month: null,
          },
          org: 'Unknown',
          level: 'Unknown',
          start: {
            year: 0,
            month: null,
          },
          title: 'Certified Public Accountant (active CPA license)',
          location: 'Unknown',
          description: 'Certified Public Accountant (active CPA license)',
        },
        {
          end: {
            year: 1997,
            month: 1,
          },
          org: 'Unknown',
          level: 'Mid-level',
          start: {
            year: 1995,
            month: 7,
          },
          title: 'Finance Manager , Group Accounting Manager',
          location: 'Unknown',
          description:
            'Directed close, forecast and annual plan for company during period of explosive growth.  Led staff to reduce time to complete financial forecast by over 50%.  Played key role in company-wide SAP and implementations.  Developed total cost of ownership (COO) model used by Strategic Marketing to benchmark competitors’ products.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Gregg Lakritz, CPA, MBA Mobile:  504 9239; San Jose, CA, Email: lakritzg@gmail.com Summary  IPO experience from initial public company readiness through flawless years one and two SOX.  Implemented software, SaaS, and hardware revenue recognition under ASC 606.  Broad experience in strategic decision-making, cost reductions and advanced SEC reporting. Process simplification expertise including improvements in accounting close and forecast processes.  Established robust controls within SOX Section 404b framework.  Finance and accounting leader of company-wide ERP software implementations and integrations.  Established significant U.S., Swiss and Taiwan shared service centers from the ground up.  Broad acquisition analysis for 60+ international manufacturers and software providers. PROFESSIONAL EXPERIENCE  BioLife Solutions 1/23 to 11/23  Rapidly growing global health science industry leader (BLFS on NASDAQ).  VP Corporate Controller Technical accounting/reporting, M&A, equity, cost/factory finance, AP, payroll, international, credit/collections, internal/external audit, ERP ownership.  Integrated six acquired entities into financial processes including NetSuite ERP. Reorganized global team to functionally-based, from entity based, based on shared service concepts. Dramatically streamlined the close-the-books process. Created monthly executive finance package. Evaluation of strategic alternatives, including sale, discontinuation or licensing of under-performing business units. Corsair 11/17 to 12/22  Took pre-IPO unicorn public (CRSR on NASDAQ) with multi-billion dollar valuation. PC gaming components and peripherals. $2B in sales including B2C e-commerce and B2B.  Principal Accounting Officer, VP Corporate Controller Hired to join leadership team to lead public company readiness on a company-wide scale.  Drove financial sections of S-1 filing, first press release and 10-Q. Revenue, international, equity, SEC, cost, M&A, general accounting, shared service center, internal audit (doubled global accounting team to 75 employees). Constructed comprehensive system of internal controls.  System implementations including ERP integrations, equity platform (Equity Edge Online), purchasing platform (Coupa), T&E (Concur). Lead team to implement ASC 606 and ASC 842 and all other new accounting guidance. No significant control deficiencies during first year SOX as public company.  Trimble 7/17 –10/17  Senior Strategic Consultant  Managed resources to produce worldwide recast of historic revenue. Evaluate, select and communicate optimal approaches to ASC 606 adoption, balancing efficiency and controls. Work with internal technical accounting team to determine applicable ASC 606 technical guidance for Trimble’s historic and recently acquired revenue streams. Determine and implement appropriate processes, systems and review controls for ongoing ASC 606 reporting/disclosure.  Harmonic Inc. 9/11 –6/17  Video delivery hardware, software and subscription services (HLIT on NASDAQ) with $600M in sales.  Chief Accounting Officer, VP Corporate Controller Report directly to the CFO, leading all worldwide accounting, cost accounting, revenue, SEC, M&A, shared service center, internal audit and all tax functions.  Retained a lean accounting team as the company grew.  Conducted sweeping overhaul of cash conversion cycle that lead to best in class performance.  Helped drive dramatic increase in SAS and other software revenue. Establish agenda, lead and chief presenter at all audit committee meetings.  Drove over 50% reduction in close cycle time by minimizing manual activities.  Created leading-edge European shared service center.  Designed foreign exposure hedging process that reduced currency exposure by 90%. Successfully concluded comprehensive, multi-year IRS audit.  Key member of team that successfully drove $125M convertible bond offering.  Ownership of sales forecasting process. Drove rapid integration of major acquisition including full Oracle integration within three quarters. Trimble 10/05 – 9/11  Global positioning hardware, Saas and software (TRMB on NASDAQ). During tenure, sales grew from $0.4B to $2.5B.  Corporate Controller Expanded and mentored team of 50+ accounting professionals including SEC, revenue, international finance directors, general ledger, consolidations, M&A, A/P, payroll, treasury accounting and commissions. Active involvement in over 60 public and private software and hardware acquisitions, several major divestitures, numerous complex financing arrangements and major joint ventures.  Documented revenue recognition positions for complex hardware and software (SAS) revenue arrangements.  Efficient and accurate monthly consolidation of over 100 legal entities in Americas, APAC and Europe. LTX – Credence 4/03 – 10/05  Rapidly-growing maker of semiconductor test equipment and software (LTXC on NASDAQ) with sales of $600M. Director of Accounting Managed general ledger, international accounting, receivables, payroll, A/P, internal audit and all SEC reporting.  Filing of convertible bond offering and all other acquisition-related SEC filings. Mattson Technology 4/02 – 3/03  An international, public high-tech manufacturing company (MTSN on NASDAQ) with $300M in revenue. Vice President, Corporate Controller In charge of all divisional finance, cost accounting, SEC and accounting functions.  Established comprehensive system of internal controls and lead for all Sarbanes-Oxley activities.  Re-designed close process resulting in 40% shorter cycle with fewer headcount.  Drove cost reduction initiatives including closure and sale of redundant and low performing entities.  Orchestrated finance reorganization that greatly improved efficiency and operational support.  KLA-Tencor 4/99 – 3/02  Leader in semiconductor factory automation and test equipment (KLAC on NASDAQ) with over $3B Revenue. Assistant Corporate Controller  Led entire accounting organization (35 professionals) including Finance IT, general ledger, SEC and Internal Audit.  Established intuitive transactional accounting metrics which drove accounting group toward world-class performance.  Responsible for interpretation and implementation of all GAAP and worldwide internal accounting policies.  Drove exhaustive increase in use of system-based, as opposed to manual, internal controls. Established accounting and internal controls for $100M venture fund. Headed due diligence and drove integration for several major acquisitions.  Cypress Semiconductor 2/97 – 3/99  A $2 billion semiconductor manufacturer (CY on the NYSE). After one year, promoted from Division Controller to Group Controller, responsible for all accounting and FP&A for over 60% of company operations.  Group Controller  Supplied four operational VPs with intuitive metrics to exceed strategic and tactical business plans.  Created financial model to fine-tune company’s technological roadmap and measure success of R&D projects.  Implemented process to identify root causes and corrective actions to reduce company-wide inventory.  Project lead on cross-functional team to reduce breakeven revenue levels.  Provided all accounting and financial support for Cypress’s five product lines.  Created from scratch, a project-based budget and accounting system for cross-divisional resource management.  Analysis of technical roadmap caused shift from investment to milking strategy for major product line.  Performed analysis to de-feature product to fill product line hole and allow participation in lower-priced regions.  Created separate segment-based P&Ls used to refine product line strategy.  Applied Materials 7/95 – 1/97  The world’s largest manufacturer (AMAT on Nasdaq) of semiconductor equipment with annual revenue of over $6B.  Finance Manager , Group Accounting Manager   Directed close, forecast and annual plan for company during period of explosive growth.  Led staff to reduce time to complete financial forecast by over 50%.  Played key role in company-wide SAP and implementations.  Developed total cost of ownership (COO) model used by Strategic Marketing to benchmark competitors’ products. Intel 6/87 – 6/95 The world’s largest chip producer. Attained 8 years of increasing responsibility managing strategic finance teams. During tenure, sales grew from $1B to $40B.  Sr. Manager – Worldwide Capacity and Loading Finance (8/6/95)  Managed group of 7 senior analysts dedicated to optimizing worldwide factory capacity and loading decisions. Controlled a $3B annual capital budget for new factory capacity and equipment. Provided all financial modeling and support for factory site selections, factory expansions and factory closures. Manager - Financial Strategy (4/7/94)  Determined all pricing and manufacturing strategies for Intel’s multi-billion dollar Memory Components Division. Created new high performance finance team including all hiring, direction-setting, and alignment with operations.  Led FP&A effort including division’s first comprehensive long-range planning model. Conducted initial feasibility studies for Flashcard and Flashdrive product startups.  Performed analysis that resulted in move from contracted to lower cost in-house assembly line. EDUCATION & ACCREDITATIONS  MBA – University of Wisconsin BBA Accounting – University of Wisconsin – Milwaukee Graduated Summa Cum Laude  Certified Public Accountant (active CPA license)',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/df0bdde6-8986-4d48-b9fd-8767f4e64bda.docx',
  },
  {
    email: 'bigsanjp@yahoo.com',
    avatar: null,
    city: null,
    state: null,
    country: null,
    first_name: 'Sanjay',
    last_name: 'Patel',
    linkedin: '',
    phone: '4085294027',
    current_company: 'TempCFO, Inc.',
    timezone: null,
    current_job_title: 'Senior Controller',
    resume_json: {
      basics: {
        email: 'bigsanjp@yahoo.com',
        phone: '529-4027',
        social: [],
        lastName: 'Patel',
        linkedIn: null,
        location: null,
        firstName: 'Sanjay',
        currentCompany: 'TempCFO, Inc.',
        currentJobTitle: 'Senior Controller',
        totalExperienceInMonths: 246,
      },
      skills: [
        'Finance',
        'Accounting',
        'Operations',
        'Financial Modeling',
        'Budgeting',
        'Rev Rec',
        'International Accounting',
        'Consolidations',
        'GAAP',
        'IFRS',
        'SOX',
        'Tax',
        'Audit',
        'Accounting Systems Conversions',
        'SEC Reporting',
        'Staff Management',
      ],
      schools: [],
      overview:
        'Sanjay Patel is a Senior Controller at TempCFO, Inc. with expertise in Finance, Accounting, and Financial Modeling. He also possesses skills in Budgeting and International Accounting.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'TempCFO, Inc., An inDinero Company.',
          level: 'Senior-level',
          start: {
            year: 2018,
            month: 12,
          },
          title: 'Senior Controller',
          location: '',
          description:
            'Mange a book of 10 to 12 startup clients ME Close, prepare financial statements, variance to budget analysis, BS recons, cash forecast Manage Client Revenue Recognition, budgeting, additional analysis as needed Manage Tax and Audit, PBC lists, tax provision work Work closely with client and CEO/CFO on projects as directed Manage and train staff, work closely with accounting team',
        },
        {
          end: {
            year: 2018,
            month: 12,
          },
          org: 'Consulting – Director of Finance/Controller (Audible Magic, Escalon Services, Tesla, Openwave Messaging, ItsOn Inc., Attivo Partners, Macias, Gini & O’Connell LLP MGO)',
          level: 'Senior-level',
          start: {
            year: 2015,
            month: 3,
          },
          title: 'Director of Finance/Controller',
          location: '',
          description:
            'Month End Close, Payroll, Human Resource and Cash Management Prepare financial statements, variance to budget analysis, BS recons, cash forecast Manage Revenue Recognition (ASC 605 and 606, VSOE, SAB101, etc.) Support SEC reporting and budgeting, additional analysis and reporting as needed Manage Tax and Audit. Other projects as directed by CFO and CEO',
        },
        {
          end: {
            year: 2015,
            month: 2,
          },
          org: 'Drobo Inc. /Connected Data Inc.',
          level: 'Mid-level',
          start: {
            year: 2014,
            month: 4,
          },
          title: 'Assistant Controller',
          location: '',
          description:
            'Reporting to the CFO, manage and mentor a team of three employees Manage day-to-day accounting and finance (AR, AP, Payroll, GL, cash management, etc.) Month end closing for two entities. Prepare consolidated financials. Review BS and bank recons Monthly reporting package for BOD. Prepare due diligence checklist for potential investors Manage revenue recognition and deferred revenue, review monthly commission calculations Work with outside auditors and tax team in US, UK, Singapore and Japan Prepare monthly variance analysis and actual vs. budget analysis Assist in preparing annual budget, other projects and reporting as requested by CFO',
        },
        {
          end: {
            year: 2014,
            month: 6,
          },
          org: 'Strands Labs Inc.',
          level: 'Mid-level',
          start: {
            year: 2013,
            month: 9,
          },
          title: 'Controller/Director of Finance and Accounting',
          location: '',
          description:
            'Month end closing and international consolidation, balance sheet and bank reconciliations Prepare monthly board package for CEO, investors and BOD, Manage audit and tax return Prepare and review monthly variance analysis and actual vs. budget analysis Manage revenue recognition and deferred revenue. Work with accountant in Spain to coordinate month end close calendar Implement month end controls, other projects as requested by CEO',
        },
        {
          end: {
            year: 2013,
            month: 7,
          },
          org: 'Zed USA Corp.',
          level: 'Mid-level',
          start: {
            year: 2012,
            month: 2,
          },
          title: 'Controller, US',
          location: '',
          description:
            'Manage and mentor staff of four, month end closing and financial reporting, and consolidations Monthly Revenue Recognition (virtual goods, advertising, SAAS, project) Manage budget process and full US audit, Work with outside tax firm to prepare annual taxes Manage all cash forecasting and work closely with Spain on funding of operations Contracts reviews and audits; review monthly results with HQ team in Spain Extensive modeling of future product expectations and requirements to add new revenue streams Work with COO to identify outsourcing functions and partnering with third party companies',
        },
        {
          end: {
            year: 2012,
            month: 1,
          },
          org: 'Securematics, Inc.',
          level: 'Senior-level',
          start: {
            year: 2009,
            month: 12,
          },
          title: 'Senior Manager Finance and Operations',
          location: '',
          description:
            'Manage staff of 22 (8 direct and 14 indirect reports) Help grow revenues from $107 million in 2009 to $144 million in 2010 to $175 million in 2011 Month end close, inventory management, credit/collections, logistics, cash flows, and operations Work closely with GM to plan for credit and inventory requirements New client contract reviews and credit line setting. Weekly forecast meetings to track sales Manage vendor audits, manage all day to day functions of the daily business Implement internal procedures to enhance productivity, manage cash forecast and credit lines Create metrics to measure roi, inventory turnover, quote to close ratios, and operating cash',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'NaturEner USA',
          level: 'Senior-level',
          start: {
            year: 2009,
            month: null,
          },
          title: 'Senior Accounting Manager',
          location: '',
          description:
            'Manage system conversion from QuickBooks to Sage Mas90, transfer books for 20 entities Manage, coach, and mentor staff of 2. Create/measure goals for the accounting staff members Implement month end close schedule and create deadlines for accuracy and efficiency of financial statements in compliance with US GAAP and IFRS Prepare/review corporate financial statements and balance sheets Review bank/balance sheet reconciliations, intercompany accounts, FX gain/loss and fixed assets Book all partnership and hedge entries, forecast cash flow needs, manage all aspects of the GL Provide support for external audits/tax filings. Provide support to management',
        },
        {
          end: {
            year: 2008,
            month: null,
          },
          org: 'Rickenbacker Group, Inc.',
          level: 'Senior-level',
          start: {
            year: 2005,
            month: null,
          },
          title: 'Controller',
          location: '',
          description:
            'Increased profit margin 15% for 2005, and maintained this increase for 2006 and 2007 Created/implemented a financial model to forecast revenues and manage costs to maximize profit Reduction in costs by utilizing our international subsidiary while maintaining our revenues Set-up internal controls and secured alternate financing to minimize cost and maximize cash flow Manage accounting, finance, payroll, human resources, and staff of four Monthly variance analysis used in financial planning and cash management Prepare consolidated financial statements and balance sheet including our international subsidiary Manage foreign currency/intercompany entries and currency exchange rate exposure Manage revenue recognition and deferred revenue, oversee expenses for our international sub Manage licensing, bonding, and filing of annual reports for 50 states Manage internal audits and work with CPA for tax returns',
        },
        {
          end: {
            year: 2008,
            month: null,
          },
          org: 'FedEx Freight West',
          level: 'Senior-level',
          start: {
            year: 2008,
            month: null,
          },
          title: 'Interim Accounting Manager',
          location: '',
          description: 'Interim Accounting Manager',
        },
        {
          end: {
            year: 2002,
            month: null,
          },
          org: 'PG&E',
          level: 'Senior-level',
          start: {
            year: 2002,
            month: null,
          },
          title: 'Senior Accounting/Business Analyst',
          location: '',
          description: 'Senior Accounting/Business Analyst',
        },
        {
          end: {
            year: 2005,
            month: null,
          },
          org: 'Future Network USA',
          level: 'Senior-level',
          start: {
            year: 2004,
            month: null,
          },
          title: 'Accounting Manager',
          location: '',
          description: 'Accounting Manager',
        },
        {
          end: {
            year: 2004,
            month: null,
          },
          org: 'Landmark Education Enterprises Inc.',
          level: 'Senior-level',
          start: {
            year: 2003,
            month: null,
          },
          title: 'Sr. Acct.',
          location: '',
          description: 'Sr. Acct.',
        },
        {
          end: {
            year: 2001,
            month: null,
          },
          org: 'VA Linux Systems, Inc.',
          level: 'Senior-level',
          start: {
            year: 2000,
            month: null,
          },
          title: 'Sr. Acct',
          location: '',
          description: 'Sr. Acct',
        },
        {
          end: {
            year: 2000,
            month: null,
          },
          org: 'OSH/Sears Hardware Corporate',
          level: 'Senior-level',
          start: {
            year: 1999,
            month: null,
          },
          title: 'Sr. GL/Inventory Acct',
          location: '',
          description: 'Sr. GL/Inventory Acct',
        },
        {
          end: {
            year: 1999,
            month: null,
          },
          org: 'Stuart Anderson’s Restaurants',
          level: 'Senior-level',
          start: {
            year: 1997,
            month: null,
          },
          title: 'Sr. Acct',
          location: '',
          description: 'Sr. Acct',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'University of Phoenix',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'MBA',
          location: '',
          description: 'MBA',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'CSU - Long Beach',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Bachelor of Science',
          location: '',
          description: 'Business Finance',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Oracle',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Oracle',
          location: '',
          description: 'Oracle',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'PeopleSoft',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'PeopleSoft',
          location: '',
          description: 'PeopleSoft',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'SAP',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'SAP',
          location: '',
          description: 'SAP',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'SAP Business One',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'SAP Business One',
          location: '',
          description: 'SAP Business One',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'NetSuite',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'NetSuite',
          location: '',
          description: 'NetSuite',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Great Plains',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Great Plains',
          location: '',
          description: 'Great Plains',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Sage Intacct',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Sage Intacct',
          location: '',
          description: 'Sage Intacct',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Salesforce',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Salesforce',
          location: '',
          description: 'Salesforce',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'MAS 90',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'MAS 90',
          location: '',
          description: 'MAS 90',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Platinum',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Platinum',
          location: '',
          description: 'Platinum',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'QuickBooks',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'QuickBooks',
          location: '',
          description: 'QuickBooks',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'FRX',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'FRX',
          location: '',
          description: 'FRX',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Crystal Reports',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Crystal Reports',
          location: '',
          description: 'Crystal Reports',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Hyperion',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Hyperion',
          location: '',
          description: 'Hyperion',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'CONCUR',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'CONCUR',
          location: '',
          description: 'CONCUR',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Lawson',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Lawson',
          location: '',
          description: 'Lawson',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Solomon',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Solomon',
          location: '',
          description: 'Solomon',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Vertex',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Vertex',
          location: '',
          description: 'Vertex',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'University of Phoenix',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'MBA',
          location: '',
          description: 'MBA',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'CSU - Long Beach',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Bachelor of Science',
          location: '',
          description: 'Business Finance',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Sanjay Patel  529-4027 – bigsanjp@yahoo.com Senior Finance, Accounting, and Operations professional specializing in profit margins – Efficient and accurate month end closes and reporting – Financial modeling, planning and analysis – Budgeting – Rev Rec, International accounting, and consolidations - GAAP, IFRS, and SOX - Tax and audit - Accounting systems conversions – SEC Reporting support - Building, managing and mentoring of staff EXPERIENCE TempCFO, Inc., An inDinero Company. (outsourced finance, accounting, and tax services, startup) 12/2018 – Current – Senior Controller Mange a book of 10 to 12 startup clients ME Close, prepare financial statements, variance to budget analysis, BS recons, cash forecast Manage Client Revenue Recognition, budgeting, additional analysis as needed Manage Tax and Audit, PBC lists, tax provision work Work closely with client and CEO/CFO on projects as directed Manage and train staff, work closely with accounting team Consulting – Director of Finance/Controller (Audible Magic, Escalon Services, Tesla, Openwave Messaging, ItsOn Inc., Attivo Partners, Macias, Gini & O’Connell LLP MGO) 3/2015 – 12/2018 Month End Close, Payroll, Human Resource and Cash Management Prepare financial statements, variance to budget analysis, BS recons, cash forecast Manage Revenue Recognition (ASC 605 and 606, VSOE, SAB101, etc.) Support SEC reporting and budgeting, additional analysis and reporting as needed Manage Tax and Audit. Other projects as directed by CFO and CEO Drobo Inc. /Connected Data Inc. (Storage, startup, 80-85 employees) 4/2014 – 2/2015 – Assistant Controller Reporting to the CFO, manage and mentor a team of three employees Manage day-to-day accounting and finance (AR, AP, Payroll, GL, cash management, etc.) Month end closing for two entities. Prepare consolidated financials. Review BS and bank recons Monthly reporting package for BOD. Prepare due diligence checklist for potential investors Manage revenue recognition and deferred revenue, review monthly commission calculations Work with outside auditors and tax team in US, UK, Singapore and Japan Prepare monthly variance analysis and actual vs. budget analysis Assist in preparing annual budget, other projects and reporting as requested by CFO Strands Labs Inc. (Financial Management Software, start up, 45-50 employees) 9/2013 – 6/2014 – Controller/Director of Finance and Accounting (Contractor) Month end closing and international consolidation, balance sheet and bank reconciliations Prepare monthly board package for CEO, investors and BOD, Manage audit and tax return Prepare and review monthly variance analysis and actual vs. budget analysis Manage revenue recognition and deferred revenue. Work with accountant in Spain to coordinate month end close calendar Implement month end controls, other projects as requested by CEO Zed USA Corp. (Mobile content/Online advertising and marketing, start up, 35-40 employees)) 2/2012 – 7/2013 – Controller, US Manage and mentor staff of four, month end closing and financial reporting, and consolidations Monthly Revenue Recognition (virtual goods, advertising, SAAS, project) Manage budget process and full US audit, Work with outside tax firm to prepare annual taxes Manage all cash forecasting and work closely with Spain on funding of operations Contracts reviews and audits; review monthly results with HQ team in Spain Extensive modeling of future product expectations and requirements to add new revenue streams Work with COO to identify outsourcing functions and partnering with third party companies Securematics, Inc., (Distribution of Network Security Products, 40-45 employees) 12/2009 – 1/2012 – Senior Manager Finance and Operations Manage staff of 22 (8 direct and 14 indirect reports) Help grow revenues from $107 million in 2009 to $144 million in 2010 to $175 million in 2011 Month end close, inventory management, credit/collections, logistics, cash flows, and operations Work closely with GM to plan for credit and inventory requirements New client contract reviews and credit line setting. Weekly forecast meetings to track sales Manage vendor audits, manage all day to day functions of the daily business Implement internal procedures to enhance productivity, manage cash forecast and credit lines Create metrics to measure roi, inventory turnover, quote to close ratios, and operating cash NaturEner USA (Alternative Energy, start up, 30-35 employees) 2009 – Senior Accounting Manager – (Contractor) Manage system conversion from QuickBooks to Sage Mas90, transfer books for 20 entities Manage, coach, and mentor staff of 2. Create/measure goals for the accounting staff members Implement month end close schedule and create deadlines for accuracy and efficiency of financial statements in compliance with US GAAP and IFRS Prepare/review corporate financial statements and balance sheets Review bank/balance sheet reconciliations, intercompany accounts, FX gain/loss and fixed assets Book all partnership and hedge entries, forecast cash flow needs, manage all aspects of the GL Provide support for external audits/tax filings. Provide support to management Rickenbacker Group, Inc. (AR Management Company, start up, 75-80 employees) 2005 – 2008 - Controller Increased profit margin 15% for 2005, and maintained this increase for 2006 and 2007 Created/implemented a financial model to forecast revenues and manage costs to maximize profit Reduction in costs by utilizing our international subsidiary while maintaining our revenues Set-up internal controls and secured alternate financing to minimize cost and maximize cash flow Manage accounting, finance, payroll, human resources, and staff of four Monthly variance analysis used in financial planning and cash management Prepare consolidated financial statements and balance sheet including our international subsidiary Manage foreign currency/intercompany entries and currency exchange rate exposure Manage revenue recognition and deferred revenue, oversee expenses for our international sub Manage licensing, bonding, and filing of annual reports for 50 states Manage internal audits and work with CPA for tax returns CONSULTING/CONTRACTING 2008 - FedEx Freight West, Freight and Logistics, Interim Accounting Manager 2002 - PG&E, Utilities, Senior Accounting/Business Analyst PERMANENT 2004 – 2005 - Future Network USA, Accounting Manager 2003 – 2004 - Landmark Education Enterprises Inc., Sr. Acct. 2000 – 2001 - VA Linux Systems, Inc., Software/Hardware and Services, Sr. Acct 1999 – 2000 - OSH/Sears Hardware Corporate, Retail Merchandise, Sr. GL/Inventory Acct 1997 – 1999 - Stuart Anderson’s Restaurants, Corporate Office, Sr. Acct Education MBA, University of Phoenix Bachelor of Science, Business Finance, CSU - Long Beach Computer Skills Oracle, PeopleSoft, SAP, SAP Business One, NetSuite, Great Plains, Sage Intacct, Salesforce, MAS 90, Platinum, QuickBooks, FRX, Crystal Reports, Hyperion, CONCUR, Lawson, Solomon, Vertex',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/d652f202-b5c5-4334-9160-3974747e3ec6.docx',
  },
  {
    email: 'llaiise@yahoo.com',
    avatar: null,
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    first_name: 'Louise',
    last_name: 'Lai',
    linkedin: '',
    phone: '+15105526627',
    current_company: 'DeWinter Group / CBIZ, Inc.',
    timezone: null,
    current_job_title:
      'Assistant Controller /Accounting Manager/Sr. Revenue Manager /SOX Manager/SOX Director/SEC Reporting Consultants',
    resume_json: {
      basics: {
        email: 'llaiise@yahoo.com',
        phone: '552–6627',
        social: [],
        lastName: 'LAI',
        linkedIn: null,
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: '',
        },
        firstName: 'LOUISE',
        currentCompany: 'DeWinter Group / CBIZ, Inc.',
        currentJobTitle:
          'Assistant Controller /Accounting Manager/Sr. Revenue Manager /SOX Manager/SOX Director/SEC Reporting Consultants',
        totalExperienceInMonths: 270,
      },
      skills: [
        'Technical & operational accounting',
        'SOX & controls Internal audit',
        'Excellent project & change management',
        'Proven relationship building/partnership',
        'Excellent analytical, problem solving, & organizational skills',
        'BOD/executive presentation',
        'Risk assessment & management',
        'System implementation',
        'Process improvement',
        'Revenue recognition',
        'SEC filings & tax',
        'Consolidation',
        'Management/leadership',
        'Budgeting/forecasting',
        'Cost accounting',
      ],
    },
    resume_text:
      'SKILL SUMMARY LOUISE LAI, MBA  552–6627 / llaiise@yahoo.com ◆ Technical & operational accounting ◆ SOX & controls Internal audit ◆ ◆ Excellent project & change management ◆ Proven relationship building/partnership ◆ Excellent analytical, problem solving, & organizational skills ◆ BOD/executive presentation ◆ Risk assessment & management ◆ System implementation ◆ Process improvement ◆ Revenue recognition ◆ SEC filings & tax ◆ Consolidation ◆ Management/leadership ◆ Budgeting/forecasting ◆ Cost accounting EXPERIENCE DeWinter Group / CBIZ, Inc. Assistant Controller /Accounting Manager/Sr. Revenue Manager /SOX Manager/SOX Director/SEC Reporting Consultants 2020 – Present • Successfully led diverse global teams and managed the quarterly & year-end audits without audit adjustments • Managed m/e close AP/P2P, prepaid, accrual, reconciliations, JEs, flux, & mitigated system risks & improved processes • Reviewed contracts for performance obligations, allocations, waterfall mapping, & proper ASC606 revenue recognition • Recommended proper revenue treatments & revenue process improvements; prepare JEs & month-end close activities • Developed a new deferred revenue roll-forward reconciliation model and completely reconciled the accounts • Review, reconcile, and tie out SEC filing reporting schedules to Form 10K/Q for accuracy and completeness • Successfully managed 1st-year SOX programs including ITGC from planning, scoping, risk assessment, control design, San Francisco, CA and process documentation/improvement, testing, remediation, and external audits • Prepared SOC 1 attestation report assessments for contract third-party vendor services • Managed and completed SOX compliance tools, AuditBoard and FloQast, system implementations Super Micro Computer, Inc. Sr. Manager of Internal Audit and SOX Compliance San Jose, CA 2019 – 2020 • Successfully led team and consultants to complete FY 2019/2020 SOX program under budget for US & int’l locations • Developed first ever comprehensive, formal financial, fraud, operational, and compliance risk assessments for significant locations, materiality threshold, process improvement, and control gap, design, & alignment • Completed process and control gap as well as consistency analyses for all significant entity locations • Recommended process improvements in revenue, ACH, review & expense thresholds, accrual, roll-forward reconciliations, SOD, process automation, bank account inventory, policies, inventory/cost accounting, user access etc. Implemented, developed, and completed the first ever SOC report evaluations for in-scope 3rd party applications Identified in-scope applications, key reports & spreadsheets, user access review process, and automated controls • Collaborated with process owners to document/update process flow charts, and developed/refined key controls • Designed key controls including ASC 606/842, developed test plans, and tested key controls • • • Developed risk statements and financial assertions for automated and business controls • • Provided SOX training to process owners and prepared BOD package slides • Developed first ever SOX program governance document and audit plan schedule • Coached and trained team staff members and consultants of 5-6 Implemented SOX governance compliance system with process, risk, control, and testing configurations or mappings Inbenta Technologies, Inc. - a SaaS company Foster City, CA Sr. Manager of Corporate Accounting 2018 – 2019 • Performed analyses and reconciled revenue, deferred revenue, billing, and unbilled • Improved SO & revenue processes and configurations for proper ASC 605/606 revenue recognition • Increased recognized revenue through analyses, improved processes, experiences, knowledge, and business acumen • Developed schedules for proper GAAP transaction treatments for accrual, leases, prepaid, fixed assets, and inter-co etc. • • Developed an account reconciliation process and template; reconciled accounts with no prior account reconciliations • • Partnered or collaborated with appropriate parties for optimal deal structures, proper documents required, revenue Improved or implemented proper payment application, credit memo, and adjustment processes Implemented an accrual process to record expenses and revenue for the periods recognition requirements, and proper terms & conditions for appropriate revenue recognition • Managed consolidation and produced more accurate and complete financial statements applying proper GAAP standard • Managed and assisted in completing 2017 audit; managed and filed statutory taxes • Managed a team of 5-6 as well as coached and trained team staff members in US, Spain, France, and Brazil Automation Anywhere, Inc. - a SaaS company San Jose, CA Accounting Manager General/Technical Accounting 2017 – 2018 • Developed and implemented a month-end close process, calendar, check list, and task list • Developed and implemented the accrual processes in compliance with US GAAP • Developed a standardized account reconciliation template and implemented account reconciliations • Implemented process controls such as reviews, account reconciliations as well as roll-forward and deferral schedules to produce more accurate US GAAP compliant financial statements • Oversaw all aspects of Accounting functions for GL, AR, revenue recognition, AP, fixed asset, leases, inter-co, purchasing, tax, financial statement preparation, and flux analyses etc. • Managed, coached, built & led a team of 3-4 in US & India for accounting close activities and GAAP treatments • Developed Purchase Requisition (PR) Policy, PR request form, approval matrix, and vendor change form • Revised and updated Corporate Travel Policy to reflect the most current processes and business needs/practices • Completed O2C and P2P process and gap mappings as well as process documentation • Completed 2015 & 2016 cost allocations for actual vs. budget analyses & future benchmark references • Successfully and satisfactorily managed & completed external financial, sales tax, property tax, and bank audits • Managed new entity establishment registration and filing including sales/use tax and payroll tax Revenue Recognition • Implemented a process for subscription and PS revenue accrual collaborating with Sales Op and PS teams • Developed a Sales Order and/or Billing Review Checklist for more accurate invoices and revenue recognition • Developed a Revenue Recognition Review Checklist for more accurate and proper revenue recognition • Streamlined & improved AR processes including collection & payment application with Sales Op, Legal, Contract Management, & PS through communications, issue/problem solving, process improvement, & guidance • Produced timelier and more accurate AR and revenue applying proper revenue recognition standard ASC 605 especially for non-standard terms & conditions (Ts&Cs) as well as with proper reviews, better supporting documentation, provision of required information, guidance to and collaboration with Sales Op and PS teams Identified system unrecorded or unposted invoices for prior periods through flux & trend analyses of revenue • Completed and reconciled deferred revenue reconciliations of manual calculations to system reports and GL • • Completed VSOE analysis for product arrangements, pricing, and proper revenue treatment • Reviewed orders and contracts including non-standard terms and conditions for proper revenue recognition according to ASC 605, amortization of deferred revenue, data entries, and billing accuracy and completeness • Managed and reviewed month-end revenue close activities including revenue accrual, bad debt reserve analysis, deferred revenue analysis, journal entry review, COGS, revenue analyses, & account reconciliations of AR, AR Suspense, Unbilled, Allowance for Doubtful Account, Deferred Revenue, & Sales Tax • Served as a trust advisor to Sales Op, Sales, Professional Services (PS), Contract Management, and Legal to drive agreement closure on complex deals, pricing, and tax • Assisted Legal, Sales, Contract Management, and PS teams in sales contract arrangement and deal structure review for revenue recognition and maximization of business revenue e.g. eliminating non-standard Ts & Cs • Partnered with cross-functional teams such as Sales Op, Sales, Contract Management, Legal, & PS teams on establishing quote to invoicing process, driving process improvement, identifying non-standard terms & conditions, advising on revenue recognition issues, & ensuring completeness of supporting documents • Trained Sales Op, Sales, and PS on system processes, policies, and accounting requirements for revenue compliance Accretive Solutions/Netpolarity/Superior Group/Parker & Lynch Inc. San Jose, CA SOX GRC /Accounting Consultant (public & start-up) - Blackhawk Network /Equinix /Medivation /Corcept Therapeutics/Square Trade/Intuitive Surgical SOX Manager Consultant – Charles Schwab / L3 Technologies 2013 – 2017 • Documented ASC 606 new revenue recognition processes with external auditor’s guidelines and new controls • Performed project planning, risk assessment, scoping, process documentation/update, control design, process gap improvement and remediation recommendations, & testing (ITGC included); prepared & assessed SOC 16 • Developed and streamlined risk assessment & matrix in new SOX GRC tool for appropriate risk to control mappings 2 • Worked closely with cross-functional managers on resolving issues, gaps, & deficiencies • Led the project and managed other consultants in job assignments and work review • Prepared financial statements, analyses, and account reconciliations; assisted in annual financial audit • Performed data migration & validation for OpenPages system implementation; significant account, 2013 COSO risk assessment, control (including ITGC), gap analyses, & test plan re-evaluations/rationalization Oracle (Taleo) Corporation - a SaaS/cloud company Dublin, CA Sr. SOX Compliance Manager/Head of SOX Compliance SOX Compliance Manager/ Head of SOX Compliance 2009 – 2012 2006 – 2009 • Successfully managed first six years of SOX 404 program (ITGC included) from end-to-end - planning, scoping, risk assessment etc. to completion & success with little budget, limited resources, & own strong business acumen • Effectively reduced costs by 45% by leveraging internal resources, 43% decrease in key controls, 20% decrease in sample sizes, increased auditor’s reliance on management testing from 50% to 80% with solid & quality work • Designed, developed, tested key controls & test plans for business & IT processes using COSO & COBIT frameworks • Developed and implemented a control self-assessment for risk assessments, gap analyses, and appropriateness of controls applying AS5, COSO, and COBIT frameworks • Developed and implemented company-wide annual SOX quiz; prepared Audit Committee packages • Provided client support and recommendations for M&A activities (data conversions, interfaces, migrations, and system implementations) and performed integration testing • Produced and developed fraud risk assessment based on COSO framework • Conducted risk & control evaluations and provided new control design as well as process improvement recommendations to management/process owners for business operations and IT infrastructures, new processes, process changes, new business system implementations, system integrations, and data conversions or migration etc. • Championed/sponsored process re-engineering/ improvement from inefficiencies, gaps, deficiencies, & remediation by challenging the status quo of current processes, employing critical thinking, & suggesting improvements or alternatives • Provided recommendations and assisted in developing policies and procedures • Developed and maintained valuable/sustainable relationships with upstream & downstream clients (ext’l auditors inc.) • Mentored, educated, and provided training to all cross-functional process owners worldwide on SOX and partnered with them to design optimal, refine, or improve controls annually and recommended corrective actions for deficiencies • Documented, updated, and maintained process flow charts, control matrices, and test plans in SharePoint, and deficiency evaluations or summary of aggregated deficiencies (SAD) • Managed 1-2 staff and/or consultants • Performed and reviewed all (ITGC included) process and remediation testing for US, Canada, and UK • Collaborated with Legal on whistle blower hotline compliance and testing • Helped develop overall corporate governance including disaster recovery and business continuity plans • Evaluated SAS70/SSAE16/SOC16 reports and performed internal control mappings • Researched and analyzed technical accounting and financial reporting issues, assessed impacts to business processes, and designed controls to mitigate risks • Awarded exceptional raise and bonus for outstanding work OmniVision Technologies, Inc. Santa Clara, CA Internal Audit Manager/Head of Internal Audit 2004 – 2006 • Reported functionally to the Audit Committee and presented quarterly updates to the Committee • Successfully managed first 2 years worldwide SOX 404 program (ITGC included) from end-to-end such as planning, scoping, & risk assessment etc. to completion and success with no training and own strong business acumen o Effectively communicated a sense of urgency, process ownership, roles & responsibilities, and potential risks to process owners in the 1st year SOX implementation o Led weekly meetings with key internal & external stakeholders for update, progress, and issue resolution o Educated accounting, tax, treasury, stock, payroll, sales, sales operations, HR, legal, and IT etc. process owners on SOX through meeting presentations, CEO’s all-hands meetings, and annual sales meetings o Successfully obtained CEO’s/top management’s support or sponsorship for successful project execution o Mitigated risks by recommending process owners to implement optimal controls, educating process/business owners on internal controls and risks, and successfully implemented deficiency remediation 3 o Assisted in developing and made recommendations for accounting and sales policies and procedures worldwide to enhance guidance, standardize processes, and minimize risks o Built constructive and collaborative relationships with audit clients and external auditors • Reduced 2nd-yr costs by 30% through reduced key controls and efficient resource allocation • Documented and maintained all (ITGC included) process narratives, flow charts, control matrices, and deficiency evaluations or summary of aggregated deficiencies (SAD) • Designed, developed, tested key controls & test plans for business & IT processes using COSO & COBIT frameworks • Collaborated with Legal on whistle blower hotline compliance and testing • Managed 4-6 staff auditor, consultants, and/or contractors • Performed quarterly risk assessments as well as designed control and performed & reviewed all testing for international location in Shanghai, China and managed variable interest entity integration in Taiwan • Evaluated SAS70 reports and performed internal control mappings • Built and in-charge of Internal Audit Dept. and established Internal Audit Dept. Charter • Awarded extraordinary stock for outstanding work Stanford, CA Stanford University Sr. Internal Auditor 2002 – 2004 Increased 20% in revenue recovery and improved cash handling process control and efficiency • • Streamlined and reengineered contract letting and management process with a new model • Improved fixed asset recording and monitoring through enhanced policies and procedures as well as more systematic and standardized system controls • Conducted and developed operational, fraud, & compliance audits, process flow documentation, and investigation for senior management and BOD • Developed audit plans/scopes, conducted audits, wrote formal audit reports, made recommendations, and presented audit findings to senior management for better operational efficiency, effectiveness, and financial performance • Awarded an exceptional bonus for outstanding work performed • Prepared training materials and educated business owners on internal audit • Supervised staff auditor and provided on-the-job training for professional development Community Hospitals of Central California Fresno, CA Internal Auditor 1998 – 2000 • Conducted and developed operational, financial, & compliance audits, analytical and performance metrics, process flow • documentation, and investigation for senior management and BOD Improved clinical and billing operations as well as their regulatory compliance for ER, OR, lab, and home health departments, resulting in a 30% saving through process/charging streamlining, and reengineering Improved bad debt by 10% through cost report and bad debt model analyses • • Performed audit work or projects for external auditor Senior Accountant • Conducted financial, budget vs. actual, and account reconciliation analyses • Prepared consolidated financial statements and executive and Board financial packages • Developed accounting procedures and policies including standardizing account analyses • Developed contractual write-off models • Coordinated and supported independent audits United Health Centers, Inc. Sr. Accountant/ Controller Parlier, CA 1997 – 1998 • Managed 15 staff of general accounting, A/P, A/R, payroll, cash, purchasing, and facility services • Managed financial feasibility and operational efficiency during company crisis with the Fed • Prepared consolidated financial statements, analyses, and executive management & Board financial reporting packages • Developed managerial, budgeting, forecasting, and financial plans and analyses • Performed budget vs. actual variance analyses and assisted in cost report preparation • Directed and coordinated independent and regulatory audits 4 EDUCATION Kelley School of Business, Indiana University, Bloomington, IN Master of Business Administration (MBA), Strategic Management Consultancy & e-Biz High-Tech Marketing California State University, Fresno, Fresno, CA Bachelor of Science, Finance, Summa Cum Laude SPECIAL SKILLS Computer skills ◆ Word ◆ Excel ◆ PowerPoint ◆ Salesforce ◆ Coupa ◆ OpenPages ◆ Avalara ◆ QuickBooks ◆ Blackline ◆ FloQast ◆ Visio ◆ Access ◆ Lawson ◆ Hyperion Pillar ◆ Sharepoint ◆ Intacct ◆ Certify ◆ Carta ◆ NetSuite ◆ Graphite Connect ◆ DBASE ◆ BASIC ◆ MAS90 ◆ Prosim ◆ Monarch ◆ ACL ◆ SPSS/SAS ◆ Teammate ◆ AuditBoard ◆ Brex ◆ ACCPAC ◆ Meditech ◆ Ecosign ◆ Egencia ◆ @Risk Monte Carlo statistical and financial simulation & modeling ◆ SAP ◆ Workfront ◆ Softrax 5',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/c92015db-97ec-436f-8f7e-40c5e7b4c2bc.pdf',
  },
  {
    email: 'joyliu00@hotmail.com',
    avatar: null,
    city: null,
    state: null,
    country: null,
    first_name: 'Joy',
    last_name: 'Liu',
    linkedin: '',
    phone: '6693082478',
    current_company: 'AESC',
    timezone: null,
    current_job_title: 'US Controller & Global Accounting Director',
    resume_json: {
      basics: {
        email: 'joyliu00@hotmail.com',
        phone: '339-3058',
        social: [],
        lastName: 'LIU',
        linkedIn: null,
        location: null,
        firstName: 'JIAYUE (JOY)',
        currentCompany: 'AESC',
        currentJobTitle: 'US Controller & Global Accounting Director',
        totalExperienceInMonths: 113,
      },
      skills: [],
      schools: [
        {
          end: null,
          gpa: null,
          field: 'Business',
          start: {
            year: 2022,
            month: 8,
          },
          degree: 'MBA Candidate',
          institution: 'UC Berkeley Haas Business School',
        },
        {
          end: {
            year: 2009,
            month: 8,
          },
          gpa: null,
          field: 'Accounting',
          start: {
            year: 2007,
            month: 8,
          },
          degree: 'Master of Accounting',
          institution: 'Washington State University',
        },
        {
          end: {
            year: 2005,
            month: 7,
          },
          gpa: null,
          field: 'Accounting',
          start: {
            year: 2001,
            month: 9,
          },
          degree: 'Bachelor of Accounting',
          institution: 'Renmin University of China',
        },
      ],
      overview:
        'Joy Liu is a US Controller & Global Accounting Director at AESC with 9+ years of experience. She excels in skills such as financial management, accounting, and leadership.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'AESC',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 3,
          },
          title: 'US Controller & Global Accounting Director',
          location: '',
          description:
            'Responsible for US entities financial statements and accounting operation. Managed global monthly, quarterly and annual close process. Responsible for global consolidated financial statements, Intercompany transactions and FX translations. Manage external audit (PCAOB standard) and reviews. Responsible for establishing and executing global accounting policies and technical accounting for significant transactions. Improve and streamline financial system and accounting process for US entities. Update and improve internal controls accounting process. Manage claims of 45X tax credits. Manage external tax consultants to complete tax provision and tax return.',
        },
        {
          end: {
            year: 2023,
            month: 3,
          },
          org: 'Tesla, Inc.',
          level: 'Mid-level',
          start: {
            year: 2018,
            month: 8,
          },
          title: 'Sr. Manager of Revenue Accounting',
          location: '',
          description:
            'Built up energy revenue recognition operational process from scratch. Guided IT team to build the logic to automate energy revenue from scratch. Implemented and improved operational process and system functionality to continually optimizing accounting process associated with revenue and relevant asset and liability accounts. Managed monthly and quarterly close of revenue and performed financial analysis and SOX controls. Provided accounting opinions to finance, business, legal and sales team for effective and efficient decision making for business strategy and structure of large and complex deals per ASC 606, including elements such as hardware, software, SAAS, services, etc. Reviewed significant contracts to ensure correct accounting treatment per ASC 606. Partnered with FPA team to build revenue forecast model and analyze reasonableness of revenue and profit margin. Provided revenue related data to SEC reporting team and other business teams. Collaborated with regional teams (APAC and EMEA) to ensure the global consistency of accounting process and policy. Supported external and internal auditors to complete the audit timely and efficiently.',
        },
        {
          end: {
            year: 2018,
            month: 8,
          },
          org: 'Tesla, Inc.',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: 10,
          },
          title: 'Technical Accounting Lead',
          location: 'Santa Clara',
          description:
            'SEC filings (10K,10Q, Press Release, Form 424(b)). Managed equity roll-forward and footnote/MDA disclosure. Managed third-party XBRL professionals and reviewed their work. Coordinated the review of SEC filings with auditors, legal department, investor relations and internal reviewers. Led new revenue guidance (ASC 606) and new lease guidance (ASC 842) accounting assessment and implementation. Partnered with FPA to build up P&L, B&S and Cash flow forecast. Performed technical accounting research over significant transactions and prepared memos on various topics, including revenue recognition (longterm contract, multiple elements arrangements, extended warranty and BESP set- up), fund accounting (variable interest entity consolidation and tax equity fund), stock-based compensation, convertible notes/bond, manufacturing related accounting, going concern, goodwill/long-lived asset impairment, software license expense capitalization, lease (sales-lease back, embedded lease, collateralized borrowing lease, power purchase lease related to solar business), acquisition, etc. Coordinated with external auditors to manage the accounting treatment audit. Communicated with CFO/corporate controller (present accounting impact on B/S, I/S, and C/F), operational accounting (assist on figuring out accounting treatment and related journal entries for complex accounting treatments), sales/legal (assist on deal negotiation and contract drafting), and FPA (assist on models build-ups) for significant accounting treatments, SEC filing disclosures or accounting policies.',
        },
        {
          end: {
            year: 2016,
            month: 10,
          },
          org: 'Ruckus Wireless (Acquired by Brocade in 2016)',
          level: 'Associate-level',
          start: {
            year: 2015,
            month: 8,
          },
          title: 'Revenue and Reporting Manger',
          location: 'Santa Clara',
          description: '',
        },
        {
          end: {
            year: 2015,
            month: 8,
          },
          org: 'Audience, Inc. (Acquired by Knowles in 2015)',
          level: 'Mid-level',
          start: {
            year: 2014,
            month: 12,
          },
          title: 'Sr. SEC Reporting Manger',
          location: 'Santa Clara',
          description:
            'Drove SEC filings (10K,10K/A,10Q, Press Release, Form SD), Non-GAAP Sr. SEC Reporting Manger balances and CFO scripts on earnings call. Managed equity roll-forward, EPS calculation and cash flow. Managed third-party XBRL professionals and reviewed their work. Coordinate the review of SEC filings with auditors, legal department and audit committee. Performed technical accounting research on significant contracts and prepared memos on various topics, including goodwill/long-lived asset impairment, software license expense capitalization, lease, acquisition, restructuring, functional currencies, etc. Revenue. Led monthly and quarterly close. Analyzed revenue with bundled deals. Drove BESP/VSOE analysis. Manage revenue recognition of professional services projects. Optimize revenue recognition process and tools. Reviewed significant revenue contracts, performed related technical accounting analysis and prepared related memos. Research on ASC 606 new revenue guidance for the accounting impact. Reviewed stock-based compensation expenses calculation related to stock option, RSUs, PSUs, ESPP, and related footnote disclosure in 10K and 10Q. Performed fair value analysis of stock options and researched on stock units with performance conditions. Researched the new accounting standard and assessed the accounting impact. Consulted with AR/AP/GL accounting staff, FPA staff, R&D engineers, external and internal auditors regarding various accounting issues. Familiar with SAP and Oracle System. Managed Revenue and SEC filing related controls and led revenue and reporting team.',
        },
        {
          end: {
            year: 2014,
            month: 12,
          },
          org: 'KPMG, LLP',
          level: 'Mid-level',
          start: {
            year: 2014,
            month: 7,
          },
          title: 'Audit Manager, CPA',
          location: 'Santa Clara',
          description: '',
        },
        {
          end: {
            year: 2014,
            month: 6,
          },
          org: 'KPMG, LLP',
          level: 'Mid-level',
          start: {
            year: 2011,
            month: 7,
          },
          title: 'Senior Audit Associate, CPA',
          location: 'Santa Clara',
          description: '',
        },
        {
          end: {
            year: 2011,
            month: 6,
          },
          org: 'KPMG, LLP',
          level: 'Associate-level',
          start: {
            year: 2009,
            month: 11,
          },
          title: 'Audit Associate, CPA',
          location: 'Seattle',
          description: '',
        },
      ],
      certificates: [],
    },
    resume_text:
      'JIAYUE (JOY) LIU, CPA, MA, UC Berkeley MBA Mobile:  339-3058 Email: joyliu00@hotmail.com EMPLOYMENT AESC March 2023 – Present US Controller & Global Accounting Director • Responsible for US entities financial statements and accounting operation • Managed global monthly, quarterly and annual close process • Responsible for global consolidated financial statements, Intercompany transactions and FX translations. • Manage external audit (PCAOB standard) and reviews. • Responsible for establishing and executing global accounting policies and • technical accounting for significant transactions Improve and streamline financial system and accounting process for US entities • Update and improve internal controls accounting process • Manage claims of 45X tax credits • Manage external tax consultants to complete tax provision and tax return Tesla, Inc. Aug. 2018 – March 2023 Sr. Manager of Revenue Accounting • Built up energy revenue recognition operational process from scratch • Guided IT team to build the logic to automate energy revenue from scratch Implemented and improved operational process and system functionality to • continually optimizing accounting process associated with revenue and relevant asset and liability accounts • Managed monthly and quarterly close of revenue and performed financial analysis and SOX controls • Provided accounting opinions to finance, business, legal and sales team for effective and efficient decision making for business strategy and structure of large and complex deals per ASC 606, including elements such as hardware, software, SAAS, services, etc. • Reviewed significant contracts to ensure correct accounting treatment per ASC 606 • Partnered with FPA team to build revenue forecast model and analyze reasonableness of revenue and profit margin • Provided revenue related data to SEC reporting team and other business teams • Collaborated with regional teams (APAC and EMEA) to ensure the global consistency of accounting process and policy • Supported external and internal auditors to complete the audit timely and efficiently Oct. 2016 – Aug. 2018 • SEC filings (10K,10Q, Press Release, Form 424(b)) Technical Accounting Lead • Managed equity roll-forward and footnote/MDA disclosure • Managed third-party XBRL professionals and reviewed their work • Coordinated the review of SEC filings with auditors, legal department, investor relations and internal reviewers • Led new revenue guidance (ASC 606) and new lease guidance (ASC 842) accounting assessment and implementation • Partnered with FPA to build up P&L, B&S and Cash flow forecast • Performed technical accounting research over significant transactions and prepared memos on various topics, including revenue recognition (longterm contract, multiple elements arrangements, extended warranty and BESP set- up), fund accounting (variable interest entity consolidation and tax equity fund), stock-based compensation, convertible notes/bond, manufacturing related accounting, going concern, goodwill/long-lived asset impairment, software license expense capitalization, lease (sales-lease back, embedded lease, collateralized borrowing lease, power purchase lease related to solar business), acquisition, etc. • Coordinated with external auditors to manage the accounting treatment audit • Communicated with CFO/corporate controller (present accounting impact on B/S, I/S, and C/F), operational accounting (assist on figuring out accounting treatment and related journal entries for complex accounting treatments), sales/legal (assist on deal negotiation and contract drafting), and FPA (assist on models build-ups) for significant accounting treatments, SEC filing disclosures or accounting policies Ruckus Wireless (Acquired by Brocade in 2016) Aug. 2015 – Oct. 2016 Revenue and Reporting Manger Audience, Inc. (Acquired by Knowles in 2015) Dec. 2014 – Aug. 2015 • Drove SEC filings (10K,10K/A,10Q, Press Release, Form SD), Non-GAAP Sr. SEC Reporting Manger balances and CFO scripts on earnings call • Managed equity roll-forward, EPS calculation and cash flow • Managed third-party XBRL professionals and reviewed their work • Coordinate the review of SEC filings with auditors, legal department and audit committee • Performed technical accounting research on significant contracts and prepared memos on various topics, including goodwill/long-lived asset impairment, software license expense capitalization, lease, acquisition, restructuring, functional currencies, etc. • Revenue • Led monthly and quarterly close • Analyzed revenue with bundled deals • Drove BESP/VSOE analysis • Manage revenue recognition of professional services projects • Optimize revenue recognition process and tools • Reviewed significant revenue contracts, performed related technical accounting analysis and prepared related memos • Research on ASC 606 new revenue guidance for the accounting impact • Reviewed stock-based compensation expenses calculation related to stock option, RSUs, PSUs, ESPP, and related footnote disclosure in 10K and 10Q • Performed fair value analysis of stock options and researched on stock units with performance conditions • Researched the new accounting standard and assessed the accounting impact • Consulted with AR/AP/GL accounting staff, FPA staff, R&D engineers, external and internal auditors regarding various accounting issues. • Familiar with SAP and Oracle System • Managed Revenue and SEC filing related controls and led revenue and reporting team KPMG, LLP July 2014 – Dec. 2014 Audit Manager, CPA, Santa Clara July 2011 – June 2014 Senior Audit Associate, CPA, Santa Clara Nov. 2009 – June 2011 Audit Associate, CPA, Seattle • Performed audit procedures in the following accounting areas: • Purchasing accounting/Business combination (ASC 718) • Accounts Receivable and Allowance (ASC 310) Inventory and Impairment (ARB 43) • • Fixed Assets and Depreciation (ASC 360) • Accounts Payable/Accrued Expense/Debt (ASC 470) • Revenue/Deferred revenue Recognition (ASC 605) • Stock-Based Compensation (FAS123R/ASC 718) • Foreign currency hedging • Financial Statement Consolidation • EPS calculation • SOX/Internal Controls • Conversion from US GAAP to IFRS • ASC 605, SOP 97-2, SAB 101 and 104, ASU 2009-13 and other accounting standards relating to multiple elements and software and services revenue recognition • Engaged in IPO audit and successfully issued S-1 form with SEC • Reviewed SEC 10Q/10K/S-1 Forms • Communicated with client, engagement partner, and other team members effectively to organize the audit project • Prepared and reviewed audit planning, monitored audit status, prioritized audit tasks, coordinated the audit workpaper review process, and met the deadline of audit report issuance • Supervised and mentored more than 30 Audit Sr. Associates, Associates and Interns on various Engagements and provide performance review feedback EDUCATION • MBA Candidate, UC Berkeley Haas Business School, Aug 2022 to Present • Master of Accounting, Washington State University, Aug. 2007 to Aug. 2009; • Bachelor of Accounting, Renmin University of China, Sep. 2001 to July 2005; • Licensed CPA, since 2010 IT SYSTEM • SAP, Group Reporting, Microsoft AX, Oracle, NetSuite, Tesla WARP',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/92db8e76-e681-47e7-a25c-08cd5437b2b3.pdf',
  },
  {
    email: 'terri.dayal@gmail.com',
    avatar: null,
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    first_name: 'Terri-Lee C.',
    last_name: 'Dayal',
    linkedin: '',
    phone: '+16198071291',
    current_company: 'Rocksbox, Inc',
    timezone: null,
    current_job_title: 'Senior Level Player',
    resume_json: {
      basics: {
        email: 'terri.dayal@gmail.com',
        phone: '619.807.1291',
        social: [],
        lastName: 'Dayal',
        linkedIn: null,
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Terri-Lee',
        currentCompany: 'Rocksbox, Inc',
        currentJobTitle: 'Senior Level Player',
        totalExperienceInMonths: 163,
      },
      skills: [
        'SAP',
        'Workday',
        'NetSuite',
        'Namely',
        'Salesforce',
        'QuickBooks',
        'Zuora',
        'Zenefits',
        'Sage',
        'Abacus',
        'Looker',
        'Recurly',
        'Stripe',
        'Concur',
        'Intacct',
        'Bill.com',
        'Mineraltree',
        'Centricity',
        'Paylocity',
        'Expensify',
        'Gusto',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accounting',
          start: {
            year: null,
            month: null,
          },
          degree: 'Trained Chartered Certified Accountant',
          institution: 'UK',
        },
      ],
      overview:
        'Terri-Lee Dayal is a Senior Level Player at Rocksbox, Inc with expertise in SAP, Workday, and NetSuite.',
      projects: [],
      languages: [],
      positions: [
        {
          org: 'Rocksbox, Inc',
          title: 'Controller',
          location: 'San Francisco, CA',
          description:
            'First in-house hire for mid-stage e-commerce company with over $25M in revenues. Responsible for oversight of all facets of accounting operations and reporting activities for multiple companies. The company was acquired by Signet Jewelers (SIG) in 2021. Manages Tax, Treasury, Intercompany, Payroll, Eternal & Internal Audit. Works daily with FP&A, Legal, and HR Liasson for several business functions including Real Estate Lease Mgmt., Vendor Mgm.t, State Audits of various types and other Statutory Boards. Effectively oversees the Financial Operations of all departments. Support the Executive Team in develop long-term business plans Suggest budgets and processes based on the above information The ability to work with a 300-person accounting team as needed as well as a 40 person Banner Team',
        },
        {
          org: 'San Francisco Consulting and Outsourced Financial Services',
          title: 'Interim Controller (Assignments)',
          location: 'San Francisco, CA',
          description:
            'Responsible for oversight of all facets of accounting operations and reporting activities as assigned. Assignments have included Hims, PagerDuty, Figure-Eight Technologies, Autopilot. Direct overall financial operations. Deliver and create Management reporting Create and provide dashboard and performance metrics; streamline monthly and annual financial reporting. Early-stage e-commerce companies with Revenues from $15M - $60M in revenues and multiple stages of funding up to $197M. Responsible for oversight of all facets of accounting operations and reporting activities for multiple companies.',
        },
        {
          org: 'Headspace',
          title: 'Controller',
          location: 'Santa Monica, CA & London UK',
          description:
            'Responsible for oversight of all facets of accounting operations and reporting activities at a hyper growth startup - including the monthly close cycle, internal and external financial reporting, internal control and policy development. Led all day-to-day accounting operations of two entities. Day-to-day responsibilities overseeing accounting, accounts payable, accounts receivable, payroll, The Works closely with circles heads, Partner with senior leadership, and the human resources (HR) and information technology (IT) staff to enhance and better integrate finance, HR, and IT functions. Involved in Series A and Series B Funding rounds. Ensure consolidation and preparation of financial statements (B/S, P/L, C/F) in accordance with company polices and US GAAP. Experienced with Multi Currencies.',
        },
        {
          org: 'Nashville Shores',
          title: 'Controller',
          location: 'Nashville, TN',
          description:
            'Responsible for the leadership and coordination of the Park’s Financial Reporting, Budgets and Planning. Supervises the day-to-day activities of Accounting and Finance functions. Oversees Cash Operations during the peak season. Reported to the corporate office. Manages Multiple Revenue Streams, and multiple Park Reporting. Member of the Park Management Team. Responsible for Accounting policy and procedure.',
        },
        {
          org: 'Graham Woods Group',
          title: 'Controller',
          location: 'Chicago, IK',
          description:
            "Responsible for the leadership and coordination of the Group's Financial Reporting, Budgets and Planning. Supervises the day-to-day activities of Accounting and Administration functions. Liaised patwith company investors, banks and auditors. Oversees HR benefit plans and administration functions for multiple entities with multiple locations in several states. Contract Mgmt with Best Buy and Walmart in multiple states.",
        },
        {
          org: 'SKINIT INC.',
          title: 'Assistant Controller',
          location: 'San Diego, CA',
          description:
            'Provide daily leadership to the San Diego accounting team in the timely preparation and presentation of corporate financial information for a privately held company with revenues over $ 35 million. Assist the FP&A team in Treasury Management and Variance Analysis reporting. Perform monthly consolidation of Financial Statements with the International subsidiary. Maintain key relationships with internal and external parties, including bankers, vendors, and customers, department leaders, and executive team. Lead on Financial audits.',
        },
        {
          org: 'NIRVANIX, INC.',
          title: 'Senior Accountant',
          location: 'San Diego, CA',
          description:
            'Managed all accounting functions for an early to mid-stage start-up Company. Reviewed and prepared monthly journal entries and quarterly general ledger account reconciliations. Coordinated year-end audits conducted by external auditors. Assisted the CFO in creation of department budgets.',
        },
      ],
      certificates: [],
    },
    resume_text:
      "Terri-Lee C. Dayal FCCA LinkedInProfile 1960 Bush St, San Francisco CA terri.dayal@gmail.com|619.807.1291 Effective and Efficient Senior Level Player with unique & extensive experience in Early Stage to Pre-IPO Start-ups; as well as Public Accounting Roll-ups. Able to articulate complex financial information as needed to Finance & Non- Finance Professionals. This includes presenting reports, explaining the implications of financial decisions and providing Technical Accounting guidance to the Executive & Leadership Teams. SOFTWARE|PLATFORMS SAP| Workday |NetSuite|| Namely | Salesforce | QuickBooks| | Zuora| Zenefits Sage|Abacus|Looker|Recurly|Stripe|Concur|Intacct|Bill.com|Mineraltree|Centricity| Paylocity|Expensify|Gusto Demonstrated ability to source, learn, and modify complex financial systems and multi- dimensional reporting tools efficiently and effectively. Actively seeks out process improvement and automation opportunities. EMPLOYMENT EXPERIENCE Rocksbox, Inc – San Francisco, CA Jewelry Subscription & Merchandise Sales JOctober 2018 - Present. Rocksbox, Inc – San Francisco, CA Jewelry Subscription & Merchandise Sales JOctober 2018 - Present. Controller First in-house hire for mid-stage e-commerce company with over $25M in revenues. Responsible for oversight of all facets of accounting operations and reporting activities for multiple companies. The company was acquired by Signet Jewelers (SIG) in 2021. Manages Tax, Treasury, Intercompany, Payroll, Eternal & Internal Audit. Works daily with FP&A, Legal, and HR Liasson for several business functions including Real Estate Lease Mgmt., Vendor Mgm.t, State Audits of various types and other Statutory Boards. Effectively oversees the Financial Operations of all departments. Support the Executive Team in develop long-term business plans Suggest budgets and processes based on the above information The ability to work with a 300-person accounting team as needed as well as a 40 person Banner Team Interim Controller (Assignments) San Francisco Consulting and Outsourced Financial Services Jan 2018 – Oct 2018. Interim Controller (Assignments) San Francisco Consulting and Outsourced Financial Services Jan 2018 – Oct 2018. Responsible for oversight of all facets of accounting operations and reporting activities as assigned. Assignments have included Hims, PagerDuty, Figure-Eight Technologies, Autopilot. Direct overall financial operations. Deliver and create Management reporting Create and provide dashboard and performance metrics; streamline monthly and annual financial reporting. Early-stage e-commerce companies with Revenues from $15M - $60M in revenues and multiple stages of funding up to $197M. Responsible for oversight of all facets of accounting operations and reporting activities for multiple companies. Headspace– Santa Monica, CA & London UK Health & Wellness | 50 – 200 Employees. January 2015 – December 2017. Headspace– Santa Monica, CA & London UK Health & Wellness | 50 – 200 Employees. January 2015 – December 2017. Controller Responsible for oversight of all facets of accounting operations and reporting activities at a hyper growth startup - including the monthly close cycle, internal and external financial reporting, internal control and policy development. Led all day-to-day accounting operations of two entities. Day-to-day responsibilities overseeing accounting, accounts payable, accounts receivable, payroll, The Works closely with circles heads, Partner with senior leadership, and the human resources (HR) and information technology (IT) staff to enhance and better integrate finance, HR, and IT functions. Involved in Series A and Series B Funding rounds. Ensure consolidation and preparation of financial statements (B/S, P/L, C/F) in accordance with company polices and US GAAP. Experienced with Multi Currencies. Nashville Shores – Nashville, TN Entertainment |Privately held|200 employees August 2013 – January 2015 Nashville Shores – Nashville, TN Entertainment |Privately held|200 employees August 2013 – January 2015 Controller Responsible for the leadership and coordination of the Park’s Financial Reporting, Budgets and Planning. Supervises the day-to-day activities of Accounting and Finance functions. Oversees Cash Operations during the peak season. Reported to the corporate office. Manages Multiple Revenue Streams, and multiple Park Reporting. Member of the Park Management Team. Responsible for Accounting policy and procedure. Graham Woods Group – Chicago, IK Logistics & Trucking |Privately held|75 employees ASept 2012 – August 2013 Graham Woods Group – Chicago, IK Logistics & Trucking |Privately held|75 employees ASept 2012 – August 2013 Controller Responsible for the leadership and coordination of the Group's Financial Reporting, Budgets and Planning. Supervises the day-to-day activities of Accounting and Administration functions. Liaised patwith company investors, banks and auditors. Oversees HR benefit plans and administration functions for multiple entities with multiple locations in several states. Contract Mgmt with Best Buy and Walmart in multiple states. SKINIT INC. – San Diego, CA 2008-July 2012 The industry leader in consumer personalization for electronic devices. E-Commerce| Consumer Goods |Privately held|50-200 employees SKINIT INC. – San Diego, CA 2008-July 2012 The industry leader in consumer personalization for electronic devices. E-Commerce| Consumer Goods |Privately held|50-200 employees Assistant Controller (promoted from Accounting Manager Dec 2010) Provide daily leadership to the San Diego accounting team in the timely preparation and presentation of corporate financial information for a privately held company with revenues over $ 35 million. Assist the FP&A team in Treasury Management and Variance Analysis reporting. Perform monthly consolidation of Financial Statements with the International subsidiary. Maintain key relationships with internal and external parties, including bankers, vendors, and customers, department leaders, and executive team. Lead on Financial audits. NIRVANIX, INC. – San Diego, CA 2005 - 2008 Enterprise cloud storage market| Information Technology & Services Industry |Privately held|11-50 employees NIRVANIX, INC. – San Diego, CA 2005 - 2008 Enterprise cloud storage market| Information Technology & Services Industry |Privately held|11-50 employeesSenior Accountant Managed all accounting functions for an early to mid-stage start-up Company. Reviewed and prepared monthly journal entries and quarterly general ledger account reconciliations. Coordinated year-end audits conducted by external auditors. Assisted the CFO in creation of department budgets. EDUCATION UK Trained Chartered Certified Accountant FCCA",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/ec39613c-1b66-4234-93eb-97250373a27c.docx',
  },
  {
    email: 'cgrosjean1@outlook.com',
    avatar: null,
    city: 'Los Gatos',
    state: 'California',
    country: 'United States',
    first_name: 'Claire',
    last_name: 'Grosjean',
    linkedin: 'http://linkedin.com/in/claire-grosjean1',
    phone: '+14085082549',
    current_company: 'Technology Credit Union',
    timezone: null,
    current_job_title: 'SENIOR FINANCE & OPERATIONS EXECUTIVE',
    resume_json: {
      basics: {
        email: '408.508.CGrosjean1@Outlook.com',
        phone: null,
        social: [],
        lastName: 'GROSJEAN',
        linkedIn: 'linkedin.com/in/claire-grosjean1',
        location: {
          city: 'Los Gatos',
          state: 'CA',
          country: '',
        },
        firstName: 'CLAIRE',
        currentCompany: 'Technology Credit Union',
        currentJobTitle: 'SENIOR FINANCE & OPERATIONS EXECUTIVE',
        totalExperienceInMonths: null,
      },
      skills: [
        'Financial Management',
        'Strategic Planning',
        'Operational Planning',
        'Intelligent Automation',
        'RPA',
        'Corporate Strategy',
        'Financial Reporting',
        'Asset-Liability Management',
        'FP&A',
        'Risk Mitigation',
        'Process Optimization',
        'Agile Methodology',
        'Waterfall Methodology',
        'Cross-Functional Collaboration',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Finance',
          start: {
            year: null,
            month: null,
          },
          degree: 'Master of Business Administration (MBA)',
          institution: 'CALIFORNIA STATE UNIVERSITY EAST BAY',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Business',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Science, Business – Accounting (DESCF)',
          institution: 'LYCÉE OF SEVRES',
        },
      ],
      overview:
        'Claire Grosjean is a Senior Finance & Operations Executive at Technology Credit Union with expertise in Strategic Planning, Financial Management, and Process Optimization.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'Technology Credit Union',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 9,
          },
          title: 'SENIOR DIRECTOR, BUSINESS PROCESS MANAGEMENT',
          location: 'San Jose, CA',
          description:
            'Multi-faceted role under the COO that includes leading the strategic planning enterprise-wide, managing Senior Business Analysts working on complex projects and programs, and leading initiatives to streamline and automate processes leveraging intelligent automation tools.',
        },
        {
          end: {
            year: 2023,
            month: 6,
          },
          org: 'Silicon Valley Bank',
          level: 'Executive-level',
          start: {
            year: 2005,
            month: null,
          },
          title: 'MANAGING DIRECTOR – GLOBAL OPERATIONS & SERVICING',
          location: 'Santa Clara, CA',
          description:
            'Expanded role under Head of Global Operations, with added responsibilities for process improvement and change management teams, bringing team to up to 20 members. Drove significant cross-functional initiatives, collaborating closely with credit and other departments to meet critical deadlines and achieve shared objectives.',
        },
      ],
      certificates: [
        'Lean Six Sigma Green Belt',
        'Kanban System Design Certification',
        'UI Path Business Analyst Foundation Training Certificate',
        'Certified Public Accountant (Inactive), State of California',
      ],
    },
    resume_text:
      "CLAIRE GROSJEAN Los Gatos, CA | 408.508.CGrosjean1@Outlook.com | LinkedIn SENIOR FINANCE & OPERATIONS EXECUTIVE Financial Management & Transformation, High-Growth Tech Environments Strategic Vision & Operational Planning ▪ Intelligent Automation & RPA ▪ Corporate Strategy & Development Innovative Global Finance Executive with expertise in FP&A, financial reporting, and asset-liability management. Excels in strategic project management, risk mitigation, and process optimization across global settings. Skilled at leading diverse teams, with commitment to nurturing talent using goal-oriented approach, empowering team members to realize and exceed their potential. Fosters cross- functional collaboration and adept in Agile and Waterfall methodologies. Dual US & French citizen; fluent in French. Driving Innovation and Efficiency in High-Tech & Financial Services Strategic Financial Leadership → Currently lead the strategic planning company-wide. Oversaw Accounting, FP&A and Financial Reporting for small and publicly traded companies. Led major modernization for SVB, supporting growth from $5B to over $200B in assets. Generated $30M+ in annual value realization, achieving substantial cost savings and revenue enhancements. Process Automation & Efficiency → Streamlined financial close cycle from 11 to 5 days, enhancing agility in financial operations; spearheaded deployment of over 50 RPA bots for heightened productivity, advancing automation initiatives, led many systems implementations. Cross-Functional Collaboration → Recognized for excellent people management, developing and motivating, multi-disciplinary teams while fostering inclusive culture. Steered pivotal projects such as implementation of cross-departmental process optimization and Automation initiatives leveraging JIRA. Areas of Expertise: Strategic Planning | Budget & Forecast | Financial Planning & Analysis | Financial Reporting & auditing | Profitability | Regulatory Compliance & Risk Management | Digital Transformation Initiatives | Intelligent Automation Implementations| Cross-Functional Leadership | Stakeholder Engagement | Corporate Development Execution | Continuous Process Improvements PROFESSIONAL EXPERIENCE Technology Credit Union | San Jose, CA Member-focused Bay Area financial institution known for its commitment to technology-driven banking solutions. SENIOR DIRECTOR, BUSINESS PROCESS MANAGEMENT Multi-faceted role under the COO that includes leading the strategic planning enterprise-wide, managing Senior Business Analysts working on complex projects and programs, and leading initiatives to streamline and automate processes leveraging intelligent automation tools. Sep 2023 – Present ● Lead the strategic planning process leveraging OKRs and KPIs to focus and align on the top strategic initiatives. ● Manage the work of 4 Senior Business & Process Analysts currently supporting the development of a new digital banking platform as well as geographic expansion. ● Lead enterprise-wide business process management and continuous improvement initiatives including defining a process inventory using APQC methodology and best-practice process management. ● Actively exploring and evaluating additional intelligent automation solutions such as Intelligent Document Processing and Agent AI tools. ● Spearhead a strategy for knowledge management at TechCU to enable the right information to be available to the right person at the right time. ● My team has delivered process improvement initiatives leveraging Appian and DocuSign adding up to annual cost savings of over $1M to-date and looking to realize another $1.5M in cost savings over the next 12 months. Voice of the Customer in the Automation Landscape (VOCAL) Council 2022-Present Peer powered global community of decision makers and users of Automation technologies including RPA, Intelligent Automation, Machine Learning, Natural Language Processing, Process Mining, Intelligent Document Processing, Artificial Intelligence and more. Active participant and speaker at various events such as Intelligent Automation week and IA Select presented by SSON. 408.508.CGrosjean1@Outlook.com | linkedin.com/in/claire-grosjean1 Silicon Valley Bank | Santa Clara, CA – Became division of First Citizens Bank as of March 27, 2023 Financial partner for innovative tech and startup sector. Grew from 1,000 to 8,500 employees over tenure MANAGING DIRECTOR – GLOBAL OPERATIONS & SERVICING Expanded role under Head of Global Operations, with added responsibilities for process improvement and change management teams, bringing team to up to 20 members. Drove significant cross-functional initiatives, collaborating closely with credit and other departments to meet critical deadlines and achieve shared objectives. 2005 – June 2023 (2021 – 2023) ● Spearheaded initiatives that resulted in $10M in perpetual savings from process optimization, contributing to profitable growth where every $3 of additional revenue added only $1 in expenses. ● Led 3 diverse teams with 6 direct reports, workforce management, program managers, change practitioners, and product managers. Teams focused on intelligent process automation, process mining, and enterprise content management tools leveraging Automation Anywhere, Appian, OpenText suite, and Celonis. ● Achieved reduction in financial close cycle from 11 days to 5 days, enhancing operational efficiency and freeing resources for more value-add transactions. ● Recognized for exceeding personal KPIs of $5M annual value realization and reducing operations and credit close cycle time from 4 days to 1 day; reduced efficiency ratio (expenses/revenues) by 2%. ● Delivered over $30M in combined annual value realization (2021, 2022, and 1H2023) through cost avoidance, cost savings, and additional revenues, significantly impacting bottom line. ● Assumed additional oversight of contact center workforce management, enhancing scalability and efficiency of client service. ● Celebrated team successes in implementing initiatives on time, within scope and budget, and fostered positive work environment that improved employee retention by 5 points. SENIOR DIRECTOR, PROCESS ENABLEMENT – ENTERPRISE PROCESS MANAGEMENT (March 2020 – March 2021) Transitioned to operations in this role, reporting to Head of Enterprise Process Management. Collaborated extensively with risk management team, supported risk control assessments and control remediations. ● Led implementation of additional RPA bots and integration of Intelligent Automation tools like OpenText (Documentum and Magellan AI Text Mining). Fostered more robust partnership with technology team, enhancing cross collaboration. DIRECTOR, PROCESS AUTOMATION – FINANCE TRANSFORMATION OFFICE (March 2018 – March 2020) Provided company-wide leadership in business process improvement and low-code automation. Actively involved in cross- functional initiatives like CECL (current expected credit loss), financial close optimization, and credit risk ratings adjustment. ● Collaborated with leaders across service operations, product management, solution architecture, data, and technology to drive ● comprehensive operations-focused roadmap supporting large-scale initiatives and meeting evolving company needs. Implemented 25+ digital workers (RPA bots) in finance, risk, and credit admin, saving over 50,000 hours annually in manual labor. DIRECTOR, PROGRAM MANAGEMENT – FINANCE (April 2013 – March 2018) Reported to Chief Accounting Officer during critical growth phase as bank approached $60B asset mark, requiring alignment with heightened regulatory demands and system enhancements. Managed outsourced accounting functions to Accenture in Chennai, India, overseeing evolution of relationship and ensuring efficiency and effectiveness of outsourced operations. ● Oversaw finance automation initiatives under directive of CFO, focusing on implementation of robotics process automation (RPA), setting bank on a path of technological elevation and operational efficiency. ● Managed corporate finance planning roadmap, leading teams of process engineers and technical writers. Responsible for selection, implementation, and ongoing support of 26 finance systems. ● Led expansion of offshore team, growing from 8 members in 2009 to over 80 by 2018, along with management of 2 managers in California and Arizona, demonstrating effective leadership in diverse and evolving team environment. CORPORATE CONTROLLER – FINANCE (August 2005 – April 2013) Directed team of 25 finance professionals, ensuring accurate and timely preparation of quarterly and annual financial statements in accordance with US GAAP, covering SVB FG (Holding Co.) and over 40 subsidiaries during period of transformation and modernization of financial systems to support bank's rapid growth, starting from $5B in assets, and workforce expansion to 2,500 employees. ● Developed and implemented first set of SOX (Section 404) controls for SVB, enhancing financial integrity across operations. ● Worked cross-functionally during transition to scalable financial solutions, including new general ledger platform and Coupa procure-to-pay system for enhanced process efficiency, ensuring all entries into general ledger were complete and accurate. ● Honored with “Biggerstaff” award for exemplifying SVB's guiding principles through exceptional leadership, client focus, and outstanding performance. 408.508.CGrosjean1@Outlook.com | linkedin.com/in/claire-grosjean1 ADDITIONAL EXPERIENCE Vice President, Finance | Assistant VP | Treasury Manager, Meriwest Credit Union, San Jose, CA (1998-2005) Led Accounting, Treasury, and FP&A for $1B credit union, maintaining financial integrity and driving asset and member growth. Key accomplishments include overseeing annual budget of $50M, managing investment portfolios during varying interest rate cycles, and implementing strategic financial practices that enhanced profitability and operational efficiency. CFO-Partner (part-time), IDB Consulting, Mountain View, CA (1998-2008) Developed financial statements and consolidation with French parent company and launched specialized offering, 'MyCFO' services. Accounting Manager | Senior Financial Analyst, Pacific IBM FCU, San Jose, CA (1993-1998) Managed liquidity, ALM, and investment portfolio. BOARD LEADERSHIP Governing Board Member, Pacific Collegiate School, Santa Cruz, CA 2019 – 2023 President (2022 – 2023) | Vice President (2021 – 2022) | Treasurer (2019 – 2021) Led board initiative for one of the top public charter schools in the nation, co-founded by Netflix CEO, Reed Hastings Secured key PPP funds during pandemic and negotiated contracts during financial challenges EDUCATION & PROFESSIONAL DEVELOPMENT Master of Business Administration (MBA), Finance CALIFORNIA STATE UNIVERSITY EAST BAY, HAYWARD, CA Bachelor of Science, Business – Accounting (DESCF) LYCÉE OF SEVRES, PARIS, FRANCE Lean Six Sigma Green Belt, Aveta Business Institute Kanban System Design Certification, Kanban University UI Path Business Analyst Foundation Training Certificate, UI Path Academy Certified Public Accountant (Inactive), State of California 408.508.CGrosjean1@Outlook.com | linkedin.com/in/claire-grosjean1",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/0eeae879-ef87-4863-8097-e400fa0e6518.pdf',
  },
  {
    email: 'jyotanwar@gmail.com',
    avatar: null,
    city: 'Fair Oaks',
    state: 'California',
    country: 'United States',
    first_name: 'Jyoti',
    last_name: 'Tanwar',
    linkedin: '',
    phone: '+12086079139',
    current_company: 'Sacramento Waldorf School',
    timezone: null,
    current_job_title: 'Financial Controller',
    resume_json: {
      basics: {
        email: 'jyotanwar@gmail.com',
        phone: null,
        social: [],
        lastName: 'TANWAR',
        linkedIn: null,
        location: {
          city: 'Fair Oaks',
          state: 'California',
          country: 'USA',
        },
        firstName: 'JYOTI',
        currentCompany: 'Sacramento Waldorf School',
        currentJobTitle: 'Financial Controller',
        totalExperienceInMonths: 112,
      },
      skills: [
        'M&A Due Diligence',
        'Advanced Financial Modeling',
        'Variance Analysis',
        'Cost Analysis & Control',
        'Process & System Improvement',
        'Proficient in Microsoft 365',
        'Budgeting & Cash Management',
        'Scenario Analysis',
        'Advance Excel & ERP system',
        'Financial Reporting & Analysis',
        'US GAAP & IFRS Compliance',
        'Team Leadership',
        'Data Visualization and Dashboard Creation',
        'ERP and Financial Systems Proficiency',
        'Certifications',
      ],
      schools: [
        {
          end: {
            year: 2021,
            month: 12,
          },
          gpa: 10,
          field: 'Finance and Banking',
          start: {
            year: 2017,
            month: 1,
          },
          degree: 'Doctorate',
          institution: 'BITS Pilani',
        },
        {
          end: {
            year: 2017,
            month: 1,
          },
          gpa: 8.5,
          field: 'International Business',
          start: {
            year: 2010,
            month: 6,
          },
          degree: 'MBA',
          institution: 'ICFAI SIKKIM',
        },
        {
          end: {
            year: 2010,
            month: 5,
          },
          gpa: null,
          field: 'Finance and Commerce',
          start: {
            year: 2006,
            month: 7,
          },
          degree: 'Bachelor Of Commerce',
          institution: 'Delhi University',
        },
        {
          end: {
            year: 2015,
            month: 5,
          },
          gpa: null,
          field: null,
          start: {
            year: 2006,
            month: 8,
          },
          degree: 'Chartered Accountancy',
          institution: 'ICAI',
        },
      ],
      overview:
        'JYOTI TANWAR is a Financial Controller at Sacramento Waldorf School with expertise in M&A Due Diligence, Advanced Financial Modeling, and Cost Analysis & Control.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'Sacramento Waldorf School',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 11,
          },
          title: 'Financial Controller | Director of Finance & Accounting',
          location: 'Fair Oaks, California, USA',
          description:
            'Transformed the school’s finances from a three-year deficit to a cash flow positive position by implementing cost-saving initiatives and generating new revenue streams, reducing budget deficits. Establishes procedures sufficient to assure compliance with financial laws, regulations, and requirements and to assure adherence to generally accepted accounting principles (GAAP) and standard business practices. Advises the Board Members and administrators regarding management of financial resources. Engages in plan-year financial planning for the operating budget and assists in preparation of multi-year facilities plans. Engage in developing cost-benefit model for class expansion, early childhood expansion and predictive modeling of enrollment. Working proactively towards cost reduction and revenue enhancement for sustainable growth of the school. Maintain and submit financial reports required by federal, state, and local governmental entities. Provide oversight of the general ledger, subsidiary ledgers, and accounting systems ensuring compliance with appropriate GAAP standards and regulatory requirements. Maintain adequate internal control and safeguards for receipt of various sources of income, operating costs, capital expenditures, as well as detailed budget to actual reporting. Coordinate with the independent auditors in successful completion of the audit without significant deficiencies or material weaknesses. Provide frequent financial analysis with interpretation to accompany the financial reports in an accurate and timely manner for the Board of members and Finance committee. Provide clear explanation for budget variances on monthly, quarterly, and annual financial statements; monitor progress and changes and keep Board of members and finance committee updated on financial status. Provide cash flow monitoring and analysis to ensure compliance with Board cash balance threshold, forecasting, and trend analysis. Work on annual budgeting and planning process; administer and review all financial plans and compare to actual results with a view to identify, explain, and correct variances as appropriate. Improving the AR collection process of the school to help reduce bad debts and bad practices which resulted in a 50% improvement in AR collection. Engaging in equitable salary and wage for teachers and staff based on cost of living and other parameters. Oversee the financial reporting by project, program, and grants; ensure that expenditures are correctly aligned with grant and program budgets throughout the grant periods; assist with compiling financial compliance reports for government, corporate, and foundation grants. Ensure the ASWNA accreditation team receives the desired documents and work proactively towards improving financing reporting to ensure a healthy and transparent financial system. Monitor the performance of million plus investments ensuring compliance with investment committee policies and guidelines. Maintain system of internal controls in line with GAAP and monitoring internal policies and procedures to ensure compliance with regulatory agencies and perform in the completion and filing of the IRS Form 990s. Monitoring compliance with local/state/federal government reporting and tax filing requirements As head of tuition assistance committee determine the tuition assistance granted to students based on their family’s financial status. Leading and managing the finance, accounting, payroll, and administrative teams to ensure efficient and accurate financial operations.',
        },
        {
          end: {
            year: 2023,
            month: 10,
          },
          org: 'CGT Global',
          level: 'Senior-level',
          start: {
            year: 2022,
            month: 1,
          },
          title: 'Financial Controller',
          location: 'Folsom, California, USA',
          description:
            "Spearheaded the annual and quarterly financial forecasting processes, ensuring accuracy and timely delivery thereby fortifying the company’s strategic financial roadmap. Developed and sustained advanced financial models to accurately project future revenues, costs, and profits, aiding in robust financial planning. Analyzed critical KPI trends in revenue and costs, generating key board reports that catalyzed strategic decisions and corporate initiatives. Partnered with executive leadership to define financial strategy, providing pivotal data and insights to support decision-making. Reviewed and analyzed corporate performance data to identify areas pinpointed areas for financial optimization, and successfully executed cost-reduction initiatives, resulting in a 20% savings. Led M&A activities with in-depth financial due diligence and post-acquisition integration analysis. Presented monthly and quarterly financial reports to C-suite executives, providing insights and recommendations for revenue growth and risk mitigation. Managed the preparation of annual budgets, forecasts, and cash flow projections. Managed company liquidity, ensuring optimal capital structure and maintaining relationships with financial institutions. Managed a cross-functional team of financial analysts, fostering a collaborative environment and continuous professional growth. Reporting CEO/VP of Finance of organization’s financial performance by providing monthly reporting of actuals vs. budget. Generated HR report using Power BI highlighting the employee turnover ratio, and headcount by the department that helped manage expenses within the budget. Provide support for finance efforts to increase efficiency and add value to business partners, including data mining and identifying, tracking, and reporting on KPIs. Monitored financial performance by measuring and analyzing results; initiated corrective actions; minimized the impact of variances by 30%. Directed and accelerated month-end closing process including journal entries, reconciliations, and variance analysis, significantly improving reporting timeliness and operational efficiency. Provided guidance on complex accounting matters such as revenue recognition, derivatives, leases. Oversaw accounts payable and receivable department to ensure accurate and timely payments and deposits. Oversaw the financial and accounting teams, ensuring timely financial reporting, budgeting, and forecasting. Prepared ad hoc analyses as requested by senior leadership, aiding in agile and informed decision-making. Implemented cutting-edge technologies to streamline financial operations, boosting data accuracy by 40% and fostering operational efficiency. Ensured compliance with GAAP principles in all transactions & reporting activities, enhancing accuracy by 20%. Maintained detailed records of all financial transactions, including accounts payable and receivable, budgeting, forecasting, payroll, and general ledger. Proven leadership in guiding and mentoring finance and accounting teams, with a focus on ensuring rigorous financial controls, process optimization, and driving excellence in execution. Monitored and evaluated performance of accounting and other financial staff. Managed intercompany account reconciliations, ensuring accurate financial reporting and tax implications. Developed and implemented financial policies and procedures to ensure effective internal control systems. Advised management on potential risks associated with certain business decisions or investments. Developed and maintained relationships with external auditors and advisors. Maintained current knowledge of organizational policies and procedures, federal and state policies, and directives, and current accounting standards. Developed policies and procedures for effective cash management practices. Conduct the process of inventory count every month and facilitate inventory audit annually. Automating manual efforts, including reports and dashboard, by using excel and Business Intelligence tools and driving process improvements across multiple functions and teams, resulting in substantial improvement in the company's productivity. Directed and accelerated month-end closing process including journal entries, reconciliations, and variance analysis slashing the cycle down from 10 days to 6 days, significantly improving reporting timeliness and operational efficiency.",
        },
        {
          end: {
            year: 2021,
            month: 12,
          },
          org: 'BITS Pilani',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 1,
          },
          title: 'Senior Researcher – Finance and Accounting',
          location: 'Pilani, India',
          description:
            "Improving the internal audit system of the university for better transparency and timely reporting of errors. Led detailed financial analyses, including variance, profitability, and ROI analyses, to support business decisions. Created advanced financial models to predict future revenues and expenses. Led the annual budgeting and forecasting processes, providing detailed financial analyses and recommendations. Conducted a comprehensive analysis of the university's cost framework, pinpointed areas for financial optimization, and successfully executed cost-reduction initiatives, resulting in a 20% savings. Contributed to shaping the organizational financial strategy by providing executive management with insightful risk assessments and pivotal financial data, aiding in informed decision-making and strategic planning. Conducted comprehensive analysis on financial trends and KPIs, identifying growth opportunities and risks. Conducted competitive analyses to benchmark university’s performance against industry standards. Analyzed large data using SQL, Tableau and BI tools to support executive business decision. Collaborated with cross-functional teams to determine financial forecasts and set performance benchmarks for projects to evaluate whether business decisions aligned with capital and resource allocation. Coordinated the preparation of regulatory reporting and ensured timely and accurate monthly and annual closings Reconciled intercompany accounts across multiple entities worldwide. Managed accounting operations, including Billing, A/R, A/P, and GL, Cost Accounting, and Revenue Recognition. Led internal audits for tax codes and regulatory compliance, ensuring all processes met regulatory standards. Evaluated existing accounting processes and procedures to identify areas for improvement.",
        },
        {
          end: {
            year: 2017,
            month: 1,
          },
          org: 'RNB Global University',
          level: 'Associate-level',
          start: {
            year: 2016,
            month: 4,
          },
          title: 'Assistant Professor- Finance',
          location: 'India',
          description:
            'Worked in the finance department of the university to create financial records, revenue forecasts, cost overheads and cost allocation under administrative duties. Managed day to day financial operations of the university. Oversee and monitor the planning, scheduling, and completion of the course curriculum like Financial Accounting, Cost and Managerial Accounting, Banking theory and practice, Insurance and Risk Management, Corporate Governance and Ethics, and Entrepreneurship. Providing academic support to the head of the Department of Geological Sciences Representing the department at international conferences and academic events. Conducting lectures and tutorials for undergraduate and graduate students',
        },
        {
          end: {
            year: 2016,
            month: 4,
          },
          org: 'Singhal Raghav & Co.',
          level: 'Associate-level',
          start: {
            year: 2015,
            month: 12,
          },
          title: 'Controller',
          location: null,
          description:
            "Conducted monthly variance analyses, generating actionable recommendations that drove productivity enhancements and elevated the company's operational efficiency by 20%. Led internal audits for tax codes and regulatory compliance, ensuring all processes met regulatory standards. Created and maintained documentation related to Sarbanes-Oxley Act compliance requirements. Researched accounting issues for compliance and maintained a system of controls over accounting transactions. Handled cash management and forecasting functions to facilitate financial operations. Monitored cash flow and reserve levels to meet legal and regulatory requirements. Analyzed data to identify trends and highlight areas of concern. Crafted and monitored budget alignments and variances, facilitating improved efficiency in the reporting processes, and crafted dynamic financial models for extensive valuation analysis. Spearheaded audit teams through statutory and concurrent audits of multinational entities and financial institutions, ensuring precise and insightful audit reporting to clients and senior management. Enhanced internal control systems, boosting operational effectiveness and efficiency within client businesses. Overseeing accounting team and working closely on preparation of financial statements.",
        },
        {
          end: {
            year: 2015,
            month: 6,
          },
          org: 'K N Gungutia & Co.',
          level: 'Fresher-level',
          start: {
            year: 2014,
            month: 12,
          },
          title: 'Finance and Audit Assistant',
          location: null,
          description:
            'Assisted senior accountants in preparing end-of-month reports and financial statements. Collaborated with the accounting team during tax season to gather, review, and compile documentation. Processed accounts payable and receivable, ensuring timely and accurate payment and invoicing. Continuously updated and maintained the financial database, ensuring data accuracy. Prepared accurate financial statements, including balance sheets, P&L statements, and cash flow statements. Assisted in internal audits, identifying discrepancies, and implementing corrective actions. Processed accounts payable and receivable, ensuring timely and accurate payment and invoicing. Managed payroll processing for over 50 employees, ensuring compliance with tax regulations. Conducted monthly bank reconciliations and maintained organized records of all financial transactions.',
        },
      ],
      certificates: [],
    },
    resume_text:
      "JYOTI TANWAR, Ph.D., MBA |  607 California, USA| jyotanwar@gmail.com CORE COMPETENCIES • M&A Due Diligence • Advanced Financial Modeling • Variance Analysis • Cost Analysis & Control • Process & System Improvement • Proficient in Microsoft 365 • Budgeting & Cash Management • Scenario Analysis • Advance Excel & ERP system • Financial Reporting & Analysis • US GAAP & IFRS Compliance • Team Leadership SKILLS AND CERTIFICATIONS • Data Visualization and Dashboard Creation: Skilled in developing intuitive financial dashboards using Tableau, Power BI, and Office 365, enhanced with SQL, to facilitate data-driven decision-making. • ERP and Financial Systems Proficiency: Extensive experience with SAGE Enterprise Intelligence, QuickBooks, and implementing ERP systems to streamline financial operations and reporting. • Certifications: Advance Excel, Business Analytics in Excel, Power BI, Tableau, Python, SQL, and Data Analytics EXPERIENCE Financial Controller | Director of Finance & Accounting | Sacramento Waldorf School, Fair Oaks, California, USA | Nov 2023 – Present • Transformed the school’s finances from a three-year deficit to a cash flow positive position by implementing cost-saving initiatives and generating new revenue streams, reducing budget deficits. • Establishes procedures sufficient to assure compliance with financial laws, regulations, and requirements and to assure adherence to generally accepted accounting principles (GAAP) and standard business practices. • Advises the Board Members and administrators regarding management of financial resources. • Engages in plan-year financial planning for the operating budget and assists in preparation of multi-year facilities plans. • Engage in developing cost-benefit model for class expansion, early childhood expansion and predictive modeling of enrollment. • Working proactively towards cost reduction and revenue enhancement for sustainable growth of the school. • Maintain and submit financial reports required by federal, state, and local governmental entities. • Provide oversight of the general ledger, subsidiary ledgers, and accounting systems ensuring compliance with appropriate GAAP standards and regulatory requirements. • Maintain adequate internal control and safeguards for receipt of various sources of income, operating costs, capital expenditures, as well as detailed budget to actual reporting. • Coordinate with the independent auditors in successful completion of the audit without significant deficiencies or material weaknesses. • Provide frequent financial analysis with interpretation to accompany the financial reports in an accurate and timely manner for the Board of members and Finance committee. • Provide clear explanation for budget variances on monthly, quarterly, and annual financial statements; monitor progress and changes and keep Board of members and finance committee updated on financial status. • Provide cash flow monitoring and analysis to ensure compliance with Board cash balance threshold, forecasting, and trend analysis. • Work on annual budgeting and planning process; administer and review all financial plans and compare to actual • results with a view to identify, explain, and correct variances as appropriate. Improving the AR collection process of the school to help reduce bad debts and bad practices which resulted in a 50% improvement in AR collection. • Engaging in equitable salary and wage for teachers and staff based on cost of living and other parameters. • Oversee the financial reporting by project, program, and grants; ensure that expenditures are correctly aligned with grant and program budgets throughout the grant periods; assist with compiling financial compliance reports for government, corporate, and foundation grants. • Ensure the ASWNA accreditation team receives the desired documents and work proactively towards improving financing reporting to ensure a healthy and transparent financial system. • Monitor the performance of million plus investments ensuring compliance with investment committee policies and guidelines. • Maintain system of internal controls in line with GAAP and monitoring internal policies and procedures to ensure compliance with regulatory agencies and perform in the completion and filing of the IRS Form 990s. • Monitoring compliance with local/state/federal government reporting and tax filing requirements • As head of tuition assistance committee determine the tuition assistance granted to students based on their family’s financial status. • Leading and managing the finance, accounting, payroll, and administrative teams to ensure efficient and accurate financial operations. Financial Controller | CGT Global, Folsom, California, USA | January 2022 – October 2023 CGT Global (previously known as StemExpress) is a leading Biotechnology Research Organization based in Folsom, CA • Spearheaded the annual and quarterly financial forecasting processes, ensuring accuracy and timely delivery thereby fortifying the company’s strategic financial roadmap. • Developed and sustained advanced financial models to accurately project future revenues, costs, and profits, aiding in robust financial planning. • Analyzed critical KPI trends in revenue and costs, generating key board reports that catalyzed strategic decisions and corporate initiatives. • Partnered with executive leadership to define financial strategy, providing pivotal data and insights to support decision-making. • Reviewed and analyzed corporate performance data to identify areas pinpointed areas for financial optimization, and successfully executed cost-reduction initiatives, resulting in a 20% savings. • Led M&A activities with in-depth financial due diligence and post-acquisition integration analysis. • Presented monthly and quarterly financial reports to C-suite executives, providing insights and recommendations for revenue growth and risk mitigation. • Managed the preparation of annual budgets, forecasts, and cash flow projections. • Managed company liquidity, ensuring optimal capital structure and maintaining relationships with financial institutions. • Managed a cross-functional team of financial analysts, fostering a collaborative environment and continuous professional growth. • Reporting CEO/VP of Finance of organization’s financial performance by providing monthly reporting of actuals vs. budget. • Generated HR report using Power BI highlighting the employee turnover ratio, and headcount by the department that helped manage expenses within the budget. • Provide support for finance efforts to increase efficiency and add value to business partners, including data mining and identifying, tracking, and reporting on KPIs. • Monitored financial performance by measuring and analyzing results; initiated corrective actions; minimized the impact of variances by 30%. • Directed and accelerated month-end closing process including journal entries, reconciliations, and variance analysis, significantly improving reporting timeliness and operational efficiency. • Provided guidance on complex accounting matters such as revenue recognition, derivatives, leases. • Oversaw accounts payable and receivable department to ensure accurate and timely payments and deposits. • Oversaw the financial and accounting teams, ensuring timely financial reporting, budgeting, and forecasting. • Prepared ad hoc analyses as requested by senior leadership, aiding in agile and informed decision-making. • Implemented cutting-edge technologies to streamline financial operations, boosting data accuracy by 40% and fostering operational efficiency. • Ensured compliance with GAAP principles in all transactions & reporting activities, enhancing accuracy by 20%. • Maintained detailed records of all financial transactions, including accounts payable and receivable, budgeting, forecasting, payroll, and general ledger. • Proven leadership in guiding and mentoring finance and accounting teams, with a focus on ensuring rigorous financial controls, process optimization, and driving excellence in execution. • Monitored and evaluated performance of accounting and other financial staff.  • Managed intercompany account reconciliations, ensuring accurate financial reporting and tax implications. • Developed and implemented financial policies and procedures to ensure effective internal control systems. • Advised management on potential risks associated with certain business decisions or investments. • Developed and maintained relationships with external auditors and advisors. • Maintained current knowledge of organizational policies and procedures, federal and state policies, and directives, and current accounting standards. • Developed policies and procedures for effective cash management practices. • Conduct the process of inventory count every month and facilitate inventory audit annually. • Automating manual efforts, including reports and dashboard, by using excel and Business Intelligence tools and driving process improvements across multiple functions and teams, resulting in substantial improvement in the company's productivity. • Directed and accelerated month-end closing process including journal entries, reconciliations, and variance analysis slashing the cycle down from 10 days to 6 days, significantly improving reporting timeliness and operational efficiency. Senior Researcher – Finance and Accounting | BITS Pilani, India | January 2017 – December 2021 Birla Institute of Technology & Science Pilani- Pilani Campus is ranked among the top universities in the world. • Improving the internal audit system of the university for better transparency and timely reporting of errors. • Led detailed financial analyses, including variance, profitability, and ROI analyses, to support business decisions. • Created advanced financial models to predict future revenues and expenses. • Led the annual budgeting and forecasting processes, providing detailed financial analyses and recommendations. • Conducted a comprehensive analysis of the university's cost framework, pinpointed areas for financial optimization, and successfully executed cost-reduction initiatives, resulting in a 20% savings. • Contributed to shaping the organizational financial strategy by providing executive management with insightful risk assessments and pivotal financial data, aiding in informed decision-making and strategic planning. • Conducted comprehensive analysis on financial trends and KPIs, identifying growth opportunities and risks. • Conducted competitive analyses to benchmark university’s performance against industry standards. • Analyzed large data using SQL, Tableau and BI tools to support executive business decision. • Collaborated with cross-functional teams to determine financial forecasts and set performance benchmarks for projects to evaluate whether business decisions aligned with capital and resource allocation. • Coordinated the preparation of regulatory reporting and ensured timely and accurate monthly and annual closings Reconciled intercompany accounts across multiple entities worldwide. • Managed accounting operations, including Billing, A/R, A/P, and GL, Cost Accounting, and Revenue Recognition. • Led internal audits for tax codes and regulatory compliance, ensuring all processes met regulatory standards. • Evaluated existing accounting processes and procedures to identify areas for improvement. Assistant Professor- Finance | RNB Global University | April 2016 – January 2017 • Worked in the finance department of the university to create financial records, revenue forecasts, cost overheads and cost allocation under administrative duties. • Managed day to day financial operations of the university. • Oversee and monitor the planning, scheduling, and completion of the course curriculum like Financial Accounting, Cost and Managerial Accounting, Banking theory and practice, Insurance and Risk Management, Corporate Governance and Ethics, and Entrepreneurship. • Providing academic support to the head of the Department of Geological Sciences • Representing the department at international conferences and academic events. • Conducting lectures and tutorials for undergraduate and graduate students  Controller | Singhal Raghav & Co. | December 2015- April 2016 • Conducted monthly variance analyses, generating actionable recommendations that drove productivity enhancements and elevated the company's operational efficiency by 20%. • Led internal audits for tax codes and regulatory compliance, ensuring all processes met regulatory standards. • Created and maintained documentation related to Sarbanes-Oxley Act compliance requirements. • Researched accounting issues for compliance and maintained a system of controls over accounting transactions. • Handled cash management and forecasting functions to facilitate financial operations. • Monitored cash flow and reserve levels to meet legal and regulatory requirements. • Analyzed data to identify trends and highlight areas of concern. • Crafted and monitored budget alignments and variances, facilitating improved efficiency in the reporting processes, and crafted dynamic financial models for extensive valuation analysis. • Spearheaded audit teams through statutory and concurrent audits of multinational entities and financial institutions, ensuring precise and insightful audit reporting to clients and senior management. • Enhanced internal control systems, boosting operational effectiveness and efficiency within client businesses. • Overseeing accounting team and working closely on preparation of financial statements. Finance and Audit Assistant | K N Gungutia & Co. | December 2014 – June 2015 • Assisted senior accountants in preparing end-of-month reports and financial statements. • Collaborated with the accounting team during tax season to gather, review, and compile documentation. • Processed accounts payable and receivable, ensuring timely and accurate payment and invoicing. • Continuously updated and maintained the financial database, ensuring data accuracy. • Prepared accurate financial statements, including balance sheets, P&L statements, and cash flow statements. • Assisted in internal audits, identifying discrepancies, and implementing corrective actions. • Processed accounts payable and receivable, ensuring timely and accurate payment and invoicing. • Managed payroll processing for over 50 employees, ensuring compliance with tax regulations. • Conducted monthly bank reconciliations and maintained organized records of all financial transactions. EDUCATION Doctorate| January 2017 – December 2021| BITS Pilani, Rajasthan, India • Finance and Banking | CGPA: 10/10 MBA | JUNE 2010 - JANUARY ICFAI SIKKIM, INDIA • Major: International Business | CGPA: 8.5/10 Bachelor Of Commerce | July 2006 - May Delhi University, Delhi, India • Major: Finance and Commerce Chartered Accountancy | August 2006 – May ICAI, Delhi, India Equivalent to CPA in USA • Completed Intermediate level and Final Group 1 ",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/bfa5313e-9dc5-4be3-8a7b-910f2ec0fa55.pdf',
  },
  {
    email: 'irisc0305@gmail.com',
    avatar: null,
    city: 'Mountain View',
    state: 'California',
    country: 'United States',
    first_name: 'Iris',
    last_name: 'Chiu',
    linkedin: '',
    phone: '5107806618',
    current_company: 'Hawk Ridge Systems',
    timezone: null,
    current_job_title:
      'Senior Vice President \\\\u2013 Finance, Accounting & Operations',
    resume_json: {
      basics: {
        email: 'irisc0305@gmail.com',
        phone: '780-6618',
        social: [],
        lastName: 'Chiu',
        linkedIn: null,
        location: {
          city: 'Mountain View',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Iris',
        currentCompany: 'Hawk Ridge Systems',
        currentJobTitle:
          'Senior Vice President \\\\u2013 Finance, Accounting & Operations',
        totalExperienceInMonths: 130,
      },
      skills: [
        'Global Business and Financial Operations',
        'Financial Reporting',
        'Audit Leadership',
        'Budgeting Procedures',
        'IPOs',
        'Private Placements & M&A',
        'Revenue Recognition',
        'SEC Reporting',
        'People Management',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'MBA - Finance',
          start: {
            year: null,
            month: null,
          },
          degree: 'Masters of Business Administration',
          institution: 'San Francisco State University',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'BS - Accounting & Finance',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Science',
          institution: 'San Francisco State University',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: null,
          start: {
            year: null,
            month: null,
          },
          degree: null,
          institution: 'Stanford - Hawk Ridge System',
        },
      ],
      overview:
        'Iris Chiu is a Senior Vice President – Finance, Accounting & Operations at Hawk Ridge Systems with expertise in Financial Reporting, Audit Leadership, and Budgeting Procedures.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Hawk Ridge Systems',
          level: 'Senior-level',
          start: {
            year: 2014,
            month: null,
          },
          title:
            'Senior Vice President \\\\u2013 Finance, Accounting & Operations',
          location: 'Mountain View, CA',
          description:
            'Play a pivotal role in 10+ M&A transactions and recapitalization. Scale the accounting and finance department from 3 to 30 team members. Reporting directly to the CEO, lead initiatives which resulted in over 200% business growth with a 50% increase in profitability in 5 years. Serve as one of 5 key leaders on Senior Leadership Team to advise CEO on company-wide decisions regarding business, investments and the employee experience. Developed standardized templates for monthly and quarterly financial statements across business units, streamlining the process, reducing preparation time by 50%, and enabling close to real-time reporting for proactive decision-making. Manage strategy and implementation of 3+million integration of business systems including NetSuite and Salesforce. Lead a team of 5 direct reports at Director levels and staff of 100+ spanning Corporate Accounting, FP&A, Strategic Finance, Business Operations, Technology and Revenue Operations. Manage business partnerships to include Cloud, software and hardware enterprises such as DS SolidWorks, Dassault Syst\\u00e8mes, HP, Markforged and SolidProfessor. Create and manage financial planning process to include annual and multi-year strategic plans and KPIs. Manage investor relations with business plan review, financial reporting and budgeting. Guide company-wide initiatives for DEI, employee communications to optimize the employee experience. Direct management of functions including Accounting, Finance, Operations, Revenue Ops, HR, IT, IS and Administration. Ensure data integrity and compliance with audit standards, establishing best practices for data management and privacy. Oversee Intellectual Property (IP), including registered trademarks, brand usage, and compliance. Manage insurance programs and assessed risk exposure to develop strategies for mitigating financial and operational risks. Implement a self-funded health insurance program, optimizing cost management and coverage flexibility.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Iris Chiu  780-6618 irisc0305@gmail.com | SF Bay Area PROFILE Global Business and Financial Operations: Led international teams, ensuring legal compliance with local regulations and risk management for exposures. Financial Reporting and Global Consolidations: Developed and maintained GAAP and IFRS compliant financials that meet Big 4 Audit & Review standards. Audit Leadership and Compliance Oversight: Directed internal audits (40% of focus) and partnered with external auditors (60% of focus) to uphold financial integrity. Collaboratively developed comprehensive technical notes that provided guidance on audit procedures, documented complex transactions, and outlined key methodologies. Budgeting Procedures and Financial Planning: Implemented budgeting procedures aligned with strategic goals and long-term growth and RPE. IPOs, Private Placements & M&A: Led the entire financial process for IPOs, private placements, and M&A, from initial due diligence and negotiations to managing transitions and integrations. Revenue Recognition: Ensured proper SaaS Revenue Recognition. Implemented robust process for adoption of ASC 606. Aligned contract reviews with collaboration between Finance and Sales. SEC Reporting and Filings: Extensive experience managing SEC reporting and filings, including 10-Q, 10-K, 8-K, and annual reports, ensuring accuracy and compliance with regulatory requirements. People Management: Led HR and recruiting initiatives, including talent acquisition, performance management, professional development, and compliance with legal and regulatory requirements, to foster a high-performing and engaged workforce.  PROFESSIONAL EXPERIENCE Hawk Ridge Systems Mountain View, CA a private, PE-backed company specializes in global revenue in software, SaaS, digital manufacturing, and online training and services Senior Vice President – Finance, Accounting & Operations 2014 - Present Highlights: Play a pivotal role in 10+ M&A transactions and recapitalization. Scale the accounting and finance department from 3 to 30 team members. Reporting directly to the CEO, lead initiatives which resulted in over 200% business growth with a 50% increase in profitability in 5 years Serve as one of 5 key leaders on Senior Leadership Team to advise CEO on company-wide decisions regarding business, investments and the employee experience Developed standardized templates for monthly and quarterly financial statements across business units, streamlining the process, reducing preparation time by 50%, and enabling close to real-time reporting for proactive decision-making Manage strategy and implementation of 3+million integration of business systems including NetSuite and Salesforce Lead a team of 5 direct reports at Director levels and staff of 100+ spanning Corporate Accounting, FP&A, Strategic Finance, Business Operations, Technology and Revenue Operations Manage business partnerships to include Cloud, software and hardware enterprises such as DS SolidWorks, Dassault Systèmes, HP, Markforged and SolidProfessor Create and manage financial planning process to include annual and multi-year strategic plans and KPIs Manage investor relations with business plan review, financial reporting and budgeting Guide company-wide initiatives for DEI, employee communications to optimize the employee experience Direct management of functions including Accounting, Finance, Operations, Revenue Ops, HR, IT, IS and Administration Ensure data integrity and compliance with audit standards, establishing best practices for data management and privacy Oversee Intellectual Property (IP), including registered trademarks, brand usage, and compliance Manage insurance programs and assessed risk exposure to develop strategies for mitigating financial and operational risks implement a self-funded health insurance program, optimizing cost management and coverage flexibility Telmate (GTL) San Francisco, CA VP of Finance 2013 - 2014 Highlights: Strategized with CXOs and VPs to achieve a 36% business growth through strategic financial management and operations optimization Directed and managed the full spectrum of controllership disciplines, including financial reporting, budgeting, planning, international consolidations, financial analysis and treasury functions Established and maintained robust accounting policies and procedures to create a stable framework for growth Managed global accounting practice, payroll and compliance with Asia; led consideration of HR practices to address global workforce and cultural considerations Managed annual review process, presentation and documentation, including complex guidelines for revenue recognition and accounting conversions Structured corporate insurance and risk management matters, including a heavy focus on workforce management Directed the company through sector consolidation in the telecommunications industry, managing operational integration and organizational restructuring up to the successful exit through acquisition SnapLogic San Mateo, CA VP of Finance 2012 - 2013 Highlights: Played a key role in multiple funding rounds, effectively managing relationships with VCs to ensure alignment and ongoing growth Spearheaded the ground-breaking introduction of the industry’s first Elastic Integration Platform as a Service (IPaaS) Directed and managed robust accounting policies and procedures, setting the foundation for stable growth Led and managed the accounting operations, overseeing the collection of financial data, international consolidation and internal process improvements Prepared monthly and quarterly financial reports for executive team and investors Managed worldwide HR and Employee experience to bring HR metrics and headcount to the forefront of company priorities Managed HR support, online training, recruiting, onboarding and benefit administration, including extensive work with H-1B visas and employee relations Managed internal accountants overseeing general accounting, payroll, tax, and compliance in the UK Xiox San Mateo, CA  Chief Financial Officer - CFO 2001 - 2011 Highlights: Led the company through a successful Ch 11 reorganization and privatization process, negotiating with creditors and steering the organization back to profitability. Achieved operating expense reduction of 40% through the implementation of cost-containment measures Managed contract, contract negotiations with customers, especially during the period where deferred revenue for software sales was a highly debated issue Maintained Shareholder and Investor relations, compiling information for Board of Directors’ meetings, Shareholders’ meetings and proxy mailings Prepared monthly and periodic financial packages, including 10-Q, 10-K, 8-K and Annual Report Managed all aspects of financial strategy on a worldwide basis to include subsidiaries in the US and Europe BUSINESS SOFTWARE NetSuite, Great Plains Dynamics, Sage, Quickbooks, Peachtree, Concur, ADP, Paychex, Ultipro, Zendesk, Power BI, Zone, Tableau, FloQast, Salesforce EDUCATION San Francisco State University Masters of Business Administration MBA - Finance Bachelor of Science BS - Accounting & Finance Stanford - Hawk Ridge System ASSOCIATIONS & PROFESSIONAL CERTIFICATIONS Corporate Sponsor - Women’s Empowerment Group - Hawk Ridge Systems Corporate Leadership - DEI Council - Hawk Ridge Systems Corporate Development - HawkReach - Hawk Ridge Systems Global Leadership - VAR Finance Council - Hawk Ridge Systems Corporate Evangelist - Lucile Packard Children’s Hospital at Stanford - Hawk Ridge System',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/20c9f959-e447-4ac5-b82d-3665884ef7b4.docx',
  },
  {
    email: 'shuminhan12@gmail.com',
    avatar: null,
    city: 'Cupertino',
    state: 'California',
    country: 'United States',
    first_name: 'Shumin Sylvia',
    last_name: 'Han',
    linkedin: '',
    phone: '4089811241',
    current_company: 'California Dental Arts LLC',
    timezone: null,
    current_job_title: 'Sr. Corporate Controller',
    resume_json: {
      basics: {
        email: 'shuminhan12@gmail.com',
        phone: '981',
        social: [],
        lastName: 'Han',
        linkedIn: null,
        location: {
          city: 'Cupertino',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Shumin',
        currentCompany: 'California Dental Arts LLC',
        currentJobTitle: 'Sr. Corporate Controller',
        totalExperienceInMonths: 49,
      },
      skills: [
        'CPA',
        'CMA',
        'MST',
        'EA',
        'project management',
        'FP&A',
        'journal entries',
        'accounts reconciliation',
        'cash management',
        'financial statements',
        'internal control',
        'compliance',
        'revenue recognition',
        'percentage of completion method',
        'intercompany transactions',
        'financial audit',
        'payroll processing',
        'sales tax return',
        'financial reporting',
        'equipment financing',
        'bank relationship',
        'ERP system',
        'tax compliance',
        'SAP',
        'NetSuite',
        'Sage Intacct',
        'Salesforce',
        'ADP',
        'Concur',
        'Excel',
        'PowerPoint',
        'Hyperion',
        'Access',
        'Word',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Taxation',
          start: {
            year: 2011,
            month: null,
          },
          degree: 'Master of Science in Taxation',
          institution: 'San Jose State University',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Mathematics',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor’s degree in mathematics',
          institution: 'TUTE',
        },
      ],
      overview:
        'Shumin Han is a Sr. Corporate Controller at California Dental Arts LLC with expertise in CPA, CMA, and project management.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: 2024,
            month: 6,
          },
          org: 'California Dental Arts LLC',
          level: 'Senior-level',
          start: {
            year: 2020,
            month: 6,
          },
          title: 'Sr. Corporate Controller',
          location: 'Cupertino, CA',
          description:
            'Supervise full cycle of business activities include AR, AP, Inventory, GL and Payroll processing, Project management: - Settled numerals customer/vendor dispute & government audit. FP&A functions \n- annual budgeting and project budgeting, cash flow forecast and proforma financial statement. Review journal entries and accounts reconciliation include Bank, Prepaid, deferred, accrued, Inventory, fixed asset, debt and equity. Manage period-end closing process to ensure transactions are recorded properly and timely according to GAAP. Daily cash management that improved liquidity. Partnering with heads of department improved departmental P&L objectiveness and accuracy through appropriate overhead cost allocation. Accurate financial statements and analysis reports are delivered on schedule. Internal control procedures are constantly reviewed, updated and simplified to enhance best practice and efficiency. Robust Compliance to ensure business good standing– working closely with third party CPAs and governmental authorities for annual financial audit, bank audit, payroll tax analysis, income tax filing, sales tax filing, 401k audit, Work’s compensation audit, property tax auditing, information return, etc. Both CPA & CMA licenses are active by following GAAP Development, tax legislation update, & improved analytical skills.',
        },
        {
          end: {
            year: 2019,
            month: 11,
          },
          org: 'Lilee Systems, Ltd',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: 2,
          },
          title: 'Technical Accounting Manager',
          location: 'San Jose, CA',
          description:
            'Own the revenue cycle: review master sales agreement, billing & collection, revenue recognition according to GAAP. Project cycle management, successfully Implemented ASC 606, 842. Working in progress tracking and reconciliation that related to multiyear software development contract. Deep understanding of percentage of completion method to recognize revenue and cogs. Intercompany transaction review, reconciliation, elimination and consolidation. Financial audit – effective coordination and communication with auditing team to complete the auditing process on schedule with clear reports. Developed commission calculation template to reflect company commission policy and calculate commission numbers. Bi-weekly payroll processing and transfer the payroll data to NetSuite via journal entries.',
        },
        {
          end: {
            year: 2016,
            month: 2,
          },
          org: 'Metabyte, Inc.',
          level: 'Mid-level',
          start: {
            year: 2015,
            month: 2,
          },
          title: 'Finance & Accounting Manager',
          location: 'Fremont, CA',
          description:
            'Manage daily accounting operations including GL, Payroll, AR, AP, Month-end closing and financial reporting. Work with external CPAs for tax compliance and financial audit. Work with CEO for annual plan, forecast & budgeting. Process payroll bi-weekly and file 941 quarterly (Paycheck) File sales tax return quarterly.',
        },
        {
          end: {
            year: 2015,
            month: 1,
          },
          org: 'Ronbow Corporation',
          level: 'Mid-level',
          start: {
            year: 2013,
            month: 9,
          },
          title: 'Controller',
          location: 'Fremont, CA',
          description:
            'Managing all aspects of accounting operations and month-end closing, including AR, AP, Payroll, Inventory, General ledger, etc. Manage intercompany transactions such as billing, journal entries, reconciliation and consolidation. Prepare consolidated financial reporting package. Equipment financing, bank relationship & cash flow management. Lead & oversee third party auditing, income tax filing. Manage income tax, sales tax, property tax, environmental, payroll tax compliance. Full cycle project management - converted ERP system from SAP to NetSuite.',
        },
      ],
      certificates: [
        'Certified Public Accountant',
        'Certified Management Accountant',
      ],
    },
    resume_text:
      'Shumin Sylvia Han CPA, CMA, MST & EA Mobile:  981-Email: shuminhan12@gmail.com PROFESSIONAL EXPERIENCE California Dental Arts LLC – Cupertino, CA Jun 2020 – Jun 2024 Sr. Corporate Controller  Supervise full cycle of business activities include AR, AP, Inventory, GL and Payroll processing,  Project management: - Settled numerals customer/vendor dispute & government audit.  FP&A functions – annual budgeting and project budgeting, cash flow forecast and proforma financial statement.  Review journal entries and accounts reconciliation include Bank, Prepaid, deferred, accrued, Inventory, fixed asset, debt and equity.  Manage period-end closing process to ensure transactions are recorded properly and timely according to GAAP.  Daily cash management that improved liquidity.  Partnering with heads of department improved departmental P&L objectiveness and accuracy through appropriate overhead cost allocation.  Accurate financial statements and analysis reports are delivered on schedule.  Internal control procedures are constantly reviewed, updated and simplified to enhance best practice and efficiency.  Robust Compliance to ensure business good standing– working closely with third party CPAs and governmental authorities for annual financial audit, bank audit, payroll tax analysis, income tax filing, sales tax filing, 401k audit, Work’s compensation audit, property tax auditing, information return, etc.  Both CPA & CMA licenses are active by following GAAP Development, tax legislation update, & improved analytical skills. Lilee Systems, Ltd – San Jose, CA Feb 2016 – Nov 2019 Technical Accounting Manager  Own the revenue cycle: review master sales agreement, billing & collection, revenue recognition according to GAAP.  Project cycle management, successfully Implemented ASC 606, 842.  Working in progress tracking and reconciliation that related to multiyear software development contract.  Deep understanding of percentage of completion method to recognize revenue and cogs. Intercompany transaction review, reconciliation, elimination and consolidation.   Financial audit – effective coordination and communication with auditing team to complete the auditing process on schedule with clear reports.  Developed commission calculation template to reflect company commission policy and calculate commission numbers.  Bi-weekly payroll processing and transfer the payroll data to NetSuite via journal entries. Metabyte, Inc.– Fremont, CA Feb 2015 – Feb 2016 Finance & Accounting Manager  Manage daily accounting operations including GL, Payroll, AR, AP, Month-end closing and financial reporting.  Work with external CPAs for tax compliance and financial audit.  Work with CEO for annual plan, forecast & budgeting.  Process payroll bi-weekly and file 941 quarterly (Paycheck)  File sales tax return quarterly. Ronbow Corporation – Fremont, CA Sep 2013–Jan 2015 Controller  Managing all aspects of accounting operations and month-end closing, including AR, AP, Payroll, Inventory, General ledger, etc.  Manage intercompany transactions such as billing, journal entries, reconciliation and consolidation.  Prepare consolidated financial reporting package.  Equipment financing, bank relationship & cash flow management.  Lead & oversee third party auditing, income tax filing.  Manage income tax, sales tax, property tax, environmental, payroll tax compliance.  Full cycle project management - converted ERP system from SAP to NetSuite. EDUCATION & CREDENTIALS  Certified Public Accountant #117046, 10/26/2012 – 4/30/2025  Certified Management Accountant #78127, 12/6/2019 – present  Master of Science in Taxation, San Jose State University, CA, 2011  Bachelor’s degree in mathematics, TUTE. China. SYSTEMS  Mas 90, NetSuite, SAP, Sage Intacct, Salesforce, ADP, Concur, Data evolution (ABS), Magic Touch. Bill.com  Excel, PowerPoint, Hyperion, Access, and Word.',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/364f7bb9-94e1-4c7c-b329-c32abedfb813.pdf',
  },
  {
    email: 'vernapoon@gmail.com',
    avatar: null,
    city: 'San Mateo',
    state: 'California',
    country: 'United States',
    first_name: 'Verna',
    last_name: 'Sundar',
    linkedin: '',
    phone: null,
    current_company: 'Storm8, LLC',
    timezone: null,
    current_job_title: 'Senior Controller',
    resume_json: {
      basics: {
        email: 'vernapoon@gmail.com',
        phone: null,
        social: [],
        lastName: 'SUNDAR',
        linkedIn: null,
        location: {
          city: 'San Mateo',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'VERNA',
        currentCompany: 'Storm8, LLC',
        currentJobTitle: 'Senior Controller',
        totalExperienceInMonths: 244,
      },
      skills: [
        'Accounting',
        'Financial Reporting',
        'ERP Systems',
        'Process Improvement',
        'Budgeting & Forecasting',
        'Revenue Recognition',
        'Payroll Management',
        'Financial Analysis',
        'Tax Compliance',
        'Internal Controls',
        'System Integration',
        'Project Management',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: 3.6,
          field: 'Accountancy',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Science in Accountancy',
          institution: 'University of Illinois at Urbana-Champaign',
        },
      ],
      overview:
        'Verna Sundar is a Senior Controller at Storm8, LLC with expertise in Financial Reporting, Budgeting & Forecasting, and Revenue Recognition.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Storm8, LLC',
          level: 'Senior-level',
          start: {
            year: 2021,
            month: null,
          },
          title: 'Senior Controller',
          location: 'San Mateo, CA',
          description:
            'Implemented a new ERP system (Sage Intacct) and payment automation software (Tipalti), resulting in annual savings of $200K and improved cash flow. Successfully coached the team to work efficiently and collaboratively, reducing the time required for the month-end close process from 10 days to 3 days, ensuring timely and accurate financial reporting. Oversee all areas of accounting, including GL accounting, revenue, technical accounting, payroll, and accounts payable, ensuring compliance with taxation, regulatory and statutory requirements. Collaborate with cross-functional teams for budgeting and forecasting. Experience with accounting and transfer pricing across international subsidiaries and customers. Assist with ICFR compliance activities for the corporate accounting team, including developing and executing internal controls. Manage and oversee the operation of the company 401(k) retirement plan across 4 different entities. Ensure the plan complies with regulatory requirements, operates efficiently, and provides value to participants. Coordinate and compile monthly reporting packages highlighting financial results, KPIs, insights, and non-standard transactions. Supported the selection and implementation of a new shares tracking system (Shareworks), including evaluating software options, coordinating with vendors, and overseeing system integration and deployment. Implemented Modulus to streamline the integration of BambooHR with ADP, automating employee data flow and significantly improving operational efficiencies.',
        },
        {
          end: {
            year: 2021,
            month: null,
          },
          org: 'Storm8, LLC',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: null,
          },
          title: 'Controller',
          location: 'San Mateo, CA',
          description:
            'Led the redesign of financial processes, introducing efficiency improvements that allowed the department to operate effectively with a 60% smaller team, enhancing overall productivity. Spearheaded a comprehensive process improvement initiative that resulted in a 80% increase in productivity in the Art Outsourcing department. Implemented and oversaw the company’s revenue recognition policy and procedures, adhering to ASC 606 guidelines. Played a key role in the accounting function for a $400 million acquisition, overseeing due diligence, valuation, and post-merger integration. Meticulously handled the calculation and reporting of a $100 million earn-out and $300 million upfront consideration, coordinating with legal and finance teams to ensure adherence to contractual terms and accurate documentation.',
        },
        {
          end: {
            year: 2017,
            month: null,
          },
          org: 'Storm8, LLC',
          level: 'Mid-level',
          start: {
            year: 2013,
            month: null,
          },
          title: 'Accounting Manager',
          location: 'San Mateo, CA',
          description:
            'Advocated and leveraged the use of technology to build scalable/sustainable processes to improve productivity and streamline accounting operations, cutting processing time by 50%. Drove process improvements and automation initiatives to enhance efficiency, accuracy, and productivity of the Finance department. Spearheaded the implementation of NetSuite and established policies for revenue recognition and expense allocations. Led and mentored the growing accounting team, fostering a collaborative environment and enhancing team performance to meet the demands of the company’s rapid expansion. Managed financial statement audits with external auditors, including coordination of audit timing, delivery of audit schedules, and timely resolution of issues. Coordinated with external tax consultants on tax compliance and R&D Tax Credit efforts. Managed the revenue reporting function, including the creation, analysis, and presentation of comprehensive revenue reports to senior management.',
        },
        {
          end: {
            year: 2013,
            month: null,
          },
          org: 'Storm8, LLC',
          level: 'Associate-level',
          start: {
            year: 2012,
            month: null,
          },
          title: 'Senior Accountant',
          location: 'San Mateo, CA',
          description:
            'Partnered with HR Generalist to develop payroll and employee benefits operations, while implementing ADP Workforce Now and BambooHR. Ensured accurate and timely payroll calculations, including salary, overtime, bonuses, deductions, and tax withholdings. Responsible for monthly and annual close process, including preparation of journal entries, adjustments, accruals, expense allocations, and accounts reconciliation. Developed and maintained the monthly close schedule and supporting documentation.',
        },
        {
          end: {
            year: 2012,
            month: null,
          },
          org: 'Pelican Advisors, LLC',
          level: 'Mid-level',
          start: {
            year: 2011,
            month: null,
          },
          title: 'Controller',
          location: 'San Francisco, CA',
          description:
            "Managed the family's philanthropic activities, including the administration of charitable foundations or trusts. Maintained accurate and up-to-date financial records for all family members and entities, including income, expenses, investments, and other financial transactions. Upheld a high level of discretion and confidentiality, given the sensitive nature of the work.",
        },
        {
          end: {
            year: 2011,
            month: null,
          },
          org: 'SummerHill Homes',
          level: 'Associate-level',
          start: {
            year: 2006,
            month: null,
          },
          title: 'Assistant Controller',
          location: 'San Ramon, CA',
          description:
            'Prepared consolidated monthly financials (balance sheet, P&L, cash flow) and overhead analysis. Prepared quarterly bank financials to ensure that lenders’ covenant requirements were met. Prepared monthly payroll allocations to corporate and projects to ensure proper reimbursement. Maintained the fixed asset schedule and ensured proper coding in fixed assets and in the general ledger. Assisted the CFO and Controller with the annual G&A budget forecast. Assisted with the annual audit through preparation of schedules and other support to external auditors. Assisted with writing and maintaining policies, processes, and procedures to improve efficiencies and controls. Analyzed and prepared monthly general ledger account reconciliations, ensuring accuracy and completeness of financial data.',
        },
        {
          end: {
            year: 2006,
            month: null,
          },
          org: 'SummerHill Homes',
          level: 'Fresher-level',
          start: {
            year: 2003,
            month: null,
          },
          title: 'Project Accountant',
          location: 'San Ramon, CA',
          description:
            'Maintained and managed the monthly activity for 6 projects’ general ledgers to ensure items were entered and recorded properly according to GAAP. Conducted variance analysis on project costs and revenues, providing detailed explanations and reports to management. Managed cash flow for multiple projects, including monitoring cash balances, forecasting cash needs, and ensuring sufficient funds for project expenses. Prepared project loan draws and functioned as the liaison for any loan issues and requirements. Coordinated with the accounts payable team to process payments, verify invoices, and ensure compliance with company policies and procedures.',
        },
        {
          end: {
            year: 2003,
            month: null,
          },
          org: 'Seiler & Company',
          level: 'Fresher-level',
          start: {
            year: 2001,
            month: null,
          },
          title: 'Staff Accountant',
          location: 'Redwood City, CA',
          description:
            'Provided assurance and consulting services to private technology, non-profit, and privately owned real estate investment clients. Prepared partnership, corporate, trust, individual, and non-profit tax returns. Prepared and reviewed monthly, quarterly, and annual financial statements, including income statements, balance sheets, and cash flow statements.',
        },
        {
          end: {
            year: 2001,
            month: null,
          },
          org: 'PricewaterhouseCoopers, LLP',
          level: 'Fresher-level',
          start: {
            year: 1999,
            month: null,
          },
          title: 'Experienced Associate',
          location: 'San Jose, CA',
          description:
            'Provided assurance and consulting services to public and private technology clients and a venture capital client. Supervised audit team for efficient completion of audit engagement and achievement of audit strategies. Completed a year-end carve-out related to an acquisition. Conducted variance analysis and provided detailed explanations of financial results to senior management. Conducted thorough audits of financial statements to ensure accuracy and compliance with accounting. standards. Reviewed and ensured the consistency and accuracy of management’s notes to financial statements, verifying that disclosures were complete and aligned with GAAP.',
        },
      ],
      certificates: [],
    },
    resume_text:
      "VERNA SUNDAR, CPA Certified Public Accountant vernapoon@gmail.com A transformational leader with a proactive, can-do attitude, consistently seeking opportunities to enhance processes and drive efficiencies. I thrive on motivating and empowering teams to embrace change, and I continuously look for innovative solutions that not only improve current operations but also position the organization for sustainable growth and success. I have excellent analytical and problem-solving skills with a strong focus on attention to detail and accuracy. WORK EXPERIENCE Storm8, LLC San Mateo, CA Senior Controller (2021 - present) ● Implemented a new ERP system (Sage Intacct) and payment automation software (Tipalti), resulting in annual savings of $200K and improved cash flow. ● Successfully coached the team to work efficiently and collaboratively, reducing the time required for the month-end close process from 10 days to 3 days, ensuring timely and accurate financial reporting. ● Oversee all areas of accounting, including GL accounting, revenue, technical accounting, payroll, and accounts payable, ensuring compliance with taxation, regulatory and statutory requirements. ● Collaborate with cross-functional teams for budgeting and forecasting. ● Experience with accounting and transfer pricing across international subsidiaries and customers. ● Assist with ICFR compliance activities for the corporate accounting team, including developing and executing internal controls. ● Manage and oversee the operation of the company 401(k) retirement plan across 4 different entities. Ensure the plan complies with regulatory requirements, operates efficiently, and provides value to participants. ● Coordinate and compile monthly reporting packages highlighting financial results, KPIs, insights, and non-standard transactions. ● Supported the selection and implementation of a new shares tracking system (Shareworks), including evaluating software options, coordinating with vendors, and overseeing system integration and deployment. ● Implemented Modulus to streamline the integration of BambooHR with ADP, automating employee data flow and significantly improving operational efficiencies. Controller (2017 - 2021) ● Led the redesign of financial processes, introducing efficiency improvements that allowed the department to operate effectively with a 60% smaller team, enhancing overall productivity. ● Spearheaded a comprehensive process improvement initiative that resulted in a 80% increase in productivity in the Art Outsourcing department. ● Implemented and oversaw the company’s revenue recognition policy and procedures, adhering to ASC 606 guidelines. ● Played a key role in the accounting function for a $400 million acquisition, overseeing due diligence, valuation, and post-merger integration. ● Meticulously handled the calculation and reporting of a $100 million earn-out and $300 million upfront consideration, coordinating with legal and finance teams to ensure adherence to contractual terms and accurate documentation. Accounting Manager (2013 – 2017) ● Advocated and leveraged the use of technology to build scalable/sustainable processes to improve productivity and streamline accounting operations, cutting processing time by 50%. ● Drove process improvements and automation initiatives to enhance efficiency, accuracy, and productivity of the Finance department.  ● Spearheaded the implementation of NetSuite and established policies for revenue recognition and expense allocations. ● Led and mentored the growing accounting team, fostering a collaborative environment and enhancing team performance to meet the demands of the company’s rapid expansion. ● Managed financial statement audits with external auditors, including coordination of audit timing, delivery of audit schedules, and timely resolution of issues. ● Coordinated with external tax consultants on tax compliance and R&D Tax Credit efforts. ● Managed the revenue reporting function, including the creation, analysis, and presentation of comprehensive revenue reports to senior management. Senior Accountant (2012 – 2013) ● Partnered with HR Generalist to develop payroll and employee benefits operations, while implementing ADP Workforce Now and BambooHR. ● Ensured accurate and timely payroll calculations, including salary, overtime, bonuses, deductions, and tax withholdings. ● Responsible for monthly and annual close process, including preparation of journal entries, adjustments, accruals, expense allocations, and accounts reconciliation. ● Developed and maintained the monthly close schedule and supporting documentation. Pelican Advisors, LLC San Francisco, CA Controller (2011 - 2012) ● Managed the family's philanthropic activities, including the administration of charitable foundations or trusts. ● Maintained accurate and up-to-date financial records for all family members and entities, including income, expenses, investments, and other financial transactions. ● Upheld a high level of discretion and confidentiality, given the sensitive nature of the work. SummerHill Homes San Ramon, CA Assistant Controller (2006 - 2011) ● Prepared consolidated monthly financials (balance sheet, P&L, cash flow) and overhead analysis. ● Prepared quarterly bank financials to ensure that lenders’ covenant requirements were met. ● Prepared monthly payroll allocations to corporate and projects to ensure proper reimbursement. ● Maintained the fixed asset schedule and ensured proper coding in fixed assets and in the general ledger. ● Assisted the CFO and Controller with the annual G&A budget forecast. ● Assisted with the annual audit through preparation of schedules and other support to external auditors. ● Assisted with writing and maintaining policies, processes, and procedures to improve efficiencies and controls. ● Analyzed and prepared monthly general ledger account reconciliations, ensuring accuracy and completeness of financial data. Project Accountant (2003 - 2006) ● Maintained and managed the monthly activity for 6 projects’ general ledgers to ensure items were entered and recorded properly according to GAAP. ● Conducted variance analysis on project costs and revenues, providing detailed explanations and reports to management. ● Managed cash flow for multiple projects, including monitoring cash balances, forecasting cash needs, and ensuring sufficient funds for project expenses. ● Prepared project loan draws and functioned as the liaison for any loan issues and requirements. ● Coordinated with the accounts payable team to process payments, verify invoices, and ensure compliance with company policies and procedures.  Seiler & Company Redwood City, CA Staff Accountant (2001 - 2003) ● Provided assurance and consulting services to private technology, non-profit, and privately owned real estate investment clients. ● Prepared partnership, corporate, trust, individual, and non-profit tax returns. ● Prepared and reviewed monthly, quarterly, and annual financial statements, including income statements, balance sheets, and cash flow statements. PricewaterhouseCoopers, LLP San Jose, CA Experienced Associate (1999 - 2001) ● Provided assurance and consulting services to public and private technology clients and a venture capital client. ● Supervised audit team for efficient completion of audit engagement and achievement of audit strategies. ● Completed a year-end carve-out related to an acquisition. ● Conducted variance analysis and provided detailed explanations of financial results to senior management. ● Conducted thorough audits of financial statements to ensure accuracy and compliance with accounting. standards. ● Reviewed and ensured the consistency and accuracy of management’s notes to financial statements, verifying that disclosures were complete and aligned with GAAP. EDUCATION University of Illinois at Urbana-Champaign Bachelor of Science in Accountancy; Cumulative GPA: 3.6/4.0 Dean’s List, 4 semesters HONORS & ACTIVITIES Beta Alpha Psi-National Accounting Fraternity-Vice President-membership; Publicity Committee Chair Commerce Council-Career Fair Committee Co-Chair Golden Key National Honor Society Beta Gamma Sigma-Honor Society SOFTWARE PROFICIENCIES Accounting Software: Netsuite, Sage Intacct, QuickBooks, Coupa, Tipalti, Expensify, AARO, Trueline Software, Timberline Software Office Software: MS Word, MS Excel (pivot tables, lookups, sumif, index/match functions), MS Access, MS Powerpoint, G-Suite, Slack System Implementations: Netsuite, Coupa, Sage Intacct, Shareworks, Modulus, Tipalti, ADP Workforce Now",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/a7701d36-b2bd-4795-815f-ab38f8f9d783.pdf',
  },
  {
    email: 'oksanabon@gmail.com',
    avatar: null,
    city: 'Palo Alto',
    state: 'California',
    country: 'United States',
    first_name: 'Oksana',
    last_name: 'Bondarenko',
    linkedin: '',
    phone: '6504178422',
    current_company: 'Luminar Technologies',
    timezone: null,
    current_job_title: 'Director/Controller',
    resume_json: {
      basics: {
        email: 'oksanabon@gmail.com',
        phone: '417-8422',
        social: [],
        lastName: 'Bondarenko',
        linkedIn: null,
        location: {
          city: 'Palo Alto',
          state: 'CA',
          country: '',
        },
        firstName: 'Oksana',
        currentCompany: 'Luminar Technologies',
        currentJobTitle: 'Director/Controller',
        totalExperienceInMonths: 180,
      },
      skills: [
        'CPA',
        'Financial Reporting',
        'SOX Compliance',
        'Mergers & Acquisitions',
        'FP&A',
        'System Implementation',
        'SEC Reporting',
        'Technical Accounting',
        'ERP',
        'SAP',
        'Oracle',
        'NetSuite',
        'Workiva',
        'Equity Edge',
        'Shareworks',
        'Adaptive',
        'Alteryx',
        'Blackline',
        'Smartsheet',
        'Revenue Recognition',
        'Due Diligence',
        'Auditing',
        'Data Analytics',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: '',
          start: {
            year: 2009,
            month: 12,
          },
          degree: 'Bachelor Accounting and Finance',
          institution: 'University of North Dakota (UND)',
        },
      ],
      overview:
        'Oksana is a Director/Controller at Luminar Technologies with expertise in Financial Reporting, SOX Compliance, and Mergers & Acquisitions.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Luminar Technologies',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 4,
          },
          title: 'Director/Controller',
          location: 'Sunnyvale',
          description:
            'Supervised monthly, quarterly, and year-end close processes. Lead accounting team of ATS segment (up to 10 employees + consultants). Ensured governmental accounting compliance, passed DCAA rate and system audit. Collaborated with stakeholders, including C-suit, treasury, legal, FP&A, internal and external auditors. Reviewed monthly financials and flux analyses. Coordinated SOX implementation for first year under audit for LSI entity. Prepared process narratives, control matrix for multiple processes and helped to streamline them. Prepared technical accounting memos from scratch and served as technical accounting expert. Ensured proper accounting treatment of complex transactions. Reviewed 80+ internal controls on financial reporting, order to cash, design to build, procure to pay cycles. Established, developed and maintained critical accounting policies for the segment. Established ASC 606 revenue contract review, implemented revenue checklists. Oversaw the consolidation of financials for the segment and budget to actuals analyses. Experienced in all major accounting cycles with a heavy inventory and revenue experience. Provided guidance on major contract signing terms & conditions. Lead due diligence and integration efforts for 2 acquisitions. Reviewed purchase price allocation and opening balance sheet adjustments for the acquisition. Oversaw internal and external audits, ensuring compliance with regulatory requirements. Lead ERP system implementation to consolidate 4 different accounting systems into 1 ERP. Identified opportunities to improve processes and gain efficiencies.',
        },
        {
          end: {
            year: 2023,
            month: 9,
          },
          org: 'TiVo/Xperi',
          level: 'Senior-level',
          start: {
            year: 2021,
            month: 2,
          },
          title: 'Director/TiVo Division Controller',
          location: 'San Jose',
          description:
            'Lead the preparation and filing of Form 10 filing effectively splitting $1bn revenue business into 2 public companies into Xperi Inc. (XPER) and Adeia (ADEA). Project-managed all filings including coordination of legal counsel, Big 4, bankers, C-suit, Corp development. Ensured compliance with SEC regulations and timely submission of all filings (7+ filings). Collaborated with legal, on Form 10 content. Responded to SEC comment letters, addressed Big 4 comments and made sure the deadlines for filings are met. Prepared and reviewed carve-out files. Prepared proforma financial statements. Drafted technical memos on significant and complex transactions and issues. Provided input for Separation agreement, Transition services agreement. Coordinated with PwC on filings review and annual audits Division Controller of TiVo (https://www.tivo.com ) – SAS, subscription and hardware business. Owned quote to cash, design to build and record to report cycles for B2C and B2B sales. Worked with IT team on SAP and Magento enhancements projects and resolved automation errors. Reviewed revenue contracts, ASC 606 checklists and determined proper revenue recognition treatment. Remediated billing errors on subscription renewals which resulted in $1M additional revenue. Redesigned credit and collection process, reduced old AR by 80%. Built forecast model for TiVo revenue with less than 1% variance of budget to actual. Simplified unfavorable agreements with partners to achieve cost optimization (Transworld, FedEx). Project managed Legal entity migration due to legal entity structure change. Established EDI for new retail customers onboarding. Implemented Braintree payment processor instead of CyberSource System implementation experience: NetSuite implementation lead. Defined business requirements, drafted business process narratives, designed and tested use cases. Led data migration (2M customers, millions of records of transactional data) from SAP, Oracle to NetSuite',
        },
        {
          end: {
            year: 2021,
            month: 1,
          },
          org: 'Oracle',
          level: 'Senior-level',
          start: {
            year: 2019,
            month: 8,
          },
          title: 'Senior Manager Technical Accounting & SEC reporting',
          location: 'Redwood City',
          description:
            'Project managed 10-Q and 10-K filings, reviewed disclosures and external filings. Drafted MD&A discussion in Form 10-Q/10-K. Lead financial due diligence for 7 companies of various sizes: target company business understanding, revenue recognition, debt & equity structure, cash flow projections, significant agreements, flux variance analyses, potential impact to financial statements and purchase price Responsible for purchase accounting and integration of Oracle’s acquisitions (4 deals): review of merger agreement and significant contracts, allocation certificate, funds flow memo, opening balance sheet Involved in 20B debt financing. Researched and analyzed complex accounting issues (goodwill & intangible assets impairment, software development costs, debt issuance, restructuring, revenue recognition, derivatives, investments, leases, earn- out). Implemented new accounting standards, analyzed new accounting pronouncements. Reviewed Forms 10-Qs/10-K and coordinated key timelines and deliverables of filings. Presented 3 Technical accounting webcasts to 500+ audience',
        },
        {
          end: {
            year: 2019,
            month: 7,
          },
          org: 'Ernst & Young (EY)',
          level: 'Senior-level',
          start: {
            year: 2015,
            month: 10,
          },
          title: 'Assurance Manager',
          location: 'San Jose',
          description:
            'Clients: Hewlett Packard, Verifone, Centrify, GlobalFoundries, SunPower, Hanergy. Advised clients through complex transactions, initial public offering, acquisitions, SOX implementation. 20+ audits, quarterly reviews clients ranging between 50M to 20B in revenue. Oversaw SEC filings, 10-K, 10-Q, S-1, SEC comment letters response, comfort letters. Hewlett Packard spinoff: managed 1 US team and 3 component teams totaling more than 20 individuals; designed opening balance sheet audit approach for 100+ newly created legal entities. Audited business combinations accounting, ASC 606 & ASC 718 issues, equity method investment, forecasts, 409 valuations, goodwill impairment analyses, liaised with specialists, Instructor for 10+ training courses (class size 25-40) covering new accounting topics and data analytics. EY M&A Transaction due diligence rotation: Sell-side due diligence of divestiture of SunPower. Prepared quality of earnings, analyzed data using Alteryx and Spotfire',
        },
        {
          end: {
            year: 2015,
            month: 10,
          },
          org: 'PricewaterhouseCoopers (PwC)',
          level: 'Mid-level',
          start: {
            year: 2012,
            month: 10,
          },
          title: 'Senior associate',
          location: 'San Jose',
          description:
            'Clients: Yume (S1, IPO), GoPro (1st year after IPO), Gigamon (S1, 1st year after IPO), ServiceNow',
        },
        {
          end: {
            year: 2012,
            month: 7,
          },
          org: 'Ernst & Young (EY)',
          level: 'Associate-level',
          start: {
            year: 2010,
            month: 10,
          },
          title: 'Associate',
          location: 'San Jose',
          description: '',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Oksana Bondarenko Palo Alto, CA ♦  417-8422 ♦ oksanabon@gmail.com  CPA in California and North Dakota  15 years of experience: Big 4 (9+ years), 5+ years public companies  9 years managing a team  SEC report + tech accounting: S1,10k, 10Q, MD&A, ASC 805, 350, 360, 718, 606, 321, 323, 842  Financial reporting, SOX implementation and compliance, ASC 606 contract review  Mergers & acquisitions: IPO, purchase accounting, financial due diligence, carve-outs, divestiture  FP&A: financial modeling, forecasting, budget to actual review  System implementation experience: Equity Edge, NetSuite, Braintree  Cross-functional work with Sales Ops, Corp Dev, Tax, Big 4, C-suite, ERP consultants  Supervised teams of up to 10 people both in the USA and abroad  SAP, Oracle, NetSuite, Workiva, Equity Edge, Shareworks, Adaptive, Alteryx, Blackline, Smartsheet  Industries: Software & SAAS, semiconductors, renewable energy, retail, big data, automotive  US citizen WORK EXPERIENCE Luminar Technologies (LAZR)- autonomous driving, governmental Director/Controller Luminar Semiconductors, Sunnyvale Apr 2023 – present  Supervised monthly, quarterly, and year-end close processes  Lead accounting team of ATS segment (up to 10 employees + consultants)  Ensured governmental accounting compliance, passed DCAA rate and system audit  Collaborated with stakeholders, including C-suit, treasury, legal, FP&A, internal and external auditors  Reviewed monthly financials and flux analyses  Coordinated SOX implementation for first year under audit for LSI entity  Prepared process narratives, control matrix for multiple processes and helped to streamline them  Prepared technical accounting memos from scratch and served as technical accounting expert  Ensured proper accounting treatment of complex transactions  Reviewed 80+ internal controls on financial reporting, order to cash, design to build, procure to pay cycles  Established, developed and maintained critical accounting policies for the segment   Established ASC 606 revenue contract review, implemented revenue checklists  Oversaw the consolidation of financials for the segment and budget to actuals analyses  Experienced in all major accounting cycles with a heavy inventory and revenue experience  Provided guidance on major contract signing terms & conditions  Lead due diligence and integration efforts for 2 acquisitions  Reviewed purchase price allocation and opening balance sheet adjustments for the acquisition  Oversaw internal and external audits, ensuring compliance with regulatory requirements  Lead ERP system implementation to consolidate 4 different accounting systems into 1 ERP Identified opportunities to improve processes and gain efficiencies TiVo/Xperi (XPER) Director/TiVo Division Controller San Jose, CA SEC reporting & Technical accounting Feb 2021 – Sep 2023  Lead the preparation and filing of Form 10 filing effectively splitting $1bn revenue business into 2 public companies into Xperi Inc. (XPER) and Adeia (ADEA)  Project-managed all filings including coordination of legal counsel, Big 4, bankers, C-suit, Corp development  Ensured compliance with SEC regulations and timely submission of all filings (7+ filings)  Collaborated with legal, on Form 10 content  Responded to SEC comment letters, addressed Big 4 comments and made sure the deadlines for filings are met  Prepared and reviewed carve-out files  Prepared proforma financial statements  Drafted technical memos on significant and complex transactions and issues  Provided input for Separation agreement, Transition services agreement  Coordinated with PwC on filings review and annual audits Division Controller of TiVo (https://www.tivo.com ) – SAS, subscription and hardware business  Owned quote to cash, design to build and record to report cycles for B2C and B2B sales  Worked with IT team on SAP and Magento enhancements projects and resolved automation errors  Reviewed revenue contracts, ASC 606 checklists and determined proper revenue recognition treatment  Remediated billing errors on subscription renewals which resulted in $1M additional revenue  Redesigned credit and collection process, reduced old AR by 80%  Built forecast model for TiVo revenue with less than 1% variance of budget to actual  Simplified unfavorable agreements with partners to achieve cost optimization (Transworld, FedEx)  Project managed Legal entity migration due to legal entity structure change  Established EDI for new retail customers onboarding  Implemented Braintree payment processor instead of CyberSource System implementation experience: NetSuite implementation lead  Defined business requirements, drafted business process narratives, designed and tested use cases  Led data migration (2M customers, millions of records of transactional data) from SAP, Oracle to NetSuite Oracle (ORCL) Senior Manager Technical Accounting & SEC reporting, Redwood City, CA Aug 2019 – Jan 2021  Project managed 10-Q and 10-K filings, reviewed disclosures and external filings  Drafted MD&A discussion in Form 10-Q/10-K  Lead financial due diligence for 7 companies of various sizes: target company business understanding, revenue recognition, debt & equity structure, cash flow projections, significant agreements, flux variance analyses, potential impact to financial statements and purchase price  Responsible for purchase accounting and integration of Oracle’s acquisitions (4 deals): review of merger agreement and significant contracts, allocation certificate, funds flow memo, opening balance sheet Involved in 20B debt financing   Researched and analyzed complex accounting issues (goodwill & intangible assets impairment, software development costs, debt issuance, restructuring, revenue recognition, derivatives, investments, leases, earn- out)  Implemented new accounting standards, analyzed new accounting pronouncements  Reviewed Forms 10-Qs/10-K and coordinated key timelines and deliverables of filings  Presented 3 Technical accounting webcasts to 500+ audience Ernst & Young (EY) Assurance Manager, San Jose, CA Oct 2015 – Jul 2019  Clients: Hewlett Packard, Verifone, Centrify, GlobalFoundries, SunPower, Hanergy  Advised clients through complex transactions, initial public offering, acquisitions, SOX implementation  20+ audits, quarterly reviews clients ranging between 50M to 20B in revenue  Oversaw SEC filings, 10-K, 10-Q, S-1, SEC comment letters response, comfort letters  Hewlett Packard spinoff: managed 1 US team and 3 component teams totaling more than 20 individuals; designed opening balance sheet audit approach for 100+ newly created legal entities  Audited business combinations accounting, ASC 606 & ASC 718 issues, equity method investment, forecasts, 409 valuations, goodwill impairment analyses, liaised with specialists, Instructor for 10+ training courses (class size 25-40) covering new accounting topics and data analytics   EY M&A Transaction due diligence rotation: Sell-side due diligence of divestiture of SunPower  Prepared quality of earnings, analyzed data using Alteryx and Spotfire PricewaterhouseCoopers (PwC), Senior associate, San Jose, CA Clients: Yume (S1, IPO), GoPro (1st year after IPO), Gigamon (S1, 1st year after IPO), ServiceNow Ernst & Young (EY), Associate Oct 2012 – Oct 2015 Oct 2010 – July 2012 EDUCATION & ACHIEVEMENTS University of North Dakota (UND), Bachelor Accounting and Finance Cum Laude ♦ Dec 2009  Xperi Inc.: recognized for successful execution of Separation, attended NYSE bell ringing ♦ 2022  EY: 8 Bravo awards from 7 different individuals for successful audit completion ♦ 2015-2019  PwC: Transformation award, 3 Contribution awards and 6 Difference Makers awards ♦ 2012-2015  US Department of State Fellowship UGRAD: highly competitive scholarship ♦ 2006-2007',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/efc1fb21-2549-47de-b57c-deeced19304f.pdf',
  },
  {
    email: 'david.brown@aglinthq.com',
    avatar: null,
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    first_name: 'David',
    last_name: 'Brown',
    linkedin: 'https://linkedin.com/in/david',
    phone: '+1-202-555-2006',
    current_company: 'University Project',
    timezone: null,
    current_job_title: 'Backend Developer',
    resume_json: {
      basics: {
        email: 'david.brown@gmail.com',
        phone: '+1-202-555-2006',
        social: [],
        lastName: 'Brown',
        linkedIn: null,
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: '',
        },
        firstName: 'David',
        currentCompany: 'University Project',
        currentJobTitle: 'Backend Developer',
        totalExperienceInMonths: 6,
      },
      skills: ['Java', 'Spring', 'PostgreSQL', 'API Development', 'Git'],
      schools: [
        {
          end: {
            year: 2016,
            month: null,
          },
          gpa: null,
          field: '',
          start: {
            year: null,
            month: null,
          },
          degree: 'B.Sc. in Computer Science',
          institution: 'University of California, Berkeley',
        },
      ],
      overview:
        'David Brown is a Backend Developer at University Project with expertise in Java, Spring, and API Development.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'University Project',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Backend Developer',
          location: 'San Francisco, CA',
          description:
            'Graduate looking to start a career in backend development with strong problem-solving skills.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'David Brown Email: david.brown@gmail.com Phone: +1-202-555-2006 Location: San Francisco, CA Professional Overview Graduate looking to start a career in backend development with strong problem-solving skills. Skills - Java - Spring - PostgreSQL - API Development - Git Education B.Sc. in Computer Science University of California, Berkeley Graduated: 2016 Experience Company: University Project, San Francisco, CA Role: Backend Developer Duration: 6 months ',
    file_url:
      'https://aglintai-seed-data.vercel.app/jobs/backend-engineer/david_brown_backend_engineer_resume.pdf',
  },
  {
    email: 'deblina.mndl@gmail.com',
    avatar: null,
    city: 'Santa Clara',
    state: 'California',
    country: 'United States',
    first_name: 'Deblina',
    last_name: 'Mondal',
    linkedin: '',
    phone: '+1-415-769-7800',
    current_company: 'Exabeam Inc.',
    timezone: null,
    current_job_title: 'VP, Finance',
    resume_json: {
      basics: {
        email: 'deblina.mndl@gmail.com',
        phone: '769-7800',
        social: [],
        lastName: 'Mondal',
        linkedIn: null,
        location: {
          city: 'Santa Clara',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Deblina',
        currentCompany: 'Exabeam Inc.',
        currentJobTitle: 'VP, Finance',
        totalExperienceInMonths: 93,
      },
      skills: [
        'NetSuite',
        'Coupa',
        'Salesforce',
        'Shareworks',
        'Anaplan',
        'Floqast',
        'Avalara',
        'Navan',
        'Expensify',
      ],
      schools: [],
      overview:
        'Deblina Mondal is a VP, Finance at Exabeam Inc. with expertise in NetSuite, Coupa, and Salesforce.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Exabeam Inc.',
          level: 'Senior-level',
          start: {
            year: 2021,
            month: null,
          },
          title: 'VP, Finance',
          location: 'Santa Clara, CA, USA',
          description:
            'Led the Company’s Finance department with a team of ~20 employees across FP&A, Revenue, Order Management, Accounting Operations, Technical Accounting and Payroll. Contributed to financial due diligence for debt financing and M&A exit. Managed investor relations. Developed processes around procurement (including designing Coupa approval workflow), expense accruals, and employee reimbursements. Developed and managed corporate treasury policy. Managed compliance with debt covenants. Designated Finance lead for cross-functional projects including: o Developing systematic tracking of cloud costs for determination of customer margin, o Designing playbook for contract terms, contract approval workflow, and customer overage billing policy, o Structuring product skus and establishing discount ranges, o Developing equity compensation policy including Option and RSU, o Designing policy around approval of employee compensation changes. Managed corporate insurance policies (D&O and E&O). Led preparation of Board materials and was responsible for communication to the Audit Committee. Managed financial reporting and technical accounting including ASC 606 revenue recognition (SaaS, license, services, hardware, and training); ASC 340 commission capitalization; ASC 842 lease accounting; ASC 718 share based compensation including common stock valuation (BSM), tender offer, option repricing and secondary sales; ASC 350 capitalization of internal-use software; ASC 326 current expected credit loss; equity and debt financing including derivative accounting. Managed accounting operations with Day+6 close; reduced close timeline by working with Engineering on developing a system for tracking customer cloud costs. Managed ~9 international subsidiaries including local accounting, payroll, legal compliance, tax compliance and consolidation; led development of new subsidiaries. Coordinated audit of annual financial statements by Big4 auditor; closed multiple consecutive audits with no audit observations. Managed relationship with Big4 tax provider and oversaw preparation of tax provision and filing of tax returns.',
        },
        {
          end: {
            year: 2021,
            month: null,
          },
          org: 'KPMG LLP, USA',
          level: 'Executive-level',
          start: {
            year: 2014,
            month: null,
          },
          title: 'Audit Senior Manager',
          location: 'USA',
          description:
            'Managed and executed audits in the technology industry with exposure to US GAAP and compliance with PCAOB requirements. Clients included public companies, primarily greater than $1B in revenue, which were key players in the SaaS video-conferencing and semi-conductor equipment manufacturing space. Supervised teams up to ~20 employees comprising of managers, seniors, and staff across audit, tax, and IT. Managed and coordinated audit procedures related to SEC reporting and compliance with internal controls in accordance with SOX 404 requirements for public companies. Audit experiences include: o IPO, first year SOX implementation, equity and debt issuance, and business carve-outs, o Implementation of new audit standards including ASC 606 revenue recognition, ASC 340 commission capitalization, ASC 842 lease accounting and ASC 326 current expected credit loss, o Technical accounting related to ASC 805 business combination, ASC 718 share based compensation, ASC 350 capitalization of internal-use software and ASC 330 inventory. Participated in multiple firm initiatives including implementation of new audit methodology, development of audit sampling methodology, implementation of D&A in audit including use of Power BI and Alteryx, and Audit National trainings.',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'KPMG Global Delivery Center, India',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Assistant Manager, Audit',
          location: 'India',
          description:
            'Provided audit support to US engagement teams in the technology sector.',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'PwC Service Delivery Center, India',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Senior Associate, Audit',
          location: 'India',
          description:
            'Provided audit support to US engagement teams in the manufacturing sector.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Deblina Mondal, CPA Santa Clara, CA •  769-7800 • deblina.mndl@gmail.com WORK EXPERIENCE Exabeam Inc. Series F B2B SaaS cybersecurity start-up with ~400 million in preferred funding and ~500 employees VP, Finance (2024 – Current), Controller (2022 –2024), Director, Accounting (2021 –2022) 2021 – Current • Led the Company’s Finance department with a team of ~20 employees across FP&A, Revenue, Order Management, Accounting Operations, Technical Accounting and Payroll. • Contributed to financial due diligence for debt financing and M&A exit. • Managed investor relations. • Developed processes around procurement (including designing Coupa approval workflow), expense accruals, and employee reimbursements. • Developed and managed corporate treasury policy. • Managed compliance with debt covenants. • Designated Finance lead for cross-functional projects including: o Developing systematic tracking of cloud costs for determination of customer margin, o Designing playbook for contract terms, contract approval workflow, and customer overage billing policy, o Structuring product skus and establishing discount ranges, o Developing equity compensation policy including Option and RSU, o Designing policy around approval of employee compensation changes. • Managed corporate insurance policies (D&O and E&O). • Led preparation of Board materials and was responsible for communication to the Audit Committee. • Managed financial reporting and technical accounting including ASC 606 revenue recognition (SaaS, license, services, hardware, and training); ASC 340 commission capitalization; ASC 842 lease accounting; ASC 718 share based compensation including common stock valuation (BSM), tender offer, option repricing and secondary sales; ASC 350 capitalization of internal-use software; ASC 326 current expected credit loss; equity and debt financing including derivative accounting. • Managed accounting operations with Day+6 close; reduced close timeline by working with Engineering on developing a system for tracking customer cloud costs. • Managed ~9 international subsidiaries including local accounting, payroll, legal compliance, tax compliance and consolidation; led development of new subsidiaries. • Coordinated audit of annual financial statements by Big4 auditor; closed multiple consecutive audits with no audit observations. • Managed relationship with Big4 tax provider and oversaw preparation of tax provision and filing of tax returns. KPMG LLP, USA Audit Senior Manager (2019 – 2021), Audit Manager (2017 –2019), Audit Senior (2014 – 2017) 2014 – 2021 • Managed and executed audits in the technology industry with exposure to US GAAP and compliance with PCAOB requirements. Clients included public companies, primarily greater than $1B in revenue, which were key players in the SaaS video-conferencing and semi-conductor equipment manufacturing space. • Supervised teams up to ~20 employees comprising of managers, seniors, and staff across audit, tax, and IT. • Managed and coordinated audit procedures related to SEC reporting and compliance with internal controls in accordance with SOX 404 requirements for public companies. • Audit experiences include: o IPO, first year SOX implementation, equity and debt issuance, and business carve-outs, o Implementation of new audit standards including ASC 606 revenue recognition, ASC 340 commission capitalization, ASC 842 lease accounting and ASC 326 current expected credit loss, o Technical accounting related to ASC 805 business combination, ASC 718 share based compensation, ASC 350 capitalization of internal-use software and ASC 330 inventory. • Participated in multiple firm initiatives including implementation of new audit methodology, development of audit sampling methodology, implementation of D&A in audit including use of Power BI and Alteryx, and Audit National trainings. KPMG Global Delivery Center, India Assistant Manager, Audit • Provided audit support to US engagement teams in the technology sector. PwC Service Delivery Center, India Senior Associate, Audit • Provided audit support to US engagement teams in the manufacturing sector. 2013 – 2014 2011 – 2013 Audit Intern at regional accounting firm, India 2007 – 2010 EDUCATION & CERTIFICATION • Certified Public Accountant (active) • Chartered Accountant (inactive) • CIMA Adv.Dip.MA (inactive) • Bachelor of Commerce SKILLS & SOFTWARE California, USA Kolkata, India London, UK Kolkata, India NetSuite, Coupa, Salesforce, Shareworks, Anaplan, Floqast, Avalara, Navan, Expensify.',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/a5b6ac95-5083-491c-8b35-88c5338ff834.pdf',
  },
  {
    email: 'mark@mdschindel.com',
    avatar: null,
    city: 'Chicago',
    state: 'Illinois',
    country: 'United States',
    first_name: 'Mark',
    last_name: 'Schindel',
    linkedin: '',
    phone: '+13129615665',
    current_company: 'IROQUOIS VALLEY FARMLAND REIT',
    timezone: null,
    current_job_title: 'Chief Financial Officer',
    resume_json: {
      basics: {
        email: 'Mark@MDSchindel.com',
        phone: '312.961.5665',
        social: [],
        lastName: 'SCHINDEL',
        linkedIn: null,
        location: {
          city: 'Chicago',
          state: 'IL',
          country: '',
        },
        firstName: 'MARK',
        currentCompany: 'IROQUOIS VALLEY FARMLAND REIT',
        currentJobTitle: 'Chief Financial Officer',
        totalExperienceInMonths: 364,
      },
      skills: [
        'Financial Analysis',
        'Strategic Planning',
        'Financial Forecasting',
        'Financial Modeling',
        'Valuation',
        'Project Management',
        'Accounting',
        'Budgeting',
        'Reporting',
        'Deal Structuring',
        'Raising Capital',
      ],
      schools: [
        {
          end: {
            year: 1990,
            month: null,
          },
          gpa: null,
          field: 'Concentrations in finance, accounting, and marketing',
          start: {
            year: 1989,
            month: null,
          },
          degree: 'Masters of Business Administration',
          institution:
            'J.L. Kellogg Graduate School of Management, Northwestern University',
        },
        {
          end: {
            year: 1985,
            month: null,
          },
          gpa: null,
          field: '',
          start: {
            year: 1981,
            month: null,
          },
          degree: 'Bachelor of Science, Finance',
          institution: 'University of Illinois, Urbana',
        },
      ],
      overview:
        'Mark is a Chief Financial Officer at IROQUOIS VALLEY FARMLAND REIT with expertise in Financial Analysis, Strategic Planning, and Financial Forecasting.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: 2024,
            month: null,
          },
          org: 'IROQUOIS VALLEY FARMLAND REIT',
          level: 'Senior-level',
          start: {
            year: 2019,
            month: null,
          },
          title: 'Chief Financial Officer',
          location: 'Evanston, IL',
          description:
            'Led the Company’s accounting, tax, financial reporting, internal controls, banking, cash management, and financial planning and analysis, working closely with the CEO. Served as a member of the Board finance and investment committees and helped structure proposed investments and work through troubled investments.',
        },
        {
          end: {
            year: 2019,
            month: null,
          },
          org: 'MyIRE, INC.',
          level: 'Senior-level',
          start: {
            year: 2017,
            month: null,
          },
          title: 'Chief Financial Officer',
          location: 'Chicago, IL',
          description:
            'Responsible for all financial, accounting, and HR functions. Developed forecasts, financial models, and pricing strategies. Assisted with revenue generation and marketing efforts.',
        },
        {
          end: {
            year: 2017,
            month: null,
          },
          org: 'BOW TRUSS COFFEE ROASTERS / AQUANAUT BEER / NEXT DOOR CAFÉ / DOEJO / SPACE',
          level: 'Senior-level',
          start: {
            year: 2015,
            month: null,
          },
          title: 'Chief Financial Officer',
          location: 'Chicago, IL',
          description:
            'Responsible for all funding, financing, budgeting, forecasting, reporting, and accounting matters for five businesses with approximately $10 million of combined revenue.',
        },
        {
          end: {
            year: 2015,
            month: null,
          },
          org: 'MDS CO.',
          level: 'Senior-level',
          start: {
            year: 2009,
            month: null,
          },
          title: 'Independent consulting firm',
          location: 'Chicago, IL',
          description:
            'Worked for senior management to conduct financial due diligence and assess the business strategy of a company that sought a Designed a capital structure to be used for fundraising from outside investors. Completed a detailed financial model incorporating several forecasted growth scenarios and deal structures.',
        },
        {
          end: {
            year: 2009,
            month: null,
          },
          org: 'PRIVATE INVESTOR',
          level: 'Mid-level',
          start: {
            year: 2003,
            month: null,
          },
          title: 'Investment Management',
          location: 'Chicago, IL',
          description:
            'Managed my personal stock portfolio consisting primarily of shares of undervalued companies with a high dividend yield and a low ratio of stock price to book value.',
        },
        {
          end: {
            year: 2003,
            month: null,
          },
          org: 'AMERICAN CAPITAL, LTD.',
          level: 'Senior-level',
          start: {
            year: 1998,
            month: null,
          },
          title: 'Principal',
          location: 'Chicago, IL',
          description:
            'Responsible for sourcing, analyzing, pricing, structuring, negotiating, acquiring, managing and exiting investments. Managed all qualitative and quantitative aspects of due diligence including assessment of a target’s risks, opportunities, and potential exit strategies. Selected and coordinated the work of accountants, lawyers and consultants. Analyzed a target’s products, competitive position, operations, assets, liabilities, revenue streams, cost structure, and cash flow. Conducted post-close integration planning, regulatory and compliance checks; systems reviews, and management assessments. Participated in the closing of seven transactions employing over $160 million of senior debt, subordinated debt, preferred stock and common stock. Negotiations involved co-investors, management teams, sellers and lenders. Portfolio management responsibilities included: planning and executing the corporate strategy at the board level; assisting management in identifying, analyzing and closing acquisitions; assessing new products and markets; raising debt capital, designing covenants, recruiting senior executives, and performing quarterly valuations. Served on six boards of directors. Opened the Chicago office and recruited professional and administrative staff. Responsible for developing a budget and managing to an office P&L.',
        },
        {
          end: {
            year: 1998,
            month: null,
          },
          org: 'PENNINGTON PARTNERS & CO.',
          level: 'Senior-level',
          start: {
            year: 1995,
            month: null,
          },
          title: 'Managing Director',
          location: 'Chicago, IL',
          description:
            'Participated in the analysis, pricing, structuring, negotiations and closing of four private equity deals employing over $33 million of equity capital. Negotiations involved management teams, sellers, and lenders. Served on two boards of directors. Assisted portfolio companies with capital raising and drafting of investment memorandums.',
        },
        {
          end: {
            year: 1994,
            month: null,
          },
          org: 'GOLDER, THOMA, CRESSEY, RAUNER, INC. (“GTCR”)',
          level: 'Mid-level',
          start: {
            year: 1990,
            month: null,
          },
          title: 'Associate',
          location: 'Chicago, IL',
          description:
            "Formed a corporation to build a major company in the staffing industry. Recruited a management team and negotiated and documented the terms surrounding the formation of the company. Invested $15 million of equity to acquire six businesses in 14 months with a combined purchase price of $69 million. Raised over $200 million of acquisition debt financing from outside parties. Recruited outside executives to serve on the company’s board of directors. Over the next six years, GTCR recorded approximately $350 million in gains on this investment, resulting in the highest IRR in GTCR history. Negotiated settlements with two troubled portfolio companies and their lenders. Successfully recouped a significant portion of GTCR's original investment.",
        },
        {
          end: {
            year: 1989,
            month: null,
          },
          org: 'PETERSON & COMPANY CONSULTING',
          level: 'Mid-level',
          start: {
            year: 1985,
            month: null,
          },
          title: 'Senior Consultant',
          location: 'Chicago, IL/San Francisco, CA',
          description:
            "Studied corporation's decision-making processes and developed methodologies to identify reasons for cost increases in a $6 billion construction project. Evaluated adversary's cost analysis and formulated rebuttal testimony.",
        },
      ],
      certificates: [],
    },
    resume_text:
      "MARK D. SCHINDEL Mark@MDSchindel.com Chicago, IL 60626 312.961.5665 Seasoned self-starting professional with a broad skill set including financial analysis, strategic planning, financial forecasting and modeling, valuation, project management, accounting, budgeting, reporting, deal structuring, and raising capital. EXPERIENCE IROQUOIS VALLEY FARMLAND REIT; Evanston, IL An organic farmland real estate investment trust with approximately $100 million of assets under management. Chief Financial Officer • Led the Company’s accounting, tax, financial reporting, internal controls, banking, cash management, and financial planning and analysis, working closely with the CEO. Served as a member of the Board finance and investment committees and helped structure proposed investments and work through troubled investments. • 2019 - 2024 • Assisted with raising capital through our Reg A offering, bank debt, and Reg D note offerings. • Responsible for SEC reporting. • Raised underwriting standards to reduce bad debt expense and investment write-downs. • Created a five-year financial plan geared towards improving profitability. MyIRE, INC.; Chicago, IL Markets a blockchain powered software platform that drastically reduces the cost and time to complete medical clinical trials. Chief Financial Officer • Responsible for all financial, accounting, and HR functions. • Developed forecasts, financial models, and pricing strategies. • Assisted with revenue generation and marketing efforts. 2017 - 2019 BOW TRUSS COFFEE ROASTERS / AQUANAUT BEER / NEXT DOOR CAFÉ / DOEJO / SPACE; Chicago, IL 2015 - 2017 Group of individual food and technology businesses under common ownership. Responsible for all funding, financing, budgeting, forecasting, reporting, and accounting matters for five businesses with approximately $10 million of combined revenue. Chief Financial Officer • • Supported owners’ successful efforts to raise $1.7 million of equity capital and $1.5 million of long-term debt. • Led the accounting and financial aspects for an expansion from three to 11 Bow Truss cafes. • Built financial models, flash reports, and five-year forecasts focusing on cash needs, key metrics and fixed vs. variable costs. • Focused team on improving Bow Truss gross margin per pound sold and reducing food waste, thereby improving profitability by Redesigned all systems, reporting and controls for each business. $132 thousand per year. • Pushed to reduce Bow Truss labor costs, resulting in a labor minutes per customer check falling from 10 to 8 for an annualized savings of over $250 thousand per year. • Developed a return on asset profit methodology to apply to all asset purchases and leases. • Initiated a monthly employee incentive program based on café growth and profitability. • Managed relationships with and reporting to investors, bankers, lenders, and vendors. • Worked closely with the owners to shape the vision and direction for each of the companies and to evaluate how well any initiative fit into a company's long-term strategy. • Worked closely with legal counsel to negotiate leases, contracts, and other agreements. MDS CO.; Chicago, IL Independent consulting firm offering outsourced financial and strategic analysis. Publishing Company • • International Charitable Organization • Worked for senior management to conduct financial due diligence and assess the business strategy of a company that sought a Designed a capital structure to be used for fundraising from outside investors. Completed a detailed financial model incorporating several forecasted growth scenarios and deal structures. 2009 - 2015 multimillion-dollar grant from the charity. Valuation Services Group of an International Consulting Firm • Recommended and implemented improvements to the quality of valuation methodologies, analyses, and reporting for the client portfolio companies’ monthly valuations. MARK D. SCHINDEL Mark@MDSchindel.com Chicago, IL 60626 312.961.5665 PRIVATE INVESTOR; Chicago, IL Investment Management • Managed my personal stock portfolio consisting primarily of shares of undervalued companies with a high dividend yield and a low 2003 - 2009 ratio of stock price to book value. 1998 - 2003 AMERICAN CAPITAL, LTD.; Chicago, IL Publicly traded middle market buyout fund approximately $84 billion of assets under management. Principal • Responsible for sourcing, analyzing, pricing, structuring, negotiating, acquiring, managing and exiting investments. Managed all qualitative and quantitative aspects of due diligence including assessment of a target’s risks, opportunities, and potential exit strategies. Selected and coordinated the work of accountants, lawyers and consultants. Analyzed a target’s products, competitive position, operations, assets, liabilities, revenue streams, cost structure, and cash flow. Conducted post-close integration planning, regulatory and compliance checks; systems reviews, and management assessments. Participated in the closing of seven transactions employing over $160 million of senior debt, subordinated debt, preferred stock and common stock. Negotiations involved co-investors, management teams, sellers and lenders. Portfolio management responsibilities included: planning and executing the corporate strategy at the board level; assisting management in identifying, analyzing and closing acquisitions; assessing new products and markets; raising debt capital, designing covenants, recruiting senior executives, and performing quarterly valuations. Served on six boards of directors. Opened the Chicago office and recruited professional and administrative staff. Responsible for developing a budget and managing to an office P&L. • • • • PENNINGTON PARTNERS & CO.; Chicago, IL Private equity investment firm with $90 million under management. Managing Director • Participated in the analysis, pricing, structuring, negotiations and closing of four private equity deals employing over $33 million of equity capital. Negotiations involved management teams, sellers, and lenders. Served on two boards of directors. Assisted portfolio companies with capital raising and drafting of investment memorandums. • 1995 - 1998 1990 - 1994 GOLDER, THOMA, CRESSEY, RAUNER, INC. (“GTCR”); Chicago, IL Private equity investment firm with over $10 billion invested. Associate • Formed a corporation to build a major company in the staffing industry. Recruited a management team and negotiated and documented the terms surrounding the formation of the company. Invested $15 million of equity to acquire six businesses in 14 months with a combined purchase price of $69 million. Raised over $200 million of acquisition debt financing from outside parties. Recruited outside executives to serve on the company’s board of directors. Over the next six years, GTCR recorded approximately $350 million in gains on this investment, resulting in the highest IRR in GTCR history. Negotiated settlements with two troubled portfolio companies and their lenders. Successfully recouped a significant portion of GTCR's original investment. • PETERSON & COMPANY CONSULTING; Chicago, IL/San Francisco, CA National firm providing assistance in the analysis of financial matters related to the resolution of business disputes. Senior Consultant • Studied corporation's decision-making processes and developed methodologies to identify reasons for cost increases in a $6 billion 1985 - 1989 construction project. Evaluated adversary's cost analysis and formulated rebuttal testimony. EDUCATION J.L. Kellogg Graduate School of Management, Northwestern University, Evanston, IL Masters of Business Administration, Concentrations in finance, accounting, and marketing University of Illinois, Urbana, IL Bachelor of Science, Finance 1989 - 1990 1981 - 1985 2 of 2",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/e4c8c8e5-4ae4-4efe-9fb2-230131c759b4.pdf',
  },
  {
    email: 'mitulsdoshi@yahoo.com',
    avatar: null,
    city: null,
    state: null,
    country: null,
    first_name: 'Mitul ',
    last_name: 'Doshi',
    linkedin: 'https://www.linkedin.com/company/aglint-ai/',
    phone: '4086442927',
    current_company: 'Presto Automation Inc.',
    timezone: null,
    current_job_title: 'Senior Finance and Accounting Leader',
    resume_json: {
      basics: {
        email: 'mitulsdoshi@yahoo.com',
        phone: '644-2927',
        social: [],
        lastName: 'Doshi',
        linkedIn: null,
        location: null,
        firstName: 'Mitul',
        currentCompany: 'Presto Automation Inc.',
        currentJobTitle: 'Senior Finance and Accounting Leader',
        totalExperienceInMonths: 276,
      },
      skills: [
        'US GAAP',
        'IPO Due Diligence',
        'SPAC',
        'External Audits',
        'External Tax Filings',
        'SOX Implementation',
        'Oracle',
        'Net Suite',
        'SAP',
        'Quick Books',
        'Hyperion',
        'FRX Report Writer',
        'Google Sheets & Docs',
        'Microsoft Excel',
        'Word',
        'Power Point',
        'Merrill Bridge SEC filing portal',
        'Merrill Bridge SEC Section 16 Connect',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accounting',
          start: {
            year: null,
            month: null,
          },
          degree: 'Master of Science in Accounting',
          institution: 'Bentley College',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accounting Major',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Commerce',
          institution: 'University of Bombay',
        },
      ],
      overview:
        'Mitul Doshi is a Senior Finance and Accounting Leader at Presto Automation Inc. With expertise in US GAAP, IPO Due Diligence, and SPAC, Mitul brings extensive knowledge in financial reporting and compliance to the table.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'Presto Automation Inc.',
          level: 'Senior-level',
          start: {
            year: 2021,
            month: 5,
          },
          title: 'Corporate Controller',
          location: 'May 2021-Present',
          description:
            'Worked through the SPAC IPO process and merger accounting. Built and trained very lean accounting team for public readiness (3 accountants). Completed 2 years of audit including full equity accounting and completed technical accounting positions for certain business situations for the company. Completed NetSuite Implementation of Core Financial Statements within 2 months in parallel to annual audit and a successful SPAC process. Successfully stood up the SEC function. Onboarded Operations function and legal function while the leadership was going through changes, successfully transitioned CFO and was accommodating CFO responsibilities until replacement. Inventory Accounting Clean Up and developing controls for inventory costing and reconciliation process. Strategically suggested action plan for SOX design and planning process. Completed technology acquisition of a small company during the SPAC process. Provided leadership in implementing and documenting processes to highlight gap and risks within the financial reporting process. Formed international subsidiaries and recommended legal and tax structure. Responsible and managing third party tax accountants and tax filings for the company. Worked on fair value of convertible debt and understanding inputs and Monte Carlo simulations. Worked through Customer pricing arrangements and tightened and implemented sales commission plan.',
        },
        {
          end: {
            year: 2021,
            month: 5,
          },
          org: 'Signifyd, Inc.',
          level: 'Senior-level',
          start: {
            year: 2016,
            month: 10,
          },
          title: 'Director of Finance (Revenue and International Operations)',
          location: 'October 2016-May 2021',
          description:
            'Managed Revenue and International Operations. Managed cash flow by managing the SO to cash process (Increased collections Efforts and decreased DSO by 8 days cash flow increased by $300K a month). Create effective credit policies to manage customer payment terms. Revenue Forecasting and analyzing revenue streams and customer margins determining ASC 606 Revenue application. Cash Forecasting and financial statements. Handling Enterprise Customer Accounts and determining accounting treatment. Determining losses on Customer Accounts to help in determining customer margins. Set up Brazil and Mexico Operations and Set up. Determine legal process of the set up and hire relevant service providers. Work with local accountants on legal, HR and Accounting Compliance. Responsible for managing year end audit. Responsible for managing tax fillings. Any audit and tax compliance issues. Managing risk and insurance policies for the Company. Build and manage an accounting team to address business needs. Managing 4 direct reports on the operational side of the business, charting out business process flows to maximize resource utilization. Able to create processes on the operational side of the business to maximize efficiency. Manage external auditors and tax accountants-completed first company audit. Develop documentation and provide GAAP guidance for business transactions, in the absence of high- level accounting professionals. Improvise existing processes to scale with the growing business needs. Facilitate Financial Planning and business modeling needs. Maximized resources and developed process efficiencies to bring the close days down to 8 days from 15 days. Suggested system implementation and resource planning and completed NetSuite Implementation',
        },
        {
          end: {
            year: 2016,
            month: 7,
          },
          org: 'Aquantia Corporation',
          level: 'Senior-level',
          start: {
            year: 2012,
            month: 3,
          },
          title: 'Corporate Controller',
          location: 'March 2012-July 2016',
          description:
            'Built and trained an accounting team of 6 people in various accounting functions to manage growth. Provide oversight and direction to all accounting levels and international subsidiaries. Implemented internal controls and processes surrounding the financial statements reporting and general ledger. Write and Implement accounting policies and procedures. Maintain internal audit processes. Implemented processes with the newly created sales order team and worked with the Inventory group to bring the Manufacturing system live. Managed system implementation project and organized the group to best achieve efficiency and productivity. Management of 2 subsidiaries to ensure consolidations and subsidiary ledgers adhere to GAAP requirements. Managed Internal and external audit, including directing and working with all levels of auditors to achieve efficiency. Worked on debt agreements and revenue contracts with certain customers on revenue recognition issues. Worked on financing agreements to achieve best financing terms to align with business environment and business needs. Responsible for leading month end closes and preparing full set of financial statements and management and investor packages. Manage general ledger, accounts payable and stock administration and payroll. Make system improvements and suggestions and streamlining processes to optimize resources. Manage tax return preparation and handle technical memos as the business situation arises. Manage chart of accounts as the company entered production stage and make suggestions to eliminate manual processes. Write position papers on contract revenue accounting with multiple deliverables. Also responsible for writing technical memos and position memos for technical issues facing the business, including capitalizing inventory on books and recording research and development expenses. Work on financial forecasts, budgeting, and planning with CFO to create financial models. Closely worked with Human Resources to set up benefits plan and bonus plan to best align with business objectives.',
        },
        {
          end: {
            year: 2012,
            month: 3,
          },
          org: 'Calix, Inc.',
          level: 'Senior-level',
          start: {
            year: 2008,
            month: 10,
          },
          title: 'SEC & Technical Accounting Manager',
          location: 'October 2008-March 2012',
          description:
            'Responsible for drafting and filing of the Forms 10-Q, 10-K, 8-K, S-8, Def 14A. Responsible for all XBRL related matters. SOX compliance related to external reporting process and equity. Responsible for coordinating external reporting with external auditors. Worked on Topic 805 and Topic 718 in connection with the merger. Worked on technical accounting memos related to revenue recognition policy, restricted stock awards and other merger related matters. Worked on technical position paper on performance related grants and its application and drafting related disclosures.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Mitul S. Doshi, CPA, (Active) mitulsdoshi@yahoo.com  644-2927 Senior Finance and Accounting Leader: Seasoned Controller, Operational finance, SEC Reporting, Financial Planning and Analysis • Top performing well-rounded and hands-On Certified Public Accountant, results oriented, performer, very disciplined combined with excellent work ethics. Values accuracy and teamwork and trains staff to achieve common company goals. Works well with all levels of management. Has a unique ability and background to blend in any kind and level of accounting role and work the way through to achieve common business objectives. AREAS OF EXPERTISE AND SYSTEMS SKILLS Areas of Expertise US GAAP IPO Due Diligence, SPAC External Audits External Tax Filings (Corporate & State) set up and International subsidiary management SOX Implementation and Management Systems Skills Oracle, Net Suite, SAP, Quick Books Hyperion, FRX Report Writer Google Sheets & Docs Microsoft Excel, Word, Power Point Merrill Bridge SEC filing portal Merrill Bridge SEC Section 16 Connect EDUCATION AND PROFESSIONAL QUALIFICATIONS • California CPA credential (Active), general license, Form G. • Master of Science in Accounting, Bentley College, Waltham, MA. • Bachelor of Commerce, Accounting Major. University of Bombay, India. 1 PROFESSIONAL EXPERIENCE Presto Automation Inc. May 2021-Present Restaurant Technology Business offers AI digital voice and vision solution to hospitality businesses. Head Count=165 Employees, Revenue=$30M Annually Achievements: Completed 2 years of PCAOB audit and Implemented Net Suite in 7 months of starting with the Company, SPAC process, Filed Form S-4, Built a full functioning Accounting Team, Stood up public facing SEC reporting function, Managed Technical Accounting Team, reduced close cycle to 10 days from 30 days, documented accounting processes and trained a very lean accounting team for public readiness, Helped onboarding senior level functions including interim CFO and Operations roles. Corporate Controller • Worked through the SPAC IPO process and merger accounting. • Built and trained very lean accounting team for public readiness (3 accountants) • Completed 2 years of audit including full equity accounting and completed technical accounting positions for certain business situations for the company. • Completed NetSuite Implementation of Core Financial Statements within 2 months in parallel to annual audit and a successful SPAC process. • Successfully stood up the SEC function • Onboarded Operations function and legal function while the leadership was going through changes, successfully transitioned CFO and was accommodating CFO responsibilities until replacement. Inventory Accounting Clean Up and developing controls for inventory costing and reconciliation process. • • Successfully and strategically suggested action plan for SOX design and planning process. • Completed technology acquisition of a small company during the SPAC process. • Provided leadership in implementing and documenting processes to highlight gap and risks within the financial reporting process. • Formed international subsidiaries and recommended legal and tax structure. • Responsible and managing third party tax accountants and tax filings for the company. • Worked on fair value of convertible debt and understanding inputs and Monte Carlo simulations. • Worked through Customer pricing arrangements and tightened and implemented sales commission plan. 2 Signifyd, Inc. October 2016-May 2021 Ecommerce SAAS Company, privately held. Privately held Ecommerce SAAS Company Head Count=270 Employees, Revenue=less than $100M Annually Achievements: Process Improvements on the operational side of the business, completed first audit for the Company with minimal resources and reduced the close time from 15 days to 8 days and implemented NetSuite with various software integrations, along with international operations set up. Director of Finance (Revenue and International Operations) Revenue Operations • Manage Revenue and International Operations • Manage cash flow by managing the SO to cash process (Increased collections Efforts and decreased DSO by 8 days cash flow increased by $300K a month) • Create effective credit policies to manage customer payment terms. • Revenue Forecasting and analyzing revenue streams and customer margins determining ASC 606 Revenue application. • Cash Forecasting and financial statements • Handling Enterprise Customer Accounts and determining accounting treatment. • Determining losses on Customer Accounts to help in determining customer margins. International Operations • Set up Brazil and Mexico Operations and Set up • Determine legal process of the set up and hire relevant service providers. • Work with local accountants on legal, HR and Accounting Compliance Other Responsibilities • Responsible for managing year end audit. • Responsible for managing tax fillings. • Any audit and tax compliance issues • Managing risk and insurance policies for the Company Controller • Build and manage an accounting team to address business needs. • Managing 4 direct reports on the operational side of the business, charting out business process flows to maximize resource utilization. • Able to create processes on the operational side of the business to maximize efficiency. • Manage external auditors and tax accountants-completed first company audit. • Develop documentation and provide GAAP guidance for business transactions, in the absence of high- level accounting professionals. Improvise existing processes to scale with the growing business needs. • • Facilitate Financial Planning and business modeling needs. • Maximized resources and developed process efficiencies to bring the close days down to 8 days from 15 days. • Suggested system implementation and resource planning and completed NetSuite Implementation 3 Aquantia Corporation, Milpitas, CA. March 2012-July 2016 Fabless Semiconductor Company privately held. Head Count=250 Employees, Annual Revenue=$180M. Achievements: Filed first S-1 for the Company with limited resources while being the Controller for the Company. Received CEO Award for taking Ownership and Responsibility. Corporate Controller • Built and trained an accounting team of 6 people in various accounting functions to manage growth. Provide oversight and direction to all accounting levels and international subsidiaries. Implemented internal controls and processes surrounding the financial statements reporting and general ledger. Write and Implement accounting policies and procedures. Maintain internal audit processes. Implemented processes with the newly created sales order team and worked with the Inventory group to bring the Manufacturing system live. • • • Managed system implementation project and organized the group to best achieve efficiency and productivity. • Management of 2 subsidiaries to ensure consolidations and subsidiary ledgers adhere to GAAP requirements. • Managed Internal and external audit, including directing and working with all levels of auditors to achieve efficiency. • Worked on debt agreements and revenue contracts with certain customers on revenue recognition issues. • Worked on financing agreements to achieve best financing terms to align with business environment and business needs. • Responsible for leading month end closes and preparing full set of financial statements and management and investor packages. • Manage general ledger, accounts payable and stock administration and payroll. • Make system improvements and suggestions and streamlining processes to optimize resources. • Manage tax return preparation and handle technical memos as the business situation arises. • Manage chart of accounts as the company entered production stage and make suggestions to eliminate manual processes. • Write position papers on contract revenue accounting with multiple deliverables. Also responsible for writing technical memos and position memos for technical issues facing the business, including capitalizing inventory on books and recording research and development expenses. • Work on financial forecasts, budgeting, and planning with CFO to create financial models. • Closely worked with Human Resources to set up benefits plan and bonus plan to best align with business objectives. 4 Calix, Inc. Petaluma, CA October 2008-March 2012 (Acquired Occam Networks, Inc.) Calix, Inc. designs and develops broadband communications equipment. Size; Annual Revenue: approximately $287 million and approximately 600 employees. Calix completed Occam Network’s acquisition on February 22, 2011. Achievements: Contributed to Fair value Accounting of Purchase Price Allocation of stock options and achieved external reporting process finalization for the Company. SEC & Technical Accounting Manager Responsible for all SEC filings, Technical Accounting and Equity Accounting. • Responsible for drafting and filing of the Forms 10-Q, 10-K, 8-K, S-8, Def 14A. • Responsible for all XBRL related matters. • SOX compliance related to external reporting process and equity. • Responsible for coordinating external reporting with external auditors. • Worked on Topic 805 and Topic 718 in connection with the merger. • Worked on technical accounting memos related to revenue recognition policy, restricted stock awards and other merger related matters. • Worked on technical position paper on performance related grants and its application and drafting related disclosures. Occam Networks, Inc. Fremont, CA. (Acquired by Calix) Until - Feb 2011 Occam Networks, Inc. designs and develops broadband communications equipment. Size: Annual Revenue approximately $90 million and approximately 190 employees. Manager - SEC & Technical Accounting Responsible for all SEC filings, Equity Accounting and Administration and researching technical accounting issues and applying to actual business situations. External Reporting Responsibilities • Responsible for managing and filing of quarterly and annual reportsQ, 10-K, S-8, Proxy, Filing of Forms 4, Forms 3. Setting up proxy dates and working with the lawyers on disclosure items. Successfully cut down the filing costs significantly by streamlining the entire external reporting process. • Worked on merger related communication reporting and Form S-4 and coordinating with lawyers and auditors on various documents and comments. • Research various disclosure related matters and SEC and GAAP disclosure requirements. Successfully was able to arrive at conclusions on various technical matters. • Update new technical and disclosure matters related to specific business needs. • Responsible for coordinating the flow and information on the Earnings Release and Conference Call Script. • Working with the external auditors and lawyers closely on resolving their questions and comments related to external reporting and coordinating audits and reviews with internal members and the auditors. 5 Technical Accounting Responsibilities • Writing and updating technical memos on various technical matters such as Revenue Recognition-SAB 104, SFAS Topic 718(SFAS 123R)-Accounting for stock-based compensation-Performance Awards and Forfeiture Rate Application and Analysis, SFAS 146, Accounting for Costs Associated with Exit or Disposal Activities, SFAS 5 – Accounting for Contingencies, SFAS 109 & FIN 48-Accounting for Income Taxes- Reviewing and helping tax accountants to get correct information for tax compliance. SFAS 157 –Evaluating implementation for other assets and liabilities. Involved in research on warrants granted and outstanding and suggesting adjusting entries and related disclosure requirements. • • Directing general accounting team on GAAP and technical compliance. General Accounting Responsibilities: • Responsible for managing stock administration function and equity accounting including SFAS 123R valuations and accounting. Also responsible for shareholder inquiries and communication. • Responsible for preparing Financial Statements for external reporting. • Responsible for improving and increasing the efficiency of the internal processes in External Reporting and Equity Function. • Directly worked with lawyers on reconciling equity reserves. • Assisting and supporting the tax accountants on providing various tax related documents. • Other Special Research Projects as assigned. Centillium Communications, Inc. Fremont, CA. May 2006-Oct 2008 Centillium Communications, Inc. develops designs and markets, systems on a chip solution for various broadband access infrastructures. Size: Approximately 200 employees (before Transwitch Acquisition), Quarterly Revenue approximately: $6 million. Achievements: Built and trained a general accounting team. Accounting Manager • Managing and supervising stock administration, equity accounting, subsidiary functions, and general ledger functions. Managed a staff of two in the accounting department. • Closely managing accounting close function, including account reconciliations and financial statements for internal reporting. Also proposed ways to refine the closing process for a more efficient closing. Also responsible for co-ordination and timing of the external audits and reviews and responsible for resolving any technical accounting issues. • Managing consolidations and interfacing with six international subsidiaries on various issues. • Responsible for all FAS123R related accounting and related issues. • Preparation of SEC reporting footnotes on the Quarterly and Annual filings, Proxy Statements and Form S-8. • Trained personnel for cash, payroll, general accounting functions and stock administration and utilized available resources in the most efficient manner. Interfacing with the outside tax accountants to provide tax schedules for corporate tax returns. • • Researching and writing technical accounting memos on technical accounting issues such as FIN 48, FAS 157 & FAS 159, FAS 5, FAS 2 and other issues that might arise. • Other special accounting projects as assigned. 6 Avanex Corporation Fremont, CA. May 2003-June 2005 Avanex Corporation, together with its subsidiaries, engaged in the design, manufacture, and marketing of fiber optic-based products. Size: Approximately 1,000 Employees and Revenue Approximately $106 million annually. Achievements: Achieved GAAP consolidations of various entities acquired and assisted in setting up Intercompany accounts and reconciliations. Senior Accountant • • Assist the Controller in SEC filings like the Forms 10-Q, 10-K. Preparation of Financial Statements Footnotes and Support. Work with worldwide locations for information for SEC purposes and interact with the auditors for SEC documents and support. • Maintain and prepare Quarterly GAAP Disclosure checklist. • Responsible for revenue recognition on a worldwide basis. Responsible for reviewing and comprehending customer contracts and terms of shipments on a worldwide basis. • Review procedures for Sarbanes and Oxley testing for responsible sections. • Maintain deferred revenue schedule and reconcile revenue and cost. • Reconcile Intercompany Revenue and Intercompany COGS between locations. • Manage and record intercompany transactions on a worldwide basis and record elimination entries for consolidation purposes. • Responsible for closing entries and Balance Sheet Account Reconciliations. • Special projects as assigned by the Controller. Tripath Technology Inc., San Jose, CA. July 1999-May 2003 Tripath Technology, Inc. designed and sold amplifiers based on their proprietary Digital Power processing technology. Size: 80 employees Annual Revenue approximately: $13 million. Achievements: Assisted the Controller through the IPO due diligence process and helped in successfully filing Form S-1 for the Company. Senior Accountant • Was a key member on the due diligence team for the preparation and documentation of the filing of the form S-1. • Assist the Controller in SEC filings like the Forms 10-Q, 10-K and interact with the auditors for SEC documents and work on special projects assigned by the Controller. • Responsible for driving the entire closing process and achieving process improvements in the monthly closing process by reducing the total time for closing books from 5 days to 3 days. Also responsible for researching technical accounting positions as the situation arises. • Maintain stock options software for grants, exercises and terminations including ESPP transactions. Also responsible for FAS 123 calculations for disclosure requirements. • Responsible for preparing monthly consolidated financial statements package and monthly operating expenses detail for P&L trend and fluctuation analysis. Set up worksheets for translating the international financial statements from local currency to US dollars. Also responsible for interacting with the subsidiary’s accountants for various accounting (US GAAP) related issues. • Work on audit schedules for quarterly reviews and year-end audits. Work closely with the auditors and provide them with the requested schedules and support. 7',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/69f190de-348d-4b45-9c3b-dd8692d7ad56.pdf',
  },
  {
    email: 'dimitar.zelenkov.cpa@gmail.com',
    avatar: null,
    city: null,
    state: null,
    country: null,
    first_name: 'Dimitar',
    last_name: 'Zelenkov',
    linkedin: '',
    phone: '6507351131',
    current_company: 'Luma Health',
    timezone: null,
    current_job_title: 'Controller',
    resume_json: {
      basics: {
        email: 'dimitar.zelenkov.cpa@gmail.com',
        phone: null,
        social: [],
        lastName: 'Zelenkov',
        linkedIn: 'https://www.linkedin.com/in/dimitar-zelenkov-cpa/',
        location: null,
        firstName: 'Dimitar',
        currentCompany: 'Luma Health',
        currentJobTitle: 'Controller',
        totalExperienceInMonths: 240,
      },
      skills: [
        'Excel Expert',
        'MS Office',
        'QuickBooks',
        'Paylocity',
        'Salesforce',
        'Anaplan',
        'Intacct',
        'CHR',
        'Paycom',
        'Solium CapMx',
        'Carta',
        'Bill.com',
        'Monthly and annual close',
        'Financial reporting',
        'FP&A',
        'External audit',
        'Operational efficiency and automation',
        'ERP implementations',
        'PEO migration to Trinet and ADP',
        'Taxation',
        'M&A',
        '13-week cash flow liquidity',
        'Project management',
        'Internal controls development',
        'Supervision, training, mentoring',
        'Critical thinking',
        'Internal control',
        'Legal compliance',
        'Risk management',
        'Policy development',
        'Financial models development',
        'Long-term strategic planning',
        'Continuous learning',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Business Administration',
          start: {
            year: null,
            month: null,
          },
          degree: 'CPA prerequisite',
          institution: 'BA in Business Administration',
        },
      ],
      overview:
        'Dimitar Zelenkov is a Controller at Luma Health with expertise in Excel, MS Office, and QuickBooks.',
      projects: [],
      languages: ['Bulgarian', 'Russian', 'Macedonian'],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Robert Half, Controller’s Group, DeWinter, Centre Lane',
          level: 'Mid-level',
          start: {
            year: 2020,
            month: null,
          },
          title: 'Financial Consultant',
          location: '2020-Present',
          description:
            'Facilitated startups to seamlessly complete external audits and / or prepare for an IPO. Created analytical / reconciliation NetSuite and Excel tools (cash, prepaid expenses, fixed assets, accruals, payroll, taxes, equity); reported trends, targets, metrics',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Zum',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Zum',
          description:
            'Managed annual close, KPMG audit, monthly reporting; wrote SOPs and technical memos, trained personnel',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Digital Realty (DLR, NYSE)',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Digital Realty (DLR, NYSE)',
          description:
            'Managed joined venture accounting; assisted with FP&A, end-of-year 10-K and 10-Q',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Zenfolio, PE carve-out',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Zenfolio, PE carve-out',
          description:
            'Analyzed revenue and cost to identify deficiencies that led to favorable contract renegotiations',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Domino Data Lab',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Domino Data Lab',
          description: 'Managed month-end close and reporting',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Luma Health',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Luma Health',
          description:
            'Revamped the prior 2 years of historical data and transitioned it from QuickBooks to NetSuite, to migrate from cash to accrual basis of accounting in anticipation of a first-year audit, while performing all routine operations, under COVID-19 personnel shortages: cash and credit, subscription revenue (Stripe); Payroll (Zenefits and Sequoia), expense (Expensify, Egencia)',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Diamond Foundry',
          level: 'Mid-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Controller',
          location: 'Diamond Foundry',
          description:
            'Due to company’s start-up nature and rapid growth, initially performed most duties, then hired 2 and supervised 4 employees',
        },
        {
          end: {
            year: 2019,
            month: null,
          },
          org: 'Aeris Communications',
          level: 'Mid-level',
          start: {
            year: 2018,
            month: null,
          },
          title: 'Accounting Manager',
          location: 'Aeris Communications',
          description:
            'Managed end-to-end period closes, FP&A VP and BoD reporting; ASC 606 early implementation, stock compensation; Managed international payroll and related HR (230+ employees) with 3 intercompany foreign currency consolidations; Successfully navigated through multiple, repetitive and often overlapping audits – external (Big4), revenue (IRS), SaaS, IoT, M2M',
        },
        {
          end: {
            year: 2013,
            month: null,
          },
          org: 'Financial Consultant',
          level: 'Mid-level',
          start: {
            year: 2012,
            month: null,
          },
          title: 'Controller',
          location: 'Coast Oil / SC Fuels',
          description:
            'Primary contributor to the extensive due diligence process leading to the acquisition of Coast Oil by SC Fuels. Supervised a team of 8; managed daily cash / inventory for pledge borrowing – cost/sales/pricing, gain/shrink, old/slow reports',
        },
        {
          end: {
            year: 2011,
            month: null,
          },
          org: 'Clinimetrics / Omnicare (OCR, NYSE)',
          level: 'Mid-level',
          start: {
            year: 2009,
            month: null,
          },
          title: 'Senior Financial Analyst',
          location: 'Clinimetrics / Omnicare (OCR, NYSE)',
          description:
            'Managed international multi-currency revenue backlog reporting, profitability analysis (milestone, unit-cost, budget audits)',
        },
        {
          end: {
            year: 2006,
            month: null,
          },
          org: 'US Army and related contract positions',
          level: 'Mid-level',
          start: {
            year: 2002,
            month: null,
          },
          title: 'Army Veteran',
          location: 'US Army and related contract positions',
          description: 'Army Veteran – Honorable Discharge',
        },
      ],
      certificates: [],
    },
    resume_text:
      ' 735-1131 dimitar.zelenkov.cpa@gmail.com https://www.linkedin.com/in/dimitar-zelenkov-cpa/ Dimitar Zelenkov, CPA Summary Results-driven financial executive with 20+ years of experience in public and private accounting and financial management and with 15+ years in leadership roles within the realms of SaaS startups and manufacturing entities. An ERP and PEO software expert (Excel, NetSuite, Trinet) specialized in internal audit with a focus on detail while providing high-level insights. Areas of Expertise (proficient in technical accounting, GAAP, IFRS, SOX compliance)     Summary – process automation, audit controls and enhanced detail for improved quality and optimized turnover Led all aspects of accounting, budgeting and audit operations – PBCs, reconciliations, narratives, schedules, footnotes Produced financial statements, forecasts, analyses, technical memos, KPIs, SOPs; managed taxation (Avalara, TaxJar) Automated month-end close –ASC 606, ASC 842, 409a equity valuation; oversaw implementations (NetSuite) Professional Experience (After 2008, each permanent position included month/year-end close, cash, payroll, taxes, financials, analysis and Big4 audits) Financial Consultant for Robert Half, Controller’s Group, DeWinter, Centre Lane 2020-Present Controller Facilitated startups to seamlessly complete external audits and / or prepare for an IPO. Created analytical / reconciliation NetSuite and Excel tools (cash, prepaid expenses, fixed assets, accruals, payroll, taxes, equity); reported trends, targets, metrics  Zum – managed annual close, KPMG audit, monthly reporting; wrote SOPs and technical memos, trained personnel  Digital Realty (DLR, NYSE) – managed joined venture accounting; assisted with FP&A, end-of-year 10-K and 10-Q  Zenfolio, PE carve-out – analyzed revenue and cost to identify deficiencies that led to favorable contract renegotiations  Domino Data Lab – managed month-end close and reporting Luma Health Controller Revamped the prior 2 years of historical data and transitioned it from QuickBooks to NetSuite, to migrate from cash to accrual basis of accounting in anticipation of a first-year audit, while performing all routine operations, under COVID-19 personnel shortages: cash and credit, subscription revenue (Stripe); Payroll (Zenefits and Sequoia), expense (Expensify, Egencia). Healthcare Services SaaS startup 2020-2020 Diamond Foundry B2B, B2C startup Manufacturing / Retail Controller Due to company’s start-up nature and rapid growth, initially performed most duties, then hired 2 and supervised 4 employees.  intercompany consolidations (China); high volume A/R (Stripe, Shopify, PayPal) and diverse ASC 842 leases  Managed PP&E, cost allocation and complex inventory for 5 locations (BoM, CIP, parts, capitalization)  Led purchase accounting for mergers and acquisitions (M&A) – analysis, valuation and integration of 2 subsidiaries 2018-2019 Accounting Manager Aeris Communications Reported to VP of Finance; as its first member, built the company finance department, then hired a team of 5    property (CA, TX), 401k (Principal), Payroll (CA EDD), state (TX), local (NY) sales tax Managed end-to-end period closes, FP&A VP and BoD reporting; ASC 606 early implementation, stock compensation Managed international payroll and related HR (230+ employees) with 3 intercompany foreign currency consolidations Successfully navigated through multiple, repetitive and often overlapping audits – external (Big4), revenue (IRS), SaaS, IoT, M2M 2013-2018 Controller Financial Consultant Ensighten SaaS, software developer 2012-2013 Controller Coast Oil / SC Fuels Primary contributor to the extensive due diligence process leading to the acquisition of Coast Oil by SC Fuels. Supervised a team of 8; managed daily cash / inventory for pledge borrowing – cost/sales/pricing, gain/shrink, old/slow reports Energy / Manufacturing / Wholesale / Retail 2009-2011 Senior Financial Analyst Received the 2007 CEO Annual Above-and-Beyond Award – nominated by CFO. Managed international multi-currency revenue backlog reporting, profitability analysis (milestone, unit-cost, budget audits) Clinimetrics / Omnicare (OCR, NYSE) Healthcare Services 2006-2009 US Army and related contract positions Army Veteran – Honorable Discharge 2002-2006 Education: BA in Business Administration ; and a second major in Accounting as a CPA prerequisite Languages: Fluent in Bulgarian. Army Defense Language Institute certified for Russian & Macedonian with maximum score. Functional skills and Core competences Computer   Excel Expert – complex formulas, macros, queries, and Visual Basic for macro programming MS Office, QuickBooks, Paylocity, Salesforce, Anaplan, Intacct, CHR, Paycom, Solium CapMx, Carta, Bill.com Finance and Accounting Monthly and annual close (end-to-end, hands-on) – all Balance Sheet journals, waterfall schedules and reconciliations Financial reporting – monthly VP, CFO and CEO packages; quarterly BoD package; bank covenant reporting FP&A – budgeting, forecasting and scenario modelling; variance, flux and profitability analysis, KPIs, cost control External audit – both with Big4 (PwC, KPMG) and second tier (BDO, Moss Adams, Armanino) Operational efficiency and automation – especially the synergy between NetSuite, Excel and Trinet ERP implementations – from Quickbooks to Oracle NetSuite (to OneWorld) including NetSuite report building PEO migration to Trinet and ADP Taxation – as part of a monthly or an annual close; by state (sales); by type (property, payroll), as part of an audit M&A from both the acquirer and the acquired perspective (Coast Oil/SC Fuels) – evaluation, due diligence, integration 13-week cash flow liquidity Project management Internal controls development Supervision, training, mentoring Critical thinking Internal control Legal compliance Risk management Policy development Financial models development Long-term strategic planning Continuous learning          Treasury management Team Leadership Regulatory compliance Tax compliance Complex problem-solving Process improvement',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/3b5282f0-3354-483a-90a2-398056d27749.pdf',
  },
  {
    email: 'semberland@gmail.com',
    avatar: null,
    city: 'Saratoga',
    state: 'California',
    country: 'United States',
    first_name: 'Steven L.',
    last_name: 'Emberland',
    linkedin: '',
    phone: '+14084066215',
    current_company: 'N/A',
    timezone: null,
    current_job_title: 'Senior Finance and Operations Consultant',
    resume_json: {
      basics: {
        email: 'semberland@gmail.com',
        phone: '4086215',
        social: [],
        lastName: 'Emberland',
        linkedIn: null,
        location: {
          city: 'Saratoga',
          state: 'CA',
          country: 'N/A',
        },
        firstName: 'Steven',
        currentCompany: 'N/A',
        currentJobTitle: 'Senior Finance and Operations Consultant',
        totalExperienceInMonths: null,
      },
      skills: [],
      schools: [],
      overview:
        'Steven Emberland is a Senior Finance and Operations Consultant with expertise in financial analysis and operations management. He also possesses strong communication and problem-solving skills.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'N/A',
          level: 'Senior-level',
          start: {
            year: 2024,
            month: 9,
          },
          title: 'Senior Finance and Operations Consultant',
          location: 'N/A',
          description:
            'Providing strategic financial, operational, and corporate consulting services to technology companies. Streamlining operations, securing funding, and driving strategic objectives.',
        },
        {
          end: {
            year: 2024,
            month: 6,
          },
          org: 'Carrot Fertility, Inc.',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 8,
          },
          title: 'Senior Vice President, Finance/Senior Leadership Team',
          location: 'Menlo Park, CA/Fully Distributed (Privately Held)',
          description:
            "Launched initiatives within Finance that significantly elevated eNPS scores, exceeding company averages, and earning high marks in areas such as constructive feedback, trust in management, and clarity of job purpose. Collaborated with executive team to create FY25 budget with strong growth and accelerated path to profitability. Uncovered up to $10M/year in missed Carrot Plan billings for journeys from member relatives. Cash burn reduced by $30M by eliminating low ROI initiatives, streamlining the GTM function, eliminating redundant headcount, and improving the compensation structure to align with a fully distributed workforce. Raised $35 million in debt financing to support company operations and extend runway if needed. Partnered with CX leadership to improve the management of expansion bookings, resulting in precise definitions, calculations, enhanced reporting and timely communication. Collaborated with Growth & Engagement leadership to develop the proper incentives for Sales to include marketing rights to members on new logo deals. Developed a multi-year sales capacity model to empower Sales to plan and optimize headcount, model quotas by territory, and allocate sales support resources to meet new logo targets. Designed and implemented a renewal calculator for the CS team, streamlining tiered pricing negotiations and supporting revenue retention efforts. Launched the company’s first 'Flash Report', delivered monthly by Day 2 for immediate strategic analysis. Collaborated with the CS team to develop a ‘Cost per Carrot Plan by Segment’ analysis, facilitating tiered Economies of Scale pricing strategies for renewals, and optimizing revenue management. Revamped sales compensation plans to properly align incentives with new logo targets. Introduced flat rate tables, a modified accelerator table and 1H quarterly quota attainment bonuses to address sales seasonality. Created a standardized monthly reporting package that includes FVA, key metrics and ARR analysis. Reduced the time-to-close from 3 weeks to 6 days by implementing efficient workflows and processes, adding headcount in key areas, and utilizing automation tools, including Floqast that launched in May 2024.",
        },
        {
          end: {
            year: 2023,
            month: 8,
          },
          org: 'Delphix Corp.',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 4,
          },
          title:
            'Vice President, Finance & Administration/Senior Leadership Team (Promotion)',
          location:
            'Redwood City, CA (Privately held, acquired in February 2024)',
          description:
            "Collaborated with HR to analyze and quantify cost savings for two global reduction-in-force initiatives in 2023, leveraging payroll data, workforce metrics and various scenario analyses. Achieved significant cost reductions totaling over $20 million that improved cash flow, OPEX and select KPIs. Reorganized the FP&A business partners to optimize resource utilization, balance workloads, and to align the team with the needs of budget owners, resulting in improved productivity and alignment with company's OKRs. Implemented Office Connect, which streamlined departmental reporting, reduced manual work and risk of errors. Project-managed a P2P Business Spend Management solution. Led and executed the Coupa implementation within three months, resulting in a successful go-live in February 2023. Served as the change management catalyst, driving and facilitating organizational change to ensure a smooth transition and adoption of the new platform. Benefits include enhanced internal controls, streamlined processes, and expected cost savings totaling 6% during the first twelve months. Streamlined the month end close, reducing the timeline from 3 weeks to 6 days by implementing efficient workflows and processes, adding headcount in key areas, and utilizing automation tools. Oversaw and managed a successful first-year Big 4 AICPA audit utilizing PCAOB selection and materiality criteria (FY22). Resolved a four-year delinquency by successfully updating and bringing current transfer pricing documentation for 9 countries. Coordinated a sales tax nexus update, ensuring accurate billing, collection, and remittance of sales taxes, improving compliance, minimizing risk of penalties and interest, and reducing the number of registered states. Streamlined the workflow and communications for international stock option exercises, improving compliance and reporting, cash flows between entities and eliminating FX risk.",
        },
        {
          end: {
            year: 2022,
            month: 3,
          },
          org: 'J2 Global/Consensus Cloud Solutions, Inc.',
          level: 'Senior-level',
          start: {
            year: 2021,
            month: 9,
          },
          title:
            'Vice President, Corporate Controller & Principal Accounting Officer (Section 16 Officer)',
          location: 'Los Angeles, CA (NASDAQ: CCSI)',
          description:
            'Finance executive and core team member helping to drive and execute the successful Consensus spin-off from J2 Global by providing financial expertise and support throughout the process, including P2P Oracle set-up and data validation, technical accounting, internal management reporting and SEC reporting. Core team member and finance representative for the company’s first acquisition (Summit Health) that included due diligence, financial analysis, contract review and risk assessment. Established banking and treasury processes, policies, and procedures for all disbursements with two large commercial banks including wire releases, ACH payments, and payables. Created the framework for non-GAAP reporting to be used in quarterly and annual press releases. Set up the worldwide consolidations and intercompany accounting and reporting utilizing an Excel add-in that connects to Oracle Fusion. Prepared the team to complete the company’s first month-end close as a public company including: Establishing a comprehensive month end close checklist. Reviewing and approving balance sheet reconciliations and journal entries. Working closely with internal audit to ensure the company implemented and adhered to SOX- compliant internal controls. Evaluated all US and Europe personnel in accounting operations, accounts payable and treasury. Promoted two leaders in each geo to accounting manager to improve organizational structure and hierarchy.',
        },
        {
          end: {
            year: 2021,
            month: 9,
          },
          org: 'SoundHound AI, Inc.',
          level: 'Senior-level',
          start: {
            year: 2018,
            month: 8,
          },
          title:
            'VP, Finance & Administration/Executive Team & Acting CFO/CAO (Promotion)',
          location: 'Santa Clara, CA (NASDAQ: SOUN)',
          description:
            'As the company’s top finance leader for over 8 years, helped propel the company to a $2B valuation through strategic financial management and operational excellence. Strategic role and core team member in public company/SPAC readiness including completing PCAOB audits (FY 2019 & 2020), developing multi-year projections and assisting in SPAC presentations. Core team member in executing Series C-1 through D-3 equity financing totaling over $200M. Successfully raised $30 million in debt financing to support company operations and extend runway. Hired and developed key staff to provide leadership over finance, human resources, accounting, real estate & facilities, and office management to support global expansion (headcount increased 6x and valuation 15x since 2013). Reduced cash burn by implementing aggressive cost savings strategy that included slashing costs, capping monthly spend and negotiating discounts resulting in over $14M saved versus budget. Launched departmental budgeting, reporting and analysis initiative to improve cost containment and provide greater accountability around corporate spend. Developed, monitored, and reported on select KPI’s to executive team. Partnered with executives in developing and implementing initiatives, annual goals, and strategies to achieve growth. Initiated and led an international expansion committee to ensure treasury, tax, HR, payroll, and accounting functions were aligned with legal and strategy, resulting in three new international locations within 18 months. Established policies, procedures, and processes for international onboarding in China, France, and Germany. Executive team member responsible for defining core values and shaping company culture.',
        },
      ],
      certificates: [],
    },
    resume_text:
      "Steven L. Emberland, CPA Saratoga, CA 95070 / Cell: 4086215 semberland@gmail.com PROFESSIONAL SUMMARY Big 4 alum, change agent, and finance & operations executive experienced in leading and building teams to scale and driving value creation ♦ Track record of establishing executive and cross-functional collaboration to deliver results ♦ Public company/IPO readiness ♦ Cost reductions/driving operational efficiencies ♦ Proven expertise in leading strategic FP&A, treasury, tax, accounting, cash/banking, financial/SEC reporting and revenue recognition. Skilled in directing human resources, facilities, office administration and procurement ♦ Fund raising and investor relations Internal communications ♦ Mergers & Acquisitions ♦ Team leadership & development ♦ ♦ Performance management and culture ♦ Public and private/startup experience ♦ Domestic and international operations (Japan, China, Canada, Ireland, Germany, and France) Industries include SaaS/B2B software, healthcare, hardware, and telecommunications ♦ Adept at streamlining, best practices, process ♦ improvements, internal controls, and compliance ♦ Risk management PROFESSIONAL EXPERIENCE Senior Finance and Operations Consultant Providing strategic financial, operational, and corporate consulting services to technology companies. Streamlining operations, securing funding, and driving strategic objectives. Sep. 2024 - Present Core Areas of Expertise Include: • Financial Strategy & Management: Develop and implement financial strategies, manage cash flows, lead FP&A initiatives, facilitate fundraising, prepare and deliver Board presentations, and manage IPO readiness • Accounting & Reporting: Deliver controller-level services, streamline month-end close processes, lead financial and SEC reporting, coordinate annual audits, and manage 409A valuations • Operational Efficiency: Enhance operational processes, implement and optimize financial systems (e.g., NetSuite), and offshore resources to optimize headcount and reduce costs • Corporate Services: Advise on HR strategies, manage treasury operations, and coordinate income tax filings and transfer pricing implementation and compliance Carrot Fertility, Inc., Menlo Park, CA/Fully Distributed (Privately Held) Senior Vice President, Finance/Senior Leadership Team Healthtech/Global benefits platform, fertility & family-building care ($100M+ARR) Aug. 2023 - Jun. 2024 • Launched initiatives within Finance that significantly elevated eNPS scores, exceeding company averages, and earning high marks in areas such as constructive feedback, trust in management, and clarity of job purpose • Collaborated with executive team to create FY25 budget with strong growth and accelerated path to profitability • Uncovered up to $10M/year in missed Carrot Plan billings for journeys from member relatives • Cash burn reduced by $30M by eliminating low ROI initiatives, streamlining the GTM function, eliminating redundant headcount, and improving the compensation structure to align with a fully distributed workforce • Raised $35 million in debt financing to support company operations and extend runway if needed • Partnered with CX leadership to improve the management of expansion bookings, resulting in precise definitions, calculations, enhanced reporting and timely communication • Collaborated with Growth & Engagement leadership to develop the proper incentives for Sales to include marketing rights to members on new logo deals • Developed a multi-year sales capacity model to empower Sales to plan and optimize headcount, model quotas by territory, and allocate sales support resources to meet new logo targets • Designed and implemented a renewal calculator for the CS team, streamlining tiered pricing negotiations and supporting revenue retention efforts • Launched the company’s first 'Flash Report', delivered monthly by Day 2 for immediate strategic analysis • Collaborated with the CS team to develop a ‘Cost per Carrot Plan by Segment’ analysis, facilitating tiered Economies of Scale pricing strategies for renewals, and optimizing revenue management • Revamped sales compensation plans to properly align incentives with new logo targets. Introduced flat rate tables, a modified accelerator table and 1H quarterly quota attainment bonuses to address sales seasonality • Created a standardized monthly reporting package that includes FVA, key metrics and ARR analysis • Reduced the time-to-close from 3 weeks to 6 days by implementing efficient workflows and processes, adding headcount in key areas, and utilizing automation tools, including Floqast that launched in May 2024 Delphix Corp., Redwood City, CA (Privately held, acquired in February 2024) Vice President, Finance & Administration/Senior Leadership Team (Promotion) Vice President, Finance & Corporate Controller/Senior Leadership Team Software/DevOps Test Data Management, Application Recovery, Analytics & AI ($160M+ARR) Apr. 2023 - Aug. 2023 Mar. 2022 - Mar. 2023 • Collaborated with HR to analyze and quantify cost savings for two global reduction-in-force initiatives in 2023, leveraging payroll data, workforce metrics and various scenario analyses. Achieved significant cost reductions totaling over $20 million that improved cash flow, OPEX and select KPIs • Reorganized the FP&A business partners to optimize resource utilization, balance workloads, and to align the team with the needs of budget owners, resulting in improved productivity and alignment with company's OKRs Implemented Office Connect, which streamlined departmental reporting, reduced manual work and risk of errors • • Project-managed a P2P Business Spend Management solution • Led and executed the Coupa implementation within three months, resulting in a successful go-live in February 2023 • Served as the change management catalyst, driving and facilitating organizational change to ensure a smooth transition and adoption of the new platform • Benefits include enhanced internal controls, streamlined processes, and expected cost savings totaling 6% during the first twelve months • Streamlined the month end close, reducing the timeline from 3 weeks to 6 days by implementing efficient workflows and processes, adding headcount in key areas, and utilizing automation tools • Oversaw and managed a successful first-year Big 4 AICPA audit utilizing PCAOB selection and materiality criteria (FY22) • Resolved a four-year delinquency by successfully updating and bringing current transfer pricing documentation for 9 countries • Coordinated a sales tax nexus update, ensuring accurate billing, collection, and remittance of sales taxes, improving compliance, minimizing risk of penalties and interest, and reducing the number of registered states • Streamlined the workflow and communications for international stock option exercises, improving compliance and reporting, cash flows between entities and eliminating FX risk J2 Global/Consensus Cloud Solutions, Inc., Los Angeles, CA (NASDAQ: CCSI) Vice President, Corporate Controller & Principal Accounting Officer (Section 16 Officer) Software/Interoperability and Secure Data Exchange utilizing NLP & AI Sep. 2021 - Mar. 2022 CCSI spun off from J2 Global (now Ziff Davis NASDAQ: ZD) as a $350M/year publicly traded company in October 2021 • Finance executive and core team member helping to drive and execute the successful Consensus spin-off from J2 Global by providing financial expertise and support throughout the process, including P2P Oracle set-up and data validation, technical accounting, internal management reporting and SEC reporting • Core team member and finance representative for the company’s first acquisition (Summit Health) that included due diligence, financial analysis, contract review and risk assessment • Established banking and treasury processes, policies, and procedures for all disbursements with two large commercial banks including wire releases, ACH payments, and payables • Created the framework for non-GAAP reporting to be used in quarterly and annual press releases • Set up the worldwide consolidations and intercompany accounting and reporting utilizing an Excel add-in that connects to Oracle Fusion • Prepared the team to complete the company’s first month-end close as a public company including: • Establishing a comprehensive month end close checklist • Reviewing and approving balance sheet reconciliations and journal entries • Working closely with internal audit to ensure the company implemented and adhered to SOX- compliant internal controls • Evaluated all US and Europe personnel in accounting operations, accounts payable and treasury. Promoted two leaders in each geo to accounting manager to improve organizational structure and hierarchy SoundHound AI, Inc., Santa Clara, CA (NASDAQ: SOUN) VP, Finance & Administration/Executive Team & Acting CFO/CAO (Promotion) Corporate Controller Software/Voice-enabled AI and Conversational Intelligence Aug. 2018 - Sep. 2021 Apr. 2013 - Jul. 2018 • As the company’s top finance leader for over 8 years, helped propel the company to a $2B valuation through strategic financial management and operational excellence • Strategic role and core team member in public company/SPAC readiness including completing PCAOB audits (FY 2019 & 2020), developing multi-year projections and assisting in SPAC presentations • Core team member in executing Series C-1 through D-3 equity financing totaling over $200M • Successfully raised $30 million in debt financing to support company operations and extend runway • Hired and developed key staff to provide leadership over finance, human resources, accounting, real estate & facilities, and office management to support global expansion (headcount increased 6x and valuation 15x since 2013) • Reduced cash burn by implementing aggressive cost savings strategy that included slashing costs, capping monthly spend and negotiating discounts resulting in over $14M saved versus budget • Launched departmental budgeting, reporting and analysis initiative to improve cost containment and provide greater accountability around corporate spend • Developed, monitored, and reported on select KPI’s to executive team • Partnered with executives in developing and implementing initiatives, annual goals, and strategies to achieve growth • Initiated and led an international expansion committee to ensure treasury, tax, HR, payroll, and accounting functions were aligned with legal and strategy, resulting in three new international locations within 18 months • Established policies, procedures, and processes for international onboarding in China, France, and Germany • Executive team member responsible for defining core values and shaping company culture EDUCATION: B.A. Business Economics University of California, Santa Barbara LICENSES: Certified Public Accountant, State of California (active) AWARDS & RECOGNITION: Marquis Who’s Who: Honored Listee in Biographical Registry & Top Executive The Top 100 Magazine: Top 100 Innovators & Entrepreneurs Passion Vista Magazine: Men Leaders to Look Up To in 2023 Ernst & Young: ‘Nailed It’ Award for passing all four parts of the CPA exam on the first attempt (98th percentile) 1994 to 2013 various finance and accounting roles at public & private tech companies with increasing responsibilities 1991 to 1994 public accounting at Ernst & Young, LLP and Price Waterhouse, LLP, San Jose, CA",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/2bb3a533-1245-49c1-87e0-2c487a875ae9.pdf',
  },
  {
    email: 'bryan@bryanwang.com',
    avatar: null,
    city: 'Campbell',
    state: 'California',
    country: 'United States',
    first_name: 'Bryan',
    last_name: 'Wang',
    linkedin: '',
    phone: '+16502791545',
    current_company: 'CONFIDENTIAL (life science genetic testing provider)',
    timezone: null,
    current_job_title: 'Chartered Accountant and MBA',
    resume_json: {
      basics: {
        email: 'bryan@bryanwang.com',
        phone: '(+1) 650.279.1545',
        social: [],
        lastName: 'Wang',
        linkedIn: null,
        location: {
          city: 'Campbell',
          state: 'California',
          country: 'USA',
        },
        firstName: 'Bryan',
        currentCompany: 'CONFIDENTIAL (life science genetic testing provider)',
        currentJobTitle: 'Chartered Accountant and MBA',
        totalExperienceInMonths: 384,
      },
      skills: [],
      schools: [],
      overview:
        'Bryan Wang is a Chartered Accountant and MBA currently working at CONFIDENTIAL, a life science genetic testing provider. He possesses strong skills in accounting and finance.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'CONFIDENTIAL (life science genetic testing provider)',
          level: 'Executive-level',
          start: {
            year: 2022,
            month: null,
          },
          title: 'Vice President and Controller',
          location: 'Unknown',
          description:
            'Inherited accounting breakdown situation following NetSuite system implementation. Quickly rectified situation and introduced procedures to maintain effectiveness of accounting function. Positioned company for IPO preparation: SOX, improved reporting, improved timeliness, etc. Introduced and developed revenue recognition and forecasting models to better estimate ASPs.',
        },
        {
          end: {
            year: 2022,
            month: null,
          },
          org: 'PARTNERIZE (SaaS affiliate marketing platform provider)',
          level: 'Executive-level',
          start: {
            year: 2021,
            month: null,
          },
          title: 'Vice President and Controller',
          location: 'Unknown',
          description:
            'Successfully led integration of three companies’ back-end operations. Performed purchase accounting and stock-based compensation expense calculations. Successfully implemented a new accounting system, NetSuite, as part of the three-company integration. Completed implementation of formal expense reporting and purchase order systems. Implemented Avalara for state sales taxes for three separate entities. Implemented ASC 606 revenue recognition process. Implemented AuditBoard, SOX implementation system. Improved monthly reporting and developed a unified package for all three business lines. Reduced monthly close cycle by 50% (from 20 days to 10).',
        },
        {
          end: {
            year: 2021,
            month: null,
          },
          org: 'ARRIVAL USA, INC (electric commercial vehicle manufacturer)',
          level: 'Executive-level',
          start: {
            year: 2019,
            month: null,
          },
          title: 'Chief Financial Officer (CFO) and Board member',
          location: 'Unknown',
          description:
            'Served as CFO and director of all US subsidiaries of Arrival SA and Kinetik Sarl, the ultimate parent entity. Positioned entities for growth by securing leases, financing, payroll, benefits and staff for all US entities. Established accounting systems and reporting structures under IFRS. Positioned US entities for successful SPAC IPO.',
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'VISTAJET, LTD (on-demand private jet operator)',
          level: 'Executive-level',
          start: {
            year: 2019,
            month: 2020,
          },
          title: 'Consultant',
          location: 'Unknown',
          description:
            'Performed carve-out of XOJet under IFRS into four separate entities following its purchase by VistaJet. Carve-out included the operations of air operator certificate holder which were divested into a majority-owned US entity. Developed legal and accounting processes for cross-charges and re-charges between entities and the AOC holder. Concluded project following completion of AOC holder’s first audit under US GAAP the following year.',
        },
        {
          end: {
            year: 2018,
            month: null,
          },
          org: 'SOLOPOWER SYSTEMS, INC (lightweight, flexible solar product developer and manufacturer)',
          level: 'Executive-level',
          start: {
            year: 2015,
            month: null,
          },
          title: 'Chief Financial Officer (CFO) and Vice President',
          location: 'Unknown',
          description:
            'Secured several rounds of debt funding (over $50M) and continually lengthened the company’s cash runway. Concluded agreement with contract manufacturer to expand capacity with no equipment or working capital investment. Completed London Stock Exchange (LSE) IPO listing prospectus including audited financials under IFRS, working capital report, policy manuals, etc. Restated all financial statements for prior reorganization and converted from US GAAP to IFRS.',
        },
        {
          end: {
            year: 2015,
            month: null,
          },
          org: 'FINANCIAL AND BUSINESS DEVELOPMENT CONSULTANT',
          level: 'Senior-level',
          start: {
            year: 2013,
            month: null,
          },
          title: 'Senior level finance consultant',
          location: 'Unknown',
          description:
            'Varied experience executing financial and business development projects for clients. Items of note include: Site selection and grant proposals culminating in over $5m of awarded grants and significant incentive awards (amount subject to NDA) for Norsk Titanium’s and Silevo’s (now part of Tesla) manufacturing facilities in the state of New York. Development of a European solar yieldco. S-1 IPO filing preparation and accounting restatements for ForeScout.',
        },
        {
          end: {
            year: 2013,
            month: null,
          },
          org: 'SVTC SOLAR, INC (solar developer and manufacturer, pre-revenue)',
          level: 'Executive-level',
          start: {
            year: 2011,
            month: null,
          },
          title: 'Vice President, Finance and Board Member',
          location: 'Unknown',
          description:
            'Lobbied, fundraised and negotiated over $100M of grants and contributions to launch entity (recognized with an Innovation Award from SVTC Technologies, the parent). Responsible for all reporting, including government accounting and reporting to the US Department of Energy. Successfully divested SVTC Solar business following insolvency of parent.',
        },
        {
          end: {
            year: 2013,
            month: null,
          },
          org: 'SVTC TECHNOLOGIES, LLC (contract semiconductor developer/manufacturer, $80M revenue)',
          level: 'Senior-level',
          start: {
            year: 2009,
            month: null,
          },
          title: 'Director, Treasury and Corporate Development',
          location: 'Unknown',
          description:
            'Led treasury and corporate development operations. Corporate development activities included partnership agreements, investment transactions, real estate matters, key supplier contracts and licensing arrangements. Treasury duties included cash forecasting and management, loan negotiations, covenant reporting and compliance. Developed and presented marketing collateral to support investment and licensing activities and also created unique legal structures to support legal and tax requirements of the participating parties. Produced and presented materials for the board and senior executives.',
        },
        {
          end: {
            year: 2009,
            month: null,
          },
          org: 'TSMC - VENTURETECH ALLIANCE (VC firm, $200M managed)',
          level: 'Senior-level',
          start: {
            year: 2005,
            month: null,
          },
          title: 'Manager of three TSMC venture capital funds',
          location: 'Unknown',
          description:
            'Performed role of investment partner and CFO leading financial, infrastructure and legal operations. Developed investment strategy; sourced, evaluated and executed potential investments. Drafted and negotiated term sheets for new and follow-on investments and performed due diligence. Managed investments post-transaction, acted as board observer. Established, managed and reported on complex fund structures involving offshore and blocker entities. Managed internal financial operations including all tax reporting and filings (including K-1s) and IT and HR benefits. Produced fund return and financial information and presented portfolio company updates to LP investors.',
        },
        {
          end: {
            year: 2005,
            month: null,
          },
          org: 'QUICKSILVER TECHNOLOGY, INC (fabless semiconductor manufacturer and IP licensor)',
          level: 'Senior-level',
          start: {
            year: 2004,
            month: null,
          },
          title: 'Director, Finance',
          location: 'Unknown',
          description:
            'Proposed, developed and implemented the company’s exit strategy and reorganized the company as an IP development and licensing firm. Negotiated termination contracts with customers and suppliers that enabled the company to minimize contractual exposure and accelerate revenue recognition. Led financial and infrastructure operations. Responsible for all aspects of the company’s finance, accounting, tax, legal, facilities, IT and HR operations. Developed and presented materials to the board and investors.',
        },
        {
          end: {
            year: 2003,
            month: null,
          },
          org: 'BEARINGPOINT, INC (formerly KPMG Consulting, Inc, $2B+ revenue)',
          level: 'Senior-level',
          start: {
            year: 2001,
            month: null,
          },
          title:
            'Director and Division Controller, High Tech Industry and Product Solutions',
          location: 'Unknown',
          description:
            'Improved operating performance (Operating Income as a % of revenue) from 16% to 21% despite a 60% decrease in revenue. Decreased days outstanding from over 70 to 37, a near 50% reduction. Managed all aspects of the divisions’ finance, reporting, planning, forecasting and revenue recognition functions (SAB 101 and SOP 97-2). Developed accounting policies and project review procedures, including software and project revenue recognition policies.',
        },
        {
          end: {
            year: 2001,
            month: null,
          },
          org: 'DODOTS, INC (software, web and SaaS firm, early revenue stage)',
          level: 'Senior-level',
          start: {
            year: 2000,
            month: null,
          },
          title: 'Director of Finance',
          location: 'Unknown',
          description:
            'Led company’s financial and web analytics operations through a rapid growth phase and then through eventual liquidation. Successfully implemented Oracle 11i financial package. Developed accounting policies and procedures, including cost and revenue recognition policies. Managed multiple complex revenue streams.',
        },
        {
          end: {
            year: 2000,
            month: null,
          },
          org: 'GETTHERE, INC (software, e-commerce and SaaS firm, acquired by Sabre $775M)',
          level: 'Senior-level',
          start: {
            year: 1998,
            month: null,
          },
          title: 'Corporate Controller',
          location: 'Unknown',
          description:
            'Completed successful IPO and led S-1 / SEC registration process including restating historical results for company’s entire 4½ year existence. Developed and implemented accounting policies (SAB 101 and SOP 97-2 compliant) that enabled and enhanced the stated business model (software, services and e-commerce). Reduced losses from credit card fraud by over 90%.',
        },
        {
          end: {
            year: 1997,
            month: null,
          },
          org: 'PRICE WATERHOUSE (Big 4 public accounting and professional services firm)',
          level: 'Senior-level',
          start: {
            year: 1988,
            month: null,
          },
          title: 'Senior Manager, Audit and Business Services',
          location: 'Unknown',
          description:
            'Regional technical accounting expert: proficient in US GAAP and IFRS. Primary point of contact with clients. Responsibilities included relationship management, client service, fee negotiations and business development. Completed audit, due diligence, corporate finance and consulting engagements.',
        },
        {
          end: {
            year: 1988,
            month: null,
          },
          org: 'LCI TELECOMMUNICATIONS INC (acquired by Qwest, $50M revenue)',
          level: 'Fresher-level',
          start: {
            year: 1987,
            month: null,
          },
          title: 'Engineer, Switched Services',
          location: 'Unknown',
          description: 'Provisioned, planned and programmed switched services.',
        },
        {
          end: {
            year: 1987,
            month: null,
          },
          org: 'WESTINGHOUSE ELECTRIC CORPORATION, Defense Systems',
          level: 'Fresher-level',
          start: {
            year: 1986,
            month: null,
          },
          title: 'Associate Engineer, Mechanical Design and Stress Analysis',
          location: 'Unknown',
          description: 'Performed stress, thermal and fluidic analyses.',
        },
        {
          end: {
            year: 1998,
            month: null,
          },
          org: 'INSEAD',
          level: 'Unknown',
          start: {
            year: 1997,
            month: null,
          },
          title: 'MBA with Distinction',
          location: 'Unknown',
          description: 'Unknown',
        },
        {
          end: {
            year: 1991,
            month: null,
          },
          org: 'ICAEW',
          level: 'Unknown',
          start: {
            year: 1988,
            month: null,
          },
          title: 'ACA, Chartered Accountant',
          location: 'Unknown',
          description: 'Unknown',
        },
        {
          end: {
            year: 1986,
            month: null,
          },
          org: 'Ohio State University',
          level: 'Unknown',
          start: {
            year: 1983,
            month: null,
          },
          title: 'Majored in Mathematics',
          location: 'Unknown',
          description: 'Unknown',
        },
      ],
      certificates: [],
    },
    resume_text:
      '997 Smith Avenue Campbell, California Telephone: (+1) 650.279.1545 E-mail: bryan@bryanwang.com 997 Smith Avenue Campbell, California Telephone: (+1) 650.279.1545 E-mail: bryan@bryanwang.com Chartered Accountant and MBA Chartered Accountant and MBABryan Wang SUMMARY Executive level finance professional (CFO, Controller, Treasurer) possessing VC, Public Company, Start-up, IPO, M&A and “Big 4” experience with 20+ years of US and international experience in finance, accounting and consulting complimented by earlier engineering background. MBA with Distinction from top-tier school; Chartered Accountant. EXPERIENCE 2022 - Present CONFIDENTIAL (life science genetic testing provider) VC backed growth-stage entity, $120M annualized revenue Vice President and Controller (report to CFO) Inherited accounting breakdown situation following NetSuite system implementation. Quickly rectified situation and introduced procedures to maintain effectiveness of accounting function. Positioned company for IPO preparation: SOX, improved reporting, improved timeliness, etc. Introduced and developed revenue recognition and forecasting models to better estimate ASPs. 2021 - 2022 PARTNERIZE (SaaS affiliate marketing platform provider) VC and PE backed growth-stage entity, over $1B of commission payments processed annually Vice President and Controller (reported to CFO) Successfully led integration of three companies’ back-end operations. Performed purchase accounting and stock-based compensation expense calculations. Successfully implemented a new accounting system, NetSuite, as part of the three-company integration. Completed implementation of formal expense reporting and purchase order systems. Implemented Avalara for state sales taxes for three separate entities. Implemented ASC 606 revenue recognition process. Implemented AuditBoard, SOX implementation system. Improved monthly reporting and developed a unified package for all three business lines. Reduced monthly close cycle by 50% (from 20 days to 10). 2019 - 2021 ARRIVAL USA, INC (electric commercial vehicle manufacturer) Public growth-stage entity (ARVL), over $15B market capitalization at the time Chief Financial Officer (CFO) and Board member (reported to CEO and investors) Served as CFO and director of all US subsidiaries of Arrival SA and Kinetik Sarl, the ultimate parent entity. Positioned entities for growth by securing leases, financing, payroll, benefits and staff for all US entities. Established accounting systems and reporting structures under IFRS. Positioned US entities for successful SPAC IPO. 2019 - 2020 VISTAJET, LTD (on-demand private jet operator) PE backed growth-stage entity, $1.6B revenue Consultant (reported to CFO and Controller) Performed carve-out of XOJet under IFRS into four separate entities following its purchase by VistaJet. Carve-out included the operations of air operator certificate holder which were divested into a majority-owned US entity. Developed legal and accounting processes for cross-charges and re-charges between entities and the AOC holder. Concluded project following completion of AOC holder’s first audit under US GAAP the following year. 2015 - 2018 SOLOPOWER SYSTEMS, INC (lightweight, flexible solar product developer and manufacturer) VC backed growth-stage entity, total funding approaches $300M Chief Financial Officer (CFO) and Vice President (reported to CEO and Chairman) Secured several rounds of debt funding (over $50M) and continually lengthened the company’s cash runway. Concluded agreement with contract manufacturer to expand capacity with no equipment or working capital investment. Completed London Stock Exchange (LSE) IPO listing prospectus including audited financials under IFRS, working capital report, policy manuals, etc. Restated all financial statements for prior reorganization and converted from US GAAP to IFRS. Chartered Accountant and MBA Chartered Accountant and MBABryan Wang EXPERIENCE (continued) 2013 - 2015 FINANCIAL AND BUSINESS DEVELOPMENT CONSULTANT FINANCIAL AND BUSINESS DEVELOPMENT CONSULTANT Senior level finance consultant to high-tech, VC-backed companies Varied experience executing financial and business development projects for clients. Items of note include: Site selection and grant proposals culminating in over $5m of awarded grants and significant incentive awards (amount subject to NDA) for Norsk Titanium’s and Silevo’s (now part of Tesla) manufacturing facilities in the state of New York. Development of a European solar yieldco. S-1 IPO filing preparation and accounting restatements for ForeScout. 2011 - 2013 SVTC SOLAR, INC (solar developer and manufacturer, pre-revenue) Start-up entity (spin-out from SVTC Technologies) funded by $100M from DOE and third parties Vice President, Finance and Board Member (top finance position, 10+ reports via shared services) Lobbied, fundraised and negotiated over $100M of grants and contributions to launch entity (recognized with an Innovation Award from SVTC Technologies, the parent). Responsible for all reporting, including government accounting and reporting to the US Department of Energy. Successfully divested SVTC Solar business following insolvency of parent. 2009 - 2013 SVTC TECHNOLOGIES, LLC (contract semiconductor developer/manufacturer, $80M revenue) PE and VC backed growth-stage entity, 200+ employees, 10+ reports in shared service model Director, Treasury and Corporate Development (reported to CFO) Led treasury and corporate development operations. Corporate development activities included partnership agreements, investment transactions, real estate matters, key supplier contracts and licensing arrangements. Treasury duties included cash forecasting and management, loan negotiations, covenant reporting and compliance. Developed and presented marketing collateral to support investment and licensing activities and also created unique legal structures to support legal and tax requirements of the participating parties. Produced and presented materials for the board and senior executives. 2005 – 2009 TSMC - VENTURETECH ALLIANCE (VC firm, $200M managed) Manager of three TSMC venture capital funds Partner and CFO (individual contributor role)  Performed role of investment partner and CFO leading financial, infrastructure and legal operations. Developed investment strategy; sourced, evaluated and executed potential investments.  Drafted and negotiated term sheets for new and follow-on investments and performed due diligence. Managed investments post-transaction, acted as board observer. Established, managed and reported on complex fund structures involving offshore and blocker entities.  Managed internal financial operations including all tax reporting and filings (including K-1s) and IT and HR benefits.  Produced fund return and financial information and presented portfolio company updates to LP investors. 2004 – 2005 QUICKSILVER TECHNOLOGY, INC (fabless semiconductor manufacturer and IP licensor) VC backed growth-stage entity, 80 employees, 4 direct reports, $10M revenue Director, Finance (reported to CEO, top finance position)  Proposed, developed and implemented the company’s exit strategy and reorganized the company as an IP development and licensing firm. Negotiated termination contracts with customers and suppliers that enabled the company to minimize contractual exposure and accelerate revenue recognition.  Led financial and infrastructure operations. Responsible for all aspects of the company’s finance, accounting, tax, legal, facilities, IT and HR operations. Developed and presented materials to the board and investors.  Chartered Accountant and MBA Chartered Accountant and MBABryan Wang EXPERIENCE (continued) 2001 – 2003  BEARINGPOINT, INC (formerly KPMG Consulting, Inc, $2B+ revenue)  Public NYSE listed company (BE), professional services and software firm, 16 direct and indirect reports Director and Division Controller, High Tech Industry and Product Solutions ($500M revenue)  Improved operating performance (Operating Income as a % of revenue) from 16% to 21% despite a 60% decrease in revenue. Decreased days outstanding from over 70 to 37, a near 50% reduction.  Managed all aspects of the divisions’ finance, reporting, planning, forecasting and revenue recognition functions (SAB 101 and SOP 97-2).  Developed accounting policies and project review procedures, including software and project revenue recognition policies. 2000 – 2001 DODOTS, INC (software, web and SaaS firm, early revenue stage, $1M revenue) VC backed growth-stage entity, 100+ employees, 4 direct reports, $5M revenue Director of Finance (reported to CEO, responsible for all finance operations)  Led company’s financial and web analytics operations through a rapid growth phase and then through eventual liquidation. Successfully implemented Oracle 11i financial package.  Developed accounting policies and procedures, including cost and revenue recognition policies. Managed multiple complex revenue streams.  1998 - 2000 GETTHERE, INC (software, e-commerce and SaaS firm, $30M revenue, acquired by Sabre $775M) Public NASDAQ listed company (GTHR), grew from 100 to 300 employees, 21 direct and indirect reports Corporate Controller (reported to CFO, responsible for accounting and e-commerce back-office activities) Completed successful IPO and led S-1 / SEC registration process including restating historical results for company’s entire 4½ year existence. Developed and implemented accounting policies (SAB 101 and SOP 97-2 compliant) that enabled and enhanced the stated business model (software, services and e-commerce). Reduced losses from credit card fraud by over 90%. 1988 - 1997 PRICE WATERHOUSE (Big 4 public accounting and professional services firm, $5B revenue) Global partnership, 50,000 employees, managed international projects utilizing up to 100 professionals Senior Manager, Audit and Business Services (9 year tenure, five promotions from Assistant to Senior Manager) Regional technical accounting expert: proficient in US GAAP and IFRS. Primary point of contact with clients. Responsibilities included relationship management, client service, fee negotiations and business development. Completed audit, due diligence, corporate finance and consulting engagements. 1987 - 1988 LCI TELECOMMUNICATIONS INC (acquired by Qwest, $50M revenue) Growth-stage, VC backed long distance telecommunications provider, 200 employees Engineer, Switched Services (provisioned, planned and programmed switched services) 1986 - 1987 WESTINGHOUSE ELECTRIC CORPORATION, Defense Systems, ($10B+ revenue) Public NYSE listed company (merged with Viacom), 100,000+ employees Associate Engineer, Mechanical Design and Stress Analysis (performed stress, thermal and fluidic analyses) EDUCATION 1997 - 1998 INSEAD – MBA with Distinction 1988 – 1991 ICAEW – ACA, Chartered Accountant (UK equivalent of CPA) 1983 - 1986 Ohio State University – Majored in Mathematics',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/ec09c8d4-1e55-4a57-9d29-e246dab85c97.docx',
  },
  {
    email: 'iryna.buynytska@gmail.com',
    avatar: null,
    city: 'Sunnyvale',
    state: 'California',
    country: 'United States',
    first_name: 'Iryna',
    last_name: 'Buynytska',
    linkedin: '',
    phone: '+14087186964',
    current_company: 'Wonolo, Inc',
    timezone: null,
    current_job_title: 'Corporate Controller',
    resume_json: {
      basics: {
        email: 'Iryna.Buynytska@gmail.com',
        phone: '718-6964',
        social: [],
        lastName: 'Buynytska',
        linkedIn: null,
        location: {
          city: 'Sunnyvale',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Iryna',
        currentCompany: 'Wonolo, Inc',
        currentJobTitle: 'Corporate Controller',
        totalExperienceInMonths: 240,
      },
      skills: [
        'US GAAP',
        'IFRS',
        'Oracle',
        'NetSuite',
        'Great Plains',
        'FloQast',
        'Concur',
        'Avalara',
        'Expensify',
        'Coupa',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Languages',
          start: {
            year: null,
            month: null,
          },
          degree: 'B.A. in English and German Languages',
          institution: 'Eastern European National University',
        },
      ],
      overview:
        'Iryna Buynytska is a Corporate Controller at Wonolo, Inc with expertise in US GAAP, Oracle, and NetSuite.',
      projects: [],
      languages: ['English', 'German'],
      positions: [
        {
          end: null,
          org: 'Wonolo, Inc',
          level: 'Senior-level',
          start: {
            year: 2022,
            month: 9,
          },
          title: 'Corporate Controller',
          location: 'remote',
          description:
            'Manage global accounting operations and financial reporting including treasury, tax, compliance, and strategic finance.\n\nPlanned and executed the first audit for the company with no audit adjustments. Responsible for consolidated GAAP financial reporting, revenue recognition (ASC 606) and non-standard transactions. Established processes company-wide to assure accurate and timely 4-day EOM close. Prepare and present finance section materials to the BOD and serve as a point of contact for questions. Serve as a business owner of several tools integrated with NetSuite, including SFDC, Expensify and Ramp. Drive improvements, integrations, and implementation of automated controls. Responsible for due diligence, accounting, and integration of the acquired business units. Managed M&A transactions. Oversee complex processes and related cash flows and banking needs to support domestic and international payrolls. Established and successfully managed relationships with bankers, auditors, and tax advisors. Responsible for budgeting and forecasting, variance analysis. Serve as a finance / accounting advisor to other functions during the roll out of the new and ongoing initiatives.',
        },
        {
          end: {
            year: 2022,
            month: 8,
          },
          org: 'Illumio, Inc',
          level: 'Executive-level',
          start: {
            year: 2021,
            month: 7,
          },
          title: 'Senior Director of Accounting',
          location: 'Sunnyvale, CA',
          description:
            'Led international (US, EMEA, Singapore and Philippines) accounting operations, managed EOM close, preparation of financial statements and audits. Managed all aspects of accounting function within controllership organization related to GL, Accounts Payable, payroll, PPE, treasury, investments, taxes, international accounting, consolidation, foreign currency transactions and procurement. Served as a primary contact and managed annual financial audit conducted by EY. Served as a point of contact to the Audit Committee, prepared, and presented quarterly and annual financial results. Implemented FloQast (EOM close and reconciliation tool), strengthened controls and reduced EOM close cycle. Implemented investments policy and established investing relationship with two asset managers, set up related accounting and reporting cadence. Responsible for statutory filings and compliance in six international subsidiaries. Worked closely with local accountants to meet filing requirements (VAT, GST, Income Tax returns, statutory audits). Introduced and onboarded offshore accounting team to support US accounting operations which resulted in cost savings and created operational efficiencies. Implemented GPS, foreign currency purchasing platform, brought savings to the company on foreign currency purchases. Rolled out a number of NetSuite improvements: non-GAAP and GAAP financial statements, automated allocations.',
        },
        {
          end: {
            year: 2021,
            month: 6,
          },
          org: 'View, Inc',
          level: 'Mid-level',
          start: {
            year: 2020,
            month: 8,
          },
          title: 'Assistant Corporate Controller',
          location: 'Milpitas, CA',
          description:
            'Managed SPAC IPO project. Coordinated cross-functional teams and financial advisors and all related activities to prepare the company for SPAC IPO. Completed three years of PCAOB audits, implemented and managed SOX program. Managed financial close, preparation of financial statements and SEC filings and daily accounting operations.',
        },
        {
          end: {
            year: 2020,
            month: 8,
          },
          org: 'Jumio Corporation',
          level: 'Mid-level',
          start: {
            year: 2019,
            month: 9,
          },
          title: 'Controller, US',
          location: 'Palo Alto, CA',
          description:
            'Led global accounting operations, financial reporting, and compliance while getting ready for IPO. Responsible for global EOM close, consolidated financial statements, audits, business systems implementation and integration. Oversaw international accounting, intercompany transactions, treasury, accounts payable, revenue operations, Netsuite ERP administration, US and international payroll and equity.',
        },
        {
          end: {
            year: 2019,
            month: 9,
          },
          org: 'Quotient Technology Inc',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 7,
          },
          title: 'Assistant Corporate Controller',
          location: 'Mountain View, CA',
          description:
            'Managed global accounting operations and led global accounting teams. Oversaw global monthly, quarterly and annual close process, preparation and review of consolidated financial statements, quarterly reviews and annual audits, as well as SOX 404B compliance and testing. Oversaw global GL, consolidation, leases, foreign currency accounting, payroll and equity, AP and Fixed Assets. Managed annual audits (consolidated and statutory) and quarterly reviews with external audit firms. Created and managed a remote team in India to support US and international accounting operations. Transitioned UK and France accounting operations from 3rd party providers to a shared services center in India. Designed and implemented processes and automated systems around emerging business streams company-wide. Participated in complex contract structuring to assess accounting impact, systems needs and financial transaction flow. Managed M&A activities - full cycle from valuation, due diligence, and purchase price accounting all the way to systems integration, consolidated Financial Statements, controls, KPI’s tracking and reporting. Achieved impeccable results. Supported SEC reporting for 10Q and 10k, reviewed and prepared supporting schedules and tie-outs. Prepared and reviewed technical accounting memos for the areas of responsibility and presented to EY. Implemented ASC 842, responsible for completeness and accuracy of worldwide lease accounting and SOX controls. Responsible for 25 SOX 404B controls in the following areas: PTP, PPE, TRE, COG, FSC. Executed first year SOX 404B with no significant deficiencies. Managed five systems within SOX 404B scope. Collaborated closely with Internal Audit, SEC Reporting, FP&A, Tax and Treasury, Legal, HR, IT, and Procurement functions: PO module approval workflow, capitalized SW projects, etc. Provided guidance, working as one team. Chaired the quarterly Disclosure Committee meeting with members that included CFO and CAO. Developed and mentored international and US teams. Promoted Finance Manager to International Controller, Accountant to Senior Accountant and Accounting Manager to Sr. Accounting Manager.',
        },
        {
          end: {
            year: 2017,
            month: 7,
          },
          org: 'Natera Inc',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: 6,
          },
          title: 'Assistant Corporate Controller',
          location: 'San Carlos, CA',
          description:
            'Responsible for accounting operations: accounts payable, fixed assets, general ledger, EOM close, quarterly reviews, external audits, internal controls risk assessment, cash management and projections, Accounts Receivable. Served as the main contact during quarterly EY reviews, interim audits, SEC filings, SOX compliance walkthroughs. Served as an acting Corporate Controller during Controller’s maternity leave. Responsible for 10Q and 10K filings: financial statements, disclosure checklists, accounting memos, PBCs. Researched technical accounting literature to resolve accounting questions and drafted memos. Created and managed Company’s tax filing and compliance calendars: income, use, property and franchise tax filings. Improved company’s accrual process by partnering with functional leaders and implementing purchase requisition approval process companywide. Engaged FP&A function into accrual process for more accurate results. Managed fixed assets accounting: monthly depreciation, quarterly asset valuation, ongoing CIP and assets held-for-sale monitoring, impairment analysis and documentation. Represented finance organization at new product development, participated in pricing and market strategy and its revenue recognition implications. Established and tracked Accounting Operations KPI’s and reported monthly to the executive team.',
        },
        {
          end: {
            year: 2016,
            month: 6,
          },
          org: 'Zscaler Inc.',
          level: 'Mid-level',
          start: {
            year: 2012,
            month: 4,
          },
          title: 'Assistant Corporate Controller',
          location: 'San Jose, CA',
          description:
            'Managed worldwide accounting operations in four subsidiaries during the time of rapid growth: consolidated financial statements, audits, international and US tax compliance, global consolidation, internal and external reporting, budgeting, revenue recognition, internal controls, AP, AR, GL, Payroll (ten countries worldwide). Actively participated in IPO readiness. Prepared and presented monthly financial package to CFO. Analyzed and explained actual / budget / forecast variances. Responsible for oversight of international accounting, payroll and equity. Oversaw team in India to support OTC, PTP and international payroll cycles. Managed periodic 409A valuations. Supported the process by preparing cap table, financial statements and forecast. Administered company’s equity compensation plan. Responsible for stock-based compensation accounting. Initiated and conducted Nexus / Sales Tax study, VAT study. Managed sales tax and VAT filings.',
        },
        {
          end: {
            year: 2011,
            month: 8,
          },
          org: 'Deem Inc.',
          level: 'Mid-level',
          start: {
            year: 2007,
            month: 2,
          },
          title: 'Assistant Controller',
          location: 'Foster City, CA',
          description:
            'Managed international accounting operations in four subsidiaries. Responsible for company-wide financial close, accuracy and integrity of general ledger, intercompany accounting, cash management, AP, AR, payroll and tax compliance, financial reporting. Scaled accounting function during the time of a rapid growth. Started as individual contributor and built the team. Pioneered and completed the Company’s first five year audit and managed subsequent audits conducted by E&Y. Led implementation of accounting system from Quickbooks to NetSuite. Managed revenue recognition in four subsidiaries with multiple revenue streams and complex contracts. Streamlined payroll processing by implementing ADP PayExpert and transitioning from Intuit Payroll. Responsible for due diligence and accounting and payroll integration of three acquired subsidiaries. Promoted two AP Associates to Staff Accountants and two Staff Accountants to Financial Analysts. Improved vacation time accrual reporting by implementing ADP Time and Attendance module companywide.',
        },
        {
          end: {
            year: 2007,
            month: 2,
          },
          org: 'Embarcadero Publishing Company',
          level: 'Mid-level',
          start: {
            year: 2001,
            month: 10,
          },
          title: 'Accounting Manager',
          location: 'Palo Alto, CA',
          description:
            "Managed company's accounting operations in six divisions. Supported executive management in all accounting matters including treasury function, budgeting and operational oversight. Implemented MAS 90 and transitioned company’s accounting records from RealWorld. Prepared consolidated financial statements and flux analysis. Served as a primary point of contact with external auditors. Participated in a liquidation and opening of a new division. Responsible for due diligence and acquisition accounting. Supervised eight direct reports. Conducted performance reviews and appraisals, reviewed employee compensations.",
        },
      ],
      certificates: ['CPA'],
    },
    resume_text:
      "IRYNA BUYNYTSKA, CPA Sunnyvale, CA 94087 E-mail: Iryna.Buynytska@gmail.com  718-6964 (cell) SUMMARY OF QUALIFICATIONS  20+ years of experience building and managing global accounting operations and leading international accounting teams (start- ups, pre-IPO, SPAC IPO, public, private companies).  Hands-on experience designing, implementing, and integrating business processes, systems and workflows: Oracle, NetSuite, Great Plains, FloQast, Concur, Carta, Avalara, Expensify, Coupa.  Strong knowledge of US GAAP and IFRS: preparation of consolidated financial statements, audits, SOX, M&A activities. PROFFESSIONAL EXPERIENCE Wonolo, Inc (remote) Corporate Controller Manage global accounting operations and financial reporting including treasury, tax, compliance, and strategic finance. ___ ___September 2022-present __ _  Planned and executed the first audit for the company with no audit adjustments.  Responsible for consolidated GAAP financial reporting, revenue recognition (ASC 606) and non-standard transactions.  Established processes company-wide to assure accurate and timely 4-day EOM close.  Prepare and present finance section materials to the BOD and serve as a point of contact for questions.  Serve as a business owner of several tools integrated with NetSuite, including SFDC, Expensify and Ramp. Drive improvements, integrations, and implementation of automated controls.  Responsible for due diligence, accounting, and integration of the acquired business units. Managed M&A transactions.  Oversee complex processes and related cash flows and banking needs to support domestic and international payrolls.  Established and successfully managed relationships with bankers, auditors, and tax advisors.  Responsible for budgeting and forecasting, variance analysis.  Serve as a finance / accounting advisor to other functions during the roll out of the new and ongoing initiatives. Illumio, Inc (Sunnyvale, CA) Senior Director of Accounting Led international (US, EMEA, Singapore and Philippines) accounting operations, managed EOM close, preparation of financial statements and audits. __ ______ ______________ ___July 2021-August 2022  Managed all aspects of accounting function within controllership organization related to GL, Accounts Payable, payroll, PPE, treasury, investments, taxes, international accounting, consolidation, foreign currency transactions and procurement.  Served as a primary contact and managed annual financial audit conducted by EY.  Served as a point of contact to the Audit Committee, prepared, and presented quarterly and annual financial results.  Implemented FloQast (EOM close and reconciliation tool), strengthened controls and reduced EOM close cycle.  Implemented investments policy and established investing relationship with two asset managers, set up related accounting and reporting cadence.  Responsible for statutory filings and compliance in six international subsidiaries. Worked closely with local accountants  to meet filing requirements (VAT, GST, Income Tax returns, statutory audits). Introduced and onboarded offshore accounting team to support US accounting operations which resulted in cost savings and created operational efficiencies. Implemented GPS, foreign currency purchasing platform, brought savings to the company on foreign currency purchases.   Rolled out a number of NetSuite improvements: non-GAAP and GAAP financial statements, automated allocations. View, Inc (Milpitas, CA) (NASDAQ:VIEW)___ Assistant Corporate Controller Managed SPAC IPO project. Coordinated cross-functional teams and financial advisors and all related activities to prepare the company for SPAC IPO. Completed three years of PCAOB audits, implemented and managed SOX program. Managed financial close, preparation of financial statements and SEC filings and daily accounting operations. ___ August 2020-June 2021  Led, organized and directed all aspects of accounting function related to financial reporting, PPE, treasury and debt, AR and collections, payroll and equity and tax and compliance.  Established and directed timely and disciplined accounting close and financial reporting process.  Managed all aspects of the annual financial audits and quarterly reviews, including serving as the primary contact for the external (PwC) and internal auditors (BDO). Responsible for preparation of the requested information and the overall timeline of the audit activities.  Responsible for timeliness and accuracy of financial information sections of SEC filings (S-4, 10-Qs).  Implemented and managed company’s SOX compliance program, managed internal audit team and related activities.  Monitored accounting activities across the organization including developing policies to ensure compliance with company SOX policies and US GAAP/SEC and other statutory regulations, serve as the owner of a number of ELC controls.  Set the direction for the company’s accounting and business systems to ensure the proper automation (implemented FloQast (EOM close tool) and MetricStream (SOX management tool), served as the business owner of four applications.  Conducted technical accounting research on non-routine corporate transactions, prepared and reviewed technical accounting memos and communicated technical accounting conclusions to the management.  Partnered with SEC, FP&A, IT, HR and other organizations to drive constant improvement in accounting operations efficiency, effectiveness and scalability to support accurate and timely financial reporting. Jumio Corporation (Palo Alto, CA) Controller, US Led global accounting operations, financial reporting, and compliance while getting ready for IPO. Responsible for global EOM close, consolidated financial statements, audits, business systems implementation and integration. Oversaw international accounting, intercompany transactions, treasury, accounts payable, revenue operations, Netsuite ERP administration, US and international payroll and equity. __________ September 2019-August 2020  Managed global EOM close and consolidated financial reporting.  Shortened EOM close from 10 to 6 business days by partnering with international Controllers and automating and streamlining processes: AP vendor approval, JE upload, elimination and revaluation functions in NetSuite, PO Module for more accurate accruals, Concur/NetSuite/Amex integration for auto-feed.  Reviewed financial reporting packages and monthly reconciliations of international entities ensuring compliance with accounting standards and company policies.  Responsible for statutory filings and compliance in international subsidiaries. Worked closely with local accountants to meet filing requirements (VAT, GST, Income Tax returns, statutory audits).  Developed and managed AP and AR functions in India to support global PTP and OTC cycles.  Transitioned outsourced international payroll in-house. Implemented ADP/Celergo in UK and Canada, eliminated manual     cash disbursements and improved employee experience. Implemented ASC 606 commissions accounting. Improved T&E management by implementing Concur worldwide. Integrated with NetSuite and the banks. Implemented multi-books in NetSuite to accommodate GAAP vs statutory accounting postings requirements. Implemented internal controls around multiple processes within NetSuite: journal entry approval, vendor bills approval for accounting and payment, reviewed user roles and permissions to eliminate conflicts in SOD.  Partnered with cross-functional teams to support functional owners with reporting and process automation (automated PO  approval process) and to solve for accounting needs (internally developed software and lease accounting). Implemented Purchase Order policy and Purchase Order Module in NetSuite globally. Designed and rolled out the workflow, approval matrix, created the policy and training materials. Quotient Technology Inc, Mountain View, CA (NYSE: QUOT) Assistant Corporate Controller Managed global accounting operations and led global accounting teams. Oversaw global monthly, quarterly and annual close process, preparation and review of consolidated financial statements, quarterly reviews and annual audits, as well as SOX 404B compliance and testing. July 2017-September 2019  Oversaw global GL, consolidation, leases, foreign currency accounting, payroll and equity, AP and Fixed Assets.  Managed annual audits (consolidated and statutory) and quarterly reviews with external audit firms.  Created and managed a remote team in India to support US and international accounting operations.  Transitioned UK and France accounting operations from 3rd party providers to a shared services center in India.  Designed and implemented processes and automated systems around emerging business streams company-wide  Participated in complex contract structuring to assess accounting impact, systems needs and financial transaction flow.  Managed M&A activities - full cycle from valuation, due diligence, and purchase price accounting all the way to systems  integration, consolidated Financial Statements, controls, KPI’s tracking and reporting. Implemented NetSuite (all accounting cycles, including international subsidiaries). Staged and executed in close partnership with other functional teams. Achieved impeccable results. Implemented FloQast worldwide, provided real time visibility into EOM close process, shortened EOM close by 3 days.   Supported SEC reporting for 10Q and 10k, reviewed and prepared supporting schedules and tie-outs. Prepared and reviewed technical accounting memos for the areas of responsibility and presented to EY.  Implemented ASC 842, responsible for completeness and accuracy of worldwide lease accounting and SOX controls.  Responsible for 25 SOX 404B controls in the following areas: PTP, PPE, TRE, COG, FSC. Executed first year SOX 404B with no significant deficiencies. Managed five systems within SOX 404B scope.  Collaborated closely with Internal Audit, SEC Reporting, FP&A, Tax and Treasury, Legal, HR, IT, and Procurement functions: PO module approval workflow, capitalized SW projects, etc. Provided guidance, working as one team.  Chaired the quarterly Disclosure Committee meeting with members that included CFO and CAO.  Developed and mentored international and US teams. Promoted Finance Manager to International Controller, Accountant to Senior Accountant and Accounting Manager to Sr. Accounting Manager. Natera Inc, San Carlos, CA (NASDAQ: NTRA) Assistant Corporate Controller Responsible for accounting operations: accounts payable, fixed assets, general ledger, EOM close, quarterly reviews, external audits, internal controls risk assessment, cash management and projections, Accounts Receivable. June 2016-July 2017  Served as the main contact during quarterly EY reviews, interim audits, SEC filings, SOX compliance walkthroughs.  Served as an acting Corporate Controller during Controller’s maternity leave.  Responsible for 10Q and 10K filings: financial statements, disclosure checklists, accounting memos, PBCs.  Researched technical accounting literature to resolve accounting questions and drafted memos.  Created and managed Company’s tax filing and compliance calendars: income, use, property and franchise tax filings.  Improved company’s accrual process by partnering with functional leaders and implementing purchase requisition approval process companywide. Engaged FP&A function into accrual process for more accurate results.  Managed fixed assets accounting: monthly depreciation, quarterly asset valuation, ongoing CIP and assets held-for-sale monitoring, impairment analysis and documentation.  Represented finance organization at new product development, participated in pricing and market strategy and its revenue recognition implications.  Established and tracked Accounting Operations KPI’s and reported monthly to the executive team. Zscaler Inc., San Jose, CA (NASDAQ: ZS) Assistant Corporate Controller Managed worldwide accounting operations in four subsidiaries during the time of rapid growth: consolidated financial statements, audits, international and US tax compliance, global consolidation, internal and external reporting, budgeting, revenue recognition, internal controls, AP, AR, GL, Payroll (ten countries worldwide). April 2012 – June 2016 Implemented and administered following systems: NetSuite, Certent Avalara, ADP, Concur. Implemented multiple finance initiatives company-wide: PO Module, T&E process, tax calendar.  Actively participated in IPO readiness.  Prepared and presented monthly financial package to CFO. Analyzed and explained actual / budget / forecast variances.    Responsible for oversight of international accounting, payroll and equity.  Oversaw team in India to support OTC, PTP and international payroll cycles.   Managed periodic 409A valuations. Supported the process by preparing cap table, financial statements and forecast.  Administered company’s equity compensation plan. Responsible for stock-based compensation accounting. Initiated and conducted Nexus / Sales Tax study, VAT study. Managed sales tax and VAT filings. CPA coursework and licensing and cared after a sick child August 2011 –April 2012 Deem Inc., Foster City, CA Assistant Controller (Dec 2009 – Aug 2011), Accounting Manager (Feb 2007 – Nov 2009) Managed international accounting operations in four subsidiaries. Responsible for company-wide financial close, accuracy and integrity of general ledger, intercompany accounting, cash management, AP, AR, payroll and tax compliance, financial reporting. February 2007-August 2011 Implemented companywide revenue recognition policy according to ASC 605.  Scaled accounting function during the time of a rapid growth. Started as individual contributor and built the team.  Pioneered and completed the Company’s first five year audit and managed subsequent audits conducted by E&Y.  Led implementation of accounting system from Quickbooks to NetSuite.   Managed revenue recognition in four subsidiaries with multiple revenue streams and complex contracts.  Streamlined payroll processing by implementing ADP PayExpert and transitioning from Intuit Payroll.   Responsible for due diligence and accounting and payroll integration of three acquired subsidiaries.  Promoted two AP Associates to Staff Accountants and two Staff Accountants to Financial Analysts. Improved vacation time accrual reporting by implementing ADP Time and Attendance module companywide. Embarcadero Publishing Company, Palo Alto, CA Accounting Manager Managed company's accounting operations in six divisions. Supported executive management in all accounting matters including treasury function, budgeting and operational oversight. October 2001 – February 2007 Implemented MAS 90 and transitioned company’s accounting records from RealWorld.  Prepared consolidated financial statements and flux analysis. Served as a primary point of contact with external auditors.   Participated in a liquidation and opening of a new division. Responsible for due diligence and acquisition accounting.  Supervised eight direct reports. Conducted performance reviews and appraisals, reviewed employee compensations. CPA (CA active license) B.A. in English and German Languages with Honor, Eastern European National University, Ukraine EDUCATION",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/0a0f6d5e-a5ad-4b42-bbbe-6f6811f1fc48.pdf',
  },
  {
    email: 'japple1688@gmail.com',
    avatar: null,
    city: 'Campbell',
    state: 'California',
    country: 'United States',
    first_name: 'Jennifer',
    last_name: 'Apple',
    linkedin: '',
    phone: '+16502299923',
    current_company: 'Ionpath, Inc.',
    timezone: null,
    current_job_title: 'Senior Finance Manager',
    resume_json: {
      basics: {
        email: 'JApple1688@gmail.com',
        phone: '229-9923',
        social: [],
        lastName: 'Apple',
        linkedIn: 'https://www.linkedin.com/in/jennifer-apple-8a15b4212/',
        location: {
          city: 'Campbell',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Jennifer',
        currentCompany: 'Ionpath, Inc.',
        currentJobTitle: 'Financial Controller',
        totalExperienceInMonths: 300,
      },
      skills: [
        'Budgeting',
        'Forecasting',
        'Treasury Management',
        'Consolidation Financial Reporting',
        'FLUX/Ad hoc Analysis',
        'Inter-company Elimination Process',
        'International Accounting',
        'SOX Audit',
        'SEC Filing',
        'Consolidations',
        'Foreign Currency Issues (FAS 52)',
        'GAAP',
        'Technical Accounting',
        'Communication',
        'Organization',
        'Leadership',
        'Analytical Skills',
        'Problem-solving',
        'International Financial Reporting Standards (IFRS)',
        'English',
        'Taiwanese',
        'NetSuite',
        'Salesforce',
        'ADP',
        'Expensify',
        'Oracle R12',
        'OBIEE',
        'DRM',
        'HFM',
        'Blackline',
        'Concur',
        'Hyperion Essbase',
        'SAP',
        'Great Plains & FRx',
        'SQL/Crystal',
        'QBO',
        'Bill.com',
        'Celigo',
        'Avalara',
        'Microsoft Dynamics NAV',
        'Microsoft Office Suite (Excel, Word, Access, Outlook and PowerPoint)',
        'ERP Systems',
        'US GAAP Compliance',
        'Tax Planning',
        'Due Diligence',
        'Financial Reporting',
        'Financial Controls',
        'Vendor Payment',
        'Enterprise Revenue Management',
        'FLUX Analysis',
        'Budgeting',
        'Forecasting Template',
        'Metric-based Forecasting',
        'Cash Flow Management',
        'Sarbanes-Oxley Section 404 (SOS-404)',
        'Financial Planning',
        'Risk Management',
        'Strategic Initiatives',
        'Cash Flow Forecasting',
        'Variance Reports',
        'Rolling Cash Forecasts',
        'Financial Statements',
        'GAAP',
        'Internal Control Systems',
        'CPA',
        'CMA',
        'CIA',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Business Administration',
          start: {
            year: null,
            month: null,
          },
          degree: 'MBA',
          institution: 'Southern New Hampshire University',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accounting/Finance',
          start: {
            year: null,
            month: null,
          },
          degree: 'B.A. Accounting/Finance',
          institution: 'Christianity Universal Federation College',
        },
      ],
      overview:
        'Jennifer Apple is a Financial Controller at Ionpath, Inc. with expertise in Budgeting, Forecasting, and Treasury Management.',
      projects: [],
      languages: ['English', 'Taiwanese'],
      positions: [
        {
          end: null,
          org: 'Ionpath, Inc.',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 9,
          },
          title: 'Controller',
          location: 'Campbell, CA',
          description:
            "In partnership with the CEO, oversee all financial operations, including accounting, financial reporting, budgeting, and forecasting, to ensure accuracy, compliance, and efficiency. Provide strategic financial input and leadership on decision-making to the leadership team and the Board. Implement forecasting/budgeting models and contribute strategic financial planning for C-suite and board members including assessing the company's capital structure, and the mix of debt and equity, to attain the company's long-term goals and objectives and maximize shareholder value. Manage all accounting operations including GL, Billing, A/R, A/P, Payroll, Fixed Assets, and Cost Accounting and analyze revenue, cost of sales, and other technical areas for proper accounting and alignment to Revenue Recognition (ASC 606). Develop and maintain effective cash management systems to ensure adequate cash balances and proper investment strategies. Ensure tax compliance and necessary registrations with various state and local agencies. Maintain strong working relationships with the bank and insurance providers, coordinating all business transactions and advising the Executive Director on related issues. Monitor and track compliance with covenants and loan agreements.",
        },
        {
          end: {
            year: 2023,
            month: 8,
          },
          org: 'List Biological Laboratories, Inc.',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 2,
          },
          title: 'Controller',
          location: 'Campbell, CA',
          description:
            'Implemented NetSuite key functions for finance, accounting, procurement, manufacturing, inventory management, and order management with 100% automation, resulting in a reduction of 50% manpower for the team and 100% accuracy in financial reporting. Managed all accounting operations including GL, Treasury management, A/R, A/P, GL, Cost Accounting, Inventory Accounting, Revenue recognition (ASC 606), and external audits. Implemented effective internal policies and procedures and automation, resulting in significantly improved accounting processing qualities to reduce 50% manpower and month-end closing times from 15 days to 5 days. Safeguard assets and ensure accurate and timely recording of all transactions by implementing disciplines of internal audits, controls, and checks across all departments. Assist the CFO and other department heads in preparing the annual budget, monitor the budget throughout the year for variances; and communicate discrepancies promptly to the management team. Create a variety of monthly financial reports and present them to various audiences, including the Board, Finance & Policy Committee, and other relevant stakeholders’ team',
        },
        {
          end: {
            year: 2023,
            month: 2,
          },
          org: 'Sun Basket, Inc.',
          level: 'Senior-level',
          start: {
            year: 2016,
            month: 12,
          },
          title: 'Assistant Corporate Controller',
          location: 'San Jose, CA',
          description:
            "Started as accounting manager, got promoted to accounting director within 3 months, then promoted to assistant corporate controller within a year. Analyzed the company’s financial results concerning P&Ls and issued reports to department heads monthly. interpret their departmental P&L reports to create action plans needed to improve operations. Partner with FP&A on the actual vs. budget to VP Controller, CFO, and board members throughout the year. Treasury management - managed cash flow to ensure the cash forecast process was aligned with actual. Direct all aspects of accounting operations related to general ledger, cost accounting, revenue, payables, receivables, and compliance. This resulted in 100% accurate deliveries and reduced the monthly closing cycle to 5 days from 21 days. Implemented ERP systems – QBO, Bill.com, and Microsoft Dynamics, ADP systems for the company, and served as a system administrator to maintain the system's integrity. Establish, monitor, and enforce policies and procedures in all aspects of accounting, ensuring 100% US GAAP compliance. Served as primary contact to outside CPA firms/agencies, to oversee the regulatory reporting, frequently including tax planning and compliance in coordination with external CPA. Conducted due diligence to facilitate corporate investments and fund-raising activities.",
        },
        {
          end: {
            year: 2016,
            month: 12,
          },
          org: 'Google',
          level: 'Executive-level',
          start: {
            year: 2012,
            month: 10,
          },
          title: 'Direct of Finance/Accounting',
          location: 'Unknown',
          description:
            "Accounting Management: Managed 400+ entities’ month-end close within the system and produced the consolidated financial reports with 100% accuracy and on time with US GAAP compliance and adherence to the company's intercompany agreements-entities including US, Canada, Latin America, EMEA, and APAC. Ensured international accounting met SEC schedules and Sarbanes-Oxley compliant (SOX-404). Implemented policies, processes, and systems that facilitate improved operational efficiency and financial controls, such as vendor payment, and enterprise revenue management. System Management: Led Oracle R12 accounting system implementations, HFM systems for all aspects of accounting/finance functions to meet the client’s needs.",
        },
        {
          end: {
            year: 2012,
            month: 7,
          },
          org: 'Stanford Health Care',
          level: 'Senior-level',
          start: {
            year: 2009,
            month: 9,
          },
          title: 'Director of Finance',
          location: 'Palo Alto, CA',
          description:
            'In Charge of budgeting, designed and implemented a clear, metric-based forecasting template to include the monthly projections, annual budgets, and long-range plans for the departments across the company with explanations and actions to be taken. Managed day-to-day accounting operations in Treasury management, GL, AR, AP, and Payroll activities and provided accounting booking guidance, resulting in 100% accurate deliveries. Implemented FLUX Analysis and made recommendations to the C-suite and board members. Worked with external CPA firms for quarterly and annual audits. Managed all the local taxes and audit compliances with external audit firms. Implemented internal control procedures and processes under Sarbanes-Oxley Section 404 (SOS-404).',
        },
        {
          end: {
            year: 2009,
            month: 8,
          },
          org: 'Applied Materials',
          level: 'Executive-level',
          start: {
            year: 1998,
            month: 8,
          },
          title: 'Director of Finance/Accounting',
          location: 'Santa Clara, CA',
          description:
            'Managed day-to-day accounting operations in the U.S. and overseas Asia and Europe entities’ accounting teams.  Provided financial reporting packages to the C-suite and board members. Ensured internal controls and procedures under SOX are properly followed. Collaborate with cross-functional teams to support strategic initiatives, financial planning, and risk management. Created strategic monthly, quarterly, and annual forecasts and budgeting processes. Allocated resources and managed cash flows to enhance the efficiency and scalability of financial and operational processes. Drove financial forecasts and budgets. Provided timely reports/reviews of financial forecasts. Provided variance reports to budget with explanations and actions to be taken. Provided timely rolling cash forecasts to the CFO.',
        },
        {
          end: {
            year: 1998,
            month: 7,
          },
          org: 'Deloitte & Touche LLP',
          level: 'Associate-level',
          start: {
            year: 1994,
            month: 4,
          },
          title: 'Audit Senior',
          location: 'San Jose, CA',
          description:
            'Coordinated the day-to-day "in-charge" duties of planning, fieldwork, and "wrap-up" to include the preparing of financial statements with disclosures, applying most areas of GAAP as necessary, and documenting, validating, testing, and assessing various control systems. Clients contact for basic questions and information, involved in reviews and agreed-upon procedure engagements.',
        },
      ],
      certificates: ['CPA', 'CMA', 'CIA'],
    },
    resume_text:
      'Jennifer Apple, MBA   229-9923(H) https://www.linkedin.com/in/jennifer-apple-8a15b4212/ JApple1688@gmail.com White front OBJECTIVE Financial Controller White front SUMMARY OF QUALIFICATION 25 + years experience in corporate accounting/finance in the semiconductor, networking, software, healthcare, hospital, and food industries  Budgeting, forecasting, treasury management, consolidation financial reporting, FLUX/ Ad hoc analysis, inter-company elimination process, international accounting, SOX Audit, and SEC filing Hands-on experience with consolidations and foreign currency issues (FAS 52) Strong knowledge of GAAP, ability to comprehend and perform complex technical accounting  Excellent communication, organization, and leadership skills. Strong analytical and problem-solving skills  International Financial Reporting Standards (IFRS)  Proficient in English and Taiwanese. SOFTWARE SKILLS NetSuite, Salesforce, ADP, Expensify, Oracle R12, OBIEE, DRM, HFM, Blackline, Concur, Hyperion Essbase, SAP, Great Plains & FRx, SQL/Crystal, QBO, Bill.com, Salesforce, Celigo, Avalara, Expensify, Microsoft Dynamics NAV, Microsoft Office Suite (Excel, Word, Access, Outlook and PowerPoint, etc.) PROFESSIONAL EXPERIENCE Ionpath, Inc., Campbell, CA September 2023 - Current Controller Software: NetSuite, ADP, BILL, Salesforce, Celigo, Avalara, Expensify In partnership with the CEO, oversee all financial operations, including accounting, financial reporting, budgeting, and forecasting, to ensure accuracy, compliance, and efficiency. Provide strategic financial input and leadership on decision-making to the leadership team and the Board. Implement forecasting/budgeting models and contribute strategic financial planning for C-suite and board members including assessing the company\'s capital structure, and the mix of debt and equity, to attain the company\'s long-term goals and objectives and maximize shareholder value. Manage all accounting operations including GL, Billing, A/R, A/P, Payroll, Fixed Assets, and Cost Accounting and analyze revenue, cost of sales, and other technical areas for proper accounting and alignment to Revenue Recognition (ASC 606). Develop and maintain effective cash management systems to ensure adequate cash balances and proper investment strategies. Ensure tax compliance and necessary registrations with various state and local agencies. Maintain strong working relationships with the bank and insurance providers, coordinating all business transactions and advising the Executive Director on related issues. Monitor and track compliance with covenants and loan agreements.  List Biological Laboratories, Inc., Campbell, CA February 2023 - August 2023 Controller Software: NetSuite, ADP, Coupa, BILL, Avalara, Expensify Implemented NetSuite key functions for finance, accounting, procurement, manufacturing, inventory management, and order management with 100% automation, resulting in a reduction of 50% manpower for the team and 100% accuracy in financial reporting. Managed all accounting operations including GL, Treasury management, A/R, A/P, GL, Cost Accounting, Inventory Accounting, Revenue recognition (ASC 606), and external audits. Implemented effective internal policies and procedures and automation, resulting in significantly improved accounting processing qualities to reduce 50% manpower and month-end closing times from 15 days to 5 days. Safeguard assets and ensure accurate and timely recording of all transactions by implementing disciplines of internal audits, controls, and checks across all departments. Assist the CFO and other department heads in preparing the annual budget, monitor the budget throughout the year for variances; and communicate discrepancies promptly to the management team. Create a variety of monthly financial reports and present them to various audiences, including the Board, Finance & Policy Committee, and other relevant stakeholders’ team Sun Basket, Inc., San Jose, CA December 2016 - February 2023 Assistant Corporate Controller Software: QBO, Bill.com, ADP, Microsoft Dynamics NAV, Avalara, Expensify Started as accounting manager, got promoted to accounting director within 3 months, then promoted to assistant corporate controller within a year. Analyzed the company’s financial results concerning P&Ls and issued reports to department heads monthly. interpret their departmental P&L reports to create action plans needed to improve operations. Partner with FP&A on the actual vs. budget to VP Controller, CFO, and board members throughout the year. Treasury management - managed cash flow to ensure the cash forecast process was aligned with actual. Direct all aspects of accounting operations related to general ledger, cost accounting, revenue, payables, receivables, and compliance. This resulted in 100% accurate deliveries and reduced the monthly closing cycle to 5 days from 21 days. Implemented ERP systems – QBO, Bill.com, and Microsoft Dynamics, ADP systems for the company, and served as a system administrator to maintain the system\'s integrity. Establish, monitor, and enforce policies and procedures in all aspects of accounting, ensuring 100% US GAAP compliance. Served as primary contact to outside CPA firms/agencies, to oversee the regulatory reporting, frequently including tax planning and compliance in coordination with external CPA. Conducted due diligence to facilitate corporate investments and fund-raising activities. Google October 2012 - December 2016 Direct of Finance/Accounting Software: Oracle R12, 11i, HFM, DRM, Essbase, OBIEE, Blackline, SAP Accounting Management: Managed 400+ entities’ month-end close within the system and produced the consolidated financial reports with 100% accuracy and on time with US GAAP compliance and adherence to the company\'s intercompany agreements-entities including US, Canada, Latin America, EMEA, and APAC. Ensured international accounting met SEC schedules and Sarbanes-Oxley compliant (SOX-404). Implemented policies, processes, and systems that facilitate improved operational efficiency and financial controls, such as vendor payment, and enterprise revenue management. System Management: Led Oracle R12 accounting system implementations, HFM systems for all aspects of accounting/finance functions to meet the client’s needs. Stanford Health Care, Palo Alto, CA September 2009 - July 2012 Director of Finance Software: Oracle 11i, HFM, DRM, & FRx Great Plains, SQL/Crystal, ADP In Charge of budgeting, designed and implemented a clear, metric-based forecasting template to include the monthly projections, annual budgets, and long-range plans for the departments across the company with explanations and actions to be taken. Managed day-to-day accounting operations in Treasury management, GL, AR, AP, and Payroll activities and provided accounting booking guidance, resulting in 100% accurate deliveries. Implemented FLUX Analysis and made recommendations to the C-suite and board members. Worked with external CPA firms for quarterly and annual audits. Managed all the local taxes and audit compliances with external audit firms. Implemented internal control procedures and processes under Sarbanes-Oxley Section 404 (SOS-404). Applied Materials, Santa Clara, CA August 1998 – Aug 2009 Director of Finance/Accounting Accounting Software: Oracle, ADP, HFM, DRM, Hyperion Pillar, Essbase, SAP Managed day-to-day accounting operations in the U.S. and overseas Asia and Europe entities’ accounting teams.  Provided financial reporting packages to the C-suite and board members. Ensured internal controls and procedures under SOX are properly followed. Collaborate with cross-functional teams to support strategic initiatives, financial planning, and risk management. Created strategic monthly, quarterly, and annual forecasts and budgeting processes. Allocated resources and managed cash flows to enhance the efficiency and scalability of financial and operational processes. Drove financial forecasts and budgets. Provided timely reports/reviews of financial forecasts. Provided variance reports to budget with explanations and actions to be taken. Provided timely rolling cash forecasts to the CFO. Deloitte & Touche LLP, San Jose, CA April 1994 – July 1998 Audit Senior Accounting Software: Oracle 11, SAP, Great Plains & FRx, SQL/Crystal, ADP Coordinated the day-to-day "in-charge" duties of planning, fieldwork, and "wrap-up" to include the preparing of financial statements with disclosures, applying most areas of GAAP as necessary, and documenting, validating, testing, and assessing various control systems. Clients contact for basic questions and information, involved in reviews and agreed-upon procedure engagements. EDUCATION MBA Southern New Hampshire University, Manchester, N.H. B.A. Accounting/Finance- Christianity Universal Federation College, Taipei, Taiwan. CPA (Not Active) CMA CIA',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/726ba07f-9faa-4751-a773-092d9f48e825.docx',
  },
  {
    email: 'eric.nakatani@gmail.com',
    avatar: null,
    city: 'Santa Clara',
    state: 'California',
    country: 'United States',
    first_name: 'Eric',
    last_name: 'Nakatani',
    linkedin: '',
    phone: '+14086460459',
    current_company: 'iRHYTHM TECHNOLOGIES',
    timezone: null,
    current_job_title: 'Assistant Controller',
    resume_json: {
      basics: {
        email: 'eric.nakatani@gmail.com',
        phone: '4080459',
        social: [],
        lastName: 'NAKATANI',
        linkedIn: null,
        location: {
          city: 'Santa Clara',
          state: 'CA',
          country: '',
        },
        firstName: 'ERIC',
        currentCompany: 'iRHYTHM TECHNOLOGIES',
        currentJobTitle: 'Assistant Controller',
        totalExperienceInMonths: 210,
      },
      skills: [
        'Financial Operations',
        'Corporate Finance & Accounting',
        'Worldwide Consolidation',
        'Financial Statements and Reports',
        'Month-end Close',
        'Mergers & Acquisitions',
        'Financial Analysis',
        'SEC Reporting',
        'SBC Reporting',
        'SOX Compliance',
        'US GAAP/IFRS',
        'Technical Accounting',
        'ERP Implementation',
        'Internal/External Audits',
        'Continuous Improvement',
        'Staff Leadership & Development',
        'Shared Service Centers',
        'Cross-Functional Initiatives',
        'Finance ERP (Oracle, NetSuite, QAD)',
        'Reporting (PBCS/Hyperion, Workiva, Workday Adaptive Planning, Incorta, Excel4apps)',
        'Business Tools (Office 365, G Suite)',
      ],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Accounting',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Science',
          institution: 'SAN JOSE STATE UNIVERSITY',
        },
      ],
      overview:
        'Eric Nakatani is currently working as an Assistant Controller at iRHYTHM TECHNOLOGIES. He has expertise in Financial Operations, SEC Reporting, and ERP Implementation.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'iRHYTHM TECHNOLOGIES',
          level: 'Mid-level',
          start: {
            year: 2022,
            month: 4,
          },
          title: 'Assistant Controller',
          location: 'San Francisco, CA',
          description:
            'Accountable for ensuring consistent compliance of corporate accounting principles and procedures in full compliance with US GAAP and SEC reporting standards. Managed global accounting operations, encompassing general ledger, consolidation, journal entry review, flux analysis, reconciliations review, financial reporting, and day-to-day accounting operations covering cash, cost accounting, AP and accruals, and travel & expense. Led a lean US accounting team and established a finance shared service center in the Philippines, managing direct and indirect reports to ensure accurate and timely financial reporting across all operations. Drive processes to optimize and automate accounting operations to drive efficient monthly/quarterly close cycles and improve accuracy and efficiency. Responsible for managing and maintaining the financial ERP reporting system, ensuring data accuracy and integrity',
        },
        {
          end: {
            year: 2022,
            month: null,
          },
          org: 'SYNCTERA',
          level: 'Mid-level',
          start: {
            year: 2021,
            month: null,
          },
          title: 'Director of Finance, Accounting',
          location: 'Palo Alto, CA',
          description:
            'Plan, directed and supported the accounting operational functions. Responsible for the accounting close and financial reporting. Develop accounting processes, policies, and procedures to scale. Establish foreign subsidiaries and compliance with statutory reporting requirements',
        },
        {
          end: {
            year: 2021,
            month: null,
          },
          org: 'EQUINIX',
          level: 'Senior-level',
          start: {
            year: 2019,
            month: null,
          },
          title: 'Senior Manager, Global Accounting Leadership',
          location: 'Redwood City, CA',
          description:
            'Managed the worldwide consolidation of 150+ legal entities, month-end close process, and financial reporting. Enhanced the financial operations for 200+ data centers in over 24 countries. Simplified, standardized, and streamlined the accounting cycle',
        },
      ],
      certificates: [],
    },
    resume_text:
      'ERIC NAKATANI, CPA Santa Clara, CA 95050 Mobile: 4080459 eric.nakatani@gmail.com KEY AREAS OF EXPERTISE • Financial Operations • Corporate Finance & Accounting • Worldwide Consolidation • Financial Statements and Reports • Month-end Close • Mergers & Acquisitions Accomplished Finance Professional with extensive corporate accounting experience and a deep understanding of complex financial landscapes. Recognized for expertise in financial consolidation, analysis, and compliance, with a proven track record in enhancing financial reporting and operational efficiency. Skilled in establishing finance structures and strategies that mitigate risk and improve processes. Effective at building strong relationships with business partners, providing key financial insights and leadership. As a hands-on leader, I drive company-wide initiatives and operations, consistently motivating teams to exceed performance expectations. • Financial Analysis • SEC Reporting • SBC Reporting • SOX Compliance • US GAAP/IFRS • Technical Accounting • ERP Implementation • Internal/External Audits • Continuous Improvement • Staff Leadership & Development • Shared Service Centers • Cross-Functional Initiatives TECHNICAL PROFICIENCY • Finance ERP (Oracle, NetSuite, QAD) • Reporting (PBCS/Hyperion, Workiva, Workday Adaptive Planning, Incorta, Excel4apps) • Business Tools (Office 365, G Suite) EDUCATION SAN JOSE STATE UNIVERSITY, San Jose, CA Bachelor of Science: Accounting LICENSURE CALIFORNIA BOARD OF ACCOUNTANCY Certified Public Accountant License – Active PROFESSIONAL EXPERIENCE iRHYTHM TECHNOLOGIES, San Francisco, CA – Apr 2022 to present Assistant Controller  Accountable for ensuring consistent compliance of corporate accounting principles and procedures in full compliance with US GAAP and SEC reporting standards  Managed global accounting operations, encompassing general ledger, consolidation, journal entry review, flux analysis, reconciliations review, financial reporting, and day-to-day accounting operations covering cash, cost accounting, AP and accruals, and travel & expense.  Led a lean US accounting team and established a finance shared service center in the Philippines, managing direct and indirect reports to ensure accurate and timely financial reporting across all operations.  Drive processes to optimize and automate accounting operations to drive efficient monthly/quarterly close cycles and improve accuracy and efficiency  Responsible for managing and maintaining the financial ERP reporting system, ensuring data accuracy and integrity SYNCTERA, Palo Alto, CA – 2021 to 2022 Director of Finance, Accounting  Plan, directed and supported the accounting operational functions  Responsible for the accounting close and financial reporting  Develop accounting processes, policies, and procedures to scale  Establish foreign subsidiaries and compliance with statutory reporting requirements EQUINIX, Redwood City, CA – 2017 to 2021 Senior Manager, Global Accounting Leadership (2019- 2021)  Managed the worldwide consolidation of 150+ legal entities, month-end close process, and financial reporting  Enhanced the financial operations for 200+ data centers in over 24 countries Simplified, standardized, and streamlined the accounting cycle  ERIC NAKATANI, CPA Resume –  EQUINIX, continued Senior Manager, Global Finance Controllership (2017-2019)  Partnered with management to support growth strategies in new  market segments and geographic regions Implemented industry best practices that significantly enhanced financial operations  Mentored, coached, developed, and evaluated team members AMOBEE, Redwood City, CA – 2014 to 2017 (Subsidiary of Singapore Telecommunications) Director of Finance, Accounting and Corporate Reporting  Direct accounting, consolidations, corporate reporting, and revenue recognition for a global digital marketing technology company  Developed the accounting infrastructure, ERP financial system, and controls over financial reporting  Ensured adherence to US GAAP and IFRS  Served as principal advisor to management on technical accounting matters KEYSIGHT TECHNOLOGIES, Santa Rosa, CA – 2014 (Spin-off of Agilent Technologies) SEC Reporting Lead  Led the SEC Reporting team in a spin-off, filing as a new publicly-  traded company Spearheaded the preparation and filing of Form 10, public offering; registration statement cleared by the SEC  Key contributor in structuring the finance organization and developing accounting/financial reporting systems  Effectively used cross-functional resources to prepare required SEC forms and filings within a compressed timeframe AGILENT TECHNOLOGIES, Santa Clara, CA – 2007 to 2014 Consolidation Manager, Corporate Financial Reporting  Managed the worldwide consolidation of 130+ legal entities,  Prepared financial reporting information for monthly review meetings with the CFO and CEO  Assisted cross-functional partners in merger and acquisition due diligence, purchase accounting, and financial integration  Maintained and expanded a successful global Shared Service Center BORLAND SOFTWARE, Cupertino, CA – 2005 to 2007 Revenue Accounting Manager SYMANTEC, Cupertino, CA – 2002 to 2005 International Accounting Supervisor CAREER DEVELOPMENT C.G. UHLENBERG & COMPANY, Redwood City, CA Audit Manager  Participate in financial, operational, and compliance audits, as well as preparing full disclosure financial statements.',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/61bed9a8-4a43-4d13-8d24-e74663efd479.pdf',
  },
  {
    email: 'jdelacroix46@gmail.com',
    avatar: null,
    city: null,
    state: 'California',
    country: 'United States',
    first_name: 'Jaime',
    last_name: 'Williamson',
    linkedin: '',
    phone: '6502231504',
    current_company: 'Business Talent Group',
    timezone: null,
    current_job_title: 'Corporate Finance Management Executive',
    resume_json: {
      basics: {
        email: 'jdelacroix46@gmail.com',
        phone: '223-1504',
        social: [],
        lastName: 'Williamson',
        linkedIn: null,
        location: {
          city: 'San Francisco Bay Area',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Jaime',
        currentCompany: 'Business Talent Group',
        currentJobTitle: 'Corporate Finance Management Executive',
        totalExperienceInMonths: 420,
      },
      skills: [
        'Treasury Management',
        'Financial Risk Management',
        'Financial Analysis and Strategic Planning',
        'Budgeting development and Management',
        'Domestic and International Taxation',
        'US GAAP',
        'IFRS',
        'GASB and Non-Profit Accounting',
        'ASC 606/718/842 SME',
        'Cost Control/Reduction',
        'Transfer Pricing Policies',
        'Regulatory and SOX Compliance',
        'Financial and SEC Reporting',
        'Financial Statement Preparation',
        'Staff Management and Development',
        'Cross-functional Team Leadership',
        'Business and Organizational Development',
        'Audit Management',
        'SaaS Metrics',
        'Continuous Process Improvement',
        'Private Equity',
        'Merger and Acquisition Integration',
        'Technology Introduction/Enhancement',
        'CPG Manufacturing',
        'NetSuite',
        'SAP',
        'Oracle',
        'QBO',
        'Microsoft Dynamics',
        'SaaSOptics',
        'Avalara',
        'Salesforce',
        'Bill.com',
        'Jedox',
        'Coupa',
        'Workiva',
      ],
      overview:
        'Jaime Williamson is a Corporate Finance Management Executive at Business Talent Group with expertise in Financial Risk Management, Budgeting development and Management, and Regulatory and SOX Compliance.',
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Business Talent Group, a Heidrick & Struggles Company',
          level: 'Executive-level',
          start: {
            year: 2024,
            month: null,
          },
          title:
            'Fractional CFO|Saas|Software|M&A|Compliance|Strategic Planning',
          location: 'San Francisco Bay Area, CA',
          description:
            'Spearheaded strategic planning and business planning initiatives, driving growth optimization and risk management to align with corporate objectives. Directed comprehensive financial operations oversight, including financial analysis, reporting, and performance presentation, ensuring accuracy and regulatory compliance. Cultivated a culture of excellence within the finance team through dedicated mentoring and collaboration, enhancing team capabilities and performance.',
        },
        {
          end: {
            year: 2024,
            month: null,
          },
          org: 'COMPANY CONFIDENTIAL',
          level: 'Executive-level',
          start: {
            year: 2023,
            month: null,
          },
          title: 'Vice President and Corporate Controller',
          location: 'San Francisco, CA',
          description:
            'Directed comprehensive financial planning, budgeting, and forecasting on a consolidated basis, aligning with strategic objectives and operational models, focusing on optimization and differentiation. Led a cross-functional team to enhance internal processes, systems, and data quality, markedly improving operational efficiency and decision-making capabilities. Oversaw all aspects of Revenue Operations, including billings and sales revenue accounting, and led the annual planning process. Actively monitored and responded to tax law changes, optimizing business processes and policies for global compliance. Developed and sustained robust liquidity cash-flow models, both short-term and long-term, to manage global liquidity levels and support strategic investment decisions effectively. Performed comprehensive financial and operational analysis in key areas such as sales, marketing, purchasing, and production, providing essential insights and forecasts to inform strategic decisions. Created and implemented corporate-wide KPI Executive Dashboards, delivering precise financial measurements and resource allocation insights to support business objectives. Authored and disseminated a standard policy and procedures manual for general accounting and treasury operations, fostering organizational consistency and compliance.',
        },
        {
          end: {
            year: 2023,
            month: null,
          },
          org: 'MURSION, INC.',
          level: 'Executive-level',
          start: {
            year: 2021,
            month: null,
          },
          title: 'Vice President and Corporate Controller',
          location: 'San Francisco, CA',
          description:
            "Directed the company's comprehensive accounting operations, including revenue management, accounts receivable/payable, collections, asset management, and compliance with taxation regulations. Led the development of financial projections and cash flow forecasts to evaluate the viability of strategic growth plans, while implementing alternative financing solutions to support expansion. Expanded and refined the finance and accounting functions, establishing a robust foundation for global expansion through strategic oversight of corporate accounting, finance, and payroll operations. Managed corporate treasury, budgeting, auditing, and accounting functions, enhancing financial performance through the generation and analysis of reports on Key Performance Indicators (KPIs), SaaS Metrics, Gross Margin Analysis, and Customer Growth/Retention. Instituted and enforced software revenue recognition policies [ASC 606], ensuring compliance and accuracy in financial reporting. Championed a best-in-class financial close process, ensuring timely and accurate reporting across all accounting areas. Spearheaded the development of strategic work plans by consolidating relevant data, analyses, and recommendations, thereby facilitating informed decision-making. Formulated and executed strategic initiatives, enhancing organizational processes, tools, and systems to support business objectives. Developed and mentored the accounting team, emphasizing advanced communication, transparency, and effective cross-functional partnerships. Ensured compliance with US GAAP through the interpretation and implementation of new accounting pronouncements. Served as the primary liaison with external auditors and service providers, preparing presentations for the board of directors and private equity investors.",
        },
        {
          end: {
            year: 2020,
            month: null,
          },
          org: '4iQ, INC. (rebranded CONSTELLA INTELLIGENCE, INC.)',
          level: 'Executive-level',
          start: {
            year: 2019,
            month: 2019,
          },
          title:
            'VP/Corporate Controller and Senior Director of Technical Accounting',
          location: 'San Francisco Bay Area, CA',
          description:
            'Spearheaded the transformation of diverse accounting systems to NetSuite, enhancing operational efficiencies and preparing for organizational growth. Led the integration of financial systems for acquired entities into NetSuite. Directed teams towards superior data quality across all systems, ensuring accountability in execution and adherence to strategic plans. Formulated and executed strategic directives for comprehensive operations, encompassing growth and scaling management, cost containment, and quality control. Supervised daily and monthly accounting activities. Administered and supervised the annual budgeting and forecasting processes, formulating and implementing strategies for sustained growth. Developed and communicated key operational, financial, and sales metrics, including KPIs, dashboards, and business trends, to drive consistent productivity and efficiency enhancements. Conducted quarterly financial analyses to review actual financial outcomes and project future periods, providing strategic financial insights to support executive decisions, M&A activities, and strategic partnerships. Played a pivotal role in fundraising efforts, including crafting presentations for investors and potential investors. Collaborated closely with the CFO on investor relations. Led the continuous development and refinement of business intelligence and budgeting solutions, ensuring the alignment with organizational goals and financial stability.',
        },
        {
          end: {
            year: 2019,
            month: 2019,
          },
          org: 'PROFESSIONAL CONSULTING',
          level: 'Executive-level',
          start: {
            year: 2013,
            month: 2013,
          },
          title:
            'Executive Management Consultant |Accounting| Financial Analysis|Operations|M & A|Strategic Planning|SaaS',
          location: 'San Francisco Bay Area, CA',
          description:
            'Worked on confidential and non-confidential projects, which leverage my skills in finance and accounting, Mergers-Acquisitions, due diligence, strategic planning, go-to-market strategy (GTM) and operations skills; and my ERP Implementation experience to address client’s needs. Many projects were long-term, extremely exciting and rewarding. My client base consists of startups, private equity backed and pre-IPO companies from various industries. Selected Clients: Strategic Applications Developers, Entelos (publicly traded),Warby-Parker (manufacturing)(publicly traded), Framebridge(manufacturing)(now Graham Holdings, Inc, publicly traded), ChargePoint (manufacturing)(publicly traded), Jawbone, IGN (News Corp, publicly traded), Grass Valley (Technicolor), URS Corporation (now AECOM Inc., publicly traded).',
        },
        {
          end: {
            year: 2012,
            month: 2012,
          },
          org: 'MAGMA DESIGN AUTOMATION, INC. (Acquired by SYNOPSYS CORPORATION)',
          level: 'Executive-level',
          start: {
            year: 2009,
            month: 2009,
          },
          title: 'Senior Director, Finance and Acting Corporate Controller',
          location: 'San Francisco Bay Area, CA',
          description: null,
        },
        {
          end: {
            year: 2009,
            month: 2009,
          },
          org: 'RENOVIS, INC. (Acquired by EVOTEC AG)',
          level: 'Executive-level',
          start: {
            year: 2007,
            month: 2007,
          },
          title:
            'VP/Corporate Controller and Senior Director of Technical Accounting',
          location: 'San Francisco Bay Area, CA',
          description: null,
        },
        {
          end: {
            year: 2006,
            month: 2006,
          },
          org: 'GOLDEN GATE SOFTWARE, INC (Acquired by ORACLE CORPORATION)',
          level: 'Executive-level',
          start: {
            year: 2005,
            month: 2005,
          },
          title:
            'Corporate Controller and Senior Director of Technical Accounting',
          location: 'San Francisco Bay Area, CA',
          description: null,
        },
        {
          end: {
            year: 2006,
            month: 2006,
          },
          org: 'MONSTER CABLE PRODUCTS, INC.',
          level: 'Executive-level',
          start: {
            year: 2005,
            month: 2005,
          },
          title:
            'Corporate Controller and Senior Director of Technical Accounting',
          location: 'Brisbane, CA',
          description: null,
        },
        {
          end: {
            year: 2005,
            month: 2005,
          },
          org: 'NAARTJIE CUSTOM KIDS, INC.',
          level: 'Executive-level',
          start: {
            year: 2003,
            month: 2003,
          },
          title: 'Vice President and Corporate Controller',
          location: 'Burlingame, CA',
          description: null,
        },
        {
          end: {
            year: 2003,
            month: 2003,
          },
          org: 'THE FINANCE DREAM TEAM, LLC. (Acquired by AUTODESK)',
          level: 'Executive-level',
          start: {
            year: 1996,
            month: 1996,
          },
          title:
            'VP/Corporate Controller and Senior Director of Technical Accounting',
          location: 'San Francisco, CA',
          description: null,
        },
        {
          end: {
            year: 1996,
            month: 1996,
          },
          org: 'RELIABLE BUSINESS SERVICES, INC.',
          level: 'Executive-level',
          start: {
            year: 1986,
            month: 1986,
          },
          title: 'Vice President and Corporate Controller',
          location: 'San Francisco, CA',
          description: null,
        },
        {
          end: {
            year: 1986,
            month: 1986,
          },
          org: 'NUTRASWEET KELCO COMPANY (Acquired by MONSANTO CORPORATION)',
          level: 'Executive-level',
          start: {
            year: 1984,
            month: 1984,
          },
          title: 'Senior Director of Finance',
          location: 'San Francisco, CA',
          description: null,
        },
        {
          end: {
            year: 1984,
            month: 1984,
          },
          org: 'MONTENEGRO & ASSOCIATES, LTD.',
          level: 'Executive-level',
          start: {
            year: 1982,
            month: 1982,
          },
          title: 'Corporate Controller',
          location: 'San Diego, CA',
          description: null,
        },
        {
          end: {
            year: 1982,
            month: 1982,
          },
          org: 'ARTHUR YOUNG & COMPANY (now E&Y)',
          level: 'Fresher-level',
          start: {
            year: 1979,
            month: 1979,
          },
          title: 'Senior Auditor',
          location: 'Chicago, IL',
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Webster University',
          level: 'Associate-level',
          start: {
            year: null,
            month: null,
          },
          title: 'MBA/ BBA Business Administration, Cum Laude',
          location: 'San Diego, CA',
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Loyola University of Chicago',
          level: 'Associate-level',
          start: {
            year: null,
            month: null,
          },
          title: 'MA/BA Sociology',
          location: 'Chicago, IL',
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Miramar College',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: 'Certificate- Paralegal Studies',
          location: 'San Diego, CA',
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'American Institute of Certified Public Accountants',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'California Society of Certified Public Accountants',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'ABA',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Certified Public Accountant (CPA) (Inactive)',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Certified Management Accountant (CMA)',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Spanish–Fluent, French–Intermediate, Italian–Intermediate',
          level: 'Fresher-level',
          start: {
            year: null,
            month: null,
          },
          title: null,
          location: null,
          description: null,
        },
      ],
    },
    resume_text:
      "Jaime Williamson, CPA, CMA, MBA Phone:  223-1504 Email: jdelacroix46@gmail.com CORPORATE FINANCE MANAGEMENT EXECUTIVE • CORPORATE CONTROLLER/ACCOUNTING MANAGER strategic financial partner with balance of operational and financial acumen Innovative and highly accomplished, result-driven visionary finance executive with more than 35 years of progressive experience with demonstrated success in increasing revenues, earnings, and achieving cost reductions. Demonstrated ability to streamline business operations that drive growth, increase continual profits through focused, strategic workflow, staffing, and business practice analysis. Strong qualifications in developing and executing financial controls and processes in addition to productivity improvements and change management. Able to identify and accelerate strategic measures that strengthen performance. CORE COMPETENCIES Treasury Management Financial Risk Management • Financial Analysis and Strategic Planning • Budgeting development and Management • • Domestic and International Taxation • • US GAAP, IFRS,GASB and Non-Profit Accounting • • • • ASC 606/718/842 SME • Cost Control/Reduction Transfer Pricing Policies Regulatory and SOX Compliance Financial and SEC Reporting Financial Statement Preparation Staff Management and Development Cross-functional Team Leadership • • • • Business and Organizational Development • Audit Management • SaaS Metrics • Continuous Process Improvement • Private Equity • Merger and Acquisition Integration • • Technology Introduction/Enhancement CPG Manufacturing NetSuite • SAP • Oracle • QBO • Microsoft Dynamics• SaaSOptics• Avalara• Salesforce • Bill.com• Jedox• Coupa• Workiva PROFESSIONAL EXPERIENCE TECHNICAL SKILLS San Francisco Bay Area, CA Fractional CFO|Saas|Software|M&A|Compliance|Strategic Planning, 2024 Business Talent Group, a Heidrick & Struggles Company • Spearheaded strategic planning and business planning initiatives, driving growth optimization and risk management to align with corporate objectives. • Directed comprehensive financial operations oversight, including financial analysis, reporting, and performance presentation, • ensuring accuracy and regulatory compliance. Cultivated a culture of excellence within the finance team through dedicated mentoring and collaboration, enhancing team capabilities and performance. Vice President and Corporate Controller,2023-2024 COMPANY CONFIDENTIAL A privately held CPG manufacturing company. San Francisco, CA Selected accomplishments: • Directed comprehensive financial planning, budgeting, and forecasting on a consolidated basis, aligning with strategic objectives • and operational models, focusing on optimization and differentiation. Led a cross-functional team to enhance internal processes, systems, and data quality, markedly improving operational efficiency and decision-making capabilities. • Oversaw all aspects of Revenue Operations, including billings and sales revenue accounting, and led the annual planning process. Actively monitored and responded to tax law changes, optimizing business processes and policies for global compliance. • Developed and sustained robust liquidity cash-flow models, both short-term and long-term, to manage global liquidity levels and • • support strategic investment decisions effectively. Performed comprehensive financial and operational analysis in key areas such as sales, marketing, purchasing, and production, providing essential insights and forecasts to inform strategic decisions. Created and implemented corporate-wide KPI Executive Dashboards, delivering precise financial measurements and resource allocation insights to support business objectives. • Authored and disseminated a standard policy and procedures manual for general accounting and treasury operations, fostering organizational consistency and compliance. Jaime Williamson, CPA, CMA, MBA  of 3 • Formulated and executed global supply chain policies and procedures, leading the selection and implementation of a new global ERP system to streamline operations and facilitate business growth. Vice President and Corporate Controller,2021-2023 MURSION, INC. A privately held SaaS company in the artificial intelligence (AI) sector. San Francisco, CA Selected accomplishments: • Directed the company's comprehensive accounting operations, including revenue management, accounts receivable/payable, • • collections, asset management, and compliance with taxation regulations. Led the development of financial projections and cash flow forecasts to evaluate the viability of strategic growth plans, while implementing alternative financing solutions to support expansion. Expanded and refined the finance and accounting functions, establishing a robust foundation for global expansion through strategic oversight of corporate accounting, finance, and payroll operations. • • • Managed corporate treasury, budgeting, auditing, and accounting functions, enhancing financial performance through the generation and analysis of reports on Key Performance Indicators (KPIs), SaaS Metrics, Gross Margin Analysis, and Customer Growth/Retention. Instituted and enforced software revenue recognition policies [ASC 606], ensuring compliance and accuracy in financial reporting. Championed a best-in-class financial close process, ensuring timely and accurate reporting across all accounting areas. Implemented a standardized monthly management reporting package for US subsidiaries, integrating business insights and variance analysis. Spearheaded the development of strategic work plans by consolidating relevant data, analyses, and recommendations, thereby facilitating informed decision-making. Formulated and executed strategic initiatives, enhancing organizational processes, tools, and systems to support business objectives. • • • Developed and mentored the accounting team, emphasizing advanced communication, transparency, and effective cross- • • functional partnerships. Ensured compliance with US GAAP through the interpretation and implementation of new accounting pronouncements. Served as the primary liaison with external auditors and service providers, preparing presentations for the board of directors and private equity investors. VP/Corporate Controller and Senior Director of Technical Accounting, 2019-2020 4iQ, INC. (rebranded CONSTELLA INTELLIGENCE, INC.) A privately held SaaS company in the cyber intelligence sector. San Francisco Bay Area, CA Selected accomplishments: • Spearheaded the transformation of diverse accounting systems to NetSuite, enhancing operational efficiencies and preparing for organizational growth. Led the integration of financial systems for acquired entities into NetSuite. • Directed teams towards superior data quality across all systems, ensuring accountability in execution and adherence to strategic • plans. Formulated and executed strategic directives for comprehensive operations, encompassing growth and scaling management, cost containment, and quality control. Supervised daily and monthly accounting activities. • Administered and supervised the annual budgeting and forecasting processes, formulating and implementing strategies for sustained growth. • Developed and communicated key operational, financial, and sales metrics, including KPIs, dashboards, and business trends, to • • • drive consistent productivity and efficiency enhancements. Conducted quarterly financial analyses to review actual financial outcomes and project future periods, providing strategic financial insights to support executive decisions, M&A activities, and strategic partnerships. Played a pivotal role in fundraising efforts, including crafting presentations for investors and potential investors. Collaborated closely with the CFO on investor relations. Led the continuous development and refinement of business intelligence and budgeting solutions, ensuring the alignment with organizational goals and financial stability. Executive Management Consultant |Accounting| Financial Analysis|Operations|M & A|Strategic Planning|SaaS, 2013-2019 PROFESSIONAL CONSULTING San Francisco Bay Area, CA Worked on confidential and non-confidential projects, which leverage my skills in finance and accounting, Mergers-Acquisitions, due diligence, strategic planning, go-to-market strategy (GTM) and operations skills; and my ERP Implementation experience to address Jaime Williamson, CPA, CMA, MBA  of 3 client’s needs. Many projects were long-term, extremely exciting and rewarding. My client base consists of startups, private equity backed and pre-IPO companies from various industries. Selected Clients: Strategic Applications Developers, Entelos (publicly traded),Warby-Parker (manufacturing)(publicly traded), Framebridge(manufacturing)(now Graham Holdings, Inc, publicly traded), ChargePoint (manufacturing)(publicly traded), Jawbone, IGN (News Corp, publicly traded), Grass Valley (Technicolor), URS Corporation (now AECOM Inc., publicly traded). Senior Director, Finance and Acting Corporate Controller, 2009-2012 MAGMA DESIGN AUTOMATION, INC. (Acquired by SYNOPSYS CORPORATION) [symbol: LAVA] A publicly traded global software company in the electronic design automation sector. ADDITIONAL PROFESSIONAL EXPERIENCE VP/Corporate Controller and Senior Director of Technical Accounting, 2007-2009 RENOVIS, INC. (Acquired by EVOTEC AG) [symbol: REN] A publicly traded company in the biopharmaceutical sector. Corporate Controller and Senior Director of Technical Accounting, 2006-2007 GOLDEN GATE SOFTWARE, INC (Acquired by ORACLE CORPORATION) A pre-IPO B2B global transactional data management SaaS company. Corporate Controller and Senior Director of Technical Accounting, 2005-2006 MONSTER CABLE PRODUCTS, INC. A privately held B2B global consumer electronics manufacturing company. Vice President and Corporate Controller, 2003-2005 NAARTJIE CUSTOM KIDS, INC. A pre-IPO global children’s apparel manufacturer and retailer. VP/Corporate Controller and Senior Director of Technical Accounting, 1996-2003 THE FINANCE DREAM TEAM, LLC. (Acquired by AUTODESK) A privately held B2B international IT consulting firm. Vice President and Corporate Controller, 1986-1996 RELIABLE BUSINESS SERVICES, INC. A pre-IPO B2B global business solutions company. Senior Director of Finance, 1984-1986 NUTRASWEET KELCO COMPANY (Acquired by MONSANTO CORPORATION) A publicly traded company in the agriculture and biotechnology sectors. Corporate Controller, 1982-1984 MONTENEGRO & ASSOCIATES, LTD. A privately held financial services (equipment leasing)company. Senior Auditor, 1979-1982 ARTHUR YOUNG & COMPANY (now E&Y) A global leader in assurance, consulting, strategy and transactions and tax services. EDUCATION Webster University • MBA/ BBA Business Administration, Cum Laude Loyola University of Chicago • MA/BA Sociology Miramar College • Certificate- Paralegal Studies San Jose, CA South San Francisco, CA San Francisco, CA Brisbane, CA Burlingame, CA San Francisco, CA San Diego, CA San Diego, CA San Francisco, CA Chicago, IL San Diego, CA Chicago, IL San Diego, CA PROFESSIONAL AFFILIATIONS • American Institute of Certified Public Accountants • California Society of Certified Public Accountants • ABA CERTIFICATIONS • • Certified Public Accountant (CPA) (Inactive) • Certified Management Accountant (CMA) Spanish–Fluent, French–Intermediate, Italian–Intermediate LANGUAGE SKILLS",
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/95ce7cb4-1631-4120-b6bf-fbdd71937632.pdf',
  },
  {
    email: 'montocpa@gmail.com',
    avatar: null,
    city: 'Santa Clara',
    state: 'California',
    country: 'United States',
    first_name: 'Monto',
    last_name: 'Khanna',
    linkedin: '',
    phone: '+14088827093',
    current_company: 'Monto Khanna, CPA',
    timezone: null,
    current_job_title: 'Full Time Consultant',
    resume_json: {
      basics: {
        email: 'montocpa@gmail.com',
        phone: '4087093',
        social: [],
        lastName: 'Khanna',
        linkedIn: null,
        location: {
          city: 'Santa Clara',
          state: 'CA',
          country: 'USA',
        },
        firstName: 'Monto',
        currentCompany: 'Monto Khanna, CPA',
        currentJobTitle: 'Full Time Consultant',
        totalExperienceInMonths: 264,
      },
      skills: [],
      schools: [
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Finance',
          start: {
            year: null,
            month: null,
          },
          degree: 'MS Finance and Financial Law',
          institution: 'University of London',
        },
        {
          end: {
            year: null,
            month: null,
          },
          gpa: null,
          field: 'Commerce',
          start: {
            year: null,
            month: null,
          },
          degree: 'Bachelor of Commerce (Hons.)',
          institution: 'University of Delhi',
        },
      ],
      overview:
        'Monto Khanna is a Full Time Consultant with 22 years of experience. He excels in skills such as accounting, financial analysis, and tax preparation.',
      projects: [],
      languages: [],
      positions: [
        {
          end: {
            year: null,
            month: null,
          },
          org: 'Monto Khanna, CPA',
          level: 'Senior-level',
          start: {
            year: 2020,
            month: 5,
          },
          title: 'Full Time Consultant',
          location: 'Santa Clara, CA',
          description:
            'Interim Controller/Director of Accounting/Accounting Manager for Public company Bio-tech – audit with big 4, financial reporting, 10K/Q High growth SAAS and hardware companies – day to day accounting, cap-table management, KPI, BOD slides, due diligence on various rounds of funding Completed SPAC for Cannabis company. Sustainable energy – financial accounting, first year audit with E&Y, preparing for potential IPO, AARPE audits, SOX implementation Implemented Netsuite for various clients Implemented ASC 606 and 842 Other clients includes Construction, Property Management Companies, Hotels/Motels, Restaurants, etc.',
        },
        {
          end: {
            year: 2020,
            month: 4,
          },
          org: 'Simpler Postage, Inc',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 10,
          },
          title: 'Director-Accounting',
          location: 'Santa Clara, CA',
          description:
            'Directed, managed and responsible for accounting, FP&A, payroll and tax compliance. Carved out the Fulfilment Business from the total business and sold to another Fulfilment Company. Managed the due diligence and integration of customers, revenues, COGS, and assignment of operating and capital leases to the new buyer. Consolidated 8+ companies. Updated FP&A model to reflect new business initiatives. Implemented Netsuite. Implemented policies which reduced accounting close from 20+ days to 3 days. Revamped the entire department after auditors left the audit in between. Managed audits of financial statements from inception, including 6 years at once. Managed transition of Payroll system and 401K providers. Managed Series A+ due diligence from various investors. Prepared Company’s first short-term and long-term budgets. Implemented ASC 606 and 842. Prepared BOD presentation. Managed Cap table and stock-based compensation. Managed 409 A valuation. Managed compliance with Insurance and sales tax. Managed team of professional accountants and financial planning analysts.',
        },
        {
          end: {
            year: 2017,
            month: 9,
          },
          org: 'Anova Applied Electronics, Inc',
          level: 'Mid-level',
          start: {
            year: 2016,
            month: 4,
          },
          title: 'Controller',
          location: 'Santa Clara, CA',
          description:
            'Acquired by Electrolux for $250M in April 2017, $10B USD market cap. Managed end to end Integration of Anova’s accounting and finance into Electrolux. Transitioned from US GAAP to Swedish IFRS. Calculated Purchase Price adjustment as per US GAAP. Prepared dashboards to understand unit economics on a daily basis, country by country, sku by sku, and discount offered vs paid marketing spend. Managed sales programs of a bootstrapped Company with more than 900 Doors (B2B). Led the accounting, finance and tax due diligence in absence of full time CFO. Managed the entire due diligence from Ernst & Young, Cooley, and Paul Hastings. First accounting hire in the company. Completed first year audit with PwC. Prepared monthly consolidated Financial Statements for 10+ US entities in US GAAP and IFRS. Managed the entire manufacturing operations with Chinese partner. Responsible for BOM, PPV, obsolescence, cycle count, month end counts, etc. Implemented various accounting and internal controls to streamline accounting and business operations. Managed net working capital requirements of a bootstrapped start up. Business partner to all departments and developed annual and three years FP&A plan. Managed day to day accounting including AP, AR, Payroll, Banking relationship, etc.',
        },
        {
          end: {
            year: 2016,
            month: 4,
          },
          org: 'Coin Inc',
          level: 'Mid-level',
          start: {
            year: 2015,
            month: 5,
          },
          title: 'Controller',
          location: 'San Francisco, CA',
          description:
            'Acquired by Fitbit-led due diligence of accounting and finance. Managed accounting and tax integration. Worked with Fitbit for smooth transition. Prepared monthly, quarterly and yearly financial statements. Prepared monthly, quarterly and yearly FP&A. Prepared weekly dashboard for CFO and E-team summarizing financial and non-financial transactions. Worked with VP of Engineering to develop custom reports to reconcile with payment processor.',
        },
        {
          end: {
            year: 2015,
            month: 5,
          },
          org: 'Care.com',
          level: 'Mid-level',
          start: {
            year: 2014,
            month: 5,
          },
          title: 'Senior Accounting Manager',
          location: 'Boston, MA',
          description:
            'Led M&A of Citrus Lane into Care.com. First accounting hire of Citrus Lane. Conducted financial, operational and legal due diligence and provided the results to management which led into successful M&A. Prepared its first 10Q and 10K. Managed day to day accounting, review of all JE’s and reconciliations. Responsible for worldwide consolidation of financial statements. Responsible for monthly/quarterly/annual worldwide GL close. Consolidated of 6+ companies. Implemented Netsuite. Implemented SOX. Prepared management slides for discussion on fluctuations between actual vs budgeted. Contractor from May 2014 to Jan 2015.',
        },
        {
          end: {
            year: 2014,
            month: 4,
          },
          org: 'Enlighted Inc',
          level: 'Mid-level',
          start: {
            year: 2011,
            month: 2,
          },
          title: 'Senior Accounting Manager',
          location: 'San Jose, CA',
          description:
            'Construction and Clean Tech Company. Directly reportable to CFO. Prepared monthly, quarterly and yearly financial statements. Managed & responsible for all annual audits since inception. Managed entire cost accounting operations. Implemented Great Plain. In conjunction with sales, business development, attorneys, etc, prepared and managed “savings power purchase agreement” for a fortune 100 company. Played pivotal role in preparing various operating plans which secured $25M in Series C. Managed due diligence. Managed & prepared monthly, quarterly and yearly annual operating plans. Full-time contractor from Jan-Dec 2011.',
        },
        {
          end: {
            year: 2011,
            month: 1,
          },
          org: 'Chegg, Inc',
          level: 'Mid-level',
          start: {
            year: 2009,
            month: 2,
          },
          title: 'Senior Accounting Manager',
          location: 'San Jose, CA',
          description:
            'Revamped the whole accounting, procurement, HR, Operations, and marketing departments to meet the needs of CFO and CEO. Worked with CFO and CEO to develop accounting policies and internal controls. Involved in 4 successful M&A transactions ranging from $15-70M. Conducted due diligence and presented same to management. Performed accounting and financial due diligence on acquisition including all aspects of financial statements. Integrated these M&A into Chegg’s Accounting and Finance. Managed, planned and conducted both domestic and international month end close, quarter end close and annual audits. Participated and prepared S-1 registration statement. Implemented various policies and procedures which reduced the month end close from 15 to 4 days. Implemented ERP (Oracle) and SOX for possible IPO. Prepared consolidated financial statements for audit purposes for US reporting and financial statements per IFRS for international subsidiaries. Experience in managing accounting of an offshore location. Manage staff of 12.',
        },
        {
          end: {
            year: 2009,
            month: 1,
          },
          org: 'Burr Pilger & Mayer LLP',
          level: 'Mid-level',
          start: {
            year: 2008,
            month: 3,
          },
          title: 'Audit Supervisor',
          location: 'San Jose, CA',
          description:
            'Conducted audits and reviewed financial statements for public and private clients in software, biotech, real estate, VC, asset management, private equity, etc. Managed IPO of various Companies in TSX. Involved in preparation of S-1 for various clients. Involved in Air Canada external yearly audit.',
        },
        {
          end: {
            year: 2008,
            month: 2,
          },
          org: 'McConnell & Jones',
          level: 'Mid-level',
          start: {
            year: 2007,
            month: 4,
          },
          title: 'Audit Supervisor',
          location: 'Houston, TX',
          description:
            'Conducted audits and reviewed financial statements for public and private clients in software, biotech, real estate, VC, asset management, private equity, etc. Managed IPO of various Companies in TSX. Involved in preparation of S-1 for various clients. Involved in Air Canada external yearly audit.',
        },
        {
          end: {
            year: 2007,
            month: 3,
          },
          org: 'PwC',
          level: 'Mid-level',
          start: {
            year: 2004,
            month: 8,
          },
          title: 'Senior Associate',
          location: 'Canada/USA',
          description:
            'Conducted audits and reviewed financial statements for public and private clients in software, biotech, real estate, VC, asset management, private equity, etc. Managed IPO of various Companies in TSX. Involved in preparation of S-1 for various clients. Involved in Air Canada external yearly audit.',
        },
        {
          end: {
            year: 2004,
            month: 7,
          },
          org: 'Kumar & Associates',
          level: 'Mid-level',
          start: {
            year: 2001,
            month: 6,
          },
          title: 'Senior Accountant',
          location: 'Canada',
          description:
            'Conducted audits and reviewed financial statements for public and private clients in software, biotech, real estate, VC, asset management, private equity, etc. Managed IPO of various Companies in TSX. Involved in preparation of S-1 for various clients. Involved in Air Canada external yearly audit.',
        },
      ],
      certificates: [],
    },
    resume_text:
      'Monto Khanna, CPA Santa Clara, CA 95051 montocpa@gmail.com 4087093 Industry Experience: Full Time Consultant: May 2020 - present Interim Controller/Director of Accounting/Accounting Manager for Public company Bio-tech – audit with big 4, financial reporting, 10K/Q High growth SAAS and hardware companies – day to day accounting, cap-table management, KPI, BOD slides, due diligence on various rounds of funding Completed SPAC for Cannabis company. Sustainable energy – financial accounting, first year audit with E&Y, preparing for potential IPO, AARPE audits, SOX implementation Implemented Netsuite for various clients Implemented ASC 606 and 842 Other clients includes Construction, Property Management Companies, Hotels/Motels, Restaurants, etc. Simpler Postage, Inc Director-Accounting Oct 2017-April 2020 Directed, managed and responsible for accounting, FP&A, payroll and tax compliance. Carved out the Fulfilment Business from the total business and sold to another Fulfilment Company. Managed the due diligence and integration of customers, revenues, COGS, and assignment of operating and capital leases to the new buyer. Consolidated 8+ companies. Updated FP&A model to reflect new business initiatives. Implemented Netsuite. Implemented policies which reduced accounting close from 20+ days to 3 days. Revamped the entire department after auditors left the audit in between. Managed audits of financial statements from inception, including 6 years at once. Managed transition of Payroll system and 401K providers. Managed Series A+ due diligence from various investors. Prepared Company’s first short-term and long-term budgets. Implemented ASC 606 and 842. Prepared BOD presentation. Managed Cap table and stock-based compensation. Managed 409 A valuation. Managed compliance with Insurance and sales tax. Managed team of professional accountants and financial planning analysts. Anova Applied Electronics, Inc Controller April 2016 to Sept 2017 Acquired by Electrolux for $250M in April 2017, $10B USD market cap. Managed end to end Integration of Anova’s accounting and finance into Electrolux. Transitioned from US GAAP to Swedish IFRS. Calculated Purchase Price adjustment as per US GAAP. Prepared dashboards to understand unit economics on a daily basis, country by country, sku by sku, and discount offered vs paid marketing spend. Managed sales programs of a bootstrapped Company with more than 900 Doors (B2B). Led the accounting, finance and tax due diligence in absence of full time CFO. Managed the entire due diligence from Ernst & Young, Cooley, and Paul Hastings. First accounting hire in the company. Completed first year audit with PwC. Prepared monthly consolidated Financial Statements for 10+ US entities in US GAAP and IFRS. Managed the entire manufacturing operations with Chinese partner. Responsible for BOM, PPV, obsolescence, cycle count, month end counts, etc. Implemented various accounting and internal controls to streamline accounting and business operations. Managed net working capital requirements of a bootstrapped start up. Business partner to all departments and developed annual and three years FP&A plan. Managed day to day accounting including AP, AR, Payroll, Banking relationship, etc. Coin Inc, San Francisco, CA Controller May 2015 to April 2016 Acquired by Fitbit-led due diligence of accounting and finance. Managed accounting and tax integration. Worked with Fitbit for smooth transition. Prepared monthly, quarterly and yearly financial statements. Prepared monthly, quarterly and yearly FP&A. Prepared weekly dashboard for CFO and E-team summarizing financial and non-financial transactions. Worked with VP of Engineering to develop custom reports to reconcile with payment processor. Care.com – Boston, MA Public Company Senior Accounting Manager May 2014 till May 2015 Led M&A of Citrus Lane into Care.com. First accounting hire of Citrus Lane. Conducted financial, operational and legal due diligence and provided the results to management which led into successful M&A. Prepared its first 10Q and 10K. Managed day to day accounting, review of all JE’s and reconciliations. Responsible for worldwide consolidation of financial statements. Responsible for monthly/quarterly/annual worldwide GL close. Consolidated of 6+ companies. Implemented Netsuite. Implemented SOX. Prepared management slides for discussion on fluctuations between actual vs budgeted. Contractor from May 2014 to Jan 2015. Enlighted Inc, San Jose, CA Senior Accounting Manager Feb 2011 to April 2014 Construction and Clean Tech Company. Directly reportable to CFO. Prepared monthly, quarterly and yearly financial statements. Managed & responsible for all annual audits since inception. Managed entire cost accounting operations. Implemented Great Plain. In conjunction with sales, business development, attorneys, etc, prepared and managed “savings power purchase agreement” for a fortune 100 company. Played pivotal role in preparing various operating plans which secured $25M in Series C. Managed due diligence. Managed & prepared monthly, quarterly and yearly annual operating plans. Full-time contractor from Jan-Dec 2011. Chegg, Inc, San Jose, CA Senior Accounting Manager Feb 2009 till Jan 2011 Revamped the whole accounting, procurement, HR, Operations, and marketing departments to meet the needs of CFO and CEO. Worked with CFO and CEO to develop accounting policies and internal controls. Involved in 4 successful M&A transactions ranging from $15-70M. Conducted due diligence and presented same to management. Performed accounting and financial due diligence on acquisition including all aspects of financial statements. Integrated these M&A into Chegg’s Accounting and Finance. Managed, planned and conducted both domestic and international month end close, quarter end close and annual audits. Participated and prepared S-1 registration statement. Implemented various policies and procedures which reduced the month end close from 15 to 4 days. Implemented ERP (Oracle) and SOX for possible IPO. Prepared consolidated financial statements for audit purposes for US reporting and financial statements per IFRS for international subsidiaries. Experience in managing accounting of an offshore location. Manage staff of 12. Public Accounting Experience: Burr Pilger & Mayer LLP, San Jose, CA Audit Supervisor Mar 2008 to Jan 2009 McConnell & Jones, Houston, TX Audit Supervisor April 2007 to Feb 2008 PwC, Canada/USA Senior Associate Aug 2004 to Mar 2007 Kumar & Associates, Canada Senior Accountant June 2001 to July 2004 Conducted audits and reviewed financial statements for public and private clients in software, biotech, real estate, VC, asset management, private equity, etc. Managed IPO of various Companies in TSX. Involved in preparation of S-1 for various clients. Involved in Air Canada external yearly audit. As a consulting supervisor at PwC, consolidated 17 companies into Nortel’s consolidated financial statements. Took the complete ownership and managed project in a timely manner. Experience in preparing financial statements under IFRS. Conducted SOX engagements on Citibank Canada. Education: Certified Public Accountant, USA MS Finance and Financial Law, University of London, UK Bachelor of Commerce (Hons.) University of Delhi, India References: Available on request',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/464e707f-e308-4bcb-b349-bdd3a930a007.docx',
  },
  {
    email: 'heenavithlani@gmail.com',
    avatar: null,
    city: 'Dublin',
    state: 'California',
    country: 'United States',
    first_name: 'Heena',
    last_name: 'Vithlani',
    linkedin: '',
    phone: '+13412061244',
    current_company: 'Rigetti Computing, Inc.',
    timezone: null,
    current_job_title: 'Senior Manager, SEC Reporting and Technical Accounting',
    resume_json: {
      basics: {
        email: 'heenavithlani@gmail.com',
        phone: '+1206-1244',
        social: [],
        lastName: 'Vithlani',
        linkedIn: null,
        location: {
          city: 'Dublin',
          state: 'California',
          country: 'USA',
        },
        firstName: 'Heena',
        currentCompany: 'Rigetti Computing, Inc.',
        currentJobTitle:
          'Senior Manager, SEC Reporting and Technical Accounting',
        totalExperienceInMonths: 144,
      },
      skills: [
        'US GAAP',
        'IFRS',
        'Singapore GAAP',
        'Australian GAAP',
        'Indian GAAP',
        'SEC Reporting',
        'Technical Accounting',
        'CPA',
        'PMP',
        'Diploma in IFRS',
        'CA',
        'MS Office',
        'MS Excel',
        'Toppan Merrill',
        'Coupa',
        'E-trade',
        'Workiva',
        'Fidelity',
        'Blackline',
        'SAP',
        'BPC',
        'Lease Cals',
        'Quickbooks',
        'Sage Intacct',
        'Bill.com',
        'Floqast',
        'Sequoia',
        'Tableau',
        'Idea Smart Analyzer',
        'Hyperion',
      ],
      schools: [
        {
          end: {
            year: 2012,
            month: null,
          },
          gpa: null,
          field: null,
          start: {
            year: 2012,
            month: null,
          },
          degree: 'Bachelor of Commerce',
          institution: 'Osmania University',
        },
      ],
      overview:
        'Heena Vithlani is a Senior Manager, SEC Reporting and Technical Accounting at Rigetti Computing, Inc. She possesses expertise in US GAAP, SEC Reporting, and Technical Accounting.',
      projects: [],
      languages: [],
      positions: [
        {
          end: null,
          org: 'Rigetti Computing, Inc.',
          level: 'Senior-level',
          start: {
            year: 2023,
            month: 7,
          },
          title: 'Senior Manager, SEC Reporting and Technical Accounting',
          location: 'Dublin, California, USA',
          description:
            'Leading end-to end preparation, benchmarking, execution, review, co-ordination, XBRL tagging and filing of Form 10Qs and Form 10Ks including preparation of consolidated financial statements i.e., Balance Sheet, Income Statement, Cash Flow, Statement of Stockholders Equity, MD&A section, and other information included in quarterly and annual SEC filings, ensuring compliance with all reporting and disclosure requirements and disclosure checklists under US GAAP and the SEC, as applicable. Leading the end-to-end preparation, execution, co-ordination and filing of Earnings process of the company. Perform technical accounting in-depth analysis and document conclusions for applicable areas, including, but not limited to (US GAAP and IFRS as noted): • Revenue (ASC 606) • ComplexDerivative valuations • • Leases (ASC842): implementation considerations and financial statement impact Equity and Financing matters (including stock-based compensation (ASC 718), Restricted and performance stock units with E-trade software including accounting and disclosure for Restricted Stock Units, Performance Stock Units and Stock Options, 409a valuation, Section 83(B) elections, Annual Forfeiture Rate Analysis and ESPP valuations. • Annual Impairment Assessments, Segment reporting and Strategic investments assessments and accounting Lead SOX implementation efforts in the organization Lead remediation efforts of material weakness noted along with implementation of a close and reconciliation process in a software (FloQast). Help the accounting team with complex entries on fair value of complex derivatives, Debt and Stock-based compensation',
        },
        {
          end: {
            year: 2022,
            month: 2,
          },
          org: 'ServiceNow Software Ireland',
          level: 'Mid-level',
          start: {
            year: 2021,
            month: 8,
          },
          title: 'Financial Reporting Manager',
          location: 'Dublin, Ireland',
          description:
            'Leading end-to end preparation, benchmarking, execution, review, co-ordination, XBRL tagging and filing of Form 10Qs and Form 10Ks including preparation of consolidated financial statements i.e., Balance Sheet, Income Statement, Cash Flow, Statement of Stockholders Equity, MD&A section, and other information included in quarterly and annual SEC filings, ensuring compliance with all reporting and disclosure requirements and disclosure checklists under US GAAP and the SEC, as applicable. Leading the end-to-end preparation, execution, co-ordination and filing of Earnings process of the company. Perform technical accounting in-depth analysis and document conclusions for applicable areas, including, but not limited to (US GAAP and IFRS as noted): • Business Combinations (ASC 805): accounting for consideration transferred, net assets acquired, valuation of intangible assets and goodwill, segment reporting, measurement period adjustments. • Revenue (ASC 606) • • Leases (ASC842): implementation considerations and financial statement impact Equity and Financing matters (including stock-based compensation (ASC 718), Restricted and performance stock units with fidelity software including accounting and disclosure for Restricted Stock Units, Performance Stock Units and Stock Options, 409a valuation, Section 83(B) elections, Annual Forfeiture Rate Analysis and ESPP valuations. • Annual Impairment Assessments, Segment reporting and Strategic investments assessments and accounting Establish accounting policies and internal control considerations for embedded leases, functional currency determination, related party transactions, accounting for equity and debt investments, allowance for doubtful accounts, capitalized software, website development costs, and stock-based compensation among others. Lead integration of newly acquired entities, work directly with external valuation specialists, prepare opening balance sheet and purchase price allocation journal entries. Lead five automation projections to streamline of manual processes and reduce the close timelines.',
        },
        {
          end: {
            year: 2021,
            month: 7,
          },
          org: 'ServiceNow Software Development India Private Limited',
          level: 'Mid-level',
          start: {
            year: 2019,
            month: 7,
          },
          title: 'Financial Reporting Manager',
          location: 'Hyderabad, India',
          description:
            'Leading end-to end preparation, benchmarking, execution, review, co-ordination, XBRL tagging and filing of Form 10Qs and Form 10Ks including preparation of consolidated financial statements i.e., Balance Sheet, Income Statement, Cash Flow, Statement of Stockholders Equity, MD&A section, and other information included in quarterly and annual SEC filings, ensuring compliance with all reporting and disclosure requirements and disclosure checklists under US GAAP and the SEC, as applicable. Leading the end-to-end preparation, execution, co-ordination and filing of Earnings process of the company. Perform technical accounting in-depth analysis and document conclusions for applicable areas, including, but not limited to (US GAAP and IFRS as noted): • Business Combinations (ASC 805): accounting for consideration transferred, net assets acquired, valuation of intangible assets and goodwill, segment reporting, measurement period adjustments. • Revenue (ASC 606) • • Leases (ASC842): implementation considerations and financial statement impact Equity and Financing matters (including stock-based compensation (ASC 718), Restricted and performance stock units with fidelity software including accounting and disclosure for Restricted Stock Units, Performance Stock Units and Stock Options, 409a valuation, Section 83(B) elections, Annual Forfeiture Rate Analysis and ESPP valuations. • Annual Impairment Assessments, Segment reporting and Strategic investments assessments and accounting Establish accounting policies and internal control considerations for embedded leases, functional currency determination, related party transactions, accounting for equity and debt investments, allowance for doubtful accounts, capitalized software, website development costs, and stock-based compensation among others. Lead integration of newly acquired entities, work directly with external valuation specialists, prepare opening balance sheet and purchase price allocation journal entries. Lead five automation projections to streamline of manual processes and reduce the close timelines.',
        },
        {
          end: {
            year: 2019,
            month: 6,
          },
          org: 'Mylan Pharmaceuticals Private Limited',
          level: 'Mid-level',
          start: {
            year: 2018,
            month: 11,
          },
          title: 'Internal Audit Manager',
          location: 'Hyderabad, India',
          description:
            'Leading end-to-end SOX and Risk based audits for multiple locations ensuring compliance with local and company guidelines in each location specifically compliances with Anti-bribery laws. Practical experience of implementation desktop reviews for subsidiary entities using Tableau using SAP integration and pre- defined ratio analysis based on the company’s domain and subsidiary’s function. Assessing the existence, design, and operating effectiveness of processes and controls and involved in remediation plans and testing. Participated in developing a SOX framework on several SOX readiness and compliance projects Successfully managed audits and allocated resources to bring about efficiency and cost/time effectiveness, while prioritizing Internal audit experience in documenting business narratives, process flows, and risk/control matrix tasks of a demanding portfolio',
        },
        {
          end: {
            year: 2018,
            month: 11,
          },
          org: 'BSR & Associates LLP i.e., KPMG India',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 4,
          },
          title: 'Assistant Manager',
          location: 'Hyderabad, India',
          description:
            'Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology, Industrial Manufacturing industry and Financial Services Strong knowledge of Companies Act, accounting standards such as Ind AS, IFRS, US GAAP and Indian GAAP. Manage accounts finalization, review of consolidation of financial statements, audits & taxation. Managed US GAAP audits performed in accordance with AICPA or PCAOB standards Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology and Industrial Manufacturing industry Led and coached a team of 8-15 team members, provided insight and guidance to ensure on-time delivery of audit assignments. Successfully managed audits and allocated resources to bring about efficiency and cost/time effectiveness, while prioritizing tasks of a demanding portfolio Drafted technical memos, analyzing complex accounting areas Active trainer for conducting trainings on KPMG Audit Methodology and various other topics for the Audit department. As Performance Manager, mentor team members, monitoring their performance, providing regular feedback, and identifying improvement areas to aid counselees’ overall development. Coordinate and build good relationships with external auditors and all finance departments.',
        },
        {
          end: {
            year: 2018,
            month: 7,
          },
          org: 'KPMG Singapore',
          level: 'Mid-level',
          start: {
            year: 2017,
            month: 12,
          },
          title: 'Senior Associate',
          location: 'Singapore',
          description:
            'Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology, Industrial Manufacturing industry and Financial Services Strong knowledge of Companies Act, accounting standards such as Ind AS, IFRS, US GAAP and Indian GAAP. Manage accounts finalization, review of consolidation of financial statements, audits & taxation. Managed US GAAP audits performed in accordance with AICPA or PCAOB standards Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology and Industrial Manufacturing industry Led and coached a team of 8-15 team members, provided insight and guidance to ensure on-time delivery of audit assignments. Successfully managed audits and allocated resources to bring about efficiency and cost/time effectiveness, while prioritizing tasks of a demanding portfolio Drafted technical memos, analyzing complex accounting areas Active trainer for conducting trainings on KPMG Audit Methodology and various other topics for the Audit department. As Performance Manager, mentor team members, monitoring their performance, providing regular feedback, and identifying improvement areas to aid counselees’ overall development. Coordinate and build good relationships with external auditors and all finance departments.',
        },
        {
          end: {
            year: 2014,
            month: 9,
          },
          org: 'Sekhar and Suresh',
          level: 'Fresher-level',
          start: {
            year: 2011,
            month: 3,
          },
          title: 'Intern',
          location: 'Hyderabad, India',
          description:
            'Audit - Statutory Audit, Tax Audit, Internal Audit, Stock Audit Working paper review, Ledger Scrutiny and Finalization of accounts Vouching of various books like Purchase Book, Cash Book, Journal, etc. Preparation of books of account and return filings',
        },
      ],
      certificates: [
        'Certified Project Management Professional (PMP)',
        'Licensed Certified Public Accountant (CPA)',
        'Diploma holder in IFRS',
        'Associate Chartered Accountant (CA)',
        'Bachelor of Commerce from Osmania University- Hyderabad',
      ],
    },
    resume_text:
      'Heena Vithlani CPA, PMP, Diploma in IFRS, CA heenavithlani@gmail.com, +1206-1244, Dublin, California Professional Abridgement • Experienced finance and accounting professional with cumulative experience of 12+ years in accounting, auditing, internal audit, financial reporting, SEC reporting and technical accounting. Strong technical knowledge in US GAAP, IFRS, Singapore GAAP, Australian GAAP and Indian GAAP. Significant experience in preparing SEC filings for a public company and auditing various Software and Manufacturing companies following US GAAP and IFRS Experience in implementation of new accounting standards and handling accounting issues with emphasis on stock-based compensation, impairment of assets, revenue recognition, leases goodwill valuation and acquisitions. • • • Work Profile • Rigetti Computing, Inc. July 2023 to Present Senior Manager, SEC Reporting and Technical Accounting • • • • • Leading end-to end preparation, benchmarking, execution, review, co-ordination, XBRL tagging and filing of Form 10Qs and Form 10Ks including preparation of consolidated financial statements i.e., Balance Sheet, Income Statement, Cash Flow, Statement of Stockholders Equity, MD&A section, and other information included in quarterly and annual SEC filings, ensuring compliance with all reporting and disclosure requirements and disclosure checklists under US GAAP and the SEC, as applicable. Leading the end-to-end preparation, execution, co-ordination and filing of Earnings process of the company. Perform technical accounting in-depth analysis and document conclusions for applicable areas, including, but not limited to (US GAAP and IFRS as noted): • Revenue (ASC 606) • ComplexDerivative valuations • • Leases (ASC842): implementation considerations and financial statement impact Equity and Financing matters (including stock-based compensation (ASC 718), Restricted and performance stock units with E-trade software including accounting and disclosure for Restricted Stock Units, Performance Stock Units and Stock Options, 409a valuation, Section 83(B) elections, Annual Forfeiture Rate Analysis and ESPP valuations. • Annual Impairment Assessments, Segment reporting and Strategic investments assessments and accounting Lead SOX implementation efforts in the organization Lead remediation efforts of material weakness noted along with implementation of a close and reconciliation process in a software (FloQast). • Help the accounting team with complex entries on fair value of complex derivatives, Debt and Stock-based com pensation • ServiceNow Software Ireland (Location: Dublin, Ireland) August 2021 to February 2022 ServiceNow Software Development India Private Limited (Location: Hyderabad, India) July 2019 to July 2021 Financial Reporting Manager • • • • • • Leading end-to end preparation, benchmarking, execution, review, co-ordination, XBRL tagging and filing of Form 10Qs and Form 10Ks including preparation of consolidated financial statements i.e., Balance Sheet, Income Statement, Cash Flow, Statement of Stockholders Equity, MD&A section, and other information included in quarterly and annual SEC filings, ensuring compliance with all reporting and disclosure requirements and disclosure checklists under US GAAP and the SEC, as applicable. Leading the end-to-end preparation, execution, co-ordination and filing of Earnings process of the company. Perform technical accounting in-depth analysis and document conclusions for applicable areas, including, but not limited to (US GAAP and IFRS as noted): • Business Combinations (ASC 805): accounting for consideration transferred, net assets acquired, valuation of intangible assets and goodwill, segment reporting, measurement period adjustments. • Revenue (ASC 606) • • Leases (ASC842): implementation considerations and financial statement impact Equity and Financing matters (including stock-based compensation (ASC 718), Restricted and performance stock units with fidelity software including accounting and disclosure for Restricted Stock Units, Performance Stock Units and Stock Options, 409a valuation, Section 83(B) elections, Annual Forfeiture Rate Analysis and ESPP valuations. • Annual Impairment Assessments, Segment reporting and Strategic investments assessments and accounting Establish accounting policies and internal control considerations for embedded leases, functional currency determination, related party transactions, accounting for equity and debt investments, allowance for doubtful accounts, capitalized software, website development costs, and stock-based compensation among others. Lead integration of newly acquired entities, work directly with external valuation specialists, prepare opening balance sheet and purchase price allocation journal entries. Lead five automation projections to streamline of manual processes and reduce the close timelines. Mylan Pharmaceuticals Private Limited (Location: Hyderabad, India) November 2018 to June 2019 Internal Audit Manager • Leading end-to-end SOX and Risk based audits for multiple locations ensuring compliance with local and company guidelines in each location specifically compliances with Anti-bribery laws. • Practical experience of implementation desktop reviews for subsidiary entities using Tableau using SAP integration and pre- defined ratio analysis based on the company’s domain and subsidiary’s function. • Assessing the existence, design, and operating effectiveness of processes and controls and involved in remediation plans and testing. • Participated in developing a SOX framework on several SOX readiness and compliance projects • • Successfully managed audits and allocated resources to bring about efficiency and cost/time effectiveness, while prioritizing Internal audit experience in documenting business narratives, process flows, and risk/control matrix tasks of a demanding portfolio • BSR & Associates LLP i.e., KPMG India (Location: Hyderabad, India) Assistant Manager April 2017 to November 2018 Senior Associate April 2016 to March 2017 Associate October 2014 to March 2016 KPMG Singapore (Location: Singapore) - Secondment December 2017 to July 2018 • Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology, Industrial Manufacturing industry and Financial Services Strong knowledge of Companies Act, accounting standards such as Ind AS, IFRS, US GAAP and Indian GAAP. • Manage accounts finalization, review of consolidation of financial statements, audits & taxation. • • Managed US GAAP audits performed in accordance with AICPA or PCAOB standards • Comprehensive exposure across healthcare sector, Real Estate and Infrastructure, Information Technology and Industrial • • Manufacturing industry Led and coached a team of 8-15 team members, provided insight and guidance to ensure on-time delivery of audit assignments. Successfully managed audits and allocated resources to bring about efficiency and cost/time effectiveness, while prioritizing tasks of a demanding portfolio • Drafted technical memos, analyzing complex accounting areas • Active trainer for conducting trainings on KPMG Audit Methodology and various other topics for the Audit department. • As Performance Manager, mentor team members, monitoring their performance, providing regular feedback, and identifying improvement areas to aid counselees’ overall development. • Coordinate and build good relationships with external auditors and all finance departments. • Sekhar and Suresh (Location: Hyderabad, India) Intern March 2011 to September 2014 • Audit - Statutory Audit, Tax Audit, Internal Audit, Stock Audit • Working paper review, Ledger Scrutiny and Finalization of accounts • Vouching of various books like Purchase Book, Cash Book, Journal, etc. • Preparation of books of account and return filings Education and Professional Certifications • • • • • 2023: Certified Project Management Professional (PMP) 2018: Licensed Certified Public Accountant (CPA) with American Institute of Certified Public Accountants - Montana Board 2017: Diploma holder in IFRS with Association of Chartered Certified Accountants. 2014: Associate Chartered Accountant (CA) from Institute of Chartered Accountants of India. 2012: Bachelor of Commerce from Osmania University- Hyderabad IT Know How • • Proficient in working with MS Office tools and basic knowledge of macros in MS Excel Proficient in working with Toppan Merrill, Coupa, E-trade cccccbngktentiufgfvnkkeetfcfgnjdtbWorkiva, Fidelity, Blackline, SAP, BPC, Lease Cals, Quickbooks, Sage Intacct, Bill.com, Floqast, Sequioa • Conversant with Tableau, Idea Smart Analyzer and Hyperion',
    file_url:
      'https://ecfwsyxpcuzxlxrkhxjz.supabase.co/storage/v1/object/public/resume-job-post/public/8a8bf88e-f61f-4caf-8414-0dad84beec50.pdf',
  },
];