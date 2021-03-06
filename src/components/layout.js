import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-200">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center mx-auto w-full">
            {children}
          </div>

          <footer className="bg-red-600">
            <div className="flex justify-center text-center max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Copyright RustyNerds {new Date().getUTCFullYear()}<br />
                Created by{" "}
                <a
                  href="https://www.youtube.com/bugsygaminghd"
                  className="font-bold no-underline text-white"
                >
                  Bugsy1440p
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
