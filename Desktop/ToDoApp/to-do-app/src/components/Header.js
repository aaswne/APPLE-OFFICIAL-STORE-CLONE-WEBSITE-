import React from "react";
function Header() {
    return (
        <div className='Header_Bar'>

            <div className="Left-Header">

                <h1 id="headerText">ToDoApp</h1>

            </div>

            <div className="Center-Header">

                <button id="addTask"> + Add Task</button>

            </div>

            <div className="Right-Header">

                <button id="profileButton">
                    <img src="" alt="" />pro
                </button>


            </div>

        </div>
    );
}

export default Header;