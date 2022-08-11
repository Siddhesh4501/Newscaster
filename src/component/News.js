import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
const News =(props)=> {
     
    const [article, setarticle] = useState([])
    const [page, setpage] = useState(1)
    const [total, settotal] = useState(0)
    const [loading, setloading] = useState(false)
    const param=useParams().id;
    console.log(param);
    useEffect(() => {
        onchange(0);
        
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const onchange=async(pagechange)=>{
        setloading(true)
        let url;
        if(!param){
        url=`https://newsapi.org/v2/top-headlines?apiKey=a7b2fb8f517446e6b26546854655ec2f&country=in&category=${props.contenttype}&pagesize=${props.pagesize}&page=${page+pagechange}`;
        }
        else{
            console.log("searched worked")
            url=`https://newsapi.org/v2/top-headlines?apiKey=a7b2fb8f517446e6b26546854655ec2f&q=${param}&pagesize=${props.pagesize}&page=${page+pagechange}`
        }
        console.log(url);
        let data=await fetch(url);
        // console.log(data);
        let parsedata=await data.json();
        // console.log(parsedata)
        setarticle(parsedata.articles);
        setpage(page+pagechange);
        settotal(parsedata.totalResults);
        setloading(false);
    }
    const fetchMoreData = async () =>{
        setloading(true)
        // let url=`https://newsapi.org/v2/top-headlines?apiKey=a7b2fb8f517446e6b26546854655ec2f&category=${props.contenttype}&pagesize=${props.pagesize}&page=${page+1}`;
        let url;
        if(!param){
        url=`https://newsapi.org/v2/top-headlines?apiKey=a7b2fb8f517446e6b26546854655ec2f&country=in&category=${props.contenttype}&pagesize=${props.pagesize}&page=${page+1}`;
        }
        else{
            console.log("searched worked")
            url=`https://newsapi.org/v2/top-headlines?apiKey=a7b2fb8f517446e6b26546854655ec2f&q=${param}&pagesize=${props.pagesize}&page=${page+1}`
        }
        let data=await fetch(url);
        let parsedata=await data.json();
            
        setpage(page+1);
        setarticle(article.concat(parsedata.articles));
        settotal(parsedata.totalResults);
        setloading(false);
    }

        return (
            <div>
                <div className="my-5">
                    <h1 style={{textAlign:"center",marginBottom:"20px",marginTop:"60px"}}>News HeadLines</h1>
                    {loading && <Loader/>}
                    <InfiniteScroll
                        dataLength={article.length} 
                        next={fetchMoreData}
                        hasMore={article.length!==total}
                        
                        loader={<Loader/>}
                        >
                            <div className="container">
                            <div className="row">
                             {article.map((ele)=>{
                            return <div className="col-md-4" key={ele.url}> 
                            <NewsItem title={ele.title}  decription={ele.description} imageUrl={ele.urlToImage} urltonews={ele.url} sourceName={ele.source.name}/>
                                </div>
                                })} 
                                </div>

                            </div>
                    </InfiniteScroll>
                </div>
                
            </div>
        )
    
}

export default News