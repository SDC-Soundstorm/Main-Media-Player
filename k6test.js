import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1,
  duration: "10s"
};

const popularSongs = []

for (let i = 0; i < 500; i++) {
  let popularSong = Math.floor(Math.random()*10000000)
  popularSongs.push(popularSong)
}

export default function() { 
  let res
  const randomRequest = Math.random()
  if (randomRequest <= .30) {
    let randomSong = Math.floor(Math.random()*10000000)  
    res = http.get(`http://localhost:9000/song/${randomSong}`);
  } else if (randomRequest > .30 && randomRequest <.80) {
    let randomPopularSong = popularSongs[Math.floor(Math.random() * popularSongs.length)]
    res = http.get(`http://localhost:9000/song/${randomPopularSong}`);
  } else {
    let user_id = Math.floor(Math.random()*5000000)
    let song_id = Math.floor(Math.random()*10000000)
    let data = {
      comment: 'this is a post comment',
      comment_timeStamp: 2343,
      user_id: user_id,
      song_id: song_id,
    }
    res = http.post(`http://localhost:9000/comment/`, data)
  }
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(1);
};