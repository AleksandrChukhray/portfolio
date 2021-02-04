import React from 'react'
import { shallow } from 'enzyme'
import ProjectsImage from './projects-image'

describe('ProjectsImage component <ProjectsImage />', () => {
  const component = ({ projects, random }) => (<ProjectsImage projects={projects}
random={random} />)

  const testData = {
    projects: [
      'hello',
      'world',
      '!!!'
    ],
    random: 1
  }

  it('renders Component component without crashing', () => {
    shallow(component(testData))
  })

  it('have valid structure', () => {
    const comp = shallow(component(testData))

    expect(comp.hasClass('projects-image')).toBeTruthy()
    expect(comp.find('.projects_wrap').length).toBe(1)
    expect(comp.find('.projects-image_row').length).toBe(2)
    expect(comp.find('.projects-image_item').length).toBe(12)
    expect(comp.find('.point').length).toBe(108)
  })
})
