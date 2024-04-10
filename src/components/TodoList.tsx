import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";

// components
import { FormInput } from "./";

interface TodoListProps {
  addTodo?: boolean;
  height?: string;
}

interface TodoDataItems {
  id: number;
  text: string;
  done: boolean;
}

const TodoList = ({ addTodo, height }: TodoListProps) => {
  const addTodos = addTodo ? addTodo : false;

  // default todo data
  const [todoData, setTodoData] = useState<Array<TodoDataItems>>([
    {
      id: 1,
      text: "Design One page theme",
      done: false,
    },
    {
      id: 2,
      text: "Build a js based app",
      done: true,
    },
    {
      id: 3,
      text: "Creating component page",
      done: true,
    },
    {
      id: 4,
      text: "Testing??",
      done: true,
    },
    {
      id: 5,
      text: "Hehe!! This looks cool!",
      done: false,
    },
    {
      id: 6,
      text: "Create new version 3.0",
      done: false,
    },
    {
      id: 7,
      text: "Build an angular app",
      done: true,
    },
    {
      id: 8,
      text: "Vue Admin & Dashboard",
      done: false,
    },
  ]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newTodo: yup.string().required("Please enter your task name"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * Saves the todo
   */
  const saveTodo = (e: any, values: any) => {
    const newTodo = {
      id: todoData.length + 1,
      text: values.target[0].value,
      done: false,
    };
    setTodoData([newTodo, ...todoData]);
    reset();
  };

  /**
   * Returns the remaining todos
   */
  const getInprogressTodos = () => {
    return todoData.filter((item) => item.done === false);
  };

  /**
   * Archives the todos
   */
  const archiveTodos = () => {
    setTodoData(todoData.filter((item) => item.done !== true));
  };

  /**
   * Toggle the status
   * @param todoItem todo item
   */
  const toggleTodo = (todoItem: TodoDataItems, index: number) => {
    const newTodoData = (todoData || []).map((todo, i) => {
      return index === i ? Object.assign(todo, { done: !todoItem.done }) : todo;
    });
    setTodoData(newTodoData);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4
            className={classNames("header-title", addTodos ? "mb-3" : "mb-2")}
          >
            Todo
          </h4>

          <div className="todoapp">
            {addTodos ? (
              <>
                <Row>
                  <Col>
                    <h5 id="todo-message">
                      <span id="todo-remaining">
                        {getInprogressTodos().length}
                      </span>{" "}
                      of <span id="todo-total">{todoData.length}</span>{" "}
                      remaining
                    </h5>
                  </Col>
                  <Col className="col-auto">
                    <Button
                      className="float-end btn-sm"
                      variant="light"
                      id="btn-archive"
                      onClick={archiveTodos}
                    >
                      Archive
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <SimpleBar style={{ maxHeight: height }}>
                      <ul
                        className="list-group list-group-flush todo-list"
                        id="todo-list"
                      >
                        {(todoData || []).map((todo, index) => {
                          return (
                            <li
                              key={index}
                              className="list-group-item border-0 ps-0"
                            >
                              {todo.done ? (
                                <div className="form-check mb-0">
                                  <input
                                    type="checkbox"
                                    className="form-check-input todo-done"
                                    id={String(todo.id)}
                                    checked={todo.done}
                                    onChange={() => toggleTodo(todo, index)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={String(todo.id)}
                                  >
                                    <s>{todo.text}</s>
                                  </label>
                                </div>
                              ) : (
                                <div className="form-check mb-0">
                                  <input
                                    type="checkbox"
                                    className="form-check-input todo-done"
                                    id={String(todo.id)}
                                    checked={todo.done}
                                    onChange={() => toggleTodo(todo, index)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={String(todo.id)}
                                  >
                                    {todo.text}
                                  </label>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </SimpleBar>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <form
                      name="todo-form"
                      id="todo-form"
                      onSubmit={handleSubmit(saveTodo)}
                      className="mt-3"
                    >
                      <Row>
                        <Col>
                          <FormInput
                            type="text"
                            name="newTodo"
                            className="form-control"
                            placeholder="Add new todo"
                            register={register}
                            key="newTodo"
                            errors={errors}
                            control={control}
                          />
                        </Col>
                        <Col className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            Add
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </>
            ) : (
              <Row>
                <Col>
                  <SimpleBar style={{ maxHeight: height }}>
                    <ul
                      className="list-group list-group-flush todo-list"
                      id="todo-list"
                    >
                      {(todoData || []).map((todo, index) => {
                        return (
                          <li
                            key={index}
                            className="list-group-item border-0 ps-0"
                          >
                            {todo.done ? (
                              <div className="form-check mb-0">
                                <input
                                  type="checkbox"
                                  className="form-check-input todo-done"
                                  id={String(todo.id)}
                                  checked={todo.done}
                                  onChange={() => toggleTodo(todo, index)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={String(todo.id)}
                                >
                                  <s>{todo.text}</s>
                                </label>
                              </div>
                            ) : (
                              <div className="form-check mb-0">
                                <input
                                  type="checkbox"
                                  className="form-check-input todo-done"
                                  id={String(todo.id)}
                                  checked={todo.done}
                                  onChange={() => toggleTodo(todo, index)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={String(todo.id)}
                                >
                                  {todo.text}
                                </label>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </SimpleBar>
                </Col>
              </Row>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoList;
