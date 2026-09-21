function StudentCard({ name, id, program, year }) {
  return (
    <div className="card student-card">
      <h3>{name}</h3>
      <p><strong>Student ID:</strong> {id}</p>
      <p><strong>Program:</strong> {program}</p>
      <p><strong>Year Level:</strong> {year}</p>
    </div>
  );
}

export default StudentCard;