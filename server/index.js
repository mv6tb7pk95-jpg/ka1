import http from 'node:http';
const port = Number(process.env.PORT || 3000);
const server=http.createServer((req,res)=>{
  if(req.url==='/api/status' && req.method==='GET'){
    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});
    res.end(JSON.stringify({server:'연결됨',sandbox:'제공 안 함 — 격리 환경 미검증',authentication:'미구현',ai:'미구현',plugins:'미구현'}));return;
  }
  res.writeHead(404,{'Content-Type':'application/json; charset=utf-8'});
  res.end(JSON.stringify({error:'not_found'}));
});
server.listen(port,()=>console.log(`Status server listening on ${port}`));
