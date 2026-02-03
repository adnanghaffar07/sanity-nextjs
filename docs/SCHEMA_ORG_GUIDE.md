# Schema.org JSON-LD Integration Guide

## Overview
Schema.org structured data has been integrated into Services, Blog Posts, and Case Studies pages. This improves SEO by helping search engines understand your content better.

## How to Add Schema.org Data in Sanity

### 1. Services Pages
1. Go to **Sanity Studio** → **Logical Services**
2. Select the service you want to edit
3. Scroll to find the **JSON-LD Schema** field
4. Paste your JSON-LD structured data

### 2. Blog Posts
1. Go to **Sanity Studio** → **Blog (Sub Page)**
2. Select the blog post you want to edit
3. Find the **JSON-LD Schema** field at the top
4. Paste your JSON-LD structured data

### 3. Case Studies
1. Go to **Sanity Studio** → **Case Studies** (Portfolio)
2. Select the case study you want to edit
3. Find the **JSON-LD Schema** field at the top
4. Paste your JSON-LD structured data

## Example JSON-LD Schemas

### For Blog Posts (Article Schema)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Your Blog Post Title",
  "description": "A brief description of your blog post",
  "image": "https://codeautomation.ai/image.jpg",
  "author": {
    "@type": "Person",
    "name": "Adnan Ghaffar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CodeAutomation.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://codeautomation.ai/logo.png"
    }
  },
  "datePublished": "2026-01-28",
  "dateModified": "2026-01-28"
}
```

### For Case Studies
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Case Study: Project Name",
  "description": "Brief description of the case study",
  "image": "https://codeautomation.ai/case-study-image.jpg",
  "author": {
    "@type": "Organization",
    "name": "CodeAutomation.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CodeAutomation.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://codeautomation.ai/logo.png"
    }
  },
  "datePublished": "2026-01-28"
}
```

### For Service Pages
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Software Development",
  "provider": {
    "@type": "Organization",
    "name": "CodeAutomation.ai",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "email": "info@codeautomation.ai",
    "telephone": "+1-850-558-4691"
  },
  "areaServed": "US",
  "description": "Professional custom software development services"
}
```

## Important Notes

1. **Validation**: Always validate your JSON-LD using [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. **Format**: The JSON must be valid - use a JSON validator if needed
3. **No Quotes**: When pasting into Sanity, paste the raw JSON without wrapping it in additional quotes
4. **Update Dates**: Remember to update `dateModified` when you update content
5. **URLs**: Use absolute URLs (https://...) for all images and links

## Schema Types to Use

- **Blog Posts**: `BlogPosting` or `Article`
- **Case Studies**: `Article` or `TechArticle`
- **Services**: `Service` or `Product`
- **FAQ Pages**: `FAQPage` (with `Question` and `Answer`)

## Testing Your Schema

After adding schema.org data:
1. Publish your changes in Sanity
2. Visit the live page
3. View page source (Ctrl+U or Cmd+U)
4. Search for `application/ld+json` to see your schema
5. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
6. Test with [Schema Markup Validator](https://validator.schema.org/)

## Benefits

- 📈 Better search engine visibility
- 🎯 Rich snippets in search results
- 📱 Better social media previews
- 🤖 Helps AI understand your content
- ⭐ Potential for star ratings in search results

## Need Help?

Contact: info@codeautomation.ai
Phone: 850.558.4691
