import React from "react";
import { data } from "./data";
function Desktop({ ...props }) {
  const { setIsSelected, isSelected, navSubSectionsRef, subLinksRef } = props;

  return (
    <>
      <nav>
        {data.map((element) => {
          const { title, id } = element;
          return (
            <button
              className="navBtn"
              key={id}
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
                src="images/icon-arrow-light.svg"
                alt="arrow"
              />
            </button>
          );
        })}
        <div
          ref={navSubSectionsRef}
          className={`navSubSections ${data
            .filter((element) => element.id === isSelected.id)
            .map((element) => {
              const { id } = element;
              if (isSelected.id === id) {
                return `pos${id}`;
              }
              return "";
            })} ${isSelected.state ? "opacity" : ""}`}
        >
          {data.map((element) => {
            const { id, subSections } = element;
            return (
              <div
                ref={id === isSelected.id ? subLinksRef : null}
                key={id}
                className={`sub ${
                  isSelected.id === id && isSelected.state ? "opacity" : ""
                }`}
              >
                {subSections.map((subElement, index) => {
                  return (
                    <button key={index} className="SubBtn">
                      {subElement}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </nav>
      <div className="account">
        <button className="login">Login</button>
        <button className="signUp">Sign Up</button>
      </div>
    </>
  );
}

export default Desktop;
