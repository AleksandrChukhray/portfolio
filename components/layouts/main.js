import Header from "../header";
import Footer from "../footer";
import Notification from "../notification";

const MainLayout = ({ children, className }) => (
    <div className={className}>
        <Header />
        <div className="content-wrapper">{children}</div>
        <Footer />
        <Notification />
    </div>
)

MainLayout.propTypes = {

}

export default MainLayout;