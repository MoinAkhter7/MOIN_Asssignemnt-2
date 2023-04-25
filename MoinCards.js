//body
document.body.style.backgroundColor='paleturquoise'


// Creating header
let a0=document.getElementById('first1')
let create=document.createElement('h1')
create.innerHTML='<h1 id="header">~Invitations for various Programs~</h1>'
a0.prepend(create)
let a=document.getElementById('header')
a.style.textAlign="center"
a.style.fontStyle='oblique'
a.style.color='darkseagreen'
a.style.marginBottom='10px'
a.style.marginTop='20px'

//all cards
let b=document.getElementsByClassName('card')
for(let i=0;i<b.length;i++){
    b[i].style.padding='10px'
    b[i].style.backgroundColor='lightcyan'
}

//for heading assignment
let c=document.getElementById('first')
let d=document.getElementById('second')
let e=document.getElementById('third')
c.style.textAlign='center'
d.style.textAlign='center'
e.style.textAlign='center'
c.style.fontStyle='italic'
d.style.fontStyle='italic'
e.style.fontStyle='italic'
c.style.color='mediumvioletred'
d.style.color='mediumvioletred'
e.style.color='mediumvioletred'

//links
let links=document.getElementsByClassName('btn')
for(let k=0;k<links.length;k++){

    links[k].style.backgroundColor='lightpink'
    links[k].style.border='1px solid darkorchid'
    links[k].style.color='aquamarine'
    links[k].style.font='italic bold 20px arial,serif'
    links[k].style.marginLeft='30px'
   
}

//bold names
let bold=document.getElementsByTagName('span')
for(let l=0;l<bold.length;l++){
    bold[l].style.color='orange'
    bold[l].style.font='italic bold 20px arial,serif'
}

//paragraphs
let p=document.getElementsByClassName('card-text')
for(let m=0;m<p.length;m++){
    p[m].style.color='darkslategray'
}

//images
let img=document.getElementsByClassName('card-img-top')
img.setAttribute('alt','ASSIGNMENTS')






