import { useState } from "react";
import Products from "./Products/Product";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Slidebar/Sidebar";
import Card from "./components/Card";
import Navigation from "./Navigation/Nav";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItems = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(query.toLowerCase()) ||
      product.company?.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filterProducts = products;

    if (query) {
      filterProducts = filterItems;
    }

    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
  
    return filterProducts.map(
      ({ img, title, star, review, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          review={review}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
      />
      <Recommended handleClick={handleClick}/>
      <Products result={result} />
    </>
  );
}
export default App;


// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App(){
//   let [modalstatus,setModalstatus]=useState(false)
//   return(
//     <div className='App'>
//       <button className='en' onClick={()=> setModalstatus(true)}>enquiry now</button>
//       <div onClick={()=> setModalstatus(false)} className={`modalOverlay  ${modalstatus ? 'modalstatus' :''}`}></div>
//       <div className={`modaldiv  ${modalstatus ? 'showModaldiv' : ''}`}>
//         <h3>enquiry now<span onClick={()=>setModalstatus(false)}>&times;</span></h3>
//       </div>
//     </div>
//   )
// }
// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   const handleAddTask = () => {
//     if (task.trim() === '') return;

//     const newTask = {
//       id: Date.now(),
//       text: task,
//     };

//     const updatedTasks = [...tasks, newTask];

//     setTasks(updatedTasks);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTask('');
//   };

//   const handleRemoveTask = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//   };

//   return (
//     <div className='App'>
//       <h1>To-Do List</h1>

//       <div className='task-input'>
//         <input
//           type='text'
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder='Enter a new task'
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className='task-item'>
//             <span>{task.text}</span>
//             <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import Header from "./components/Header";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';
// //import { useEffect } from 'react';
// //import React,{useState} from 'react';
// //import {useState} from 'react';
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Error from './components/Error';
// import Header from './components/header';
// //import Testimonial from './Testimonial';
// function App()
// {
//   return(
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//       <Route path="/" element ={<Home/>} />
//       <Route path="/About" element={<About />} />
//       {/* //<Route path="Testimonial" element={<Testimonial/>}/> */}
//       <Route path="Contact" element={<Contact/>} />
//       <Route path="*" element ={<Error />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;

// function App(){
//   const[name,setName]=useState("");
//   const[Tnc,setTnc]=useState(false);
//   const[interest,setinterest]=useState("");
//   function getFormData(e)
//   {
//     console.log(name,Tnc,interest)
//     e.preventDefault()
//   }
//   return(
//     <div className='App'>
//      <h1>Handle Form in React</h1>
//      <form onSubmit={getFormData}>
//       <input type="text" placeholder='enter name' value={name}
//       onChange={(e)=>setName(e.target.value)}/><br></br>
//       <select onChange={(e)=>setinterest(e.target.value)}>
//         <option>Select Options</option>
//         <option>Marvel</option>
//         <option>DC</option>
//       </select><br></br>
//       <input type="checkbox" onChange={(e)=>SVGComponentTransferFunctionElement(e.target.checked)}/>
//       <span> Accept Terms and conditions</span>
//       <br></br>
//       <button type="submit">Submit</button>
//       <button>Clear</button>
//      </form>
//     </div>
//   );
// }
   
// function App(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("count changed")
//   },[count]);

// return(
//   <>
//   <h1>{count}</h1>
//   <button onClick={()=> setCount(count+1)}>Add</button>
//   </>
// );
// };
// function App() {
//   useEffect(()=>{
//     console.log("Page Loaded");
//   },[]);
//   return<h1>Hello</h1>
// }
  // const [count,setCount]=useState(0);

  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={()=> setCount(count *1)}>
  //       Increase
  //     </button>
  //   </div>
  //   );
  // }


//export default App;
