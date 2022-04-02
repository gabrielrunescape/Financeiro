import React from "react";

const Api = ({ urlParam }) => (
    <>
        <div className="container">
            <h1 className="title">Blog pages</h1>

            {urlParam ? <p>Url Parameter: #???</p> : null}
        </div>
    </>
);

export default Api;
