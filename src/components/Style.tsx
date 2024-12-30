type styleProps = {
  styles: React.CSSProperties;
};
export default function Style({ styles }: styleProps) {
  return <p style={styles}>I am styled component</p>;
}
