const movies=[
{id:"virsa-01",title:"Dulla Vaily",year:"2026",genre:"Action",rating:"8.4",duration:"2h 10m",poster:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=85",desc:"Discover Punjabi cinema in one premium home. Explore this title and open its external release.",youtube:"https://www.youtube.com/watch?v=MyzCNmZvVvs"},
{id:"virsa-02",title:"The Journey of Punjab",year:"2016",genre:"Drama",rating:"8.3",duration:"2h 16m",poster:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=85",desc:"A Punjabi cinema pick presented through an external release.",youtube:"https://www.youtube.com/watch?v=PAEMzGrjifw"},
{id:"virsa-03",title:"Saanjh",year:"2024",genre:"Romance",rating:"8.1",duration:"1h 58m",poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=85",desc:"A VIRSA catalog title. Add an authorized release link before publishing.",youtube:""},
{id:"virsa-04",title:"Pind Stories",year:"2023",genre:"Drama",rating:"7.9",duration:"2h 02m",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=85",desc:"A VIRSA catalog title. Add an authorized release link before publishing.",youtube:""},
{id:"virsa-05",title:"Mehfil",year:"2022",genre:"Comedy",rating:"8.0",duration:"1h 52m",poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=85",desc:"A VIRSA catalog title. Add an authorized release link before publishing.",youtube:""}];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const favs=()=>JSON.parse(localStorage.getItem("virsa-favorites")||"[]");
const saveFavs=a=>localStorage.setItem("virsa-favorites",JSON.stringify(a));

function card(m){const on=favs().includes(m.id);return `<article class="card"><div class="poster"><img src="${m.poster}" alt="${m.title}" loading="lazy"><span class="rate">★ ${m.rating}</span><button class="fav-mini" data-fav="${m.id}">${on?"♥":"♡"}</button></div><h3 data-movie="${m.id}">${m.title}</h3><small>${m.year} · ${m.genre}</small></article>`}

function render(id,list){$(id).innerHTML=list.map(card).join("");bindCards($(id))}
function bindCards(root=document){root.querySelectorAll("[data-movie]").forEach(x=>x.onclick=()=>openMovie(x.dataset.movie));root.querySelectorAll("[data-fav]").forEach(x=>x.onclick=e=>{e.stopPropagation();let a=favs(),i=a.indexOf(x.dataset.fav);i>=0?a.splice(i,1):a.push(x.dataset.fav);saveFavs(a);refresh()})}
function refresh(){render("#trending",movies.slice(1,4));render("#latest",movies.slice(2));render("#topRated",[...movies].sort((a,b)=>b.rating-a.rating));render("#drama",movies.filter(m=>m.genre==="Drama"));render("#comedy",movies.filter(m=>m.genre==="Comedy"));renderFavorites()}
function renderFavorites(){const list=movies.filter(m=>favs().includes(m.id));$("#favoriteGrid").innerHTML=list.length?list.map(card).join(""):'<div class="empty">Your collection is empty. Tap ♡ on a movie to save it here.</div>';bindCards($("#favoriteGrid"))}

function openMovie(id){const m=movies.find(x=>x.id===id);if(!m)return;$("#modalPoster").src=m.poster;$("#modalPoster").alt=m.title;$("#modalTitle").textContent=m.title;$("#modalGenre").textContent=m.genre.toUpperCase();$("#modalMeta").textContent=`${m.year}  •  ${m.duration}  •  ★ ${m.rating}`;$("#modalDesc").textContent=m.desc;const b=$("#watchBtn");b.href=m.youtube||"#";b.style.opacity=m.youtube?"1":".45";b.style.pointerEvents=m.youtube?"auto":"none";$("#saveBtn").textContent=favs().includes(id)?"♥ Saved":"♡ Save";$("#saveBtn").dataset.id=id;$("#movieModal").classList.add("open")}

$("#modalClose").onclick=()=>$("#movieModal").classList.remove("open");
$("#movieModal").onclick=e=>{if(e.target.id==="movieModal")$("#movieModal").classList.remove("open")};
$("#saveBtn").onclick=()=>{const id=$("#saveBtn").dataset.id;let a=favs(),i=a.indexOf(id);i>=0?a.splice(i,1):a.push(id);saveFavs(a);refresh();$("#saveBtn").textContent=favs().includes(id)?"♥ Saved":"♡ Save"};

function openSearch(){$("#searchOverlay").classList.add("open");$("#searchInput").focus();search("")}
$("#searchOpen").onclick=openSearch;
$("#searchClose").onclick=()=>$("#searchOverlay").classList.remove("open");
$$("[data-search]").forEach(b=>b.onclick=openSearch);
$$("[data-scroll]").forEach(b=>b.onclick=()=>$(b.dataset.scroll).scrollIntoView({behavior:"smooth"}));

const genres=["All","Action","Drama","Romance","Comedy"];
$("#chips").innerHTML=genres.map(g=>`<button class="chip ${g==="All"?"active":""}" data-genre="${g}">${g}</button>`).join("");
let active="All";
function search(q){const s=q.toLowerCase().trim();const list=movies.filter(m=>(active==="All"||m.genre===active)&&[m.title,m.genre,m.year].some(v=>v.toLowerCase().includes(s)));$("#searchResults").innerHTML=list.length?list.map(card).join(""):'<div class="empty">No movies found.</div>';bindCards($("#searchResults"))}
$("#searchInput").oninput=e=>search(e.target.value);
$("#chips").onclick=e=>{if(!e.target.dataset.genre)return;active=e.target.dataset.genre;$$(".chip").forEach(c=>c.classList.toggle("active",c===e.target));search($("#searchInput").value)};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelectorAll(".open").forEach(x=>x.classList.remove("open"))}});
refresh();