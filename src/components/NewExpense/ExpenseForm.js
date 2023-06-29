import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle();
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label >Title</label>
          <input type='text' onChange={titleChangeHandler} /> {/*onChange 이벤트는 기본적으로 같은 기능을 하고 모든 키 입력에도 트리거가 된다
          모든 입력 타입에 같은 이벤트를 사용할 수 있다.
          ex) 드롭다운메뉴 */}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;