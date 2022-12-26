import Image from "next/image";
import Link from "next/link";
import FooterItem from "../../atoms/FooterItem";
import Menu from "../../atoms/FooterItem/Menu";

export default function Footer() {
  return (
    <footer>
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <Link href="/" className="mb-30">
                  <Image
                    src="/icon/icon.svg"
                    alt="Icon StoreGG"
                    width={60}
                    height={60}
                  />
                </Link>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  StoreGG membantu gamers
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <FooterItem title="Company" />
                    <ul className="list-unstyled">
                      <Menu href="/about-us" list="About Us" />
                      <Menu href="/press-release" list="Press Release" />
                      <Menu href="/terms-of-use" list="Terms of Use" />
                      <Menu
                        href="/privacy-and-policy"
                        list="Privacy & Policy"
                      />
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <FooterItem title="Support" />
                    <ul className="list-unstyled">
                      <Menu href="/refund-policy" list="Refund Policy" />
                      <Menu href="/unlock-rewards" list="Unlock Rewards" />
                      <Menu href="/live-chatting" list="Live Chatting" />
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <FooterItem title="Connect" />
                    <ul className="list-unstyled">
                      <Menu href="mailto: hi@store.gg" list="hi@store.gg" />
                      <Menu href="mailto: team@store.gg" list="team@store.gg" />
                      <Menu
                        href="http://maps.google.com/?q=Pasific12,JakartaSelatan"
                        list="Pasific
                        12,
                        Jakarta Selatan"
                      />
                      <Menu href="tel: 02111229090" list="021 - 1122 - 9090" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </footer>
  );
}
