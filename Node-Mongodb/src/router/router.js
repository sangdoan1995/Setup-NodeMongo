import express from 'express';
import home from '../controller/homeController'

const router = express.Router()

const webRouter = (app) => {
    router.get('/allUser', home.getData);
    router.get('/:id', home.getUserId);
    router.post('/register', home.postData);
    router.post('/login', home.loginUser)
    router.put('/:id', home.updateUser);
    router.get('/get-crud', home.gethomeCRUD)
    router.get('/get-mail', home.getMail);
    router.post('/send', home.sendMail)
    router.delete('/:id', home.deleteData)
    return app.use('/', router)
}
module.exports = webRouter