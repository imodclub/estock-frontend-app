import React from 'react'

const Header = () => {

    const companyName = 'CCT'
    const companyAddress = <p>Ubon</p>
    let num = 10

    const showMessage = () => {
        return companyName + '.com'
    };
    const isLogin = true;

    const showMe = () => {
        alert('Hello Message');
    }
    const users = [
        { id: 1, name: 'John', age: 10 },
        {id:2, name:'Kamol', age:30}
        
    ]

    return (
        <div>
            <h1>บริษัท {companyName}</h1>
            {companyAddress}
            {num + 10}<br/>
            {showMessage()}
            {isLogin === true && <p><h1>ยินดีต้อนรับ</h1></p>}
            
            <p></p>
            <button onClick={showMe}>Showme</button>
            <hr />
            <h1>แสดงข้อมูล</h1>
            <ul>
            {
                users.map((users, index) => {
                    return (
                        <li key={users.id}>{users.name} {index+1}</li>
                    )
                })
            }
            </ul>

        </div>
    )
}

export default Header
