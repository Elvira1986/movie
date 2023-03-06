import "./App.css";

const App = () => {
  const name = "Ella";
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      {name ? (
        <>
          <h1>This is {name}!</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
};

export default App;
