import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Components/Container'
import { useSelector, useDispatch } from 'react-redux/es/exports'
export default function Blog() {
  const params = useParams()
  const likes = useSelector(
    (allStates) => {
      return allStates.wishlistReducer
    }
  )
  console.log(likes,params.id);
  const [allBlogs, setBlog] = useState([])
  const data = allBlogs.filter(
    (blog) => {
      return blog.id == params.id
    }
  )
  const getData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await resp.json()
    setBlog(data)
  }

  useEffect(() => {
    getData()
  }, [])
  // dependency list empty , only first render 

  // console.log(allBlogs);
  // console.log(data[0]);
  return (
    <Container>
      {
        data.length === 0 || data === undefined
          ?
          "Data not found"
          :
          (
            <>
              <div className="col-4">
                <img src={`https://picsum.photos/1000?random=${data[0].id}`} alt="" width="100%" height="600px" style={
                  {
                    position: "sticky",
                    top: "10px"
                  }
                } />
              </div>
              <div className="col-8">
                <h2>{data[0].title}
                  {
                    likes.includes(parseInt(params.id))
                      ?
                      " LIKED"
                      :
                      ""
                  }
                </h2>
                <p>
                  {data[0].body}
                </p>
              </div>
            </>
          )
      }

    </Container>
  )
}
