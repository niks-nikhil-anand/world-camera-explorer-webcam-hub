import { Container, PageHeader, Section } from "@/components/layout"
import { CategoryCard } from "@/components/cards"
import { CATEGORIES } from "@/constants"

export const metadata = {
  title: "Categories",
  description: "Browse live webcams by category — beaches, airports, traffic, wildlife, and more.",
}

export default function CategoriesPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Categories"
          description="Find cameras by type — from beaches to airports, wildlife to weather stations."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.value}
              label={cat.label}
              value={cat.value}
              icon={cat.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
