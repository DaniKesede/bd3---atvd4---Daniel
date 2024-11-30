const database = "BD3_ATVD4_DANIEL"

const collection = "BD3_ATVD4_CHAT"

use(database)

db.getCollection(collection).insertMany(
    [
        {
            "message": "Maria, você viu meus tênis? Eu não acho em lugar nenhum.",
            "hourSent": "19:30",
            "dateSent": "2024-11-30",
            "sender": "João",
            "senderNumber": "11912345678"
        },
        {
            "message": "Não vi, João. Você já olhou perto da porta ou no armário do corredor?",
            "hourSent": "19:32",
            "dateSent": "2024-11-30",
            "sender": "Maria",
            "senderNumber": "11987654321"
        },
        {
            "message": "Já procurei lá, mas não estão. Será que alguém guardou em outro lugar?",
            "hourSent": "19:34",
            "dateSent": "2024-11-30",
            "sender": "João",
            "senderNumber": "11912345678"
        },
        {
            "message": "Pode ser... Vou dar uma olhada no quarto. Às vezes você deixa as coisas lá sem perceber.",
            "hourSent": "19:36",
            "dateSent": "2024-11-30",
            "sender": "Maria",
            "senderNumber": "11987654321"
        }
    ]
)