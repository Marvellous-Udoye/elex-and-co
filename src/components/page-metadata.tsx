import { useEffect } from 'react'
import { applyPageMetadata, type PageMetadata } from '../lib/metadata'

type PageMetadataProps = {
  metadata: PageMetadata
}

export function PageMetadata({ metadata }: PageMetadataProps) {
  useEffect(() => {
    applyPageMetadata(metadata)
  }, [metadata])

  return null
}
