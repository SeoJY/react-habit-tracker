// 클래스 방식
// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   handleAdd = event => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.formRef.current.reset();
//   }

//   render() {
//     return (
//       <form ref={this.formRef} className="habit-add-form" onSubmit={this.handleAdd}>
//         <input 
//           ref={this.inputRef}
//           type="text"
//           className="habit-add-input"
//           placeholder="Input new habit"
//         />
//         <button type="submit" className="habit-add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;

// 함수형 방식
import React, { memo } from 'react';

// memo : PureComponent와 비슷한 기능

const Habitaddform = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAdd = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="habit-add-form" onSubmit={handleAdd}>
      <input 
        ref={inputRef}
        type="text"
        className="habit-add-input"
        placeholder="Input new habit"
      />
      <button type="submit" className="habit-add-button">Add</button>
    </form>
  );
})

export default Habitaddform;