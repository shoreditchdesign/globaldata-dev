import { notFound } from "next/navigation"

import { flow } from "@/flow/flow"

export function generateStaticParams() {
  return flow.screens.map(({ slug }) => ({ screen: slug }))
}

/**
 * A prototype screen, full bleed. No border, no header, no stepper — the page
 * is the product.
 */
export default async function Page({ params }: PageProps<"/[screen]">) {
  const { screen: slug } = await params
  const screen = flow.screens.find((s) => s.slug === slug)
  if (!screen) notFound()

  const Screen = screen.component

  return (
    // `relative` so screens that overlay a modal centre on the viewport.
    <div className="bg-surface-page relative h-svh overflow-hidden">
      <Screen />
    </div>
  )
}
