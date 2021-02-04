import React from 'react'
import { shallow } from 'enzyme'
import JsonLd from './json-ld'
import config from '../lib/config'

describe('JsonLd component <JsonLd/>', () => {
  const component = ({ data }) => <JsonLd data={data} />
  const testData = {
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

  it('renders Component component without crashing', () => {
    shallow(component({ data: testData }))
  })

  it('have props', () => {
    const comp = shallow(component({ data: testData }))
    const props = { __html: JSON.stringify(testData) }

    expect(comp.prop('dangerouslySetInnerHTML')).toEqual(props)
  })
})
