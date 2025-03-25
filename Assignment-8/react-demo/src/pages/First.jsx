import UserCard from "../components/UserCard"

const First = () => {
    let name1 = "Ram"
    let h1 = <h1>This is a Heading Tag</h1> 

    // console.log(name)
    // console.log(h1)

    let myStyle = {
        color:'blue',
        backgroundColor: 'black'
    }

    let name = "Arjun"
    let email = "arjun@gmail.com"

    // let user = {
    //     name: "Bimal",
    //     age: 20,
    //     mobile: 1212121212,
    //     email: "bimal@gmail.com"
    // }

    let users = [
        { name: "Bimal", age: 20, mobile: 1212121212, email: "bimal@gmail.com"},
        { name: "ram", age: 22, mobile: 33333333, email: "ram@gmail.com"},
        { name: "Shayam", age: 23, mobile: 44444444, email: "shayam@gmail.com"},
        { name: "Arjun", age: 19, mobile: 55555555, email: "arjun@gmail.com"}
    ]
     
    return (
        // Fragment
    <>
        {/* <h1 className="heading">Hello React!</h1>
        <h2 style={myStyle}>React is a library.</h2>
        <h3 style={{color: 'green', textDecoration: 'underline'}}>{name}</h3>
        <br />
        <p className="text-danger bg-info">Some Text</p>
        {h1}
        <label htmlFor="" ></label>
        <input /> */}

        {/* <h1>Ram</h1>
        <p>ram@gmail.com</p>
        <h1>Sam</h1>
        <p>sam@gmail.com</p> */}

        
        
        {/* <UserCard name="Ram" email="ram@gmail.com" />
        <UserCard name="Sam" email="sam@gmail.com" />
        <UserCard name={name} email={email} /> */}

        {/* <UserCard user={user} /> */}

        {
            users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))
        }
    </>
    )
}

export default First