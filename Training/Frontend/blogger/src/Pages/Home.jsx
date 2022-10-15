import React, { useState, useEffect } from 'react'
import BlogBox from '../Components/BlogBox'
import Container from '../Components/Container'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { toggleWishlist } from "../Actions/wishlist"
function Home() {
    const [allBlogs, setBlog] = useState([])
    const dispatch = useDispatch()
    const likes = useSelector(
        (allStates) => {
            return allStates.wishlistReducer
        }
    )

    const getData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await resp.json()
        setBlog(data)
    }

    useEffect(() => {
        getData()
        console.log("Use effect called");
    }, [])

    const likeHandler = (blogId) => {
        let newLikes = [];
        if (likes.indexOf(blogId) === -1) {
            newLikes = [
                ...likes,
                blogId
            ]
        } else {
            newLikes = likes.filter(
                (id) => id !== blogId
                //removing from likes
            )
        }
        localStorage.setItem("likes", JSON.stringify(newLikes))
        dispatch(toggleWishlist(newLikes))
    }

    const Boxes = allBlogs.map(
        (blog, index) => {
            return (
                <div key={index} className="col-3 mt-2">
                    <BlogBox slug={blog.id} like={likes.includes(blog.id) ? 1 : 0} title={blog.title} short={blog.body} img={`https://picsum.photos/1000?random=${blog.id}`} event={() => likeHandler(blog.id)} />
                </div>
            )
        }
    )

    useEffect(
        () => {
            console.log("Likes", likes);
        }
    )

    // useEffect(
    //     () => {
    //         const lsLikes = localStorage.getItem("likes")
    //         console.log("LS Likes", lsLikes);
    //         if (lsLikes !== null) {
    //             setLike(JSON.parse(lsLikes))
    //         }
    //     },
    //     []
    // )
    return (
        <Container>
            {
                allBlogs.length === 0
                    ?
                    (
                        <div className='text-center'>
                            <div className="spinner-grow text-primary" role="status">
                            </div>
                        </div>
                    )
                    :
                    (Boxes)
            }
        </Container>
    )
}

export default Home