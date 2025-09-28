# FundLanka - Product Requirements Document (PRD)

## 1. Product Overview

### 1.1 Product Identity
**FundLanka** is a sophisticated crowdfunding platform designed specifically for Sri Lankan entrepreneurs, startups, and impact-driven projects. Operating under the umbrella of **Startup Nation**, FundLanka serves as a bridge connecting visionary creators with values-aligned investors and supporters.

### 1.2 Mission Statement
To democratize funding access for Sri Lankan innovators while ensuring all projects align with Sustainable Development Goals (SDGs), creating measurable social and economic impact.

### 1.3 Core Value Proposition
- **For Creators**: Access to funding, mentorship, and a supportive community
- **For Investors**: Curated, high-impact investment opportunities with transparent metrics
- **For Society**: Sustainable development and economic growth through innovation

---

## 2. Technical Architecture

### 2.1 Technology Stack

#### Frontend Framework
- **React 18.3.1** - Modern component-based UI library
- **TypeScript** - Type-safe development with enhanced developer experience
- **Vite** - Fast build tool and development server

#### Styling & Design System
- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Conditional class name utilities

#### UI Component Library
- **Radix UI** - Accessible, unstyled component primitives:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Hover Card, Navigation Menu, Popover, Progress, Select, Slider
  - Switch, Tabs, Toast, Tooltip, and more
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization and charting

#### State Management & Data Fetching
- **TanStack React Query** - Server state management and caching
- **React Hook Form** - Form state management with validation
- **Zod** - TypeScript-first schema validation

#### Routing & Navigation
- **React Router DOM** - Client-side routing

#### Backend Integration
- **Supabase** - Backend-as-a-Service platform providing:
  - PostgreSQL database
  - Authentication & authorization
  - Real-time subscriptions
  - File storage
  - Edge functions

#### Additional Libraries
- **date-fns** - Date manipulation utilities
- **Leaflet** - Interactive maps integration
- **Embla Carousel** - Touch-friendly carousel component
- **Sonner** - Toast notification system

### 2.2 Architecture Patterns

#### Component Architecture
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── [Feature]Form/   # Feature-specific forms
│   └── [Feature]*.tsx   # Feature-specific components
├── pages/               # Route-level components
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── data/                # Mock data and constants
└── integrations/        # External service integrations
```

#### Design System Structure
- **CSS Variables** - Semantic color tokens and design tokens
- **Component Variants** - CVA-based variant system
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching capability

---

## 3. Core Features & Functionality

### 3.1 Project Discovery & Search
#### Advanced Search System
- **Multi-faceted Search**: Title, description, creator, category
- **Special Syntax Support**: `category:tech`, `creator:john`
- **Auto-suggestions**: Real-time project suggestions
- **Search History**: Recent searches persistence

#### Filtering System
- **Category Filter**: 8 categories (Medical, Education, Technology, Community, Disaster Relief, Animals, Arts & Culture, Sports)
- **Location Filter**: Sri Lankan provinces and cities
- **Status Filter**: Active, Completed, Draft, Pending Review, Paused
- **Funding Range**: Slider-based range selection
- **Advanced Filters**: Success rate, creator rating, urgency

#### Sorting Options
- **Trending**: Algorithmic trending based on activity
- **Most Funded**: Highest current funding amount
- **Ending Soon**: Projects approaching deadline
- **Recently Launched**: Newest projects
- **Popular**: Most viewed/shared projects

### 3.2 Project Management System
#### Project Types
- **All-or-Nothing**: Must reach full funding goal
- **Keep-What-You-Raise**: Keep funds regardless of goal achievement
- **Recurring**: Ongoing funding campaigns

#### Project Lifecycle
1. **Draft**: Initial creation and editing
2. **Pending Review**: Administrative approval process
3. **Active**: Live and accepting donations
4. **Paused**: Temporarily suspended
5. **Completed**: Successfully funded and delivered
6. **Cancelled**: Voluntarily terminated
7. **Failed**: Did not meet funding requirements

### 3.3 Trust & Transparency Features
#### Verification System
- **Identity Verification**: Government document verification
- **Nonprofit Registration**: NGO status verification
- **Government Approval**: Official endorsements
- **Partner Organization**: Institutional partnerships
- **Track Record**: Previous success verification

#### Financial Transparency
- **Funding Breakdown**: Detailed expense categories
- **Real-time Updates**: Live milestone tracking
- **Expense Reports**: Periodic financial reporting
- **Receipt Management**: Digital receipt storage
- **Impact Metrics**: Measurable outcome tracking

### 3.4 User Management System
#### User Roles
- **Creator**: Project initiators and managers
- **Investor/Donor**: Funding contributors
- **Admin**: Platform administrators
- **Reviewer**: Content moderation team

#### Profile Management
- **Personal Information**: Contact details, bio, location
- **Verification Status**: Identity and credential verification
- **Creator Statistics**: Success rate, completion rate, total raised
- **Investor History**: Contribution history, supported projects
- **Social Integration**: LinkedIn, Twitter, website links

---

## 4. Design System & Typography

### 4.1 Color Palette (HSL-based)
#### Primary Colors
- **Warning (Primary)**: `hsl(41, 100%, 53%)` - Gold/Orange theme
- **Primary Variant**: Multiple shades and tints
- **Secondary**: Complementary colors for accents

#### Semantic Colors
- **Success**: Green variants for positive actions
- **Destructive**: Red variants for warnings/errors
- **Info**: Blue variants for informational content
- **Muted**: Gray variants for secondary text

#### Background System
- **Background**: Main page background
- **Card**: Component background
- **Popover**: Overlay background
- **Muted**: Subtle backgrounds

### 4.2 Typography System
#### Font Families
- **Primary**: System font stack with fallbacks
- **Headings**: Optimized for display text
- **Body**: Optimized for readability

#### Font Scale
- **Responsive**: Adaptive sizing based on screen size
- **Semantic**: Heading hierarchy (h1-h6)
- **Utility Classes**: Fine-grained control

### 4.3 Component Design Patterns
#### Cards
- **Hover Effects**: Subtle animations and shadows
- **Shadow System**: Layered depth perception
- **Border Radius**: Consistent rounded corners

#### Interactive Elements
- **Focus States**: Accessible focus indicators
- **Hover States**: Visual feedback
- **Active States**: Click/tap feedback
- **Disabled States**: Clear unavailable states

---

## 5. Data Models & Types

### 5.1 Project Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ProjectCategory;
  
  // Creator information
  creatorId: string;
  creator: CreatorInfo;
  
  // Funding details
  fundingGoal: number;
  currentAmount: number;
  currency: string;
  fundingType: FundingType;
  
  // Timeline
  startDate: Date;
  endDate: Date;
  
  // Trust & transparency
  trustScore?: number;
  verificationBadges?: VerificationBadge[];
  fundingBreakdown?: FundingBreakdown;
  projectMilestones?: ProjectMilestone[];
}
```

