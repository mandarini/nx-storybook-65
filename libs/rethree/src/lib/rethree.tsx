export interface RethreeProps {
  title: string;
  rating: number;
  flag: boolean;
}

export function Rethree(props: RethreeProps) {
  return (
    <div>
      <h1>React app using Nx</h1>
      <p>Title: {props.title}</p>
      <p>Rating: {props.rating}</p>
      <p>Flag: {props.flag ? 'true' : 'false'}</p>
    </div>
  );
}

export default Rethree;
