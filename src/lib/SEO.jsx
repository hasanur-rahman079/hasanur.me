import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO(props) {
  //   const { asPath, pathname } = useRouter(); we can also use this router props
  // const { asPath } = useRouter();

  return (
    <div>
      <Helmet>
        <title>{props.pageTitle} - MD. Hasanur Rahman</title>
        <meta name="description" content={props.pageDes} />
        <meta name="keywords" content={props.pageKeys} />
        {/* Facebook tags */}
        <meta property="og:type" content={props.type} />
        <meta property="og:title" content={props.pageTitle} />
        <meta property="og:description" content={props.pageDes} />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:creator" content="hasanur079" />
        <meta name="twitter:card" content={props.type} />
        <meta name="twitter:title" content={props.pageTitle} />
        <meta name="twitter:description" content={props.pageDes} />
        {/* End Twitter tags */}
      </Helmet>
    </div>
  );
}

// default props
SEO.defaultProps = {
  pageTitle: "Hasanur",
  pageDes: "Researcher, Entrepreneur, Designer and developer",
  pageKeys:
    "Researcher, Designer, Developer, Bioinformatics, Cancer Biology, Hasanur, Hasan, Hasanur Rahman, MD. Hasanur Rahman",
  type: "text/html",
};
