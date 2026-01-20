# Sanity Studio Guide

## Accessing Sanity Studio

Your Sanity Studio is integrated into your Next.js app and accessible at:

**Local Development:**
```
http://localhost:3000/studio
```

**Production (after deployment):**
```
https://your-domain.com/studio
```

## First Time Setup

### 1. Login to Sanity

If you haven't logged in yet:

```bash
# Login via CLI
sanity login

# Or login directly in the Studio
# Visit /studio and click "Login with Sanity"
```

### 2. Verify Project Configuration

Check your Sanity project settings:

```bash
# List your Sanity projects
sanity projects list

# View project details
sanity projects list --json
```

### 3. Set Environment Variables

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=hp0pcftm
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Using Sanity Studio

### Creating Content

1. **Create a Post:**
   - Go to `/studio`
   - Click "Create" → "Post"
   - Fill in:
     - Title
     - Slug (auto-generated from title)
     - Published date
     - Image (upload)
     - Body content (rich text editor)
   - Click "Publish"

2. **View Posts:**
   - Posts appear automatically on `/posts` page
   - Individual posts at `/posts/[slug]`

### Managing Content

- **Edit**: Click any document to edit
- **Delete**: Select document → Delete
- **Publish/Unpublish**: Use publish button
- **Draft**: Save without publishing

## Useful Sanity CLI Commands

### Project Management

```bash
# List all your projects
sanity projects list

# Create a new project
sanity projects create

# Open project in browser
sanity manage
```

### Dataset Management

```bash
# List datasets in your project
sanity dataset list

# Create a new dataset
sanity dataset create <dataset-name>

# Copy dataset
sanity dataset copy <source> <destination>

# Delete dataset (careful!)
sanity dataset delete <dataset-name>
```

### Document Management

```bash
# Query documents
sanity documents query '*[_type == "post"]'

# Query with GROQ
sanity documents query '*[_type == "post"]{_id, title, slug}'

# Create a document
sanity documents create

# Delete documents
sanity documents delete <document-id>

# Export documents
sanity dataset export <dataset-name> <output-file>
```

### Studio Management

```bash
# Start Studio dev server (if separate)
sanity dev

# Build Studio for production
sanity build

# Deploy Studio to Sanity hosting
sanity deploy

# Preview production build
sanity preview
```

### Schema Management

```bash
# Validate schema
sanity schema validate

# Generate TypeScript types from schema
sanity typegen generate
```

### Token Management

```bash
# List API tokens
sanity tokens list

# Create a new token
sanity tokens create

# Revoke a token
sanity tokens revoke <token-id>
```

### GraphQL API

```bash
# Deploy GraphQL API
sanity graphql deploy

# List GraphQL APIs
sanity graphql list
```

### Backup & Migration

```bash
# Create a backup
sanity backup create

# List backups
sanity backup list

# Restore from backup
sanity backup restore <backup-id>

# Run migrations
sanity migration run
```

## Common Workflows

### Adding a New Content Type

1. **Create Schema:**
   ```typescript
   // sanity/schemaTypes/productType.ts
   import {defineField, defineType} from 'sanity'
   
   export const productType = defineType({
     name: 'product',
     title: 'Product',
     type: 'document',
     fields: [
       defineField({
         name: 'title',
         type: 'string',
         validation: (rule) => rule.required(),
       }),
       // Add more fields...
     ],
   })
   ```

2. **Register Schema:**
   ```typescript
   // sanity/schemaTypes/index.ts
   import {productType} from './productType'
   
   export const schema: { types: SchemaTypeDefinition[] } = {
     types: [postType, productType], // Add to array
   }
   ```

3. **Restart Dev Server:**
   ```bash
   npm run dev
   ```

### Querying Content in Your App

```typescript
// In your Next.js pages/components
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

// Fetch posts
const posts = await client.fetch(
  groq`*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    image,
    body
  }`
)
```

### Using Images from Sanity

```typescript
import { urlFor } from '@/sanity/lib/image'

// In your component
{post.image && (
  <img 
    src={urlFor(post.image).width(800).height(600).url()} 
    alt={post.title}
  />
)}
```

## Troubleshooting

### Studio Not Loading

1. **Check Environment Variables:**
   ```bash
   # Verify .env.local exists and has correct values
   cat .env.local
   ```

2. **Check Project ID:**
   ```bash
   sanity projects list
   # Verify project ID matches your .env.local
   ```

3. **Restart Dev Server:**
   ```bash
   npm run dev
   ```

### Authentication Issues

```bash
# Logout and login again
sanity logout
sanity login

# Check authentication status
sanity whoami
```

### Schema Changes Not Appearing

- Restart the dev server after schema changes
- Clear browser cache
- Check browser console for errors

### Build Errors

```bash
# Check for TypeScript errors
npm run build

# Check Sanity configuration
sanity debug
```

## Vision Plugin (GROQ Query Tool)

The Studio includes Vision plugin for testing GROQ queries:

1. Go to `/studio`
2. Click "Vision" in the toolbar
3. Enter your GROQ query:
   ```groq
   *[_type == "post"]{
     _id,
     title,
     slug,
     publishedAt
   }
   ```
4. Click "Run" to see results

## Best Practices

1. **Use Drafts**: Create drafts before publishing
2. **Version Control**: Commit schema changes to git
3. **Backup Regularly**: Use `sanity backup create`
4. **Environment Variables**: Never commit `.env.local`
5. **Image Optimization**: Use Sanity's image CDN
6. **GROQ Queries**: Test in Vision before using in code

## Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Schema Reference**: https://www.sanity.io/docs/schema-types
- **Vision Plugin**: Available in Studio at `/studio` → Vision

## Quick Reference

| Task | Command |
|------|---------|
| Login | `sanity login` |
| List Projects | `sanity projects list` |
| List Datasets | `sanity dataset list` |
| Query Documents | `sanity documents query '*[_type == "post"]'` |
| Create Backup | `sanity backup create` |
| Deploy Studio | `sanity deploy` |
| Open Studio | Visit `/studio` in browser |

