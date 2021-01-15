import Link from 'next/link';
import Head from '../components/head';
import InnerLayout from "../components/layouts/inner-page";
import { withTranslation } from "../i18n";
import config from "../lib/config";

function Home({ t }) {
    return (
        <InnerLayout clasName={'contact-page'}>
            <Head title="Contacts"/>
            <section className="theme-light section section--contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text">{t('contacts')}</div>
                        </div>
                        <div className="col-10 align-self-center">
                            <div className="contact-form">
                                <div className="contact-form_header">{t('text')}</div>
                                <div className="contact-form_text">{t('sub-text')}</div>
                                <div className="contact-form_wrapper">
                                    <div className="contact-form_item contact-form_item--contacts">
                                        <div className="contacts">
                                            <div className="contacts_item contacts_item--email">
                                                <i className="fas fa-2x fa-envelope contacts_icon" />
                                                <a href={`mailto:${config.email}`} className="contacts_text">{config.email}</a>
                                            </div>
                                            <div className="contacts_item contacts_item--tel">
                                                <i className="fas fa-2x fa-phone-alt contacts_icon" />
                                                <a href={`tel:${config.tel}`} className="contacts_text">{config.tel}</a>
                                            </div>
                                            <div className="contacts_item contacts_item--instagram">
                                                <i className="fab fa-2x fa-instagram contacts_icon" />
                                                <a
                                                    href={`https://instagram.com/${config.instagram}`}
                                                    target="_blank"
                                                    className="contacts_text"
                                                >{config.instagram}</a>
                                            </div>
                                            <div className="contacts_item contacts_item--tg">
                                                <i className="fab fa-2x fa-telegram-plane contacts_icon"/>
                                                <a
                                                    href={`https://t.me/${config.telegram}`}
                                                    target="_blank"
                                                    className="contacts_text"
                                                >@{config.telegram}</a>
                                            </div>
                                            <div className="contacts_item contacts_item--github">
                                                <i className="fab fa-2x fa-github contacts_icon"/>
                                                <a
                                                    href={`https://github.com/${config.github}`}
                                                    target="_blank"
                                                    className="contacts_text"
                                                >{config.github}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-form_item contact-form_item--form">
                                        <Link href="/form">
                                            <a className="button" >{t('contact-me')}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
            </section>
        </InnerLayout>
    )
}

export default withTranslation('contacts')(Home)