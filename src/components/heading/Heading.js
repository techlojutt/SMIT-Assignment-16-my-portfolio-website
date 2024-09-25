import './heading.css';

export default function Heading(props) {
  return (
    <div className={props.className}>
        {props.text}
    </div>
  )
}
