import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWdVngKMgKbtOP1hFMCaSCFNj7gTXEBph9ZQ6rWF8jA&s=10', 
      intro: '',
       tag: 'Satisfied'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWthljpfbeNRfY-x8bfWkRySfKC_uI-3fufvq_QIuV2A&s=10', 
      intro: '',
       tag: 'Underserved'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5UfSPCwTXK0q-y1KenXJu01H3wK2Yy68QizCBzYZ9A&s=10', 
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpLN19rm7MNxuiuWQe8EKapEG2SzrdKQ7TRzWEwmdxQ&s', 
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYj80J2r1Whjr9E1d9tXZ-WkK53FqS9chMO3M9W-ZmA&s=10', 
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Kyht3OEtBW_j8EElqoDWorltT1aH7JPTLaInwkxr7A&s=10', 
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgYu2VZdT0XeqMX2rFlDG0bNHoDiOws1CjHlLSjGVRg&s=10', 
      intro: '',
      tag: 'Underserved'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />

    </div>
  )
}

export default App
