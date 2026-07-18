const RightContent = () => {
    return (
        <div className="flex items-center h-10 bg-gray-800 px-3 rounded gap-3">
            <a className="h-8 flex items-center" href="/">
                <img src="/assets/images/Logo.jpg" className="h-full object-contain" alt="logo" />
            </a>
            <div className="form-check form-switch mx-4 hidden md:block">
                <input
                    id="handle_toggle_sidemenu"
                    className="w-8 h-4 bg-gray-600 rounded-full appearance-none cursor-pointer checked:bg-blue-500 transition-colors duration-200 relative"
                    type="checkbox"
                />
            </div>
        </div>
    )
};

export default RightContent;