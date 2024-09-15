import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
    const { token, id } = useParams(); // Get token and id from the URL
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to verify token
        const verifyToken = async () => {
            try {
                const response = await axios.get(`https://tadbackend.onrender.com/user/verify/${id}/${token}`); // Call backend route
                setMessage(response.data.message);
                setLoading(false);

                // After 3 seconds, navigate to the next registration step with the ID in the URL
                setTimeout(() => {
                    navigate(`/registration/${id}`); // Pass the user ID in the URL
                }, 3000);
            } catch (error) {
                setMessage("Token verification failed or is expired.");
                setLoading(false);
            }
        };

        verifyToken();
    }, [id, token, navigate]);

    return (
        <div className="verification-page">
            {loading ? (
                <div className="text-center mt-96">
                    <p className="text-3xl text-blue-900">Verifying your account...</p>
                </div>
            ) : (
                <div className="text-center mt-96">
                    <p className="text-3xl text-blue-900">{message}</p>
                </div>
            )}
        </div>
    );
};

export default Verify;
