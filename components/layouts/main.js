import { useEffect } from "react";
import { string } from "prop-types";
import Header from "../header";
import Footer from "../footer";

const MainLayout = ({ children, clasName, scrollRef }) => (
    <div className={clasName} ref={scrollRef}>
        <Header/>
        <div className="content-wrapper">{children}</div>
        <Footer />
    </div>
)

MainLayout.propTypes = {

}

// export default OnScrollHOC(MainLayout, onScrollFunc);
export default MainLayout;