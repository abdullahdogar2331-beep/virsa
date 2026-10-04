const movies=[
{id:"virsa-01",title:"The Journey of Punjab",year:"2016",genre:"Drama",rating:"8.3",duration:"2h 16m",poster:"https://i.ytimg.com/vi/PAEMzGrjifw/hqdefault.jpg",desc:"Official full Punjabi movie presented on YouTube by Lokdhun Punjabi.",youtube:"https://www.youtube.com/watch?v=PAEMzGrjifw",channel:"Lokdhun Punjabi"},
{id:"virsa-02",title:"Punjabi Full Movie",year:"2021",genre:"Comedy",rating:"8.2",duration:"2h 05m",poster:"https://i.ytimg.com/vi/tFu1PJluDdM/hqdefault.jpg",desc:"Full Punjabi movie release from verified YouTube channel Kumar Films.",youtube:"https://www.youtube.com/watch?v=tFu1PJluDdM",channel:"Kumar Films"},
{id:"virsa-03",title:"Doorbeen",year:"2020",genre:"Comedy",rating:"8.1",duration:"2h 00m",poster:"https://i.ytimg.com/vi/o1V4vJ1kvt8/hqdefault.jpg",desc:"Punjabi full movie presented by Yellow Music, starring Ninja, Wamiqa Gabbi, Jass Bajwa and Jasmin Bajwa.",youtube:"https://www.youtube.com/watch?v=o1V4vJ1kvt8",channel:"Yellow Music"},
{id:"virsa-04",title:"Baaz",year:"2014",genre:"Action",rating:"8.0",duration:"2h 20m",poster:"https://i.ytimg.com/vi/sihl7OX7dSI/hqdefault.jpg",desc:"Punjabi action film starring Babbu Maan, presented on YouTube by Lokdhun Punjabi.",youtube:"https://www.youtube.com/watch?v=sihl7OX7dSI",channel:"Lokdhun Punjabi"},
{id:"virsa-05",title:"Goreyan Nu Daffa Karo",year:"2014",genre:"Comedy",rating:"8.0",duration:"2h 04m",poster:"https://i.ytimg.com/vi/fsO_INKi4Xo/hqdefault.jpg",desc:"Punjabi comedy film starring Amrinder Gill, presented on YouTube by Lokdhun Punjabi.",youtube:"https://www.youtube.com/watch?v=fsO_INKi4Xo",channel:"Lokdhun Punjabi"}
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const favs=()=>JSON.parse(localStorage.getItem("virsa-favorites")||"[]");
const saveFavs=a=>localStorage.setItem("virsa-favorites",JSON.stringify(a));

function card(m){const on=favs().includes(m.id);return `<article class="card"><div class="poster"><img src="${m.poster}" alt="${m.title}" loading="lazy"><span class="rate">★ ${m.rating}</span><button class="fav-mini" data-fav="${m.id}">${on?"♥":"♡"}</button></div><h3 data-movie="${m.id}">${m.title}</h3><small>${m.year} · ${m.genre}</small></article>`}

function render(id,list){$(id).innerHTML=list.map(card).join("");bindCards($(id))}
function bindCards(root=document){root.querySelectorAll("[data-movie]").forEach(x=>x.onclick=()=>openMovie(x.dataset.movie));root.querySelectorAll("[data-fav]").forEach(x=>x.onclick=e=>{e.stopPropagation();let a=favs(),i=a.indexOf(x.dataset.fav);i>=0?a.splice(i,1):a.push(x.dataset.fav);saveFavs(a);refresh()})}
function refresh(){
  render("#trending",movies.slice(0,5));
  render("#latest",[...movies].reverse());
  render("#classics",[movies[0],movies[3],movies[4]]);
  render("#actionDrama",movies.filter(m=>["Action","Drama"].includes(m.genre)));
  render("#comedyHits",movies.filter(m=>m.genre==="Comedy"));
  render("#romanceFamily",[movies[0],movies[2],movies[4]]);
  render("#topRated",[...movies].sort((a,b)=>b.rating-a.rating));
  render("#webSeries",movies.filter(m=>["Drama","Comedy"].includes(m.genre)));
  render("#drama",movies.filter(m=>m.genre==="Drama"));
  render("#comedy",movies.filter(m=>m.genre==="Comedy"));
  renderFavorites()
}
function renderFavorites(){const list=movies.filter(m=>favs().includes(m.id));$("#favoriteGrid").innerHTML=list.length?list.map(card).join(""):'<div class="empty">Your collection is empty. Tap ♡ on a movie to save it here.</div>';bindCards($("#favoriteGrid"))}

function openMovie(id){const m=movies.find(x=>x.id===id);if(!m)return;$("#modalPoster").src=m.poster;$("#modalPoster").alt=m.title;$("#modalTitle").textContent=m.title;$("#modalGenre").textContent=m.genre.toUpperCase();$("#modalMeta").textContent=`${m.year}  •  ${m.duration}  •  ★ ${m.rating}  •  ${m.channel}`;$("#modalDesc").textContent=m.desc;const b=$("#watchBtn");b.href=m.youtube;b.style.opacity="1";b.style.pointerEvents="auto";$("#saveBtn").textContent=favs().includes(id)?"♥ Saved":"♡ My List";$("#saveBtn").dataset.id=id;$("#movieModal").classList.add("open")}

$("#modalClose").onclick=()=>$("#movieModal").classList.remove("open");
$("#movieModal").onclick=e=>{if(e.target.id==="movieModal")$("#movieModal").classList.remove("open")};
$("#saveBtn").onclick=()=>{const id=$("#saveBtn").dataset.id;let a=favs(),i=a.indexOf(id);i>=0?a.splice(i,1):a.push(id);saveFavs(a);refresh();$("#saveBtn").textContent=favs().includes(id)?"♥ Saved":"♡ My List"};

function openSearch(){$("#searchOverlay").classList.add("open");$("#searchInput").focus();search("")}
$("#searchOpen").onclick=openSearch;
$("#searchClose").onclick=()=>$("#searchOverlay").classList.remove("open");
$$("[data-search]").forEach(b=>b.onclick=openSearch);
$$("[data-scroll]").forEach(b=>b.onclick=()=>$(b.dataset.scroll).scrollIntoView({behavior:"smooth"}));

const genres=["All","Action","Drama","Comedy"];
$("#chips").innerHTML=genres.map(g=>`<button class="chip ${g==="All"?"active":""}" data-genre="${g}">${g}</button>`).join("");
let active="All";
function search(q){const s=q.toLowerCase().trim();const list=movies.filter(m=>(active==="All"||m.genre===active)&&[m.title,m.genre,m.year,m.channel].some(v=>v.toLowerCase().includes(s)));$("#searchResults").innerHTML=list.length?list.map(card).join(""):'<div class="empty">No movies found.</div>';bindCards($("#searchResults"))}
$("#searchInput").oninput=e=>search(e.target.value);
$("#chips").onclick=e=>{if(!e.target.dataset.genre)return;active=e.target.dataset.genre;$$(".chip").forEach(c=>c.classList.toggle("active",c===e.target));search($("#searchInput").value)};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelectorAll(".open").forEach(x=>x.classList.remove("open"))}});
window.addEventListener("scroll",()=>$("#nav").classList.toggle("scrolled",scrollY>25));
refresh();