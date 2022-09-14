import React, {useState} from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({users}) => { 

const [state, setState] = useState({currentPage: 1, currentUsers: users.slice(0,3)})

const { currentUsers, currentPage } = state;

let a = 0;
let b = 3;

const goPrev = () => {
  a = a - 3;
  b = b - 3;
  console.log(a, b)
    setState({
      currentUsers: users.slice(a,b),
      currentPage: currentPage - 1
    })
  
}

const goNext = () => {
  a = a + 3;
  b = b + 3;
  console.log(a, b)
    setState({
      currentUsers: users.slice(a,b),
      currentPage: currentPage + 1
    })
}

        return (
            <div className='users'>
                {<Pagination goPrev={goPrev} 
                goNext={goNext} 
                currentPage={currentPage} 
                totalItems={users.length} 
                itemsPerPage={users.slice(a,b).length}/>}
                {currentUsers.map((user)=>(<User key={user.id} name={user.name} age={user.age}/>))}
            </div>
        );
    }

export default UsersList;