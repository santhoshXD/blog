import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../components/data/data.json'
import heart from '../assets/Template/heart.png'
import logo from '../assets/Template/bloglogo.svg'

const MenuItems = data["Menu"]

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
overflow: auto;
`

const BlogSite = styled.div`

display: grid;
grid-template-columns: 0.8fr 3fr 1fr ;
height: 100%;
width: 100%;

@media screen and (max-width:900px){
    grid-template-columns: 10% 65% auto;
}

@media screen and (max-width:900px){
    grid-template-columns: 15% auto ;
}
`




const SideBar = styled.div`
background: #161825;
color: #efeef1;
padding: 0 0 0 20px;

.logo-div{
    display: flex;
    align-items: center;
    gap: 10px;
}

/* width: 20%;
position: fixed; 
  top: 0;
  left: 0;
  height: 100vh; */

p{
    color: gray;
}


  h1,p{
    font-weight: 500;
    padding: 0;
    margin: 0;
  }


@media screen and (max-width:900px){
    display:none;
    width: 10%;
    height: 100vh;
    background: red;
}




`

const Menu = styled.div`
width: 100%;
height: 70%;
display: flex;
padding-top: 40px;


ul{
    padding: 0;
    width: 80%;
    list-style-type: none;
    cursor: pointer;
}

li{
    font-weight: 500;
    height: 3rem;
    text-transform: uppercase;
    display: flex;
  align-items: center;
  justify-content: space-between;
}
`

const Content = styled.div`
overflow-y: scroll;
border-right: 1px solid black;



&::-webkit-scrollbar {
    display: none;
  }

`

const Header = styled.header`
 position: fixed;
  top: 0;
  width: 62%;
  height: 10%;
  background: white;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px){
    width: 85%;
    
  }


div{
    padding: 0 10px;
    display: flex;
    align-items:center;
    gap:11px;
    justify-content: flex-start;
}

p{
    font-size: 1.5rem;
    font-weight: 700;
}
i{
    font-size: 1.5rem;
    padding-right: 1rem;
    margin-right: 10px;
 

    
    @media screen and (min-width: 900px) {
    display : none;
    
    
}

}


`

const SearchBar = styled.div`
padding: 0 20px;
overflow: auto;

input{
    width: 80%;
    height: 2rem;
}

@media screen and (max-width:576px){
    display: none;
}

@media screen and (max-width:900px){
    display: none;
}

`
const SearchContent = styled.div`
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: relative;


input{
    border: none;  
    outline: none;
    font-size: 1rem;
    color: grey;
    border-bottom: 2px solid grey;
    
    

    &:focus{
        border-bottom: 2px solid pink;
    }
    &::placeholder{
        color: lightgray;
        font-size: 1rem;
    }
}



i{
    font-size: 1rem;
    color: grey;
    cursor: pointer;
     
}

`

const PostContainer = styled.div`
display: grid;
grid-template-rows:1fr 2fr 1fr;
height: 90%;
gap: 15px;
background: white !important;
`

const PopularPosts = styled.div`
position: relative;
cursor: pointer;
padding: 0;
margin: 0;


.ph{
    font-weight: 500;
    font-size: small;
    text-transform: uppercase;
}

img {
    width: 100%; 
    height: 150px; 
  }

  .pd{
    position: absolute;
    left: 0px;
   bottom: 0;
    color: white;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
  }
`

const RecentPosts = styled.div`
cursor: pointer;

*{
    padding: 0;
    margin-top: 3px;
}

.p1{
    font-weight: 500;
    font-size: small;
    text-transform: uppercase;
}

.p3{

}

td{
    padding-right: 10px;
}

img{
    width: 50px;
    height: 50px;
}


`

const Catagory = styled.div`
padding: 0;
margin: 0;
overflow: auto;

&::-webkit-scrollbar{
    display: none;
}

p{
    font-weight: 500;
    text-transform: uppercase;
    font-size: small;
}

div{
    padding: 0;
margin: 0;
    color: gray;
}

hr{

}



`


const SideBarTab = styled.div`
height: 100vh;
background: #161825;
color: #efeef1;




@media screen and (min-width:900px){
display: none;
}

@media screen and (max-width:900px){
   display: block;
   
}

i{
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(180deg) ;
   padding: 10px;
}

`
const SidebarContent = styled.div`
  position: fixed;
  top: 0;
  left: 10%;
  min-width: 20%;
  height: 100vh;
  background: #161825;
  transition: left 0.3s ease;
  z-index: 999;

  ul{
    padding: 0;
    width: 100;
    list-style-type: none;
    cursor: pointer;
    list-style-type: none;
    
}

li{
    height: 3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
}

a{
    color: white;
    text-decoration: none;
}



@media screen and (max-width:576px){
    min-width: 40%;
}
  
`

const ContentDiv = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
gap: 20px;




div{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    cursor: pointer;
    

    &:hover{
        border: 2px solid lightgrey;
    }
}

img{
    width: 100%;
    height: 100%;
    max-height: 200px;
  object-fit: cover;
  margin-bottom: -10px;
}

a{
    text-decoration: none;
    color: gray;
    text-transform: uppercase;
}

h2, p, a{
    padding: 0;
    margin: 0;
}

`



