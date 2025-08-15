import Link from "next/link";

export default function NavComps(props) {
  return (
    <Link
      href={props.link}
      className="font-semibold hover:text-fuchsia-400 transition-all">
      {props.name}
    </Link>
  );
}
