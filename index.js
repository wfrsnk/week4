import http from 'http';
const PORT = process.env.PORT || 3000;
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
};

const server = http.createServer(async(request,response)=>{
  if(request.url === '/result4/'){
    let data = '';
    
    response.writeHead(200,{
      'Content-Type':'application/json',
      ...CORS,
    });
    
    await request.on('data', function(chunk){
      data += chunk;
      }).on('end', () => {
    });
    
    response.write(JSON.stringify({
      "message":"artem_wr",
      "x-result":request.headers["x-test"],
      "x-body":data
    }));
  }
  
  response.end();
});


server.listen(PORT, () => {
    console.log(`Server has been started...`);
});