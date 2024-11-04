type oscarProps = {
    children: React.ReactNode
}
export default function Oscar(props: oscarProps) {

  return (
    <>
    <h5>{props.children}</h5>
    </>
  )
}
