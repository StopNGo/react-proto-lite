import type { RuleSetRule } from '@rspack/core'

export type TLoader = Record<'client' | 'server', RuleSetRule>
