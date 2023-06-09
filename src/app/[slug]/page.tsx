import ContentContainer from "@/app/design-system/ContentContainer"
import { getAllPages, getPageBySlug } from "../../infra/content/pages"
import ProductDescription from "../products/[slug]/components/ProductDescription"
import PageContent from "./components/PageContent"

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const pages = await getAllPages(["slug"])

  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params

  const page = await getPageBySlug(slug)

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const page = await getPageBySlug(slug)

  return <PageContent title={page.title!} content={page.content!} />
}
