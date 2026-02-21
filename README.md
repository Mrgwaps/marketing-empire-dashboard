# Marketing Empire Dashboard

**Live Dashboard:** [https://mrgwaps.github.io/marketing-empire-dashboard/](https://mrgwaps.github.io/marketing-empire-dashboard/)

## Overview

Real-time analytics dashboard for tracking multi-platform marketing performance across affiliate programs, email campaigns, social media, and digital product sales.

## Features

### 📊 **Performance Monitoring**
- Real-time revenue tracking
- Subscriber growth metrics
- Email engagement analytics
- Social media performance

### ⏰ **Automated Task Scheduling**
- Live countdown timers for scheduled tasks
- Cron-based automation tracking
- Next run time display
- Task frequency management

### 💰 **Income Stream Management**
- Multiple revenue source tracking
- Interactive filtering
- Performance comparison
- Growth metrics

### 🤖 **Agent Activity Log**
- Comprehensive action history
- Product creation tracking
- Channel subscription monitoring
- System event logging

### ✉️ **AgentMail Interface**
- Communication hub
- Inbox/Sent/Automated views
- Integration-ready design

### 🎛️ **Throttle Controls**
- Post frequency management
- Campaign rate limiting
- API rate control
- Auto-refresh intervals

### 📈 **Interactive Charts**
- Revenue trends (30-day)
- Subscriber growth
- Product performance
- Email engagement metrics

### 📋 **System Health & Logging**
- Real-time status monitoring
- Verbose logging console
- Error tracking
- System diagnostics

## Setup

1. **Visit the dashboard:** [Live URL](https://mrgwaps.github.io/marketing-empire-dashboard/)
2. **Login** with your credentials
3. **Configure Settings:** 
   - Click ⚙️ Settings in the top-right
   - Enter your Airtable Personal Access Token (PAT)
   - Required scope: `data.records:read`
   - Create token at: [https://airtable.com/create/tokens](https://airtable.com/create/tokens)
4. **Start tracking!** Dashboard auto-refreshes every 5 minutes

## Configuration

The dashboard connects to Airtable for data storage. You'll need:

- **Airtable Base** with tables:
  - System Overview
  - Product Performance
  - Reddit Performance
  - Email Metrics
  - Weekly Research

- **Airtable PAT** with `data.records:read` scope

All configuration is done through the Settings modal - no file editing required.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Charts:** Chart.js v4.4.0
- **Data Source:** Airtable API
- **Hosting:** GitHub Pages
- **Authentication:** Client-side with localStorage

## Security

- Client-side authentication
- PAT stored in browser localStorage
- Read-only Airtable access
- No server-side processing
- All credentials configured post-login via Settings

## Features in Detail

### Task Countdown System
Real-time countdown calculation for scheduled cron jobs with timezone handling (PST). Displays time until next run in days, hours, minutes, and seconds.

### Income Stream Tracking
Track multiple revenue sources:
- Affiliate programs
- Digital product sales
- Email list value
- Subscription services
- Video content monetization

### Throttle Controls
Adjustable sliders for:
- Social media posting frequency (paused to 2x daily)
- Email campaign rates (paused to 3x daily)
- API request limits (10-100 req/min)
- Dashboard refresh intervals (1-30 minutes)

### Logging Console
Verbose system logging with color-coded messages:
- 🔵 Info: General operations
- ✅ Success: Completed actions
- ⚠️ Warning: Non-critical issues
- ❌ Error: Critical failures

## License

MIT License - feel free to use and modify for your own projects.

## Support

For issues or questions, open an issue on GitHub.

---

**Built with ✨ by AI Agent**
