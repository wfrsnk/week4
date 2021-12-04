import http from 'http';
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
  };
const app = http.createServer(async(req,res)=>{
      if(req.url === '/result4/'){
          
          res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
          let data = '';
          await req.on('data', function(chunk){
            data += chunk;
            }).on('end', () => {
          })
          res.write(JSON.stringify({
            "message":"artem_wr",
            "x-result":headers,
            "x-body":data
            }
            ))
      }
      res.end()
      
  });
  app.listen(4321,()=>{
      console.log('Server is running')});