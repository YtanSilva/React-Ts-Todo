import React, { useEffect, useState } from "react";
import { Item } from "./types/Item";
import * as S from "./App.styles";
import ListItem from "./Components/ListTodo";
import AddTodo from "./Components/AddTodo";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const addTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleTask = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  return (
    <S.Container>
      <S.Box>
        <S.Heading>My Todo List</S.Heading>

        <AddTodo onEnter={addTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTask} />
        ))}
      </S.Box>
    </S.Container>
  );
};

export default App;
