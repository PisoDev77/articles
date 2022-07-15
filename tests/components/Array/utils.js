const utils = {
    setHeader : (str, header) => {
        const $header = document.createElement(header);
        $header.innerText = str; 
        return $header;
    }
}

export default utils;