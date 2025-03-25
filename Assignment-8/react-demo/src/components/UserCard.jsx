// const UserCard = (data) => {
const UserCard = ( { user }) => {
    // console.log(data.user)
    console.log(user)
    const { name, age, mobile, email }= user
    return (
        <div className="card m-2" style={{width: '200px'}}>
            <div className="card-body">
            <h1>{name}</h1>
            <label>{age}</label>
            <p>{mobile}</p>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default UserCard