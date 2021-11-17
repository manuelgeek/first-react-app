import useCount from "../hooks/useCount";


function Count() {
  let {addCount, count, removeCount} = useCount()

    return (
      <div>
        <h1>Test Me {count}</h1>
        <button onClick={addCount}>Count</button>
        <button onClick={removeCount}>Un Count</button>
      </div>
    );
}

export default Count;
