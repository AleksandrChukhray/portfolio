import React from 'react'
import drawResult from '../lib/three-circle'
// TODO: переделать используя canvas

export function ProjectsImage({ projects, random }) {
  const projectName = projects[random]
  const result = drawResult(projectName)

  // Console.log(result, projectName)

  const pointCorner = { width: result.radius,
    height: result.radius }
  const pointMiddle = { width: result.length,
    height: result.length }
  const pointCenter = { width: result.count,
    height: result.count }

  return <div className="projects-image">
        <div className="projects_wrap">
            <div className="projects-image_row">
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
            </div>
            <div className="projects-image_row">
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
                <div className="projects-image_item">
                    <div className="point point--corner point--corner-tl" style={pointCorner}/>
                    <div className="point point--corner point--corner-tr" style={pointCorner}/>
                    <div className="point point--corner point--corner-bl" style={pointCorner}/>
                    <div className="point point--corner point--corner-br" style={pointCorner}/>
                    <div className="point point--middle point--middle-r" style={pointMiddle}/>
                    <div className="point point--middle point--middle-l" style={pointMiddle}/>
                    <div className="point point--middle point--middle-t" style={pointMiddle}/>
                    <div className="point point--middle point--middle-b" style={pointMiddle}/>
                    <div className="point point--center" style={pointCenter}/>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectsImage
