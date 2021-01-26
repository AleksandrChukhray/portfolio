import Link from 'next/link'
import Copyright from './copyright'
import { withTranslation } from '../i18n'

function InnerFooter({ path, t }) {

  // TODO: Привести в надлежащий вид
  const getLink = (path) => (path === 'projects' ?
        (<Link href="/projects">
            <a className="link"> {t('back')} </a>
        </Link>) :

        (<Link href="/">
            <a className="link"> {t('back')} </a>
        </Link>))


  return (<footer className="footer footer--inner">
    <div className="go-back">
      <div className="go-back_arrow" />

            <div className="go-back_text">{getLink(path)}</div>
    </div>

        <Copyright />
  </footer>)
}


export default withTranslation('footer')(InnerFooter)
