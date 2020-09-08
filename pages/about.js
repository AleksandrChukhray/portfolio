import Link from 'next/link';
import Head from '../components/head';
import InnerLayout from "../components/layouts/inner-page";

export default function Home() {
    return (
        <InnerLayout clasName={'about-page'}>
            <Head title="About"/>
            <section className="theme-light section section--about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text"> About </div>
                        </div>
                        <div className="col-10 align-self-center">
                            <div className="about">
                                <img src="/static/img/3.png" alt="" className="about_image"/>
                                <div className="about_wrapper">
                                    <div className="about_header">Hi I'm Aleksandr. <br/> A middle frontend developer </div>
                                    <div className="about_text">
                                        Hello, my name is Aleksandr Chukhrai and I'm a Web + Graphic designer. I have
                                        a passion for the beauty? whether simple or extravagant. I also love coding and typography.
                                        I was born in Pampanga, Philippines and currently 21 of my age. I graduated at Don Honorio
                                        Ventura Technological State University with a degree in Bachelor of Science in Information
                                        Technology where I discovered my passion for problem solving declined to web design graphic arts.
                                        I am currently working as a freelancer. If you want to get started with your project and
                                        you need my help, fill free to contact me.
                                    </div>
                                    <div className="about_buttons">
                                        <div className="button button--active button--download">Download my resume</div>
                                        <Link href="/">
                                            <a href="" className="button button button--projects">View my works</a>
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
};