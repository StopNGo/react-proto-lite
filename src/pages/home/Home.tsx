import type { FC, ReactElement } from 'react'

import useTranslations from 'i18n/useTranslations'

import { PageMeta } from 'components'

const Home: FC = (): ReactElement => {
  const { t } = useTranslations()

  return (
    <div className="main home">
      <PageMeta title={t.homePageName} />
      Hello world!
    </div>
  )
}

export { Home }
