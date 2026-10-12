import { notFound, redirect } from "next/navigation"

import { flow } from "@/flow/flow"

export default function Page() {
  const first = flow.screens[0]
  if (!first) notFound()

  redirect(`/${first.slug}`)
}
