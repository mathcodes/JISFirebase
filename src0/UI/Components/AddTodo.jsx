/* The AddTodo component
Since RRF creates a document for each authenticated user in a users collection, we will create another collection called todos inside each user document. There, each to-do item can be stored as a document with its own unique ID.

If you’re unfamiliar with how documents, collections, etc. work in Firestore, you can check out the Firebase docs. We will use another RRF Hook called useFirestore, which returns a firestore object we can use to perform Firestore operations.

Each to-do item will contain three properties:

isDone – to indicate whether or not the to-do task has been accomplished
title – the title of the to-do item
todoID – a unique ID used to identify each to-do item
So after a new to-do item has been added, we will grab the ID assigned by Firebase to that item’s document and set it as the value for the to-do item’s todoID property. Here’s what AddTodo should look like:
 */
import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const AddTodo = () => {
  const [presentToDo, setPresentToDo] = useState("");
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === "addTodo") {
      setPresentToDo(value);
    }
  };
  const addNewTodo = (todo) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: todo,
        isDone: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });
    setPresentToDo("");
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="addTodo"
          value={presentToDo}
          onChange={handleChange}
        />
        <button className="btn"
          onClick={(event) => {
            event.preventDefault();
            addNewTodo(presentToDo);
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
