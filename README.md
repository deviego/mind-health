# MiND Health - Medical Clinic Management System

![MiND Health Logo](public/imgs/MiND-logo.png)

## 📋 About the Project

**MiND Health** is a complete management system for medical clinics, developed as an individual project using Next.js 14 and modern technologies. The system offers an integrated solution for patient management, scheduling, financial control, health insurance, and much more.

**Developer:** Diego  
**Project Type:** Individual (developed entirely by me)  
**Status:** In development

## 🚀 Technologies Used

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Component library based on Radix UI
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Complementary Libraries

- **@nivo/line** - Charts and visualizations
- **React Big Calendar** - Calendar component
- **DayPilot** - Advanced scheduler
- **Embla Carousel** - Responsive carousel
- **Lucide React** - Icons
- **Zustand** - State management
- **Axios** - HTTP client
- **Date-fns** - Date manipulation

### Development Tools

- **ESLint** - Code linting
- **Rocketseat ESLint Config** - Standardized configuration
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic CSS prefixes

## 🏗️ Project Architecture

### Folder Structure

```
app/
├── (protect)/           # Protected routes
│   ├── home/           # Main dashboard
│   ├── scheduling/     # Appointments
│   ├── patients/       # Patient management
│   ├── financial/      # Financial module
│   ├── healthInsurance/ # Health insurance
│   ├── benefit/        # Benefits
│   ├── transactions/   # Transactions
│   ├── productandserviceregistration/ # Products and services
│   ├── negotiationandbudgeting/ # Negotiation and budgeting
│   ├── profile/        # User profile
│   └── components/     # Specific components
├── auth/               # Authentication
│   ├── login/
│   └── register/
└── api/                # API routes

components/
├── ui/                 # Base components (Shadcn/ui)
├── navbar.tsx          # Navigation bar
└── sidebar.tsx         # Side menu

public/
├── imgs/              # Images and assets
└── companies/         # Insurance company logos
```

### Architectural Patterns

- **App Router** (Next.js 14) - File-based routing
- **Route Groups** - Route organization with `(protect)`
- **Component-driven Development** - Reusable components
- **Form Validation** - Validation with Zod + React Hook Form
- **Responsive Design** - Adaptive layout for different screens

## 🎯 Implemented Features

### 1. Main Dashboard (`/home`)

- **System overview** with important metrics
- **Line charts** showing new appointments
- **Progress bars** for goals and indicators
- **Carousel** of featured doctors
- **Daily agenda summary**
- **Information cards** with statistics

### 2. Appointment System (`/scheduling`)

- **Interactive calendar** for date selection
- **Visual scheduler** with time slots and professionals grid
- **Appointment modal** with steps
- **Doctor availability visualization**
- **Schedule conflict management**

### 3. Patient Management (`/patients`)

- **Patient list** with filters
- **Registration modal** for new patients
- **Patient cards** with summary data
- **Delinquency system**
- **Category and period filters**

### 4. Financial Module (`/financial`)

- **Financial dashboard** with revenue metrics
- **Revenue trend charts**
- **Indicator cards** (gross profit, net profit, etc.)
- **Progress bars** for financial goals
- **Links to detailed reports**

### 5. Health Insurance Management (`/healthInsurance`)

- **Medical insurance registration**
- **Visual cards** with insurance logos
- **Registration modal** with complete form
- **Scroll area** for insurance list
- **Editing existing insurances**

### 6. Benefits System (`/benefit`)

- **Benefit plan creation**
- **Multi-step wizard** for configuration
- **Image upload** for cards
- **Value and service definition**
- **Existing benefits visualization**

### 7. Transactions (`/transactions`)

- **Organized tabs**: Accounts receivable, payable, statement
- **Financial metrics cards**
- **Advanced filters** by period and category
- **Transaction list** with status
- **Financial system integration**

### 8. Product and Service Registration (`/productandserviceregistration`)

- **Separate sections** for products and services
- **Visual cards** with thematic images
- **Specific registration modals**
- **Registered items list**

### 9. Negotiation and Budgeting (`/negotiationandbudgeting`)

- **Budget system** with workflow
- **Multi-step wizard** for creation
- **Professional and procedure selection**
- **Integrated scheduling**
- **Automatic value calculation**

### 10. Authentication (`/auth`)

- **Responsive login screen**
- **User registration**
- **Modern design** with gradients
- **Validated forms**

