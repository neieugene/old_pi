import React from "react";
import "SocialIcons.css";

const networks = {
  vk: "/",
  twitter: "/",
  facebook: "/",
  odnoklassniki: "/",
  "youtube-play": "/",
  instagram: "/"
};

export default function SocialIcons({ round, large, className }) {
  const icons = [];
  for (const [key, value] of Object.entries(networks)) {
    icons.push(
      <li className="list-inline-item" key={key}>
        <a href={value}>
          <span className="fa-stack fa-lg">
            {round && <i className="fa fa-circle fa-stack-2x" />}
            <i
              className={`fa fa-${key} fa-stack-1x fa-inverse ${large
                ? "large"
                : ""}`}
            />
          </span>
        </a>
      </li>
    );
  }

  return (
    <ul
      className={`SocialIcons list-inline text-center ${className
        ? className
        : ""}`}
    >
      {icons}
    </ul>
  );
}
