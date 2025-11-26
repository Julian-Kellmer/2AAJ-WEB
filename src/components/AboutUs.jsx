import UsCard from './UsCard'
const fakeUsers = [
  {
    name: 'julian kellmer',
    role: 'co-founder',
    quote: '"el que tiene acceso a la fuente no toma de la jarra"',
    img: '/images/Finisher.JPG',
    skills: ['Front end', 'web designer', '3d Artist', 'Motion Designer'],
  },
  {
    name: 'Agostina caunedo',
    role: 'co-founder',
    quote: '"Soldado que huye sirve para otra batalla"',
    img: '/images/Agos.png',
    skills: ['UX/IU', 'web designer', '3d Artist', 'Motion Designer'],
  },
]
const AboutUs = () => {
  return (
    <div className='w-full lg:w-screen gap-16 lg:gap-64 flex px-4 py-16 lg:px-24 lg:py-32 flex-col justify-center bg-black'>
      {fakeUsers.map((user, index) => {
        return (
          <UsCard
            key={index}
            name={user.name}
            role={user.role}
            quote={user.quote}
            img={user.img}
            skils={user.skills}
          />
        )
      })}
    </div>
  )
}
export default AboutUs
