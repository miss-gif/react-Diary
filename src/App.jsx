import "./App.css";
import "./DiaryEditor.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "John",
    content: "This is",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "John",
    content: "This is",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "John",
    content: "This is",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </>
  );
}

export default App;
