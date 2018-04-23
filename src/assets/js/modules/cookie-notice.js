(() => {
    const cookieName = 'cookiesAccepted';
    const buttonText = 'That\'s ok with me';
    const noticeText = 'Hello! Our website uses cookies to help us provide you with the best user experience and to ' +
        'deliver customised experiences. You can find out more about the cookies we use and your cookie choices, ' +
        '<a href="https://pod-point.com/technical/privacy-policy" target="_blank">here</a>. ' +
        'If you continue to use our services, we’ll assume you’re ok with this.';

    /**
     * Sets the cookie accepting the terms.
     *
     * @param name
     */
    const setCookie = name => {
        const date = new Date(new Date().setFullYear(new Date().getFullYear() + 10));
        document.cookie = `${name}=1; path=/; expires=${date.toUTCString()}`;
    };

    /**
     * Checks if the terms cookie is present.
     *
     * @param name
     */
    const hasCookie = name => document.cookie.split('; ').reduce((previous, value) => {
        const parts = value.split('=');
        return parts[0] === name ? true : previous;
    }, false);

    /**
     * Remove the notice html element.
     *
     * @param noticeDiv
     */
    const removeNotice = noticeDiv => {
        noticeDiv.parentNode.removeChild(noticeDiv);
        setCookie(cookieName);
    };

    /**
     * Create the notice html element and append to the body tag.
     */
    const showNotice = () => {
        const noticeDiv = document.createElement('div');
        noticeDiv.className = 'pos-fix pin-bottom-left width-100 p-a-md bg-dark-grey';

        const rowDiv = document.createElement('div');
        rowDiv.className = 'row row--v-gutter-xs';

        const rowColMain = document.createElement('div');
        rowColMain.className = 'row__col row__col-grow';

        const rowColButton = document.createElement('div');
        rowColButton.className = 'row__col row__col-centre';

        const noticeButton = document.createElement('button');
        noticeButton.className = 'btn btn--secondary';
        noticeButton.innerHTML = buttonText;
        noticeButton.onclick = () => removeNotice(noticeDiv);

        const noticeTextP = document.createElement('p');
        noticeTextP.className = 'p-b-none font-size-sm';
        noticeTextP.innerHTML = noticeText;

        rowColMain.appendChild(noticeTextP);
        noticeDiv.appendChild(rowDiv);
        rowDiv.appendChild(rowColMain);
        rowDiv.appendChild(rowColButton);

        rowColButton.appendChild(noticeButton);
        document.body.appendChild(noticeDiv);
    };

    if (!hasCookie(cookieName)) {
        showNotice();
    }
})();
