import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./getin.style.scss"

const SignInPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user
    const [signUpDetails, setSignUpDetails] = useState([]); // State to store sign-up details

    const handleSwitchForm = () => {
        setIsSignIn(prevState => !prevState);
    };

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for form submission
        if (isSignIn) {
            // Sign In logic
            // Here you can implement the login checkup against the mock data
        } else {
            // Sign Up logic
            const formData = new FormData(event.target);
            const signUpData = {};
            formData.forEach((value, key) => {
                signUpData[key] = value;
            });
            setSignUpDetails(prevState => [...prevState, signUpData]); // Storing sign-up details
            // You can also perform validation and backend submission here
        }
    };

    const handleSignIn = (email, password) => {
        // Perform login checkup against the stored sign-up details
        const user = signUpDetails.find(data => data.email === email && data.password === password);
        if (user) {
            setLoggedInUser(user);
            console.log("Logged in as:", user.firstName); // You can modify this as needed
        } else {
            console.log("Invalid credentials. Please try again.");
        }
    };

    const handleSearch = () => {
        if (loggedInUser) {
            // Logic for land search
            console.log("Land search functionality can be triggered.");
        } else {
            console.log("Please sign in to search for land.");
        }
    };

    return (
        <div className="outer-container" style={{ backgroundColor: '#579668' }}>
            <div className="container">
                <div className="switcher">
                    <span className={isSignIn ? 'active' : ''} onClick={() => setIsSignIn(true)}>Sign In</span>
                    <span className={!isSignIn ? 'active' : ''} onClick={() => setIsSignIn(false)}>Sign Up</span>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    {isSignIn ? (
                        <div className="form-group">
                            <h2>Sign In</h2>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button type="submit" className={"signin"} onClick={() => handleSignIn(email, password)}>Sign In</button>
                        </div>
                    ) : (
                        <div className="form-group ">
                            <h2>Sign Up</h2>
                            <div className="name-inputs">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required />
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <div className="password-input">
                                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" required />
                                <span className="toggle-password" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button type="submit">Sign Up</button>
                        </div>
                    )}
                </form>
                {loggedInUser && (
                    <button onClick={handleSearch}>Search for Land</button>
                )}
            </div>
        </div>
    );
};

export default SignInPage;
