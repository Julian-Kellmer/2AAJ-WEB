import { Link } from 'react-router-dom'

const CategoryCard = ({ title, img, name, desc }) => {
  return (
    <div className='category-panel p-4 lg:p-24 shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center'>
      <div className='w-full h-full gap-4 relative flex flex-col lg:flex-row'>
        <div className='relative lg:absolute lg:top-1/8 flex flex-col gap-4 lg:left-1/8 w-full lg:w-1/3 z-10'>
          <h2
            id='title'
            className='text-6xl lg:text-[96px] font-primary tracking-tighter leading-none text-white capitalize'>
            {title}
          </h2>
          <Link
            to={`/gallery?category=${title}`}
            className='text-xl px-4 text-white font-primary tracking-tighter leading-none hover:underline'>
            Ver proyectos de {title}
          </Link>
        </div>
        <div className='hidden lg:block lg:flex-2'></div>
        <div
          id='image-cont'
          className='w-full lg:flex-3 flex outline'>
          <div className='w-full h-64 lg:h-3/4 self-center bg-[#2269E1] overflow-hidden'>
            <img
              src={img}
              className='w-full h-full object-cover'
              alt={name}
            />
          </div>
        </div>
        <div className='w-full lg:flex-2 flex flex-col justify-end'>
          <div
            id='info'
            className='pb-4 lg:pb-24 tracking-tighter font-primary text-white w-full h-auto lg:h-100 flex flex-col justify-end'>
            <h4 className='text-2xl capitalize'>{name}</h4>
            <p className='mb-4 lg:mb-24 text-white/50'>
              Proyecto bi-mestral seleccionado
            </p>
            <p className='text-xl leading-none w-full lg:w-2/3'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
