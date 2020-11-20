import Link from "next/link"
import Copyright from "./copyright";

const InnerFooter = ({ path }) => {

    // TODO: Сделать это более красивым
    const getLink = path => path === 'projects' ?
        (<Link href="/projects">
            <a className="link"> go back </a>
        </Link>) :

        (<Link href="/">
            <a className="link"> go back </a>
        </Link>)


    return ( <footer className="footer footer--inner">
        <div className="go-back">
            <div className="go-back_arrow" />
            <div className="go-back_text">{getLink(path)}</div>
        </div>
        <Copyright />
    </footer>)
}



export default InnerFooter;