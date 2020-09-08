import Link from "next/link";
import Socials from "./socials";
import Copyright from "./copyright";
import {fadeIn, fadeOut, addClass, removeClass} from "../lib/fade";

const menu = React.createRef();
const menuList = React.createRef();
const navigation = React.createRef();
const navigationClose = React.createRef();
const navigationSlides = React.createRef();

const Header = () => {

    function onMenuClickHandler(e){
        e.preventDefault();
        fadeOut(menu.current);
        fadeIn(navigationClose.current);
        fadeIn(menuList.current, 2000);

        navigation.current.style.display = 'flex';

        navigationSlides.current.childNodes.forEach((el, key) => {
            removeClass(el, 'animation-navigation-out')
            addClass(el, 'animation-navigation-in')
        })
    }

    function onCloseClickHandler(e){
        e.preventDefault();

        fadeIn(menu.current);
        fadeOut(navigationClose.current);
        fadeOut(menuList.current);

        navigationSlides.current.childNodes.forEach((el, key) => {
            removeClass(el, 'animation-navigation-in')
            addClass(el, 'animation-navigation-out')
        });

        setTimeout(function () {
            navigation.current.style.display = 'none';
        }, 1100);
    }

    return (
        <>
            <header className="header theme-light">
                <div className="logo">
                    <Link href="/">
                        <a className="link">
                            <i className="far fa-2x fa-circle"/>
                        </a>
                    </Link>
                </div>
                <div className="menu" ref={menu} onClick={onMenuClickHandler}>
                    <div className="menu-item"/>
                    <div className="menu-item"/>
                    <div className="menu-item"/>
                </div>
            </header>
            <div className="navigation" ref={navigation}>
                <div className="navigation-slide" ref={navigationSlides}>
                    <div className="navigation-slide_item"/>
                    <div className="navigation-slide_item"/>
                    <div className="navigation-slide_item"/>
                    <div className="navigation-slide_item"/>
                </div>
                <div className="navigation_close" onClick={onCloseClickHandler} ref={navigationClose}/>
                <div className="navigation_links">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-1 align-self-center">
                                <Socials/>
                            </div>
                            <div className="col-10 align-self-center">
                                <div className="menu-list" ref={menuList}>
                                    <div className="menu-list_item">
                                        <Link href="/">
                                            <a className="link">Home</a>
                                        </Link>
                                    </div>
                                    <div className="menu-list_item">
                                        <Link href="/about">
                                            <a className="link">About</a>
                                        </Link>
                                    </div>
                                    <div className="menu-list_item">
                                        <Link href="/projects">
                                            <a className="link">Projects</a>
                                        </Link>
                                    </div>
                                    <div className="menu-list_item">
                                        <Link href="/contacts">
                                            <a className="link">Contacts</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"/>
                        </div>
                    </div>
                </div>
                <Copyright/>
            </div>
        </>
    )
}

export default Header