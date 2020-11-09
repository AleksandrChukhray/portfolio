import React, { useEffect } from 'react';
import Link from 'next/link';
import * as basicLightbox from 'basiclightbox';
import 'glider-js/glider.min'

import Head from '../../components/head';
import InnerLayout from "../../components/layouts/inner-page";
import {outerHtml} from "../../lib/fade";
import { getAllProjectIds, getProjectData } from '../../lib/projets'

const slider = React.createRef()

export default function Project({ allProjectsData }) {
    const projectName = allProjectsData.name || 'project';

    function onClickHandler(e){
        const elementName = e.target.nodeName.toLowerCase();
        const image = e.target.closest('.slider_wrapper').firstChild;

        if(elementName !== 'i') return false;

        const modalInstance = basicLightbox.create(outerHtml(image));
        modalInstance.show()
    }

    function getSlide(images){
        return images.split(',').map((el, index) => el.length > 0 && (
            <div className="slider_item" key={`image-${index}`}>
                <div className="slider_wrapper">
                    <img src={el} alt="" className="image"/>
                    <div className="show-image">
                        <i className="far fa-2x fa-eye" />
                    </div>
                </div>
            </div>
        ))
    }

    useEffect(() => {
        new Glider(slider.current, {
            slidesToShow: 3,
            draggable: true,
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 768,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 'auto',
                        slidesToScroll: 'auto',
                        itemWidth: 150,
                        duration: 0.25
                    }
                },{
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 0.25
                    }
                }
            ]
        });
    });

    return (
        <InnerLayout clasName={'project-page'}>
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
                                        <div className="slider slider--project" ref={slider} onClick={onClickHandler}>
                                            {getSlide(allProjectsData.images)}
                                        </div>
                                    </div>
                                    <div className="project-page_text">
                                        <div dangerouslySetInnerHTML={{ __html: allProjectsData.contentHtml }} />
                                    </div>
                                    <div className="project-page_buttons">
                                        {allProjectsData.github && <a href={allProjectsData.github} target={'_blank'} className="button button--download">View on Github</a>}
                                        {allProjectsData.url && <a href={ allProjectsData.url } target={'_blank'} className="button button button--projects">Live view</a>}
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



// export default function Post({ postData }) {
//     return (
//         <Layout>
//             <Head>
//                 <title>{postData.title}</title>
//             </Head>
//             <article>
//                 <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//                 <div className={utilStyles.lightText}>
//                     <Date dateString={postData.date} />
//                 </div>
//                 <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//             </article>
//         </Layout>
//     )
// }

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const allProjectsData = await getProjectData(params.id)
    return {
        props: {
            allProjectsData
        }
    }
}