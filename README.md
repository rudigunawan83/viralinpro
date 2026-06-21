# Viralin.pro

> **AI Platform untuk Riset, Membuat, dan Mengembangkan Konten Viral.**

Viralin.pro adalah platform **AI Content Intelligence & Automation** yang membantu content creator, UMKM, agency, dan digital marketer untuk riset konten populer, analisis kompetitor, membuat konten dengan AI, menjadwalkan publikasi multi-platform, dan menganalisis performa konten secara mendalam.

---

# Viralin.pro Design Theme

Create a premium SaaS web application called **Viralin.pro**.

## Brand Identity

Viralin.pro is an AI-powered platform for content research, competitor intelligence, content creation, publishing automation, and growth analytics.

The overall feeling should be:
- Modern
- Clean
- Premium
- Minimalist
- AI-first
- Productivity-focused
- Enterprise-ready

Think of a combination of:
- Linear
- Vercel
- Notion
- Stripe Dashboard
- ChatGPT
- Figma
- Framer

---

# Design Language

Use a clean layout with generous whitespace.

Everything should feel:
- Fast
- Smart
- Elegant
- Professional

Avoid clutter.

Prefer cards over borders.

Use subtle gradients and soft shadows.

Rounded corners:
- Cards: 16px
- Buttons: 12px
- Inputs: 12px

Spacing follows an 8px grid system.

---

# Color Palette

Primary:
#6D5EF9

Secondary:
#8B5CF6

Accent:
#A855F7

Success:
#22C55E

Warning:
#F59E0B

Danger:
#EF4444

Background:
#F8FAFC

Surface:
#FFFFFF

Border:
#E5E7EB

Text Primary:
#111827

Text Secondary:
#6B7280

Dark mode:
Use charcoal backgrounds with purple accents.

---

# Typography

Font:
Inter

Fallback:
Plus Jakarta Sans

Use:
- Bold headings
- Clean spacing
- Large readable typography

---

# Icons

Use Lucide icons.

Prefer outline style.

Keep icon size between 18–22px.

---

# Components

Use modern reusable components:

- KPI cards
- Charts
- AI insight cards
- Platform cards
- Competitor cards
- Empty states
- Skeleton loaders
- Dialogs
- Tabs
- Data tables
- Side panels

All components should have smooth hover states.

---

# Sidebar

Left vertical navigation.

Collapsed and expanded modes.

Icons + labels.

Active item uses purple highlight.

---

# Top Navigation

Contains:
- Search
- Notifications
- Workspace selector
- User avatar
- Quick Create button

---

# Dashboard

Include:
- KPI metrics
- AI Insight panel
- Content performance chart
- Calendar widget
- Top content cards
- Recent activity
- Quick actions

---

# AI Style

Whenever AI is involved, use:
- Purple gradient highlights
- Sparkle icon
- Robot or AI visual cues
- Friendly recommendations
- Insight cards

---

# Animations

Subtle only.

Use Framer Motion.

Include:
- Fade in
- Scale on hover
- Slide transitions
- Skeleton loading

No excessive animations.

---

# Accessibility

High contrast.

Keyboard accessible.

Responsive.

WCAG friendly.

---

# Feel

The user should feel:

"This product is intelligent, trustworthy, and helps me grow my content business."

The interface should look like a premium AI startup backed by world-class designers.

Never use outdated admin dashboard styles.

Always prioritize simplicity, clarity, and beautiful visual hierarchy.

---

# Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Component Library | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Animation | Framer Motion |
| Tables | TanStack Table v8 |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Notifications | Sonner |
| Theme | next-themes (dark mode) |
| State | Zustand |
| Date Utils | date-fns |
| Utilities | clsx, tailwind-merge |

---

# Pages

| Route | Page |
|---|---|
| `/dashboard` | Dashboard utama dengan KPI, chart, AI insights |
| `/riset` | Riset konten trending & viral |
| `/kompetitor` | Analisis kompetitor |
| `/studio` | AI Content Studio |
| `/kalender` | Kalender konten |
| `/publikasi` | Multi-platform publishing |
| `/analitik` | Analytics & reporting |
| `/inbox` | Unified inbox |
| `/asisten` | AI Growth Coach (chat) |
| `/merek` | Brand memory & persona |
| `/tim` | Team management |
| `/langganan` | Subscription plans |
| `/pengaturan` | Settings |

---

# Project Structure

```
viralinpro/
├── app/
│   ├── layout.tsx              # Root layout (ThemeProvider, AppProvider)
│   ├── page.tsx                # Redirect → /dashboard
│   ├── globals.css             # Design tokens & global styles
│   ├── dashboard/
│   │   ├── page.tsx            # Dashboard server component
│   │   └── DashboardClient.tsx # Dashboard client assembly
│   ├── riset/
│   ├── kompetitor/
│   ├── studio/
│   ├── kalender/
│   ├── publikasi/
│   ├── analitik/
│   ├── inbox/
│   ├── asisten/
│   ├── merek/
│   ├── tim/
│   ├── langganan/
│   └── pengaturan/
├── components/
│   ├── layout/
│   │   ├── AppSidebar.tsx      # Collapsible sidebar
│   │   ├── AppHeader.tsx       # Top navigation
│   │   └── AppLayout.tsx       # Layout wrapper
│   └── dashboard/
│       ├── StatCard.tsx        # KPI card with sparkline
│       ├── PerformanceChart.tsx # Area chart with tabs
│       ├── AIInsightCard.tsx   # Purple AI insight panel
│       ├── TodayCalendar.tsx   # Today's schedule widget
│       ├── TopContent.tsx      # Horizontal content cards
│       └── AIRecommendation.tsx # AI banner CTA
├── lib/
│   ├── utils.ts                # cn, formatNumber helpers
│   └── app-context.tsx         # Sidebar collapse state
└── types/
    └── index.ts                # TypeScript types
```

---

# Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) → auto-redirects to `/dashboard`

---

© 2025 Viralin.pro. All rights reserved.
