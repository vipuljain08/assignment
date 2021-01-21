import Card from './Card'
import './Cards.css'

function Cards() {
    const info = [{
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure inventore saepe eum mollitia odit magni?',
        btnText: 'Discover'
    }, {
        title: 'Title 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure inventore saepe eum mollitia odit magni?',
        btnText: 'Get Started'
    }]
    const imgUrl = ['https://images.unsplash.com/photo-1557597537-dd3365c535a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']
    return (
        <div className='card-container'>
            <Card imgSrc={imgUrl[0]} info={info[0]} />
            <Card imgSrc={imgUrl[1]} info={info[1]} />
        </div>
    )
}

export default Cards