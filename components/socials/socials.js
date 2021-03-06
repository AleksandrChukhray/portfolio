import { withTranslation } from '../../i18n'
import config from '../../lib/config'
import classname from 'classnames'

export function Socials({ t, i18n, className }) {
  return (<div className={classname('socials-links', className)}>
        <div className="socials-links_item socials-links_item--instagram">
            <a
                href={`https://instagram.com/${config.instagram}`}
                target="_blank"
                title={t('instagram')}
                className="link">
                <i className="fab fa-2x fa-instagram"/>
            </a>
        </div>
        <div className="socials-links_item socials-links_item--github">
            <a
                href={`https://github.com/${config.github}`}
                target="_blank"
                title={t('git-hub')}
                className="link"
            >
                <i className="fab fa-2x fa-github"/>
            </a>
        </div>
        <div className="socials-links_item socials-links_item--tg">
            <a
                href={`https://t.me/${config.telegram}`}
                target="_blank"
                title={t('telegram')}
                className="link"
            >
                <i className="fab fa-2x fa-telegram-plane"/>
            </a>
        </div>
          <div className="socials-links_item socials-links_item--linkedin">
              <a
                  href={`https://www.linkedin.com/in/${config.linkedin}/`}
                  target="_blank"
                  title={t('linkedin')}
                  className="link"
              >
                  <i className="fab fa-2x fa-linkedin"/>
              </a>
          </div>
        <div className="socials-links_item socials-links_item--lang">
            <button
                className="change-lang"
                type='button'
                title={t('change-locale')}
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
            >
                {i18n.language}
            </button>
        </div>
    </div>)
}

export default withTranslation('common')(Socials)
