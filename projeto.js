{/* <div className="navbar bg-base-100 shadow-sm">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div> */}



var menuItem = document.querySelectorAll('.item-menu')

menuItem.forEach((item)=>
item.addEventListener('click')
)

//   document.getElementById("menu")


// <div className="dropdown dropdown-open">
//   <div tabIndex={0} role="button" className="btn m-1">Button</div>
//   <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//     <li><a>Item 1</a></li>
//     <li><a>Item 2</a></li>
//   </ul>
// </div>