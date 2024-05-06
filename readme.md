# 🤖 Discord Sec. Bot 🚀

Welcome to my Discord bot project! This bot is designed to manage user logins and kick inactive users from the server after a certain period of time.

## 🛠️ Installation

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Configure the bot by filling in the necessary information in `config.js`.
4. Run the bot with `node index.js`.

## ⚙️ Configuration

In order to configure the bot, you need to provide the following information in the `config.js` file:

- `token`: Your bot's token obtained from the Discord Developer Portal.
- `password`: The password required for users to log in to the bot.
- `prefix`: The prefix used to invoke commands (e.g., `!`, `?`, `;`).
- `guildID`: The ID of the Discord guild where the bot will operate.

## 📝 Usage

Once the bot is up and running, users can interact with it using the following commands:

- `!login <password>`: Logs the user in if the provided password is correct.
- Other commands: Any other command prefixed with the specified prefix will be considered invalid.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## 📬 Feedback

If you have any feedback, suggestions, or issues regarding the bot, feel free to open an issue on this repository or contact me directly.

Happy botting! 👾