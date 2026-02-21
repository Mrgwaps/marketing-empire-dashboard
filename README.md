# Marketing Empire Dashboard 🚀

**Live Dashboard:** https://mrgwaps.github.io/marketing-empire-dashboard/

Real-time tracking of your affiliate marketing empire across 5+ income streams.

## Features

### 📊 Real-Time Metrics
- **Total Revenue** across all income streams
- **Email Subscribers** with milestone tracking
- **Content Published** (Reddit posts, YouTube videos)

### 💰 Income Streams
1. **Amazon Associates** - Luxury beauty product commissions
2. **Payhip Digital Products** - Guides, templates, cheat sheets
3. **Lead Generation** - AgentMail services
4. **YouTube** - KIE AI automated video content
5. **AgentMail Services** - Autonomous email automation

### 📈 Visualizations
- Revenue trend chart (30-day view)
- Traffic & engagement breakdown
- Milestone progress bars
- System status indicators

### 🔄 Automation
- Auto-refreshes every 5 minutes
- Pulls live data from Airtable
- Mobile-responsive design
- Animated charts and metrics

## Setup Instructions

### 1. Get Your Airtable Personal Access Token (PAT)

1. Go to https://airtable.com/create/tokens
2. Click "Create new token"
3. Name it: "Marketing Dashboard"
4. Add these scopes:
   - `data.records:read`
   - `schema.bases:read`
5. Add access to base: `Project 10X` (appl6ToZSGjS6wU0K)
6. Click "Create token"
7. Copy the token (starts with `pat...`)

### 2. Configure the Dashboard

1. Open `index.html` in a text editor
2. Find line 390: `const AIRTABLE_PAT = 'YOUR_AIRTABLE_PAT_HERE';`
3. Replace `YOUR_AIRTABLE_PAT_HERE` with your actual token
4. Save the file
5. Commit and push to GitHub

### 3. Enable GitHub Pages (Already Done!)

GitHub Pages is already configured and live at:
**https://mrgwaps.github.io/marketing-empire-dashboard/**

## Airtable Integration

The dashboard pulls data from these tables in your `Project 10X` base:

- **System Overview** - Resources and tools tracking
- **Product Performance** - Revenue by product and income stream
- **Reddit Performance** - Post engagement metrics
- **Email Metrics** - Subscriber counts and growth
- **Weekly Research** - Competitive intelligence

## Automated Tracking

Your dashboard is powered by 5 automated workflows:

1. **Reddit Post Auto-Tracker** - Daily at 8 AM PST
2. **Brevo Email Metrics Sync** - Weekly on Mondays at 9 AM PST
3. **Weekly Competitive Research** - Every Friday at 11 AM PST
4. **Milestone Alerts** - Every 30 minutes
5. **Amazon Revenue Import** - Sundays at 10 AM PST

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Charts**: Chart.js
- **Data Source**: Airtable API
- **Hosting**: GitHub Pages
- **Design**: Glassmorphism, gradient backgrounds, responsive grid

## Milestones Tracked

### Email Subscribers
- ✓ First 10 subscribers
- ⏳ 50 subscribers
- ⏳ 100 subscribers
- ⏳ 500 subscribers

### Revenue
- ✓ First $1 earned
- ⏳ $100 earned
- ⏳ $500 earned
- ⏳ $1,000 earned

### Content
- ✓ First post
- ⏳ 30 pieces of content
- ⏳ 100 pieces of content

## Mobile Responsive

Dashboard automatically adapts to:
- Desktop (1400px max width)
- Tablet (grid adjusts)
- Mobile (single column, optimized metrics)

## Support

Questions? Issues? Open a GitHub issue or check your Airtable automations.

---

**Built with ✨ by Astro**
*Powered by Composio - Connecting AI to 500+ tools*
