import React, { useEffect, useState } from "react"
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function UserList(props) {
    const { value } = props
    const [filteredData, setFilteredData] = useState(value)
    const [shotListed, setShotListed] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageListUser, setPageListUser] = useState(4)
    const indexOfLast = currentPage * pageListUser;
    const indexOfFirst = indexOfLast - pageListUser;
    const currentPageValue = filteredData.slice(indexOfFirst, indexOfLast);


    useEffect(()=>{
        setFilteredData(value)
    },[value])

    const handleDelete = (index) =>{
        const newData = [...filteredData]
        newData.splice(index,1)
        setFilteredData(newData)
    }
    const shotListedFun = (data,index) =>{
        const newData = [...filteredData]
        newData.splice(index,1)
        setFilteredData(newData)
        setShotListed((oldValue) => [...oldValue, data])

    }

    const unShot = (data,index) =>{
        setFilteredData((oldValue,index) => [...oldValue, data])
        const newData = [...shotListed]
        newData.splice(index,1)
        setShotListed(newData)

    }
    const handleDeleteShot = (index) =>{
        const newData = [...shotListed]
        newData.splice(index,1)
        setShotListed(newData)
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil((filteredData.length + shotListed.length) / pageListUser); i++) {
      pageNumbers.push(i);
    }

   const handleClick = (event) =>{
        setCurrentPage(Number(event.target.id))
      }

    return (
        <div className="userList">
            {
            shotListed.length>0 ? shotListed.map((item, index) => {
                return (<>
                    <li key={index} className="listUser">{item}<br/><small className="smallFont">is your friend</small>
                    <span className="shot" onClick={()=>unShot(item,index)}><i class="fas fa-star"></i></span> 
                    <span className="delete" onClick={()=>handleDeleteShot(index)}><i class="far fa-trash-alt"></i></span> 
                    </li>
                </>  
                )  
             })
            :""}
            {
                currentPageValue.map((item, index) => {
                    return (<>
                        <li key={index} className="listUser">{item}<br/><small className="smallFont">is your friend</small>
                        <span className="shot" onClick={()=>shotListedFun(item,index)}><i class="far fa-star"></i></span> 
                        <span className="delete" onClick={()=>handleDelete(index)}><i class="far fa-trash-alt"></i></span> 
                        </li>
                    </>
                    )

                })
            }
            {pageNumbers.map((number) => {
                    return (
                        <>
                      <li
                        key={number}
                        id={number}
                        onClick={handleClick}
                        className={"pagination"}
                      >
                        {number}
                      </li>
                      </>
                    );
                  })
            }
        </div>
    );
}

export default UserList;
