export const register = async page => {
  await page.evaluateOnNewDocument(() => {
    window.pageContext = {
      scrollToBottom: () =>
        window.scrollBy(0, window.innerHeight),

      querySelectorWithText: ({ element = document, selector, text }) =>
        Array.from(element.querySelectorAll(selector))
          .find(n =>
            text instanceof RegExp ?
              text.test(n.textContent)
              :
              n.textContent.includes(text))
    };
  });
};

