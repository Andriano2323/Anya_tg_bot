from pyrogram import Client, filters
"""
This script creates a Telegram bot using the Pyrogram library. The bot is designed to promote Telegram channels and groups.
Modules:
Functions:
    start(client, message): Handles the /start command and sends a welcome message with an inline keyboard button.
Bot Instance:
    app: An instance of the Client class, initialized with the bot's API credentials.
Handlers:
    @app.on_message(filters.command(["start"])): Registers the start function to handle the /start command.
Execution:
    app.run(): Starts the bot.
"""
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
        "Добро пожаловать. Я бот для продвижения ваших каналов и групп в Telegram.",
        reply_markup=InlineKeyboardMarkup([
            [InlineKeyboardButton(
                "Запустить бот!",
                web_app=WebAppInfo(url="https://andriano2323.github.io/Anya_tg_bot/")  # Use your hosted Web App
            )]
        ])
    )

app.run()