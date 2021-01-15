import {useState} from 'react';
import Link from 'next/link';
import { withTranslation } from '../i18n'
import Head from '../components/head';
import MainLayout from "../components/layouts/main";
import Socials from "../components/socials";
import ScrollDown from "../components/navigation/scroll-down";
import ScrollToTop from "../components/navigation/scroll-to-top";
import {getSortedProjectsData, getBGColor, radialGradient} from "../lib/projets";
import {useScrollPosition} from "../components/effects/scroll";

function Home({allProjectsData, t}) {
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
            <Head title={t('title')}/>
            <MainSection scrollTop={hideOnScroll} t={t}/>
            <SloganSection t={t}/>
            <ProjectsListWithTrans allProjectsData={allProjectsData}/>
            <ContactMe t={t}/>
        </MainLayout>
    )
}

function MainSection({scrollTop, t}) {
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
                                <div className="main-text_header">{t('author')}</div>
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

function SloganSection({t}) {
    return (
        <section className="theme-light section section--slogan section--full-height">
            <div className="container-fluid">
                <div className="row">
                    <div className="col align-self-center">
                        <div className="slogan">
                            <div className="slogan_header fill"> {t('slogan')}</div>
                            <br/>
                            <div className="slogan_body fill">{t('sub-slogan')}</div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectsList({allProjectsData, t}) {
    return (
        <section className="theme-light section section--projects">
            <div className="projects">
                {allProjectsData.filter(el => el.published === 'true' && el.onMainPage === 'true').map((el, index) => (
                        <div className="project" key={el.name}>
                            <div className="project_image" style={{backgroundImage: radialGradient(getBGColor(el.name))}}/>
                            <div className="line"/>
                            <div className="project_numbers">{index < 9 && '0'}{`${index + 1}`}</div>
                            <div className="project_wrap">
                                <div className="project_name"> {el.name} </div>
                                <div className="project_stack"> {el.smallStack} </div>
                            </div>
                            <Link href="/project/[id]" as={`/project/${el.id}`}>
                                <a className="project_button">
                                        <span>
                                            <span>{t('view')} <i className="project_button_arrow"/></span>
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

const ProjectsListWithTrans = withTranslation('projects')(ProjectsList);

function ContactMe({t}) {
    return (
        <section className="theme-dark section section--contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-us">
                            <div className="contact-us_header">{t('talk')}</div>
                            <div className="contact-us_sub-header">{t('sub-talk')}</div>
                            <Link href="/contacts">
                                <a className="contact-us_button button">{t('contact-me')}</a>
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
            allProjectsData,
        }
    }
}

export default withTranslation('main')(Home)