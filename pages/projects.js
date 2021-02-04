import { createRef, useState } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import InnerLayout from '../components/layouts/inner-page'
import { getScrollPosition, useScrollPosition } from '../components/effects/scroll'
import { getBGColor, getSortedProjectsData, radialGradient } from '../lib/projets'
import { addClass, removeClass } from '../lib/fade'
import ScrollToTop from '../components/scroll/scroll-to-top'
import { withTranslation } from '../i18n'
import ProjectsImage from '../components/projects-image'

const projectList = createRef()

function Projects({ allProjectsData, t, random }) {
  const data = allProjectsData.filter((el) => el.published === 'true')
  const imageData = data.map((value) => value.title)

  const [
    filteredData,
    changeFilteredData
  ] = useState(data)
  const [
    selectedTech,
    changeSelectedTech
  ] = useState(null)
  const [
    showOnScroll,
    setHideOnScroll
  ] = useState(0)

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
    const filterObject = {}
    let filters = []

    data.map((value) => value.stack.split(',')).forEach((value) => value.map((v) => filters.push(v)))
    filters.forEach((value) => filterObject[value] = true)
    filters = []

    Object.keys(filterObject).map((value) => filters.push(value))

    return filters
  }

  function onFilterHandler(e) {
    const filterStr = e.target.innerHTML
    let tmpFilters = []
    const pos = getScrollPosition({ element: projectList })

    // Add class to selected element
    selectedTech && removeClass(selectedTech, 'hover')
    addClass(e.target, 'hover')
    changeSelectedTech(e.target)

    // Filter data
    tmpFilters = data.filter((value) => value.stack.indexOf(filterStr) !== -1)
    changeFilteredData(tmpFilters)

    setTimeout(() => {
      window.scrollTo({
        top: Math.floor(pos.y),
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <InnerLayout clasName="main-page">
      <Head title={t('title')} />

      <section className="theme-light section section--projects section--projects-list-page">
        <div className="projects">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-md-2 col-md-8 col-sm-12">
                <ProjectsImage
                  projects={imageData}
                  random={random}
                />

                {/* <img*/}

                {/*    src="https://via.placeholder.com/1200x300?text=Projects+List"*/}

                {/*    Alt=""*/}

                {/*    ClassName="projects_image image"/>*/}

                <div className="projects_filter">
                  <div className="filter">
                    {getAllFilters(data).map((el, index) => (<div
                                            className="animation-link filter_items"
                                            key={`${el}-${index}`}
                                            onClick={onFilterHandler}
                                        >{el}
                                        </div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProjectsList
            allProjectsData={filteredData}
            t={t}
          />
        </div>
      </section>

      <ScrollToTop scrollY={showOnScroll} />
    </InnerLayout>
  )
}

function ProjectsList({ allProjectsData, t }) {
  return (
    <div
      className="projects_list"
      ref={projectList}
    >
      {allProjectsData.map((el, index) => (<div
                className="project"
                key={`${index}-${el.toString()}`}
            >
                <div
                    className="project_image"
                    style={{backgroundImage: radialGradient(getBGColor(el.name))}}
                />

                <div className="line"/>

                <div className="project_numbers">{index < 9 && '0'}{`${index + 1}`}</div>

                <div className="project_wrap">
                    <div className="project_name"> {el.name} </div>

                    <div className="project_stack"> {el.smallStack} </div>
                </div>

                <Link
                    href="/project/[id]"
                    as={`/project/${el.id}`}>
                    <a className="project_button">
              <span>
                <span>{t('view')} <i className="project_button_arrow"/></span>
              </span>
                    </a>
                </Link>

                <div className="project_button-background"/>
            </div>))}
    </div>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  const data = allProjectsData.filter((el) => el.published === 'true')

  const randomProject = Math.floor(Math.random() * (data.length - 1))

  return {
    props: {
      allProjectsData: data,
      random: randomProject
    }
  }
}

export default withTranslation('projects')(Projects)
