export interface RetwoProps {
  title: string;
  rating: number;
  flag: boolean;
}

export function Retwo(props: RetwoProps) {
  return (
    <div>
      <h1>React app using Nx</h1>
      <p>Title: {props.title}</p>
      <p>Rating: {props.rating}</p>
      <p>Flag: {props.flag ? 'true' : 'false'}</p>
    </div>
  );
}

export default Retwo;
