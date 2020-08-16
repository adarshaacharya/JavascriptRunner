import useForm from 'hooks/use-form';
import React from 'react';
import { toast } from 'react-toastify';
import CodeContext from '_context/code/code.context';
import './save-snippet.style.css';

const SaveSnippet: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const initialVal = { title: '' };
    const [formData, handleInput] = useForm(initialVal);

    const notifySubmission = () => toast('Code has been saved successfully 😎');

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSnippet({
            title: formData.title!,
            sourceCode: code,
            language,
        });
        notifySubmission();
    };

    return (
        <>
            <form onSubmit={onFormSubmit} autoComplete='off'>
                <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Type snippet title..'
                    value={formData.title}
                    onChange={handleInput}
                    required
                />

                <button className='save__snippet' type='submit'>
                    Save Snippet
                </button>
            </form>
        </>
    );
};

export default SaveSnippet;
