import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 m">
      <header className="text-center mb-24">
        <h1 className="text-7xl font-black tracking-tighter mb-6">Get an edge on your <span className="text-[#8E977D] italic">potential.</span></h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">High-intensity programs designed for the next generation of digital architects. <span className='font-semibold'> Trusted by <span className="font-extrabold text-[#8E977D]">5,000+</span> developers and entrepreneurs.</span></p>
        <div className="pt-8">
          <Link 
            to="/about" 
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#8E977D] transition-all shadow-xl shadow-slate-200">
            Explore our Story
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-3xl font-extrabold mb-10 tracking-tight">Featured Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map(course => (
            <div key={course.id} className="bg-white p-8 rounded-3xl border shadow-[#e5e7eb] shadow-sm border-slate-100 ring-1 ring-inset ring-slate-100 overflow-hidden hover:border-[#8E977D] transition-all">
              <span className="text-[10px] mr-1 font-bold text-white uppercase ring-1 ring-inset ring-[#8E977D] bg-[#8E977D] rounded-full py-1 px-3 tracking-widest">{course.price}</span>
              <span className="text-[10px] font-bold text-white uppercase ring-1 ring-inset ring-[#8E977D] bg-[#8E977D] rounded-full py-1 px-3 tracking-widest">{course.genre}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{course.description}</p>
              <span className="text-[10px] mr-3 font-semibold text-slate-500 uppercase bg-slate-200 ring-1 ring-inset ring-slate-400 rounded-full py-1 px-3 tracking-widest">{course.level}</span>
              <Link to={`/courses/${course.id}`} className="font-bold text-sm text-[#8E977D]">View Detail →</Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-4"><Link to="/courses" className="inline-block font-bold text-sm text-slate-400 hover:text-[#8E977D] mt-8 transition-all">View All Programs →</Link></p>
      </section>
    </div>
  );
};

export default Home;