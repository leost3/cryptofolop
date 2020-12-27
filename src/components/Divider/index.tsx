type Size = 'full' | 'half' | 'small'
export type DividerProps = {
  size?: Size
}

export function Divider(props: DividerProps) {
  const { size = 'full' } = props

  const width: Record<Size, 'string'> = {
    full: 'w-full',
    half: 'w-half',
    small: 'w-10'
  }

  return <div className={`${width[size]} h-1 bg-gray-200`} />
}
