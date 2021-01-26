import Header from '../header'
import Footer from '../footer'
import Notification from '../notification'

function MainLayout({ children, className }) {
  return (<div className={className}>
        <Header />
        <div className="content-wrapper">{children}</div>
        <Footer />
        <Notification />
    </div>)
}

MainLayout.propTypes = {

}

export default MainLayout
