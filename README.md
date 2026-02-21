# Marketing Empire Dashboard

A real-time analytics dashboard for tracking marketing performance metrics.

## Features

- 📊 Real-time data visualization with Chart.js
- 🔐 Secure authentication system
- ⚙️ Easy configuration via settings panel
- 📱 Mobile responsive design
- 🔄 Auto-refresh every 5 minutes
- 🎨 Modern gradient UI

## Setup Instructions

### 1. Clone and Deploy

This dashboard is designed for GitHub Pages deployment:

1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. Set source to `main` branch

### 2. Configure Airtable Integration

1. Create an Airtable Personal Access Token (PAT):
   - Visit https://airtable.com/create/tokens
   - Create token with `data.records:read` scope
   - Copy the generated token

2. Log into the dashboard:
   - Visit your GitHub Pages URL
   - Use your credentials to log in

3. Configure PAT:
   - Click the ⚙️ settings icon (top-right)
   - Paste your Airtable PAT
   - Click "Save & Reload"

### 3. Airtable Base Structure

Your Airtable base should include these tables:

- **Email Metrics**: Track subscriber growth and email performance
- **Product Performance**: Monitor product sales and revenue
- **Reddit Performance**: Track post engagement and karma
- **System Overview**: General resources and tracking

## Usage

- **Login**: Use configured credentials to access dashboard
- **Settings**: Click ⚙️ to update Airtable PAT
- **Auto-refresh**: Data updates every 5 minutes automatically
- **Logout**: Click "Logout" to end session

## Tech Stack

- Pure HTML/CSS/JavaScript
- Chart.js for visualizations
- Airtable API for data
- LocalStorage for configuration
- GitHub Pages for hosting

## Security

- Authentication via localStorage session
- PAT stored locally in browser only
- No server-side storage
- Configure PAT after deployment

## License

MIT License - feel free to customize for your needs!