export default function Post({post}){
    return (
        <div className="card">
            <p>{post.id}</p>
            <h4>{post.title}</h4>
            <h3>{post.body}</h3>
            <p>{post.body}</p> 
        </div>
    )
}