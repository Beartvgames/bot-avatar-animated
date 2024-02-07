const fs = require('fs');

const token = 'YOUR_TOKEN'; //replace YOUR_TOKEN by your token

async function animatedAvatar() {
    try {
        const newAvatar = fs.readFileSync('./image/avatar.gif'); 
        const response = await fetch('https://discord.com/api/v9/users/@me', {
            method: 'PATCH',
            headers: {
                Authorization: `Bot ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: `data:image/gif;base64,${newAvatar.toString('base64')}`
            })
        });

        if (response.ok) {
            console.log('The avatar updated successfully!');
        } else {
            console.error('Failed to update your avatar:', response.statusText);
            const responseBody = await response.text();
            console.error('Response body:', responseBody);
        }
    } catch (error) {
        console.error('Error updating your avatar:', error);
    }
}

animatedAvatar();
