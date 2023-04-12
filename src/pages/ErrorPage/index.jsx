import React from "react"
const ErrorPage = () => {
    return (
        <div className="container">
            <div style={{ background: '#fff', padding: '50px', marginTop: '100ox' }}>
                <span class="display-1 d-block"><center>404</center></span>
                <div class="mb-4 lead"><center>The page you are looking for was not found.</center></div>
                <a href="/" class="btn btn-block btn-link">Back to Home</a>
            </div>
        </div>
    )
}


export default ErrorPage;