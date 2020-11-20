let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/* 您好，我是一名前端新人
 * 5分钟后，您可能会觉得我并没有那么新
 * 注意，接下来可能会出现一个【太极】
 * 
 * 上帝说：要有一个正方形
 **/
#taiji{
  border:1px solid red;
  width: 300px;
  height: 300px;
}

/* 然后，把正方形变成一个圆 */
#taiji{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}

/* 太极生两仪 */
#taiji{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 两仪生小弟 */
#taiji::before{
  width: 150px;
  height: 150px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
}
#taiji::after{
  width: 150px;
  height: 150px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #FFF;
  border-radius: 50%;
}

/* 小弟生……我编不出来了 */
#taiji::before{
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#taiji::after{
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

/* 大功告成！4张Ace！ */
`
let string2 = ''
let n = 1
// string = string.replace(/\n/g, '<br>')

function step() {
  setTimeout(() => {
    if (n >= string.length) {
      return
    }
    // 如果是回车
    if (string[n] === '\n') {
      string2 += '<br>'
      // 如果是空格
    } else if (string[n] === ' ') {
      string2 += '&nbsp;'
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    step.call()
    n++
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
  }, 50)
}
step.call()
