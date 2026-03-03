import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <h1 className="text-4xl font-black tracking-tight">All Programs</h1>

        <div className="relative w-full max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs..."
            className="block w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm transition-all outline-none focus:bg-white focus:border-[#8E977D]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-[#8E977D] transition-all">
            <div className="bg-white p-8 rounded-3xl border shadow-[#e5e7eb] shadow-sm border-slate-100 ring-1 ring-inset ring-slate-100 overflow-hidden hover:border-[#8E977D] transition-all h-full">
              <span className="text-[10px] mr-1 font-bold text-white uppercase ring-1 ring-inset ring-[#8E977D] bg-[#8E977D] rounded-full py-1 px-3 tracking-widest">{course.price}</span>
              <span className="text-[10px] font-bold text-white uppercase ring-1 ring-inset ring-[#8E977D] bg-[#8E977D] rounded-full py-1 px-3 tracking-widest">{course.genre}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{course.description}</p>
              <span className="text-[10px] font-semibold text-slate-500 uppercase bg-slate-200 ring-1 ring-inset ring-slate-400 rounded-full py-1 px-3 tracking-widest">{course.level}</span>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">No programs found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default Courses;