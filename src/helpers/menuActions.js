export const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            console.log(`Changed language to ${menuItem.language}`);
            // Thực hiện thay đổi ngôn ngữ
            break;
        case 'darkMode':
            console.log('Toggled Dark Mode');
            // Thực hiện thay đổi chế độ tối
            break;
        case 'Log out':
            console.log('Logging out...');
            // Thực hiện đăng xuất (show modal, gọi API...)
            break;
        default:
            console.log('Unknown action type');
    }
};