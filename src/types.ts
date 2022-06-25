export enum AnimationTypes {
  'FADE_IN' = 'fadein',
  'ZOOM_IN' = 'zoomin',
  'V_SLIDE_IN' = 'vslidein',
  'H_SLIDE_IN' = 'hslidein',
}

export type RCRProps = {
  children?: JSX.Element[],
  delay: number,
  onRevealed: Function, 
  onEnd: Function,
  time: number,
  type: AnimationTypes,
}

const nullFn = () => null

export const defaultProps : RCRProps = {
  delay: 0,
  onRevealed: nullFn, 
  onEnd: nullFn,
  time: 1000,
  type: AnimationTypes.FADE_IN,
}