import React, {useState} from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({users}) => { 

const [state, setState] = useState({currentPage: 1, a:0, b:3, currentUsers: users.slice(0,3)})

const { currentUsers, currentPage, a, b } = state;

const goPrev = () => {
  const c = a-3;
  const d = b-3;
    setState({
      a:c,
      b:d,
      currentUsers: users.slice(c,d),
      currentPage: currentPage - 1
    })
    console.log(a, b)
}

const goNext = () => {
  const c = a+3;
  const d = b+3;
    setState({
      a:c,
      b:d,
      currentUsers: users.slice(c,d),
      currentPage: currentPage + 1
    })
    console.log(a, b)
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