import React, { useState } from 'react'
import './Calculator.css'

export function Calculator() {
  const element = [
    { AC:function handleReset(){}},
    {'%': function percent(number) {
      return number/100
    }},
{ "÷":'/' },
{ 7:7 } , 
{8:8},
  {9:9},
  {'×':'*'},
    { 4:4},
  {5:5},
  {6:6},
  {'-':'-'}
  {1:1},
  {2:2},
  {3:3},
  {'+':'+'},
    { 0: 0 },
    { '.': '.' },
    {'=':'='}]
  const [show, setShow] = useState([])

  function handleReset() {
    setShow([])
  }


  return (
    <div>
      <p>{show.toString}</p>
      
    </div>
  )
}
