const express = require('express');
const app = express();
require('dotenv').config()

app.get('/linkedinLogin', async (req,res,next) => {
    res.redirect('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='+process.env.CLIENT_ID+'&redirect_uri='+process.env.CALLBACK_URI+'&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social')
})

app.get('/',(req,res,next)=>{})
app.get('/auth/linkedin/callback',(req,res,next)=> {
    const code = req.query.code
    const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken',{
        method:'POST',
        headers: {
            'Content-Type': application/x-www-form-urlencoded
        },
        body: {
            grant_type=authorization_code,
            code=code,
            redirect_uri=process.env.CALLBACK_URI,
            client_id=process.env.CLIENT_ID,
            client_secret=process.env.CLIENT_SECRET,
        }
    })
    if(response.ok) {
        const data = await response.json()
        console.log(data)
    }
})


app.listen(process.env.PORT,()=> console.log('Server Running on port ',process.env.PORT))