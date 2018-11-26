// const app = "I don't do much.";

const token = 'f2148a5484698a891ec704b8a74adb93207eefe7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
