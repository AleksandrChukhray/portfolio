import Link from 'next/link'
import Head from '../components/head'
import JsonLd from '../components/json-ld'
import InnerLayout from '../components/layouts/inner-page'
import { withTranslation } from '../i18n'
import config from '../lib/config'
import React from 'react'

function Home({ t }) {
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
    'image': '',
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
    <InnerLayout clasName="contact-page">
      <Head title="Contacts" />

      <section className="theme-light section section--contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col align-self-center">
              <div className="transform-text-left page-text">{t('contacts')}</div>
            </div>

            <div className="col-10 align-self-center">
              <div className="contact-form">
                <div className="contact-form_header">{t('text')}</div>

                <div className="contact-form_text">{t('sub-text')}</div>

                <div className="contact-form_wrapper">
                  <div className="contact-form_item contact-form_item--contacts">
                    <div className="contacts">
                      <div className="contacts_item contacts_item--email">
                        <i className="fas fa-2x fa-envelope contacts_icon" />

                        <a
                          className="contacts_text"
                          href={`mailto:${config.email}`}
                        >{config.email}
                        </a>
                      </div>

                      <div className="contacts_item contacts_item--tel">
                        <i className="fas fa-2x fa-phone-alt contacts_icon" />

                        <a
                          className="contacts_text"
                          href={`tel:${config.tel}`}
                        >{config.tel}
                        </a>
                      </div>

                      <div className="contacts_item contacts_item--instagram">
                        <i className="fab fa-2x fa-instagram contacts_icon" />

                        <a
                          className="contacts_text"
                          href={config.instagramUrl}
                          target="_blank"
                        >{config.instagram}
                        </a>
                      </div>

                      <div className="contacts_item contacts_item--tg">
                        <i className="fab fa-2x fa-telegram-plane contacts_icon" />

                        <a
                          className="contacts_text"
                          href={config.telegramUrl}
                          target="_blank"
                        >@{config.telegram}
                        </a>
                      </div>

                      <div className="contacts_item contacts_item--tg">
                        <i className="fab fa-2x fa-linkedin contacts_icon" />

                        <a
                          className="contacts_text"
                          href={config.linkedinUrl}
                          target="_blank"
                        >{config.linkedin}
                        </a>
                      </div>

                      <div className="contacts_item contacts_item--github">
                        <i className="fab fa-2x fa-github contacts_icon" />

                        <a
                          className="contacts_text"
                          href={config.githubUrl}
                          target="_blank"
                        >{config.github}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form_item contact-form_item--form">
                    <Link href="/form">
                      <a className="button" >{t('contact-me')}</a>
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

export default withTranslation('contacts')(Home)
