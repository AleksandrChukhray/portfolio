import Link from "next/link";
import Head from "../components/head";
import InnerLayout from "../components/layouts/inner-page";
import { withTranslation } from "../i18n";

function About({ t }) {
    return (
        <InnerLayout clasName={'about-page'}>
            <Head title={t('about')}/>
            <section className="theme-light section section--about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text">{t('about')}</div>
                        </div>
                        <div className="col-10 align-self-center">
                            <div className="about">
                                <img src="/static/img/3.png" alt="" className="about_image"/>
                                <div className="about_wrapper">
                                    <div className="about_header">{ t('text') }</div>
                                    <div className="about_text">{ t('sub-text', { text: ''}) }</div>
                                    <div className="about_buttons">
                                        <a
                                            href="/static/cv/Chukhrai_Aleksandr.pdf"
                                            download="Chukhrai_Aleksandr.pdf"
                                            className="button button--active button--download">{ t('download') }</a>
                                        <Link href="/projects">
                                            <a href="/projects" className="button button button--projects">{ t('view') }</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                </div>
            </section>
        </InnerLayout>
    )
}

export default withTranslation('about')(About);