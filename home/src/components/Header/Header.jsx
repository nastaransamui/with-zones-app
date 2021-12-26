import {
  AppBar,
  Button,
  Container,
  Divider,
  Hidden,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { forwardRef, Fragment, useEffect, useState } from "react";
import useStyles from "./header-style";
import clsx from "clsx";
import { useTheme } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import routeLink from "../../../public/text/link";
import navMenu from "../../../public/text/menu";
import { useTranslation } from "next-i18next";
import MobileMenu from "./MobileMenu";
import Router from "next/router";
import Settings from "./Settings";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    en_name: name.en,
    fa_name: name.fa,
    url,
    offset,
  };
}

const LinkBtn = forwardRef((props, ref) => {
  const { href, children } = props;
  return (
    <AnchorLink
      href={href}
      {...props}
      style={{ cursor: "pointer" }}
    >
      {children}
    </AnchorLink>
  );
});

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation("home");
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 50;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      isMount = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuList] = useState([
    createData(navMenu[0], "#" + navMenu[0].en, 100),
    createData(navMenu[1], "#" + navMenu[1].en, 100),
    createData(navMenu[2], "#" + navMenu[2].en, 100),
    createData(navMenu[3], "#" + navMenu[3].en, 100),
    createData(navMenu[4], "#" + navMenu[4].en, 100),
    createData(navMenu[5], "#" + navMenu[5].en, 100),
    createData(navMenu[6], "#" + navMenu[6].en, 100),
    createData(navMenu[7], "#" + navMenu[7].en, 0),
  ]);

  // Handle scroll to element from non "/" link
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (router.asPath.includes("#")) {
        let id = Router.asPath.match(/#([a-z0-9]+)/gi)[0].slice(1);
        let elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
          router.push("/", undefined, { shallow: true, scroll: false });
        }
      }
    }
    return () => {
      isMount = false;
    };
  }, [router]);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const { invert } = props;

  return (
    <Fragment>
      {isMobile && (
        <MobileMenu
          t={t}
          toggleDrawer={handleOpenDrawer}
          open={openDrawer}
          router={router}
        />
      )}
      <AppBar
        component="header"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          invert && classes.invert,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop} className={classes.headerContainer}>
          <div className={classes.headerContent}>
            <nav
              className={clsx(
                classes.navMenu,
                classes.navLogo,
                invert && classes.invert,
                openDrawer && classes.openDrawer
              )}
            >
              {isMobile && (
                <IconButton
                  onClick={() => handleOpenDrawer()}
                  className={clsx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <Link href="/">
                    <img
                      src="/static/logo.svg"
                      alt="logo"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                ) : (
                  <Link href="/">
                    <img
                      src="/static/logo.svg"
                      alt="logo"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                )}
              </div>
              {isDesktop && (
                <>
                  {router.asPath == "/" ? (
                    <Scrollspy items={navMenu.map((t) => t.en)} currentClassName="active">
                      {menuList.map((item) => {
                        return (
                          <li key={item.id.toString()}>
                            {invert ? (
                              <Button
                                offset={item.offset || 0}
                                href={`/${item.url}`}
                              >
                                {item[`${router.locale}_name`]}
                              </Button>
                            ) : (
                              <Button
                                component={LinkBtn}
                                offset={item.offset || 0}
                                href={item.url}
                                router={router}
                              >
                                {item[`${router.locale}_name`]}
                              </Button>
                            )}
                          </li>
                        );
                      })}
                    </Scrollspy>
                  ) : (
                    <>
                      {menuList.map((item) => {
                        return (
                          <Button
                            key={item.id.toString()}
                            style={{
                              color:
                                theme.palette.mode === "light"
                                  ? theme.palette.common.black
                                  : theme.palette.common.white,
                            }}
                            onClick={() => {
                              router.push(`/${item.url}`);
                            }}
                          >
                            {item[`${router.locale}_name`]}
                          </Button>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </nav>
            <Hidden mdDown>
              <Divider className={classes.divider} />
            </Hidden>
            <nav className={clsx(classes.navMenu, classes.navAuth)}>
              <Hidden xsDown>
                <Button href={routeLink.panel[`login_${router.locale}`]} className={classes.login}>
                  {t("header.header_login")}
                </Button>
                <Button
                  href={routeLink.panel[`register_${router.locale}`]}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  {t("header.header_register")}
                </Button>
              </Hidden>
              <Settings invert={invert} t={t} router={router} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.defaultProps = {
  sticky: false,
  invert: false,
};
