import React from 'react'

const Header = () => {
  return (
    <>
        <header>
            <a href='#'>Display Filters</a>
            <nav>
                <ul>
                    <li><a href='#'>Group By</a>                  
                        <ul>
                            <li><a href='#'>User</a></li>                  
                            <li><a href='#'>Priority</a></li>                  
                            <li><a href='#'>Status</a></li>                  
                        </ul>
                    </li>    
                    <li><a href='#'>Order By</a>                                          
                        <ul>
                            <li><a href='#'>Priority</a></li>                  
                            <li><a href='#'>Title</a></li>                  
                        </ul>
                    </li>        
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header