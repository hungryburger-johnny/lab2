import CourseCard from '../components/CourseCard';

function Courses() {
  const courseList = [
    { code: 'ITEC 65', title: 'Open Source Technology', instructor: 'Prof. Anderson', credits: 3 },
    { code: 'DCIT 26', title: 'Application Development & Emerging Technologies', instructor: 'Dr. Salazar', credits: 3 },
    { code: 'ITEC 90', title: 'Systems Integration and Architecture', instructor: 'Prof. Mendoza', credits: 3 },
    { code: 'ITEC 85', title: 'Information Assurance and Security', instructor: 'Dr. Santos', credits: 3 },
    { code: 'DCIT 30', title: 'Data Structures and Algorithms', instructor: 'Prof. Reyes', credits: 3 },
    { code: 'DCIT 50', title: 'Object-Oriented Programming', instructor: 'Prof. Cruz', credits: 3 },
    { code: 'DCIT 55', title: 'Advanced Database Management Systems', instructor: 'Dr. Garcia', credits: 3 }
  ];

  return (
    <div className="page-container">
      <h2>Department Course Offerings</h2>
      <p className="page-description">Offered courses under CEIT curriculum:</p>
      <div className="card-grid">
        {courseList.map((course) => (
          <CourseCard key={course.code} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;