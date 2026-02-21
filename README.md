# 📊 Marketing Empire Dashboard

**Live Dashboard:** https://mrgwaps.github.io/marketing-empire-dashboard/

A sophisticated real-time analytics dashboard tracking your complete marketing automation empire across 5+ income streams.

## 🎯 Features

### Real-Time Metrics
- **Total Revenue** - Aggregate earnings across all platforms
- **Email Subscribers** - Growing list with milestone tracking
- **Content Pipeline** - Posts, videos, articles across platforms
- **API Usage** - Cost monitoring for all integrated services

### Income Stream Tracking
1. **Amazon Associates** (API: AKPA22X69E1756285391)
2. **Payhip Digital Products**
3. **Lead Generation** (AgentMail automation)
4. **Video Content** (KIE AI generated)
5. **Reddit Affiliate** (Active)

### Live Charts
- Revenue trend (7-day view)
- Email growth trajectory
- Content distribution by platform
- Traffic source breakdown

### Milestone Progress
- First 10 subscribers
- First dollar earned
- 30 pieces of content created

## 🔧 Setup Instructions

### Step 1: Get Your Airtable Personal Access Token (PAT)

1. Go to https://airtable.com/create/tokens
2. Click **Create new token**
3. Name it: `Marketing Dashboard API`
4. Add these scopes:
   - `data.records:read`
   - `schema.bases:read`
5. Add access to base: `Project 10X` (appl6ToZSGjS6wU0K)
6. Click **Create token**
7. **Copy the token** (starts with `pat...`)

### Step 2: Update Dashboard Configuration

1. Edit `index.html` in this repository
2. Find line ~385: `token: 'YOUR_AIRTABLE_PAT_HERE',`
3. Replace with your actual token:
   ```javascript
   token: 'patXXXXXXXXXXXXXXXX',
   ```
4. Commit and push the change

### Step 3: Wait for Deployment

GitHub Pages will automatically rebuild (1-2 minutes). Your dashboard will be live at:
**https://mrgwaps.github.io/marketing-empire-dashboard/**

## 📈 Data Sources

The dashboard pulls real-time data from your Airtable base **Project 10X**:

| Table | Purpose |
|-------|---------|
| **Product Performance** | Amazon affiliate products, clicks, revenue |
| **Reddit Performance** | Posts, upvotes, comments, profile clicks |
| **Email Metrics** | Signups, campaigns, open/click rates |
| **Payhip Sales** | Digital product revenue |
| **Multi-Platform Performance** | Cross-platform content tracking |
| **Video Performance** | KIE AI generated video metrics |

## 🔄 Auto-Refresh

Dashboard automatically refreshes data every **5 minutes** via Airtable API.

## 🎨 Design Features

- Dark theme optimized for extended viewing
- Responsive grid layout (mobile-friendly)
- Real-time Chart.js visualizations
- Gradient accents and hover effects
- Live update indicator

## 🚀 Technology Stack

- **Frontend:** Pure HTML/CSS/JavaScript
- **Charts:** Chart.js 4.4.0
- **Data:** Airtable REST API
- **Hosting:** GitHub Pages (free, HTTPS-enabled)
- **Automation:** Composio-powered workflows

## 📊 Tracked APIs

- Amazon Associates API
- Payhip API
- AgentMail API
- KIE AI API
- Hyperbrowser API
- Airtable API

## 🔐 Security

- PAT stored client-side (only you see it)
- HTTPS enforced
- Read-only access to Airtable
- No server-side processing

## 📝 Notes

Built with [Composio](https://composio.dev) - the platform connecting AI agents to 500+ external tools for seamless automation.

---

**Last Updated:** February 21, 2026  
**Status:** ✅ Live and tracking
