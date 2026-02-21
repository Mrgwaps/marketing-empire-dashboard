// Configuration Template
// Copy this file to config.js and fill in your actual values
// NEVER commit config.js to GitHub!

const CONFIG = {
  // Airtable Configuration
  AIRTABLE_PAT: "YOUR_AIRTABLE_PAT_HERE",  // Get from https://airtable.com/create/tokens
  AIRTABLE_BASE_ID: "YOUR_BASE_ID_HERE",
  
  // Table IDs
  TABLES: {
    SYSTEM_OVERVIEW: "YOUR_TABLE_ID_1",
    PRODUCT_PERFORMANCE: "YOUR_TABLE_ID_2",
    REDDIT_PERFORMANCE: "YOUR_TABLE_ID_3",
    EMAIL_METRICS: "YOUR_TABLE_ID_4",
    WEEKLY_RESEARCH: "YOUR_TABLE_ID_5"
  },
  
  // Optional: Brand info (public-facing)
  BRAND: {
    name: "Your Brand Name",
    tagline: "Your tagline here"
  }
};