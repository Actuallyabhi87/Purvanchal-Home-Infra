import Testimonial from "./components/Testimonial";
import AboutSection from "./components/AboutSection";
import NearbySection from "./components/NearbySection";
import ProjectSection from "./components/ProjectSection";
import FeatureSection from "./components/FeatureSection";
import Gallery from "./components/Gallery";
import Lamp from "./components/Lamp";
import Contact from "./components/Contact";
import GoogleMap from "./components/GoogleMap";
import FooterSection from "./components/FooterSection";
import Head from "next/head";
import Script from "next/script"; // Importing next/script

export default function Home() {
  return (
    <>
      <Head>
        <title>Purvanchal Home Infra</title>
        <meta
          name="description"
          content="Explore real estate projects with Purvanchal Home Infra, offering versatile plot sizes, easy EMI options, and more."
        />
      </Head>

      {/* Meta Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '509623548453126');
          fbq('track', 'PageView');
        `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=509623548453126&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <Lamp />
      <div className="container-full p-6 bg-black z-50">
        <AboutSection />
        <Gallery />
        <NearbySection />
        <ProjectSection />
        <FeatureSection />
        <Contact />
        <Testimonial />
        <GoogleMap />
        <FooterSection />
      </div>
    </>
  );
}
