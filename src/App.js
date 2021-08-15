import "./App.css";
import react from "react";
import { useState, useEffect, useRef } from "react";
import { data } from "./data";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function App() {
  const [isSelected, setIsSelected] = useState({
    id: 0,
    state: false,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const subLinksRef = useRef(null);
  const navSubSectionsRef = useRef(null);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let linksHeight = 0;
    if (windowWidth > 1150) {
      if (navSubSectionsRef !== null) {
        if (subLinksRef.current !== null) {
          linksHeight = subLinksRef.current.getBoundingClientRect().height;
        }

        if (linksHeight < 150) {
          navSubSectionsRef.current.style.height = `${150}px`;
        } else {
          navSubSectionsRef.current.style.height = `${linksHeight}px`;
        }

        if (!isSelected.state) {
          navSubSectionsRef.current.className = "navSubSections";
        }
      }
    } else {
      if (navSubSectionsRef !== null) {
        if (subLinksRef.current !== null) {
          linksHeight = subLinksRef.current.getBoundingClientRect().height;
        }

        if (linksHeight < 150) {
          navSubSectionsRef.current.style.height = `${1050}px`;
        } else {
          navSubSectionsRef.current.style.height = `${linksHeight}px`;
        }

        if (!isSelected.state) {
          navSubSectionsRef.current.className = "mobileMenu";
        }
      }
    }
  }, [isSelected, windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1150 && isSelected.state) {
      setIsSelected({
        id: 0,
        state: false,
      });
    }
    if (windowWidth <= 1150) {
      setMenu(false);
    }
  }, [windowWidth]);

  return (
    <main>
      <header>
        <div className="navContainer">
          <img className="logo" src="images/logo.svg" alt="logo" />
          {windowWidth > 1150 ? (
            <Desktop
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              subLinksRef={subLinksRef}
              navSubSectionsRef={navSubSectionsRef}
            />
          ) : (
            ""
          )}

          {windowWidth < 1150 ? (
            <img
              style={!menu ? {} : { width: "6vw", height: "6vw" }}
              className="menu"
              src={`${
                !menu ? "images/icon-hamburger.svg" : "images/icon-close.svg"
              }`}
              alt="hamburger"
              onClick={() => {
                setIsSelected({
                  id: 0,
                  state: false,
                });
                setMenu(!menu);
              }}
            />
          ) : (
            ""
          )}
          {windowWidth < 1150 ? (
            <Mobile
              setMenu={setMenu}
              menu={menu}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              subLinksRef={subLinksRef}
              navSubSectionsRef={navSubSectionsRef}
            />
          ) : (
            ""
          )}
        </div>

        <h1 className="mainTitle">A modern publishing platform</h1>
        <h3 className="mainSubTitle">
          Grow your audience and build your online brand{" "}
        </h3>
        <div className="btnContainer">
          <button className="start">Start for Free</button>
          <button className="learn">Learn More</button>
        </div>
      </header>

      <section className="future">
        <h1 className="futureTitle">Designed for the future</h1>
        {windowWidth < 1150 ? (
          <img
            className="mobileEditor"
            src="images/illustration-editor-mobile.svg"
          ></img>
        ) : (
          ""
        )}
        <div className="contentContainer">
          <div className="content content1">
            <h4 className="contentTitle">Introducing an extensible editor</h4>
            <p className="contentText">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="content content2">
            <h4 className="contentTitle">Robust content management</h4>
            <p className="contentText">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </section>
      <section className="art">
        <div className="phoneContainer">
          <img
            className="phoneImage"
            src="images/illustration-phones.svg"
            alt="phones"
          />
        </div>

        <div className="artContainer">
          <h2 className="artTitle">State of the Art Infrastructure</h2>
          <div className="artText">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </div>
        </div>
      </section>
      <section className="laptop">
        <div className="contentContainerLaptop">
          <div className="content contentLaptop">
            <h4 className="contentTitle">Free, open, simple</h4>
            <p className="contentText">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="content contentLaptop">
            <h4 className="contentTitle">Powerful tooling</h4>
            <p className="contentText">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <img src="images/logo.svg" alt="Blogr logo" />
        <div className="footerNav">
          {data.map((element) => {
            const { id, title, subSections } = element;
            return (
              <div key={id} className="footerNavElement">
                <h4 className="footerNavTitle">{title}</h4>
                {subSections.map((element, index) => {
                  return (
                    <button key={index} className="footerNavBtn">
                      {element}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </footer>
    </main>
  );
}

export default App;
