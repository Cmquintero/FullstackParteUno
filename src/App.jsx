import { useState } from 'react'

const Header = (props) => {
  return <h1> {props.course} </h1>;
};

const App = () => {
  const course= {
    Title: 'Give feedback'
  }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGood = newGood=>{
    console.log(good)
  }
console.log("ojito mario ",)

//guia:
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>


)


  return (
    <div>
      <Header course={course.Title} />
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="appalling" />
    </div>
  )
}
export default App