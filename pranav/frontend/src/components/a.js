import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckinApproval = () => {
    const [checkinApproval, setCheckinApproval] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/checkin_approval`)
            .then(response => {
                console.log(response.data);
                setCheckinApproval(response.data);
            })
            .catch(error => {
                console.error('Error fetching checkin_approval:', error);
                setError('Error fetching checkin approval');
            })
            .finally(() => setLoading(false));
    }, []);

    const handleApprove = (id, start_time) => {
        axios.post(`http://localhost:5000/checkin_approval/approve`, { id, start_time })
            .then(response => {
                console.log(response.data);
                // Remove the approved checkin from the list
                setCheckinApproval(checkinApproval.filter(checkin => checkin.id !== id));
                // window.alert('Checkin approved');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error approving checkin:', error);
                setError('Error approving checkin');
            });
    }


    return (
        <div className="container">
            <h1 className="mt-4">Checkin Approval</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
                <p>Loading...</p>
            ) : checkinApproval.length === 0 ? (
                <p>No checkin approvals</p>
            ) : (
                <div className="row ">
                    {checkinApproval.map((checkin, index) => (
                        <div key={index} className="col-md-12">
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">{checkin.title}</h5>
                                    <p className="card-text">ID: {checkin.id}</p>
                                    <p className="card-text">Reason: {checkin.reason}</p>

                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <p><strong>Start Time:</strong> {checkin.start_time_formatted}</p>
                                        </div>
                                        <div className="col-md-6" >
                                            <p ><strong>End Time:</strong> {checkin.end_time_formatted}</p>
                                        </div>
                                    </div>
                                    <a href={`http://localhost:5000/${checkin.file_upload}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">See proof</a>
                                    <button onClick={() => handleApprove(checkin.id, checkin.start_time_formatted)} className="btn btn-success position-absolute" style={{ bottom: '10px', right: '10px' }}>Approve</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CheckinApproval;
