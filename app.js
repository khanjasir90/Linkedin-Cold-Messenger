const express = require('express');
const app = express();
const axios = require('axios')
const querystring = require('querystring')
require('dotenv').config()

app.use(express.json())

app.get('/linkedinLogin', async (req,res,next) => {
    res.redirect('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='+process.env.CLIENT_ID+'&redirect_uri='+process.env.CALLBACK_URI+'&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social')
})

app.get('/',(req,res,next)=>{})
app.get('/auth/linkedin/callback',async(req,res,next)=> {
    const code = req.query.code
    const reponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', querystring.stringify({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: process.env.CALLBACK_URI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    }))
    let userToken = await reponse.data
    console.log(userToken.access_token)

})


app.listen(process.env.PORT,()=> console.log('Server Running on port ',process.env.PORT))