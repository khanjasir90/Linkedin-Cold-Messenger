const express = require('express');
const app = express();
require('dotenv').config()

app.get('/linkedinLogin', async (req,res,next) => {
    res.redirect('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='+process.env.CLIENT_ID+'&redirect_uri='+process.env.CALLBACK_URI+'&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social')
})

app.get('/',(req,res,next)=>{})
app.get('/auth/linkedin/callback',(req,res,next)=> {

})


app.listen(process.env.PORT,()=> console.log('Server Running on port ',process.env.PORT))