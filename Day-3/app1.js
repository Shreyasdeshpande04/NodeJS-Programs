const http=require('http')
const server=http.Server((req,res)=>{
    if(req.url=='/'){
        res.write("<h1> welcome to home</h1>")
        res.end()
    }
    else if(req.url==='/admin'){
           res.write("<h1> welcome to admin</h1>")
        res.end()

    }
    else{
           res.write("<h1> 404 page not found</h1>")
        res.end()
    }
})

const port=3000
server.listen(port,()=>{
    console.log(`running on port no ${port}`);
})