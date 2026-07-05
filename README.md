# Dechen Rehabilitation Centre - Website

Professional website for Dechen Child & Adults Rehabilitation Centre, built with HTML, CSS, and JavaScript.

## 📋 Overview

This is a responsive, modern website showcasing comprehensive rehabilitation and therapy services for both children and adults. The site is designed to be deployed on GitHub Pages for easy hosting and maintenance.

## 🎯 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout** - Clean and modern user interface
- **Service Showcase** - Comprehensive display of all services offered
- **Team Section** - Information about your expert professionals
- **Contact Form** - Easy way for clients to reach out
- **Smooth Navigation** - Intuitive menu with smooth scrolling
- **Fast Loading** - Optimized for performance
- **Accessibility** - Built with accessibility in mind

## 📁 File Structure

```
Dechan/
├── index.html          # Main homepage
├── css/
│   └── style.css       # Styling
├── js/
│   └── script.js       # Functionality
└── README.md          # This file
```

## 🚀 Deployment Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository settings: `https://github.com/mudata03/Dechan/settings`
2. Scroll down to **Pages** section
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/(root)** folder
   - Click **Save**

### Step 2: Access Your Website

After enabling GitHub Pages, your website will be available at:
```
https://mudata03.github.io/Dechan/
```

It may take a few minutes for GitHub to deploy your site. Refresh the page if it's not immediately available.

## 🎨 Customization

### Colors
Edit the color variables in `css/style.css`:
```css
:root {
    --primary-color: #2c5f8d;      /* Main blue */
    --secondary-color: #e74c3c;    /* Red accent */
    --accent-color: #27ae60;       /* Green accent */
    --light-bg: #f8f9fa;           /* Light background */
    --dark-text: #2c3e50;          /* Dark text */
    --gray-text: #7f8c8d;          /* Gray text */
    --white: #ffffff;              /* White */
}
```

### Content
Edit `index.html` to:
- Update contact information
- Add your center's description
- Modify service details
- Add team member information
- Customize opening hours

### Contact Information
Update the following sections in `index.html`:
- Phone number (line ~298)
- Address (line ~293-298)
- Opening hours (line ~305-307)

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Adjusted font sizes for smaller screens
- Optimized touch targets
- Flexible grid layouts

## ✨ Features Included

### Navigation
- Sticky navigation bar with active section highlighting
- Mobile hamburger menu
- Smooth scroll navigation

### Sections
1. **Hero Section** - Eye-catching banner with call-to-action
2. **About Section** - Center information and highlights
3. **Services Section** - Detailed list of all services
4. **Team Section** - Professional team information
5. **Contact Section** - Contact form and location details
6. **Footer** - Footer with links and information

### Interactive Elements
- Contact form with validation
- Scroll-to-top button
- Hover animations
- Smooth scrolling
- Form submission feedback

## 🔧 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

The contact form includes:
- Name field
- Email field
- Phone number field
- Service selection dropdown
- Message textarea
- Form validation
- Success message feedback

**Note:** Currently, the form displays a confirmation message. To enable email notifications, you'll need to integrate with a backend service like Formspree or Netlify Forms.

### To Enable Email Submissions (Optional):

**Option 1: Using Formspree (Recommended)**

1. Visit [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint
4. Replace the form action in `index.html` (line ~408):
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2: Using Netlify Forms**

Deploy to Netlify instead of GitHub Pages for built-in form handling.

## 📊 SEO Optimization

The website includes:
- Meta descriptions
- Proper heading hierarchy
- Semantic HTML
- Mobile-friendly viewport
- Accessibility features

## 🆘 Troubleshooting

### Website not showing up after deployment?
- Wait 2-3 minutes for GitHub to deploy
- Refresh your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check repository settings → Pages section

### Images not loading?
- GitHub Pages serves from the repository root
- Use relative paths for all resources
- Ensure files are committed to the repository

### Form not working?
- Currently displays a success message without sending emails
- Integrate with Formspree or similar service for actual email delivery

## 📝 License

This website template is free to use for your center.

## 📞 Support

For questions or modifications, please edit the respective files:
- HTML content: `index.html`
- Styling: `css/style.css`
- Functionality: `js/script.js`

---

**Website Created:** 2024
**Last Updated:** July 2026
**Status:** Ready for Deployment ✅