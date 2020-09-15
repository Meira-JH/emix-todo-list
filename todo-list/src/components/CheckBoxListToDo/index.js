import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { EditInput } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#efefef",
    maxHeight: "180px",
    overflowY: "auto",
    color: "grey",
    listStyle: "none outside none",
    margin: "0",
  },
  listItem: {
    height: "40px",
  },
  listText: {
    fontSize: "16px",
  },
  checkBox: {
    padding: "5px",
  },
  icon: {
    padding: "5px",
    marginLeft: "20px",
    zIndex: "2",
  },
}));

const CheckBoxListToDo = ({
  taskList,
  taskToEdit,
  taskUpdate,
  taskToDelete,
  taskDone,
}) => {
  const classes = useStyles();
  const [editText, setEditText] = React.useState("");

  const handleToggle = (task) => {
    if (!task.done) {
      taskDone(task.id);
    }
  };

  useEffect(() => {
    setEditText("")
  }, [taskToEdit])

  return (
    <List className={classes.root}>
      {taskList
        ? taskList
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((task, index) => {
              if (!task.done) {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  <Fragment key={index}>
                    {task.edit ? (
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
                            ripple="false"
                            edge="start"
                            checked={task.done}
                            tabIndex={-1}
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
                            onClick={() => taskToEdit(task.id)}
                          >
                            <Edit />
                          </IconButton>
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
                    ) : (
                      <ListItem
                        className={classes.listItem}
                        key={index}
                        role={undefined}
                        dense
                        button
                      >
                        <ListItemIcon>
                          <Checkbox
                            ripple="false"
                            edge="start"
                            checked={task.done}
                            tabIndex={-1}
                            inputProps={{ "aria-labelledby": labelId }}
                            color="default"
                            className={classes.checkBox}
                          />
                        </ListItemIcon>
                        <EditInput
                          value={editText}
                          onChange={(event) => setEditText(event.target.value)}
                          onKeyDown={(event) =>
                            event.keyCode === 13
                              ? taskUpdate(
                                  {
                                    id: task.id,
                                    description: editText,
                                  },
                                  setEditText("")
                                )
                              : event
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            className={classes.icon}
                            onClick={() => taskToEdit(task.id) }
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            className={classes.icon}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Fragment>
                );
              }
            })
        : ""}
    </List>
  );
};

export default CheckBoxListToDo;
