import * as S from './styles'

type IconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'small' | 'medium' | 'large'
}
export function Icon(props: IconProps) {
  return <S.Icon {...props} />
}
