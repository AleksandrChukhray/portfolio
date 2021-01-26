import Header from '../header'

function ErrorLayout({ children }) {
  return (<div className="error-page">
        <Header/>
        <div className="content-wrapper--error-page">{children}</div>
    </div>)
}

ErrorLayout.propTypes = {

}

export default ErrorLayout
