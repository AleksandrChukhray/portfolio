import {useState, createRef} from 'react';
import Link from 'next/link';
import Head from '../components/head';
import InnerLayout from "../components/layouts/inner-page";
import {getScrollPosition, useScrollPosition} from "../components/effects/scroll";
import {getSortedProjectsData, getBGColor, radialGradient} from "../lib/projets";
import {addClass, removeClass} from "../lib/fade";
import ScrollToTop from "../components/navigation/scroll-to-top";

const projectList = createRef();

export default function Projects({allProjectsData}) {
    const data = allProjectsData.filter(el => el.published === 'true');
    let [filteredData, changeFilteredData] = useState(data);
    let [selectedTech, changeSelectedTech] = useState(null);
    let [showOnScroll, setHideOnScroll] = useState(0)

    useScrollPosition(
        ({ currPos }) => {
            setHideOnScroll(Math.abs(currPos.y))
        },
        [showOnScroll],
        null,
        null,
        200
    )

    function getAllFilters(data) {
        let filterObject = {};
        let filters = [];

        data.map(value => value.stack.split(',')).forEach(value => value.map(v => filters.push(v)));
        filters.forEach(value => filterObject[value] = true);
        filters = [];

        Object.keys(filterObject).map(value => filters.push(value));

        return filters;
    }

    function onFilterHandler(e) {
        let filterStr = e.target.innerHTML;
        let tmpFilters = [];
        let pos = getScrollPosition({element: projectList});

        // add class to selected element
        selectedTech && removeClass(selectedTech, 'hover');
        addClass(e.target, 'hover');
        changeSelectedTech(e.target);

        // filter data
        tmpFilters = data.filter(value => value.stack.indexOf(filterStr) !== -1)
        changeFilteredData(tmpFilters);

        setTimeout(() => {
            window.scrollTo({top: Math.floor(pos.y), behavior: "smooth"})
        }, 100);
    }

    // const filters2 = [
    //     'react',
    //     'angular',
    //     'html',
    //     'sass',
    //     'js',
    //     'jquery',
    //     'rxjs',
    //     'ngrx',
    //     'nodejs',
    //     'express',
    //     'mongodb',
    //     'graphql',
    //     'es6',
    //     'es5',
    //     'typescript',
    //     'redux',
    //     'php',
    //     'mysql',
    //     'opencart',
    //     'wordpress',
    //     'prestashop',
    //     'telegram API'
    // ]

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
                                        {getAllFilters(data).map((el, index) =>
                                            <div
                                                className="animation-link filter_items"
                                                key={`${el}-${index}`}
                                                onClick={onFilterHandler}
                                            >{el}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProjectsList allProjectsData={filteredData}/>
                </div>
            </section>
            <ScrollToTop scrollY={showOnScroll}/>
        </InnerLayout>
    )
};

function ProjectsList({allProjectsData}) {
    return (
        <div className="projects_list" ref={projectList}>
            {allProjectsData.map((el, index) => (
                    <div className="project" key={`${index}-${el.toString()}`}>
                        <div
                            className="project_image"
                            style={{backgroundImage: radialGradient(getBGColor(el.name)) }}
                        />
                        <div className="line"/>
                        <div className="project_numbers">{`0${index + 1}`}</div>
                        <div className="project_wrap">
                            <div className="project_name"> {el.name} </div>
                            <div className="project_stack"> {el.smallStack} </div>
                        </div>
                        <Link href="/project/[id]" as={`/project/${el.id}`}>
                            <a className="project_button">
                            <span>
                                <span>view project <i className="project_button_arrow" /></span>
                            </span>
                            </a>
                        </Link>
                        <div className="project_button-background"/>
                    </div>
                )
            )}
        </div>
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