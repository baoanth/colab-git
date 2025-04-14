document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('actionButton');

    button.addEventListener('click', function () {
        const members = [
            { name: 'Tom', icon: '🐱' },
            { name: 'Jerry', iconImg: 'img/jerry_in.jpg' },
            { name: 'Spike', iconImg: 'img/spike.jpg' }
        ];

        // Tạo hộp hiển thị thành viên
        const container = document.createElement('div');
        container.style.padding = '20px';
        container.style.background = '#fff';
        container.style.border = '2px solid #333';
        container.style.borderRadius = '10px';
        container.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.zIndex = '9999';
        container.style.textAlign = 'center';

        const title = document.createElement('h2');
        title.textContent = '👥 Thành viên nhóm';
        container.appendChild(title);

        members.forEach(member => {
            const item = document.createElement('div');
            item.style.margin = '10px';

            if (member.icon) {
                item.textContent = `${member.icon} ${member.name}`;
            } else if (member.iconImg) {
                const img = document.createElement('img');
                img.src = member.iconImg;
                img.alt = member.name;
                img.style.width = '40px';
                img.style.height = '40px';
                img.style.verticalAlign = 'middle';
                img.style.marginRight = '8px';

                const span = document.createElement('span');
                span.textContent = member.name;
                span.style.fontSize = '1.2em';

                item.appendChild(img);
                item.appendChild(span);
            }

            container.appendChild(item);
        });

        // Nút đóng
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Đóng';
        closeButton.style.marginTop = '20px';
        closeButton.onclick = function () {
            document.body.removeChild(container);
        };
        container.appendChild(closeButton);

        document.body.appendChild(container);
    });
});