### 5.2 User Data Structure
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  displayName: string;
  avatar?: string;
  role: UserRole;
  accountStatus: AccountStatus;
  verificationStatus: VerificationStatus;
  
  // Profile information
  bio?: string;
  location?: string;
  
  // Statistics
  totalRaised?: number;
  projectsCreated?: number;
  projectsSupported?: number;
}
```

### 5.3 Category System
Eight primary categories covering diverse project types:
- **Medical**: Healthcare, medical equipment, treatment funds
- **Education**: Schools, scholarships, educational resources
- **Technology**: Software, hardware, innovation projects
- **Community**: Local development, infrastructure
- **Disaster Relief**: Emergency response, recovery efforts
- **Animals**: Wildlife conservation, animal welfare
- **Arts & Culture**: Creative projects, cultural preservation
- **Sports**: Athletic programs, equipment, facilities

---

## 6. User Experience & Interface

### 6.1 Layout Structure
#### Fixed Header Navigation
- **Floating Design**: Glassmorphism effect with backdrop blur
- **Responsive**: Collapsible mobile navigation
- **Brand Prominence**: Logo-centric design
- **Action-Oriented**: Primary CTA prominently placed

#### Main Content Areas
- **Hero Section**: Value proposition and key statistics
- **Discovery Interface**: Advanced filtering and search
- **Project Grid**: Responsive card-based layout
- **Detail Views**: Comprehensive project information

#### Footer
- **Information Architecture**: Organized link categories
- **Social Proof**: Partner logos and social links
- **Legal Information**: Terms, privacy, compliance

### 6.2 Mobile-First Design
#### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

#### Mobile Optimizations
- **Touch Targets**: Minimum 44px for interactive elements
- **Swipe Gestures**: Carousel and navigation support
- **Drawer Navigation**: Slide-out mobile menu
- **Progressive Enhancement**: Core functionality without JavaScript

### 6.3 Accessibility Features
#### WCAG 2.1 Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus Management**: Clear focus indicators

#### Inclusive Design
- **Reduced Motion**: Respect user preferences
- **Font Scaling**: Support for user font size preferences
- **Alternative Text**: Descriptive alt tags for images
- **Error Handling**: Clear, actionable error messages

---

## 7. Business Logic & Rules

### 7.1 Project Funding Rules
#### Funding Models
- **All-or-Nothing**: Full refund if goal not met
- **Keep-What-You-Raise**: Creator keeps all funds regardless
- **Recurring**: Ongoing monthly/periodic funding

#### Timeline Management
- **Minimum Duration**: 30 days
- **Maximum Duration**: 90 days
- **Extension Rules**: Limited extensions for active projects
- **Grace Period**: 48-hour post-deadline processing

### 7.2 Trust & Safety
#### Content Moderation
- **Pre-Launch Review**: Manual approval process
- **Community Reporting**: User-driven content flagging
- **Automated Screening**: AI-powered content analysis
- **Appeal Process**: Creator appeals for rejected content

#### Financial Security
- **Escrow System**: Funds held until milestones met
- **Fraud Detection**: Transaction monitoring
- **Refund Processing**: Automated refund system
- **Dispute Resolution**: Mediation process

### 7.3 Platform Economics
#### Fee Structure
- **Platform Fee**: Percentage of successful funding
- **Payment Processing**: Third-party processor fees
- **Creator Tools**: Premium feature access
- **Verification Services**: Identity and credential verification

---

## 8. Integration Points

### 8.1 Supabase Integration
#### Database Schema
- **Projects**: Core project information
- **Users**: User profiles and authentication
- **Donations**: Transaction records
- **Comments**: Community engagement
- **Files**: Media and document storage

#### Real-time Features
- **Live Updates**: Project progress updates
- **Notifications**: User activity notifications
- **Chat Support**: Real-time messaging
- **Activity Feeds**: Social activity streams

### 8.2 Third-Party Services
#### Payment Processing
- **Stripe Integration**: Credit card processing
- **Local Payment Methods**: Sri Lankan banking integration
- **Mobile Payments**: Digital wallet support
- **Cryptocurrency**: Future blockchain integration

#### Communication
- **Email Service**: Transactional and marketing emails
- **SMS Gateway**: OTP and notification services
- **Push Notifications**: Mobile app notifications
- **Social Media**: Sharing and authentication

---

## 9. Analytics & Reporting

### 9.1 User Analytics
#### Engagement Metrics
- **Page Views**: Traffic analysis
- **Session Duration**: User engagement depth
- **Conversion Rates**: Funnel analysis
- **User Retention**: Cohort analysis

#### Project Performance
- **Funding Velocity**: Funding rate analysis
- **Success Rates**: Category and creator performance
- **Geographic Distribution**: Regional funding patterns
- **Seasonal Trends**: Temporal funding patterns

### 9.2 Business Intelligence
#### Platform Health
- **Growth Metrics**: User and project growth
- **Revenue Analytics**: Fee collection and trends
- **Cost Analysis**: Operational expense tracking
- **ROI Measurement**: Marketing effectiveness

---

## 10. Future Roadmap & Enhancements

### 10.1 Planned Features
#### Short-term (3-6 months)
- **Mobile Application**: Native iOS/Android apps
- **Advanced Analytics**: Creator dashboard enhancements
- **Social Features**: User following and activity feeds
- **API Development**: Third-party integration capabilities

#### Medium-term (6-12 months)
- **Marketplace Integration**: Product pre-sales
- **Mentorship Program**: Creator support system
- **Investment Tools**: Equity crowdfunding features
- **International Expansion**: Multi-currency support

#### Long-term (12+ months)
- **Blockchain Integration**: Cryptocurrency payments
- **AI Recommendations**: Personalized project discovery
- **Virtual Events**: Online fundraising events
- **Impact Measurement**: SDG tracking and reporting

### 10.2 Technical Debt & Optimizations
#### Performance Improvements
- **Code Splitting**: Lazy loading optimization
- **Image Optimization**: WebP format adoption
- **Caching Strategy**: CDN and browser caching
- **Database Optimization**: Query performance tuning

#### Scalability Preparations
- **Microservices Architecture**: Service decomposition
- **Load Balancing**: Traffic distribution
- **Auto-scaling**: Dynamic resource allocation
- **Monitoring & Alerting**: Proactive issue detection

---

## 11. Success Metrics & KPIs

### 11.1 User-Centric Metrics
- **Monthly Active Users (MAU)**
- **Project Success Rate**
- **Average Funding Amount**
- **User Retention Rate**
- **Creator Return Rate**

### 11.2 Business Metrics
- **Total Platform Volume**
- **Revenue Growth Rate**
- **Customer Acquisition Cost (CAC)**
- **Lifetime Value (LTV)**
- **Platform Net Promoter Score (NPS)**

### 11.3 Impact Metrics
- **SDG Alignment Rate**
- **Social Impact Measurement**
- **Job Creation Tracking**
- **Economic Impact Assessment**
- **Environmental Impact Monitoring**

---

## 12. Risk Assessment & Mitigation

### 12.1 Technical Risks
- **Data Security**: End-to-end encryption, regular audits
- **System Downtime**: Redundancy and failover systems
- **Scalability Issues**: Auto-scaling and load testing
- **Data Loss**: Automated backups and disaster recovery

### 12.2 Business Risks
- **Regulatory Changes**: Legal compliance monitoring
- **Market Competition**: Unique value proposition focus
- **Economic Downturns**: Diversified project categories
- **Fraud Prevention**: Multi-layer verification systems

---

## Conclusion

FundLanka represents a comprehensive, technology-forward approach to crowdfunding specifically tailored for the Sri Lankan market. Built with modern web technologies and designed for scalability, the platform balances user experience with robust business functionality while maintaining a strong focus on social impact and transparency.

The platform's architecture supports current requirements while providing flexibility for future enhancements, ensuring long-term viability and growth potential in the evolving crowdfunding landscape.

---

*Document Version: 1.0*  
*Last Updated: September 2025*  
*Next Review: December 2025*