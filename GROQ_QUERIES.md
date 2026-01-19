# GROQ Queries Guide

## Basic Query Structure

GROQ (Graph-Relational Object Queries) is Sanity's query language. Here's the basic structure:

```
*[_type == "post"]{ _id, title }
```

- `*` - Selects all documents
- `[_type == "post"]` - Filters to only "post" documents
- `{ _id, title }` - Projects (selects) only these fields

## Example Queries

### 1. Get All Posts (Basic)
```groq
*[_type == "post"]{ _id, title }
```

### 2. Get All Posts with More Fields
```groq
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}
```

### 3. Get a Single Post by Slug
```groq
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}
```

### 4. Order Posts by Date (Newest First)
```groq
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  image
}
```

### 5. Limit Number of Results
```groq
*[_type == "post"] | order(publishedAt desc)[0...10]{
  _id,
  title,
  slug
}
```

### 6. Filter by Date Range
```groq
*[_type == "post" && publishedAt >= $startDate && publishedAt <= $endDate]{
  _id,
  title,
  publishedAt
}
```

### 7. Get Posts with Image References Expanded
```groq
*[_type == "post"]{
  _id,
  title,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
}
```

## Using Queries in Your Code

### In Next.js Pages (Server Components)
```typescript
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function PostsPage() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt
    }`
  )
  
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  )
}
```

### In Client Components
```typescript
'use client'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    client.fetch(
      groq`*[_type == "post"]{ _id, title }`
    ).then(setPosts)
  }, [])
  
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  )
}
```

## Testing Queries

You can test GROQ queries in Sanity Studio:
1. Go to `/studio` in your browser
2. Click on "Vision" in the toolbar
3. Paste your query and see the results

## Common Patterns

### Count Documents
```groq
count(*[_type == "post"])
```

### Get Single Document by ID
```groq
*[_id == $id][0]
```

### Join/Reference Fields
```groq
*[_type == "post"]{
  title,
  "author": author->name,
  "category": category->title
}
```

### Filter and Sort
```groq
*[_type == "post" && publishedAt != null] | order(publishedAt desc)[0...5]
```

