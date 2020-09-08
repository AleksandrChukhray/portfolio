import Link from 'next/link';
import Head from '../components/head';
import InnerLayout from "../components/layouts/inner-page";
import Socials from "../components/socials";
import {getSortedProjectsData} from "../lib/projets";

export default function Projects({allProjectsData}) {
    const filters = [
        'react',
        'angular',
        'html',
        'sass',
        'js',
        'jquery',
        'rxjs',
        'ngrx',
        'nodejs',
        'express',
        'mongodb',
        'graphql',
        'es6',
        'es5',
        'typescript',
        'redux',
        'php',
        'mysql',
        'opencart',
        'wordpress',
        'prestashop',
        'telegram API'
    ]

    return (
        <InnerLayout clasName={'main-page'}>
            <Head title="Projects"/>
            <section className="theme-light section section--projects section--projects-list-page">
                <div className="projects">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-md-2 col-md-8 col-sm-12">
                                <img
                                    src="https://via.placeholder.com/1200x300?text=Projects+List"
                                    alt=""
                                    className="projects_image image"/>
                                <div className="projects_filter">
                                    <div className="filter">
                                        { filters.map((el, index) =>
                                            <div className="animation-link filter_items" key={`${el}-${index}`}>{el}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProjectsList allProjectsData={allProjectsData} />
                </div>
            </section>
        </InnerLayout>
    )
};

function ProjectsList({allProjectsData}){
    const projects = [
        {
            image: null,
            name: 'Yoga web design concept',
            stack: 'web design / ui design'
        },
        {
            image: null,
            name: 'KOKO: A music player app',
            stack: 'ui design / mobile app'
        },
        {
            image: null,
            name: 'DHVTSU Web design concept',
            stack: 'web design / ui design'
        },
        {
            image: null,
            name: 'Logofolio',
            stack: 'graphic design / illustration'
        },
        {
            image: null,
            name: 'Yoga web design concept',
            stack: 'web design / ui design'
        },
    ]

    return(
        <section className="theme-light section section--projects">
            <div className="projects">
                {allProjectsData.filter(el => el.published === 'true').map((el, index) => (
                        <div className="project">
                            <div className="project_image"/>
                            <div className="line"/>
                            <div className="project_numbers">{`0${index + 1}`}</div>
                            <div className="project_wrap">
                                <div className="project_name"> {el.name} </div>
                                <div className="project_stack"> {el.smallStack} </div>
                            </div>
                            <Link href="/project/[id]" as={`/project/${el.id}`}>
                                <a className="project_button">
                        <span>
                            <span>view project <i className="project_button_arrow"></i></span>
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

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}