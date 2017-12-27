let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time})
        id++;
        res.status(200).send(messages);
        console.log(`REQ.BODY`, req.body);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const updateID = req.params.id;
        let indexOfMessage = messages.findIndex(message => message.id == updateID);

        messages[indexOfMessage] = {
            id: messages[indexOfMessage].id,
            text: req.body.text || messages[indexOfMessage].text,
            time: req.body.time || messages[indexOfMessage].time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        let indexOfMessage = messages.findIndex(message => message.id == deleteID);
        messages.splice(indexOfMessage, 1)
        res.status(200).send(messages)
    }
}