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
        user_id = message.from_user.id
        web_app_url = f"https://andriano2323.github.io/Anya_tg_bot/?user_id={user_id}"
        message.reply_text(
            "👋 Welcome! Click the button below to open the interactive web app.",
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton(
                    "Open Web App",
                    web_app=WebAppInfo(url=web_app_url)
                )]
            ])
        )
    except Exception as e:
        print(f"Error: {e}")
        message.reply_text("❌ An error occurred. Please try again later.")

app.run()
