import Link from 'next/link';
import Head from '../components/head';
import InnerLayout from "../components/layouts/inner-page";

export default function Home() {
    return (
        <InnerLayout clasName={'contact-page'}>
            <Head title="Contacts"/>
            <section className="theme-light section section--contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text">
                                Contact
                            </div>
                        </div>
                        <div className="col-10 align-self-center">
                            <div className="contact-form">
                                <div className="contact-form_header">Get in touch !</div>
                                <div className="contact-form_text">
                                    Do you fancy saying hi to me or you want to get started
                                    with your project and you need my help ?, feel free to contact me.
                                </div>
                                <div className="contact-form_wrapper">
                                    <div className="contact-form_item contact-form_item--contacts">
                                        <div className="contacts">
                                            <div className="contacts_item contacts_item--email">
                                                <i className="fas fa-2x fa-envelope contacts_icon" />
                                                <div className="contacts_text">zimmalex6@gmail.com</div>
                                            </div>
                                            <div className="contacts_item contacts_item--tel">
                                                <i className="fas fa-2x fa-phone-alt contacts_icon" />
                                                <div className="contacts_text">380951099021</div>
                                            </div>
                                            <div className="contacts_item contacts_item--instagram">
                                                <i className="fab fa-2x fa-instagram contacts_icon" />
                                                <div className="contacts_text">@a.chukhrai___</div>
                                            </div>
                                            <div className="contacts_item contacts_item--tg">
                                                <i className="fab fa-2x fa-telegram-plane contacts_icon"/>
                                                <div className="contacts_text">@a_chukhrai</div>
                                            </div>
                                            <div className="contacts_item contacts_item--github">
                                                <i className="fab fa-2x fa-github contacts_icon"/>
                                                <div className="contacts_text">AleksandrChukhray</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-form_item contact-form_item--form">
                                        <div className="form">
                                            <div className="form_input form_input--input">
                                                <input type="text" placeholder="NAME" className="input"/>
                                            </div>
                                            <div className="form_input form_input--input">
                                                <input type="text" placeholder="EMAIL" className="input"/>
                                            </div>
                                            <div className="form_input form_input--textarea">
                                                <textarea placeholder="MESSAGE" className="textarea" />
                                            </div>
                                            <div className="form_input form_input--button">
                                                <button className="button button--active">send message</button>
                                            </div>
                                        </div>
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
};