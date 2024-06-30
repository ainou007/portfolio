export const useGoto = () => {
  const goToEl = (hash: string) => {
    console.log('first');

    const el = document.getElementById(hash);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 81 });
    }
  };

  return goToEl;
};
