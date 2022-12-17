import React from "react";
import WebsiteURL from "../assets/web.svg";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div className="social-list-items">
      <a
        title="Website"
        href={config.website_url}
        target="_blank"
        rel="noopener"
      >
        <WebsiteURL width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        .social-list-items {
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 2rem;
        }
      `}</style>
    </div>
  );
}