## 🎨 Design System

### Main Colors

```css
primary: #006BF9         /* Main blue */
secondary: #000000       /* Black */
secondary-gray: #4F535A  /* Secondary gray */
secondary-white: #EDEDED /* Secondary white */
secondary-dark: #2F2F2F  /* Secondary dark */
```

### Gradients

- **Main button:** `from-[#006BF9] to-[#31E6FF]`
- **Highlight elements:** Custom gradients

### Typography

- **Main font:** FF Mark Pro (custom)
- **System font:** Inter (Google Fonts)

### Standardized Components

- **Cards** with subtle shadows and rounded borders
- **Buttons** with hover and focus states
- **Inputs** with visual validation
- **Modals** centered and responsive
- **Navigation** with active state indicators

## 🔧 Reusable Components

### Specialized Modals

- `modalCreatePatient` - Patient registration
- `modalCreateDoctor` - Doctor registration
- `modalCreateBenefit` - Benefit creation
- `modalCreateBudget` - Budget creation
- `modalCreateProduct` - Product registration
- `modalCreateService` - Service registration
- `modalRegisterHealthInsurance` - Insurance registration
- `modalPatientExpense` - Patient expenses

### Layout Components

- `Sidebar` - Side navigation with icons
- `NavBar` - Top bar with dropdown menu
- `Calendar` - Custom calendar
- `Scheduler` - Visual schedule

### Data Components

- `NewAppointmentsAtTheClinic` - Appointments chart
- Various information cards
- Progress bars and indicators

## 📱 Responsiveness

The system was developed with **mobile-first approach** and is fully responsive:

- **Desktop:** Complete layout with sidebar and multiple columns
- **Tablet:** Card adaptation and element reduction
- **Mobile:** Optimized navigation and stacked elements

### Breakpoints

```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1028px  /* Small desktop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

## 🚀 How to Run

### Prerequisites

- Node.js 18+
- NPM or Yarn

### Installation

```bash
# Clone the repository
git clone 

# Enter the project folder
cd mind-health

# Install dependencies
npm install

# Run the development server
npm run dev
```

Access [http://localhost:3000](http://localhost:3000) to see the project running.

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code verification
```

## 🎯 Featured Functionalities

### 1. Advanced Visual Schedule

- **Custom grid** with time slots and professionals
- **Visual indicators** of occupation
- **Drag & drop** for rescheduling (planned)
- **Color codes** by service type

### 2. Multi-Step Wizard

- **Guided flow** for complex processes
- **Step-by-step validation**
- **Navigation between steps**
- **Automatic saving** (planned)

### 3. Filter System

- **Multiple filter criteria**
- **Organized dropdown menus**
- **Filters by date**, category, status
- **Real-time search** (planned)

### 4. Analytical Dashboard

- **Real-time metrics**
- **Interactive charts** with Nivo
- **KPI cards**
- **Temporal comparisons**

## 🔮 Upcoming Features

- [ ] **Real API integration**
- [ ] **Real-time notification system**
- [ ] **Exportable PDF reports**
- [ ] **Internal team chat**
- [ ] **Automatic data backup**
- [ ] **Dark theme**
- [ ] **Native mobile app**
- [ ] **WhatsApp integration**

## 🎨 Applied Design Concepts

### UX/UI Principles

- **Clear visual hierarchy**
- **Immediate feedback** on interactions
- **Consistency** between components
- **Accessibility** (in development)

### Modern Design Patterns

- **Glassmorphism** in some elements
- **Subtle microinteractions**
- **Cohesive design system**
- **Mobile-first** approach

## 📊 Project Metrics

- **+50 custom React components**
- **+15 functional pages**
- **+20 specialized modals**
- **100% TypeScript** coverage
- **Complete responsive design**
- **Modern CSS** with Tailwind

## 👨‍💻 About the Development

This project was **developed entirely by me (Diego)** as a demonstration of my skills in:

- **Modern frontend** with React/Next.js
- **Advanced TypeScript**
- **Complex interface design**
- **State management**
- **Advanced componentization**
- **Responsive design**
- **Clean code patterns**

### Technical Decisions

- **Next.js 14** for performance and SEO
- **TypeScript** for type safety
- **Tailwind CSS** for productivity
- **Shadcn/ui** for consistent components
- **React Hook Form** for efficient forms
- **Zod** for robust validation

## 📝 License

This project was developed for technical skills demonstration purposes.
