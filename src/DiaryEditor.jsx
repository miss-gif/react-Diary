import React, { useState } from "react";

import "./DiaryEditor.css";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("제목을 입력해주세요");
      return;
    }

    if (state.content.length < 1) {
      alert("내용을 입력해주세요");
      return;
    }
    alert("저장 성공!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          type="text"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
        <div>
          <textarea
            name="content"
            value={state.content}
            onChange={handleChangeState}
          ></textarea>
        </div>
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
