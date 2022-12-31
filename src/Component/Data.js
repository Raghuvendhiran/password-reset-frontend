import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserData = () => {

    const navigate = useNavigate();
    const [user, setuser] = useState({});

    useEffect(() => {
        getEmp();
    }, [])

    const getEmp = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BaseURl}/Users`);
            if (res) {
                setuser(res.data)
            }
        } catch (err) {
            console.log("Data Getting Error", err);
        }
    };

    const handleSignout = () => {
        navigate("/signOut")
    };


    return (
        
        <div className="mt-5 container d-grid gap-2 col-8">
            <h4 className="d-flex justify-content-center pb-2" style={{ backgroundColor: "#FF9933" }}>User List</h4>
            <div className="d-flex justify-content-end">
                <Link className=" btn btn-primary " type="submit" to="/" onClick={handleSignout}>Sign Out</Link>
            </div>
            <table className="mt-5 table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>                   
                    </tr>
                </thead>
                <tbody>
                    {user.length && user.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default UserData;

