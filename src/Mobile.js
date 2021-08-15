import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data";
function Mobile({ ...props }) {
  const { setIsSelected, isSelected, navSubSectionsRef, subLinksRef, menu } =
    props;
  return (
    <div
      className="mobileMenu"
      style={menu ? { opacity: "1" } : {}}
      ref={navSubSectionsRef}
    >
      <div className="wrapper" ref={subLinksRef}>
        <nav className={`navSubSectionsMobile`}>
          {data.map((element) => {
            const { title, id, subSections } = element;
            return (
              <div key={id}>
                <button
                  style={
                    isSelected.id === id && isSelected.state
                      ? { color: "grey" }
                      : {}
                  }
                  className={"navBtnMobile"}
                  onClick={() => {
                    if (isSelected.id === id) {
                      setIsSelected({ id: id, state: !isSelected.state });
                    }
                    if (isSelected.id !== id) {
                      setIsSelected({ id: id, state: true });
                    }
                  }}
                >
                  {title}
                  <img
                    className={`${
                      isSelected.id === id && isSelected.state ? "rotate" : ""
                    }`}
                    src="images/icon-arrow-dark.svg"
                    alt="arrow"
                  />
                </button>
                <div
                  className={`subMobile ${
                    isSelected.id === id && isSelected.state
                      ? "opacityMobile"
                      : ""
                  }`}
                >
                  {subSections.map((subElement, index) => {
                    return (
                      <button key={index} className="SubBtnMobile">
                        {subElement}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="accountMobile">
          <button className="login">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
