import { RuleSetRule } from 'webpack'

import { TLoader } from '../types'

const tsRegex: RegExp = /\.tsx?$/

const universalLoader: RuleSetRule = {
  test: tsRegex,
  use: {
    loader: 'builtin:swc-loader',
    options: {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true
        },
        transform: {
          react: {
            runtime: 'automatic',
            development: true,
            refresh: true
          }
        }
      }
    }
  },
  type: 'javascript/auto'
}

export const tsLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
