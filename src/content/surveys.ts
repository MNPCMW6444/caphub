const vcs = {
  title: "VC Survey",
  elements: [
    { type: "text", name: "name", title: "Name", isRequired: true },
    { type: "text", name: "email", title: "Email", isRequired: true },
    { type: "text", name: "phone", title: "Phone Number" },
    { type: "text", name: "firmName", title: "Firm Name", isRequired: true },
    {
      type: "checkbox",
      name: "investmentFocus",
      title: "Investment Focus/Strategy",
      choices: [
        "Early-stage startups",
        "Growth-stage startups",
        "Industry-specific investments",
        "Geography-specific investments",
      ],
    },
    {
      type: "checkbox",
      name: "industriesOfInterest",
      title: "Industries/Sectors of Interest",
      choices: [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "E-commerce",
        "Energy",
        "Real estate",
        "Other",
      ],
    },
    {
      type: "text",
      name: "investmentSize",
      title: "Typical Investment Size",
      inputType: "number",
    },
    {
      type: "checkbox",
      name: "preferredCompanyStage",
      title: "Preferred Company Stage",
      choices: [
        "Seed",
        "Series A",
        "Series B",
        "Series C and beyond",
        "Pre-IPO",
        "IPO and beyond",
      ],
    },
    {
      type: "comment",
      name: "portfolioCompanies",
      title: "Portfolio Companies (if applicable)",
      placeHolder: "Separate company names with commas",
    },
    {
      type: "checkbox",
      name: "preferredMetric",
      title: "Preferred Key Metric",
      choices: [
        "Monthly Recurring Revenue (MRR)",
        "Customer Acquisition Cost (CAC)",
        "Customer Lifetime Value (LTV)",
        "Churn Rate",
        "Gross Margin",
      ],
    },
  ],
};

