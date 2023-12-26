//js 파일이다. css 파일이 아니다.
//css 를 js 문법으로 (json object)
//jsx 도 js 파일이다. 단지 js 파일내에 jsx 구문이 있는 경우 jsx 확장자로 흔히 선언하는
//것 뿐이다.. 
//이 파일내에는 jsx 구문이 없어서 확장자를 js
const styles = {
  textStyle: {
    // js 문법임으로 came case 로.. 문자열은 "" 로 묶여야 하고...
    fontStyle: "italic",
    textDecoration: "underline"
  },
  dashStyle: {
    //css 로 작성된 것을 js 문법에 맞게 변형해서 사용해야 하는데..
    //https://transform.tools/css-to-js
    backgroundColor: "#fff", 
    borderTop: "2px dashed gray"
  }
}
export default styles