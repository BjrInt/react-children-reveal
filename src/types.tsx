export enum AnimationTypes {
  'FADE_IN' = 'fadein',
  'ZOOM_IN' = 'zoomin',
  'V_SLIDE_IN' = 'vslidein',
  'H_SLIDE_IN' = 'hslidein',
}

const nullFn = () => null

type RCRProps = {
  delay: number,
  onRevealed: Function, 
  onEnd: Function,
  time: number,
  type: AnimationTypes,
}

type RCRChildren = {
  children: JSX.Element[],
}

export type RCRElement = RCRProps & RCRChildren

export const defaultProps : RCRProps = {
  delay: 0,
  onRevealed: nullFn, 
  onEnd: nullFn,
  time: 1000,
  type: AnimationTypes.FADE_IN,
}