import { type TSupportedLanguages, langUrl } from 'i18n/i18nConfig'

export async function fetchTranslations(
  lang: keyof TSupportedLanguages,
): Promise<unknown> {
  return await new Promise((resolve) => {
    fetch(langUrl.replace('{lang}', lang))
      .then(
        async (response) => await response.json(),
        () => {},
      )
      .then(
        (data) => resolve(data),
        () => {},
      )
      .catch((er) => console.log(er))
  })
}