const HomePage = () => {

    const [isMenu, setIsMenu] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(null)


    const ToggleMenu = (id) => {
        console.log('The cliked menu ', id)
        console.log(isMenu)
        setIsMenu(id === selectedMenu ? !isMenu : true);
        setSelectedMenu(id === selectedMenu ? null : id);
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const ToggleOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }




    return (
        <Wrapper>
            <BlogSite>

                <SideBar isMenuOpen={isMenuOpen}>
                    <div className='logo-div'>
                    <div>
                        <img src={logo} ></img>
                    </div>
                    <div>

                    <h1>BlogTech</h1>
                    <p>KnowEverything</p>
                    </div>
                    </div>
                    <Menu>
                        <ul>
                            {MenuItems.map((item, index) => (

                                <li onClick={() => { ToggleMenu(item.id) }}>
                                    {item.items}
                                    {index < 4 && (
                                        <span>
                                            <i className={`bi bi-chevron-${item.id === selectedMenu ? 'down' : 'up'}`}></i>

                                        </span>
                                    )}
                                </li>

                            ))}
                        </ul>

                    </Menu>

                </SideBar>

                <SideBarTab onClick={ToggleOpen}>
                    
                    <i className={`fa-solid fa-${isMenuOpen ? 'xmark' : 'bars'}`}></i>
                </SideBarTab>
                {isMenuOpen && (
                    <SidebarContent>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">Blogs</a></li>
                            <li><a href="/">Posts</a></li>
                            <li><a href="/about">Pages</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>

                    
                    </SidebarContent>
                )}



                <Content>
                    <Header>
                        <div>
                            <img src={heart} ></img>
                            <p>Our Stories</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>

                    </Header>

                    <ContentDiv>


                        <div class="blog-item">
                            <img src="blogimages/image1.jpg" alt="Image 7" />
                            <h2>Exploring Ancient History: Lost Civilizations</h2>
                            <p>Delve into the mysteries surrounding vanished civilizations and their enigmatic legacies...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image2.jpg" alt="Image 8" />
                            <h2>Wellness Tips for a Balanced Lifestyle</h2>
                            <p>Discover simple yet effective ways to achieve a harmonious balance in life through wellness practices...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image3.jpg" alt="Image 9" />
                            <h2>Future of Sustainable Energy</h2>
                            <p>Explore the promising advancements and challenges in the world of sustainable energy solutions...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image4.jpg" alt="Image 10" />
                            <h2>Travel Adventures Off the Beaten Path</h2>
                            <p>Uncover hidden gems and unique travel destinations for a one-of-a-kind adventurous experience...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image5.jpg" alt="Image 2" />
                            <h2>A Journey Through Natural Beauty</h2>
                            <p>Nulla facilisi. Duis vehicula, quam ut hendrerit...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image6.jpg" alt="Image 3" />
                            <h2>The Healing Power of Meditation</h2>
                            <p>Discover the transformative effects of meditation on mental well-being and its positive impact on daily life...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image7.jpg" alt="Image 4" />
                            <h2>Culinary Delights Around the World</h2>
                            <p>Embark on a gastronomic journey exploring diverse cuisines and unique culinary experiences globally...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image8.jpg" alt="Image 5" />
                            <h2>Unlocking Creativity Through Art</h2>
                            <p>Explore the ways artistic endeavors can foster creativity and unleash hidden talents...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>

                        <div class="blog-item">
                            <img src="blogimages/image9.jpg" alt="Image 6" />
                            <h2>Technology Trends Shaping the Future</h2>
                            <p>Get insights into the latest technological advancements and their impact on various industries...</p>
                            <a href="full-article.html" class="read-more">Read More</a>
                        </div>



                    </ContentDiv>
                </Content>


                <SearchBar>
                    <SearchContent>

                        <input type='text'
                            placeholder='Enter your Keyword?'
                        />
                        <i className='fa-solid fa-magnifying-glass' />
                    </SearchContent>


                    <PostContainer>


                        <PopularPosts >
                            <p className='ph'>Popular Posts</p>
                            <img src="blogimages/image1.jpg" alt="Image 7" />
                            <p className='pd'>Exploring Ancient History: Lost Civilizations</p>

                        </PopularPosts>


                        <RecentPosts>
                            <p className='p1'>Recent Posts</p>
                            <table >
                                <tr>
                                    <td>
                                        <img src="blogimages/image5.jpg" alt="Image 1" />
                                    </td>
                                    <td>
                                        <p  className='p2'>The Healing Power of Meditation</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="blogimages/image2.jpg" alt="Image 3"  />
                                    </td>
                                    <td>
                                        <p className='p2'>Wellness Tips for a Balanced Lifestyle</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="blogimages/image3.jpg" alt="Image 3"  />
                                    </td>
                                    <td>
                                        <p className='p2'>Future of Sustainable Energy</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="blogimages/image4.jpg" alt="Image 3"  />
                                    </td>
                                    <td>
                                        <p className='p2'>Travel Adventures Off the Beaten Path</p>
                                    </td>
                                </tr>
                            </table>

                        </RecentPosts>

                        <Catagory>
                              <p>Catagory</p>
                              <div>All</div>
                              <hr></hr>
                              <div>Travel</div>
                              <hr></hr>
                              <div>Technology</div>
                              <hr></hr>
                              <div>Life</div>

                        </Catagory>

                    </PostContainer>

                </SearchBar>

            </BlogSite>

        </Wrapper>
    )
}

export default HomePage
