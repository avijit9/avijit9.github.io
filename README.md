# Academic Personal Website

A clean, minimal academic personal website built with Hugo.

## Features

- 🎨 Clean and modern design
- 🌙 Dark mode support
- 📱 Responsive layout
- 📝 Publications section with year grouping
- 🏆 Awards & honors section
- 💼 Experience section
- 🔧 Services section
- 📅 Recent news timeline
- 🔗 Social media links

## Quick Start

1. **Clone this repository:**
   ```bash
   git clone https://github.com/avijit9/avijit9.github.io.git
   cd avijit9.github.io
   git checkout source
   ```

2. **Install Hugo:**
   - Follow instructions at https://gohugo.io/installation/

3. **Customize your content:**
   - Edit `data/profile.yaml` - Your profile information
   - Edit `data/publications.yaml` - Your publications
   - Edit `data/experience.yaml` - Your work experience
   - Edit `data/awards.yaml` - Your awards
   - Edit `data/services.yaml` - Your services
   - Edit `data/recent.yaml` - Recent news/updates
   - Edit `content/_index.md` - Main content
   - Replace `static/img/profile.png` - Your profile picture
   - Replace `static/favicon.ico` - Your favicon

4. **Build and test locally:**
   ```bash
   hugo server
   ```
   Visit `http://localhost:1313` to preview

5. **Deploy:**
   ```bash
   ./deploy.sh
   ```

## Repository Structure

- `main` branch: Contains the built static site (for GitHub Pages)
- `source` branch: Contains the Hugo source files (template)

## Customization

### Colors
Edit `layouts/partials/styles.html` to change colors and styling.

### Layout
Modify templates in `layouts/partials/` to customize the layout.

## Attribution

If you use this template, please add attribution to [avijit9.github.io](https://avijit9.github.io/) in your website footer.




