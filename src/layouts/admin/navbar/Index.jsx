import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Index = () => {
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 h-14 bg-gray-700 flex items-center">
            <div className="w-full h-full flex items-center justify-between px-4">
                <RightContent />
                <LeftContent />
            </div>
        </nav>
    )
};

export default Index;
