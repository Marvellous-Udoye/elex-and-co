import { useEffect } from 'react'
import type { RefObject } from 'react'
import { createStorefrontAnimations } from '../lib/animations/storefront-animations'

export function useStorefrontAnimations(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const scope = ref.current
    if (!scope) return

    const ctx = createStorefrontAnimations(scope)
    return () => ctx.revert()
  }, [ref])
}
