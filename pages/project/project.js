import React, { useEffect } from 'react'
import Link from 'next/link'
import * as basicLightbox from 'basiclightbox'
import 'glider-js/glider.min'

import Head from '../../components/head'
import InnerLayout from '../../components/layouts/inner-page'
import { outerHtml } from '../../lib/fade'

const slider = React.createRef()

export default function Project() {
  const projectName = 'Some Project'

  function onClickHandler(e) {
    const elementName = e.target.nodeName.toLowerCase()
    const image = e.target.closest('.slider_wrapper').firstChild

    if (elementName !== 'i') {
      return false
    }

    const modalInstance = basicLightbox.create(outerHtml(image))

    modalInstance.show()
  }

  useEffect(() => {
    new Glider(slider.current, {
      slidesToShow: 3,
      draggable: true,
      responsive: [
        {
          // Screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
          }
        },
        {
          // Screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            duration: 0.25
          }
        }
      ]
    })
  })

  return (
    <InnerLayout clasName="project-page">
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
                  <div className="project-page_header">Elit Taxi service app</div>

                  <div className="project-page_slider">
                    <div
                      className="slider slider--project"
                      onClick={onClickHandler}
                      ref={slider}
                    >
                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="slider_wrapper">
                          <img
                            alt=""
                            className="image"
                            src="/static/img/bear.jpg"
                          />

                          <div className="show-image">
                            <i className="far fa-2x fa-eye" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project-page_text">Web-приложение позволяющее заказать такси онлайн</div>

                  <div className="project-page_buttons">
                    <a
                      className="button button--download"
                      href="/"
                    >View on Github
                    </a>

                    <a
                      className="button button button--projects"
                      href="/"
                    >Live view
                    </a>
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
