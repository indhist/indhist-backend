const axios = require('axios');
const config = require('../../config/config');


// Function to send error logs as an embed card
const sendErrorToDiscord = async (error) => {
    const embed = {
        username: 'Error Logger Bot', // Optional: Set a custom username for the webhook
        avatar_url: 'https://i.imgur.com/AfFp7pu.png', // Optional: Bot avatar
        embeds: [
            {
                title: '🚨 Error Alert',
                description: 'An error occurred in the application.',
                color: 16711680, // Red color (decimal for #FF0000)
                fields: [
                    {
                        name: 'Error Message',
                        value: error.message || 'No message provided',
                        inline: false,
                    },
                    {
                        name: 'Stack Trace',
                        value: `\`\`\`${error.stack || 'No stack trace available'}\`\`\``,
                        inline: false,
                    },
                ],
                footer: {
                    text: 'Error Logger Bot',
                    icon_url: 'https://i.imgur.com/AfFp7pu.png', // Optional footer icon
                },
                timestamp: new Date().toISOString(),
            },
        ],
    };

    try {
        await axios.post(config.discordWebHookURL, embed, {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('Error log sent to Discord successfully.');
    } catch (err) {
        console.error('Failed to send error log to Discord:', err.message);
    }
};

// Example usage
try {
    throw new Error('This is a test error!');
} catch (err) {
    sendErrorToDiscord(err);
}

module.exports = { sendErrorToDiscord };
