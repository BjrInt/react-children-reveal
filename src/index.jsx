import React, { useState } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

const animationNames = ['fadein', 'zoomin', 'hslidein', 'vslidein']

const ChildrenReveal = ({
  onRevealed = () => undefined,
  onEnd = () => undefined,
  type = animationNames[0],
  children,
  delay = 0,
  time = 1000,
}) => {
  const [iterator, setIterator] = useState(0)

  const revealNextChild = () => {
    onRevealed(iterator)

    if(iterator < children.length)
      setIterator(iterator + 1)
    
    if(iterator === children.length - 1)
      onEnd()
  }

  const keyedChildren = children.map(child => ({
    ...child,
    key: child.key ? child.key : nanoid()
  }))

  return (
    <>
      {
        keyedChildren.map((child, iChild) => (
          iChild <= iterator &&
          React.cloneElement(child, {
            onAnimationEnd: () => revealNextChild(),
            className: child.className + ' __react-children-reveal __rcr_' + type,
            style: {
              ...child.props.style,
              animationDelay: delay / 1000 + 's',
              animationDuration: time / 1000 + 's'
            }
          })
        ))
      }
    </>
  )
}

ChildrenReveal.propTypes = {
  delay: PropTypes.number,
  onEnd: PropTypes.func,
  onRevealed: PropTypes.func,
  time: PropTypes.number,
  type: PropTypes.oneOf(animationNames),
  children: PropTypes.arrayOf(PropTypes.element)
}

export default ChildrenReveal
