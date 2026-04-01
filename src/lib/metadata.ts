export type PageMetadata = {
  title: string
  description: string
  path?: string
}

const META_DESCRIPTION = 'meta[name="description"]'
const OG_TITLE = 'meta[property="og:title"]'
const OG_DESCRIPTION = 'meta[property="og:description"]'
const OG_TYPE = 'meta[property="og:type"]'
const OG_URL = 'meta[property="og:url"]'
const TWITTER_TITLE = 'meta[name="twitter:title"]'
const TWITTER_DESCRIPTION = 'meta[name="twitter:description"]'

function upsertMeta(selector: string, attribute: 'name' | 'property', value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    const selectorValue = selector.match(/"(.+?)"/)?.[1]
    if (selectorValue) {
      tag.setAttribute(attribute, selectorValue)
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', value)
}

export function applyPageMetadata(metadata: PageMetadata) {
  document.title = metadata.title

  upsertMeta(META_DESCRIPTION, 'name', metadata.description)
  upsertMeta(OG_TITLE, 'property', metadata.title)
  upsertMeta(OG_DESCRIPTION, 'property', metadata.description)
  upsertMeta(OG_TYPE, 'property', 'website')
  upsertMeta(TWITTER_TITLE, 'name', metadata.title)
  upsertMeta(TWITTER_DESCRIPTION, 'name', metadata.description)

  if (metadata.path) {
    const url = new URL(metadata.path, window.location.origin).toString()
    upsertMeta(OG_URL, 'property', url)
  }
}
