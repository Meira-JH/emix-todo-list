import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#efefef",
    maxHeight: "170px",
    overflowY: "auto",
    color: "grey",
    fontSize: "30px",
  },
  listItem: {
    height: "40px",
  },
  listText: {
    fontSize: "16px",
    textDecoration: "line-through",
  },
  checkBox: {
    padding: "5px",
  },
  icon: {
    padding: "5px",
  },
}));

const CheckboxListDone = ({ taskList, taskDone, taskToDelete }) => {
  const classes = useStyles();

  const handleToggle = (task) => {
    if (task.done) {
      taskDone(task.id);
    }
  };

  return (
    <List className={classes.root}>
      {taskList
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((task, index) => {
          if (task.done) {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem
                className={classes.listItem}
                key={index}
                role={undefined}
                dense
                button
                onClick={() => handleToggle(task)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    color="default"
                    className={classes.checkBox}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={task.description}
                  classes={{ primary: classes.listText }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    className={classes.icon}
                    onClick={() => taskToDelete(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          }
        })}
    </List>
  );
};

export default CheckboxListDone;
