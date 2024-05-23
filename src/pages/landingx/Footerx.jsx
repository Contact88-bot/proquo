import bultpay3 from "../../images/bultpay3.png";
import { Link } from "react-router-dom";
import Icon from "../../components/Nav/Icon";

const Footer = () => {
  return (
    <div className="text-white py-10 px-5 md:py-20 md:px-20 text-xs font-fira">
      <section className="md:flex md:flex-row flex flex-col md:gap-60 gap-4 ">
        <div>
          <p className="font-arvo font-semibold text-sm">QUICK LINKS</p>
          <p>Home</p>
          <Link to="/public/policy">
            <p>KYC Policy</p>
          </Link>
          <p>Privacy Policy</p>
          <p>Payment Policy</p>
        </div>
        <div>
          <p className="font-arvo font-semibold text-sm">CONTACTS</p>
          <p>support@proquoauctions.com</p>
          <p>Officialproquoauctions.com</p>
          <p> Live Chat</p>
          <p> +1 (615) 544 5023</p>
        </div>
        <div>
          <p className="font-arvo font-semibold text-sm">ADDRESS</p>
          <p>PROQUOAUCTIONS (US), Inc </p>
          <p>588 5TH St.</p>
          <p>Brooklyn, NY,</p>
          <p>11215-3504 United States</p>
          <p>www.proquoauctions.com</p>
          <p>Company Type: Corporation Subsidiary</p>
        </div>
      </section>

      <section className="md:mt-14 mt-4 md:w-full w-[55%]">
        <h1 className="md:text-lg text-base font-arvo font-semibold">
          FIRST IN CRYPTOCURRENCY
        </h1>
        <p className="md:text-sm text-2xs">
          The proquoauctions.com is one of the leading platforms in the United
          States offering Bitcoin Mining/Binary Options, Forex and spreads.
          Regulated by the CFTC and based in New York. It is also regulated by
          the IFSC of Belize, as well as the Cyprus Securities and Exchange
          Commission.
        </p>
      </section>

      <section className="md:mt-10 mt-4  md:w-full w-[55%]">
        <h1 className="text-lg font-arvo font-semibold">COPYRIGHT LAWS</h1>
        <p className="text-sm">
          All materials and services provided on this site are subject to
          copyright and belong to “PROQUOAUCTIONS”. Any use of materials of this
          website must be approved by an official representative of
          PROQUOAUCTIONS or in line with the regulations under the "Privacy
          Policy, and contain a link to the original resource. Third-party
          companies do not have the right to use materials of this website as
          well as any distorted writing of “PROQUOAUCTIONS”. In case of
          violation, they will be prosecuted in accordance with legislation of
          the intellectual property protection.
        </p>
      </section>
    </div>
  );
};

export default Footer;
