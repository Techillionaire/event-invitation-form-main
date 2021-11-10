import React from 'react'

const Spinner = () => {
    return (
        <p className="lead mb-4">
            <span className="spinner-border" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </span>
            <span className="mx-1">
                Submitting form...
            </span>
        </p>
    )
}

export default Spinner
