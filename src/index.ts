type Dictionary<T> = { [key: string]: T }
type RouteLocation = {
  name?: string
  path?: string
  query?: Dictionary<string | (string | null)[] | null | undefined>
  params?: Dictionary<string>
}

export type BreadcrumbsItem = {
  // displayed text
  readonly text?: string
  // title attribute of anchor tags
  readonly title?: string
  // URL or Location Object
  readonly to?: string | RouteLocation
  // disable flag of link
  disabled?: boolean
}

export type Breadcrumbs = BreadcrumbsItem[]

export type ToArray<T> = T extends Array<unknown> ? T : [T]

export type BreadcrumbsBuilder<T = []> = (...args: ToArray<T>) => Breadcrumbs