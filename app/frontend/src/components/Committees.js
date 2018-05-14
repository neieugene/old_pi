import React from "react";
import "Committees.css";
import skrb from "skrb.png";
import skrf from "skrf.png";
import skarm from "skarm.png";

export default function Committees() {
  return (
    <ul className="Committees list-unstyled">
      <li>
        <a
          href="http://sk.gov.by/ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="Committees-link"
        >
          <img
            src={skrb}
            alt="Следственный комитет Республики Беларусь"
            title="Следственный комитет Республики Беларусь"
            className="Committees-logo"
          />
        </a>
      </li>
      <li>
        <a
          href="http://sledcom.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="Committees-link"
        >
          <img
            src={skrf}
            alt="Следственный комитет Российской Федерации"
            title="Следственный комитет Российской Федерации"
            className="Committees-logo"
          />
        </a>
      </li>
      <li>
        <a
          href="http://www.ccc.am/ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="Committees-link"
        >
          <img
            src={skarm}
            alt="Специальная следственная служба Республики Армения"
            title="Специальная следственная служба Республики Армения"
            className="Committees-logo"
          />
        </a>
      </li>
    </ul>
  );
}
