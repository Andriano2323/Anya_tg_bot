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
    try:
        web_app_url = "https://andriano2323.github.io/Anya_tg_bot/"  # Static URL without user_id
        message.reply_text(
            "👋 Добро пожаловать!",
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton(
                    "Запустить бот.",
                    web_app=WebAppInfo(url=web_app_url)
                )]
            ])
        )
    except Exception as e:
        print(f"Error: {e}")
        message.reply_text("❌ An error occurred. Please try again later.")

app.run()
