import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import questions from './data'
const QAAList = ({data,DeleteOneItem}) => {
  const localData = JSON.parse(localStorage.getItem("items"))
  // whats heppen when i click for delete an element
  const OnDeleteItem = (ID)=>{
    if(localStorage.getItem("items")!= null){
      const index = questions.findIndex((i)=> i.id === ID)
      questions.splice(index,1)
      DeleteOneItem(questions);
    }
  }
 
   return(
    <div>
      {localStorage.getItem("items")!= null?(
        localData.map((item,index) => {
          return(
            <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body>
              {item.a}
            <Button onClick={()=>OnDeleteItem(item.id)}  className='mx-2'>مسح</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          )
        })
       
      ):<h2>لا يوجد اسئله</h2>}
    </div>
   )
}
export default QAAList
