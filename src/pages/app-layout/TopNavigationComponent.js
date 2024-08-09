import { signOut } from "aws-amplify/auth";
import React from "react";

const TopNavigationComponent = () => {
    async function handleSignOut() {
        try {
            await signOut();
            // Optionally, redirect or show a notification
        } catch (error) {
            console.error("Sign out error:", error);
        }
    }

    return (
        <nav style={styles.nav}>
            <img src="/path/to/logo.png" alt="Logo" style={styles.logo} />
            <button style={styles.button} type="button" onClick={handleSignOut}>
                Sign out
            </button>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#232F3E',
        color: '#fff',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        height: '40px', // Adjust based on your logo size
        width: 'auto',
    },
    button: {
        padding: '8px 16px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#1D72F3',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default TopNavigationComponent;
