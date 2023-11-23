
interface FormProps {
    user: string[]
    setUser: React.Dispatch<React.SetStateAction<string[]>>;
  }

export function HomeTesting( { user, setUser } : FormProps){

    const handleLogout = () =>{
        setUser([]);
    }
    return (
        <div>
            <h1>Welcome to the testing page - try whatever you want!</h1>
            <h2>{'its a pleasure ' + user + ', practice!'}</h2>
            <button 
                onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
}