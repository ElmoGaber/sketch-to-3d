# Deployment Guide for Sketch to 3D

## Deployment Options

You can deploy your static HTML site using several methods:

### 1. Vercel (Recommended)

Vercel is ideal for static sites and offers a generous free tier:

1. Create a GitHub repository with your HTML files
2. Sign up at [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect and deploy your static site

### 2. GitHub Pages

Free and easy for static sites:

1. Create a GitHub repository
2. Push your HTML files to the repository
3. Go to Settings > Pages
4. Select the branch to deploy (usually "main")
5. Your site will be available at `https://yourusername.github.io/repositoryname`

### 3. Netlify

Also excellent for static sites:

1. Create a GitHub repository with your HTML files
2. Sign up at [netlify.com](https://netlify.com)
3. Import your GitHub repository
4. Netlify will automatically deploy your site

## Common Deployment Issues and Solutions

### 1. File Path Issues

**Problem**: Relative paths might not work correctly when deployed.

**Solution**: Make sure all file paths are correct:
- Use relative paths starting with `/` for root-level resources
- Update the following in your HTML files:
  - Change `href="login.html"` to `href="/login.html"`
  - Change `href="signup.html"` to `href="/signup.html"`
  - Change `href="index.html"` to `href="/index.html"` or `href="/"`

### 2. Missing Assets

**Problem**: Images or other assets might not be found.

**Solution**: 
- Create a `/public` or `/assets` folder for all images and resources
- Update paths to reference these folders correctly
- For placeholder images, consider using a service like [placeholder.com](https://placeholder.com)

### 3. CORS Issues

**Problem**: If you're fetching resources from other domains, you might encounter CORS errors.

**Solution**:
- Host all resources on the same domain when possible
- For external resources, make sure they allow CORS access
- Consider using a CORS proxy for development

### 4. JavaScript Compatibility

**Problem**: Some JavaScript features might not work in older browsers.

**Solution**:
- Consider adding a polyfill for older browsers
- Test in multiple browsers before deployment
- Use feature detection rather than browser detection

## Pre-Deployment Checklist

Before deploying, ensure:

1. ✅ All links between pages work correctly
2. ✅ All JavaScript functionality works (dark mode, high contrast, language switching)
3. ✅ File upload functionality works properly
4. ✅ All forms validate correctly
5. ✅ The site is responsive on different screen sizes
6. ✅ All accessibility features work as expected

## Post-Deployment Verification

After deploying, verify:

1. Visit all pages to ensure they load correctly
2. Test all interactive features (language switching, dark mode, high contrast)
3. Test the file upload functionality
4. Verify form submissions work correctly
5. Check console for any JavaScript errors
6. Test on multiple devices and browsers

## Troubleshooting Deployment Issues

If you encounter issues after deployment:

1. Check the browser console for errors
2. Verify all file paths are correct for the deployed environment
3. Ensure all required assets are properly uploaded
4. Check if JavaScript is enabled and working
5. Verify that localStorage is available and working
