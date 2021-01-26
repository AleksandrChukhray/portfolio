import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray)
}

export const radialGradient = (value) => `radial-gradient(circle at right, ${value.startColor}, transparent), ` +
    `radial-gradient(circle at left, ${value.endColor}, transparent)`

export function getBGColor(str) {
  let startColor = '#'
  let endColor = '#'

  let start = 0
  const newStr = str.replace(/\s/g, '')
  const strLength = newStr.length
  const strPair = []
  const numPair = []
  let maxNum = 0
  const strPairLength = Math.ceil(strLength / 6)

  do {
    let pushStr = newStr.substr(start, strPairLength)

    if (!pushStr) {
      pushStr = Array(strPairLength).fill('a').
        join()
    }
    strPair.push(pushStr)

    start += strPairLength
  } while (start < strLength)

  if (strPair.length < 6) {
    while (strPair.length < 6) {
      const s = Array(strPairLength).fill('a').
        join()

      strPair.push(s)
    }
  }

  strPair.forEach((value) => {
    let sum = 0

    for (let i = 0; i < value.length; i++) {
      sum += value.charCodeAt(i)
    }

    numPair.push(sum)
  })

  maxNum = getMaxOfArray(numPair)

  numPair.forEach((value, index) => {
    const hex = Math.floor(value * 15 / maxNum).toString(16)

    if (index < 3) {
      startColor += hex
    } else {
      endColor += hex
    }
  })

  return { startColor,
    endColor }
}

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }

    return -1

  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  /*
   * Returns an array that looks like this:
   * [
   *   {
   *     Params: {
   *       Id: 'ssg-ssr'
   *     }
   *   },
   *   {
   *     Params: {
   *       Id: 'pre-rendering'
   *     }
   *   }
   * ]
   */
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().
    use(html).
    process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
