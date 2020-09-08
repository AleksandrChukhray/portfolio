import Link from "next/link"
import Copyright from "./copyright";

const InnerFooter = () => (
    <footer className="footer footer--inner">
        <div className="go-back">
            <div className="go-back_arrow" />
            <div className="go-back_text">
                <Link href="/">
                    <a className="link"> go back </a>
                </Link>
            </div>
        </div>
        <Copyright />
    </footer>
)

export default InnerFooter;