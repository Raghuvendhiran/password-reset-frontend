import React from 'react';


function Header() {
  return (
    <div style={{ backgroundColor: "#FF9933" }} >
      <header className=" container d-flex flex-wrap align-items-center  justify-content-md-between py-3 mb-4 border-bottom">
        <div className="nav col-12 mb-2 d-flex justify-content-center mb-md-0">
          <h5 className="text-white px-2 ">Home</h5>
        </div>
      </header>     
    </div>

  )
}

export default Header;