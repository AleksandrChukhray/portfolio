import {useState} from 'react';
import Link from 'next/link';
import Head from '../components/head';
import MainLayout from "../components/layouts/main";
import Socials from "../components/socials";
import ScrollDown from "../components/navigation/scroll-down";
import ScrollToTop from "../components/navigation/scroll-to-top";
import {getSortedProjectsData, getBGColor, radialGradient} from "../lib/projets";
import {useScrollPosition} from "../components/effects/scroll";

export default function Home({allProjectsData}) {
    const [hideOnScroll, setHideOnScroll] = useState(0)

    useScrollPosition(
        ({currPos}) => {
            setHideOnScroll(Math.abs(currPos.y))
        },
        [hideOnScroll],
        null,
        null,
        200
    )

    return (
        <MainLayout clasName={'main-page'}>
            <Head title="Home"/>
            <MainSection scrollTop={hideOnScroll}/>
            <SloganSection/>
            <ProjectsList allProjectsData={allProjectsData}/>
            <ContactMe/>
        </MainLayout>
    )
};

function MainSection({scrollTop}) {
    return (
        <section className="theme-light section section--main section--full-height">
            <div className="container-fluid">
                <div className="row">
                    <div className="col align-self-center">
                        <Socials/>
                    </div>
                    <div className="col-10 align-self-center">
                        <div className="main-text">
                            <div className="main-text_wrap">
                                <div className="main-text_header">Aleksandr Chukhrai</div>
                                <div className="main-text_body">Frontend Developer</div>
                            </div>
                            <div className="main-text_img_wrap">
                                <img src="/static/img/lion.png" alt="" className="main-text_img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <ScrollDown scrollTop={scrollTop}/>
                    </div>
                    <ScrollToTop scrollY={scrollTop}/>
                </div>
            </div>
        </section>
    )
}

function SloganSection() {
    return (
        <section className="theme-light section section--slogan section--full-height">
            <div className="container-fluid">
                <div className="row">
                    <div className="col align-self-center">
                        <div className="slogan">
                            <div className="slogan_header fill">
                                Crafted with
                            </div>
                            <br/>
                            <div className="slogan_header fill">
                                love <span/>
                            </div>
                            <br/>
                            <div className="slogan_body fill">
                                There are a selection of my resent works.
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectsList({allProjectsData}) {

    return (
        <section className="theme-light section section--projects">
            <div className="projects">
                {allProjectsData.filter(el => el.published === 'true' && el.onMainPage === 'true').map((el, index) => (
                        <div className="project" key={el.name}>
                            <div className="project_image" style={{backgroundImage: radialGradient(getBGColor(el.name))}}/>
                            <div className="line"/>
                            <div className="project_numbers">{`0${index + 1}`}</div>
                            <div className="project_wrap">
                                <div className="project_name"> {el.name} </div>
                                <div className="project_stack"> {el.smallStack} </div>
                            </div>
                            <Link href="/project/[id]" as={`/project/${el.id}`}>
                                <a className="project_button">
                                        <span>
                                            <span>view project <i className="project_button_arrow"/></span>
                                        </span>
                                </a>
                            </Link>
                            <div className="project_button-background"/>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

function ContactMe() {
    return (
        <section className="theme-dark section section--contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-us">
                            <div className="contact-us_header">Let's talk!</div>
                            <div className="contact-us_sub-header">I am available for freelance work.</div>
                            <Link href="/contacts">
                                <a className="contact-us_button button">Contact me</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}