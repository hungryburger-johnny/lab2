import StudentCard from '../components/StudentCard';

function Students() {
  const studentList = [
    { id: '2024-0001', name: 'Mark Legaspi', program: 'BS Information Technology', year: '3rd Year' },
    { id: '2024-0002', name: 'Loraine Pelina', program: 'BS Computer Science', year: '2nd Year' },
    { id: '2024-0003', name: 'Chlouie De Torres', program: 'BS Computer Engineering', year: '4th Year' },
    { id: '2024-0004', name: 'Ira Rojas', program: 'BS Information Technology', year: '1st Year' }
  ];

  return (
    <div className="page-container">
      <h2>Enrolled Students</h2>
      <p className="page-description">CEIT Student Records and Roster:</p>
      <div className="card-grid">
        {studentList.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}

export default Students;