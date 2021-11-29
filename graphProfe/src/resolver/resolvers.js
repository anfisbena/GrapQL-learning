'use strict'
const courses=[
  {
    _id:'anyid',
    title:'titulo1',
    teacher:'Mi profesor',
    description:'comer puta mierda',
    topic:'Tiracaja'
  },
  {
    _id:'anyid2',
    title:'titulo2',
    teacher:'Mi profesor2',
    description:'comer puta mierda*2',
    topic:'Tiracaja'
  },
  {
    _id:'anyid3',
    title:'titulo3',
    teacher:'Mi profesor3',
    description:'comer puta mierda*n',
    topic:'Tiracaja'
  },
]

module.exports={
  getCourses:()=>{
    return courses
  }
}