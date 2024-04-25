import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HRAnnouncements() {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        var id='hr_raman@gmail.com';
        axios.get(`http://localhost:5000/hr_announcements/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleDelete = (id) => {
        console.log('Delete announcement with id:', id);
    }

    return (
        <>
        This is the HR Announcements page.
        // display the announcements here,just throw the data in a div
        <div>
        {announcements.map(announcement => (
    <div key={announcement.id}>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
        <p>{announcement.created_at}</p>
        <p>{announcement.duration}</p>
        {announcement.id === 'hr_raman@gmail.com' && (
            <button onClick={() => handleDelete(announcement.id)}>Delete</button>
        )}
    </div>
))}

        </div>
        </>
    );
}

export default HRAnnouncements;