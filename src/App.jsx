import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Statics = (props) => {
  return <h1>{props.statics}</h1>
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <p>{text}: {value}</p>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total == 0 ? 0 : (good - bad) / total
  const positive = total == 0 ? 0 : (good / total) * 100

  if (total == 0) {
    return <p></p>
  }

  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive +"%"} />
    </div>
  )
}

const App = () => {
  const course = {
    Title: 'Give feedback'
  }
  const statics = {
    Statics: "Statistics of page"
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header course={course.Title} />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Appalling" />
      <Statics statics={statics.Statics} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
