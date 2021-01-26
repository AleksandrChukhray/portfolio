export const quad = (timeFraction) => timeFraction ** 2

function fadeInDraw(element, progress) {
  const maxOp = 1
  const op = maxOp * progress

  if (op > 0.1) {
    element.style.display = 'block'
  }

  element.style.opacity = op
  element.style.filter = `alpha(opacity=${op * 100})`
}

function fadeOutDraw(element, progress) {
  const maxOp = 1
  const op = maxOp * (1 - progress)

  if (op < 0.1) {
    element.style.display = 'none'
  }

  element.style.opacity = op
  element.style.filter = `alpha(opacity=${op * 100})`
}

export function fadeIn(element, duration) {
  animation(duration || 1000, fadeInDraw.bind(null, element), quad)
}

export function fadeOut(element, duration) {
  animation(duration || 1000, fadeOutDraw.bind(null, element), quad)
}

export function animation(duration, draw, timing) {

  const start = performance.now()

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration

    if (timeFraction > 1) {
      timeFraction = 1
    }

    const progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }

  })
}

export function addClass(element, className) {
  element.classList.add(className)
}

export function removeClass(element, className) {
  element.classList.remove(className)
}

export function outerHtml(node) {
  const DIV = document.createElement('div')
  const div = DIV.cloneNode()

  div.appendChild(node.cloneNode(true))

  return div.innerHTML
}
