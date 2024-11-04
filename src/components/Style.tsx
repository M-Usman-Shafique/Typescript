type styleProps = {
    styles: React.CSSProperties
}
export default function Style(props: styleProps) {
  return (
    <p style={props.styles}>I am a style component</p>
  )
}
