import { FC, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import cn from 'classnames'
import { ErrorBoundary } from 'react-error-boundary'

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
