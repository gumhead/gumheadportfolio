import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-1xl md:text-2xlxl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        boilerplate
      </Link>
      .
    </h2>
  );
};

export default Header;
