import db from '../model/UserModel';
import mailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';

const getData = async (req, res) => {
    try {
        const data = await db.find();

        return res.json(data)
    } catch (e) {
        console.log(e)
    }

}
const getUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await db.findById(id);
        return res.json({ data })
    } catch (e) {
        console.log(e)
    }

}
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const findUser = await db.findByIdAndUpdate(id, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,

        }, { new: true })
        res.json(findUser)
    } catch (error) {
        res.json({
            msg: 'Update user fail, user not exists',
            error: error.message
        })
    }


}
const postData = async (req, res) => {
    const email = req.body.email;
    const findUser = await db.findOne({ email: email })
    if (!findUser) {
        const findUser = await db.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password,
        });
        res.json({
            status: 200,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            password: findUser?.password
        })
    } else {
        res.json({
            msg: "User already exists",
            status: 500
        })
    }
}
const loginUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await db.findOne({ email });
    if (findUser && (await findUser.comparePassword(req.body.password))) {
        res.json({
            message: "login success",
            token: jwt.sign({ email: findUser.email, password: findUser.password }, "RESTFULL_API")
        })


    } else {
        res.json({
            message: "User not exist , Authentication fail",
        })
    }
}
const gethomeCRUD = async (req, res) => {
    const data = await db.find({ Username: 'chocon' })
    try {
        res.render('homeCrud.ejs', { DataTable: JSON.stringify(data) })

    } catch (error) {
        res.send('error', error)
    }
}
const deleteData = async (req, res) => {
    const { id } = req.params;
    try {
        const delData = await db.findOneAndDelete(id);
        res.status(200).json(delData);
        console.log('delete done', delData)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}
const getMail = (req, res) => {
    return res.render('mail.ejs')
}
const sendMail = async (req, res, next) => {
    try {
        const transporter = mailer.createTransport({ // config mail server
            service: "gmail",
            auth: {
                user: 'sangdoan123456789@gmail.com',
                pass: 'Ducsang1995py@'
            }
        });

        const info = transporter.sendMail({
            from: 'sangdoan123456789@gmail.com', // sender address
            to: "sangdd2512cv@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }).then((info) => {
            res.status(200).json({
                message: "send mail success",
                info: info.messageId,
                preview: mailer.getTestMessageUrl(info)
            })
        }).catch((error) => { res.status(500).json(error) })

    } catch (error) {
        console.log(`send fail${error}`)
    }

}



module.exports = {
    getData: getData,
    getUserId: getUserId,
    postData: postData,
    deleteData: deleteData,
    updateUser: updateUser,
    gethomeCRUD: gethomeCRUD,
    getMail: getMail,
    sendMail: sendMail,
    loginUser: loginUser
}