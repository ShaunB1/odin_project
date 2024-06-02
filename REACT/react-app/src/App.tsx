function ListItem(props: any) {
  return <li>{props.animal}</li>
}

function List(props: any) {
  return (
    <ul>
      {props.animals.map((animal: any) => {
        return <ListItem key={animal} animal={animal} />
      })}
    </ul>
  )
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        <List animals={animals} />
      </ul>
    </div>
  )
}

export default App
