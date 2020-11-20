import React from 'react';
import Link from 'next/link';

import Head from '../../components/head';
import ImageViewer from '../../components/carousel';
import InnerLayout from "../../components/layouts/inner-page";
import {outerHtml} from "../../lib/fade";
import {getAllProjectIds, getProjectData} from '../../lib/projets'

export default function Project({allProjectsData}) {
    const projectName = allProjectsData.name || 'project';

    function getSlide(images) {
        return images.split(',').map((el, index) => el.length > 0 && (
            <div className="slider_item" key={`image-${index}`}>
                <div className="slider_wrapper">
                    <img src={el} alt="" className="image"/>
                    <div className="show-image">
                        <i className="far fa-2x fa-eye"/>
                    </div>
                </div>
            </div>
        ))
    }

    function getImages(images) {
        return images.split(',').map((el, index) => ({
                caption: '',
                author: '',
                createdAt: '',
                likes: '',
                source: {regular: el, thumbnail: el}
            }));
    }

    return (
        <InnerLayout clasName={'project-page'} path={'projects'}>
            <Head title={projectName}/>
            <section className="theme-light section section--project-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text">{projectName}</div>
                        </div>
                        <div className="col-10 align-self-center">
                            <div className="project-page">
                                <div className="project-page_wrapper">
                                    <div className="project-page_header">{allProjectsData.title}</div>
                                    <div className="project-page_slider">
                                        { allProjectsData.images &&
                                        <ImageViewer images={getImages(allProjectsData.images)}/> }
                                    </div>
                                    <div className="project-page_text">
                                        <div dangerouslySetInnerHTML={{__html: allProjectsData.contentHtml}}/>
                                    </div>
                                    <div className="project-page_buttons">
                                        {allProjectsData.github && <a href={allProjectsData.github} target={'_blank'}
                                                                      className="button button--download">View on
                                            Github</a>}
                                        {allProjectsData.url && <a href={allProjectsData.url} target={'_blank'}
                                                                   className="button button button--projects">Live
                                            view</a>}
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

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const allProjectsData = await getProjectData(params.id)
    return {
        props: {
            allProjectsData
        }
    }
}