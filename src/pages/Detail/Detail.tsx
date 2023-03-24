import React from 'react';
import './Detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../../App';

interface Props {
  todoList: Todo[];
  editTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

const Detail: React.FC<Props> = (props) => {
  const { todoId } = useParams()
  const navigate = useNavigate();

  if (!todoId) {
    navigate('/');
    return (<></>);
  }

  const todo = props.todoList.find(t => t.id === parseInt(todoId, 10));

  if (todo === undefined) {
    navigate('/');
    return (<></>);
  }

  const handleChangeTitle = (e: any) => {
    console.log('e', e.target.value);
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
  const editTodo = (): void => {
    props.editTodo(todo);
    navigate('/');
  }
  const deleteTodo = (): void => {
    props.deleteTodo(todo);
    navigate('/');
  }

  return (
    <div className="flex justify-center flex-column">
      <div className="top-area">
        <p className="top-title">予定詳細</p>
      </div>
      <div className="main-area">
        <div className="my-5">
          <input
            className="input-text"
            placeholder="タイトル"
            type="text"
            defaultValue={todo.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="my-5">
          <textarea
            className="input-textarea"
            placeholder="内容"
            defaultValue={todo.description}
            name=""
            id=""
            cols={30}
            rows={10}
            onChange={handleChangeDescription}
          ></textarea>
        </div>
        <div className="flex justify-between my-5 width-full">
          <input className="input-date" defaultValue={todo.startDate} type="date" onChange={handleChangeStartDate} />
          <p>~</p>
          <input className="input-date" defaultValue={todo.endDate} type="date" onChange={handleChangeEndDate} />
        </div>

        <div className="flex flex-row gap-16">
          <button className="edit-button positive" onClick={editTodo}>更新</button>
          <button className="delete-button critical" onClick={deleteTodo}>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;