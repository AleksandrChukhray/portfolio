import {i18n, withTranslation} from "../i18n";
import config from "../lib/config";

const Socials = ({ t }) => (
    <div className="socials">
        <div className="socials_item socials_item--instagram">
            <a
                href={`https://instagram.com/${config.instagram}`}
                target="_blank"
                title={t('instagram')}
                className="link">
                <i className="fab fa-2x fa-instagram"/>
            </a>
        </div>
        <div className="socials_item socials_item--github">
            <a
                href={`https://github.com/${config.github}`}
                target="_blank"
                title={t('git-hub')}
                className="link"
            >
                <i className="fab fa-2x fa-github"/>
            </a>
        </div>
        <div className="socials_item socials_item--tg">
            <a
                href={`https://t.me/${config.telegram}`}
                target="_blank"
                title={t('telegram')}
                className="link"
            >
                <i className="fab fa-2x fa-telegram-plane"/>
            </a>
        </div>
        <div className="socials_item socials_item--lang">
            <button
                className="change-lang"
                type='button'
                title={t('change-locale')}
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
            >
                {i18n.language}
            </button>
        </div>
    </div>
)

export default withTranslation('common')(Socials);