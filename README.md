# Marketing Analytics Dashboard

A real-time analytics dashboard for tracking multi-platform marketing performance.

## Features

- **Live Data Integration**: Connects to Airtable for real-time metrics
- **Multi-Stream Tracking**: Monitor multiple revenue and traffic sources
- **Visual Analytics**: Interactive charts with Chart.js
- **Milestone Tracking**: Automated progress indicators
- **Mobile Responsive**: Works on all devices

## Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/marketing-empire-dashboard.git
   cd marketing-empire-dashboard
   ```

2. **Configure Airtable**
   - Create an Airtable base with required tables
   - Generate Personal Access Token at https://airtable.com/create/tokens
   - Required scopes: `data.records:read`, `schema.bases:read`

3. **Configure Dashboard**
   ```bash
   cp config.example.js config.js
   ```
   Edit `config.js` and add your credentials (this file is git-ignored for security)

4. **Deploy**
   - Push to GitHub
   - Enable GitHub Pages from repository settings
   - Access at `https://YOUR_USERNAME.github.io/marketing-empire-dashboard/`

## Security

- **Never commit `config.js`** - it contains sensitive credentials
- Use read-only Airtable tokens with minimal scopes
- Keep your base and table IDs private

## Technologies

- Pure HTML/CSS/JavaScript (no build required)
- Chart.js for data visualization
- Airtable API for data backend

## License

MIT License - modify and use as needed.