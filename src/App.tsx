import cn from 'classnames'
import type { FC, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'

import { routes } from 'router/Router'

const App: FC = (): ReactElement => {
  const content = useRoutes(routes)

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={cn('app-wrapper')}>{content}</div>
    </ErrorBoundary>
  )
}

export { App }
