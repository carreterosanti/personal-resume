import React from "react";

export default function ItemBottomInfoProyecto(props) {
  const imagenIcon =
    props.type === "web" ? (
      <img
        className="bottom-info-proyecto-icon clickable"
        src={require(props.darkMode
          ? "./images/dark-mode-www-icon.png"
          : "./images/www-icon.png")}
        alt="Brochure Icon"
      />
    ) : props.type === "repo" ? (
      <img
        className="bottom-info-proyecto-icon clickable"
        src={require(props.darkMode
          ? "./images/dark-mode-repository-code-icon.png"
          : "./images/repository-code-icon.png")}
        alt="Brochure Icon"
      />
    ) : (
      <></>
    );

  const textLink =
    props.type === "web" ? "Link" : props.type === "repo" ? "Repositorio" : "";

  return (
    <>
      <a
        style={{ width: "25px", height: "25px", marginRight: "5px" }}
        href={props.linkWeb}
        target="_blank"
      >
        {imagenIcon}
      </a>
      <a
        style={props.darkMode ? { color: "#fafafa" } : { color: "#414141" }}
        className="small-text-mobile-a"
        href={props.linkWeb}
        target="_blank"
      >
        {textLink} {props.titulo}
      </a>
    </>
  );
}
