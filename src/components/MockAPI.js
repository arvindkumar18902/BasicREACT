import React from 'react'
import './MockAPI.css'
function MockAPI() {
    /*const url = '5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/3';
    const[item,setItem] = useState(null)
    useEffect(() =>{
        axios.get(url)
        .then(response => {
            setItem(response.data)
        })
    },[url])
    if(item){
        return(
            <div>
                <h1> {item.name} </h1>
            </div>
        )
    }
    return(
        <div> Please wait a while</div>
    )*/
    return (
    <table className='table'>
            <tr className='trows'>
                <th> Name</th>
                <th align='right'> Age &nbsp;</th>
                <th align='right'> Designation &nbsp; </th>
                <th align='right'> Number &nbsp; </th>
            </tr>
            <tbody className='tbody'>
                <tr>
                    <td> Arvind Kumar</td>
                    <td align='right'> 19 </td>
                    <td align='right'> Student </td>
                    <td align ='right'> 3649 </td>
                </tr>
                <tr>
                    <td> Adithya Kumar</td>
                    <td align='right'> 24 </td>
                    <td align='right'> Student </td>
                    <td align ='right'> 2876 </td>
                </tr>
                <tr>
                    <td>Sindhu Kumar</td>
                    <td align='right'> 48 </td>
                    <td align='right'> Home-Maker </td>
                    <td align ='right'> 2024 </td>
                </tr>
                <tr>
                    <td> M S Kumar</td>
                    <td align='right'> 55 </td>
                    <td align='right'> Manager </td>
                    <td align ='right'> 2022 </td>
                </tr>
            </tbody>  
     </table>
    )
}

export default MockAPI
