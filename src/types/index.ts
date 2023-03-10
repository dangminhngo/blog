export interface Tag {
  id: string
  color: string
  name: string
  description: string
  numOfArticles: number
}

export interface Author {
  id: string
  name: string
  image: string
}

export interface Frontmatter {
  id: string
  title: string
  slug: string
  tags: Tag[]
  date: string
  updated: string
  readingTime: string
  excerpt: string
  author: Author
  cover: string
}

export interface Article {
  frontmatter: Frontmatter
  body: string
}
