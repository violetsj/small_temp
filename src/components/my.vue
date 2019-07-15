<template>
  <div>
    <scroll-view scroll-y style="height:400px;">
      <div class="seller-wrapper">
        <img class="imgs" :src="'https://img.zhipuzi.com'+ Shop.logo+'!width600'" alt />
        <div class="grade">
          <span class="star">
            <i-rate count="5" value="4.0"></i-rate>
          </span>
          <span class="commentgrade">{{Info.commentgrade}}分</span>
          <span class="comment_num1">
            <span class="comment_num2">{{Shop.comment_num}}人已评论</span>
            <span class="enter">
              <i-icon type="enter" size="15" color="#666" />
            </span>
          </span>
        </div>

        <div class="item_bottom">
          <ul class="b_t_20">
            <li class="li">
              <div class="item1">
                <span>
                  <img
                    class="imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE3NThBNEQ0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE3NThBNEU0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTc1OEE0QjRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTc1OEE0QzRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj1GCAcAAAKBSURBVHjavJVPSFRRFIef04CbrBaVJFLYIgKrhUW1CAQ3MS6sWQQuXJVYBDWuQlqNSKJuNCxJNFzYQmhRrYY2gbuwGqMakKI/RNCiFkqFBVp9B34PLq95M+9pzoWPc989557fPXfuvVPlRWy5XG4rJgNnYJ+GX8NduJ5KpZai5KmKKNaMmYFvcBvycjXBOaiBdkRn1y2I2HHMIxiHHpL+CvirMQNwHlrwP16zIMk2Y17CQxJd4Luefj+k/BC4iu8Tvlv0T8JBvr+H5UyUKbATNkE3CRuwc7AXLgnrz8nXrdjOUgnLCdrvM8aKf2In4Tk08z1jWF9jk4oZ05z4W8qqt2O+wCFYhI/arleBuAPa9t2wDV7ADuK+xq2wQfYN1Kr/rkicP1arWHduLMFq2VUogB2EdJG4tHwFxbpzYwm+lW1ke5ax12CULTzhbKf1R82nmMbA3H9aMsxBgs8knKfbpoMxBLtglvFnCjsMN+TzFDtvc0MPDZOfYI84Y7/hMpNu4rOjf8V+E75XVFWT7pun+5nXuC3+vYkzZjtxUdW7u/g0KTFL9sMRXFZ/Gvrs2YI7qjzvPG1ua9cTN61vuyZLjuAW07IK/9B5QKLTIdcji+mA/X6VRWJs4Qu2KGKyITEfMHsSEd7uEa0uUyImo5iRcsnKCrJiu/Q9kNVbGly5jWX1sC+uW1BtSq/JcBHfsHxTURJFEmTl9jt32bGnorRTXVpXoUsx3v+q0NMb2gsTCNUZ1rex4PtaqiW9eG0QWp3tW9BY5JaIE0wlq7oiR0WHxjZGUKJ2n84a6sdqcbfUF73nrbElvAq3igv6W3qMY35/g7V2+oIF/XGeqkCBhb8CDABJW98nvik2bgAAAABJRU5ErkJggg=="
                    alt
                  />
                </span>
                <span class="shopaddress">{{Shop.shopaddress}}</span>
              </div>
            </li>
            <li class="li">
              <div class="item1">
                <span>
                  <img
                    class="imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAhBAMAAAA4x9bUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t8XOaPgAAAANdFJOUwD45A5PONEhjXS7p2KWcSILAAABa0lEQVQY02NgYJ+lKOXAAAcVimqKS+A89ibtKbOkCmBcS6XpxSaJ0xkYzItB3DAJAwaGxlQGhoidzkDuJCCLwU2HgcFLaA1Qy6atQG60JAOD6SzBdgaGJCBmsJAwYA5xnSZRwKA0Gcr1aLEBssHcakkDZi+145NSwFzmSToMpic3qlRLg/XWJG5lsFwZKR2ZxrBoOwNrk5Qzg41Sq9qRhQxNSxl4FLcaMLA3piZN2chwKIWBUw3ko6glu4GyUZoMrIsOALkm7q4lmxispQuYJy4HcpmBGnwYeIAqwd6A+ndjA9CTDgzGUJGJqUChraYnj0K4UUCVbhKnkzLcocEBdIOi4OpEjQCI5qUMzLNWuJ6ABCCzG9CbpuEM7MekwNI2YD8C3ZHYDpZu1IFYckgFTFmLQWKBWxJMsW7MAdMcUMdFC7WCqCqILMj/R4uZS4E2QkDlQq0ely4xZ5hHPJLU0pRyEP46nSSYDZQEAA6sXdmkYA7KAAAAAElFTkSuQmCC"
                    alt
                  />
                </span>
                <span class="shopaddress">{{Shop.orderphone}}</span>
                <img class="img3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUxpcfp5evp5evp5evp5evp5evp5evp5evp5evp5evp5ekeeC+QAAAAKdFJOUwAU512hwtc59oFAbnxYAAABPElEQVQ4y3VUsU7DQAx1RCHqVhXo0K1iAG4KSCydqBBLp0owsXVCdIo6MrIgMTKhbpSAWn8llzv7YifyWy56l3vx8z0HgHB8f4Fvj1egkd1gxMNA0Z/IuJQb19jgrKFPUGKWVFaK/2OlNWqc0+uuxW/jgRG2sQz8vMNXNX2AXRSeH0ZNxU88vwl0eSr5PVcz0SZ8RVG+BHjVHzgM+16vJ/kFjJnvS/4bpmH1Do8k/0Ouipa9Cp7Cegu5MvALjvQy3Tr44I5sJL8DeihjwQmQWqtvjXRqoZHSccm5PLClOhHfAXxLX+ZcJ9vZ+dZ9VZCvSHaKzYGsDIdCH8bpU0VMB/lsyq5iPFzss7j255rOuTqnkznkZMm+3A1yR/dOOWE/LuXEypWVQzO3Vs6tuTDnyJo7c07Nubb+A93/xj/Caei6Z5mAsgAAAABJRU5ErkJggg==" alt="">
              </div>
            </li>
            <li class="li3">
              <div class="item3">
                <span>
                  <img
                    class="imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdBAMAAACkvXo8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURbe3t0xpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3tzatkqkAAAALdFJOU/0AZNovdgysHJK3YJBOXgAAAP5JREFUGNNlkT1vwjAQhk8xEurmCyENGwlfGV11KGORkLoG0QpGIljYjIQ6B1Xdk6Vzpv7O3tlOFNFXkeXH53Pu3gMkRQsFLynvJNASaBDPAFfHYSne6XALP5a/RIxI30TcmCP1ieh7dE8vmY8PaBlHIicuL0PL36grCYHIy8pwvTr2JDx6eM5d3O9LKJ6wyUdUBxhvOpyNQa86/KpBYYelAoFhkiQL5iAdAPEQSJ65ZDj6IM2buM13onz7vhO9b//vlGVc38nCmuoruP4yZgzVjeun/t5yE58h90f9t+l11fgTTFt/IvXr/KuXrb8cd/7+8/9+PjS/Hc1vbxr4A/0IOLqV6gkjAAAAAElFTkSuQmCC"
                    alt
                  />
                </span>
                <span class="time">营业时间:</span>
                <span class="time1" v-for="(item,index) in Time" :key="index">
                  <span class="times">{{item.start}}-{{item.stop}}</span>
                </span>
              </div>
            </li>
            <li class="li">
              <div class="item1">
                <span>
                  <img
                    class="imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE3NThBNEQ0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE3NThBNEU0RTg1MTFFNzg2ODBGRUM2MDI4Q0Q3QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTc1OEE0QjRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTc1OEE0QzRFODUxMUU3ODY4MEZFQzYwMjhDRDdDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj1GCAcAAAKBSURBVHjavJVPSFRRFIef04CbrBaVJFLYIgKrhUW1CAQ3MS6sWQQuXJVYBDWuQlqNSKJuNCxJNFzYQmhRrYY2gbuwGqMakKI/RNCiFkqFBVp9B34PLq95M+9pzoWPc989557fPXfuvVPlRWy5XG4rJgNnYJ+GX8NduJ5KpZai5KmKKNaMmYFvcBvycjXBOaiBdkRn1y2I2HHMIxiHHpL+CvirMQNwHlrwP16zIMk2Y17CQxJd4Luefj+k/BC4iu8Tvlv0T8JBvr+H5UyUKbATNkE3CRuwc7AXLgnrz8nXrdjOUgnLCdrvM8aKf2In4Tk08z1jWF9jk4oZ05z4W8qqt2O+wCFYhI/arleBuAPa9t2wDV7ADuK+xq2wQfYN1Kr/rkicP1arWHduLMFq2VUogB2EdJG4tHwFxbpzYwm+lW1ke5ax12CULTzhbKf1R82nmMbA3H9aMsxBgs8knKfbpoMxBLtglvFnCjsMN+TzFDtvc0MPDZOfYI84Y7/hMpNu4rOjf8V+E75XVFWT7pun+5nXuC3+vYkzZjtxUdW7u/g0KTFL9sMRXFZ/Gvrs2YI7qjzvPG1ua9cTN61vuyZLjuAW07IK/9B5QKLTIdcji+mA/X6VRWJs4Qu2KGKyITEfMHsSEd7uEa0uUyImo5iRcsnKCrJiu/Q9kNVbGly5jWX1sC+uW1BtSq/JcBHfsHxTURJFEmTl9jt32bGnorRTXVpXoUsx3v+q0NMb2gsTCNUZ1rex4PtaqiW9eG0QWp3tW9BY5JaIE0wlq7oiR0WHxjZGUKJ2n84a6sdqcbfUF73nrbElvAq3igv6W3qMY35/g7V2+oIF/XGeqkCBhb8CDABJW98nvik2bgAAAABJRU5ErkJggg=="
                    alt
                  />
                </span>
                <span class="area">服务区域:</span>
                <span class="shopaddress">点此查看有效区域</span>
              </div>
            </li>

            <li class="li">
              <div class="item1">
                <span>
                  <img class="imgs" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t3A++QAAAAALdFJOUwCBQFzyoL4Y0woqOvh4YAAAAR1JREFUGNNtUT1Lw1AUPWmsoXF5kTgUl/LWtwjVKYtBxIpLRYeIS1yK4BLB7g4KgksR3YOOLqXBD3x/zvM+CqV6A4938s6999xzAUZn504PTibwEaXfx/2Nx7zyeDuvecbpnoMvH+4hOj+zyVdbnhd+mhLt2bwO1JBHxue+JzTM2udlhI6UssJpheDA4pbWWuBG4FlglfcSWBMIDpHViOWDrC2OGxSwfFiMe34OS6mIC+Rsy/yprYcUbPkkN2XPqcoMjoQC5pj81tThruGzXrirdDmzvwrTLyiVrBuEX6Yf9bR/yD/S+tbood6Vywy4TpKJ0ct53sfae8l5OG+BVI8YFxhXxo834DVhrFvOgl9Y8rO35Lf4dx9/9rW4z180tUxvlW0ZfAAAAABJRU5ErkJggg==" alt="">
                </span>
                <span class="area">起送价:</span>
                <span class="shopaddress">{{Info.basicprice}}</span>
              </div>
            </li>

             <li class="li">
              <div class="item1">
                <span>
                  <img class="imgs" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcbe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t8XOaPgAAAANdFJOUwDw/l6fFyoIR9O5iHJojWhNAAABOElEQVQY02NgAAJ2k4lKks4FDFDAulHTx/jIJOkAKN9QOgFIsm0UhnBLVCASrE7uYM2LDKDqmLVARrBowMxhaHIAEkYgaXagCQkMzMpAXSIMXQUM3KIMzGoMDI4BIFbiVAb2KQycQMWBGxgKNzCwShUwdBYcBNrCLc5gBNSZaDZz1SrBVdMY2JQZPEFOYT1svNDY+CgDwxQghICdYNKTQYaBPTUM6A4vMP8ggzIDq5JSCEj7qlVAxwD5DOFNNXvOaJ05swfElwG5k4GBR9AVon4KhJ+4dWED2DxPMJ9DqoBHpQBkH8g9TWwgrwOdDXQP0L08SttmgFw1DeReoH8cO6RaQYaFBQD9wyrCocGQpaQoKSiklBAVAAoPoAllHcYdHR1gJyKFFwNqeHIkoIX3BqzxgRFfyPEJAMuoSyM8cwC9AAAAAElFTkSuQmCC" alt="">
                </span>
                <span class="area">配送费:</span>
                <span class="shopaddress">{{Info.delivery_fee}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img class="img1" src="http://img.zhipuzi.com/upload_files/image/20190524/lKun1onwHMGWmX323vqFCvxmPUXHprbq.jpg!/fwfh/162x44" alt="">
          <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAVCAYAAAAO5tEoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVFNzc1NEU3OEJEMTFFOTkwREU5QzM0MkFEMzQwMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVFNzc1NEY3OEJEMTFFOTkwREU5QzM0MkFEMzQwMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUU3NzU0Qzc4QkQxMUU5OTBERTlDMzQyQUQzNDAyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUU3NzU0RDc4QkQxMUU5OTBERTlDMzQyQUQzNDAyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgAN/CcAAA+ESURBVHjaxJwLdFTF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" alt="">
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: {},
      Shop: {},
      Time: []
    };
  },
  mounted() {
    this.$apis.info().then(res => {
      this.Info = res.data;
      this.Shop = res.data.shop;
      this.Time = res.data.shop.business_hours;

      // console.log(res.data);
      // console.log(res.data.commentgradePeople);
    });
  }
};
</script>

