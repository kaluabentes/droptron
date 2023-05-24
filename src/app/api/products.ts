import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "content", "products")

export function getProductSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getProductBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProducts(fields: string[] = []) {
  const slugs = getProductSlugs()
  const posts = slugs
    .map((slug) => getProductBySlug(slug, fields))
    // sort posts by date in ascending order
    .sort((product1, product2) => (product2.name > product1.name ? -1 : 1))
  return posts
}