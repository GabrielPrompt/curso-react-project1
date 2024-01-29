import './styles.css'

export const PostCard = ({body, title, id, cover }) => {
    return (
        <div className='post'>
            <img src={cover} alt={title}></img>
            <div key={id} className='post-content'>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}