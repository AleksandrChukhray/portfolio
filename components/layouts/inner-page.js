import { string } from 'prop-types';
import Header from "../header";
import InnerFooter from "../inner-footer";

const InnerLayout = ({ children, className }) => (
    <div className={className}>
        <Header/>
        <div className="content-wrapper--inner-page">
            {children}
            <InnerFooter />
        </div>
    </div>
)

InnerLayout.propTypes = {
    className: string
}

export default InnerLayout;