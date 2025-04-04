import { useState } from 'react'

const Title = (props) =>{
  return <h1>{props.name}</h1>
}
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
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

const Staticts = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total == 0 ? 0 : (good - bad) / total
  const positive = total == 0 ? 0 : (good / total) * 100

  if (total == 0) {
    return <p></p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive + "%"} />
      </tbody>
    </table>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const mostVotes = Math.max(...votes)
  const topIndex = votes.indexOf(mostVotes)
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
const name ={
  Name : "Anecdote of today"
}
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
      <Staticts good={good} neutral={neutral} bad={bad} />
      <p></p>
      <p></p>
      <div>
        <Title name={name.Name}/>
        {anecdotes[selected]}
        <p></p>
        <Button handleClick={() => setSelected(selected - 1)} text="FormerAnecdote" />

        <Button handleClick={handleVote} text="Vote" />
        <Button handleClick={() => setSelected(selected + 1)} text="NextAnecdote" />
        {mostVotes > 0 && (
          <div>
            <h2>La anécdota más votada es:</h2>
            <p>{anecdotes[topIndex]}</p>
            <p>Con {mostVotes} votos</p>
          </div>
        )}
      </div>
    </div>

  )
}

export default App
