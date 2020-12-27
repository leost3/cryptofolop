import * as S from './styles'

type IconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'small' | 'medium' | 'large'
  className?: string
}
export function Icon(props: IconProps) {
  return <S.Icon {...props} className={props.className} />
}
