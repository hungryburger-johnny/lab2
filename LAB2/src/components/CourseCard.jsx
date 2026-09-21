function CourseCard({ code, title, instructor, credits }) {
  return (
    <div className="card course-card">
      <span className="course-badge">{code}</span>
      <h3>{title}</h3>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Credits:</strong> {credits} units</p>
    </div>
  );
}

export default CourseCard;