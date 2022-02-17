import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  Collapse
} from '@mui/material'

import { useHistory } from "react-router-dom";
import * as Icons from "@mui/icons-material";
import { createElement, useState, Fragment } from "react";
import { sidbarTop, sidebarBottom } from "../../../public/text/sidebarRoutes";

import { useTranslation } from "react-i18next";
import sidebarStyle from './sidebar-style';


export default function SidebarLists() {
  const { t } = useTranslation("dashboard");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const classes = sidebarStyle();
  const handleClick = (route) => {
    if (route.children.length == 0) history.replace(route.url);
    setOpen((prevState) => {
      return { [route.name]: !prevState[route.name] };
    });
  };

  return (
    <>
      <List component="nav" >
        {sidbarTop.map((route, index) => {
          return(
            <Fragment key={index}>
            <Tooltip
              title={t(`sidebar`)[route.name]}
              placement="right"
              key={index.toString()}
            >
              <ListItem
                button
                onClick={() => {
                  handleClick(route);
                }}
              >
                <ListItemIcon>{createElement(Icons[route.icon])}</ListItemIcon>
                <ListItemText primary={t(`sidebar`)[route.name]} />
                {route.children.length !== 0 && (
                  <>
                    {open[route.name] ? (
                      <>{createElement(Icons["ExpandLess"])}</>
                    ) : (
                      <>{createElement(Icons["ExpandMore"])}</>
                    )}
                  </>
                )}
              </ListItem>
            </Tooltip>
            {route.children.map((childRoute, i) => {
              return (
                <Fragment key={i}>
                  <Collapse in={open[route.name]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Tooltip
                        title={t(
                          `${route.name}_children.${childRoute.name}`
                        )}
                        placement="right"
                        key={index.toString()}
                      >
                        <ListItem
                          button
                          className={classes.nested}
                          onClick={() => history.replace(childRoute.url)}
                        >
                          <ListItemIcon>
                            {createElement(Icons[childRoute.icon])}
                          </ListItemIcon>
                          <ListItemText
                            primary={t(
                              `${route.name}_children.${childRoute.name}`
                            )}
                          />
                        </ListItem>
                      </Tooltip>
                    </List>
                  </Collapse>
                </Fragment>
              );
            })}
          </Fragment>
          )
        })}
      </List>
      <Divider />
      <List>
        {sidebarBottom.map((route, index) => (
          <Tooltip
            title={t(`${route.name}`)}
            placement="right"
            key={index.toString()}
          >
            <ListItem button onClick={() => history.replace(route.url)}>
              <ListItemIcon>{createElement(Icons[route.icon])}</ListItemIcon>
              <ListItemText primary={t(`${route.name}`)} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </>
  );
}
