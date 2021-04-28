import React from 'react';


function Profile({fullName,bio,profession,children,HandleName}) {
    
    return (
        <div>
            <HandleName></HandleName>
            {children}
            <h1 style={{color:"pink" }}>{fullName}</h1>
            <h3 style={{color:"red",fontFamily:"'Dancing Script', cursive"}}>{profession}</h3>
            <h2 style={{textAlign:"justify",fontFamily:"'Dancing Script',monospace", margin:"15px"}}>{bio}</h2>
            
        </div>
    );
}

export default Profile;