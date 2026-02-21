# 🚀 Marketing Empire Dashboard

**Live Analytics & Revenue Tracking** for Multi-Platform Affiliate Marketing

## 🌐 Live Dashboard
👉 **[View Live Dashboard](https://mrgwaps.github.io/marketing-empire-dashboard/)**

## 📊 Features

### Real-Time Metrics
- **Total Revenue** across all income streams
- **Email Subscribers** with milestone tracking
- **Reddit Posts** performance
- **Conversion Rates** and growth trends

### 5+ Income Streams Tracked
1. **Amazon Associates** (ID: megonlpro-20) - Luxury skincare affiliate
2. **Payhip Digital Products** - Guides, templates, cheat sheets
3. **AgentMail Lead Generation** - Automated lead gen
4. **KIE AI Video Content** - YouTube monetization
5. **Reddit Affiliate** - Direct traffic conversion

### Live Charts
- 📈 **Revenue Trend** (30-day historical)
- 👥 **Subscriber Growth** (weekly breakdown)
- 🎯 **Milestone Progress** (visual tracking)

### Auto-Refresh
- Updates every **5 minutes**
- Pulls live data from **Airtable API**
- Mobile-optimized responsive design

## ⚙️ Setup

### 1. Get Your Airtable Personal Access Token (PAT)

1. Go to https://airtable.com/create/tokens
2. Click **"Create new token"**
3. Name it: `Marketing Dashboard Access`
4. Add these scopes:
   - `data.records:read`
   - `schema.bases:read`
5. Add access to base: `Project 10X` (appl6ToZSGjS6wU0K)
6. Click **"Create token"**
7. Copy the token (starts with `pat...`)

### 2. Update Dashboard with Your PAT

Edit `index.html` line 329:
```javascript
const AIRTABLE_PAT = "YOUR_AIRTABLE_PAT_HERE";
```
Replace with your actual PAT:
```javascript
const AIRTABLE_PAT = "patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXX";
```

### 3. Commit & Push

```bash
git add index.html
git commit -m "Add Airtable PAT"
git push
```

Dashboard will update automatically on GitHub Pages!

## 📊 Airtable Tables

The dashboard pulls from these tables:
- **Product Performance** - Revenue by source
- **Email Metrics** - Subscriber counts
- **Reddit Performance** - Post analytics
- **System Overview** - Resources & links
- **Weekly Research** - Competitive insights

## 🔄 Automation

Connected workflows:
- **Reddit Post Auto-Tracker** - Daily 8 AM PST
- **Brevo Email Metrics Sync** - Weekly Monday 9 AM PST
- **Weekly Competitive Research** - Friday 11 AM PST
- **Milestone Alerts** - Every 30 minutes

## 🎯 Milestones Tracked

- ✉️ **10, 50, 100, 500** email subscribers
- 💰 **$1, $100, $500, $1000** revenue
- 📝 **First Reddit post** live

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Charts**: Chart.js 4.4.1
- **API**: Airtable REST API
- **Hosting**: GitHub Pages
- **Design**: Gradient glass-morphism UI

## 📱 Mobile Responsive

Fully optimized for:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large displays

## 🔒 Security

- PAT stored client-side (update only in your fork)
- Read-only Airtable access
- No server-side code required
- HTTPS enforced via GitHub Pages

## 📈 Next Steps

1. **Update PAT** in index.html
2. **Post first Reddit content** to r/SkincareAddiction
3. **Monitor milestone alerts** every 30 minutes
4. **Review weekly research** every Friday

---

Built with ✨ by Astro | Powered by Composio
