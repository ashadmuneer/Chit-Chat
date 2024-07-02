import React, { useState } from 'react'
import "./addUser.css"
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import {db} from "../../../../lib/firebase";
import { useUserStore } from "../../../../lib/userStore";


const AddUser=()=> {
  const [user,setUser]=useState(null);

  const{currentUser}=useUserStore();

  const handleSearch= async e=>{
    e.preventDefault()
    const fromData=new FormData(e.target)
    const username=fromData.get("username")
  

    try{
      const useRef= collection(db,"users");
       const q=query(useRef, where("username","==",username));

       const querySnapShot= await getDocs(q)

       if(!querySnapShot.empty){
        setUser(querySnapShot.docs[0].data());

       }
    }catch(err){
      console.log(err)
    }
  };
    const handleAdd=async()=>{
    const chatRef=collection(db,"chats")
    const userChatsRef=collection(db,"userchats")

    try {
      const newChatRef=doc(chatRef)
      await setDoc(newChatRef,{
        createAt: serverTimestamp(),
        messages:[],
      });
      await updateDoc(doc(userChatsRef,user.id),{
         chats:arrayUnion({
          chatId:newChatRef.id,
          lastMessage:"",
          reciverId:currentUser.id,
          updatedAt:Date.now(),

        }),
       });
       await updateDoc(doc(userChatsRef,currentUser.id),{
        chats:arrayUnion({
          chatId:newChatRef.id,
          lastMessage:"",
          reciverId:user.id,
          updatedAt:Date.now(),

        }),
       });
      console.log(newChatRef.id)
      
    } catch (err) {
      console.log(err);
      
    }
    
  }
  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username"/>
        <button>Search</button>
      </form>
      {user && <div className="user">
        <div className="detail">
            <img src={user.avatar ||"./avatar.png"} alt="" />
            <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser
