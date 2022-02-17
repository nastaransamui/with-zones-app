import styles from "./Breadcrumb.module.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Countdown from './Countdown'

export default function SimpleBreadcrumbs() {
  const location = useLocation();
  const Url = window.location.pathname.split("/");
  const [UrlElems, setUrlElems] = useState(Url.splice(1, Url.length + 1));
  
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      const UrlParamArray = location.pathname.split("/");
      UrlParamArray.splice(1, 2);
      
      setUrlElems((prev) => {
        return UrlParamArray.map((item) => {
          item = item.split("?")[0];
          return item;
        });
      });
    }
    return () => {
      isMount = false;
    };
  }, [location]);

  

  return (
    <div className={styles.bread}>
      <Breadcrumbs aria-label="breadcrumb">
        {UrlElems.map((UrlElem, i) => {
          let UrlElemCap =
            UrlElem.charAt(0).toUpperCase() + UrlElem.substring(1);
          return (
            <Link
              style={{ cursor: "pointer", fontSize: "1em" }}
              key={i}
              to={`${UrlElems.slice(0, i + 1).join("/")}`}
            >
              {UrlElemCap}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Countdown />
    </div>
  );
}
