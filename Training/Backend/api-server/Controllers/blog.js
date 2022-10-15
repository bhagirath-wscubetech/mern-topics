import Blogs from "../Data/blog.js"

class BlogController {
    getBlogs = () => {
        return new Promise(
            (resolve, _) => {
                const data = Blogs;
                resolve(data)
            }
        )
    }
    getBlog = (id) => {
        return new Promise(
            (resolve, reject) => {
                const data = Blogs.find((blog) => {
                    return blog.id == id
                })
                if (data == undefined) {
                    resolve({ "message": "Data not found" })
                } else {
                    resolve(data)
                }
            }
        )
    }

}

export { BlogController }