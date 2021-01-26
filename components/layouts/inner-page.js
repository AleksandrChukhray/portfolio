import { string } from 'prop-types'
import Header from '../header'
import InnerFooter from '../inner-footer'
import Notification from '../notification'

function InnerLayout({ children, className, path }) {
  return (<div className={className}>
        <Header/>
        <div className="content-wrapper--inner-page">
            {children}
            <InnerFooter path={path}/>
        </div>
        <Notification />
    </div>)
}

InnerLayout.propTypes = {
  className: string
}

export default InnerLayout