<style lang="scss">
.seller-wrapper {
  .imgs {
    width: r(375);
    height: r(275);
  }
  .grade {
    margin-left: r(16);
    padding: r(9) 0 r(12);
    .commentgrade {
      color: #fcbb2b;
      font-size: r(14);
      font-weight: bold;
    }
    .comment_num1 {
      padding-left: r(100);
      .enter {
        padding-left: r(10);
      }
      .comment_num2 {
        font-size: r(16);
      }
    }
  }
  .item_bottom {
    margin-left: r(16);
    .b_t_20 {
      .li {
        padding: r(14) 0 r(12);
        .item1 {
          .imgs {
            width: r(18);
            height: r(18);
          }
          .shopaddress {
            padding-left: r(15);
            font-size: r(16);
            color: #000;
          }
          .area{
             padding-left: r(20);
          }
        }
      }
      .li3 {
        .item3 {
          width: r(320);
          height: r(50);
          line-height: r(50);
          white-space:nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .imgs {
            width: r(18);
            height: r(18);
          }
          .time{
            padding-left: r(20);
          }
          .time1 {
              padding-left: r(15);
            .times {
              font-size: r(12);
            }
          }
        }
      }
    }
    .img3{
      width: r(20);
      height: r(20);
      margin-left: r(180);
    }
  }
  .img1{
    width: r(16);
    height: r(16);
    margin-left:r(180);
  }
  .img2{
    width: r(87);
    height: r(8);
    margin-left: r(140);

  }
}
</style>
