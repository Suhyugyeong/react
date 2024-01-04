import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//url의 query문자열(data)을 활용해서 페이징 처리를 해볼거임
//현재 페이지가 몇 페이지인지, 데이터 유지가 되어야 하고
//next, prev 버튼을 클릭했을 때 몇 페이지를 원하는지 정보가 전달되어야 한다
//이것을 query 문자열로 해보겠음

const About = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1); //화면의 페이지 정보
  const navigate = useNavigate();

  useEffect(() => {
    //searchParams가 변경되었다는 것은 url의 search 문자열이 변경되었다는 것
    //search문자열에 page 정보가 있다. search에서 새로운 페이지 정보를 획득해서
    //state조정
    const strPage = searchParams.get("page"); //~~~~?page=2
    setPage(parseInt(strPage !== null ? strPage : "1", 10));
  }, [searchParams]);

  const goPrev = () => {
    //이전 페이지 버튼 클릭
    //search 문자열을 조정해서 페이지 이동하게
    if (page > 1) navigate(location.pathname + "?page=" + (page - 1));
  };
  const goNext = () => {
    navigate(location.pathname + "?page=" + (page + 1));
  };

  return (
    <div className="card card-body">
      <h2>About {props.title}</h2>
      <div>
        <div className="m-2">현재 페이지: {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default About;
