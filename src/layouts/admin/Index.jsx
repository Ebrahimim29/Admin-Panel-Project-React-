const Index = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 right-0 left-0 z-50 h-14 bg-gray-700 flex items-center">
                <div className="container-fluid h-full flex items-center justify-between px-4">
                    {/* Right Section */}
                    <div className="flex items-center h-full bg-gray-800 px-3 py-1 rounded">
                        <a className="h-full flex items-center" href="/">
                            <img src="/assets/images/logo.png" className="h-full" alt="logo" />
                        </a>
                        <div className="form-check form-switch mx-4 hidden md:block">
                            <input
                                id="handle_toggle_sidemenu"
                                className="w-8 h-4 bg-gray-600 rounded-full appearance-none cursor-pointer checked:bg-blue-500 transition-colors duration-200 relative"
                                type="checkbox"
                            />
                        </div>
                    </div>

                    {/* Left Section */}
                    <div className="flex items-center gap-3">
                        <i className="fas fa-grip-vertical text-2xl cursor-pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu mini_menu absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48" aria-labelledby="dropdownMenuButton1">
                            <li className="my-2 text-center font-medium">محمد میرابراهیمی</li>
                            <li className="my-2 flex items-center gap-2 px-2">
                                <i className="fas fa-tachometer-alt"></i>
                                <a className="dropdown-item" href="#">داشبورد</a>
                            </li>
                            <li className="my-2 flex items-center gap-2 px-2">
                                <i className="fas fa-paper-plane"></i>
                                <a className="dropdown-item" href="#">تیکت ها</a>
                            </li>
                            <li className="my-2 flex items-center gap-2 px-2">
                                <i className="fas fa-envelope"></i>
                                <a className="dropdown-item" href="#">پیام ها</a>
                            </li>
                            <hr className="my-2" />
                            <li className="flex items-center gap-2 px-2">
                                <i className="fas fa-power-off"></i>
                                <a className="dropdown-item" href="#">خروج</a>
                            </li>
                        </ul>
                        <div className="relative">
                            <i className="far fa-bell text-2xl cursor-pointer">
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                            </i>
                        </div>
                        <i className="fas fa-search text-2xl cursor-pointer"></i>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside className="fixed top-14 right-0 bottom-0 w-64 bg-gray-800 overflow-y-auto transition-all duration-300 z-40">
                <div className="flex flex-col h-full">
                    <ul className="p-0 m-0 space-y-1">
                        <li className="pt-4 pb-3 flex flex-col items-center border-b border-gray-700">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
                                <img className="w-full h-full object-cover" src="/assets/images/avatar/user2.jpg" alt="avatar" />
                            </div>
                            <div className="text-white text-sm mt-2">محمد میرابراهیمی</div>
                        </li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer bg-gray-700 rounded mx-2 mt-2">
                            <i className="fas fa-tachometer-alt text-white"></i>
                            <span className="text-white text-sm">داشبورد</span>
                        </li>

                        <li className="px-4 py-2 text-gray-400 text-xs font-bold uppercase">فروشگاه</li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-stream text-white"></i>
                            <span className="text-white text-sm">مدیریت گروه محصول</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-cube text-white"></i>
                            <span className="text-white text-sm">مدیریت محصول</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-copyright text-white"></i>
                            <span className="text-white text-sm">مدیریت برند ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fab fa-pagelines text-white"></i>
                            <span className="text-white text-sm">مدیریت گارانتی ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-palette text-white"></i>
                            <span className="text-white text-sm">مدیریت رنگ ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-percentage text-white"></i>
                            <span className="text-white text-sm">مدیریت تخفیف ها</span>
                        </li>

                        <li className="px-4 py-2 text-gray-400 text-xs font-bold uppercase">سفارشات و سبد</li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-shopping-basket text-white"></i>
                            <span className="text-white text-sm">مدیریت سبد ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-luggage-cart text-white"></i>
                            <span className="text-white text-sm">مدیریت سفارشات</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-truck-loading text-white"></i>
                            <span className="text-white text-sm">مدیریت نحوه ارسال</span>
                        </li>

                        <li className="px-4 py-2 text-gray-400 text-xs font-bold uppercase">کاربران و همکاران</li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-users text-white"></i>
                            <span className="text-white text-sm">مشاهده کاربران</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-user-tag text-white"></i>
                            <span className="text-white text-sm">نقش ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-shield-alt text-white"></i>
                            <span className="text-white text-sm">مجوز ها</span>
                        </li>

                        <li className="px-4 py-2 text-gray-400 text-xs font-bold uppercase">ارتباطات</li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-question-circle text-white"></i>
                            <span className="text-white text-sm">سوال ها</span>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors">
                            <i className="fas fa-comment text-white"></i>
                            <span className="text-white text-sm">نظرات</span>
                        </li>

                        <li className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-700 rounded mx-2 transition-colors relative group">
                            <i className="fas fa-check text-white"></i>
                            <span className="text-white text-sm">داشبورد</span>
                            <ul className="absolute right-full top-0 mr-2 bg-white shadow-lg rounded-lg p-2 w-40 hidden group-hover:block">
                                <li className="py-1 px-2 hover:bg-gray-100 rounded">اول</li>
                                <li className="py-1 px-2 hover:bg-gray-100 rounded">دوم</li>
                                <li className="py-1 px-2 hover:bg-gray-100 rounded">سوم</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 mt-14 mr-64 bg-gray-100 p-3 overflow-y-auto min-h-screen">
                {/* Content goes here */}
            </main>
        </div>

    )
};

export default Index;