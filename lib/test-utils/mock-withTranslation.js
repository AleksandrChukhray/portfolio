export const mockWithTranslation = () => jest.mock('react-i18next', () => ({
  // This mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => '',
      i18n: {
        changeLanguage(lang) {
          this.language = lang
        },
        language: 'ru'
      }
    }

    return Component
  }
}))

export default mockWithTranslation
