"use strict"
var auth = auth || {}
auth = (()=>{
  const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.'
  let _,js,css,img,auth_vue_js,router_js
  let init =()=>{
     _=$.ctx()
     js=$.js()
     css=$.css()
     img=$.img()
     auth_vue_js = js+'/vue/auth_vue.js'
     router_js = js+'/cmm/router.js'
  }
  let onCreate =()=>{
       init()
       $.when(
             $.getScript(auth_vue_js)
       ).done(()=>{
           setContentView()
       }).fail(()=>{
           alert(WHEN_ERR)
       })
  }
    let setContentView =()=>{
        $('head').html(auth_vue.login_head({css:$.css(), img: $.img()}))
        $('body').html(auth_vue.login_body({css:$.css(), img: $.img()})).addClass('text-center')
        bugs()
        cgv()
        eng()
        ready()
    }                
    let bugs =()=>{
        $('<button>',{
            type : "submit",
            text : "BUGS CRAWL",
            click : e=>{
                e.preventDefault()
                alert('벅스 크롤링!')
                    
                $('#main').empty()
                $('<textarea id="text1" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/bugscrawling',d=>{
                    alert('ㄱㄱ')
                    bugscrawl(d)
                })
                    
            }
        }).addClass("button").appendTo('#bugs')
        
        
    }
    let cgv =()=>{
        $('<button>',{
            type : "submit",
            text : "CGV CRAWL",
            click : e=>{
                alert('cgv 크롤링!')
                $('#main').empty()
                e.preventDefault()
                 $('#main').empty()
                $('<textarea id="text2" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/cgvcrawling',d=>{
                    cgvcrawl(d)
                })
                
            }
        }).addClass("button").appendTo('#cgv')
    }
    let eng =()=>{
        $('<button>',{
            type : "submit",
            text : "ENG CRAWL",
            click : e=>{
                alert('eng 크롤링!')
                $('#main').empty()
                e.preventDefault()
                 $('#main').empty()
                $('<textarea id="text3" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/engcrawling',d=>{
                	engcrawl(d)
                })
            
            }
        }).addClass("button").appendTo('#eng')
    }
    let ready =()=>{
        $('<button>',{
            type : "submit",
            text : "COMING SOON",
            click : e=>{
                alert('아직 활성화 되지 않은 기능입니다')
                e.preventDefault()
                
            }
        }).addClass("button").appendTo('#ready')
    }
    let bugscrawl =d=>{
          $.each(d,(i,j)=>{
              $('#text1').append(j)
          })
      }
      let cgvcrawl =d=>{
           $.each(d.list,(i,j)=>{
              $('#text2').append(j)
          })
      }
      let engcrawl = d =>{
           $.each(d,(i,j)=>{
              $('#text3').append(j)
          })
      }
        return{onCreate}
    
})()