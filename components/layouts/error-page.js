import Header from "../header";

const ErrorLayout = ({ children }) => (
    <div className="error-page">
        <Header/>
        <div className="content-wrapper--error-page">{children}</div>
    </div>
)

ErrorLayout.propTypes = {

}

export default ErrorLayout;