import type { ComponentType } from "react"

export type ScreenId = string

export interface Screen {
  /** URL segment, kebab-case. */
  slug: ScreenId
  /** Human label shown in the prototype chrome. */
  title: string
  /** Short note on what this step is doing in the flow. */
  note?: string
  /** Viewport the screen is designed against. */
  viewport?: "desktop" | "tablet" | "mobile"
  component: ComponentType
}

export interface Flow {
  /** URL segment, e.g. `idea-1`. */
  id: string
  /** Human label, e.g. `Idea 1 — Progressive disclosure`. */
  name: string
  /** One-line design premise: what this version is testing. */
  premise: string
  /** ISO date (YYYY-MM-DD) this idea was last worked on. */
  lastUpdated: string
  status: "placeholder" | "in-progress" | "review" | "final" | "superseded"
  screens: Screen[]
}
