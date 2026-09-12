import { useEffect, useRef, useState } from 'react'
import Cover from './sections/Cover'
import About from './sections/About'
import Craft from './sections/Craft'
import Work from './sections/Work'
import Approach from './sections/Approach'
import Packages from './sections/Packages'
import Seventh from './sections/Seventh'
import './App.css'

function App() {
  const [section, setSection] = useState(0)
  const [workStep, setWorkStep] = useState(0)
  const [packagesStep, setPackagesStep] = useState(0)

  const sectionRef = useRef(0)
  const workStepRef = useRef(0)
  const packagesStepRef = useRef(0)

  const locked = useRef(false)
  const unlockTimer = useRef(null)

  useEffect(() => {
    const unlock = (duration = 1050) => {
      clearTimeout(unlockTimer.current)

      unlockTimer.current = setTimeout(() => {
        locked.current = false
      }, duration)
    }

    const changeSection = (direction) => {
      if (locked.current) return

      const current = sectionRef.current

      /* WORK INTERNAL NAVIGATION */

      if (current === 3) {
        const nextWorkStep = Math.max(
          0,
          Math.min(
            3,
            workStepRef.current + direction
          )
        )

        if (
          nextWorkStep !==
          workStepRef.current
        ) {
          locked.current = true

          workStepRef.current =
            nextWorkStep

          setWorkStep(nextWorkStep)

          unlock(1000)

          return
        }

        if (
          direction < 0 &&
          workStepRef.current === 0
        ) {
          locked.current = true

          sectionRef.current = 2
          setSection(2)

          unlock(1100)

          return
        }

        if (
          direction > 0 &&
          workStepRef.current === 3
        ) {
          locked.current = true

          sectionRef.current = 4
          setSection(4)

          unlock(1100)

          return
        }

        return
      }

      /* APPROACH */

      if (current === 4) {
        if (direction < 0) {
          locked.current = true

          sectionRef.current = 3
          setSection(3)

          unlock(1100)

          return
        }

        if (direction > 0) {
          locked.current = true

          packagesStepRef.current = 0
          setPackagesStep(0)

          sectionRef.current = 5
          setSection(5)

          unlock(1100)

          return
        }

        return
      }

      /* PACKAGES INTERNAL NAVIGATION */

      if (current === 5) {
        const nextPackagesStep = Math.max(
          0,
          Math.min(
            3,
            packagesStepRef.current + direction
          )
        )

        if (
          nextPackagesStep !==
          packagesStepRef.current
        ) {
          locked.current = true

          packagesStepRef.current =
            nextPackagesStep

          setPackagesStep(
            nextPackagesStep
          )

          unlock(1000)

          return
        }

        if (
          direction < 0 &&
          packagesStepRef.current === 0
        ) {
          locked.current = true

          sectionRef.current = 4
          setSection(4)

          unlock(1100)

          return
        }

        if (
          direction > 0 &&
          packagesStepRef.current === 3
        ) {
          locked.current = true

          sectionRef.current = 6
          setSection(6)

          unlock(1100)

          return
        }

        return
      }

      /* FINAL SECTION */

      if (current === 6) {
        if (direction < 0) {
          locked.current = true

          packagesStepRef.current = 3
          setPackagesStep(3)

          sectionRef.current = 5
          setSection(5)

          unlock(1100)

          return
        }

        return
      }

      const next = Math.max(
        0,
        Math.min(
          6,
          current + direction
        )
      )

      if (next === current) return

      locked.current = true

      sectionRef.current = next

      if (next === 3) {
        workStepRef.current = 0
        setWorkStep(0)
      }

      if (next === 5) {
        packagesStepRef.current = 0
        setPackagesStep(0)
      }

      setSection(next)

      unlock(1100)
    }

    const wheel = (event) => {
      event.preventDefault()

      if (Math.abs(event.deltaY) < 15) {
        return
      }

      changeSection(
        event.deltaY > 0 ? 1 : -1
      )
    }

    const keyboard = (event) => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        event.key === ' '
      ) {
        event.preventDefault()
        changeSection(1)
      }

      if (
        event.key === 'ArrowUp' ||
        event.key === 'PageUp'
      ) {
        event.preventDefault()
        changeSection(-1)
      }
    }

    window.addEventListener(
      'wheel',
      wheel,
      { passive: false }
    )

    window.addEventListener(
      'keydown',
      keyboard
    )

    return () => {
      clearTimeout(unlockTimer.current)

      window.removeEventListener(
        'wheel',
        wheel
      )

      window.removeEventListener(
        'keydown',
        keyboard
      )
    }
  }, [])

  return (
    <main
      className={`app ${
        section === 0
          ? 'is-cover'
          : section === 1
            ? 'is-about'
            : section === 2
              ? 'is-craft'
              : section === 3
                ? 'is-work'
                : section === 4
                  ? 'is-approach'
                  : section === 5
                    ? 'is-packages'
                    : 'is-seventh'
      }`}
    >
      <div className="cinematic-flash" />
      <div className="cinematic-vignette" />

      <div className="scene scene-cover">
        <Cover />
      </div>

      <div className="scene scene-about">
        <About />
      </div>

      <div className="scene scene-craft">
        <Craft />
      </div>

      <div className="scene scene-work">
        <Work
          activeStep={workStep}
        />
      </div>

      <div className="scene scene-approach">
        <Approach />
      </div>

      <div className="scene scene-packages">
        <Packages
          activeStep={packagesStep}
        />
      </div>

      <div className="scene scene-seventh">
        <Seventh />
      </div>
    </main>
  )
}

export default App