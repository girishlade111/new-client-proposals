"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  TrendingUp,
  Shield,
  FileText,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Menu,
  DollarSign,
  Target,
  Wallet,
  ArrowLeftRight,
  LineChart,
  Heart,
  FileCheck,
  Scale,
  Compass,
  Building2,
  Brain,
  GraduationCap,
  BarChart3,
  Receipt,
} from "lucide-react"

interface StrategyCardProps {
  id: string
  icon:
    | "shield"
    | "target"
    | "clock"
    | "wallet"
    | "arrows"
    | "chart"
    | "heartbeat"
    | "file-check"
    | "scales"
    | "compass"
  title: string
  valueProp: string
  what: string[]
  metrics: string[]
  sources: string[]
  tag: "Priority" | "Risk" | "Tax" | "Income" | "Estate" | "Health" | "Implementation"
}

function StrategyCard({ id, icon, title, valueProp, what, metrics, sources, tag }: StrategyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const iconMap = {
    shield: <Shield className="h-6 w-6 text-primary" />,
    target: <Target className="h-6 w-6 text-primary" />,
    clock: <Clock className="h-6 w-6 text-primary" />,
    wallet: <Wallet className="h-6 w-6 text-primary" />,
    arrows: <ArrowLeftRight className="h-6 w-6 text-primary" />,
    chart: <LineChart className="h-6 w-6 text-primary" />,
    heartbeat: <Heart className="h-6 w-6 text-primary" />,
    "file-check": <FileCheck className="h-6 w-6 text-primary" />,
    scales: <Scale className="h-6 w-6 text-primary" />,
    compass: <Compass className="h-6 w-6 text-primary" />,
  }

  const tagColors = {
    Priority: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Risk: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    Tax: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Income: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Estate: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    Health: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    Implementation: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  }

  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">{iconMap[icon]}</div>
            <CardTitle className="text-xl leading-tight text-balance">{title}</CardTitle>
          </div>
          <Badge className={`${tagColors[tag]} text-xs font-semibold flex-shrink-0 ml-2`}>{tag}</Badge>
        </div>
        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-base text-foreground leading-relaxed">{valueProp}</p>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-6 pt-0">
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">What</h5>
            <ul className="space-y-2 text-base text-muted-foreground">
              {what.map((item, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">Success Metrics</h5>
            <ul className="space-y-2 text-base text-muted-foreground">
              {metrics.map((metric, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <span className="mr-2 flex-shrink-0">→</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t">
            <h5 className="font-semibold text-foreground mb-2 text-sm">Sources</h5>
            <p className="text-sm text-muted-foreground italic">{sources.join("; ")}</p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

interface RecommendationCardProps {
  number: number
  title: string
  icon: React.ReactNode
  what: string
  why: string
  firstSteps: string[]
}

function RecommendationCard({ number, title, icon, what, why, firstSteps }: RecommendationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="cursor-pointer transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3 min-h-[60px] flex justify-center" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="flex items-center justify-between text-base sm:text-lg leading-tight">
          <div className="flex items-center space-x-2 pr-2">
            <div className="flex-shrink-0">{icon}</div>
            <span className="text-balance">
              {number}. {title}
            </span>
          </div>
          <div className="flex-shrink-0 ml-2">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-6 pt-0 px-4 sm:px-6">
          <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-foreground font-medium leading-relaxed">{why}</p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">What</h5>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{what}</p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">First Steps</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {firstSteps.map((step, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "team", label: "Team" },
    { id: "executive-summary", label: "Executive Summary" },
    { id: "service-options", label: "Service Options" },
    { id: "recommendations", label: "Recommendations" },
    { id: "fees", label: "Fees & Terms" },
    { id: "onboarding", label: "Onboarding" },
    { id: "next-steps", label: "Next Steps" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile TOC Toggle */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/95 backdrop-blur-sm shadow-lg"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile TOC Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="absolute top-16 right-4 w-48 bg-background shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Contents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-xs px-2 py-1 rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

interface ServiceCategory {
  id: string
  title: string
  color: string
  icon: React.ReactNode
  services: ServiceItem[]
}

interface ServiceItem {
  service: string
  details: string
}

const financialPlanningServices: ServiceCategory[] = [
  {
    id: "retirement-income",
    title: "Retirement and Income Planning",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    icon: <Clock className="h-6 w-6" />,
    services: [
      {
        service: "Retirement Analysis",
        details: "Projections, Monte Carlo simulations for retirement scenarios",
      },
      {
        service: "Pension Maximization",
        details: "Optimal strategies for pension selection (lump sum vs annuity)",
      },
      {
        service: "Social Security Optimization",
        details: "Delay strategies and claiming advice (spousal focus)",
      },
      {
        service: "Roth Conversions",
        details: "Strategic Roth IRA conversions",
      },
      {
        service: "Income Gap Analysis",
        details: "Evaluate sources of retirement income and manage shortfalls",
      },
      {
        service: "Bridge Years Spending Plan",
        details: "Design cash/taxable drawdowns before Social Security or pensions start",
      },
      {
        service: "Medicare Cost Integration",
        details: "Embed Medicare and health premiums into retirement income projections",
      },
    ],
  },
  {
    id: "tax-planning",
    title: "Tax Planning & Optimization",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    icon: <Receipt className="h-6 w-6" />,
    services: [
      {
        service: "Multi-year Tax Projections",
        details: "Forecasts to manage marginal tax brackets",
      },
      {
        service: "Tax Efficient Withdrawals",
        details: "Sequence withdrawals from retirement and taxable accounts",
      },
      {
        service: "Tax Deductible Contributions",
        details: "Maximize contributions (403b, 457, HSA, 529) for deductions",
      },
      {
        service: "Amended Tax Returns",
        details: "Review and amend returns for additional savings",
      },
      {
        service: "Holistiplan Scenario Analysis",
        details: "Use Holistiplan to test Roth conversions, bracket management, and deduction strategies",
      },
      {
        service: "Lifetime Tax Map",
        details: "Track lifetime tax exposure and monitor progress against the starting snapshot",
      },
      {
        service: "Crypto Tax Tracking via Koinly",
        details: "Aggregate crypto transactions and coordinate with CPAs for accurate filing",
      },
    ],
  },
  {
    id: "cash-flow-budget",
    title: "Cash Flow and Budget Management",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: <Wallet className="h-6 w-6" />,
    services: [
      {
        service: "Budget Optimization",
        details: "Reviewing income and expenses, automating savings and investments",
      },
      {
        service: "Emergency Fund",
        details: "Establishing and optimizing cash reserves in high-yield savings",
      },
      {
        service: "Cash Flow Allocation",
        details: "Strategic allocation of surplus to goals (e.g., debt, savings, investments)",
      },
      {
        service: "Expense Tracking",
        details: "Tracking and optimizing monthly expenses and discretionary spending",
      },
      {
        service: "Irregular/Variable Income Planning",
        details: "Systems for partners, contractors, and entrepreneurs to manage uneven cash flow and estimated taxes",
      },
      {
        service: "Medical Expense & HSA Strategy",
        details:
          "Plan funding and reimbursement schedules for large medical bills; coordinate HSA contributions and timing",
      },
      {
        service: "Altruist Cash High-Yield Setup",
        details: "Use Altruist Cash for automated sweeps and goal-specific cash buckets",
      },
    ],
  },
  {
    id: "investment-planning",
    title: "Investment Planning & Management",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    icon: <BarChart3 className="h-6 w-6" />,
    services: [
      {
        service: "Asset Allocation",
        details: "Customized allocation aligned with risk tolerance and goals",
      },
      {
        service: "Portfolio Diversification",
        details: "Design diversified investment portfolios",
      },
      {
        service: "Tax-loss Harvesting",
        details: "Minimize taxes through strategic realization of losses",
      },
      {
        service: "Tax-optimized Investments",
        details: "Use Roth IRAs, low-cost ETFs, municipal bonds, tax-efficient accounts",
      },
      {
        service: "Crypto Management",
        details: "Secure custody and compliance of cryptocurrency holdings",
      },
      {
        service: "Direct Indexing",
        details: "Personalized investment strategies for tax efficiency",
      },
      {
        service: "Crypto Education & Onboarding",
        details: "Guide clients through Coinbase, cold storage wallets, MetaMask, NFTs, and platform progression",
      },
    ],
  },
  {
    id: "risk-insurance",
    title: "Risk Management & Insurance Planning",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    icon: <Shield className="h-6 w-6" />,
    services: [
      {
        service: "Life & Disability Insurance",
        details: "Gap analysis, policy optimization for adequate coverage",
      },
      {
        service: "Homeowners, Auto & Umbrella Insurance",
        details: "Policy review, coverage optimization and recommend appropriate liability coverage levels",
      },
      {
        service: "Long-Term Care Insurance",
        details: "Evaluate and recommend coverage options",
      },
      {
        service: "Health Plan Breakeven Analysis",
        details: "Custom comparison of plan options (HSA vs PPO, etc.) using our health-insurance GPT framework",
      },
    ],
  },
  {
    id: "estate-legacy",
    title: "Estate & Legacy Planning",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    icon: <FileCheck className="h-6 w-6" />,
    services: [
      {
        service: "Estate Document Review",
        details: "Ensure wills, trusts, POAs align with financial goals",
      },
      {
        service: "Beneficiary Designations",
        details: "Ensure accuracy across retirement, brokerage, and bank accounts",
      },
      {
        service: "Wealth Transfer Strategies",
        details: "Efficient transfer of wealth to heirs and charitable giving",
      },
      {
        service: "Irrevocable Trust Review",
        details: "Analyze grantor/non-grantor status, annuity ownership, and tax implications",
      },
      {
        service: "Estate & Tax Document Organization",
        details: "Coordinate document collection and storage during dedicated meetings",
      },
    ],
  },
  {
    id: "education-college",
    title: "Education & College Planning",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    icon: <GraduationCap className="h-6 w-6" />,
    services: [
      {
        service: "529 Plans & Education Funds",
        details: "Setup and funding strategies (tax-advantaged contributions)",
      },
      {
        service: "Financial Literacy for Children",
        details: "Introducing budgeting and investment basics",
      },
    ],
  },
  {
    id: "business-entrepreneurial",
    title: "Business & Entrepreneurial Planning",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    icon: <Building2 className="h-6 w-6" />,
    services: [
      {
        service: "Entity Formation",
        details: "Recommendations on entity structure and how to create a new entity",
      },
      {
        service: "Business Taxes",
        details: "Help on how to maximize deductions for small business owners",
      },
      {
        service: "Employer Plans",
        details:
          "Maximizing retirement plan, HSA, employee student loan, daycare and other employer sponsored programs",
      },
      {
        service: "Irregular Revenue Systems",
        details: "Design cash-flow, savings, and tax processes for businesses with lumpy or seasonal income",
      },
      {
        service: "Business Credit",
        details: "How to improve business credit as well as the best options for credit cards, LOC and term loans",
      },
    ],
  },
  {
    id: "behavioral-emotional",
    title: "Behavioral & Emotional Support",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    icon: <Brain className="h-6 w-6" />,
    services: [
      {
        service: "Market Volatility Guidance",
        details: "Emotional and financial guidance during market turbulence",
      },
      {
        service: "Retirement Anxiety Management",
        details: "Tools and discussions to manage anxiety about retirement readiness",
      },
      {
        service: "Accountability Through Tasks",
        details: "Use RightCapital tasking to keep momentum and reduce decision fatigue",
      },
      {
        service: "Crypto Decision Coaching",
        details: "Context, risk framing, and action plans for high-volatility digital assets",
      },
    ],
  },
]

export default function ClientProposal() {
  return (
    <div className="min-h-screen bg-background">
      <TableOfContents />

      {/* Professional Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  Iconoclastic Capital Management
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">No buzz words. No Bias. No bull$#!+</p>
              </div>
            </div>
            <div className="text-left sm:text-right space-y-1 w-full sm:w-auto">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-label="Address" />
                <span>17 Prince St, Rochester, NY 14607</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" aria-label="Phone number" />
                <span>585-504-1616</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" aria-label="Email address" />
                <span>team@iconocapital.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl mt-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">
            New Client Proposal
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Prepared for [Client Name]
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            A comprehensive wealth management strategy tailored to your unique financial goals and life transitions
          </p>
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Date: [Proposal Date]</span>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <Card className="mb-8 sm:mb-12" id="team">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl sm:text-2xl">
              <Users className="h-5 w-5 text-primary" />
              <span>Meet Our Team</span>
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              The professionals who will guide your financial journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Christopher Haigh, CFP®</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">CEO & Lead Financial Planner</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Jack Hills</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Chief Investment Officer</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Gene Thompson, CFP®</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Director of Financial Planning</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Stephanie Nemecheck</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Director of Operations</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Matthew Scott</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Financial Planning Associate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-8 sm:mb-12" id="executive-summary">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl sm:text-2xl">
              <FileText className="h-5 w-5 text-primary" />
              <span>Executive Summary</span>
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Your financial position and key planning opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold text-foreground text-lg mb-4">Client Profile</h4>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                [Customize: Brief description of client's current situation, life stage, family structure, employment
                status, and key financial characteristics. Include relevant details about assets, income sources, and
                major life transitions.]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Current Situation</h4>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Employment/career status and transitions]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Family situation and location]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Real estate and major assets]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Debt obligations]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Key investment accounts and balances]</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Key Planning Priorities</h4>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Priority 1: Specific financial goal or concern]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Priority 2: Specific financial goal or concern]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Priority 3: Specific financial goal or concern]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Priority 4: Specific financial goal or concern]</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">[Priority 5: Specific financial goal or concern]</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground text-lg mb-3">Overall Financial Health</h4>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">
                [Customize: Overall assessment of client's financial health, strengths, and areas of opportunity.]
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                [Customize: Key vulnerabilities or risks that need to be addressed, and how your proposed strategy will
                help achieve their goals.]
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Service Model Selection */}
        <Card className="mb-8 sm:mb-12" id="service-options">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Choose the Right Fit for Where You Are</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Three service models designed for different client needs and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Asset Management Only */}
              <div className="border rounded-lg p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Asset Management Only</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Let a disciplined investment engine run in the background
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Who It's For</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Want delegation without ongoing planning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Retirees simplifying assets
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Passive, long-term investors
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">What You Get</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Low cost, diversified portfolios
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Direct indexing + tax-loss harvesting
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Annual meeting with CIO
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Right Capital access
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Not Included</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>Financial planning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2: Comprehensive Wealth Management - Recommended */}
              <div className="border-2 border-primary rounded-lg p-6 space-y-6 relative">
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground font-semibold">
                  RECOMMENDED
                </Badge>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Guided Wealth Management</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A guided partnership for every stage of your financial journey
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Who It's For</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Families with ongoing complexity
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Equity comp, business owners
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Clients who value strategy & structure
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">What You Get</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        2-4 annual meetings aligned to life
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Custom portfolios & tax strategy
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Estate, retirement, and legacy design
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Specific modeling & coordination with other professionals
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Open access to email us with questions throughout the year
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Vault + RightCapital (full access)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3: Project-Based Planning */}
              <div className="border rounded-lg p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Project-Based Planning</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Solve One Big Thing, Done Right</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Who It's For</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        One-time decisions of complex situations
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Need expert validation or guidance, not ongoing support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">What You Get</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Scoped plan delivered in 1-3 months
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        90-day support window
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Custom deliverables focused on you
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Temporary access to planning software
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Examples</h5>
                    <ul className="text-base text-muted-foreground space-y-3 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Home purchasing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Buy, sell, long-term/short-term rental</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Retirement planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Windfall planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Recommendations */}
        <div className="mb-8 sm:mb-12" id="recommendations">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
            Comprehensive Financial Planning Services
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Our holistic approach covers all aspects of your financial life. Below are the key service domains we
            provide to help you achieve your goals. Click any category to expand and view specific services.
          </p>

          <div className="space-y-6">
            {financialPlanningServices.map((category) => (
              <ServiceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <Card className="mb-8 sm:mb-12" id="fees">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Investment & Planning Fees</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Our fees are thoughtfully structured to reflect the value of our services and remain non-negotiable
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Fee Structure</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Onboarding/Data Gathering</span>
                    <span className="text-sm font-semibold">[$ Amount]</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Annual Planning Fee (if applicable)</span>
                    <span className="text-sm font-semibold">[$ Amount]</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Asset Management Fee</span>
                    <span className="text-sm font-semibold">[%]</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Payment Schedule</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  [Customize: Explain payment terms, billing frequency, and any special arrangements. Include details
                  about when fees are due and how they are calculated.]
                </p>
                <a
                  href="[Invoice Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full min-h-[48px] text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                >
                  Pay Onboarding Fee
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Process */}
        <Card className="mb-8 sm:mb-12" id="onboarding">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Onboarding Process</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Onboarding isn't only a time to ensure all your information and accounts are set up correctly. We use this
              time to introduce you to your Wealth Management team and dive deeper into the more common areas of
              financial planning.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                  01
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-base">Christopher Haigh & Stephanie Nemecheck</h4>
                  <p className="text-sm text-muted-foreground">(Or Matt Scott)</p>
                  <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Opening accounts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Collecting quantitative data
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                  02
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-base">Jack Hills</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Asset allocation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Tax loss harvesting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Asset location
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                  03
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-base">Gene Thompson</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Income tax planning
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Estate planning
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                  04
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-base">Revision</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Review your finalized financial plan
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Develop an implementation plan for your most important goals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8 sm:mb-12" id="next-steps">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Next Steps</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Ready to optimize your financial future? Here's how we move forward.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Immediate Actions</h4>
                <ol className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      1
                    </span>
                    <span className="leading-relaxed">Review this proposal and discuss any questions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      2
                    </span>
                    <span className="leading-relaxed">Sign engagement agreement and pay invoice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      3
                    </span>
                    <span className="leading-relaxed">Schedule onboarding kickoff meeting</span>
                  </li>
                </ol>
              </div>
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Important Details</h4>
                <div className="space-y-4 text-base text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <span className="font-semibold text-foreground">Invoice Payment:</span> [Customize: Payment
                      instructions and options]
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <span className="font-semibold text-foreground">Agreement:</span> The financial planning agreement
                      will be sent via Adobe Sign for your electronic signature
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="text-center space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  This proposal is valid for 30 days and reflects our analysis based on information provided during our
                  consultation calls.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prepared by the Iconoclastic Capital Management team • team@iconocapital.com • 585-504-1616
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Additional Resources</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Value-added services and resources for our clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Monthly Newsletter */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Client Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Access to our monthly client newsletter which some clients have even said "is worth our worth the
                    cost itself"
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Discounts and Partners */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Discounts and Preferred Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Access to exclusive discounts and our network of trusted partners including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Monarch (budgeting)</li>
                    <li>• Cloaked (privacy)</li>
                    <li>• Encorestate Plans</li>
                    <li>• Sora Finance</li>
                    <li>• CardPointers</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 3: Client Communications */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Client Communications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Stay informed with targeted updates on topics that matter to you.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Email distribution lists for relevant updates like{" "}
                    <span className="font-mono text-xs break-all">studentloans@iconocapital.com</span>
                  </p>
                </CardContent>
              </Card>

              {/* Card 4: Legal Information */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Legal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Iconoclastic Capital Management LLC is a registered investment advisor offering advisory services
                    and doing business in the State of New York.
                  </p>
                  <a
                    href="https://adviserinfo.sec.gov/firm/summary/310132"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 underline leading-relaxed break-words"
                  >
                    View our firm's Form ADV
                  </a>
                </CardContent>
              </Card>

              {/* Card 5: Questions */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We're here to address any concerns and ensure this partnership aligns perfectly with your goals and
                    values.
                  </p>
                  <a
                    href="mailto:team@iconocapital.com"
                    className="inline-flex items-center justify-center w-full min-h-[40px] text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                  >
                    Email Us Your Questions
                  </a>
                </CardContent>
              </Card>

              {/* Card 6: Blog */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Our Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Read our latest insights on financial planning, investment strategies, and market commentary.
                  </p>
                  <a
                    href="https://iconocapital.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full min-h-[40px] text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                  >
                    Visit Our Blog
                  </a>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">{category.icon}</div>
            <CardTitle className="text-xl leading-tight text-balance">{category.title}</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={`${category.color} text-xs font-semibold flex-shrink-0`}>
              {category.services.length} Services
            </Badge>
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {category.services.map((service, index) => (
              <div key={index} className="border-l-4 border-primary/30 pl-4 py-2">
                <h5 className="font-semibold text-foreground text-base mb-1">{service.service}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
