import Link from 'next/link'
import Head from '../components/head'
import InnerLayout from '../components/layouts/inner-page'
import { withTranslation } from '../i18n'
import config from '../lib/config'
import JsonLd from '../components/json-ld'
import React from 'react'

function About({ t }) {

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Kherson',
      'addressRegion': 'UA',
      'postalCode': '73000',
      'streetAddress': 'Pokrisheva'
    },
    'colleague': ['http://kntu.net.ua/'],
    'email': 'zimmalex6@gmail.com',
    'image': '/static/img/3.png',
    'jobTitle': 'Middle frontend developer',
    'name': 'Alex Chukhrai',
    'telephone': '+38 (095) 10-99-021',
    'url': 'https://',
    'sameAs': [
      config.instagramUrl,
      config.telegramUrl,
      config.githubUrl
    ]
  }

  return (
    <InnerLayout clasName="about-page">
      <Head title={t('about')} />

      <section className="theme-light section section--about">
        <div className="container-fluid">
          <div className="row">
            <div className="col align-self-center">
              <div className="transform-text-left page-text">{t('about')}</div>
            </div>

            <div className="col-10 align-self-center">
              <div className="about">
                <img
                  alt=""
                  className="about_image"
                  src="/static/img/3.png"
                />

                <div className="about_wrapper">
                  <div className="about_header">{ t('text') }</div>

                  <div className="about_text">{ t('sub-text', { text: '' }) }</div>

                  <div className="about_buttons">
                    <a
                      className="button button--active button--download"
                      download="Chukhrai_Aleksandr.pdf"
                      href="/static/cv/Chukhrai_Aleksandr.pdf"
                    >{ t('download') }
                    </a>

                    <Link href="/projects">
                      <a
                        className="button button button--projects"
                        href="/projects"
                      >{ t('view') }
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col" />
          </div>
        </div>
      </section>

      <JsonLd data={data} />
    </InnerLayout>
  )
}

export default withTranslation('about')(About)
