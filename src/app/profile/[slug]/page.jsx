

export default function UserProfile({params}){
    return(
        <>
        <div>
            <h1>User Profile</h1>
            <p>id = {params.slug}</p>
        </div>
        </>
    )
}