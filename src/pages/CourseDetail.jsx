import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div className="text-center py-20 font-bold">Course Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/courses" className="text-white font-bold bg-black rounded-full py-2 px-6 text-sm hover:bg-[#8E977D] tracking-tight transition-all">← BACK TO PROGRAMS</Link>
      <h1 className="text-5xl font-black mt-8 mb-6 tracking-tighter">{course.title}</h1>
      <p className="text-xl text-slate-600 leading-relaxed mb-12">{course.fullDescription}</p>
      
      <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Curriculum</h2>
        <div className="space-y-4">
          {course.lessons.map((lesson, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-slate-700 font-medium italic">
              <span className="text-[#8E977D] font-black">0{i+1}</span> {lesson}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;