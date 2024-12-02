from pyrogram import Client, filters
from pyrogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

# Create the bot instance
app = Client(
    "promo_bot",
    api_id="22365962",
    api_hash="e6c88df77ef3043dd7c6aac6949553b4",
    bot_token="7370486405:AAG77c_r14tJYq9LKijiRF5pA8lXqYDkXY0"
)

@app.on_message(filters.command(["start"]))
def start(client, message):
    message.reply_text(
        "Click the button below to open the interactive web app!",
        reply_markup=InlineKeyboardMarkup([
            [InlineKeyboardButton(
                "Open Web App",
                web_app=WebAppInfo(url="https://github.com/Andriano2323/Anya_tg_bot/tree/main/web_app")  # Use your hosted Web App
            )]
        ])
    )

app.run()