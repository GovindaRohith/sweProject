-- insert id,username,password,room_number,phone_number
INSERT INTO users (id, username, password, room_number, phone_number) VALUES ('cs21btech11063@iith.ac.in', 'CS21BTECH11063', 'pranav', 'H234', 7013893390);
-- check foriegn key relation b/w table users and rooms
INSERT INTO check_in (id, start_time, end_time, reason, file_upload, title)
VALUES
    ('cs21btech11063@iith.ac.in', '2024-04-19 11:52:00', '2024-04-19 11:52:00', '11asas', 'uploads/a1.pdf', '111'),
    ('cs21btech11063@iith.ac.in', '2024-04-24 12:03:00', '2024-05-08 12:03:00', 'asdfghjkl', 'uploads/a2.pdf', 'asddfghj'),
    ('cs21btech11063@iith.ac.in', '2024-04-27 11:59:00', '2024-04-30 11:59:00', 'asdfghjkl;', 'uploads/a3.pdf', 'adsfgh'),
    ('cs21btech11063@iith.ac.in', '2024-05-11 12:03:00', '2024-05-25 12:03:00', '123456789', 'uploads/a4.pdf', 'adfg'),
    ('cs21btech11062@iith.ac.in', '2024-04-19 11:52:00', '2024-04-19 11:52:00', '11asas', 'uploads/a5.pdf', 'tittle-1'),
    ('cs21btech11062@iith.ac.in', '2024-04-24 12:03:00', '2024-05-08 12:03:00', 'asdfghjkl', 'uploads/a6.pdf', 'tittle-2'),
    ('cs21btech11062@iith.ac.in', '2024-04-27 11:59:00', '2024-04-30 11:59:00', 'asdfghjkl;', 'uploads/a7.pdf', 'tittle-3'),
    ('cs21btech11062@iith.ac.in', '2024-05-11 12:03:00', '2024-05-25 12:03:00', '123456789', 'uploads/a8.pdf', 'tittle-4');
-- change type of end_time in check_in
ALTER TABLE check_in MODIFY COLUMN end_time TIMESTAMP;
    

