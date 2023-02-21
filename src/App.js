import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import FormInput from './Components/FormInput';
import QAAList from './Components/QAAList';
import questions from "./Components/data"
import { useState } from 'react';
// react toastify to notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data,setData] = useState(questions)
  // add one item to items list
  const addItem = ()=>{
    // sorting items in localstorage
    localStorage.setItem("items",JSON.stringify([...questions]))
    setData([...questions])
    notify("تم اضافة السؤال بنجاج","succes")
  } 
  // delete all items
  const DeleteAllItems = () =>{
    // remove all items from localstorage
    localStorage.clear("items")
    questions.splice(0,questions.length)
    setData([]);
    notify("تم ازالة جميع الاسئله","succes")
  }
  // delete one item
  const DeleteOneItem = (items)=>{
    // delete one item from localstorage 
    localStorage.setItem("items",JSON.stringify([...items]))
    setData([...items])
    if(items.length<1){
      DeleteAllItems()
    }
    notify("تم ازالة السؤال بنجاج","succes")
  }
  // to push notification
  const notify = (message,type) => {
    if(type==="error"){
      toast.error(message)
    }else if(type==="succes"){
      toast.success(message)
    }
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm='4' className='py-5'>
          <h2>اسئله واجوبه شائعه</h2>
          </Col>
          <Col sm="8">
        <FormInput onAdd={addItem} notify={notify}></FormInput>
        <QAAList data={data} DeleteOneItem={DeleteOneItem} ></QAAList>
        {localStorage.getItem("items") !=null?(
            <button onClick={DeleteAllItems} className='btn btn-primary w-100 my-5'>امسح الكل</button>
        ):null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
