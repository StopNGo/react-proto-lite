import path from 'path'

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development'

const IS_PREACT: boolean = true
const IS_LAZY_COMPILATION = true
const DEV_SERVER_PORT: number = 8080

const SRC_DIR: string = path.join(__dirname, '../src')
const DIST_DIR: string = path.join(__dirname, '../dist')

const ALIAS: Record<string, string> = {
  api: `${SRC_DIR}/api`,
  assets: `${SRC_DIR}/assets`,
  components: `${SRC_DIR}/components`,
  constants: `${SRC_DIR}/constants`,
  images: `${SRC_DIR}/assets/images`,
  hocs: `${SRC_DIR}/hocs`,
  hooks: `${SRC_DIR}/hooks`,
  pages: `${SRC_DIR}/pages`,
  router: `${SRC_DIR}/router`,
  i18n: `${SRC_DIR}/i18n`,
  server: `${SRC_DIR}/server`,
  src: `${SRC_DIR}`,
  style: `${SRC_DIR}/style`,
  store: `${SRC_DIR}/store`,
  types: `${SRC_DIR}/types`,
  utils: `${SRC_DIR}/utils`
}

if (IS_PREACT) {
  Object.assign(ALIAS, {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
    'react-dom/test-utils': 'preact/test-utils',
    '@testing-library/react': '@testing-library/preact'
  })
}

export {
  ALIAS,
  DEV_SERVER_PORT,
  DIST_DIR,
  IS_DEV,
  IS_PREACT,
  IS_LAZY_COMPILATION,
  SRC_DIR
}
