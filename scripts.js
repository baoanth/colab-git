document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('actionButton');

    button.addEventListener('click', function () {
        const members = [
            { name: 'Tom', icon: '🐱' },
            { name: 'Jerry', icon: '🐭' },
            { name: 'Spike', icon: '🐶' }
        ];

        let message = '👥 Thành viên nhóm:\n\n';
        members.forEach(member => {
            message += `${member.icon} ${member.name}\n`;
        });

        alert(message);
    });
});
