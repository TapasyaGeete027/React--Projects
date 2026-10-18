import Card from './components/card.jsx'


const App = () => {
  const jobs = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcudwnGLW__yGv81eiTgKVBKrnYSV0DL8X1PJDpBdmdg&s=10",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full time",
      tag2: "Junior Level",
      salary: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAsVBMVEX///8AAAD+mQD29vb+//1bW1v8/Pz5+fkXFxf+lgANDQ0QEBAgICAZGRlsbGwcHBzMzMy6urrw8PBFRUXb29vm5uYlJSU6OjqMjIxAQECzs7NKSkqpqakuLi7BwcGBgYH8jgB1dXWcnJz4woL34sRkZGRSUlL8+fD78uT87NL879z1uW74xov6q0b5oyn2nRf20Z7527P1pTf8+eD5u2j46sL0r1X3z4/3xHr8tWX9miJyO5BsAAAE2ElEQVR4nO2ZC3OqOhCAASkQHgIW0VoVVFpEq1XU2vb//7C7IeoBn9e5Qs7c2W/GzjQ88rm7CQkKAoIgCIIgCIIgCIIgCIIgCIL8n6h5Tt91XcdTeJsw1GZn0PM1XQR0y2+1nQZvJaHzJh7zMmzyNFI7/olSRrvGzalZP68EvPIKlqNfdBJF3+Pi5BlXnESxxyODzatKwBsHqcv1tMep3Klz00msVy71UhQIXMfpvh5ZVT29O/nOte6+tcc1f4Nc34Z7aPYKUt0rNyiB2uuFvtt5qUG1Ul7u8aKpuQP9vFTFk0IzVzztwoFWTuqpWinBGwZPPcugD5p+QeqFoxSj1nQ6xSHWeOYudcpfKVUYltyllFqt4fU7gfmXSCme2w3e8sOOt1TDrbcurIl5STnBBR9+Ut7pToa7VPe6Eg8p9WrmOEmdOunP9cHA5yk1LAq16v2GonCe0YurObG933vylFLe80q5jSeV0v2eb3CQKi7RcwsFKuWbvm9WLEX3KIVNX36VR9dTvmmZvl6plEq344WCyr+PoitP27R7VpWRUmA1oGTZy1adOtTOOw0e2+IpgteDJstkR56yC0rf/YESlYK53DQsQ4SPLQbQqNbo7kGtKQ7YaLqp65phUiklO79caPfQfyBCn5opWpqtiW0wUqkVDeJQtG0DpDTLNLT3BngC5Top0DWVqou2ZloQE03U9LaiQIgyKUV41sCUStm6rbeau8iWCxipTMowoXPLggTWVSYFf6HYbA0aqRScIrpwQfY9SpWi2VCplG4ahgaRsgEmleXpLas1iBTUuqnBFpleoDRKfl+sqDQZdHMOEYEhqOk6xENRBRWSSNt1C0alIUKzAR9PUOECVb153wdQXEm97B98p++snip8x3j0OG45NHze4MRJFIPqpISjrvXX+uD9/PahwndUt1edeyp8x3j1FXqBTnVSwrn6YfTzWxzNvX2rx9G4ECqtn3/BblT8s8P5BLaoxWFmqP4HGsc8dRqwqXv34rPsSUqW4XPU1jyuq+dDUWeDM8jm8eOrHioln+nAC2BRwDBf6k5uNTC0zKGwc4rHSRRFkzHc4tGGk2lyprXmuF2g4x7/RuvR4qLfJPqYSSQMCZmP4gcrycLkM1yPs27uIZmFICQRQiQpPPet/iMbEs4X9140mn5sl5C8RUqkcPLo9EGIlvCFZ9E9982duwolafxYJcYyBK3p6u4RRWspDqVZXMJQlIVoTsvj+57akOXJOoSsb0Ly8XAjRvIJBUuk0eqmyz4o0Q+MvY0gLEKyLElKiNdgBd18Lf/F+JaTrQSlJEGg5C8yL8sJrLYk0yKzjxvhWi1+IK4w6JZ0QvkNy8pelpMkpVY0XPNtND4u3ex/eRxt0xCGBZyVRrRlEc4ePXUWux1/h9JOi6Q/H9GqIBYny9HPHA6xM76YSxpGZT4F6Yy1WRMWLZpHmLE/Z+vv79Hoe/o1l+gMfjg427DYRTSHZUrRu8vL9NBzZkYJCSk2Sot4l89J9PiH8TmWP3mDE0iYLsqYLG8gR9Nfcl4MWrM5o5rwHITY+ipejlLyp4Sy0QbM14uJwNJcoVPOLk4W0/T3l1WV9DtP14vkZJ6oWir7G6/o2jJKkpizDoPNlfJRA4IgCIIgCIIgCIIgCIIgCILczz82jVC4j95BWgAAAABJRU5ErkJggg==",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full time",
      tag2: "Senior Level",
      salary: "$60/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full time",
      tag2: "Mid Level",
      salary: "$55/hour",
      location: "London, UK",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Part time",
      tag2: "Junior Level",
      salary: "$40/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Data Scientist",
      tag1: "Full time",
      tag2: "Senior Level",
      salary: "$75/hour",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAAq1BMVEX///+AugHyUCICpO//uQJzc3N2dnZwcHD7+/vt7e3Ozs7z8/Onp6eSkpJtbW3w8PD5//fR5Ln96eadnZ3//Pf/vQD//O9ztAD8xr33/fHT56l9fX2TxUSd2Pnl8vz/56vy+P7xOQDzYT3yTBn0a0v/4KEyq/Cx3/xfuPL/yV+6urrk5OSGhobExMTb29uwsLDs9dz1eF71c1TZ6rbY8f7/9Npvv/PG6Pz/7L5F6bSoAAAErklEQVR4nO2XW2PcNBBGTUE3S7JLFEqCoC13sCWbO/z/X8Y3svZi7wbYdNPwMOchG8uW9liaGWmbhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGYB7m923DTfLzhp+d23HLz4ss1d/efbvjsuR233Hz19YsVd/cfrGHna8DOV0KbcbQP376Ws+2vJdw0k/MpDfrB+xc5jzPIx6YDNWBKWp/y6eCPVI5CiG6+knPbATkdemdq8KbpkxJxOjP8IzBRyOg9zbM9732Zs5BSiqNV82gQ5OyViuN1nAeMmbW2esr+/Npd7izhWDGdXJz1FWPDCeEpOWzquuFazrLdXc87Z3zDP+T5xc6BBrMRS3oV55SkCtVvTAKXxVmD+pC2xpRAXNpsfZt984LtTW9XXepjmpwNuvaewlCfCekLnYUf5D7bshRhXmIjO7fMiW2djzGFtrRli6BxsDE5JGrOfX3K49IPxbPPgbr4jHc3ziUpU3DOhYgwxOdpEb3YecREz8sXByHzsDg7lI8y9U4qoTrVhdIWhqhUss3khUKrUCKUUMVTChUnUdqOgS4U8GMzdhRukq4UxZ3qojnnvOJfnS0FcblCHU1m56wEOZskpJDeR3KeUbNiJ7pkR5SvDvULHkWaSoPHRJKzQe1RuId+GMmIJWXE7lOdc/75mxW/3N1/vuHXlXNvpOwoC+GJvF47h04KR+HdDsVZynkcW52UVFnTlMIPd5JQgYKiLSskxYwY6fF455reBFpM21ssKG705/bX2w1N83JDs3ZuMGjQJQPFuHaeMDFueVQX5yXxp24XTgbT6XsdRb3GKAgEV/JM44VoUvd1Iz1UN95+seG32283/L5yNk0rJe0fQ9FcOQ8Im/3OUmKjZCuadxvOIEQcNcIhtUtByFiCmtItXq39L7Xu9Xcfrvn+1ScfrXmzcaYIxGCxhMjKOeDvvjbBedkcNK12bab3bfG6tDVRtDQzNv16b0Tg5Cdypsny/dQVo5WzlyVOD86hOtflL9EDZ+0o47qECXYHZ1OC/YmcUTBki6FpxLWzKJl45GzPzjNyNEQqFxOcpTxyfrJ5tg71LC5byyY2ZNrv4ft5prlMNf2zqDtSPwUk7ExhomqsT08Yz/gs9b6MvM1BsT8qHZypeTmjYBtSvur3AUNoDLU7CblOSPNkzsg/We1WzrSlyBZHBD3mI+ee9oYRzRabCbrZbOggAmenrVeIFvTQCJtSAffOvtTUM+eNxzlTUUvmxBmVC1JhGIIMR84UACKiGX4KTb1MLmeHF88lwqUsXeoJcedMkSbccOa88Thn/Jboll1hEMfOGucL7LuoCeSsds52ltQMFPXvI4oFrhWdnnSuXXCvRLoT9eCIyoT1Sad792XOqluc6fyzZM5cmnCtQlnF1tPPrS615FykyvO1Oc5l1Z0oP9KWYx0doMrlvNjhSFAPu0OkLu/o3BxOs7v/6sH56PxspnbqN083VCh2zXRnnKbx6DA9tofLo6Hs1I7vGs//E9j5/cDO74fXf/yw5s+XP27467kdT3i7QW9/uby6fW5FhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEe5G++v5bNPphgogAAAABJRU5ErkJggg==",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "React Developer",
      tag1: "Full time",
      tag2: "Mid Level",
      salary: "$58/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      companyName: "NVIDIA",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full time",
      tag2: "Senior Level",
      salary: "$70/hour",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "UI/UX Designer",
      tag1: "Part time",
      tag2: "Junior Level",
      salary: "$38/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiD9IodEq2mlphCGkjjSZElrH6O5jHY2vahrD3bq2cJg&s=10",
      companyName: "Salesforce",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full time",
      tag2: "Mid Level",
      salary: "$52/hour",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2Nh2seuI2R9mZ3F2CQph6JXY30gbVNiKH046INxc4A&s=10",
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Database Administrator",
      tag1: "Full time",
      tag2: "Senior Level",
      salary: "$62/hour",
      location: "Pune, India",
    },
  ];
  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return < Card company={elem.companyName} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} brandLogo={elem.brandLogo} />

      })}
      
      
      
    </div>
  )
}

export default App
