import React from 'react'
import { Button, Hero, Section } from '../../Utilities'
import post1 from "../../images/blog/post1.jpg"
import post2 from "../../images/blog/post2.jpg"
import post3 from "../../images/blog/post3.jpg"
import post4 from "../../images/blog/post4.jpg"
import { Link, useParams, useResolvedPath } from 'react-router-dom'


import "./Blog.css"

function Blog() {
    const params = useParams()
    const { pathname } = useResolvedPath()
    const path = pathname.search('post')


    // Dummy Post
    const posts = [
        {
            id: 1,
            img: post1,
            title: "Blog Title One",
            text: "Some quick example text to build on the blog title and make up the bulk of the blog's content.",
            date: new Date().getMinutes()
        },
        {
            id: 2,
            img: post2,
            title: "Blog Title Two",
            text: "Some quick example text to build on the blog title and make up the bulk of the blog's content.",
            date: new Date().getMinutes()
        },
        {
            id: 3,
            img: post3,
            title: "Blog Title Three",
            text: "Some quick example text to build on the blog title and make up the bulk of the blog's content.",
            date: new Date().getMinutes()
        },
        {
            id: 4,
            img: post4,
            title: "Blog Title Four",
            text: "Some quick example text to build on the blog title and make up the bulk of the blog's content.",
            date: new Date().getMinutes()
        },
    ]



    return (
        <div id='blog'>
            <Hero container={700} centerContent className="blog-container">
                <div className="text-light text-center">
                    <h1 className="heading-xl bold">Blog</h1>
                    <p className="bold">Here, you'll find a variety of interesting articles related to our products and services.</p>
                </div>
            </Hero>

            {/* Articles */}
            <Section mt={70} expand={true}>
                <div className="row">
                    <div className="col-md-8">
                        {
                            path === 1
                                ? <PostDetails {...posts.find(post => post.id === +params.id)} />
                                : <div className="post-grid">{posts.map((post, i) => <Post {...post}  key={i} />)}</div>
                        }
                    </div>
                    <div className="col-md-4 mt-4 pl-md-5">
                        <div className="card p-4">
                            <input type="text" className="form-control" />
                            <Button type={"block"} color={"pri"} className={"btn-block mt-2"}>SEARCH</Button>
                        </div>

                        <div className="card p-4 mt-4">
                            <h2 className="sub-heading">Latest Posts</h2>
                            <div className="list-group list-group-flush">
                                {posts.slice(0,3).map((post, i) =>
                                    <Link to={`/post/${post.id}`} key={i} className="list-group-item list-group-item-action p-0">
                                        <LatestPost {...post} />
                                    </Link>)}
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            <Section className="container">
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><Link className="page-link">Prev</Link></li>
                        <li className="page-item"><Link className="page-link">1</Link></li>
                        <li className="page-item"><Link className="page-link">2</Link></li>
                        <li className="page-item"><Link className="page-link">3</Link></li>
                        <li className="page-item"><Link className="page-link">Next</Link></li>
                    </ul>
                </nav>
            </Section>



        </div>
    )
}

export default Blog




function Post({ img, title, text, date, id }) {

    let body;
    const maxChar = 75
    if (text.length > maxChar) {
        body = text.slice(0, maxChar) + "..."
    } else {
        body = text
    }

    return (
        <div className="card shadow border-0 mt-4">
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body">
                <h5 className="card-title heading">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="card-text"><small className="text-muted">Posted {date} mins ago.</small></p>
                <Link to={`/post/${id}`} ><Button type={'block'} color={"pri"}> Learn More</Button></Link>

            </div>
        </div>
    )
}


function LatestPost({ img, title, date }) {
    return (
        <div className="media my-2 flex-wrap">
            <div className="media-img mr-3 ">
                <img className="w-100" src={img} alt={title} />
            </div>
            <div className="media-body">
                <h6 className="mt-0">{title}</h6>
                <p className="card-text"><small className="text-muted">Posted {date} mins ago.</small></p>
            </div>
        </div>
    )
}


function PostDetails({ img, title, text, date, id }) {
    return (
        <>
            <nav className='breadcrumb-container'>
                <ol className="breadcrumb transparent">
                    <li className="breadcrumb-item heading"><Link to="/blog">Blog</Link></li>
                    <li className="breadcrumb-item heading">{title}</li>
                </ol>
            </nav>
            <div className="container">
                <div className='card'>
                    <div className="card shadow border-0">
                        <img className="card-img-top" src={img} alt={title} />
                        <div className="card-body">
                            <h2 className="card-title heading">{title}</h2>
                            <p className="card-text text-muted"> Posted {date} mins ago.</p>
                            <p className="card-text lead">{text}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}