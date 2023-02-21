import React from 'react'
import { Row,Form,Button,Col } from 'react-bootstrap';
import { useState } from 'react';
import questions from './data';
const FormInput = ({onAdd,notify}) => {
  const [qu,setQu] = useState("")
  const [an,setAn] = useState("")
  // add new item
  const addNewItem = () =>{
    if(qu === "" || an===""){
      notify("لم تقم باضافة سؤال","error")
      return;
    }
    questions.push({id:Math.random(),q:qu,a:an})
    setQu("")
    setAn("")
    onAdd()
  }
  return (
      <Form className='p-2 my-5'>
            <Row>
      <Col sm="5">
      <Form.Control value={qu} onChange={(e)=>setQu(e.target.value)} type="text" placeholder="ادخل السؤال " />
      </Col>

      <Col sm="5">
        <Form.Control value={an} onChange={(e)=>setAn(e.target.value)}  type="text" placeholder="ادخل الاجابه" />
      </Col>

      <Col sm="2">
      <Button onClick={addNewItem} >اضافه</Button>
      </Col>
    </Row>
    </Form>
  )
}
export default FormInput;
