import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useInfiniteQuery } from 'react-query';
import { useIntersectionObserver } from '@src/hooks/useIntersectionObserver';

interface Igroup {
    count: number;
next: string | null ; 
previous: null | string;
results:Iresult[];
}
interface Iresult {
    category: string;
    date:string;
    index: string;
    tag: string;
    title: string;
    type: string;
}
export default function guidebook(){
    const intersection = useRef(null);
    const [totalCnt,setTotalCnt] = useState(null);
    const [inputData,setInputData] = useState('')
    const [trigger,setTrigger] = useState('')

    const submitInput = (e:React.KeyboardEvent<HTMLInputElement>) =>{if(e.key==='Enter'){setTrigger(inputData)}}
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{setInputData(e.target.value)}

    const getDataList = async ({pageParam = 1}) =>{
        if(!inputData.length){
            return
        }
       try{
        const res = await axios
        .get(`https://dev-api.goifuneral.co.kr/articles/search/`,{
           params:{
               limit:10,
               offset: 10,
               page:pageParam,
               query:trigger
           }
       })
      
       setTotalCnt(res.data.count)
       console.log(res,res.data);
      return res.data
       }catch(err){
        console.error(err);
        return
       }
      
      
    
            
    }

        const {  
            data, // data.pages를 갖고 있는 배열
            error,
            fetchNextPage, // 다음 페이지를 불러오는 함수
            status,
                }= useInfiniteQuery(
                    trigger,getDataList,{
                    //option라인
                    getNextPageParam:lastPage => {
                        if(!lastPage) return ;
                        const { next } = lastPage 
                        
                        if (!next){
                            return false;} 
                        return Number(new URL(next).searchParams.get("page"))
                    }
                }
            )
    

    const intersectionCallBack = ([entry]):IntersectionObserverEntry =>entry.isIntersecting&& fetchNextPage()
    useIntersectionObserver({target:intersection,callBackFn:intersectionCallBack})

 
    return (
        <Wapper>
            <Title>가이드북 검색</Title>
            <InputArea>
            <input placeholder='텍스트를 입력해주세요.' value={inputData} onChange={inputHandler} onKeyDown={submitInput}/>
            {(totalCnt && totalCnt>0)&&<div><p>{totalCnt}</p>건의 검색 결과가 있습니다.</div>}
            </InputArea>
            <SearchList>
                {status === "loading" && <p>불러오는 중</p>}
                {status === "error" && <p>{error.message}</p>}
                {status === "success" &&
              data?.pages.map((group:Igroup) => (
                      group?.results.map((res:Iresult,idx:number) => {
                        const {title,tag,date} = res;
                        console.log(group,'group')
                        return (
                            <List key={idx}>
                                 <ul><p>•</p> {title}</ul>
                            <SubList>({tag} / {date})</SubList>
                            </List>
                            ) })))}
          
            <div ref={intersection}></div>
            </SearchList>
        </Wapper>
    )
}

const Wapper = styled.section`
  padding: 2.5rem 1rem 0;
  height: 100%;
  min-height: 575px;
  width: auto;
`;
const Title = styled.h1`
margin-bottom: 1rem;
font-size: 1.5rem;
font-weight: bold;
`;
const InputArea = styled.div`
height: 50px;
input{
    padding: 10px;
    width: 90%;
    height: 90%;
    background-color: #d3d3d3;

    border: none;
    border-radius: 5px;

}
div{
    display: flex;
    font-weight: bold;
    margin: 0.5rem;
    p{
        color: green;
    }
}
`;
const SearchList =styled.div`
margin-top:50px;
`;
const List = styled.div`
height:100px;
ul {
   display:flex;
   font-size: 1.5rem;
   font-weight: bold;
   p{
    margin-right:5px;
   }
}
`;

const SubList =styled.p`
font-size:1.1rem;
padding: 10px 0 0 20px;
color: grey;`