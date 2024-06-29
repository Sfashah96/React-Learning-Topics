const App = () => {
    const handleChange = (item) => {
        console.log(item);
        console.log(item.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default App
