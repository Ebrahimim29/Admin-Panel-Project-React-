const LeftContent = () => {
    return (
        <div className="flex items-center gap-4 text-white relative">
            <div className="relative group">
                <i className="fas fa-grip-vertical text-2xl cursor-pointer"></i>
                <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 shadow-lg rounded-lg p-2 w-48 hidden group-hover:block z-50">
                    <li className="my-2 text-center font-medium">محمد میرابراهیمی</li>
                    <li className="my-2 flex items-center gap-2 px-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-tachometer-alt"></i>
                        <a href="#">داشبورد</a>
                    </li>
                    <li className="my-2 flex items-center gap-2 px-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-paper-plane"></i>
                        <a href="#">تیکت ها</a>
                    </li>
                    <li className="my-2 flex items-center gap-2 px-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-envelope"></i>
                        <a href="#">پیام ها</a>
                    </li>
                    <hr className="my-2" />
                    <li className="flex items-center gap-2 px-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-power-off"></i>
                        <a href="#">خروج</a>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <i className="far fa-bell text-2xl cursor-pointer"></i>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </div>
            <i className="fas fa-search text-2xl cursor-pointer"></i>
        </div>
    )
};

export default LeftContent;
