import {
  type TSupportedLanguages,
  type TTranslations,
  defaultLang,
} from 'i18n/i18nConfig'
import { useAppDispatch, useAppSelector } from 'store/store'
import { type i18nState, setLangAsync } from './i18nSlice'

interface IUseTranslationMethods {
  setLang: (newLang: keyof TSupportedLanguages) => void
  t: TTranslations
  tt: (key: keyof TTranslations) => string
}

interface IUseTranslation extends i18nState, IUseTranslationMethods {}

export default function useTranslations(): IUseTranslation {
  const dispatch = useAppDispatch()

  const translations = useAppSelector((state) => state.i18n.translations)

  /*
    Direct access to a translation object with dot or the bracket notation.
    No fallback or additional string processing available.
    Subkeys are available.
  */
  const t = useAppSelector((state) => {
    if (state.i18n.translations[state.i18n.lang] != null) {
      return state.i18n.translations[state.i18n.lang]
    }
    return state.i18n.translations[defaultLang]
  }) as TTranslations

  /*
    Access to a translation object via function and string key.
    Fallback to the default language.
    No subkeys are available.
    Could be expanded to the string processing i.e. plurals or formatting.
  */
  const tt = (key: keyof TTranslations): string => {
    return useAppSelector((state) => {
      const translation = state.i18n.translations[state.i18n.lang]
      const defaultTranslation = state.i18n.translations[defaultLang]

      if (defaultTranslation != null) {
        if (translation != null) {
          if (translation[key] != null) {
            return translation[key]
          }
          return defaultTranslation[key]
        }
        return defaultTranslation[key]
      }
    })
  }
  const supportedLangs = useAppSelector((state) => state.i18n.supportedLangs)
  const lang = useAppSelector((state) => state.i18n.lang)
  const status = useAppSelector((state) => state.i18n.status)

  const setLang = (newLang: keyof TSupportedLanguages): void => {
    void dispatch(
      setLangAsync(
        Object.keys(supportedLangs).find(
          (key) => supportedLangs[key as keyof TSupportedLanguages] === newLang,
        ) as keyof TSupportedLanguages,
      ),
    )
  }

  return {
    t,
    tt,
    translations,
    lang,
    supportedLangs,
    status,
    setLang,
  }
}
