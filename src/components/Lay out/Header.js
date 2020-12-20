import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={titleStyle}>Boiler Type</h1>
        </header>
    )
}
const titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#094455',
    textDecoration: 'underline', 
    textAlign: 'center',
    marginBottom: '20px' 
}
export default Header;