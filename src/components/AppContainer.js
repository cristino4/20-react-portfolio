import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Passions from './pages/Passions';
import Resume from './pages/Resume';



const AppContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About handlePageChange={(page)=>setCurrentPage(page)}/>;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } else if (currentPage === 'Passions') {
            return <Passions />;
        } else if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className='flex justify-center w-full'>
            <div className='flex flex-col bg:white dark:bg-black w-8/12'>
                <Header currentPage = {currentPage} handlePageChange = {handlePageChange}/>
                {renderPage()}
                <Footer />
            </div>
        </div>
    )
};

export default AppContainer;