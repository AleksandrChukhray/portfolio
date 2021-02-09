import React from 'react'
import Head from '../../components/head'
import ImageViewer from '../../components/carousel'
import InnerLayout from '../../components/layouts/inner-page'
import { getAllProjectIds, getProjectData } from '../../lib/projets'
import { withTranslation } from '../../i18n'
import Swipe from '../../components/icon/swipe'

function getSlide(images) {
  return images.split(',').map((el, index) => el.length > 0 &&
  <div
    className="slider_item"
    key={`image-${index}`}
  >
    <div className="slider_wrapper">
      <img
        alt=""
        className="image"
        src={el}
      />

      <div className="show-image">
        <i className="far fa-2x fa-eye" />
      </div>
    </div>
  </div>)
}

function getImages(images) {
  return images.split(',').map((el) => ({
    caption: '',
    author: '',
    createdAt: '',
    likes: '',
    source: { regular: el,
      thumbnail: el }
  }))
}

function Project({ allProjectsData, t, i18n }) {
  const {
    en,
    contentHtml,
    name,
    title,
    images,
    github,
    url
  } = allProjectsData

  const projectName = allProjectsData.name || 'project'
  const html = i18n.language === 'en' && en ? en : contentHtml

  return (
    <InnerLayout
      clasName="project-page"
      path="projects"
    >
      <Head title={projectName} />

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
                      <ImageViewer images={getImages(allProjectsData.images)} /> }

                    <div className="slider_help"><Swipe /></div>
                  </div>

                  <div className="project-page_text">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>

                  <div className="project-page_buttons">
                    {
                      allProjectsData.github &&
                      <a
                        className="button button--download"
                        href={allProjectsData.github}
                        target="_blank"
                      >
                        {t('view-github')}
                      </a>
                    }

                    {
                      allProjectsData.url &&
                      <a
                        className="button button button--projects"
                        href={allProjectsData.url}
                        target="_blank"
                      >
                        {t('live-view')}
                      </a>
                    }
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

export default withTranslation('project')(Project)