const founders = {
  title: "Founder Survey",
  elements: [
    { type: "text", name: "name", title: "Name", isRequired: true },
    { type: "text", name: "email", title: "Email", isRequired: true },
    { type: "text", name: "phone", title: "Phone Number" },
    {
      type: "text",
      name: "title",
      title: "Founder's Title",
      isRequired: true,
      description: "Please enter the title of the founder (e.g. CEO, CTO, CFO)."
    },
    {
      type: "text",
      name: "startupName",
      title: "Startup Name",
      isRequired: true,
      description: "Please enter the name of your startup."
    },
    { type: "text", name: "website", title: "Website" },
    { type: "text", name: "location", title: "Location", isRequired: true },
    {
      type: "checkbox",
      name: "industry",
      title: "Industry/Sector",
      choices: [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "E-commerce",
        "Energy",
        "Real estate",
        "Other",
      ],
      isRequired: true,
      description: "Please select the industry/sector that best describes your startup."
    },
    {
      type: "text",
      name: "fundingRaised",
      title: "Funding Raised (USD)",
      inputType: "number",
      description: "Please enter the total amount of funding raised by your startup in US dollars."
    },
    {
      type: "radiogroup",
      name: "fundingStage",
      title: "Funding Stage",
      choices: [
        "Pre-seed",
        "Seed",
        "Series A",
        "Series B",
        "Series C and beyond",
      ],
      description: "Please select the funding stage of your startup."
    },
    {
      type: "comment",
      name: "pitch",
      title: "Briefly describe your startup (1-2 sentences)",
      maxLength: 280,
      isRequired: true,
      description: "Please provide a brief description of your startup (1-2 sentences)."
    },
    {
      type: "text",
      name: "mrr",
      title: "Monthly Recurring Revenue (MRR) (USD)",
      inputType: "number",
      description: "Please enter your monthly recurring revenue in US dollars."
    },
    {
      type: "text",
      name: "cac",
      title: "Customer Acquisition Cost (CAC) (USD)",
      inputType: "number",
      description: "Please enter your customer acquisition cost in US dollars."
    },
    {
      type: "text",
      name: "ltv",
      title: "Customer Lifetime Value (LTV) (USD)",
      inputType: "number",
      description: "Please enter your customer lifetime value in US dollars."
    },
    {
      type: "text",
      name: "churnRate",
      title: "Churn Rate (in %)",
      inputType: "number",
      description: "Please enter your churn rate as a percentage."
    },
    {
      type: "text",
      name: "grossMargin",
      title: "Gross Margin (in %)",
      inputType: "number",
      description: "Please enter your gross margin as a percentage."
    },
    {
      type: "text",
      name: "fundingAmount",
      title: "How much money do you need?",
      inputType: "number",
      description: "Please enter the amount of funding you are seeking in USD."
    },
    {
      type: "radiogroup",
      name: "creditScore",
      title: "Credit Score",
      choices: [
        "500 or below",
        "500-575",
        "575-650",
        "650-680",
        "680-720",
        "720-760",
        "760+",
      ],
      description: "Please select your credit score range."
    },
    {
      type: "radiogroup",
      name: "bankruptcy",
      title: "Bankruptcy in Last 5 Years?",
      choices: ["Yes", "No"],
      description: "Have you filed for bankruptcy in the last 5 years?"
    },
    {
      type: "text",
      name: "businessStart",
      title: "Business Start Date",
      description: "Please enter the date your business was founded."
    },
    {
      type: "file",
      name: "dataRequest2",
      title: "Actual P&L, BS, and CF Statements",
      description: "Please upload your actual P&L, balance sheet, and cash flow statements for the past 24 months in an Excel format (.xlsx, .xls). If S&M, R&D, and G&A do not include payroll and salaries, please provide a payroll and salaries expenses breakdown by each department (S&M, R&D, G&A, etc.).",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest3a",
      title: "Revenue by Client (Option 1)",
      description: "Please upload a spreadsheet with sales data by customer for the past 36 months that reconcile to the P&L. The spreadsheet should include the following fields: Date, Client ID/Name, Amount, Currency, and Revenue Stream. Please ensure the data is consistent with the provided P&L statement.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest3b",
      title: "Revenue by Client (Option 2)",
      description: "Please upload an invoice file that includes all invoices issued in the past 36 months, reconciling to the financial statements. The invoice file should include the following fields: Date, Invoice ID, unique Customer ID (to identify each client separately and not by payment method), Amount Paid, Currency, and Invoice Type or Revenue Stream (Monthly, Quarterly, Annually, Other, etc.).",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest4",
      title: "Consolidated Business Plan",
      description: "Please upload your monthly/quarterly consolidated business plan for the upcoming 4 years (48 months) in an Excel format (.xlsx, .xls). Please ensure the plan is consistent with the historical P&L and cash flow statements provided.",
      accept: ".xlsx, .xls",
    },
    {
      type: "text",
      name: "dataRequest5",
      title: "Up-to-date Cap Table",
      description: "Please provide an up-to-date cap table for your company."
    },
    {
      type: "file",
      name: "dataRequest6",
      title: "Historical Funding Rounds",
      description: "Please provide a table including information onthe historical funding rounds - including for each round the raised amount, name of round (A, B, C, etc.), date, pre-money valuation, and main investors participating in each round.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest7",
      title: "Audited Financials",
      description: "Please provide the last 2 (or more) audited financial reports.",
      accept: ".pdf",
    },
    {
      type: "text",
      name: "dataRequest8",
      title: "Debt Information",
      description: "Please provide information on any current debt outstanding, including the type of debt (LOC or term loan), when it was taken, the repayment schedule, interest rate, total facility amount, amounts withdrawn to date, and any liens on the company's assets.",
    },
    {
      type: "text",
      name: "dataRequest9",
      title: "Group Structure",
      description: "Please provide a full group structure, including the country of incorporation of each entity, and revenue allocations between the entities.",
    },
    {
      type: "text",
      name: "additional1",
      title: "End Customer (B2B/B2C)",
      description: "Please provide information on your end customer(s), whether it is B2B (business-to-business), B2C (business-to-consumer), or both.",
    },
    {
      type: "text",
      name: "additional2",
      title: "Business Model",
      description: "Please provide information on your business model, including whether it is contractual, subscription-based, or other.",
    },
    {
      type: "text",
      name: "additional3",
      title: "Vertical",
      description: "Please provide information on the vertical your company operates in, such as SaaS, e-commerce, or marketplace.",
    },
    {
      type: "text",
      name: "additional4",
      title: "Type",
      description: "Please provide information on the type of company you are, such as adtech, fintech, or agtech.",
    },
    {
      type: "text",
      name: "additional5",
      title: "Revenue Streams",
      description: "Please provide information on your company's revenue streams.",
    },
    {
      type: "text",
      name: "additional6",
      title: "Geographical Markets",
      description: "Please provide information on the geographical markets your company operates in.",
    },
    {
      type: "text",
      name: "netRevenue",
      title: "Net Revenue / GMV",
      description: "Please provide information on your company's net revenue or Gross Merchandise Volume (GMV) for the past three years.",
    },
    {
      type: "text",
      name: "takeRate",
      title: "Take Rate",
      description: "If your company's revenue is based on GMV, please provide the take rate as a percentage.",
    },
    {
      type: "text",
      name: "growthYoY",
      title: "Growth Year-over-Year",
      description: "Please provide information on your company's year-over-year growth rate.",
    },
    {
      type: "text",
      name: "cashBalance",
      title: "Cash Balance",
      description: "Please provide information on your company's current cash balance.",
    },
    {
      type: "text",
      name: "monthlyBurnRate",
      title: "Monthly Burn Rate",
      description: "Please provide information on your company's monthly burn rate.",
    },
    {
      type: "text",
      name: "totalRunway",
      title: "Total Runway",
      description: "Please provide information on your company's total runway.",
    },
    {
      type: "text",
      name: "ebitaMargin",
      title: "EBITDA Margin",
      description: "Please provide information on your company's EBITDA margin.",
    },
    {
      type: "text",
      name: "debt",
      title: "Debt",
      description: "Please provide information on your company's debt.",
    },
    {
      type: "text",
      name: "creditScore",
      title: "Credit Score",
      description: "Please enter your personal credit score.",
    },
    {
      type: "radiogroup",
      name: "bankruptcy",
      title: "Have you had a bankruptcy in the last 5 years?",
      choices: ["Yes", "No"],
    },
    {
      type: "text",
      name: "businessStart",
      title: "Business Start Date",
      description: "Please enter the date when your business was started.",
    },
    {
      type: "file",
      name: "dataRequest2",
      title: "Actual P&L, BS, and CF statements for the past 24 months",
      description: "Please upload your company's P&L, balance sheet, and cash flow statements for the past 24 months.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest3a",
      title: "Revenue by Client (Sales Data)",
      description: "Please provide a spreadsheet with sales data by a customer for the past 36 months that reconcile to the P&L.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest3b",
      title: "Revenue by Client (Invoices Data)",
      description: "Alternatively, please provide an invoices file that includes all invoices issued in the past 36 months that reconcile to the financial statements.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest4",
      title: "Monthly/Quarterly Business Plan",
      description: "Please provide a consolidated business plan for the upcoming 4 years in an excel spreadsheet.",
      accept: ".xlsx, .xls",
    },
    {
      type: "text",
      name: "dataRequest5",
      title: "Up-to-date Cap Table",
      description: "Please provide an up-to-date cap table for your company.",
    },
    {
      type: "file",
      name: "dataRequest6",
      title: "Historical Funding Rounds",
      description: "Please provide a table including information on the historical funding rounds.",
      accept: ".xlsx, .xls",
    },
    {
      type: "file",
      name: "dataRequest7",
      title: "Audited Financials",
      description: "Please provide the last 2 (or more) audited financial reports.",
      accept: ".pdf",
    },
    {
      type: "text",
      name: "dataRequest8",
      title: "Group Structure",
      description: "Please provide a full group structure, including the country of incorporation of each entity, and revenue allocations between the entities.",
    },
    {
      type: "text",
      name: "additional1",
      title: "End Customer (B2B/B2C)",
      description: "Please describe your end customer (B2B/B2C).",
    },
    {
      type: "text",
      name: "additional2",
      title: "Business Model",
      description: "Please describe your business model (contractual, subscription, etc.).",
    },
  ],
};

export { vcs, founders };
