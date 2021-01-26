import { combination } from './lib'
import Circle from './circle'
import Line from './line'
import Point from './point'

function createFirstCircle(r1, r2, r3) {

  /*
   * Три окружности
   * Начальная точка для первой окружности
   */
  const R1 = r1 || 10
  const R2 = r2 || 15
  const R3 = r3 || 20

  const pointR1 = new Point(0, 0)

  // Вспомогательная окружность, чтобы определить точку цента для втрой окружности
  const circle1 = new Circle(R1, pointR1)

  const circle2 = new Circle(R1 + R2, pointR1)

  const circle3 = new Circle(R1 + R3, pointR1)

  // Получить углы для треугольника
  const angles = circle1.getAngles(R2, R3)

  const pointR2 = circle2.getSecondCenter(0)
  const pointR3 = circle3.getSecondCenter(angles.alpha)

  const c1 = new Circle(R1, pointR1, 'c1', 0, 'c2,c3')
  const c2 = new Circle(R2, pointR2, 'c2', 0, 'c1,c3')
  const c3 = new Circle(R3, pointR3, 'c3', angles.alpha, 'c1,c2')

  return [
    c1,
    c2,
    c3
  ]
}

function getSide(array) {
  return combination(array).
    map((value) => new Line(value[0], value[1])).
    filter((value) => Math.abs(value.length() - (value.p1.R + value.p2.R)) <= value.p1.MISTAKE)
}

function fillCircle(str, shape) {
  let maxSides = 0
  let maxRadius = 0
  let strSum = 0
  let maxLine = null

  str.split('').forEach((letter, iC) => {
    const sides = getSide(shape)

    if (iC === str.length - 1) {
      maxSides = sides
    }

    // Радиус четвертого треугольника
    const R4 = letter.charCodeAt(0) - 20

    strSum += R4

    // Получаем площадь всех возможных треугольников
    const squares = sides.map((values) => {
      const c1 = values.p1
      const c2 = values.p2

      const circle3 = new Circle(c1.R + R4, c1.o)
      const angles = c1.getAngles(c2.R, R4)
      const angle2 = c1.getRotateAngles(values, c2.R, R4)

      let angle = c1.getAngleByQuarter(values, angles.alpha, angle2.alpha) // Угол поворота окружности, против часовой стрелки

      let pointR3 = circle3.getSecondCenter(angle) // Находим центр новой окружности

      // Создаем новую окружность
      let c3 = new Circle(
        R4, pointR3,
        `c${iC + 4}`,
        angle,
        `${c1.name},${c2.name}`
      )


      // Площадь образовавшегося треугольника
      let square = c1.getTriangleSquare(c2.R, R4)

      /*
       * Если данная окружность пересекает другие окружности (случай когда необходимо
       * Зеркально отобразить окружность, относительно линии соединяющей центры окружностей)
       */
      if (c3.isIntersection(shape)) {
        angle = c1.getAngleByQuarter(values, -angles.alpha, angle2.alpha) // Угол поворота окружности, по часовой стрелке
        pointR3 = circle3.getSecondCenter(angle)
        c3 = new Circle(
          R4, pointR3,
          `c${iC + 4}`,
          angle,
          `${c1.name},${c2.name}`
        )

        // Если окружность пересекает другие окружности после зеркального отображния
        if (c3.isIntersection(shape)) {
          square = Infinity
        }
      }

      return { c1,
        c2,
        c3,
        square }
    })

    // Находим минимальную площадь
    let minSquare = squares[0]

    squares.forEach((values) => {
      if (values.square < minSquare.square) {
        minSquare = values
      }
    })

    shape.push(minSquare.c3)
  })

  maxSides.forEach((value) => {
    if (value.length() > maxRadius) {
      maxRadius = value.length()
      maxLine = value
    }
  })

  return { count: str.length * 2.5,
    length: strSum / 10,
    radius: maxRadius / 5 }
}

function drawResult(word) {
  const shapes = createFirstCircle()

  return fillCircle(word || 'abc', shapes)
}

export default drawResult
