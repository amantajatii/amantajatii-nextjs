import Link from "next/link";

export default function NavComps(props) {
  return (
    <Link
      href={props.link}
      className={props.className}>
      {props.name}
    </Link>
  );
}
