import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({
    perfumes: true,
    gender: false,
    type: false,
  });

  const toggleSection = (section) => {
    setOpenSections({ ...openSections, [section]: !openSections[section] });
  };

  return (
    <div className="category-sidebar">
      <div className="sidebar-section">
        <h5 onClick={() => toggleSection("perfumes")}>
          PERFUMES {openSections.perfumes ? "–" : "+"}
        </h5>
        {openSections.perfumes && (
          <ul>
            <li>Western Fragrance</li>
            <li>Arabic Fragrance</li>
          </ul>
        )}
      </div>

      <div className="sidebar-section">
        <h5 onClick={() => toggleSection("gender")}>
          GENDER {openSections.gender ? "–" : "+"}
        </h5>
        {openSections.gender && (
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
          </ul>
        )}
      </div>

      <div className="sidebar-section">
        <h5 onClick={() => toggleSection("type")}>
          TYPE {openSections.type ? "–" : "+"}
        </h5>
        {openSections.type && (
          <ul>
            <li> Floral</li>
            <li>Woody</li>
            <li>Oriental</li>
            <li>Fresh / Citrus</li>
            <li>Fougere</li>
            <li>Daytime / Casual</li>
            <li>Night / Special</li>
          </ul>
        )}
      </div>
    </div>
  );
}
