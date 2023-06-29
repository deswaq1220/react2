import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)
  // 첫번째 현재요소상태값 두번째 그것을 업데이트하는 함수
  const clickHandle = () => {
    setTitle('updated')
    console.log(title); //state를 업데이트하는 함수를 호출 했을때 사실상 바로 값을 바꾸지 않음 
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;