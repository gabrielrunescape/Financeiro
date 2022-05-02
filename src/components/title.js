import {useRef, useEffect} from 'react';

const useDocumentTitle = (title, prevailOnMount = false) => {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnMount) {
            document.title = defaultTitle.current;
        }
    }, []);
}

export default useDocumentTitle;