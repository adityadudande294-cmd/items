export default function Item({itm,handleSubmit}){
   
    return <>
    <li style={{ backgroundColor: 'lightgray', margin: '5px 0', 'color':'black' }}>{itm}
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', marginLeft: '80px' }} onClick={() => handleSubmit(itm)}>
            Buy
        </button>
    </li>
    </> 
}
