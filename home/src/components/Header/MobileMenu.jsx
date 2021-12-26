import PropTypes from "prop-types";
import clsx from "clsx";
import useStyles from "./header-style";
import routeLink from "../../../public/text/link";
import navMenu from "../../../public/text/menu";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

const MobileMenu = (props) => {
  const classes = useStyles();
  const { toggleDrawer, open, t, router } = props;

  const SideList = () => {
    return (
      <div
        className={classes.mobileNav}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <div className={clsx(classes.menu, open && classes.menuOpen)}>
          <List component="nav">
            {navMenu.map((item, index) => {
              return (
                <ListItem
                  button
                  component="a"
                  onClick={() => {
                    // Handle language from 404 page
                    if (router.route == "/404") {
                      router.push(`/#${item.en}`);
                    } else {
                      router.push(`#${item.en}`);
                    }
                  }}
                  key={index.toString()}
                  style={{ animationDuration: index * 0.15 + "s" }}
                >
                  <ListItemText
                    primary={item[`${router.locale}`]}
                    className={classes.menuList}
                  />
                </ListItem>
              );
            })}
            <Divider className={classes.dividerSidebar} />
            {[
              {
                en: "login",
                fa: "وارد شدن",
              },
              {
                en: "register",
                fa: "ثبت نام",
              },
            ].map((item, index) => {
              return (
                <ListItem
                  button
                  component="a"
                  href={routeLink.panel[`${item.en}_${router.locale}`]}
                  key={index.toString()}
                  style={{ animationDuration: navMenu.length * 0.15 + "s" }}
                >
                  <ListItemText
                    primary={item[`${router.locale}`]}
                    className={classes.menuList}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  };
  return (
    <SwipeableDrawer
      anchor={router.locale == "fa" ? "right" : "left"}
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{ paper: classes.paperNav }}
      SlideProps={{ direction: router.locale == "fa" ? "left" : "right" }}
    >
      <SideList />
    </SwipeableDrawer>
  );
};
MobileMenu.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
};

export default MobileMenu;
