import './App.css'
import { XFollowCard } from './XFollowCard.jsx'



const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true
    }
]



export function App() {

    return (

        <div className='group-FollowCard'>
            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <XFollowCard 
                            initialIsFollowing={isFollowing}
                            userName={userName}
                            key={userName}>
                            {name}
                        </XFollowCard>
                    )
                })
            }
        </div>
    )
}