import React  from 'react'
import { useSelector } from 'react-redux'
import InfoCard from './InfoCard/InfoCard'

export default function Leaderboard() {
    const users = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)
                  .sort((a,b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))))
    return (
        <div>
            <div>
                {
                users && users.length > 0  &&
                users.map(user =>  <InfoCard data={user} key={user.id} />)
                }
            </div>
        </div>
    )
}