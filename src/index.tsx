import React, { useState } from 'react'
import './styles.scss'
import { nanoid } from 'nanoid'

import { defaultProps, RCRProps } from './types'

const animationNames = ['fadein', 'zoomin', 'hslidein', 'vslidein']

const ChildrenReveal = (props : RCRProps = defaultProps) => {
  const [iterator, setIterator] = useState(0)

  const revealNextChild = () => {
    props.onRevealed(iterator)

    if(iterator < props.children.length)
      setIterator(iterator + 1)
    
    if(iterator === props.children.length - 1)
      props.onEnd()
  }

  const keyedChildren = props.children.map(child => ({
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
            className: child.props.className + ' __react-children-reveal __rcr_' + props.type,
            style: {
              ...child.props.style,
              animationDelay: props.delay / 1000 + 's',
              animationDuration: props.time / 1000 + 's'
            }
          })
        ))
      }
    </>
  )
}

export default ChildrenReveal
