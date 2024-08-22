"use client"
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div>
        <CountUp 
            end={amount}
            decimal=','
            decimals={2}
            prefix='$'
        />
    </div>
  )
}

export default AnimatedCounter