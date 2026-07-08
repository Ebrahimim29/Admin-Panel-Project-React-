import Navbar from './navbar/Index'
import Sidebar from './sidebar/Index'

const Index = () => {
    return (
        <div className="flex h-screen overflow-hidden">
     
                <Navbar/>     
                <Sidebar/>

            {/* Main Content */}
            <main className="flex-1 mt-14 mr-64 bg-gray-100 p-3 overflow-y-auto min-h-screen">
                {/* Content goes here */}
            </main>
        </div>

    )
};

export default Index;