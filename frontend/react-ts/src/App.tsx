
import * as React from 'react';

const App = () => {
    const [fileContent, setFileContent] = React.useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target?.result as string);
            };
            reader.readAsText(file);
        }
    };

    return (
        <form className=''>
            <input type="file" onChange={handleFileChange} />
            <p className=''>File content:</p>
            <pre>{fileContent}</pre>
        </form>
    );
};

export default App
