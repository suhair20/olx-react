import { createContext,useState } from "react";




export const PostContext=createContext(null)

function Post({children}){
    const [postdetials,setPostdetials]=useState()
  return(
    <PostContext.Provider value={{postdetials,setPostdetials}}>
       {children}
    </PostContext.Provider>
  )
}

export default Post