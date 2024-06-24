import { useSelector } from "react-redux";

const Footer = () => {
  const dataBase = useSelector((store) => store.dataBase);

  return (
    <footer className="py-5 sm:px-10 px-5 bg-[#f5f5f7]">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold  text-xs">
            More ways to shop:{" "}
            <span className="underline text-[#0066cc]">
              Find an Apple Store{" "}
            </span>
            or <span className="underline text-[#0066cc]">other retailer</span>{" "}
            near you.
          </p>
          <p className="font-semibold  text-xs">Or call 000800-040-1966</p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold  text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {dataBase[5].footerLinks.map((link, i) => (
              <p key={link} className="font-semibold  text-xs">
                {link}
                {i !== dataBase[5].footerLinks.length - 1 && (
                  <span className="mx-[2px]"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
