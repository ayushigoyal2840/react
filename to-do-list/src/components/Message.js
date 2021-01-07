import React, {useState} from 'react';
const Message = () => {
    const [message, setmessage] = useState("please update your browser asap");


// const sayHello = (name) => {
//     console.log(`hello !  ${name}`);
// }

const [show,setShow] = useState(true);
const update = () =>  {
    setmessage("your message is successfully updated ");
    setShow(false);
};
if(show)
{
    return(
        <div className="message" >
        <p>{message}</p>
        <button onClick={update}>update now</button>
        </div>
    );
}
else
{
    return(
        <h1>your browser is up to date</h1>
    );
}


}

export default Message;