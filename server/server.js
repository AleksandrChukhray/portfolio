const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const config = require("../lib/config");

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

const generateTable = data => {
    let table = "<table>" +
        "<thead>" +
        "<tr><th>Заявка на собеседование</th></tr>" +
        "</thead>" +
        "<tbody>";

    data.forEach(value => table+= `<tr><td style='font-weight:bold'>${value.name}</td><td>${value.value}</td></tr>`)

    table += "</tbody></table>"

    return table;
}

app
    .prepare()
    .then(() => {
        const server = express();

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.use(bodyParser.json()).post('/api/email', async (req, res) => {
            const { data : msg } = req.body; //We will use this later
            const data = [
                { name: 'Название компании', value: msg.company_name},
                { name: 'Сайт компании', value: msg.company_site},
                { name: 'Имя', value: msg.person_first_name},
                { name: 'Фамилия', value: msg.person_last_name},
                { name: 'Отчество', value: msg.person_middle_name},
                { name: 'Соц.сети', value: msg.person_site},
                { name: 'Email', value: msg.person_email},
                { name: 'Дата', value: msg.date_date},
                { name: 'Время', value: msg.date_time},
                { name: 'Продолжительность', value: msg.date_duration},
                { name: 'Занимаемая должность', value: msg.offer_position},
                { name: 'Сумма вознаграждения', value: msg.offer_salary},
                { name: 'Описание предложения', value: msg.offer_description},
                { name: 'Источник', value: msg.source_source},
                { name: 'Деньги отправили', value: msg.sendToBankCard},
            ]
            // company_name: 'test'
            // company_site: 'test'
            // person_first_name: 'Александр'
            // person_last_name: 'Чухрай'
            // person_middle_name: 'Анатальевич'
            // person_site: 'инстаграм'
            // person_email: 'some email'
            // date_date: '10.12.20'
            // date_time: '10.30'
            // date_duration: '1 час'
            // offer_position: 'фронтенд разработчик'
            // offer_salary: '10 000 грн'
            // offer_description: 'Описание предложения'
            // source_source: 'Источник'
            // sendToBankCard: true

            const transporter = nodemailer.createTransport({
                pool: true,
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: config.email,
                    pass: config.email_pass
                }
            });

            // TODO: записывать логи отправки писем в отдельный файл
            // send mail with defined transport object
            // let info = await transporter.sendMail({
            //     from: `<${msg.person_email}>`, // sender address
            //     to: "zimmalex6@gmail.com", // list of receivers
            //     subject: "Заявка на собеседование", // Subject line
            //     text: "Заявка на собеседование", // plain text body
            //     html: generateTable(data) // html
            // });

            // console.log(info);

            res.status(200).send({info: 'success'});
        });

        server.listen(3001, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });