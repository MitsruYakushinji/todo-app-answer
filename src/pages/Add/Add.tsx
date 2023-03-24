import React from 'react';
import './Add.css';
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../App';

interface Props {
  addTodo: (todo: Todo) => void;
}

const Add: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const todo: Todo = { id: 0, status: 0, title: '', description: '', startDate: '', endDate: '' };

  const handleChangeTitle = (e: any) => {
    todo.title = e.target.value;
  };
  const handleChangeDescription = (e: any) => {
    todo.description = e.target.value;
  };
  const handleChangeStartDate = (e: any) => {
    todo.startDate = e.target.value;
  };
  const handleChangeEndDate = (e: any) => {
    todo.endDate = e.target.value;
  };
  const addTodo = (): void => {
    props.addTodo(todo);
    navigate('/');
  }

  return (
    <div className="flex justify-center flex-column">
      <div className="top-area">
        <p className="top-title">新規登録</p>
      </div>
      <div className="main-area">
        <div className="my-5">
          <input
            className="input-text"
            placeholder="タイトル"
            type="text"
            onChange={handleChangeTitle}
          />
        </div>
        <div className="my-5">
          <textarea
            className="input-textarea"
            placeholder="内容"
            name=""
            id=""
            cols={30}
            rows={10}
            onChange={handleChangeDescription}
          ></textarea>
        </div>
        <div className="flex justify-between my-5 width-full">
          <input className="input-date" type="date" onChange={handleChangeStartDate} />
          <p>~</p>
          <input className="input-date" type="date" onChange={handleChangeEndDate} />
        </div>

        <button className="add-button primary" onClick={addTodo}>登録</button>
      </div>
    </div>
  );
};

export default Add;
